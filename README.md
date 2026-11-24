# redSHOP documentation — GitHub Copilot handover

This is a **review and handover package**, not a replacement documentation tree.

## Repositories

- Documentation: `Rmh1978/redSHOP-documentation`, source branch `gh-pages`.
- Implementation: `Rmh1978/redSHOP-rmh`, source branch `develop`.
- Optional isolated test environment: `https://www.print.dk/tests/redshop6` — **do not modify without approval**.

## Install safely

1. Open a clone of `redSHOP-documentation` at `gh-pages`.
2. Create a new branch: `git switch -c docs/modernization`.
3. Copy this package's `.github/`, `docs-review/` and `AGENTS.md` into the repository root. **Do not overwrite existing `.github/copilot-instructions.md` or `AGENTS.md` without merging their content.**
4. Do **not** copy `docs-review/working/*` into `manual/en-US/chapters/` wholesale.
5. Review `docs-review/MASTER-ISSUES-AND-GAPS.md` and `docs-review/TRIAGE-REGISTER.csv` as the canonical working baseline.
6. In VS Code, open the documentation repository and the code repository in a multi-root workspace, then ask Copilot to follow `docs-review/COPILOT-TASK.md`.
7. Have Copilot propose small, reviewable documentation diffs. Commit only after human review; publish/merge only after validation.

## Contents

- `docs-review/MASTER-ISSUES-AND-GAPS.md`: 315 open items with stable IDs (307 baseline items plus eight separately tracked code findings); three documentation items are complete.
- `docs-review/TRIAGE-REGISTER.csv`: triage view of those same items.
- `docs-review/HIGH-PRIORITY-QUEUE.csv`: 50 high-priority candidates, **not 50 confirmed bugs**.
- `docs-review/QUALITY-AUDIT.md`: register audit with the FAQ review addendum, subject to independent verification.
- `docs-review/working/`: draft FAQ correction and preservation-first instructions; **not ready for direct publication**.
- `docs-review/test-plans/`: test plan; **not evidence of completed tests**.
- `docs-review/reference/stage-archives/`: original stage ZIP archives for traceability; many contain duplicate master trackers and shortened drafts.
- `docs-review/ARCHIVE-MANIFEST.csv`: archive SHA-256 checksums.

## Scope and caveats

The existing manuals must remain the source of truth until a change is verified. Stage drafts sometimes summarize or shorten original material; never overwrite originals with them. Do not silently mark any baseline or follow-up issue resolved. Distinguish `source-verified`, `runtime-verified`, `historical`, `proposal`, and `unverified`. Some earlier summaries and archive claims may be inaccurate: recheck against the repositories.

No GitHub commits, pushes, merges or test-site modifications were performed in producing this package.
