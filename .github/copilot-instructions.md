# GitHub Copilot instructions — redSHOP documentation

You are editing the **redSHOP documentation repository**, not implementing changes in the product.

- Answer the maintainer in Danish; write documentation articles in clear English.
- Treat `manual/en-US/chapters/` as the canonical manual source, and `redSHOP-rmh` on `develop` as implementation evidence. Check the actual working branches and revisions before editing.
- Target Joomla 5 and Joomla 6; never assume backward compatibility without checking APIs and current implementation.
- Modernize the manual against the current redSHOP implementation, not merely by adding historical warnings. Replace obsolete instructions with verified, useful current guidance; preserve original examples, images and historical details only where they remain relevant and accurate.
- Never copy `docs-review/reference/stage-archives/` or `docs-review/working/` over production manuals automatically.
- Track issues using existing stable IDs in `docs-review/MASTER-ISSUES-AND-GAPS.md`; do not renumber, duplicate or silently close them.
- Distinguish code inspection from actual UI/runtime verification. Cite exact file paths and line numbers or symbols for code claims.
- Do not change code, production settings, payment flows, tax rates, customer data, or the isolated test site without explicit approval.
- Do not commit, push, publish, or merge without explicit approval. Work on a dedicated branch and present diffs for review.
- Before changing an article, inspect the complete original and relevant current code, distinguish verified behavior from assumptions, retain useful content and check navigation, links and examples.
- Never assert that a test passed if it was not run. Never treat old PayPal/COD/VAT workarounds as current recommendations without verification.

## Customer manual quality

- Write a professional customer manual for the current redSHOP implementation, not an internal test plan. Replace obsolete instructions with current, usable guidance rather than merely adding historical warnings.
- For each applicable administrator page, describe its purpose and navigation, list columns, filters and sorting, inline edits and toolbar actions. Cover every relevant form field, its meaning and default, required and conditionally visible fields, validation, dependencies, practical examples and interactions with other features. Explicitly identify controls that do not apply.
- Verify claims against current forms, XML, language strings, models, controllers, views, layouts, helpers and actual source behavior. Retain accurate and useful existing material and anchors; check navigation, examples and links.
- Describe customer-impacting known issues briefly and usefully in the manual. Keep detailed source findings, test procedures and evidence in `docs-review/`; do not turn customer instructions into a test plan.
- Missing runtime tests do not prevent documentation of code-verifiable behavior. Clearly distinguish source evidence from runtime verification and record exact outstanding tests and blockers separately.
- A prior rewrite or source pass is not proof of completeness against these criteria. Classify and revisit insufficiently detailed pages; do not mark warnings-only pages fully modernized.

## Autonomous modernization workflow

- The project is paused by explicit maintainer instruction. Do not resume until the maintainer instructs you to do so. Once resumed, treat the handover as one continuous project: work systematically through open issues and immediately continue to the next task or stage. Ordinary documentation edits and local non-destructive tests do not require approval.
- Begin with `docs-review/RESUME.md` and `WORK-PROGRESS.md`, check the current Core revision against the checkpoint and review only documentation affected by intervening Core changes.
- Analyze code and document everything verifiable even when a runtime test, credentials or test-site approval is unavailable. Record the exact remaining blocker and a reproducible test plan in the master register, then continue elsewhere.
- Maintain `docs-review/WORK-PROGRESS.md`, the master register and triage register throughout the work. Record current stage, completed and next tasks, changes, open issues, blockers, tests and decisions so future sessions can resume.
- Immediately register newly discovered product or extension code defects in both `docs-review/CORE-BUGS.md` and `docs-review/CORE-BUGS.csv` as well as the shared master and triage registers. Reuse existing IDs and distinguish verified defects, risks and open investigations. After a Core revision change, reverify relevant findings, update their evidence and reopen affected manual pages when fixes change behavior.
- After all stages have been reviewed, perform a comprehensive quality pass and reopen insufficiently supported conclusions. An individual blocker or intermediate status is not a reason to stop the project.
- Do not change redSHOP Core or payment plugins, production systems or the test site; do not commit, push or publish without explicit approval. Register approval-dependent work and proceed with other tasks.
