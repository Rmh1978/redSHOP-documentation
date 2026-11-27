# Repository guidance

The maintainer explicitly paused this project: status is PAUSED. Do not resume
review, issue writes or documentation work without an explicit resume. On
resumption read the checkpoints, inspect both worktrees and compare Core.

See `.github/copilot-instructions.md` for mandatory documentation rules.
Start with `docs-review/RESUME.md` and `docs-review/WORK-PROGRESS.md`. `docs-review/COPILOT-TASK.md` is the historical initial task; later maintainer decisions and the current checkpoint supersede its initial approval gate.
Review and issue files in `docs-review/` are planning inputs, not production manuals.
For product findings follow `docs-review/ISSUE-MANAGEMENT.md` and keep its
synchronization ledger and the shared review registers current.
When explicitly resumed, do not stop at an intermediate status,
checkpoint or completed subtask: immediately continue with the next actionable
task. Work in safe batches, record specific blockers and continue independently.
Before ending, check outstanding issue review, synchronization, tools, tests and
manual pages; stop only when complete or a concrete session limit prevents more
work. Record the precise next action and limit in the checkpoint.
Ordinary GitHub Issues and labels are authorized; apply the existing private
security-reporting and deduplication rules.
No commit, push, deploy, or external test-site modification without user approval.

## Permanent quality requirements (maintainer, 2026-11-25)

- The project is **PAUSED**. When explicitly resumed, repeatedly select an unfinished actionable task, perform it, verify it, update relevant Issues and registers, checkpoint actual progress and immediately start the next. A later explicit pause takes precedence.
- Review each page individually: read the whole page; read its XML forms, controllers, models, views, helpers and libraries; check language strings, real field names, defaults and dependencies; compare with the implementation; improve concretely or record why no change is needed. Never approve a page from an automated check, earlier status or existing register.
- Record per page in `docs-review/SOURCE-REVIEW-REGISTER.csv` only work actually done: path, Core revision, source files, classes/methods, verified functions, gaps, improvements, limitations, quality status, runtime status, related Issues.
- Also document missing areas: configuration, plugin and module references, admin/frontend guides, workflows, troubleshooting, installation, migration, Marketplace, developer/API/event/database/release docs, Joomla 5.4/6, and review redSHOP-internal in depth.
- Review each CODE finding and each security hold individually against current source (still present, evidence, priority, fix, regression tests, other affected functions, Issue wording). Holds follow the private procedure.
- When resumed, work in groups of five pages or ten findings; after each group do quality control, update registers, save a checkpoint and start the next. Blocked runtime tests are recorded and work continues elsewhere.
- Keep: no functional Core changes, no automatic commit/push/publication, no production changes, no overwriting of the maintainer's changes, automatic Issue management, private handling of security findings, ongoing checkpoints with percentage progress. No invented findings or artificial edits.
- Historical `complete` and `reviewed` labels in older inventories are editorial or register classifications, not approval under these individual source-review requirements. The current source-quality and runtime limitations are in `SOURCE-REVIEW-REGISTER.csv`; do not infer completion from an old label.
