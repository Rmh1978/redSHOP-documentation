# First GitHub Copilot task

You have access to two repositories: `redSHOP-documentation` (`gh-pages`) and `redSHOP-rmh` (`develop`).

**First, audit; do not bulk edit.**

1. Read `.github/copilot-instructions.md`, `docs-review/MASTER-ISSUES-AND-GAPS.md`, `docs-review/TRIAGE-REGISTER.csv`, and `docs-review/QUALITY-AUDIT.md`.
2. Confirm the baseline has 310 unique issue IDs. Identify duplicate or overlapping *descriptions* without renumbering IDs.
3. Compare the **complete original** `manual/en-US/chapters/faq/overview-faq.md` with `docs-review/working/FAQ-OVERVIEW-CANDIDATE.md`. Verify the four relative links using the actual documentation renderer/build conventions, not just Markdown intuition.
4. Read the **complete original** four FAQ articles referenced by the index. Read `docs-review/working/FAQ-PRESERVATION-PATCHES.md`. Propose minimal, preservation-first patches, but do not delete historical content.
5. Check claims about current payment plugins, AJAX cart template overrides and VAT behaviour against the `redSHOP-rmh` codebase. Provide exact source references and explicitly mark runtime-untested claims.
6. Produce a short review report with: proposed file changes, issue IDs, verification evidence, missing tests, risks and open questions.
7. Stop and request approval **before** editing the production manual, committing, pushing, publishing or changing the test site.

After approval, work in small topic-focused batches and update the tracker only with supporting evidence. Never rewrite the entire manual from stage archives.
