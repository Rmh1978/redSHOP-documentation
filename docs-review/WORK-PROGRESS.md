# Documentation modernization — ongoing work

## Transfer checkpoint — 2026-11-24, 17:37 CET

**Paused. Do not resume issue import or documentation modernization until the maintainer instructs you to continue.** This checkpoint supersedes the older checkpoint below, which is retained as history.

### GitHub Issue work

- The present conversation and available local session history do not contain a preceding GitHub Issue import task or its execution ledger. No Issue was created or updated in this transfer task. Do not assume that any missing work was completed or that every finding is suitable for a public Issue.
- A read-only GitHub listing returned all three issues in `Rmh1978/redSHOP-rmh`: #57 is open; #58 and #59 are closed. Their latest reported updates are in 2023/2024. `Rmh1978/redSHOP-documentation` and `Rmh1978/redSHOPEXTENSIONS-rmh` returned no issues. These observations are limited to repositories and permissions visible to this session; another repository or account might have a separate mapping.
- #59 historically concerns question saving, overlapping the subject of CODE-034, but a match has not been established. Compare actual behavior and issue history before linking, reopening, or creating anything. Preserve closed issues in deduplication searches.
- The 89 handoff records in `CORE-BUGS.csv` are **candidates for review**, not 89 confirmed bugs or an established number of issues left to create. No local ID-to-GitHub-Issue mapping or import ledger was found, and none of these records has a confirmed GitHub mapping in this checkpoint. Group related entries and exclude test-only investigations, fixed items, duplicates and inappropriate disclosures as warranted. `CORE-BUGS.md`, the master and triage retain their existing IDs and evidence.
- The existing Core issue form is `.github/ISSUE_TEMPLATE/issue.yaml`; first-parent history shows it dates to the 2023 issue-tracker commit. No issue-template or synchronization-tool change attributable to an import was found on the checked-out branches. No issue synchronization tool or local mapping was located in the checked paths; `gh` is unavailable here. GitHub labels were read only; no label changes were made. Core currently has `4.0.1`, `4.0.3`, `bug`, `documentation`, `duplicate`, `enhancement`, `feature request`, `help wanted`, `invalid`, and `question`. Documentation has the usual default labels including `good first issue` and `wontfix`. Current labels do not establish an import taxonomy.
- **Next concrete action after resumption:** identify the intended GitHub repository and any other session/import ledger; retrieve all open and closed issues and their bodies, compare stable IDs and semantic overlaps, and construct a durable ID-to-issue mapping before any create/update. Revalidate each candidate against current Core, particularly CODE-028/029 and CODE-045/046 and other payment-related entries. Use private security reporting for suspected vulnerabilities rather than publishing exploit details. Do not create duplicates or silently close existing IDs.

### Repositories and transfer

- Core `Rmh1978/redSHOP-rmh`: branch `develop`, HEAD `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`; clean worktree before and after this checkpoint. The live `origin/develop` matched HEAD during read-only `ls-remote`. The previous documentation evidence baseline was `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`; 82 paths changed since then, including Cielo, payment loading, Flatpay/Bambora manifests, PostNord, Marketplace and Filecheck. Recheck only affected findings and pages rather than restarting the review.
- Documentation `Rmh1978/redSHOP-documentation`: branch `modernize`, HEAD `e40c93a0868058584e7ab309d77837c4aecadc6d`; live `origin/modernize` matched HEAD before these checkpoint edits. The only current changes made in this task are `docs-review/WORK-PROGRESS.md` and `docs-review/RESUME.md`; they must be committed and pushed by the maintainer before the other computer can receive them. The prior 180-file worktree is already part of the current committed baseline, not a current uncommitted count.
- Legacy `Rmh1978/redSHOPEXTENSIONS-rmh`: branch `master`, HEAD `68c3819e1fa444a1bd3c46322045d4820a52fea6`, live `origin/master` matched HEAD. Three existing uncommitted files: `plugins/redshop_payment/cielo/cielo.xml`, `tests/cielo/REPORT.md`, `tests/cielo/package.php`. Preserve them; the maintainer must decide whether to commit/push them or transfer them separately. Imported extension source in Core remains authoritative.

