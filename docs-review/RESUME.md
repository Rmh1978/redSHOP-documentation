# Resume GitHub Issue and documentation work

**Paused at the maintainer's explicit request. Do not start a new stage until instructed to resume.**

## Read first

1. Documentation repository `AGENTS.md` and `.github/copilot-instructions.md`.
2. This file, `WORK-PROGRESS.md`, `PAGE-INVENTORY.csv`, `MASTER-ISSUES-AND-GAPS.md`, `TRIAGE-REGISTER.csv`, `HIGH-PRIORITY-QUEUE.csv`, and relevant stage notes and test plans.
3. `CORE-BUGS.md`, `CORE-BUGS.csv` and `CORE-FIX-INSTRUCTIONS.md` for product findings; the Core repository's `AGENTS.md` and current instructions before inspecting its source.

## Baseline and targeted change review

- Transfer snapshot: documentation `modernize` at `e40c93a0868058584e7ab309d77837c4aecadc6d`, Core `develop` at `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`, legacy extensions `master` at `68c3819e1fa444a1bd3c46322045d4820a52fea6`. Live origins matched these revisions before the checkpoint edits. The documentation checkpoint edits are not yet committed or pushed; the legacy checkout has three uncommitted Cielo files listed in `WORK-PROGRESS.md`. Preserve them.
- Existing finding evidence was recorded at Core `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, not at current Core HEAD. On resumption check branches, HEADs and worktrees; compare both that evidence baseline and the transfer snapshot against the actual Core state with `git diff --name-status <baseline> HEAD`. Inspect relevant changes, including local modifications. Map changed code and fixed CORE-BUGS to affected articles and reverify only affected items; do not restart the complete review. Record new evidence and revisions. If history is unavailable, say so and verify affected source directly.

## GitHub Issue task: first priority after resumption

The available conversation contains no Issue-import specification, execution ledger or trustworthy ID-to-Issue mapping. On 2026-11-24 a read-only listing showed Core #57 open and #58/#59 closed, and no Issues in the documentation or legacy extensions repositories. No issue was created or updated in this checkpoint; #59 and CODE-034 have overlapping subjects but are not proven duplicates. GitHub state and permissions may have changed.

1. Establish the intended repository and locate any other session or mapping before importing. Query **all open and closed Issues**, inspect bodies, existing stable IDs and semantic overlaps, and record a durable mapping. If mapping or target cannot be established, stop before a remote write instead of guessing.
2. The 89 entries in `CORE-BUGS.csv` remain candidates, not 89 confirmed bugs or an exact count of missing Issues. Prioritize and individually reverify them against the current Core; group related entries, preserve original IDs and distinguish confirmed defects from risks, already-fixed items and test-only questions. Check archived review findings where needed.
3. Use an authorized private security-reporting path for potentially exploitable findings; do not publish sensitive exploit details in public Issues. Do not recreate, reopen or change an Issue solely because a local record is OPEN.
4. `redSHOP-rmh/.github/ISSUE_TEMPLATE/issue.yaml` is the existing legacy form. No new issue template, issue synchronization tool, Issue import ledger or label changes were found in the checked-out worktrees. The last read-only label snapshot and complete Issue/repository status are in `WORK-PROGRESS.md`. No `gh` CLI was available on the original machine. Verify the new machine's tools and access, and explicitly document any later template, label or synchronization changes.
5. Before creating or updating Issues, respect the maintainer's authorization and target-repository scope; update the mapping and checkpoint immediately after each successful remote operation, including issue numbers and errors, so retries cannot duplicate work.

## Documentation: where to continue after explicit resumption

Start with `manual/en-US/chapters/discounts/coupon.md` as a quality reference. Compare the full article with current list, form, XML, language strings, models, helpers and checkout: purpose, navigation, columns, filters, sorting, inline controls, toolbar, every relevant field/default/validation/dependency, examples and interactions. Verify gift-card and coupon behavior against CODE-012/031/041–044; do not change Core. Keep detailed reproduction and tests in review material.

Completed topic passes and exact changes are recorded in `WORK-PROGRESS.md`; the latest pass covered indexed modules and product SEO. They are **not** final-quality approvals. Revisit earlier FAQ, installation, VAT, media, product, catalog, pricing, discounts, orders, users, configuration, integrations, communication and module rewrites against the professional customer-manual criteria. `PAGE-INVENTORY.csv` records provisional page-level classifications; an unclassified page is not necessarily unreviewed. Historical changelog notes are not a completed current manual.

After explicit resumption continue autonomously through open tasks: inspect source, rewrite inaccurate or incomplete customer guidance, preserve useful content and anchors, validate navigation/links and local tests, and update all shared registers and the checkpoint. Missing runtime environments, credentials or test-site authorization block only their specified tests, not source-backed documentation work. Record exact prerequisites and steps and continue to the next task. At the end perform a comprehensive quality pass.

New code findings go immediately into both CORE-BUGS files and the master and triage registers using stable IDs; verify existing findings after Core changes and reopen affected articles. Renderer CODE-003 belongs to the documentation repository. Do not change Core, extensions, production, test sites, commit, push or publish without the required explicit approval.
