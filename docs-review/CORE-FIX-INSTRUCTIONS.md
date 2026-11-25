# Codex handoff: product and extension findings

This is a handoff, not permission to change Core in the documentation project. The maintainer can authorize a separate coding session. Do not edit the documentation, a test site, production, or a provider account as a side effect of fixing a finding. Do not commit, push, create a release or publish without authorization.

For Issue synchronization, deduplication, disclosure and the stable-ID ledger,
follow `ISSUE-MANAGEMENT.md`. GitHub Issues are the primary source of issue
status; do not close review findings without verified evidence.

## Preparation

1. Read the current `AGENTS.md` and `.github/copilot-instructions.md` in the relevant repository, then this file, `CORE-BUGS.md`, `CORE-BUGS.csv`, `MASTER-ISSUES-AND-GAPS.md`, `TRIAGE-REGISTER.csv` and relevant test plans. Inspect all worktrees; preserve unrelated changes.
2. Record current branch, HEAD and dirty files. Compare Core HEAD with the baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd` using a read-only diff. Recheck every finding and its referenced files, classes and line numbers against the actual revision and installed extension before changing anything.
3. Distinguish source evidence, mock reproduction, runtime confirmation and security investigation. A risk or open question is not proof of an exploitable vulnerability. Never treat a generic test question as a confirmed defect.

## Recommended batches

- **P0, potential critical impact:** media deletion boundaries, Bambora callback verification, TLS verification and response handling, wizard configuration preservation. Investigate and independently reproduce first; P0 is risk triage, not proof of exploitation.
- **P1, payment and checkout:** notification input and authentication, checkout minimum, pricing and currency, order and export handling. Use mocked providers; preserve offline methods, installed settings and separate order/payment states. Verify any status policy and breaking change before implementation.
- **P1, coupons and gift cards:** CODE-012 and CODE-031/041–044; also cross-check M-0002/0004. Test single remaining use, gift-card coupon, fixed/percent boundaries, scalar/user behavior, multi-user semantics and concurrent redemption with rollback and retries. Do not duplicate CODE-012 for gift cards.
- **P1, privacy, import, media and communication:** establish authorization, CSRF, output, file ownership, isolation, consent and failure paths before proposing specific fixes.
- **P2 and remaining investigations:** promotions, catalog, orders, stock, modules, shipping, integrations and compatibility. Review related source and existing settings together rather than applying a mechanical change.
- **Prior product audit:** `redSHOP-rmh/docs/redshop-audit-findings.md` contains open lifecycle, storage, release and legacy-download work (AUD-003-008–013 and REF-DL-007) plus DIST-23's individual provider/dependency holds. Their handoff anchors point to the audit, not a verified implementation location. Do not ignore its locally fixed items' remaining acceptance, and do not infer that historic dependency advisories still affect current locks.

## Fix and verify

- Prove the cause and define expected behavior before fixing. Preserve extension identity, configuration, customer data, upgrades and existing public contracts; explicitly document unavoidable breaking changes. Do not automatically fix other plugins as a side effect.
- Add focused regression tests that fail before the fix and pass afterward, including failure, repeated operation and boundary cases where relevant. Follow each component's current test tooling. Never use live credentials, real payments, customer data or unapproved site changes.
- Test applicable supported Joomla 5 and 6 paths, installation/upgrade and relevant PHP versions in isolated environments. Source inspection is not runtime compatibility. The recorded baseline root Composer manifest says PHP `^8.3` and Joomla `^5.4 || ^6.0`, while the package source is pinned to 5.4.6; inspect current manifests and do not silently change project-wide constraints.
- For each ID, record actual revision, evidence, change, automated and manual test results, untested scenarios, blockers and regression risks. Record commit hashes **if** a commit is explicitly authorized and created. Update both handoff formats, master and triage with evidence; do not close related IDs automatically.
- Notify the documentation workflow of behavior changes, and identify affected manual articles for targeted re-review. Security details must stay within the authorized repositories; do not disclose secrets or provider credentials.

`CORE-BUGS.md`/`.csv` retain specific findings and investigations from the review. Broader acceptance questions that are not individual source findings remain in the master and test plans. Historic stage evidence remains authoritative for provenance, not proof that a defect still exists.
