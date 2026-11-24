# redSHOP documentation — Stage 23 quality audit (FAQ review addendum)

## Verified register integrity

- 310 baseline task rows parsed from stage 22 master register; three separately tracked code findings were appended after the FAQ source review.
- 313 unique IDs in the current master/triage registers; zero duplicate IDs.
- All status values are OPEN; no issue was closed. Only source inspection, local renderer simulation and isolated mocks were run; no Joomla, provider or browser runtime test was performed.
- The baseline's 237 M-series entries were consolidated earlier from 310 source occurrences; 73 additional area-prefixed entries were appended, then CODE-001 through CODE-003 were added. These counts are **not** counts of confirmed defects.
- Source tracker references remain in the original master.

## Priority labels as recorded

| Priority | Count |
|---|---:|
| Unassigned | 226 |
| High | 47 |
| Medium | 40 |

**Caveat:** Priority for M-series items is inferred from embedded words in descriptions, if present. `Unassigned` is not automatically low priority.

## Provisional workstreams (keyword classification; overlapping subjects assigned to first match)

| Workstream | Items |
|---|---:|
| Product and catalog | 80 |
| Documentation quality | 61 |
| Other functional verification | 57 |
| Checkout and orders | 28 |
| Shipping and tax | 27 |
| Security and privacy | 22 |
| Payments and accounting | 20 |
| Release and Joomla 6 | 18 |

## Quality gates before publication

1. **Content preservation:** Obtain and retain every original article; compare the full original text, image links, examples, code and headings to the proposed replacement. Many stage 14–21 outputs are explicitly shorter review drafts, not publication-ready migrations.
2. **Source verification:** Map each documented setting to current branch `develop` forms, controllers, models, plugins and template files. Record exact path and current commit hash before marking verified.
3. **Runtime verification:** On isolated `https://www.print.dk/tests/redshop6`, test administrator workflows, frontend behaviour and user permissions using test accounts and without contacting live customers or accounting/payment providers.
4. **Joomla 6:** Run installation/upgrade and regression tests on an actual Joomla 6 environment; Joomla 5 source compatibility alone is not evidence.
5. **Editorial:** Check all relative links, screenshot URLs, translations, spelling, code snippets and navigation.
6. **Release:** Cross-check version, ZIP, manifest, changelog, tag and documentation, then validate staging publishing.
7. **Approval:** Publish only after review; no GitHub writes or staging mutations have been performed in this stage.

## Confirmed process gaps

- Documentation stage outputs have often been **review notes** instead of full replacements; content-preservation checks remain open.
- The register mixes documentation gaps and suspected software defects; the CSV provides a first-pass workstream grouping, not final bug confirmation.
- No evidence of end-to-end tests on the Joomla test installation is included in this audit.
- The FAQ index's original `chapters/faq/` paths work in a local simulation of the actual renderer; published browser routing remains unverified. Do not replace them with sibling paths without changing and testing the renderer.
- The historical changelog archive ends at 3.0.2; its overview now distinguishes the archive from the Core source changelog. Published release identity and completeness remain subject to release verification.

## Proposed immediate order

1. Reconstruct full-fidelity article drafts, preserving original text and media references.
2. Audit high-impact security/payment/checkout and upload issues against actual handlers, then mark each as verified, not applicable, or requires test.
3. Run repeatable test-site acceptance cases; attach outcomes and screenshots to the issue IDs.
4. Reconcile duplicate or related tasks only after human review, preserving stable IDs as aliases.
5. Review and publish approved documentation in a separate, explicitly authorized GitHub change.
