# Resume documentation modernization

**Paused at the maintainer's explicit request. Do not start a new stage until instructed to resume.**

## Read first

1. Documentation repository `AGENTS.md` and `.github/copilot-instructions.md`.
2. This file, `WORK-PROGRESS.md`, `PAGE-INVENTORY.csv`, `MASTER-ISSUES-AND-GAPS.md`, `TRIAGE-REGISTER.csv`, `HIGH-PRIORITY-QUEUE.csv`, and relevant stage notes and test plans.
3. `CORE-BUGS.md`, `CORE-BUGS.csv` and `CORE-FIX-INSTRUCTIONS.md` for product findings; the Core repository's `AGENTS.md` and current instructions before inspecting its source.

## Baseline and targeted change review

- Documentation baseline: branch `modernize`, commit `807fe3fa9a6d90a0c0203748c3f1d580d7beda24`, with substantial uncommitted changes. Preserve them.
- Core baseline: branch `develop`, commit `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`; the worktree was clean at the checkpoint.
- Legacy extensions checkout: branch `master`, commit `68c3819e1fa444a1bd3c46322045d4820a52fea6`, three pre-existing changed/untracked files; preserve them. The imported source in Core is authoritative.
- On resumption check branches, HEADs and worktrees. Compare current Core against the recorded baseline with `git diff --name-status <baseline> HEAD` and inspect relevant changes, including local modifications. Map changed code and fixed CORE-BUGS to affected articles and reverify only those articles; do not restart the complete review. Record the new baseline and evidence. If history is unavailable, state that explicitly and verify affected source directly.

## Where to continue

Start with `manual/en-US/chapters/discounts/coupon.md` as a quality reference. Compare the full article with current list, form, XML, language strings, models, helpers and checkout: purpose, navigation, columns, filters, sorting, inline controls, toolbar, every relevant field/default/validation/dependency, examples and interactions. Verify gift-card and coupon behavior against CODE-012/031/041–044; do not change Core. Keep detailed reproduction and tests in review material.

Completed topic passes and exact changes are recorded in `WORK-PROGRESS.md`; the latest pass covered indexed modules and product SEO. They are **not** final-quality approvals. Revisit earlier FAQ, installation, VAT, media, product, catalog, pricing, discounts, orders, users, configuration, integrations, communication and module rewrites against the professional customer-manual criteria. `PAGE-INVENTORY.csv` records provisional page-level classifications; an unclassified page is not necessarily unreviewed. Historical changelog notes are not a completed current manual.

After explicit resumption continue autonomously through open tasks: inspect source, rewrite inaccurate or incomplete customer guidance, preserve useful content and anchors, validate navigation/links and local tests, and update all shared registers and the checkpoint. Missing runtime environments, credentials or test-site authorization block only their specified tests, not source-backed documentation work. Record exact prerequisites and steps and continue to the next task. At the end perform a comprehensive quality pass.

New code findings go immediately into both CORE-BUGS files and the master and triage registers using stable IDs; verify existing findings after Core changes and reopen affected articles. Renderer CODE-003 belongs to the documentation repository. Do not change Core, extensions, production, test sites, commit, push or publish without the required explicit approval.
