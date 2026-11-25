'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { parseCsv, serializeCsv, parseArgs, sync } = require('./issue-sync');

const repository = 'Rmh1978/redSHOP-rmh';
const revision = 'a'.repeat(40);
const ledgerRow = {
    review_id: 'CODE-012', github_repository: repository, issue_number: '', issue_url: '', priority: 'P1',
    component: 'library', functional_area: 'coupons', evidence_status: 'Source verified',
    sync_status: 'pending-sync', last_verified_revision: revision, last_synchronization: '', blocker_or_exception: ''
};
const finding = {
    id: 'CODE-012', status: 'OPEN', title: 'Coupon count rejects one remaining use',
    file: 'libraries/redshop/src/Helper/CartDiscount.php', line: '146', problem: 'Count one is rejected.',
    actual: 'One is rejected.', expected: 'One is accepted.', customer_impact: 'Customer cannot redeem.',
    source_references: 'Source inspection', proposed_fix: 'Correct the boundary.', regression_risks: 'Counts.',
    automated_tests: 'Test counts 0, 1 and 2.', manual_tests: 'Test in an isolated shop.',
    joomla_5_6: 'Not tested.', original_review: 'CODE-012', documentation: 'discounts/coupon.md',
    evidence_state: 'Source-level defect'
};

function table(rows) {
    return { header: Object.keys(rows[0]), rows };
}

function fakeApi() {
    const issues = [];
    const comments = [];
    const labels = ['priority:P1', 'component:library', 'area:coupons', 'type:bug',
        'status:needs-verification', 'source:docs-review'].map(name => ({ name }));
    return {
        issuesData: issues,
        commentsData: comments,
        repository: async () => ({ full_name: repository, private: true, permissions: { push: true } }),
        labels: async () => labels,
        issues: async () => issues,
        issue: async number => issues.find(issue => String(issue.number) === String(number)),
        createIssue: async data => {
            const issue = Object.assign({ number: 60, html_url: 'https://github.com/test/issues/60', state: 'open' }, data);
            issues.push(issue);
            return issue;
        },
        comments: async () => comments,
        createComment: async (number, body) => { comments.push({ body }); },
        createLabel: async label => { labels.push(label); }
    };
}

