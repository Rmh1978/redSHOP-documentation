'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const childProcess = require('child_process');

const REPOSITORY = 'Rmh1978/redSHOP-rmh';
const ROOT = __dirname;
const LEDGER = path.join(ROOT, 'ISSUE-SYNC-REGISTER.csv');
const FINDINGS = path.join(ROOT, 'CORE-BUGS.csv');
const TAXONOMY = {
    priority: ['P0', 'P1', 'P2', 'P3'],
    component: ['core', 'plugin', 'module', 'library', 'template', 'marketplace', 'documentation', 'build', 'other'],
    area: ['checkout', 'payments', 'shipping', 'orders', 'products', 'categories', 'discounts', 'coupons', 'giftcards',
        'users', 'stock', 'media', 'upload-download', 'import-export', 'installation', 'updates', 'security', 'api',
        'integrations', 'frontend', 'administration', 'configuration', 'marketplace', 'seo', 'performance', 'database', 'other'],
    type: ['bug', 'investigation', 'security', 'enhancement', 'technical-debt', 'compatibility', 'regression'],
    status: ['needs-verification', 'confirmed', 'blocked', 'in-progress', 'needs-testing', 'needs-review'],
    source: ['docs-review', 'manual', 'automated-test', 'code-review'],
    compatibility: ['joomla5', 'joomla6', 'php']
};
const COLORS = { priority: 'd73a4a', component: '1d76db', area: '0e8a16', type: '7057ff',
    status: 'fbca04', source: 'bfdadc', compatibility: 'c5def5' };
const PRIORITY_COLORS = { P0: 'd73a4a', P1: 'd93f0b', P2: '1d76db', P3: 'cfd3d7' };

function parseCsv(text) {
    text = text.replace(/^\uFEFF/, '');
    const records = [];
    let record = [];
    let value = '';
    let quoted = false;
    let afterQuote = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (quoted) {
            if (char === '"' && text[i + 1] === '"') {
                value += '"';
                i++;
            } else if (char === '"') {
                quoted = false;
                afterQuote = true;
            } else {
                value += char;
            }
        } else if (char === '"' && value === '' && !afterQuote) {
            quoted = true;
        } else if (char === ',' || char === '\r' || char === '\n') {
            record.push(value);
            value = '';
            afterQuote = false;
            if (char !== ',') {
                if (char === '\r' && text[i + 1] === '\n') i++;
                records.push(record);
                record = [];
            }
        } else {
            if (afterQuote || char === '"') throw new Error('Malformed CSV');
            value += char;
        }
    }
    if (quoted) throw new Error('Unterminated quoted CSV value');
    if (record.length || value || afterQuote) {
        record.push(value);
        records.push(record);
    }
    if (!records.length) throw new Error('Empty CSV');
    const header = records.shift();
    if (new Set(header).size !== header.length) throw new Error('Duplicate CSV columns');
    const rows = records.map(fields => {
        if (fields.length !== header.length) throw new Error('CSV column count mismatch');
        return Object.fromEntries(header.map((key, index) => [key, fields[index]]));
    });
    return { header, rows };
}

function serializeCsv(table) {
    const encode = value => `"${String(value).replace(/"/g, '""')}"`;
    return '\uFEFF' + [table.header, ...table.rows.map(row => table.header.map(key => row[key]))]
        .map(row => row.map(encode).join(',')).join('\r\n') + '\r\n';
}