### Documentation and verification

- Documentation remains paused. `PAGE-INVENTORY.csv` records 160 pages: 117 provisional partial, one historical annotation, 42 unclassified and none approved complete against the updated manual quality standard. Triage has 358 OPEN and six DONE; no formally BLOCKED entries. A missing runtime test is not a formally blocked issue count.
- Last completed task before this checkpoint was the documentation/code-handoff pause, recorded below. This transfer checkpoint records state only; no new manual stage, Core fix, issue import, deployment or publication was performed. After Issue work and explicit resumption, use Coupons as the first customer-manual quality reference.
- Read-only checks in this task: Git branch/HEAD, all-file worktree status and live remote heads for the three repositories; GitHub issue lists for those repositories and labels for Core/documentation; CSV counts, resume-file existence and Core diff names. Documentation `git diff --check` passed. No Joomla, provider, browser, import, synchronization or security runtime tests were run. Earlier renderer tests and unresolved browser regressions remain described below; do not treat them as new test results.
- Blockers: no Issue-import specification or trustworthy mapping in the available history; no `gh` CLI; private security workflow and provider/Joomla environments require the appropriate authorization. A new session must inspect current GitHub state again because the snapshot can become stale. No commit, push or remote mutation was performed in this task.

## Previous controlled pause checkpoint (historical)

**Paused at the maintainer's request; do not resume until explicitly instructed.** The current bounded task is the handoff and checkpoint, not a new documentation stage.

