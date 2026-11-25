# Issue management

The maintainer authorized this workflow on 2026-11-24. It replaces the missing
historical Issue-import specification. The target is
`Rmh1978/redSHOP-rmh`, default branch `develop`; verify repository visibility,
permissions, current Git revisions and all open and closed Issues before writes.
Do not commit, push, publish, modify product runtime or access live/test sites.

## Input and review

Use `CORE-BUGS.md`, `CORE-BUGS.csv`, `CORE-FIX-INSTRUCTIONS.md`,
`MASTER-ISSUES-AND-GAPS.md`, `TRIAGE-REGISTER.csv`, `WORK-PROGRESS.md` and
`RESUME.md`. Review every handoff record against the actual Core revision,
including changed paths and local modifications. Entries include hypotheses and
test-only questions, not just confirmed defects. Create Issues for relevant,
still-open defects and concrete technical investigations; do not mechanically
convert routine documentation gaps or ordinary acceptance tests. Do not create
open Issues for documented fixes. Preserve original IDs and distinguish source
analysis, mock tests, automated tests, runtime verification and investigations.

Check existing open **and closed** Issues by stable ID, title, source path and
root cause before each write. Similar titles alone do not prove duplication.
Do not reopen or close unresolved Issues automatically. Keep human comments,
labels and decisions. GitHub Issues are the primary source of issue status;
reconcile local registers without silently closing findings.

Write Issues in English with specific title, stable review ID, summary, actual
and expected behavior, customer/administrator impact, technical evidence,
component/extension, source references and commit-specific permalinks,
reproduction or verification, proposed direction, regression risks, automated
and manual tests, Joomla 5/6 considerations, original review references and
affected manual pages. State what is unverified.

## Labels

One primary priority per Issue, plus applicable component, area, type, status
and source labels; multiple areas may apply. Reuse existing labels where
appropriate and never delete them without approval.

- Priorities: `priority:P0` (critical/red), `priority:P1` (high/orange),
  `priority:P2` (normal/blue), `priority:P3` (low/neutral).
- Components: `component:core`, `component:plugin`, `component:module`,
  `component:library`, `component:template`, `component:marketplace`,
  `component:documentation`, `component:build`, `component:other`.
- Areas: `area:checkout`, `area:payments`, `area:shipping`, `area:orders`,
  `area:products`, `area:categories`, `area:discounts`, `area:coupons`,
  `area:giftcards`, `area:users`, `area:stock`, `area:media`,
  `area:upload-download`, `area:import-export`, `area:installation`,
  `area:updates`, `area:security`, `area:api`, `area:integrations`,
  `area:frontend`, `area:administration`, `area:configuration`,
  `area:marketplace`, `area:seo`, `area:performance`, `area:database`,
  `area:other`.
- Types: `type:bug`, `type:investigation`, `type:security`, `type:enhancement`,
  `type:technical-debt`, `type:compatibility`, `type:regression`.
- Statuses: `status:needs-verification`, `status:confirmed`, `status:blocked`,
  `status:in-progress`, `status:needs-testing`, `status:needs-review`.
- Sources: `source:docs-review`, `source:manual`, `source:automated-test`,
  `source:code-review`.
- Compatibility: `compatibility:joomla5`, `compatibility:joomla6`,
  `compatibility:php`.

## Security and operations

Confirm visibility before synchronization. Potentially exploitable findings
must use an authorized private security-reporting path or a nonsensitive
tracking reference; repository privacy alone does not justify sharing exploit
details. Never include credentials, tokens, customer or production data. Record
security exceptions without sensitive details in the ledger and continue with
independent work; keep sensitive evidence only in an authorized private channel.

Use a dry-run before controlled batches. The synchronization tool must support
all/selected review IDs, priority and component filters, idempotent create and
update, stable machine-readable references, duplicate checks, issue URL/number
recording, explicit errors, rate limits, resumability and a summary. It must not
overwrite human decisions or comments. Persist each result immediately to
`ISSUE-SYNC-REGISTER.csv` and relevant review registers; a missing GitHub
connection leaves `pending-sync`, not a fabricated success.

Issue forms should include type, priority, component, functional area,
versions, affected extension, environment and revision, description,
expected/actual behavior, reproduction, logs, source location, proposed fix,
regressions, tests and original review reference. A workflow may map structured
form choices to labels; treat all Issue content as untrusted and use minimal
permissions.

For new findings: verify, assign a stable existing/new ID, update both Core
handoff formats plus master and triage, check duplicates, create/update the
appropriate Issue and labels, and record its URL and result in the ledger.
On missing access record `pending-sync` and proceed elsewhere. Report reviewed,
created, updated, fixed, duplicate, pending and security-exception counts at
the end of the Issue phase; then continue the manual autonomously beginning
with Coupons unless its current-quality pass is already complete.

Ledger status `security-hold` identifies an item that needs an authorized
private security review or a separately prepared nonsensitive tracker. It is
not a completed review or proof of exploitability. The sync tool skips this
status; do not expose sensitive details by promoting it without review.

## Local synchronization

Run from the documentation repository with Node.js:

```
node docs-review\issue-sync.test.js
node docs-review\issue-sync.js --all
node docs-review\issue-sync.js --ids CODE-012,CODE-041 --priority P1
node docs-review\issue-sync.js --ensure-labels
node docs-review\issue-sync.js --ids CODE-012,CODE-041 --apply
```

The default is a read-only dry-run. `--all` or `--ids` selects records;
`--priority` and `--component` filter them. `--ensure-labels --apply` creates
missing taxonomy labels without changing existing labels. Write mode requires
`--apply`. Authentication uses `GH_TOKEN`, `GITHUB_TOKEN` or the noninteractive
Git credential helper; never print or store the token. The tool verifies the
target is private and writable, loads open and closed issues, and only considers
`pending-sync` or `synced` rows at the verified current Core revision with
unchanged source files. Review and security classification are human tasks;
do not promote unreviewed entries merely to make them eligible.

Each created issue has a stable marker and each successful result is persisted
to the ledger. A retry finds the marker even after an interrupted response.
Existing issue bodies, titles, comments, labels and closed state are preserved;
changed reviewed evidence is appended as an idempotent marked comment. If the
managed body was edited, a potential duplicate exists, or the ledger mapping
conflicts, synchronization stops for that finding instead of overwriting.
If a mapped issue is temporarily absent from the paginated list, the tool
fetches that issue directly and still requires the correct marker and an
unchanged managed body. Missing markers and API errors do not trigger creation.
After individually comparing root causes, a known distinct overlap can be
acknowledged with `--distinct-from CODE-030:80` (review ID and existing Issue
number); the decision is retained in the ledger. Do not use this flag without
an actual comparison, and do not use it to bypass a matching stable ID.
Rate-limit and network errors stop the batch with an explicit error; retry only
after the indicated time. The local lock prevents two local invocations, not
simultaneous runs on different computers: operate a single writer. After an
abrupt termination inspect `.issue-sync.lock` and the owning process before
removing a stale lock; re-run a dry-run to reconcile any partial operation.

The issue-form workflow adds validated labels but never deletes labels. It
reports conflicting exclusive labels for manual resolution. It is not deployed
until an authorized commit and push, and a stale opened event can leave initial
labels missing; verify real GitHub form behavior before relying on it.