function credential() {
    if (process.env.GH_TOKEN || process.env.GITHUB_TOKEN) return process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
    const result = childProcess.spawnSync('git', ['credential', 'fill'], {
        input: 'protocol=https\nhost=github.com\n\n',
        encoding: 'utf8',
        env: Object.assign({}, process.env, { GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never' }),
        windowsHide: true
    });
    if (result.error || result.status !== 0) throw new Error('No noninteractive GitHub credential available');
    const match = result.stdout.match(/^password=(.+)$/m);
    if (!match) throw new Error('Credential helper returned no GitHub token');
    return match[1].replace(/\r$/, '');
}

function request(token, method, urlPath, body) {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'api.github.com', path: urlPath, method,
            headers: {
                Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json',
                'User-Agent': 'redshop-review-sync', 'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/json'
            }
        }, response => {
            let data = '';
            response.setEncoding('utf8');
            response.on('data', chunk => { data += chunk; });
            response.on('end', () => {
                if (response.statusCode < 200 || response.statusCode >= 300) {
                    const retry = response.headers['retry-after'];
                    const reset = response.headers['x-ratelimit-reset'];
                    reject(new Error(`GitHub ${method} ${urlPath} HTTP ${response.statusCode}`
                        + (retry ? `; retry after ${retry} seconds` : '')
                        + (reset ? `; rate limit reset epoch ${reset}` : '')));
                    return;
                }
                try {
                    resolve(data ? JSON.parse(data) : null);
                } catch (error) {
                    reject(new Error(`Invalid GitHub JSON response: ${error.message}`));
                }
            });
        });
        req.setTimeout(30000, () => req.destroy(new Error('GitHub request timed out')));
        req.on('error', reject);
        req.end(body === undefined ? undefined : JSON.stringify(body));
    });
}

function github(token) {
    const base = `/repos/${REPOSITORY}`;
    async function pages(endpoint) {
        const all = [];
        for (let page = 1; page <= 1000; page++) {
            const separator = endpoint.includes('?') ? '&' : '?';
            const rows = await request(token, 'GET', `${base}${endpoint}${separator}per_page=100&page=${page}`);
            if (!Array.isArray(rows)) throw new Error(`Unexpected paginated response for ${endpoint}`);
            all.push(...rows);
            if (rows.length < 100) return all;
        }
        throw new Error(`Pagination limit reached for ${endpoint}`);
    }
    return {
        repository: () => request(token, 'GET', base),
        issues: async () => (await pages('/issues?state=all')).filter(issue => !issue.pull_request),
        issue: number => request(token, 'GET', `${base}/issues/${number}`),
        labels: () => pages('/labels'),
        createLabel: label => request(token, 'POST', `${base}/labels`, label),
        createIssue: issue => request(token, 'POST', `${base}/issues`, issue),
        comments: number => pages(`/issues/${number}/comments`),
        createComment: (number, body) => request(token, 'POST', `${base}/issues/${number}/comments`, { body })
    };
}

function sha(text) {
    return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
}

function marker(id, hash) {
    return `<!-- redshop-review:${id} sha256:${hash} -->`;
}

function render(finding, row) {
    if (!/^[A-Z]+(?:-[A-Z0-9]+)+$/.test(row.review_id) || !/^[0-9a-f]{40}$/.test(row.last_verified_revision)
        || !/^[\w./-]+$/.test(finding.file) || !/^\d+$/.test(finding.line)) {
        throw new Error(`Invalid reviewed source metadata for ${row.review_id}`);
    }
    const source = `https://github.com/${REPOSITORY}/blob/${row.last_verified_revision}/${finding.file}#L${finding.line}`;
    return [
        `## Summary\n${finding.problem}`,
        `## Actual behavior\n${finding.actual}`,
        `## Expected behavior\n${finding.expected}`,
        `## Impact\n${finding.customer_impact}`,
        `## Evidence and verification\n${row.evidence_status}\n\nSource: ${source}\n\n${finding.source_references}`,
        `## Suggested direction\n${finding.proposed_fix}`,
        `## Regression risks\n${finding.regression_risks}`,
        `## Automated and manual verification\n${finding.automated_tests}\n\n${finding.manual_tests}`,
        `## Compatibility\n${finding.joomla_5_6}`,
        `## Review references\n${finding.original_review}; affected manual pages: ${finding.documentation}`
    ].join('\n\n');
}