async function run() {
    const csv = serializeCsv(table([{ name: 'a,"b"\nsecond line', value: 'x' }]));
    assert.deepStrictEqual(parseCsv(csv).rows[0], { name: 'a,"b"\nsecond line', value: 'x' });
    assert.throws(() => parseCsv('a,b\n"unfinished'), /Unterminated/);
    assert.throws(() => parseArgs(['--ids', 'CODE-012', '--all']), /Use --all or --ids/);
    assert.throws(() => parseArgs(['--ids', 'not-an-id']), /Invalid review ID/);
    assert.throws(() => parseArgs(['--ids', 'CODE-012', '--distinct-from', 'broken']), /Invalid distinct-from/);
    assert.deepStrictEqual(parseArgs(['--ids', 'AUD-003-008,M-0122']).ids, ['AUD-003-008', 'M-0122']);
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'redshop-issue-sync-'));
    const ledger = path.join(directory, 'ledger.csv');
    const findings = path.join(directory, 'findings.csv');
    try {
        fs.writeFileSync(ledger, serializeCsv(table([ledgerRow])));
        fs.writeFileSync(findings, serializeCsv(table([finding])));
        const api = fakeApi();
        const dry = parseArgs(['--ids', 'CODE-012']);
        const apply = parseArgs(['--ids', 'CODE-012', '--apply']);
        let result = await sync(api, dry, ledger, findings, () => {});
        assert.strictEqual(result.pendingSync, 1);
        assert.strictEqual(api.issuesData.length, 0);
        assert.strictEqual(parseCsv(fs.readFileSync(ledger, 'utf8')).rows[0].sync_status, 'pending-sync');
        result = await sync(api, apply, ledger, findings, () => {});
        assert.strictEqual(result.created, 1);
        assert.strictEqual(parseCsv(fs.readFileSync(ledger, 'utf8')).rows[0].issue_number, '60');
        result = await sync(api, apply, ledger, findings, () => {});
        assert.strictEqual(result.unchanged, 1);
        assert.strictEqual(api.issuesData.length, 1);

        api.issues = async () => [];
        result = await sync(api, dry, ledger, findings, () => {});
        assert.strictEqual(result.unchanged, 1);
        assert.strictEqual(api.issuesData.length, 1);
        const savedBody = api.issuesData[0].body;
        api.issuesData[0].body = 'No review marker';
        result = await sync(api, apply, ledger, findings, () => {});
        assert.strictEqual(result.blocked, 1);
        assert.strictEqual(api.issuesData.length, 1);
        api.issuesData[0].body = savedBody;
        api.issuesData[0].state = 'closed';
        result = await sync(api, apply, ledger, findings, () => {});
        assert.strictEqual(result.blocked, 1);
        assert.strictEqual(api.issuesData.length, 1);
        api.issuesData[0].state = 'open';
        const getIssue = api.issue;
        api.issue = async () => { throw new Error('HTTP 429'); };
        await assert.rejects(sync(api, apply, ledger, findings, () => {}), /HTTP 429/);
        assert.strictEqual(api.issuesData.length, 1);
        api.issue = getIssue;
        api.issues = async () => api.issuesData;

        fs.writeFileSync(findings, serializeCsv(table([Object.assign({}, finding, { actual: 'Updated evidence.' })])));
        result = await sync(api, apply, ledger, findings, () => {});
        assert.strictEqual(result.updated, 1);
        await sync(api, apply, ledger, findings, () => {});
        assert.strictEqual(api.commentsData.length, 1);
        api.issuesData[0].body += '\nHuman edit';
        result = await sync(api, apply, ledger, findings, () => {});
        assert.strictEqual(result.blocked, 1);
        assert.strictEqual(api.commentsData.length, 1);

        const duplicateApi = fakeApi();
        duplicateApi.issuesData.push({ title: finding.title, body: '', state: 'closed', number: 1 });
        fs.writeFileSync(ledger, serializeCsv(table([ledgerRow])));
        result = await sync(duplicateApi, apply, ledger, findings, () => {});
        assert.strictEqual(result.blocked, 1);
        assert.strictEqual(duplicateApi.issuesData.length, 1);
        const reviewed = parseArgs(['--ids', 'CODE-012', '--distinct-from', 'CODE-012:1', '--apply']);
        result = await sync(duplicateApi, reviewed, ledger, findings, () => {});
        assert.strictEqual(result.created, 1);
        assert.match(parseCsv(fs.readFileSync(ledger, 'utf8')).rows[0].blocker_or_exception, /Distinct from #1/);

        const failingApi = fakeApi();
        failingApi.createIssue = async () => { throw new Error('HTTP 429; retry after 60 seconds'); };
        fs.writeFileSync(ledger, serializeCsv(table([ledgerRow])));
        await assert.rejects(sync(failingApi, apply, ledger, findings, () => {}), /HTTP 429/);
        assert.strictEqual(parseCsv(fs.readFileSync(ledger, 'utf8')).rows[0].sync_status, 'pending-sync');

        fs.writeFileSync(ledger, serializeCsv(table([Object.assign({}, ledgerRow, { sync_status: 'pending-review' })])));
        result = await sync(fakeApi(), apply, ledger, findings, () => {});
        assert.strictEqual(result.pendingReview, 1);
        fs.writeFileSync(ledger, serializeCsv(table([ledgerRow])));
        fs.writeFileSync(findings, serializeCsv(table([Object.assign({}, finding, { evidence_state: 'Security investigation' })])));
        result = await sync(fakeApi(), apply, ledger, findings, () => {});
        assert.strictEqual(result.blocked, 1);
    } finally {
        for (const filename of [ledger, findings]) if (fs.existsSync(filename)) fs.unlinkSync(filename);
        fs.rmdirSync(directory);
    }
    console.log('Issue synchronization tests passed.');
}

run().catch(error => { console.error(error); process.exitCode = 1; });