- Goal: a professional, complete customer manual for the current redSHOP, source-verified rather than an internal test plan. Per-page criteria and permissions are in `.github/copilot-instructions.md`; the concise resumption sequence is in `RESUME.md`.
- Documentation repository: branch `modernize`, HEAD `807fe3fa9a6d90a0c0203748c3f1d580d7beda24`, substantial existing uncommitted work. Core repository: branch `develop`, HEAD `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, clean at checkpoint. Compare Core revisions before resuming; re-review only affected topics.
- Legacy extensions checkout: branch `master`, HEAD `68c3819e1fa444a1bd3c46322045d4820a52fea6`, three changed/untracked files at checkpoint; preserve them. Core is authoritative for the imported extensions. No changes were made to either product checkout in this documentation work.
- Last completed topic pass: indexed module pages and product SEO selector; complete topic history and prior test evidence are retained below. This was not a field-complete quality approval.
- Next task **after authorization to resume**: make Coupons the first quality reference; inspect its current list, form and checkout against all customer-manual criteria, then continue systematically. Product information and other tabs remain partial.
- `PAGE-INVENTORY.csv` enumerates 160 pages: 0 approved complete under the new standard, 117 provisional partial, 1 historical annotation only, and 42 unclassified. Unclassified does not mean never examined. Changed pages classified partial still require a field-by-field quality review; page paths and evidence are in that CSV. The detailed prior topic work below identifies examined subjects. Separate reviewed-but-not-edited and blocked per-page classifications have not been established; do not infer them.
- The new customer articles are `plugin-redshop/bambora.md`, `billy.md`, `flatpay.md` and `relatel.md`. Navigation changes include these integrations, PostNord references, communication labels and getting-started links; see the working diff for exact changes.
- At checkpoint the triage register contains 364 IDs: 358 OPEN and 6 DONE, with no formally BLOCKED status. An OPEN ID may have blocked runtime components; this is not a count of confirmed defects or a count of all missing tests. See the master, triage and test plans for exact remaining work.
- Runtime blockers: isolated Joomla 5/6 installations and authorized test-site changes, actual installed packages, disposable data, and provider sandbox credentials where applicable. Relevant test steps are in `test-plans/REDSHOP6-TEST-PLAN.md` and per-finding handoff; none were run on a Joomla site or provider.
- Code and security handoff: `CORE-BUGS.md`, `CORE-BUGS.csv` and `CORE-FIX-INSTRUCTIONS.md` contain 89 entries (P0: 8, P1: 54, P2: 27, P3: 0), including open investigations rather than just verified defects. Includes coupon/gift-card findings CODE-012 and CODE-041–044 without duplicating CODE-012; CODE-045/046 cover previously recorded Flatpay concerns. Original open audit items AUD-003-008–013, REF-DL-007 and grouped DIST-23 are linked to the existing Core audit; their implementation locations and current status require re-verification. Distinguish source evidence and mock results from security hypotheses and runtime verification. CODE-003 is the documentation renderer, not Core.
- Renderer change: `assets/js/manual.js` removes a trailing `index.html` from the base path. Local VM checks passed for selected inputs; local browser checks found Back, initial fragment and hash-only issues tracked as CODE-003. No deployed/cross-browser acceptance. Any renderer correction requires approval.
- Decisions: no Core or extension edits, test-site or production changes, commit, push or publication in this work. New findings go into both CORE-BUGS formats and master/triage. After Core fixes recheck relevant findings and reopen affected manual pages. Open decisions include the renderer fix, runtime approvals and the meaning/storage of multiple coupon users.
- Pause verification: source anchors, referenced article files, unique handoff IDs, triage/master presence, priority-queue parity and inventory paths were checked locally; renderer `node --check` and tracked `git diff --check` passed. Git warned that one product article may later undergo LF/CRLF normalization. No Joomla/provider test was run. At the final status count, 116 tracked files and 64 untracked files were changed in the documentation worktree (180 total); these include pre-existing work, not exclusively changes from the pause.

## Historical stage at interruption

The earlier working stage was the field-by-field product review and remaining documentation issues; its next-task statement below is historical and superseded by this checkpoint.

## Last completed point

Completed indexed module documentation pass and corrected product SEO selector guidance; recorded CODE-035–040 for follow-up. Package, provider and product UI behavior remain unverified.

## Historical next task (superseded)

Continue field-by-field review of product information and remaining product tabs against current templates and controllers, then other open documentation topics. Renderer, Core and plugin fixes require separate approval.

## Completed changes

- Earlier FAQ, VAT, installation, media, e-conomic and import/export review notes and navigation fixes are listed in `MASTER-ISSUES-AND-GAPS.md`.
- The maintainer's continuous modernization workflow has been added to `.github/copilot-instructions.md`.
- Replaced the obsolete Joomla 2.5/3 installation, upgrade and requirements procedures with current source-backed package installation, backup, configuration, migration and verification guidance. Old upgrade fragment IDs were retained.
- Replaced the 2019 import/export walkthroughs with current plugin-driven workflows, data types, type-specific observations and safety guidance. Original fragment IDs remain.
- Replaced VAT group/rate and destructive VAT FAQ instructions with current source-backed fields, selection rules, configuration and test guidance.
- Replaced obsolete COD workaround, PayPal SSL notice and AJAX paths with current plugin/template guidance and explicit unresolved runtime concerns.
- Replaced e-conomic historical setup and SOAP examples with plugin/account configuration, mapping and isolated-verification guidance.
- Replaced the media article's obsolete screenshots and workflows with current list, editor, product gallery and deletion-safety guidance.
- Replaced the currency article with current currency fields, price settings and conversion safety guidance.
- Rewrote template management and linked the duplicate customization currency page to the canonical guide; original fragment IDs remain.
- Rewrote country and state guidance, including prefix and flag fields, code uniqueness and destination-related safety.
- Rewrote postal-code guidance for individual/range saves, warnings, destination testing and source-level save failure.
- Rewrote attribute-set guidance for published sets, selection versus copying, product-specific attributes and verification.
- Rewrote field-group guidance with current form fields and a clear distinction between visibility and authorization.
- Rewrote the custom-field guide with current type and section selectors, template tags and retained useful examples.
- Documented that the inspected group-list query does not filter group publication; noted type-dependent custom-field output and input handling for further security review.
- Corrected unsafe product-download advice, extensible product types and the separate not-for-sale price option; the rest of the product guide remains open.
- Corrected mass-discount dates/percentage units and product-price discount percentage guidance; added calculator options and discount deletion warning.
- Updated product editor tab, image, metadata and related-product guidance from current source, with isolated mixed-cart verification.
- Documented source-backed software Product Files workflow and recorded separate entitlement and private-storage verification cases.
- Removed newly added cross-article fragment links because the renderer has no explicit post-load fragment scroll; CODE-003 now has a specific browser regression test.
- Corrected the product guide's duplicate listing anchor and documented current search/filter choices.
- Clarified that Product Files uploads are initially published, documented software-license controls and removed obsolete product-list check-in guidance.
- Replaced the obsolete category walkthrough with current hierarchy, editor, filter, menu, SEO, accessory, import/export and testing guidance; retained original fragment IDs.
- Replaced the obsolete price-list plus-icon/combined-save instructions with current separate saves, filters and client validation.
- Corrected product image placement, retained the actual back-image control, clarified attribute-set selection versus copy and removed an unsupported claim about a Core product-finder tab.
- Rewrote Shipping Methods with capability-specific configuration, current rate/location fields and isolated checkout examples.
- Rewrote Shipping Boxes and Self Pickup with source-backed matching and fallback behavior; actual checkout remains untested.
- Rewrote Wrappings with current form fields and named template tags, plus isolated mixed-cart and VAT checks.
- Rewrote manufacturer guidance including the conditional exclusion field, current menu layouts, media precautions and product name tag.
- Rewrote price management, distinguishing separate list saves from product rules and documenting the existing rule-editor field mismatch.
- Rewrote supplier guidance, including product association, the template tag, publication caveat and safe order-mail testing. Logged CODE-009 separately.
- Replaced the obsolete duplicate product-media walkthrough with current concise guidance and a canonical media link; updated the product overview and preserved original anchors.
- Corrected product discount threshold, shopper-group and date guidance; flagged the distinction between the label and inspected product-price calculation for runtime testing.
- Updated the product list, template-assignment and downloadable-file guidance and logged CODE-010 separately.
- Replaced the old related-product transfer-button directions and screenshots with current selector guidance.
- Rewrote stockroom guides, including page-only totals, preorder reset consequences, CSV routing uncertainty, notification thresholds and stock-image selection. Logged CODE-011.
- Rewrote three discount guides, correcting threshold fields, date/group requirements, mass-discount side effects and the form/model targeting discrepancy.
- Rewrote coupon, voucher and gift-card guides. Recorded CODE-012 and a local mock reproduction; no Core code was changed.
- Rewrote promotion guidance and recorded CODE-013/014 with isolated mock evidence; no plugin code was changed.
- Rewrote order list/status/search guidance, separating payment and order statuses and documenting CODE-015.
- Rewrote quotation guidance, including Send and conversion, and recorded CODE-016.
- Rewrote Add Order guidance with separate mail/payment and storefront security verification.
- Rewrote shopper-group guidance, distinguishing Joomla access groups and documenting current form options.
- Rewrote customer and account guidance, documented deletion and sales-report caveats, and recorded CODE-017.
- Corrected product-information sale-state, required-field, tags, availability and minimum-total guidance; linked canonical discount guides.
- Replaced the obsolete attribute walkthrough with the actual dynamic controls; supplemented existing M-0140 with local URL-parsing evidence.
- Rewrote cart configuration, correcting the old global-timeout and universal minimum-enforcement claims; registered CODE-018.
- Rewrote newsletter configuration; recorded confirmation-state and test-mail defects as CODE-019/020 without changing Core.
- Rewrote manufacturer configuration, including descending-ID “newest” sorting and the admin-only/gift-card notification conditions.
- Rewrote category configuration, correcting ID-based newest and product navigation; recorded CODE-021/022 and closed M-0056 based on the exact source choices.
- Rewrote order configuration, warning of destructive reset and distinguishing separate order/invoice numbering, status and mail paths.
- Rewrote dashboard configuration, retaining section anchors and describing conditional sidebar entries, permissions and the separate statistics setting.
- Rewrote configuration start and About; added Design Style and Performance, explained empty extension tables, and closed M-0065 based on source.
- Rewrote feature settings using current controls and recorded isolated test cases.
- Rewrote SEO settings, documented current contexts and canonical control, and registered tag/alias issues CODE-023/024.
- Rewrote integration configuration from current forms and source, distinguishing PostNord plugin settings from older Pacsoft fields. Corrected wishlist-list wording.
- Replaced the outdated PostDanmark walkthroughs with a source-backed PostNord guide and retained old URLs as pointers; updated menu and overview.
- Added Relatel setup and operational guidance, with shared monitoring and token storage limitations.
- Added Billy setup and accounting verification guidance; documented that account/tax selectors can contact the provider.
- Added Flatpay and Bambora guidance and recorded CODE-025–029; no payment plugin was changed.
- Rewrote General configuration, correcting the old global UTF-8, registration message and last-item-only reservation claims.
- Rewrote User configuration including current checkout required fields and terms-reset limitation.
- Rewrote Price configuration and documented discount-mail status and coupon-duration caveats.
- Rewrote Product configuration, replacing historical public download-path advice and documenting current upload cleanup, product display and relationship settings.
- Rewrote the configuration wizard, documented its current steps and configuration overwrite risk, and updated the configuration overview.
- Rewrote dashboard and sidebar guidance against current source; warned that dashboard card values are not reliable.
- Rewrote newsletter and subscriber guides with current forms, send preview and consent/unsubscribe caveats.
- Rewrote transactional-mail guidance and documented mail-section, status and tag verification.
- Rewrote obsolete editor recommendations and corrected Communication/Newsletter navigation spelling.
- Replaced unsupported historical account-synchronization and third-party media recommendations with current source-backed workflows.
- Updated introductions and removed unsupported historical commercial subscription promises.
- Aligned Getting Started menu labels with the rewritten guides without changing their URLs.
- Rewrote customer questions and reviews, correcting nested template loops and documenting current moderation and privacy checks.
- Updated module installation and search/cart/newsletter/price-filter/compare/free-shipping/discount/currencies/login-greeting/shopper-group/product/Who Bought/similar-tags documentation using current Marketplace manifests and source.
- Updated manufacturer, product tab, mega menu, mass cart and Facebook module guides; recorded the missing manifest script directory as CODE-039 pending package verification.
- Corrected product metadata language and robot selector guidance; recorded potential robot-directive reset as CODE-040 pending runtime verification.

## Open and blocked work

- The triage register contains 344 OPEN IDs: 304 baseline issues and forty separately tracked code findings; M-0056, M-0065, M-0110, CUST-001, CUST-006 and CUST-009 are DONE. These include tasks and unverified suspicions, not 344 confirmed defects. See the master and triage registers for the individual items.
- Joomla runtime, provider integrations, current screenshots and test-site changes require an appropriate isolated environment and any necessary approval; source analysis and documentation continue independently.
- Renderer review is recorded under CODE-003; a fix requires separate approval, and cross-browser/deployment verification remains open.

## Tests

- Previous checks: local renderer simulations, local link/image/fragment scan, register parity, JavaScript syntax and `git diff --check`. These do not establish browser deployment or Joomla runtime behavior.
- After installation/import/export/VAT/FAQ rewrites: local scan passed for 156 articles, 384 Markdown links, 1,801 image references and 629 in-page fragments; legacy anchors in rewritten VAT/import/export/update pages were retained. All 315 IDs matched master/triage and 48 high-priority queue entries matched by status and priority.
- The actual renderer passed local VM tests for directory, `index.html` and uppercase `INDEX.HTML` URLs, startup menu/version requests, internal navigation/history, HTML anchors and external links. Browser deployment, hash-only initial URLs and back/forward behavior were not tested.
- CODE-007: isolated PHP mock supplied USD=1 and EUR=0.9; conversion of 100 with explicit USD/EUR returned 100 and did not load rates (expected 90). No network or provider account was used.
- After currency review: 317 open master and triage IDs matched, as did 50 high-priority entries. Updated media and currency anchor IDs were unique; `node --check` and `git diff --check` passed.
- After template/country review: 315 open IDs and 50 high-priority entries matched; six rewritten articles retained old anchors and their new internal links resolved. Renderer syntax and `git diff --check` passed.
- CODE-008: isolated PHP mock caused the inherited postal-code save to return false; the current model returned true. No database or site was touched.
- After postal-code and attribute review: 316 open IDs and 51 high-priority entries matched; all eight recently rewritten articles retained old anchors and their internal links resolved. Renderer syntax and `git diff --check` passed.
- After custom-field review: 315 open IDs and 50 high-priority entries matched; ten rewritten articles retained original anchors and their new internal links resolved. Renderer syntax and `git diff --check` passed.
- After preliminary product corrections: 315 open IDs and 50 high-priority entries matched; eleven reviewed articles retained original anchors and their new internal links resolved. Renderer syntax and `git diff --check` passed; historical product article had a pre-existing duplicate anchor.
- After product-list and Product Files updates: 315 open IDs and 50 high-priority entries matched; 156 articles, 251 chapter links, 1,386 image references and 502 local anchors resolved. Eleven reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed before the subsequent Product Files clarification.
- After category rewrite: 315 open IDs and 50 high-priority entries matched; 156 articles, 257 chapter links, 1,298 image references and 482 checked local anchors resolved. Twelve reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- Local browser on loopback: directory/index entries loaded, category in-page anchor scrolled and a media article link loaded; Back retained the wrong article, initial article fragment did not scroll, and hash-only index entry rendered nested HTML. Local server stopped. Delayed-load, cross-browser and deployed checks remain unverified.
- After Shipping Methods rewrite: 315 open IDs and 50 high-priority entries matched; 156 articles, 261 chapter links, 1,243 image references and 472 local anchors resolved. Product, category and shipping-method original anchors remained unique. Renderer syntax and `git diff --check` passed before the subsequent box/pickup changes.
- After box and pickup rewrites: 315 open IDs and 50 high-priority entries matched; 156 articles, 262 chapter links, 1,223 image references and 464 local anchors resolved. Product, category and shipping original anchors remained unique. Renderer syntax and `git diff --check` passed before the wrapping rewrite.
- After wrapping rewrite: 315 open IDs and 50 high-priority entries matched; 156 articles, 263 chapter links, 1,188 image references and 454 local anchors resolved. Six reviewed product, category and shipping articles retained unique original anchors. Renderer syntax and `git diff --check` passed.
- After manufacturer rewrite: 315 open IDs and 50 high-priority entries matched; 156 articles, 267 chapter links, 1,147 image references and 441 local anchors resolved. Seven reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- After price rewrite: 315 open IDs and 50 high-priority entries matched; 156 articles, 267 chapter links, 1,117 image references and 432 checked anchors resolved. Eight reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- After supplier rewrite: 316 open IDs and 50 high-priority entries matched; 156 articles, 267 chapter links, 1,089 image references and 413 checked anchors resolved. Nine reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- After duplicate product-media and discount guidance: 316 open IDs and 50 high-priority entries matched; 156 articles, 271 chapter links, 1,021 image references and 403 checked anchors resolved. Ten reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed before the subsequent product list changes.
- After product list changes: 317 open IDs and 50 high-priority entries matched; 156 articles, 271 chapter links, 1,018 image references and 403 checked anchors resolved. Ten reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed before the related-product rewrite.
- After stockroom rewrites: 318 open IDs and 50 high-priority entries matched; 156 articles, 271 chapter links, 985 image references and 389 checked anchors resolved. Thirteen reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- After discount rewrites: 318 open IDs and 50 high-priority entries matched; 156 articles, 271 chapter links, 862 image references and 347 checked anchors resolved. Sixteen reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- CODE-012: isolated PHP mock invoked the actual coupon helper; `amount_left=1` returned the exhausted-code error while `amount_left=2` reached the next validation. No database or site was touched.
- After coupon, voucher and gift-card rewrites: 319 open IDs and 51 high-priority entries matched; 156 articles, 271 chapter links, 744 image references and 311 checked anchors resolved. Nineteen reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- CODE-013/014: isolated PHP mock with a same-day eligible promotion returned false because the plugin formatted 2026 as 2626; award preparation with promotion ID 901 and award ID 7 looked up product 901 and used its category. No database or site was touched.
- After promotion rewrite: 321 open IDs and 53 high-priority entries matched; 156 articles, 271 chapter links, 723 image references and 302 checked anchors resolved. Twenty reviewed articles retained original anchors without duplicate IDs. Renderer syntax and `git diff --check` passed.
- CODE-015: an isolated PHP mock invoked status validation and captured `#__#__redshop_order_status` as its uniqueness-query table. No database or site was touched.
- Order-list/status/search rewrites retained the original fragment IDs; `node --check` and `git diff --check` passed. CODE-016 is based on source inspection only.
- All five rewritten order articles retained their original fragment IDs without duplicates; 323 open triage entries and 54 high-priority queue entries matched by status and priority. Renderer syntax and `git diff --check` passed.
- All three rewritten user articles retained their original fragment IDs without duplicates; 324 open triage entries and 54 high-priority entries matched by status and priority. Renderer syntax and `git diff --check` passed.
- M-0140: local Node URL parsing returned `=product.ajaxDisplayAttributeSet` for the request's task parameter. No Joomla request was made. Removed the duplicate new issue ID and retained the existing ID.
- After product changes: local scan checked 156 articles, 431 chapter links, 453 image references and 220 local anchors without errors. Master and triage had 327 unique IDs with matching status, and 54 queue entries matched priority/status. Renderer syntax and `git diff --check` passed; the first parity script used an incomplete table pattern and was corrected before this result.
- Cart: all six original fragment IDs retained; `node --check` and `git diff --check` passed (Git warned about future line-ending conversion in the product article). Newsletter findings are source inspection only; no mail or Joomla tests were run.
- Newsletter: both original fragment IDs retained; `node --check` and `git diff --check` passed. No mail or Joomla tests were run.
- Manufacturer: both original fragment IDs retained; `node --check` and `git diff --check` passed. No UI or mail tests were run.
- Category: all six original fragment IDs retained; `node --check` and `git diff --check` passed. Master/triage statuses matched across 332 IDs and 57 priority entries; a first script treated repeated evidence rows as duplicate IDs, then was corrected to check repeated statuses. No Joomla UI test was run.
- Order configuration: both original fragment IDs retained; `node --check` and `git diff --check` passed. No destructive operation, order, mail or Joomla test was run.
- Dashboard: all fourteen original fragment IDs retained; `node --check` and `git diff --check` passed. No restricted-user or Joomla UI test was run.
- About retained all four original fragment IDs; start-here had none. `node --check` and `git diff --check` passed. No Joomla UI test was run.
- Feature settings retained all six original fragment IDs; `node --check` and `git diff --check` passed. No Joomla UI or stock test was run.
- SEO retained all nine original fragment IDs; `node --check` and `git diff --check` passed. No Joomla or SEO runtime test was run.
- Integration retained all four original fragment IDs; `node --check` and `git diff --check` passed. No provider or Joomla runtime test was run.
- PostNord original anchors and chapter links were checked; `node --check` and `git diff --check` passed. No provider, shipment or checkout test was run.
- Relatel menu and overview references, `node --check` and `git diff --check` passed. No provider calls or Joomla runtime tests were run.
- Billy menu and overview references, `node --check` and `git diff --check` passed. No accounting API or Joomla runtime tests were run.
- Flatpay/Bambora menu and overview references, `node --check` and `git diff --check` passed. Master/triage matched 339 IDs (333 open) and 60 priority entries. No provider or Joomla runtime tests were run. The first parity check had an incomplete ID-prefix pattern; the corrected check passed.
- General retained all three original fragment IDs and chapter links; `node --check` and `git diff --check` passed. No Joomla or upload runtime test was run.
- User configuration retained both original fragment IDs and chapter links; `node --check` and `git diff --check` passed. No Joomla or consent reset was run.
- Price configuration retained five original fragments and chapter links; `node --check` and `git diff --check` passed. No tax, coupon or mail runtime test was run.
- Product configuration retained all 15 original fragments and its chapter links; `node --check` and `git diff --check` passed. No Joomla runtime, file cleanup or mail test was run.
- Wizard and configuration overview links passed local checks; all 342 triage IDs and 61 priority entries were present in master/triage, and `node --check` and `git diff --check` passed. No wizard runtime test was run.
- Dashboard/sidebar retained all original fragments and their chapter links resolved; `git diff --check` passed. No dashboard runtime or report validation was run.
- Newsletter/subscriber guides retained their original fragments and links; `node --check` and `git diff --check` passed. No mail or unsubscribe runtime test was run.
- Transactional mail retained all seven original fragments; 343 IDs and 62 priority entries matched the checked registers, and `node --check` and `git diff --check` passed. No mail runtime test was run.
- Editor and communication navigation chapter links resolved; `git diff --check` passed. No editor runtime test was run.
- Synchronization and third-party media chapter links resolved; `git diff --check` passed. No synchronization or third-party integration runtime test was run.
- Introductions and subscription guide retained original fragments and links; `node --check` and `git diff --check` passed. Commercial terms were not independently verified.
- Customer-input guides retained their original fragments and navigation links; 344 IDs and 62 priority entries passed register-presence checks, `node --check` and `git diff --check` passed. No Joomla runtime test was run.
- First module batch links resolved and `git diff --check` passed; triage had 345 rows (339 OPEN, 6 DONE). Cart-route behavior is unverified.
- Price-filter, compare and shipping-promotion article links resolved and `git diff --check` passed; no module runtime tests were run.
- Discount, currencies and greeting article links resolved; triage had 346 rows (340 OPEN, 6 DONE) and `git diff --check` passed.
- Shopper-group article links resolved; triage had 347 rows (341 OPEN, 6 DONE), 63 priority entries and no unmatched queue IDs; `git diff --check` passed.
- Product, Who Bought and similar-tags article links resolved and `git diff --check` passed; functionality remains runtime-untested.
- All module article chapter links resolved; triage had 349 IDs (343 OPEN) and 63 priority entries matched triage status/priority. Renderer syntax and `git diff --check` passed; no Joomla module runtime test was run.
- Baseline on 2026-11-24: documentation branch `modernize`, Core branch `develop`, Core HEAD `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`; 313 OPEN triage entries.

## Decisions and working rules

- The maintainer requested continuous autonomous modernization on 2026-11-24: replace outdated guidance with source-backed current documentation, retaining historical details only when useful.
- Continue to the next task when one needs runtime tests or approval; record the remaining blocker and specific test steps. Do not claim unrun tests.
- No Core or payment plugin changes, production/test-site changes, commits, pushes or publication without explicit approval.