function labelsFor(row, finding) {
    const type = /investigation/i.test(finding.evidence_state) ? 'investigation' : 'bug';
    const labels = [`priority:${row.priority}`, `component:${row.component}`, `area:${row.functional_area}`,
        `type:${type}`, 'status:needs-verification', 'source:docs-review'];
    for (const label of labels) {
        const parts = label.split(':');
        if (!TAXONOMY[parts[0]] || !TAXONOMY[parts[0]].includes(parts[1])) {
            throw new Error(`Invalid taxonomy label for ${row.review_id}: ${label}`);
        }
    }
    return labels;
}

function identity(issue, id) {
    return typeof issue.body === 'string' && issue.body.includes(`<!-- redshop-review:${id} `);
}

function potentialDuplicate(issue, finding) {
    const normalize = text => String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    const words = text => new Set(normalize(text).split(' ').filter(word => word.length > 3));
    const first = words(issue.title);
    const second = words(finding.title);
    let overlap = 0;
    for (const word of first) if (second.has(word)) overlap++;
    return normalize(issue.title) === normalize(finding.title)
        || (first.size >= 3 && second.size >= 3 && overlap / Math.min(first.size, second.size) >= 0.7)
        || (issue.body && issue.body.includes(finding.file));
}

function persistLedger(filename, id, updates) {
    const original = fs.readFileSync(filename, 'utf8');
    const table = parseCsv(original);
    const matches = table.rows.filter(row => row.review_id === id);
    if (matches.length !== 1) throw new Error(`Expected exactly one ledger row for ${id}`);
    for (const key of Object.keys(updates)) {
        if (!table.header.includes(key)) throw new Error(`Missing ledger column ${key}`);
        matches[0][key] = updates[key];
    }
    const temporary = `${filename}.${process.pid}.tmp`;
    fs.writeFileSync(temporary, serializeCsv(table), { encoding: 'utf8', flag: 'wx' });
    try {
        if (fs.readFileSync(filename, 'utf8') !== original) throw new Error('Ledger changed concurrently; no overwrite');
        fs.renameSync(temporary, filename);
    } finally {
        if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
    }
}

function parseArgs(args) {
    const options = { apply: false, ensureLabels: false, ids: [], priority: '', component: '', all: false, distinctFrom: [] };
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === '--apply') options.apply = true;
        else if (arg === '--ensure-labels') options.ensureLabels = true;
        else if (arg === '--all') options.all = true;
        else if (['--ids', '--priority', '--component', '--distinct-from'].includes(arg)) {
            const value = args[++i];
            if (!value || value.startsWith('--')) throw new Error(`Missing value for ${arg}`);
            if (arg === '--ids') options.ids = value.split(',');
            if (arg === '--priority') options.priority = value;
            if (arg === '--component') options.component = value;
            if (arg === '--distinct-from') {
                if (!/^[A-Z]+(?:-[A-Z0-9]+)+:[1-9]\d*$/.test(value)) throw new Error('Invalid distinct-from reference');
                options.distinctFrom.push(value);
            }
        } else throw new Error(`Unknown option ${arg}`);
    }
    if (options.all && options.ids.length) throw new Error('Use --all or --ids, not both');
    if (!options.all && !options.ids.length && !options.ensureLabels) throw new Error('Specify --all or --ids');
    if (options.ids.some(id => !/^[A-Z]+(?:-[A-Z0-9]+)+$/.test(id))) throw new Error('Invalid review ID');
    if (options.priority && !TAXONOMY.priority.includes(options.priority)) throw new Error('Invalid priority');
    if (options.component && !TAXONOMY.component.includes(options.component)) throw new Error('Invalid component');
    return options;
}

async function sync(api, options, ledgerPath, findingsPath, output = console.log, verifySource = () => {}) {
    const repo = await api.repository();
    if (repo.full_name !== REPOSITORY || repo.private !== true || !repo.permissions
        || !(repo.permissions.push || repo.permissions.admin)) {
        throw new Error('Repository identity, privacy or write permissions could not be verified');
    }
    const ledger = parseCsv(fs.readFileSync(ledgerPath, 'utf8'));
    const findings = parseCsv(fs.readFileSync(findingsPath, 'utf8'));
    if (new Set(ledger.rows.map(row => row.review_id)).size !== ledger.rows.length) throw new Error('Duplicate ledger ID');
    if (new Set(findings.rows.map(row => row.id)).size !== findings.rows.length) throw new Error('Duplicate finding ID');
    for (const id of options.ids) {
        if (!ledger.rows.some(row => row.review_id === id)) throw new Error(`Unknown review ID ${id}`);
    }
    const allLabels = await api.labels();
    const existingLabels = new Set(allLabels.map(label => label.name));
    if (options.ensureLabels) {
        for (const [kind, values] of Object.entries(TAXONOMY)) {
            for (const value of values) {
                const name = `${kind}:${value}`;
                if (existingLabels.has(name)) continue;
                output(`${options.apply ? 'CREATE LABEL' : 'WOULD CREATE LABEL'} ${name}`);
                if (options.apply) {
                    await api.createLabel({
                        name, color: kind === 'priority' ? PRIORITY_COLORS[value] : COLORS[kind],
                        description: `redSHOP ${kind}: ${value}`
                    });
                    existingLabels.add(name);
                }
            }
        }
    }
    const selected = ledger.rows.filter(row => (options.all || options.ids.includes(row.review_id))
        && (!options.priority || row.priority === options.priority)
        && (!options.component || row.component === options.component));
    const summary = { selected: selected.length, pendingReview: 0, pendingSync: 0, created: 0, updated: 0, unchanged: 0, blocked: 0 };
    for (const row of selected) {
        if (!['pending-sync', 'synced'].includes(row.sync_status)) {
            if (row.sync_status === 'pending-review') summary.pendingReview++;
            else summary.blocked++;
            output(`SKIP ${row.review_id}: ${row.sync_status}`);
            continue;
        }
        const finding = findings.rows.find(item => item.id === row.review_id);
        if (!finding || finding.status !== 'OPEN' || row.github_repository !== REPOSITORY) {
            throw new Error(`Invalid eligible finding ${row.review_id}`);
        }
        if (/security|exploit/i.test(`${finding.evidence_state} ${finding.component} ${finding.title}`)) {
            summary.blocked++;
            output(`BLOCK ${row.review_id}: security review required`);
            continue;
        }
        const body = render(finding, row);
        verifySource(row, finding);
        const hash = sha(body);
        const tag = marker(row.review_id, hash);
        const labels = labelsFor(row, finding);
        const issues = await api.issues();
        const matches = issues.filter(issue => identity(issue, row.review_id));
        if (matches.length > 1) throw new Error(`Multiple existing markers for ${row.review_id}`);
        let issue = matches[0];
        if (!issue && row.issue_number) {
            if (!/^[1-9]\d*$/.test(row.issue_number) || !Number.isSafeInteger(Number(row.issue_number))) {
                throw new Error(`Invalid ledger issue number for ${row.review_id}`);
            }
            const direct = await api.issue(row.issue_number);
            if (direct && !direct.pull_request && String(direct.number) === row.issue_number
                && identity(direct, row.review_id)) {
                issue = direct;
            }
        }
        if (!issue && row.issue_number) {
            summary.blocked++;
            output(`BLOCK ${row.review_id}: ledger issue marker is missing; reconcile manually`);
            continue;
        }
        const potential = issue ? [] : issues.filter(item => potentialDuplicate(item, finding));
        const unresolved = potential.filter(item => !options.distinctFrom.includes(`${row.review_id}:${item.number}`));
        if (unresolved.length) {
            summary.blocked++;
            output(`BLOCK ${row.review_id}: possible existing issue(s) ${unresolved.map(item => `#${item.number}`).join(', ')} require human comparison`);
            continue;
        }
        if (potential.length) output(`DISTINCT ${row.review_id}: ${potential.map(item => `#${item.number}`).join(', ')} manually reviewed`);
        if (issue && row.issue_number && String(issue.number) !== row.issue_number) {
            throw new Error(`Ledger issue number conflicts with marker for ${row.review_id}`);
        }
        if (issue && issue.state !== 'open') {
            summary.blocked++;
            output(`BLOCK ${row.review_id}: matching issue is closed; do not reopen automatically`);
            continue;
        }
        if (!issue) {
            const missing = labels.filter(label => !existingLabels.has(label));
            if (missing.length && !options.ensureLabels) {
                summary.blocked++;
                output(`BLOCK ${row.review_id}: missing labels ${missing.join(', ')}`);
                continue;
            }
            output(`${options.apply ? 'CREATE' : 'WOULD CREATE'} ${row.review_id}: ${finding.title}`);
            if (!options.apply) { summary.pendingSync++; continue; }
            const created = await api.createIssue({ title: `[${row.review_id}] ${finding.title}`, body: `${tag}\n${body}`, labels });
            if (!created || !Number.isSafeInteger(created.number) || !created.html_url) {
                throw new Error(`Invalid create response for ${row.review_id}; recheck marker before retry`);
            }
            persistLedger(ledgerPath, row.review_id, {
                issue_number: String(created.number), issue_url: created.html_url, sync_status: 'synced',
                last_synchronization: new Date().toISOString(),
                blocker_or_exception: potential.length
                    ? `Distinct from ${potential.map(item => `#${item.number}`).join(', ')} after manual root-cause review` : ''
            });
            summary.created++;
            continue;
        }
        const existingMarker = issue.body.match(new RegExp(`^<!-- redshop-review:${row.review_id} sha256:([a-f0-9]{64}) -->\\n`));
        if (!existingMarker || sha(issue.body.slice(existingMarker[0].length)) !== existingMarker[1]) {
            summary.blocked++;
            output(`BLOCK ${row.review_id}: managed issue body was modified; preserve human edits`);
            continue;
        }
        const comments = existingMarker[1] === hash ? [] : await api.comments(issue.number);
        const hasRevision = existingMarker[1] === hash || comments.some(comment => comment.body && comment.body.startsWith(tag + '\n'));
        if (!hasRevision) {
            output(`${options.apply ? 'COMMENT' : 'WOULD COMMENT'} ${row.review_id}: updated review evidence`);
            if (!options.apply) { summary.pendingSync++; continue; }
            await api.createComment(issue.number, `${tag}\n${body}`);
            summary.updated++;
        } else {
            output(`UNCHANGED ${row.review_id} #${issue.number}`);
            summary.unchanged++;
        }
        if (options.apply) {
            persistLedger(ledgerPath, row.review_id, {
                issue_number: String(issue.number), issue_url: issue.html_url, sync_status: 'synced',
                last_synchronization: new Date().toISOString(), blocker_or_exception: row.blocker_or_exception
            });
        }
    }
    output(`SUMMARY ${JSON.stringify(summary)}`);
    return summary;
}

async function main() {
    const options = parseArgs(process.argv.slice(2));
    const lockPath = path.join(ROOT, '.issue-sync.lock');
    const lock = fs.openSync(lockPath, 'wx');
    try {
        fs.writeFileSync(lock, `pid=${process.pid}\n`);
        const core = path.resolve(ROOT, '..', '..', 'redSHOP-rmh');
        const verifySource = (row, finding) => {
            const head = childProcess.execFileSync('git', ['-C', core, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
            if (head !== row.last_verified_revision) throw new Error(`Core revision changed for ${row.review_id}; review again`);
            const status = childProcess.execFileSync('git', ['-C', core, 'status', '--porcelain', '--', finding.file],
                { encoding: 'utf8' });
            if (status.trim()) throw new Error(`Source changed locally for ${row.review_id}; review again`);
        };
        await sync(github(credential()), options, LEDGER, FINDINGS, console.log, verifySource);
    } finally {
        fs.closeSync(lock);
        fs.unlinkSync(lockPath);
    }
}

if (require.main === module) {
    main().catch(error => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = { TAXONOMY, parseCsv, serializeCsv, parseArgs, render, labelsFor, identity, potentialDuplicate, sync };
