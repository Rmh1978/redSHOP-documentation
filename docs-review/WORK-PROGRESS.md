# Documentation modernization — ongoing work

## PAUSED — controlled checkpoint, 2026-11-27

The maintainer explicitly paused the project after the current stage. Do not
start another stage or resume automatically. All older ACTIVE headings and
next-action statements below are historical. Resume only on a new explicit
instruction, after comparing branches, revisions and worktrees, rechecking
relevant Core changes and GitHub Issues, and revisiting affected documents.
Preserve unrelated changes; avoid repeating work that remains valid.

### Completed stage and open work

- Wishlist guest button: the inspected product layout omits `data-target`;
  the actual JavaScript handler prevents default and expects that target. A
  Node execution with synthetic matching attributes and DOM stubs found
  `form#undefined` and no submission; a supplied target control submitted.
  CODE-281 / #321 created via dry-run and controlled sync, reconciled unchanged
  and labels verified. The module guide and five review registers were updated.
  Source-only paths for product addition and removal were also inspected. This
  is a completed bounded stage, **not** a completed wishlist review.
- Related Products: actual entry with stubs skipped related lookup for `id=42`
  and called it for `pid=42`. Updated CODE-210 / #255 via dry-run and an
  evidence comment; reconciliation returned unchanged. Guide and records
  updated; no duplicate issue created.
- Next stage, only after explicit resumption: inspect the guest wishlist link
  and registered add/remove flows, their generated markup and handlers;
  compare #321 and other existing Issues before writing. Remaining work also
  includes individual page and code review, unmapped functions/configuration/
  extensions, Marketplace, architecture, historical pages, navigation and
  accessibility, private security holds, internal handbook, test plans,
  isolated runtime validation and publication gates.
- No new security hold and no completed security review in the latest stage.
  Existing 57 holds require private assessment; they are not confirmed
  vulnerabilities. No authorized private reporting channel has been identified.
  No production extension, functional Core, live site, commit, push or
  publication was changed or performed.

### Progress and basis

| Area | Measured state | Interpretation |
| --- | --- | --- |
| Documentation modernization | 0/161 original pages finally approved (0%); 183 inventory paths, including 143 historical `complete`, 22 `partial`, 17 historical-preserved and one historical-annotation | Older `complete` is an editorial classification, not final approval; new guides remain partial. |
| Individual source review | 183/183 inventory pages have partial source records (100% record coverage); 0/161 original pages finally approved | Record presence and selected source tracing are not full source review or runtime validation. |
| Documentation quality | 143/143 legacy quality records marked reviewed (100% of that queue); 0/161 original pages finally approved | The older queue is a register/quality pass, not current full-quality approval. |
| Function coverage | 128/385 partial mappings (33.2%); 257/385 need mapping (66.8%); 0 fully mapped | These are inventoried XML/form/extension entries, not all redSHOP functionality. |
| Configuration | 80/84 admin forms partially mapped (95.2%); 4/84 need mapping (4.8%); 0 fully mapped | Admin forms are only a proxy, not the complete configuration universe. |
| Plugin/module documentation | Plugins 20/266 partial (7.5%), 246 unmapped; modules 28/35 partial (80.0%), 7 unmapped; 0 fully mapped | Mapping is not full reference quality or runtime verification. |
| Marketplace documentation | Classification and selected guides inspected; no complete-coverage denominator | Percentage not measurable; packaging and full publication pipeline remain open. |
| Internal technical documentation | Private handbook absent | 0 documents reviewed in this interval; total and percentage unknown; blocked by missing repository. |
| Issue management | 252/324 ledger rows synced (77.8%); 57 holds and 15 test-only | 252 distinct mapped issues; local ledger state, not a full live audit. No pending ordinary rows at checkpoint. |
| Individual code findings | 250 individual review rows for 323 current Core findings (77.4% as a row-count proxy); original 173/199 partial records (86.9%) | Additional individual records and findings may not have a one-to-one denominator; partial is not final verification. |
| Security review | 0/57 holds recorded as privately completed (0%) | Holds require individual private review; no exploitability or severity is implied. |
| Automated tests | Issue-sync tests and selected isolated fixtures passed | Total relevant tests and completion percentage unknown; no complete test-suite claim. |
| Runtime verification | No real Joomla/browser/database/provider runtime in this stage | Total and percentage unknown; stubs cannot establish Joomla 5.4/6 compatibility. |
| Publication gates | 0/7 complete (0%); 3 partial and 4 blocked | No approval or permission to publish. |

**Indicative overall estimate: about 22%, very low confidence (roughly 12–32%).**
This is a planning model, not an acceptance measure: weights are 25% page
source/content work, 20% function/extension mapping, 15% Issue management,
10% private security, 15% tests/runtime, 10% publication gates and 5% internal
handbook. As deliberately conservative proxies, partial page records receive
35% credit, partial mappings 25%, and synced ledger rows their recorded share;
security, tests/runtime, gates and absent handbook contribute zero when no
defensible completion denominator exists. Thus `25*.35 + 20*(128/385)*.25 +
15*(252/324) = 22.1` percentage points. Zero proxy credit does **not** mean
no tests or work occurred. The previous checkpoint did not have a weighted
estimate; applying the same model retrospectively to its 163 partial pages,
1/385 partial mapping and 216/283 synced ledger gives approximately 20.2%,
an illustrative increase of **1.9 percentage points**. Scope and denominators
changed, so this is not a precise or historically recorded delta.

Since the preceding controlled pause: inventory grew 163 to 183 (+20 paths);
22 chapter files are untracked now versus two new guides listed then, suggesting
about **20 new guides**, not necessarily 20 completed reviews. The exact number
of pre-existing pages improved since that pause cannot be reconstructed from
the current cumulative dirty diff; 127 tracked chapter files are modified in
total, including earlier work. Core findings grew by 41 new review IDs
CODE-241–281; five are additional private holds and 36 map to newly created
Issues #286–#321. Individual review rows increased 214 to 250 (+36 net);
all are partial records, not 36 fully verified findings. Many existing Issues
were updated, including #255 and #308; the exact distinct update count is
unavailable because the ledger is not an immutable event log. There is no
defined finite stage inventory: one bounded current stage completed and the
number of remaining stages cannot be calculated. A coarse planning estimate
is **400–900 person-hours remaining**, very uncertain, assuming substantial
overlap between page, feature and finding reviews and excluding waiting for
access, approvals or external providers. The rough range assumes 1–2 hours
for each of 183 partial page records, 0.3–1 hour for each of 257 unmapped
entries, 0.5–1.5 hours for each of 57 private holds, plus 100–200 hours for
remaining finding follow-up, tests and gates after overlap. The estimates are
unvalidated and not a schedule commitment.

### Revisions, tests, blockers and commit preparation

- Core `develop` `ff72aba6939637ed8fd55d4acc4c109f641adccc`: 2 modified
  instruction files, 0 untracked/deleted/staged. These are project pause
  instructions, not functional Core changes. Review separately from any
  unrelated future Core changes. Suggested group/message:
  `docs: record documentation review pause`.
- Documentation `modernize` `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`:
  141 tracked modified, 32 untracked, 0 deleted/staged. Of these, 127 tracked
  modified and 22 untracked files are chapter pages; other files include menu,
  instructions, review registers, Issue tooling and tests. The cumulative diff
  includes older and potentially maintainer-owned work; review ownership and
  dependencies before staging. Suggested groups/messages: customer guides
  and navigation `docs: improve redSHOP manual guidance`; evidence and
  checkpoints `docs: record review evidence and pause checkpoint`; sync tooling
  and tests `test: strengthen issue synchronization handling`. These groups
  cross-reference each other and may require coordinated review.
- Legacy extensions `master` `68c3819e1fa444a1bd3c46322045d4820a52fea6`:
  clean; no commit group. Other available template and Mouseflow repositories
  were clean and untouched. Private handbook path absent.
- Issue-sync tests, eight nonempty/unique CSV-key checks, wishlist Node stub
  probe, wishlist Markdown rendering and whitespace checks passed. Related
  Products stub probe and its sync reconciliation passed. Whitespace emitted
  LF/CRLF conversion warnings. GitKraken detail access was denied; GitHub read
  and controlled synchronization worked. Real Joomla, database, browser,
  session, provider and production behavior remain unverified.
- A bounded common credential-pattern scan of 173 modified/untracked
  documentation files and two Core instruction files found zero matching files. This is not exhaustive and
  cannot exclude customer data, unrecognized credentials or sensitive security
  details. Private holds and historical review material require authorized
  private review before inclusion in any public commit or publication.
  Nothing was staged or committed; **commit readiness is conditional on that
  review and maintainer selection**, not a security clearance.

### Current follow-up — payment guide and finding batch

- CODE-210 / #255: related-products entry also reads `pid`; an isolated test
  of the actual entry with stubs skipped lookup for `id=42` and called it for
  `pid=42`. Updated guide and existing product-context investigation; the
  controlled dry-run and evidence comment succeeded and reconciliation was
  unchanged. Existing priority retained. Real Joomla routing, menu context,
  database and storefront remain unverified. This adds no finding or inventory
  row; totals remain 128/385 partial mappings, 322 Core findings, 249 individual
  reviews and 323 ledger entries. Next: trace wishlist add/remove individually.
- Related Products: added a partial guide and navigation after inspecting the
  manifest, entry, layout and selected related and image helper paths. Actual
  entry with enabled/selected stockroom and stubs raised a null query error in
  isolated include scope; no-selection control rendered. Created #320 /
  CODE-280 after duplicate checks and dry-run, reconciled unchanged and
  verified labels. No Joomla include scope, database or storefront tested.
  Guide/navigation rendering, links, Issue-sync tests, registry key uniqueness
  and whitespace passed. Inventory 128/385 partial mappings (33.2%), 257 need
  mapping; 322 Core findings, 249 individual records, 323 ledger rows
  (251 synced, 57 private holds, 15 test-only), 598 triage and 183 page/source
  records. Continue individual unfinished paths.
- Product Slideshow: added partial guide and navigation after inspecting the
  manifest, entry, selected helper paths and layout. Actual layout with
  different synthetic product lists and stubbed asset calls rendered the same
  placeholder images. Created #319 / CODE-279 after duplicate checks and
  dry-run, reconciled unchanged and verified labels. No real XML write, query,
  network asset, Joomla or browser was tested. Rendering, links, Issue-sync
  tests, registry key uniqueness and whitespace passed. Inventory 127/385
  partial mappings (33.0%), 258 need mapping; 321 Core findings, 248 individual
  records, 322 ledger rows (250 synced, 57 private holds, 15 test-only), 597
  triage and 182 page/source records. Continue individual unfinished paths.
- CODE-278: actual Main Category Scroller thumbnail helper with no full media
  and a synthetic existing default-image file raised a null method error;
  no-default control returned noimage. Updated the partial guide, created #318
  after duplicate checks, distinguished #316, reconciled unchanged and verified
  labels. Guide rendering, Issue-sync tests, registry key uniqueness and
  whitespace passed. No real image processing, Joomla or storefront was
  tested. Totals: 320 Core findings, 247 individual records, 321 ledger rows
  (249 synced, 57 private holds, 15 test-only), 596 triage; inventory remains
  126/385 partial mappings (32.7%), 259 need mapping. Continue individual
  unfinished source paths.
- Featured Product module: added a partial guide and navigation based on its
  manifest, entry, helper, layout, language and selected image and pricing
  signatures. Inventory 126/385 partial mappings (32.7%), 259 need mapping;
  181 page/source records. Guide/navigation rendering, links, mapping,
  page-key uniqueness and whitespace passed. No new issue or Joomla, database,
  carousel, pricing or checkout runtime verification. Continue unfinished
  wishlist and other individual module source paths.
- Minicart: added a partial guide and navigation after inspecting manifest,
  entry, layout, CSS, language and selected cart calculation paths. Actual
  default layout with fixed synthetic populated cart and stubs rendered
  identically with the four display options all on or all off. Shared total
  calculation reads a published Cart module record. Created #317 / CODE-277
  after duplicate checks and dry-run, reconciled unchanged and verified
  labels. No real recalculation, Joomla, browser or checkout was tested.
  Guide/navigation rendering, links, Issue-sync tests and whitespace passed.
  Inventory 125/385 partial mappings (32.5%), 260 need mapping; 319 Core
  findings, 246 individual records, 320 ledger rows (248 synced, 57 private
  holds, 15 test-only), 595 triage and 180 page/source records. Continue
  individual wishlist and other unfinished module paths.
- Wishlist: added a partial module guide and navigation after reading module
  source and selected shared wishlist and feature-default paths. The layout
  checks the returned list collection rather than product count. Compared
  shopper-group category, product and logo and Tags Similar manifests with
  existing guides and prior source records. Mapped five partial: 124/385
  (32.2%), 261 need mapping; 179 page/source records. Guide/navigation
  rendering, links, mapping targets, unique page keys and whitespace passed.
  No new issue; Joomla wishlist persistence, sessions, accessibility and
  private security assessments remain unverified. Continue wishlist and other
  unfinished source paths.
- Module mapping: compared newsletter, price filtering, product comparison,
  search and Who Bought manifests and selected entry/layout paths with their
  existing guides and prior source records; relevant older module source was
  unchanged. Mapped five partial: 119/385 (30.9%), 266 need mapping. Guides
  rendered and links and mapping targets resolved; whitespace check passed.
  No new issue or article change in this limited pass. Joomla sessions, search,
  pricing, checkout, mail and private holds remain unverified. Continue
  shopper-group modules and other unfinished individual paths.
- Category scrollers: compared both module manifests, entries, layouts, helper,
  English language and Marketplace classification; added a partial guide and
  navigation. Actual Main Category Scroller layout raised TypeError for integer
  and null router returns in a PHP 8.4 stub probe; #316 / CODE-276 was created
  after duplicate checks and dry-run, source anchor corrected via a follow-up,
  and reconciliation returned unchanged. Mapped both scrollers and Mega Menu
  partial: 114/385 (29.6%), 271 need mapping. Totals: 318 Core findings, 245
  individual records, 319 ledger rows (247 synced, 57 private holds, 15
  test-only), 594 triage, 178 page/source records. Guide/navigation rendering,
  links, registry keys, issue-sync tests and whitespace checks passed. An
  initial renderer test incorrectly demanded a heading in the list-only menu;
  the corrected list check passed. Real Joomla, router, browser, database,
  package and checkout remain unverified. Continue other unfinished work.
- Module mapping: compared cart, category, manufacturer scroller, redMASSCART
  and product-tab manifests and selected entry/layout code with existing guides
  and prior source reviews. Relevant older module paths were unchanged since
  their recorded Core revision. Mapped five partial: 111/385 (28.8%) partial
  mappings, 274 need mapping. Target existence, inventory statuses and
  whitespace checks passed. No new issue or article change in this limited
  pass. Actual Joomla rendering, checkout, browser, package behavior and
  private security holds remain unverified. Continue Mega Menu and other
  unfinished individual paths.
- Currency and free-shipping modules: compared current manifests, entries and
  layouts plus the currency helper with their existing guides and prior rate
  review. Mapped both manifests partial; guides rendered and links, registry
  and whitespace checks passed. Inventory is 106/385 partial mappings (27.5%),
  with 279 needing mapping; no Joomla session, provider or checkout was tested.
- Discount and login greeting: compared current manifests, entries and
  layouts with existing guides and rechecked the current billing-name helper.
  Related discount helpers were unchanged since the prior source review.
  Mapped both manifests partial; guides rendered and links resolved; no
  unnecessary article changes. Inventory is 104/385 partial mappings (27.0%),
  with 281 needing mapping. No Joomla runtime or private security assessment
  was performed; the existing greeting hold remains private.
- Backend access: added a partial guide and navigation based on the rules
  form, menu, view, model, controller and action declarations. Mapped the form
  partial. Guide/navigation rendering, links, registry checks and whitespace
  passed. Inventory is 102/385 partial mappings (26.5%), including 80 admin
  forms; 283 need mapping. Page/source records are 177. No actual Joomla ACL
  persistence, inheritance or enforcement was tested; private holds remain
  private. Continue individual source paths.
- CODE-275: actual category exporter `processData` with synthetic rows and
  media stubs repeated missing main-image lookups, emitted warnings and
  skipped thumbnail fallback. A populated-main-image control requested the
  thumbnail. Added a concise warning and #315 after duplicate checks and
  dry-run; reconciled unchanged. No real Joomla export, database or image
  file tested. Fixture, Issue-sync tests, guide rendering, registry shape and
  whitespace checks passed. Counts: 317 Core findings, 244 individual records,
  318 ledger rows (246 synced, 57 private holds, 15 test-only), 593 triage and
  176 page/source records. Continue other unfinished paths.
- Product search integrations: added partial guide and navigation distinguishing
  Smart Search, legacy content search and the redSHOP module after comparing
  manifests and selected index/query/event paths. Mapped both plugin manifests
  partial. Guide and related navigation rendered and links resolved; registry
  shape/uniqueness and whitespace passed. Inventory is 101/385 partial
  mappings (26.2%), 284 need mapping; 176 page/source records. Actual Joomla
  index, browser, permissions and search remain unverified. Continue remaining
  individual paths and pages.
- Export continuation: checked attribute and custom-field manifests, headers
  and relevant query/selector paths; clarified multi-product filtering and
  field-data join scope and mapped both partial. Guide rendering, registry and
  whitespace checks passed. Inventory is 99/385 partial mappings (25.7%),
  with 286 needing mapping. No actual Joomla/database export was tested.
- Export continuation: reviewed user, shipping-address and subscriber
  manifests, headers and query scopes. Clarified billing/shipping records,
  empty password column and subscriber consent/publication limitations;
  mapped all three partial. Guide rendering, registry and whitespace checks
  passed. Inventory is 97/385 partial mappings (25.2%), with 288 needing
  mapping. No actual Joomla/database export was tested.
- Export continuation: compared shopper-group product and attribute-price
  manifests, headers and queries. Clarified product-number exclusion and the
  option-price section and quantity/discount columns; mapped both manifests
  partial. Guide rendering, registry and whitespace checks passed. Inventory
  is 94/385 partial mappings (24.4%), with 291 needing mapping. No real Joomla
  export, database or price calculation was tested.
- Export continuation: compared product-stockroom manifest/headers/query and
  the order manifest with the previously reviewed order export. Documented
  stockroom CSV columns and association scope; mapped both manifests partial.
  Rendering, registry checks and whitespace passed. Inventory is 92/385 partial
  mappings (23.9%), with 293 needing mapping; Joomla SQL and export untested.
- Export continuation: reviewed manufacturer and related-product manifests,
  queries and processing. Clarified manufacturer grouped product IDs and image
  references, plus the two related-product SKU columns; mapped both manifests
  partial. Guide rendering and links, register checks and whitespace passed.
  Inventory is 90/385 partial mappings (23.4%), with 295 needing mapping.
  No actual Joomla SQL, export or media runtime was tested.
- Export adapters: compared category and product export manifests and selected
  code with the existing guide. Added a category image-file backup warning and
  mapped both manifests partial. The guide rendered and links resolved;
  inventory/source registry checks and whitespace passed. No actual Joomla
  export or media runtime was tested. Function inventory is 88/385 partial
  mappings (22.9%); 297 still need mapping. Continue individual adapters and
  other unfinished page paths.
- AcyMailing and Quick Icon: documented the separate product-email plugin's
  tag formats and template setting; the actual `getProduct` with synthetic
  data and stubbed image helper passed the configured width as image product
  ID. Updated #254 after a dry-run and reconciled unchanged. Real image helper,
  Joomla and email preview/delivery remain unverified. Documented optional
  Quick Icon group matching and default from its source; no Joomla module or
  ACL runtime was tested. Mapped both manifests partial. Function inventory
  now has 86/385 partial mappings (22.3%), 299 need mapping; this is not
  completion. Three affected guides rendered with the bundled parser and their
  chapter targets existed; Issue-sync tests, registry shape/uniqueness and
  whitespace checks passed. Continue individual pages and plugin paths.
- Product content: added a partial customer guide and navigation. Actual editor
  button with stubs generated a singular product view while the selector
  template is in the plural view. #314 created after duplicate checks and
  dry-run, then reconciled unchanged; Joomla dispatch, modal, selection and
  content rendering remain unverified. Template lookup source filters published
  templates. Guide, overview, editor guide and menu rendered with bundled
  Markdown; their chapter links resolved. Issue-sync tests and whitespace
  check passed. A first registry-shape check found three older statistics rows
  missing the quality column; corrected them as partial, without inventing
  runtime verification, then validated unique keys and row shapes.
  Function inventory: 84/385 partial mappings (21.8%), including 79 admin
  forms; 301 need mapping. 316 Core findings, 243 individual review records,
  317 ledger rows (245 synced, 57 private holds, 15 test-only), 592 triage
  entries and 175 page/source records. Original baseline fully approved pages
  remain 0/161; mappings and partial records are not complete reviews.
  Continue AcyMailing product integration and other unfinished source paths.
- Attribute follow-up: actual attribute and redSHOP base model state population
  with application and Joomla base stubs rejected the status heading's dotted
  field in both directions and fell back to ID; name and unqualified status
  controls passed. #305 created after comparing #303, dry-run and reconciliation.
  Corrected #304's source anchor with an evidence comment. Added qualified
  option-price guidance to the product price page after reviewing the option
  layouts, list, editor, controller, model, lookup and overlap helper; list fixture and
  issue-sync tests passed. Real Joomla, browser, MySQL and storefront prices
  remain unverified. CODE-264 is a source-only private hold; no ordinary Issue
  was created, the authorized private reporting channel is unavailable and
  runtime impact and exploitability are unverified. Continue option-price
  calculations and partial pages without treating the hold as a completed review.
- CODE-058: actual attribute-price table and endpoint helpers with SQLite and
  Joomla/database doubles accepted an enclosing range; contained and disjoint
  controls passed. A zero-start enclosing range passed, a positive start with
  zero end failed quantity-order validation, and matching IDs across sections
  interfered in the fixture. #120 updated after dry-runs and reconciled unchanged. Earlier
  product-price fixture not rerun; relevant sources unchanged since its
  revision. Linked the product and attribute-set editors to option-price
  guidance after checking the shared nested layouts. Real Joomla, MySQL and
  storefront remain unverified.
- Attribute stockroom: actual ProductModel with SQLite and lookup/application/
  event stubs persisted an earlier row before rejecting a later one; reversed
  failure and valid controls passed. Added dialog guidance and #306 after
  comparison with #157 and #228; dry-run and reconciliation passed. Joomla
  dispatch, MySQL, browser and real event effects remain unverified. An
  empty association lookup emitted two warnings before stubbed insertion;
  #307 created and reconciled separately. Actual insertion and Joomla error
  handling remain unverified.
- Product attribute list: added partial source-backed guide and navigation;
  mapped editor and filter forms and the separately checked state filter.
  Actual AttributesModel with list-state/query stubs ignored nested product
  input; actual bundled Joomla table binding with event stubs ignored the
  editor publication field on a schema-shaped object. #303 and #304 created
  after dry-run and reconciled. Full Joomla form submission, table constructor,
  database and storefront remain unverified. Continue property paths.
- Postal-code and stock-image filters: compared both forms with current list
  models and the stock-image view. Documented the postal-code model's ID
  ascending default and mapped both filters; stock-image filters are hidden.
  Rendered both guides and checked XML counts and targets. No Joomla list,
  media or database runtime verification.
- Newsletter follow-up: re-read current newsletter and subscriber forms and
  list models. Clarified that subscriber user and newsletter headings sort by
  IDs rather than displayed names. Mapped both filters and the subscription
  form, rendered both articles and checked links and XML counts. Source-only;
  actual Joomla list, consent and mail runtime remain unverified. Actual
  unsubscribe helper returned success without a query for a guest and empty
  email; checkout has a sign-off branch that passes no email. #302 created
  after comparing #284 and #189; reachability and real checkout unverified. Continue
  other incomplete page or recipient paths; private holds remain private.
- Customer tags: added partial source-backed guide and navigation. The list
  counts association rows rather than distinct users or products; records
  can be shared. Actual admin model with SQLite and stubs returned false for
  publication against schema-shaped tables, and success for an uncommitted
  single deletion and ineffective multiple-ID deletion. #298 and #299 created
  after dry-run and reconciled unchanged. Actual redSHOP base task execution
  with task-map stubs fell back to display for missing toolbar tasks; #300
  created and reconciled. Actual account Twig with synthetic context emitted
  literal PHP detail links and an identifier rejected by actual editTag with
  a stub table; #301 created and reconciled. Actual Joomla factory and action dispatch,
  MySQL and storefront are not runtime verified. CODE-255
  is a private security hold, with no ordinary Issue; exposure and
  exploitability remain unverified. Continue tag action and persistence
  review separately from private security investigation.
- Text Library: added a partial source-backed guide and navigation. The
  published-text replacement helper reads all sections without restriction;
  the guide recommends distinct names and testing each template path. Mapped
  both forms after XML field-count checks; rendered guide and navigation and
  checked chapter targets and CSV keys. No Joomla editor, database, browser or
  newsletter delivery runtime was verified. Continue unfinished source paths.
- Sample follow-up: added partial source-backed guide and navigation. Actual
  sample save with SQLite and stubs regenerated a colour ID and removed rows
  on absent input. #294 created after dry-run and reconciled unchanged.
  Actual Twig with schema-shaped rows and a stub helper omitted names and
  passed null; equivalent SQLite detail join failed on an old column. #295
  created after dry-run and reconciled unchanged. Real Joomla, MySQL, inline
  edits and existing requests remain unverified. Actual bulk-request model
  with SQLite and stubs returned success without changing multiple IDs; #296
  created and reconciled. Catalogue/sample request task and selection
  mismatches reproduced with actual redSHOP base dispatch and bundled Joomla
  grid helper using stubs; #297 created and reconciled. Full dispatch and UI
  remain unverified. Continue other request and page paths.
- Catalogue follow-up: added a partial source-backed guide and navigation.
  Actual mail method with a database stub failed to resolve its helper after
  the controller's request-store path; separate actual-controller probe
  reported success after a failed mail stub. #293 created and updated after
  dry-runs and reconciled unchanged. CODE-250 is a private hold with no
  ordinary Issue. Real Joomla, browser, persistence and mail unverified.
  Continue remaining catalogue request/media and individual page work.
- Currency follow-up: actual Currency Layer initialization with controlled
  clock and mocked provider retained an old cached rate on an eligible
  refresh; no-cache control used the fetched rate. Added customer guidance and
  created #292 after comparing #72 and #264, dry-run and unchanged
  reconciliation. Real Joomla, provider, checkout and accounting unverified.
- Function inventory: mapped 46 existing administrator forms to their
  individually reviewed guides after checking current XML counts and source
  and manual targets. That earlier pass reached 48 of 385 partial mappings
  (12.5%). Corrected the template count from eight to five
  active XML fields; three were comments. This is mapping progress, not functional completion
  or Joomla runtime verification.
- Stockroom filter follow-up: compared the one-field form and current list
  model against the existing guide and mapped it as partial. Compared the
  field-group search and section form with its model and guide and mapped
  it as partial; the field-group ordering fixture passed. The custom field
  list filter was also mapped after source comparison. CODE-267 is a source-only
  private hold; no ordinary Issue was created, the authorized reporting channel
  is unavailable, and runtime impact and exploitability are unverified. Function inventory
  previously reached 53/385 partial mappings (13.8%) after comparing gift-card and mail
  filter forms and list queries with their guides, including 51 admin forms; 332 entries
  still need mapping. This is not
  content approval or runtime verification.
- Category filter follow-up: compared all three fields with the list model and
  guide, including template assignment rather than filtering. Mapping is
  partial; Joomla remains unverified. Inventory previously reached 54/385 partial
  mappings (14.0%), including 52 admin forms; 331 still need mapping.
- Manufacturer filter follow-up: compared the search form and current list
  query with the guide. Mapped it as partial; inventory then had 55/385 partial
  mappings (14.3%), including 53 admin forms; 330 entries still need mapping.
  Joomla runtime remains unverified.
- Order list filter follow-up: compared seven fields and the search and date
  query with the guide; documented how entered spaces are treated. The form
  is mapped partial. Inventory then had 56/385 partial mappings (14.5%),
  including 54 admin forms; 329 entries needed mapping. This is source-only,
  not full functional coverage or Joomla UI/database verification.
- Order-status filter follow-up: compared the search form and list query with
  the guide and documented its default ordering. Inventory then had 57/385
  partial mappings (14.8%), including 55 admin forms; 328 entries need mapping.
  Joomla UI and database runtime remain unverified.
- Mass-discount filter follow-up: compared both fields and current list query
  with the guide and mapped it partial. Inventory now has 58/385 partial
  mappings (15.1%), including 56 admin forms; 327 entries need mapping.
  Joomla UI and database runtime remain unverified.
- Media filter follow-up: the default media template renders separate type and
  section controls, and the query reads those states rather than the three XML
  filter fields. Left the form unmapped pending alternate-layout and runtime
  tracing; did not imply the XML controls are visible.
- Promotion filter follow-up: compared its search form and current list query
  with the guide and mapped it partial. Inventory then had 59/385 partial
  mappings (15.3%), including 57 admin forms; 326 entries need mapping.
  Joomla UI and database runtime remain unverified.
- Questions filter follow-up: compared both fields and the current list query
  with the guide and documented top-level questions and default order. Inventory
  then had 60/385 partial mappings (15.6%), including 58 admin forms; 325 needed
  mapping. Joomla UI and database runtime remain unverified.
- Ratings filter follow-up: compared the search form and list query with the
  guide and documented default order. Inventory then had 61/385 partial mappings
  (15.8%), including 59 admin forms; 324 entries needed mapping. Joomla UI and
  database runtime remain unverified.
- Shipping-box filter follow-up: compared the search form and current query
  with the guide; existing ID-search guidance matches the source. Mapped partial;
  inventory then had 62/385 partial mappings (16.1%), including 60 admin forms;
  323 needed mapping. Joomla UI and database runtime remain unverified.
- Shipping-method filter follow-up: compared XML, list model, view and shared
  layout; documented hidden filter controls in the default view. Inventory then
  had 63/385 partial mappings (16.4%), including 61 admin forms; 322 needed
  mapping. Joomla UI and database runtime remain unverified.
- Plugin-list follow-up: compared six filter fields, list model, menu and
  view; added navigation and metadata-selection caveat to the overview.
  Inventory then had 64/385 partial mappings (16.6%), including 62 admin forms;
  321 needed mapping. Joomla UI and database runtime remain unverified.
- Shopper-group filter follow-up: compared search form and list query with
  the guide and documented default ordering. Inventory then had 65/385 partial
  mappings (16.9%), including 63 admin forms; 320 needed mapping. View resolution
  and Joomla UI/database remain unverified.
- Customer statistics: added a partial source-backed guide and navigation for
  the paid-order report, date control and export/print cautions. Mapped its
  filter partial. Inventory now has 66/385 partial mappings (17.1%), including
  64 admin forms; 319 need mapping. No actual Joomla database, browser, export
  or print runtime verification. CODE-268: actual controller with synthetic
  rows and stubs emitted an extra CSV field for a comma-containing name; #308
  created after comparison with #78 and #107 and dry-run, then reconciled
  unchanged. Issue-sync tests passed.
- Order statistics: added a partial source-backed guide and navigation; mapped
  the filter with its XML search field noted as not rendered by the default
  template. CODE-269: actual export controller with synthetic aggregates and
  stubs failed on empty input and warned on missing order ID. #309 created after
  duplicate comparison and dry-run, then reconciled unchanged. Inventory then
  had 67/385 partial mappings (17.4%), including 65 admin forms; 318 needed
  mapping. No Joomla UI or database runtime verification.
- Product statistics: added a partial source-backed guide and navigation;
  mapped the date filter, documenting grouping, CSV and SQL-mode limitations.
  Inventory now has 68/385 partial mappings (17.7%), including 66 admin forms;
  317 need mapping. Actual product export controller with synthetic data and
  stubs produced an extra CSV field for a comma-containing name; CODE-268 scope
  update synchronized to #308 after dry-run and reconciled unchanged. No Joomla
  UI database export or print runtime verification. CODE-270: actual product and
  base model state with stubs rejected order-count sorting in both directions;
  unit-sold controls passed. #310 created after dry-run and reconciled unchanged.
- CODE-271 investigation: actual product-statistics model issued a session
  SQL-mode statement captured by a database stub; the MySQL 8 worklog describes
  removal of one mode. No MySQL server or container tooling available; real
  database acceptance and Joomla runtime effects remain unverified. #311
  created; investigation and compatibility labels corrected and verified;
  reconciled unchanged.
- Supplier filter follow-up: compared the search form and current query with
  the guide and mapped it partial. Inventory then had 69/385 partial mappings
  (17.9%), including 67 admin forms; 316 needed mapping. No Joomla UI or
  database runtime verification.
- Tax-group filter follow-up: compared search and ordering against its guide
  and documented default ordering. Inventory then had 70/385 partial mappings
  (18.2%), including 68 admin forms; 315 needed mapping. No Joomla UI or
  database runtime verification.
- Tax-rate filter follow-up: compared all four fields and current list query
  with its guide and documented default ordering. Inventory then had 71/385
  partial mappings (18.4%), including 69 admin forms; 314 needed mapping. No
  Joomla UI or database runtime verification.
- Template filter follow-up: compared search, section and publication fields
  with the current list query and guide. Inventory then had 72/385 partial
  mappings (18.7%), including 70 admin forms; 313 needed mapping. No Joomla UI
  or database runtime verification.
- Voucher and wrapping filter follow-up: compared both XML forms and list
  queries with existing guides and documented the wrapping default ordering.
  Inventory then had 74/385 partial mappings (19.2%), including 72 admin forms;
  311 needed mapping. No Joomla UI or database runtime verification.
- Category editor and plugin list-form follow-up: compared current forms and
  relevant views/layouts with existing guides; identified the Joomla plugin
  editor link in the overview. Inventory then had 76/385 partial mappings
  (19.7%), including 74 admin forms; 309 needed mapping. Category permissions and
  individual plugin settings are not fully traced; no Joomla UI runtime.
- Question editor and tax-group form follow-up: compared current fields,
  editor layout or table checks with existing guides. Inventory then had 78/385
  partial mappings (20.3%), including 76 admin forms; 307 needed mapping. No
  Joomla UI, mail, database or tax runtime verification.
- Product Files follow-up: compared upload form, administrator view/controller
  and service with the guide; documented product search, version syntax and
  plan options. Inventory then had 79/385 partial mappings (20.5%), including
  77 admin forms; 306 needed mapping. Isolated product-download service and UI
  tests passed; actual Joomla, database and customer download runtime remain
  unverified.
- Release Publisher: added a partial source-backed guide and navigation for
  the gated list, settings and storage migration. Mapped its form. Inventory
  then had 80/385 partial mappings (20.8%), including 78 admin forms; 305 needed
  mapping; 173 page inventory and 173 source review records exist. Publisher
  access, migration view and coordinator isolated fixtures passed. No actual
  Joomla migration, deployment or publication performed.
- PostNord standalone label: compared form, defaults, view, controller and
  client; documented fields and payload cautions. Actual controller and client
  with synthetic inputs and mocked cURL emitted blank recipient name for empty
  company (#312 / CODE-273) and blank weight fields despite a supplied weight
  (#313 / CODE-272); controls passed. Order weight producer source shows the
  same mismatch but was not executed. Issues created after dry-run; labels
  checked and subsequent reconciliation unchanged. No Joomla or provider
  runtime performed. Inventory then had 81/385 partial mappings (21.0%), including
  79 admin forms; 304 needed mapping. Registers: 315 Core findings, 242
  individual records, 316 ledger rows (244 synced, 57 private holds, 15
  test-only), 591 triage, 173 page and 173 source records.
- Category product filters: added a partial source-backed module guide and
  navigation, with a warning for existing #211. Inventory is 82/385 partial
  mappings (21.3%), including 79 admin forms; 303 need mapping. Page and source
  registers each have 174 entries. Guide and linked pages rendered and chapter
  targets resolved; no Joomla storefront test.
- Payment-link follow-up: clarified eligibility, permission and generated-link
  requirements after inspecting the current source and order template. The
  guide rendered and links resolved; real Joomla, mail and gateway unverified.
- Billy follow-up: reviewed current cashbook projection, order-list control,
  claim and provider-response paths. Added qualified registration and
  reconciliation guidance. Isolated cashbook registration and plugin tests
  passed with SQLite and provider mocks; real Joomla, MySQL and Billy remain
  unverified. Continue the payment/accounting page batch.
- Five-page follow-up: read shopper groups, order-total discounts, GLS Business,
  order list and Ahamove with selected current source paths. Added qualified
  overlapping-discount and export handling guidance and corrected legacy
  payment-coverage descriptions. The existing discount and Ahamove guides
  already cover the inspected paths. CODE-247 is held for private review; no
  ordinary Issue created and sync dry-run skipped it. Five guides rendered
  and chapter targets resolved. Historical fixtures and actual Joomla, SQL,
  export, browser and provider runtime remain unverified. All remain partial.
- Validation: issue-sync tests passed; expected CSV counts are 309 Core
  findings, 236 individual records, 310 ledger rows (238 synced, 57 private
  holds, 15 test-only), 585 triage, 169 source and 169 page records.
  `git diff --check` passed with existing line-ending warnings. Comparable
  baseline remains 0/161 fully approved original pages (0%) and 173/199 original
  findings with partial records (86.9%); neither count is runtime approval.
- CODE-231–240: compared product, shipping, checkout and stock-image paths
  against current Core. Ahamove serialization is unchanged; the order status
  handler now gates its shipping event on accepted or verified current
  same-status transitions. Checkout payment changes and the SQL addition are
  separate; corrected the tax schema line reference. #276–285 updated after
  dry-run and reconciled unchanged. Historical fixtures and actual Joomla,
  events, database, checkout and providers remain unverified. CODE-241–246
  already reference current Core; continue individual page and partial review.
- CODE-221–230: compared recorded menu, scroller, shipping, zoom, reminder,
  search, registration, comparison and discount paths with current Core;
  unchanged since prior review. #266–275 updated after dry-run and reconciled
  unchanged. Historical fixtures and actual Joomla, database, browser, mail
  and checkout were not rerun. Next: CODE-231 onward and individual page work.
- CODE-211–220: compared recorded search, wizard, attribute-set, account-group,
  tax, currency and export paths with current Core; unchanged since prior
  review. #256–265 updated after dry-run and reconciled unchanged. Historical
  fixtures and actual Joomla, database, browser, provider, export and financial
  behavior were not rerun. Next: CODE-221 onward and individual page work.
- CODE-205–210: voucher sorting, cart module parameters, comparison request
  names, Mega Menu suffix, product image arguments and current-product
  exclusion rechecked at current Core; relevant files unchanged since prior
  source review. #250–255 updated after dry-run and reconciled unchanged.
  Actual Joomla, database, browser, media and multi-instance behavior remain
  unverified. Next: CODE-211 onward and individual page work.
- CODE-201–204: rating and promotion list ordering, review mail handling and
  mass-discount validation rechecked at current Core; relevant files unchanged
  and SQL addition unrelated. #246–249 updated after dry-run and reconciled
  unchanged. Historical fixtures and real Joomla, mail, SQL and checkout remain
  unverified.
- CODE-198: rechecked legacy PayPal currency manifest, form and conversion
  paths; relevant source unchanged since preceding review. #244 updated after
  dry-run and reconciled unchanged. Historical fixture, provider and Joomla
  binding not rerun. CODE-199 remains a private security hold.
- CODE-193–195 and 197: rechecked Facebook Like default and category-menu
  sort, alias and mapping source. Relevant files unchanged; #240–243 updated
  after dry-run and reconciled unchanged. Historical fixtures and actual
  provider, database and Joomla were not rerun; CODE-196 remains private.
- CODE-191–192: rechecked free-shipping rate query and cart output default;
  relevant source unchanged since preceding review. #238–239 updated after
  dry-run and reconciled unchanged. Historical fixtures and actual Joomla,
  checkout, database and form binding not rerun.
- CODE-185–188: rechecked tax-rate save, order-reset response, ePay options and
  gift-card uploads. ePay installer changed to add compatibility preflight;
  the inspected options and payment form did not change. #234–237 updated
  after dry-run and reconciled unchanged. Historical fixtures, provider,
  Joomla and filesystem not rerun. Security holds remain private.
- CODE-180–182: wizard VAT controls, company text mapping and removal flag
  rechecked; relevant source unchanged since preceding review. #231–233
  updated after dry-run and reconciled unchanged. Historical fixtures and
  actual Joomla dispatch, persistence and navigation were not rerun.
- CODE-177–179: accessory price and search suggestion source rechecked;
  relevant files unchanged since the previous review. #228–230 updated after
  dry-run and reconciled unchanged; corrected accessory editor line reference.
  Historical fixtures, MySQL, Joomla, browser and checkout not rerun.
- CODE-175–176: rechecked search model exclusion predicates and module Twig
  custom-field path; relevant source unchanged since preceding review.
  #226–227 updated after dry-run and reconciled unchanged. Historical
  fixtures and real Joomla, search and database remain unverified.
  CODE-174 remains a private security hold.
- CODE-173: rechecked price-filter state and slider bounds; relevant module
  files unchanged since the previous review. #225 updated after dry-run and
  reconciled unchanged. Historical fixture and real browser state not rerun.
- CODE-169–172: rechecked mass-discount deletion and promotion shipping and
  item-removal paths. The relevant files are unchanged since the previous
  source review. #221–224 updated after dry-run and reconciled unchanged.
  Historical fixtures and actual database, cart and checkout were not rerun.
  CODE-168 remains a private security hold.
- CODE-166–167: discount list renderer and newsletter batch preparation and
  send paths rechecked; relevant source unchanged since preceding review.
  #219–220 updated after dry-run and reconciled unchanged. Corrected the SQL
  schema line reference. Historical fixtures, actual Joomla, persistence and
  mail were not rerun. CODE-168 remains a private security hold.
- CODE-164–165: rechecked coupon/voucher renderers, models and date trait;
  relevant files are unchanged since the previous review. The SQL difference
  adds an unrelated payment table; corrected the shifted voucher schema line.
  #217–218 updated after dry-runs and reconciled unchanged; current guides
  already warn about range behavior. Historical fixtures were not rerun;
  actual Joomla forms, persistence and checkout remain unverified.
- CODE-161–163: stockroom form, model and helper are unchanged since the
  preceding review; checkout changed only in a separate payment branch.
  Rechecked the current delivery logic and #214–216, updated after dry-run,
  and reconciled unchanged. The stockroom guide already cautions about these
  paths. Historical fixtures and actual Joomla, database and mail remain
  unverified.
- CODE-160: reviewed the current VAT input, tooltip, default and revision diff
  for submission code. #213 updated after dry-run and reconciled unchanged;
  the existing price guide already warns. Historical browser fixture not rerun;
  actual Joomla saving and persistence remain unverified.
- Current validation after #291: issue-sync tests and unique-ID parsing passed:
  288 Core findings, 220 individual rows, 289 ledger rows (222 synced,
  52 security holds, 15 test-only), 564 triage, 164 source and 164 page rows.
  Scroller rendered with existing chapter link targets; `git diff --check`
  passed with existing line-ending warnings. No runtime approval inferred.
- CODE-246 / #291: product count limit passes `LIMIT 5` to `setLimit`.
  Public Joomla Database 3.4.0 casts the argument to int and its MySQL builder
  adds a limit only when positive; a separate PHP 8.4 cast produced zero.
  Created after comparing #288–290 and dry-run; reconciliation unchanged.
  The local CMS requires Joomla Database `^3.4` but the database package is
  not installed. Actual framework method, SQL, Joomla 5.4/6 and storefront
  were not executed. Guide and review registers updated.
- Scroller follow-up: actual category helper with stubbed dependencies
  returned child and grandchild IDs 6 and 7 as `id`, without `category_id`.
  The separate scroller source reads `category_id`; integrated execution was
  not run. #289 updated after dry-run and reconciled unchanged. Public Joomla
  Database 3.4.0 casts `setLimit` input to int; separate PHP 8.4 casts
  `LIMIT 5` to 0. Installed Joomla Database, actual SQL and Joomla 5.4/6
  runtimes remain unverified.
- Quality check: issue-sync tests passed; the menu, module overview, Scroller
  and three related guides rendered and their `chapters/` targets existed.
  The page inventory had 86 evidence fields with unquoted commas; quoted
  those fields without changing their text and verified 164 unique page rows.
  Other parsed counts: 287 Core findings, 219 individual rows, 288 ledger rows
  (221 synced, 52 security holds, 15 test-only), 563 triage rows, 164 source
  review rows and 385 function rows. `git diff --check` passed with existing
  line-ending warnings. This is register and rendering validation, not
  source-quality approval or runtime verification.
- Product Scroller: added a partial source-backed guide, navigation and
  function mapping. Actual module entry with stubs generated an incorrect
  multi-category `IN` predicate and queued a diagnostic error; equivalent
  SQLite selected ID 1 instead of selected IDs 5/7. Actual `ShowProducts`
  with synthetic prices chose old-price layout for both `no` and `yes`, but
  single price for `0`. #288–290 created after dry-runs and reconciled; #290
  was compared to #137, #288 and #289. Real Joomla, query builder, MySQL,
  package and browser remain unverified. Next check setLimit and descendants.
- Price-filter follow-up: re-read guide, manifest, entry, slider layout,
  model, raw view and result layout; traced scroller and wishlist price calls.
  Result filters on `getPrice` before `getNetPrice`, with both helpers sharing
  the previously tested synthetic discount issue. Updated guide and partial
  source row; #287 updated after dry-run and reconciled unchanged. Real rule
  selection, AJAX result, Joomla, checkout and private holds remain unverified.
- Shopper Group Product follow-up: re-read complete guide, manifest, entry,
  helper, layout and English strings. Price calls run before the Show Price
  test and AJAX detail-template counting precedes Add To Cart test. Added
  qualified guidance; #287 and #143 updated after dry-runs and reconciled.
  Historical module fixtures were not rerun; real Joomla, storefront and
  checkout remain unverified and the private hold remains unresolved.
- CODE-242 follow-up: actual `getNetPrice` returned 90 alone but 81 after
  `getPrice` for the same synthetic product and preseeded 10% rule; Product
  Tab and shopper-group product layouts call these helpers in that order.
  Dependencies were stubbed; actual cache, discount query, module and checkout
  remain unverified. #287 updated after dry-run and reconciled unchanged.
- Product Tab pricing follow-up: actual `Price::getPrice` with a synthetic
  shared product and discount stubs returned 90 then 81 from 100 at 10%; a
  price-record control returned 90 twice and a no-discount control 100 twice.
  CODE-242 / #287 created after dry-run and reconciled unchanged; source
  confirms a cached product object and nullable price lookup but actual cache,
  rules, Joomla and checkout were not exercised. Guide and partial source row
  updated. Continue net-price interaction and other product-module callers.
- Current register counts: 284 Core findings, 216 individual rows, 285 ledger
  rows (218 synced, 52 security holds, 15 test-only), 560 triage, 163 page
  records. Original approved-page and partial-finding baselines are unchanged.
- Product Tab cart follow-up: re-read guide, module entry/helper/layout and
  shared cart, tag, template, attribute, accessory and eligibility source.
  CODE-241 / #286 records omitted module ID and a possible form-ID collision.
  Actual renderer with synthetic dependencies omitted the ID in two calls;
  actual tag/Twig, browser, Joomla and checkout are untested. Compared #268
  and #251 before dry-run and creation; subsequent reconciliation unchanged.
  Guide and partial source record updated; no Core changes.
- Issue-sync tests passed; five registers parsed with unique IDs: 283 Core
  findings, 215 individual records, 284 ledger rows (217 synced, 52 security
  holds, 15 test-only), 559 triage and 163 page records. Original baseline
  remains 0/161 fully approved pages and 173/199 partial finding records; these
  counts do not represent runtime completion. Continue remaining page work.
- CODE-159: rechecked reminder setting, helper and scheduler; #212 updated
  after dry-run and reconciled unchanged. Existing guide covers the discrepancy.
  Historical fixture not rerun; real scheduler and mail remain unverified.
- CODE-158: rechecked filter input and four control branches; #211 updated
  after dry-run and reconciled unchanged. Existing category guide warns about
  initial rendering. Historical fixture not rerun; full GET/POST roundtrip
  and real Joomla remain unverified.
- CODE-157: rechecked filter category loop, portal helper and search controller;
  #210 updated after dry-run and reconciled unchanged. Historical fixture not
  rerun; actual Joomla routing, filtering and database remain unverified.
- CODE-156: rechecked import line counting, CSV splitting and progress formula;
  #209 updated after dry-run and reconciled unchanged. Existing guide warns
  about multiline progress. Historical fixture not rerun; browser, actual
  import and database remain unverified.
- CODE-155: rechecked video closing markup; #208 updated after dry-run and
  reconciled unchanged. Existing guide covers it. Historical libxml fixture
  not rerun; browser, provider SDK and Joomla remain unverified.
- CODE-152: rechecked menu lookup and listed caller paths, including changed
  reorder controller lines; #205 updated after dry-run and reconciled unchanged.
  Earlier fixtures not rerun; reorder/breadcrumb execution and real Joomla
  and database behavior remain unverified.
- CODE-150: rechecked cart total, discount sources and line display; #203
  updated after dry-run and reconciled unchanged. The existing guide describes
  the investigation. Prior separate fixtures not rerun; actual cart sequencing
  and module-instance settings remain unverified.
- CODE-154: rechecked guest and group logo output; #207 updated after dry-run
  and reconciled unchanged. Existing guide covers the limitation. Historical
  fixture not rerun; actual Joomla and assistive technology remain unverified.
- CODE-153: rechecked Xmap category query, recursion and schema; #206 updated
  after dry-run and reconciled unchanged. SQLite fixture not rerun; MySQL,
  installed extension and Joomla remain unverified.
- CODE-151: rechecked menu category-key handling; #204 updated after dry-run
  and reconciled unchanged. Historical fixture not rerun and actual Joomla
  menu query shapes unverified; existing guide already warns of the mismatch.
- CODE-148/149: rechecked menu sorting and cart empty-button template source;
  #201/202 updated after dry-run and reconciled unchanged. Existing guides
  cover the inspected paths. Historical fixtures not rerun; real query,
  installed layouts, strict-mode configuration and Joomla unverified.
- CODE-147: rechecked the mass-cart helper and workflow and located the model
  caller; #200 updated after dry-run and reconciled unchanged. Historical
  fixture not rerun; real cart UI and database unverified.
- CODE-146: rechecked manufacturer, Who Bought and Product Tab divisor paths
  and settings; #199 updated after dry-run and reconciled unchanged.
  Historical fixtures not rerun; Joomla form binding and storefront unverified.
- CODE-144/145: rechecked Similar Tags helper/entry and manufacturer module
  manifest, entry and default layout; #197/198 updated after dry-run and
  reconciled unchanged. Existing guides cover the inspected paths. Historical
  fixtures were not rerun; Joomla cache, overrides and storefront unverified.
- CODE-143: rechecked dynamic-fee and shipment weight calculations plus the
  order-item quantity field; #196 updated after dry-run and reconciled
  unchanged. Existing carrier guide warns of both paths. Historical fixture
  not rerun; shipment execution and provider units remain unverified.
- CODE-141: rechecked carrier-agnostic creation/cancellation and current
  event sites; #194 updated after dry-run and reconciled unchanged. Earlier
  fixtures were not rerun; actual token and event registration remain unverified.
- CODE-142: rechecked the delivered-status configuration key and both mapping
  handlers; #195 updated after dry-run and reconciled unchanged. Existing
  carrier guide warns conditionally. Historical fixture not rerun; provider
  spelling and event delivery remain unverified.
- CODE-136: rechecked self-pickup fallback and shared rate rendering; #190
  was updated after dry-run and reconciled unchanged. Existing pickup and
  shipping-method guides cover the inspected warning. Other carrier source
  observations and the earlier fixture were not repeated; real checkout
  remains unverified. Continue CODE-141 onward and partially reviewed pages.
- CODE-138/139: rechecked FedEx/USPS rate guards and address/billing helpers.
  #191/192 were updated after dry-run and reconciled unchanged; the existing
  shipping-methods warnings cover the inspected cases. Historical fixtures
  were not rerun; Joomla checkout, providers and database remain unverified.
- CODE-134/135: rechecked GLS lookup and current checkout selection, token and
  dispatch source. #188/189 were updated after dry-run and reconciled
  unchanged. Historical fixtures were not rerun; real SOAP, Joomla event
  delivery and checkout persistence remain unverified.
- CODE-140: rechecked the shipment guard and current order-update and checkout
  dispatch sites following Order helper changes. Updated #193 after dry-run
  and reconciled unchanged. Historical fixture not rerun; event delivery,
  provider requests and database persistence remain unverified.
- CODE-131–133: rechecked pickup save, both shipping-box renderers and wrapper
  ordering; #185–187 were updated after dry-run and reconciled unchanged.
  Prior fixtures were not rerun. Joomla, checkout and database remain
  unverified. Counts remain 0/161 fully approved original pages and 173/199
  original findings with partial records; these are not runtime verification.
- CODE-127/128/130: rechecked shared copy table inference, manufacturer sort
  headings, and shared rate/location deletion paths; #182–184 were updated
  after dry-runs and reconciled unchanged. Historical fixtures were not
  rerun; Joomla/database runtime is unverified. CODE-129 remains on private
  security hold. Issue-sync tests passed. Next: CODE-131–140.
- CODE-121–124: rechecked MVC view namespaces, logo upload/copy paths and
  postal-code editor state against current source. #176–179 were updated
  after dry-runs and reconciled unchanged. Historical fixtures were not
  rerun; installed Joomla, browser, filesystem and database remain unverified.
- CODE-125/126: current selector isolation and publication ordering source
  were rechecked; `php tests\unit\fieldgroups-ordering.php` passed with doubles.
  #180 and #181 are closed; #180's owner comment says keep open pending targeted
  UAT. Preserved that discrepancy without reopening or changing either issue.
  Neither the isolated test nor the closed status proves Joomla 5/6 runtime.
  Counts remain 0/161 approved original pages (0%) and
  173/199 original findings with partial records (86.9%).
- CODE-117–118 and CODE-120: rechecked answer-mail results, subscriber-name
  lookup and country-list ordering against current source; #173–175 were
  updated after dry-runs and reconciled unchanged. The subscriber and country
  guides already contain matching warnings; they were re-read without an
  artificial edit. Historical fixtures were not rerun; real Joomla, delivery
  and database behavior remain unverified. Next: CODE-121–130.
- Quality for CODE-112–116: issue-sync tests passed; the four changed CSV
  registers parsed with the repository parser and had unique identifiers.
  Python was unavailable; the equivalent Node parser check succeeded after
  correcting the check's header-property name. No completion counts changed:
  0/161 original pages fully approved (0%), 173/199 original findings with
  partial records (86.9%); these do not indicate runtime verification.
- CODE-112–116: rechecked newsletter progress, preview dispatch and recipient
  fields, question dates, and review date rendering at local Core HEAD.
  Updated #168–172 after individual dry-runs and reconciled unchanged.
  Prior isolated stubs were not rerun; Joomla, mail, database and storefront
  behavior remain unverified. An additional review-comments layout has two
  date formatter calls; its runtime route is unverified. The newsletter guide
  already warns about the checked failures and remains partially reviewed.
  These follow-ups do not turn partial findings or pages into completed reviews.
- Started CODE-111–120: rechecked CODE-111's non-inline image branch and its
  four product-editor callers; prior isolated layout fixture was not rerun.
  Updated #167 after dry-run and reconciled unchanged. Real Joomla, saved
  media and browser behavior remain unverified. CODE-119 remains a private hold.
- Rechecked the complete free-shipping module guide against the module
  manifest and the message/refresh paths inspected for CODE-105; existing
  warnings already cover the source discrepancies, so no artificial article
  edit was made. Updated its partial source-review record.
- Compared the newer tracking commit's PayPal documentation with the checked
  out implementation. Qualified the order-payments guide so an unknown
  outcome is not presented as automatically resolvable by every gateway or
  operation; all seven explicit anchors and bundled Markdown rendering passed.
  The tracking commit's code and provider/runtime behavior still need review.
- PayPal FAQ: inspected the legacy PayPal manifest and notification handler,
  plus the distinct PayPal Credit Card manifest, installer, language, hosted
  field gate, completion path, README and Marketplace classification at local
  Core HEAD. Added the credit-card identity, environment-specific settings,
  defaults and live Card Fields restriction; retained the legacy cautions.
  Corrected the FAQ menu title and linked the FAQ from the plugin overview.
  The source-review row remains partial: identity migration, webhook and all
  checkout paths, provider behavior and the newer tracking-only completion
  changes are not fully verified. Existing #105 and #244 were not changed.
- The bundled Markdown renderer rendered the FAQ, plugin overview and menu;
  all `chapters/` targets in those three files exist. The source-review CSV
  parsed with the repository parser and has 163 unique entries; issue-sync
  tests and `php tests\unit\paypalcreditcard-assets.php` passed. Three further
  PayPal tests could not start because plugin or test Composer autoloaders are
  absent; no dependencies were installed. A first renderer check wrongly
  required a heading in the menu; the corrected link-based check passed.
  No Joomla, browser, MySQL or provider runtime was exercised.
- CODE-101: independently searched the current controller, dynamically
  obtained model, client functions and same-named helper/entity methods. The
  controller/model/client delimiter behavior still exists; historical stub
  results were not rerun. Updated the handoff revision, dry-ran and appended
  qualified evidence to #159, then verified an unchanged dry-run. GitHub
  `develop` now matches tracking `24fcdfb91dcf66bb49fe6a038b4760b9dd475adf`,
  whose changes do not touch the inspected CODE-101 paths. The other seven
  ordinary handoff revision revalidations were initially outstanding.
- CODE-102: reread the selectbox tag precedence, replacement, layout loader and
  supplied Twig, and searched for other uses. The property add-to-cart branch
  separately generates a selector, while `Cart::getDefaultQuantity` also reads
  the tag; both merit regression coverage without assuming identical behavior.
  Recorded this partial follow-up in the individual register. Prior stubs were
  not rerun; handoff evidence was updated and #160 synchronized after dry-run,
  then reconciled unchanged. Its priority was preserved for maintainer triage.
- CODE-103: rechecked the numeric editor inputs, browser `parseInt` range
  check, model comparison and checkout postal filtering. The isolated
  `php tests\unit\checkout-postal-code.php` fixture passed, including
  normalized and foreign address controls; it does not exercise shipping-rate
  editor save/reload or a real database. Updated the handoff and schema line
  references, then synchronized #161 after dry-run and reconciled unchanged.
- CODE-104: traced the calculator template/configuration gates and browser
  request through the site controller and AJAX helper to the query; the
  historical duplicate-AND and additional unmatched-condition evidence remains
  relevant to the unchanged source. Did not rerun that SQL fixture or infer
  MySQL/checkout behavior. Distinct estimator dimensions remain in CODE-233.
  Updated #162 after dry-run and reconciled unchanged.
- CODE-105: verified the digit/space postal predicate and traced both the
  module's initial message and the separate cart AJAX refresh caller. The
  latter omits the module's rate ID; that distinct concern already has
  CODE-223 and was not duplicated. Neither prior fixture nor Joomla checkout
  was rerun; updated #163 after dry-run and reconciled unchanged.
- CODE-107: traced separate gross/net image arguments, subsequent selector
  synchronization and the asynchronous price response reading the same net
  field. This adds regression paths, not a claim that every image-selection
  state reproduces the defect. Prior fixtures and tax/checkout runtime were
  not rerun; updated #164 after dry-run.
- CODE-109/110: rechecked shared grid action construction, wrapper toggle
  controller/model and wrapper table upload/deletion/copy branches. The prior
  isolated outcomes were not rerun and do not establish Joomla database or
  filesystem effects. Updated #165/166 after dry-run; records remain partial.
- Local Core remains `ff72aba6939637ed8fd55d4acc4c109f641adccc`; GitHub
  `develop` and its `origin/develop` tracking ref are one commit ahead at
  `24fcdfb91dcf66bb49fe6a038b4760b9dd475adf`, with PayPal operation and
  related test/documentation changes. No fetch, merge or checkout was made.
  Graphify still indexes `647c0dc795265544ea000acb0c9217da609db544`.
- Rechecked selected CODE-101–105 and CODE-107/109/110 source paths at local
  HEAD and read their mapped open Issues #159–166. The principal source files
  are unchanged since the previous checkpoint; the install SQL changed in an
  unrelated table. Earlier fixtures were not rerun and these reviews remain
  partial. The earlier controlled eight-ID dry-run blocked all eight because
  their handoff evidence was recorded at the previous Core revision;
  CODE-101–105/107/109/110 have since been source reverified and synchronized;
  a combined dry-run returned unchanged for all eight. Historical fixtures
  were not rerun and none of these partial reviews is runtime verification.
  CODE-106/108 remain security holds; a private source triage was performed,
  but impact and any reclassification require the established private process.
- Re-read the order-payments article and selected current capability, order
  action, view, PayPal capture, payment link and coverage paths. Corrected its
  obsolete Flatpay-only claims, added pending/review amounts and distinguished
  PayPal full capture, attempt-level action gates and gateway-specific links.
  Its source record is updated, but it remains partial; the tracking-ref PayPal
  changes and real Joomla/provider behavior are not verified.
- Offline checks passed: `php tests\unit\payment-capabilities.php`,
  `php tests\unit\payment-action-mail.php`,
  `php tests\unit\payment-order-template-tag.php` and
  `node docs-review\issue-sync.test.js`; the order-payments guide rendered and
  retained its seven explicit anchors. These tests use isolated stubs/SQLite,
  not Joomla, live mail, MySQL or payment providers. Instruction-file and
  tracked-guide whitespace checks passed with an existing line-ending warning.
- Progress remains **0/161 fully approved original pages (0%)**, **173/199
  original findings with partial individual records (86.9%)**, **216/283
  ledger mappings recorded synced (76.3%)** and **0/7 publication gates
  complete (0%)**; prior baseline metrics for function/configuration/extension
  mappings remain below. These are not claims of complete source, runtime or
  fresh GitHub verification. Next: begin the partial CODE-111–120 follow-up
  and continue remaining page batches; keep CODE-119 on private hold.

The maintainer explicitly resumed the project. Preserve the standing
no-Core-fix, no-production-extension-change, no-commit/push/publication and
private-security restrictions. The current Core `develop` HEAD is
`ff72aba6939637ed8fd55d4acc4c109f641adccc`, one commit behind GitHub; the previous pause
recorded `2e2889680244db64b9e9f64da29608e02f543a70`. The intervening history is
57 commits and 209 changed paths: 22 component, 14 library, 67 plugin, 7
Marketplace, 15 source/language and 84 other paths; no module paths changed.
Core and legacy-extension worktrees are clean. The documentation `modernize`
HEAD still matches its checkpoint and its extensive pre-existing dirty changes
are preserved. The private handbook is absent.

Graphify remains stale at `647c0dc795265544ea000acb0c9217da609db544`. GitHub
confirms the Core repository is private; `develop` is now one commit ahead.
The CODE-101–110 ordinary source follow-up has been reconciled; mapped
ordinary Issues #159–166 remain open, while CODE-106/108 remain blocked on an
authorized private security-review channel. Previous completion and progress
counts below remain the baseline until individually reverified; this resume
entry itself adds no review-completion credit.

## PAUSED — previous controlled checkpoint and status, 2026-11-26 (historical)

The maintainer paused the project. No new review, Issue batch or autonomous
continuation is authorized before an explicit resume. All older ACTIVE
headings and next-action statements below are historical and superseded by
this checkpoint and `RESUME.md`. Results below describe evidence available
at the pause, not an assertion that the project is complete.

### Branches, revisions and scope

- Core `develop`: `2e2889680244db64b9e9f64da29608e02f543a70`; clean.
- Documentation `modernize`: `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`;
  134 tracked modified, 12 untracked, 0 deleted, 0 staged at this checkpoint.
  This includes preserved prior work, not just the current pause edits.
- Legacy extensions `master`: `68c3819e1fa444a1bd3c46322045d4820a52fea6`;
  clean. Its three changed files at the historical transfer checkpoint are
  not currently present as uncommitted changes; no action was taken on them.
- `C:\Github\redSHOP-internal` is absent. Graphify was previously reported
  indexed at `647c0dc795265544ea000acb0c9217da609db544`, older than Core
  HEAD; no fresh index verification was performed during this pause. All
  revisions and statuses are local snapshots, not fresh remote checks.

### Progress — explicit denominators and evidence

| Area | Measured state | Interpretation |
| --- | --- | --- |
| Modernization and content quality | 0/161 original pages fully approved (0%) under the current individual criteria. Inventory has 163 paths: 143 legacy `complete`, two `partial`, 17 historical-preserved and one historical-annotation. | The 143 labels describe earlier editorial work, not full individual approval. The older `QUALITY-REVIEW.csv` has 143 `reviewed` rows from a register/quality pass; it is not 143 complete source reviews. |
| Individual page source work | 161/161 original pages have source-register entries; two additional guides also have entries. All 163 entries say `source-verified; partial`. | 100% is **record presence**, not completion: all still have source or quality limitations. Exact inspected methods, improvements, issues and runtime limits are in `SOURCE-REVIEW-REGISTER.csv`. |
| Function mapping | 385 inventoried entries: 384 `needs-mapping`, one `partial`. | 0/385 fully mapped (0%) by the recorded statuses, not a measure of all redSHOP features or complete documentation. |
| Configuration | 84 inventoried admin forms, all `needs-mapping`. | Not a complete configuration-field universe; a coverage percentage for configuration documentation is unavailable. |
| Plugins and modules | 266 plugin entries: 265 need mapping and one is partial; 35 module entries all need mapping. | 0/266 plugins and 0/35 modules are recorded fully mapped (0% each). These are inventory mappings, not proof of overall extension completeness. |
| Internal technical documentation | Private handbook absent. | No reliable denominator or completion percentage; internal review is blocked, not complete. |
| GitHub Issue management | 216/283 ledger rows `synced` (76.3%); 52 security holds and 15 test-only. The 216 synced rows map to 216 distinct issue numbers. | Of the rows currently classified as ordinary/synced, 216/216 are recorded synced; this is local ledger state, not a fresh GitHub audit or proof that Issues were fully reviewed. No reliable create/update totals are recoverable from the current status alone. |
| Individual original code findings | 173/199 have partial individual records (86.9%); 26/199 have no such record (13.1%). | Partial records do not constitute full verification. The register contains 214 total rows including additional findings; all original findings require completion or explicit disposition. |
| Security holds | 52/52 classified `needs-private-verification`; 0 recorded as privately completed (0%). | Potential security evidence and exploitability are not established by this classification. No authorized private reporting channel was identified. |
| Automated checks | Issue-sync tests passed at pause; earlier selected isolated fixtures and Markdown/link checks passed as recorded below. | No accepted total test universe exists, so no meaningful percentage. Stubs and register checks do not replace individual source or runtime review. |
| Runtime | Recent probes used synthetic dependencies. No real Joomla, database, browser, provider or production runtime was run in the latest follow-ups. | No trustworthy total runtime-test denominator or completion percentage; do not claim Joomla 5/6 compatibility. Earlier evidence must be read with its own scope. |
| Publication gates | 0/7 complete (0%): three partial and four blocked. | See `PUBLICATION-GATES.csv`; blocked runtime, Joomla 6, release and approval gates are not permission to publish. |
| Overall | Incomplete and PAUSED. | No defensible single project percentage or weighted acceptance denominator exists. |

### Comparison with the last historical pause

That pause recorded 160 inventory pages: 117 provisional partial, one
historical annotation, 42 unclassified and 0 approved under the updated
standard. The current inventory has 163 (+3 paths), including the two new
untracked guides below; the older and current status taxonomies differ, so
their class counts cannot be subtracted as completed review progress. The
approved count remains 0 (no increase). Current 161 original partial source
records, 173 original partial finding records and 216 synced Issue mappings
were not captured in a directly comparable form at that pause; no numeric
increase for completed reviews or exact newly created versus updated Issues
is inferred. The earlier pause had no trustworthy Issue mapping; the present
ledger now contains mappings, but that is not a count of Issues created since
then.

### Last work, unfinished work and Issue actions

- The latest five-page stockroom/attribute follow-up read Inventory, Stockroom
  Management, Stockroom Image Management, Stockroom overview and Attribute
  Sets against selected source paths. Qualified preorder-image and save
  checks were added; other inspected claims did not justify artificial changes.
  All five are partial, with remaining paths and runtime tests in the register.
- Additional guides `manual/en-US/chapters/orders/order-payments.md` and
  `manual/en-US/chapters/plugin-redshop/ahamove.md` are new and partial. Many
  existing order/payment, shipping, tax, product, module and plugin pages were
  improved; the current worktree has 122 changed/new chapter paths including
  those guides and historical archive annotations. It is not a count of
  pages fully modernized or of changes exclusively since the last pause.
- CODE-240 / #285 was created after a duplicate dry-run and reconciled:
  synthetic stock-image save exercised a filename-update exception with
  parent, media and database stubs. Actual Joomla save, upload and database
  remain unverified. Recent additional Issues #276–#285 and their evidence
  are recorded individually below and in the sync ledger. The most recent
  CODE-091–100 follow-up updated #151 and #154–#157; ordinary mappings were
  reconciled. CODE-101–110 ordinary mappings #159–#166 were reconciled;
  CODE-106 and CODE-108 remain private holds. The individual records for
  #160 and #162–#164 now reflect that reconciliation without claiming the
  historical fixtures were rerun. Priority for #160 remains unchanged pending
  maintainer triage. No Issue write or synchronization was started during
  the pause.
- `ISSUE-SYNC-REGISTER.csv` holds current recorded issue numbers and revisions;
  individual create, update and reconciliation evidence is retained in the
  historical entries below. It is not an immutable event log, and exact totals
  of all creates and updates since the previous pause are unavailable.

### Validation and limitations

- At this pause `node docs-review\issue-sync.test.js` passed from the
  documentation repository. An initial invocation from the Core working
  directory failed because the file was not there; the corrected run passed.
- Registry checks used the actual schema keys; page, source, finding, Core
  handoff, triage, issue, security and function keys were nonempty and unique.
  An initial check mistakenly used nonexistent keys for triage and function;
  the corrected `id` and `source_path` checks passed. The order-payments entry
  was added to the inventory to match the existing source record.
- Recent synthetic calculator, selector, wrapper-upload/grid and stock-image
  probes passed with their documented stubs and controls; prior fixtures not
  rerun remain historical. Five stockroom/attribute pages previously rendered
  and their checked chapter targets existed. These checks do not establish
  actual Joomla, real SQL, browser, file upload, provider or production
  behavior.
- `git diff --check` passed with existing LF/CRLF conversion warnings. A
  bounded pattern scan of all 146 changed/new documentation files found
  no obvious private-key, GitHub-token, cloud-key or quoted credential
  assignments. It does not cover every secret format, customer datum or
  security-sensitive description; historical review materials require an
  authorized private review before any public commit or publication.

### Commit preparation — no staging performed

Documentation worktree grouping (review dependencies and sensitive data before
selecting files; these are suggestions, not instructions to publish):

1. Customer manual and navigation: 122 chapter paths plus menu changes;
   suggested message `docs: improve redSHOP manual guidance`.
2. Source/review inventories, handoffs, checkpoint and quality instructions:
   the review-register and guidance paths; suggested message
   `docs: record source review evidence and pause checkpoint`.
3. Issue synchronization tool, tests and procedure:
   `docs-review/issue-sync.js`, `issue-sync.test.js` and
   `ISSUE-MANAGEMENT.md`; suggested message
   `test: strengthen issue synchronization handling`.

The groups share evidence and should be checked together for consistency.
Keep potentially sensitive historical review materials private and do not
commit them to a public destination until authorized review; the narrow
pattern scan is not clearance. Core and legacy extensions have no current
worktree changes and need no commit for this documentation project. No
staging, commit, push, merge, reset or publication was performed.

### Authorized later resumption only

First compare Core and documentation revisions and worktrees with this
checkpoint, identify affected Core paths, recheck affected findings and
existing open/closed Issues, and revisit affected pages. Then continue the
unfinished CODE-101–110 and stockroom/attribute paths and remaining partial
reviews in five-page or ten-finding batches. Preserve valid evidence and do
not repeat it unnecessarily. Keep security holds within the authorized
private procedure, maintain the quality registers and checkpoints, and
respect all no-Core-fix/no-commit/no-push/no-publication restrictions.

## Shipping pages and CODE-235 follow-up (ACTIVE; partial)

- CODE-091–100 follow-up: re-read eight ordinary paths individually, including attribute-set deletion, both accessory editors, calculator methods and callers, inventory save and reset, and the legacy CSV view. CODE-093 and CODE-100 remain private holds, not completed security reviews. A new isolated PHP 8.4 probe of the actual calculator covered fractional-piece settings, separate plus/minus/percentage adjustments, all three affected metadata branches and four range methods with synthetic dependencies. Updated #154–#156 after dry-run; updated #151 and #157 with current source evidence and corrected the tracked case of the attribute-set model path. All eight ordinary Issues reconciled unchanged. Historical deletion, accessory and inventory fixtures were not rerun; real Joomla, database, cart, tax, filesystem and browser behavior remain unverified. All eight ordinary reviews remain partial.
- Finding-batch quality: the calculator probe and Issue-sync tests passed; all five review registers had nonempty unique keys and `git diff --check` passed with existing LF/CRLF warnings. A partial patch temporarily removed the CODE-096 ledger identifier; it was restored before synchronization and the nonempty/unique key checks passed. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**. Continue CODE-101–110 individually and unfinished page paths.
- Five-page stockroom and attribute follow-up: re-read Inventory, Stockroom Management, Stockroom Image Management, the Stockroom overview and Attribute Sets. Rechecked selected inventory save/reset and CSV paths, stockroom validation and deletion, image form/list/store and quantity selection, product delivery output, and attribute-set toolbar, save, copy and deletion paths. Added qualified image-save and preorder guidance; no additional edits were justified by the other inspected paths. Each page remains partial: the complete required source and Joomla runtime reviews are not finished.
- CODE-240 / #285: actual `StockimageTable::doStore` returned true after a synthetic `updateObject` exception while retaining the error. Successful-update and no-image controls passed; parent table, media helper and database were stubs. The full save, actual database, upload, filesystem and administrator notification remain unverified. Checked the local stock-image finding and open/closed Issue duplicate dry-run, created #285 and reconciled it unchanged. The related page and finding records remain partial.
- Quality: rendered the five pages using the bundled Markdown parser and checked their chapter targets. Issue-sync tests passed, five review registers had unique keys, five partial page records had status/runtime/Issue fields, and `git diff --check` passed with existing LF/CRLF warnings. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**; CODE-240 is additional. Continue CODE-091–100 individually and unfinished page paths, then proceed to the next batch; CODE-093 and CODE-100 remain private holds.
- CODE-081–090 batch follow-up: re-read selected current source for all ten, including cache selection, tax-setting investigation, four AJAX layouts, both discount validation paths, gift-card fallback, category copy, state display, postal duplicate validation and template file writing. Expanded isolated evidence for CODE-081 and CODE-084; corrected CODE-087's controller attribution and tested the actual controller separately with a stub model. Updated #141, #144 and #147 after dry-runs and reconciled them unchanged; #149 also reconciled unchanged. Other historical fixtures and mapped Issues were not rerun/rechecked in this follow-up. CODE-082 remains an investigation and its separate security lead remains private. Issue-sync tests, five ledger uniqueness checks and `git diff --check` passed with existing LF/CRLF warnings. No Joomla, provider, actual database, real filesystem failure or frontend checkout was tested. All ten remain partial. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**. Begin CODE-091–100 and continue unfinished page paths; CODE-093 and CODE-100 remain private holds.
- CODE-081 additional edge test: the actual `Template::getAjaxDetailBox` with seeded static records and no configured default cached null for a product without a matching named template and then returned null for a later named match. Reversing the order returned the named result twice; AJAX disabled returned null. Fixture: session `files/ajax-detail-cache-review.php`, with config and language stubs; no database, actual files or Joomla storefront was tested. Updated the handoff and #141 after dry-run, then reconciled unchanged. Configured-default and actual rendered-output regression tests remain open. Continue the partial finding batch.
- CODE-087 controller probe: the actual `CategoryController::copy` received a synthetic selected ID and selected the expected success/error language key for a stub model returning true/false. Fixture: session `files/category-copy-controller-review.php`. This does not run the actual model in the same call, Joomla dispatch, the database or filesystem; the earlier model fixture was not located. Updated the handoff and appended qualified evidence to #147 after dry-run; subsequent reconciliation was unchanged. Continue the partial finding batch.
- CODE-084 current isolated check: re-read both discount forms, inline layout and JavaScript, the inherited inline controller and both table bind/check/store paths. The actual table bind/check methods rejected each valid threshold and discount field with the missing-group error when no group was bound; each passed with a group, and zero-discount controls failed with the amount error. Fixture: session `files/discount-inline-review.php`; the parent table was a stub, not Joomla or a database. Updated local handoff and #144 after dry-run and reconciled unchanged. Real controller dispatch, persisted associations and UI remain unverified; this finding remains partial. Continue the ten-finding batch.
- Five-page follow-up: individually read Categories, States, Postal Codes, Gift Cards and Templates and inspected selected associated forms, models, tables, views, controllers, language and helper paths. Corrected state code labels and explained gift-card customer-amount and quantity detail tags; documented the shared template copy's conditional unpublished state. Existing category and postal-code warnings match the inspected paths; no article changes were justified for those two. Added missing #73/#149, #148 and #182 associations to their respective page records and recorded CODE-087's controller correction separately. Five pages rendered with the bundled Markdown parser, all their chapter targets existed, five partial records and all 163 page keys validated, and whitespace passed with existing LF/CRLF warnings. Historical fixtures were not rerun and no actual Joomla, browser, SQL, mail, payment or filesystem behavior was tested. All five remain partial; this is not five completed reviews. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**. Continue CODE-081–090 and the next individual batch.
- CODE-087 additional source trace: read the complete category article, category form, category copy/save implementation, categories toolbar and category-specific controller. The toolbar uses `category.copy`, not the inherited list controller cited in the previous handoff; the category controller chooses a success message from the model's true result and does not report a selected count. Corrected the individual, handoff, master, triage and source-review records; appended an explicit correction to #147 after dry-run and reconciled it unchanged. The existing article warning remains appropriate. A search did not locate the earlier isolated fixture, so it was not rerun; actual Joomla dispatch, database and filesystem remain unverified. Issue-sync tests and four register uniqueness checks passed; `git diff --check` passed with existing line-ending warnings. Initial test commands were run from the Core directory by mistake and failed; rerunning from the documentation directory passed. This is partial work, not a completed batch. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**; continue CODE-081–090 and unfinished pages.
- CODE-071–080 follow-up: re-read order date boundaries, box ID search, shipping capability indicator and rate copy, address deletion input, review product routing, Product Tab switches, Who Bought category predicate, user synchronization and mail search filtering. Eight existing Issues received current-revision source anchors after dry-run; all ten then reconciled unchanged. Earlier isolated browser, model, date and SQLite fixtures were not rerun. Issue-sync tests and `git diff --check` passed with existing LF/CRLF warnings; no Joomla, database, deletion, shipping checkout or storefront was tested. All records remain partial; continue CODE-081–090 and unfinished page traces. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- CODE-061–070 follow-up: re-read media reset, subproperty deletion, attribute-set copy and save, property inputs and product save, postal-code filtering, currency validation and tax-rate group/state joins. CODE-062 remains a private hold without a completed private review. Seven existing Issues received current-revision source anchors after dry-run and nine ordinary Issues reconciled unchanged. Historical browser, model and SQLite fixtures were not rerun. Issue-sync tests and `git diff --check` passed with existing LF/CRLF warnings; no Joomla, browser, SQL, file or checkout runtime was tested. All ordinary records remain partial; continue CODE-071–080 and unfinished page traces. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- CODE-051–060 follow-up: re-read gift-card value timing, voucher lookup and list formatting, discount forms and queries, category assignment model/controller, price model and range validator, bulk price updates, and media editor selectors. CODE-060 remains test-only: duplicate IDs alone do not establish the earlier retracted YouTube claim. Seven existing Issues received current-revision source anchors after dry-run; all nine ordinary mappings then reconciled unchanged. Their historical isolated evidence was not rerun except that offline `tests/unit/prices-list.php` passed valid product isolation and price CRUD with SQLite/doubles. Its stubbed table check does not exercise CODE-058's overlap validation. Issue-sync tests and `git diff --check` passed with existing LF/CRLF warnings. No actual Joomla, MySQL, mail, media browser or storefront was tested. All records remain partial; continue CODE-061–070 and unfinished page traces. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- CODE-041–050 follow-up: re-read the coupon percentage guard and calculation, Flatpay invoice classifier, e-conomic client failure path, guest review namespace, CSV splitter and gift-card issuance/mail loop. Six ordinary records remain partial; CODE-042–044 and CODE-046 remain private holds without a completed private review. The isolated `tests/unit/flatpay-payment-replay.php` passed, including pending and generic API-failure controls; the unknown full callback and actual provider remain untested. Other earlier probes were not rerun. Six mapped Issues reconciled unchanged; Issue-sync tests and `git diff --check` passed with existing LF/CRLF warnings. No Joomla, database, actual provider or mail delivery was exercised. Continue CODE-051–060 and unfinished page traces. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- CODE-031–040 follow-up: re-read purchase and sample coupon timing, wizard welcome copy, dashboard query and template, question save/send, cart-module entry, Who Bought selection, Product Tab entry/manifest and product robots selector/helper. Existing individual records remain partial; earlier stubs and Joomla installer source were not rerun. The Who Bought multi-category query is already separately tracked as CODE-078, not a new finding. CODE-036 and CODE-037 remain private holds without a completed private review. Eight ordinary Issues reconciled unchanged; Issue-sync tests and `git diff --check` passed with existing LF/CRLF warnings. No real Joomla, filesystem copy, mail, database, installation or browser was tested. Continue CODE-041–050 and unfinished page traces. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- CODE-021–030 follow-up: re-read category description configuration and three rendering paths, next/previous navigation, SEO metadata hints and product replacements, menu-alias initialization and order routing, Flatpay/Bambora nonsecurity manifest and currency paths, and terms reset/acceptance. CODE-025–027 remain private holds without a completed private review. Updated CODE-023's handoff evidence to current Core and, after dry-run, appended it to #99; all seven ordinary mapped Issues then reconciled unchanged. The earlier stale-revision dry-run correctly blocked until the ledger was updated after source inspection. Issue-sync tests passed; the 281 handoff, 213 individual and 282 sync rows had unique IDs; `git diff --check` passed with existing LF/CRLF warnings. A first uniqueness check incorrectly assumed the handoff key was `review_id`; it passed after using `id`. Prior fixtures were not rerun and Joomla, browser, SQL, metadata, routing and provider behavior remain unverified. All ordinary records remain partial; continue CODE-031–040 and unfinished page traces. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- CODE-011–020 follow-up: re-read the stock-image lookup and its product, comparison, bundle and conditional ProductTag callers; coupon application, gift-card creation and recalculation; promotion date and award logic; order-status validation; quotation export; user filtering; newsletter subscription, recipient selection and test-mail paths. Nine ordinary individual records retain their earlier synthetic evidence and remain partial. The reapplication caller assigns the coupon method's result to the cart; reachability and effects of a failure were not tested and are not asserted as a separate defect. CODE-018 remains a private hold without an authorized completed review. Nine mapped Issues reconciled unchanged; 213 individual records had unique IDs and the nine ordinary rows existed. Issue-sync tests and whitespace checks passed with existing LF/CRLF warnings. No prior fixture was rerun in this follow-up and no real Joomla, SQL, mail, payment or browser behavior was tested. Continue CODE-021–030 and remaining page traces. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- CODE-001–010 follow-up: individual register rows record current source comparisons and limitations, including synthetic PHP evidence for several findings and source-only evidence for others. CODE-003 concerns the documentation renderer, outside the Core handoff; no browser test or renderer change was made. CODE-010's additional controller/view inspection confirms the insert-product layout assignment and shared-model data access, but not the entry points or runtime dispatch. Its extra picker templates remain investigation-only. Dry-run reconciliation returned unchanged for all nine mapped Core Issues; `issue-sync.test.js` and `git diff --check` passed, with existing LF/CRLF warnings. No Joomla, real SQL, browser or provider behavior was verified in this quality check. All ten records remain partial; continue CODE-011–020 and the remaining unfinished page paths. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**.
- Five-page discount follow-up: read Gift Cards, Mass Discount, Product Price Discount, Order Total Discount and the discount overview individually. Rechecked four forms, gift-card coupon issuance and its free-shipping field, mass-discount category/manufacturer update and deletion, product/order discount table validation and shopper-group updates, and the discount menu targets. Added a qualified Gift Cards fulfillment check for CODE-239 / #284. No further edits to the other four guides were justified by these inspected paths. Each source row remains partial; the full required source review and Joomla/mail/database/checkout runtime remain open.
- Quality: the five guides rendered, their chapter targets existed, all 163 source records parsed with unique paths and the five current rows contained explicit quality/runtime/Issue fields. Issue-sync tests and `git diff --check` passed, with existing LF/CRLF warnings. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**, not completed reviews. Continue the next individual batch.
- Five-page free-shipping follow-up: read Self Pickup, free-shipping message module, Promotions, Coupons and Vouchers individually. Inspected pickup manifest/provider/method, location editor and checkout selection; module manifest/entry/layout; coupon, voucher and promotion forms; cart flag assignments; checkout address layout and order-save excerpts. Added qualified fulfillment checks to four guides. No module article edit was justified: it already distinguishes an informational rate message from actual checkout eligibility. All five records remain partial.
- CODE-239 / #284: source-only investigation, not a confirmed runtime defect. The inspected address layout omits the shipping template when `free_shipping == 1`; the order-save branch does not read the submitted shipping method and assigns the empty value. Coupon, voucher and promotion paths can set the flag; physical and non-shippable orders need distinct policy review. Compared #189's different GLS token-error root cause, ran the controlled duplicate dry-run, created the Issue and reconciled unchanged. Real checkout, order persistence, provider effects and intended policy remain unverified.
- Quality: `tests/unit/checkout-shipping-selection.php` passed with renderer stubs, but does not exercise free-shipping order save; historical Self Pickup acceptance coverage was inspected, not run. Five guides rendered and their chapter targets existed; source-register rows and four Issue ledgers parsed with unique keys; `issue-sync.test.js` and `git diff --check` passed (existing LF/CRLF warnings). Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**; CODE-239 is additional. Continue the next individual batch.
- Five-page shipping-plugin follow-up: read the complete Shipper, Default GLS, Giao, PostNord and GLS Business guides. Rechecked Shipper and GLS Business rate methods and manifests, Default GLS location/connection methods and manifest, Giao's configured-rate and provider-fee method, and PostNord pickup `onListRates` and both PostNord manifests. The existing Shipper, Default GLS, Giao and GLS Business descriptions remain consistent with these inspected paths, so no artificial article changes were made. Added a PostNord shopper-group default caution for CODE-236 / #281 and updated its source record; configured rates and group default use distinct paths. All five pages remain partial; complete provider and event paths were not re-reviewed in this batch.
- Quality: all five guides rendered and their chapter links existed; the complete 163-row source register parsed with unique paths and the five rows retained explicit quality/runtime/Issue fields. Issue-sync tests and `git diff --check` passed, with existing LF/CRLF warnings. No provider, database or Joomla runtime was tested. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%); continue immediately with the next batch.
- Five-page partial follow-up: read Ahamove, shipping methods, wrappings, shipping boxes and the shipping overview individually. Re-read Ahamove requester state matching, checkout JavaScript and map layout; the shared rate model/controller and `Shipping::listShippingRates`; wrapping add-to-cart and selected recalculation paths; the box form, table, list model and tag; and the shipping-method list and rate-copy source. Added qualified guidance about requester matching/map use, shared mixed-cart product/category/exclusion conditions and different wrapping variants. No further box or overview article change was justified by the inspected paths. Each source row remains partial; the full required page review and real Joomla/browser/database/provider verification remain open.
- Batch quality: the five guides rendered and their chapter links resolved. A strict source-register parser exposed 14 earlier rows missing the quality-status column; individually verified they were partial and restored that field without changing their evidence or Issue fields. All 163 rows now parse with unique paths; the five current rows have explicit quality, runtime and Issue fields. `issue-sync.test.js` passed, CODE-238 reconciled unchanged, and `git diff --check` passed with existing LF/CRLF warnings. A first strict check failed on the malformed rows; a diagnostic attempt also used the parser's return shape incorrectly before correction. Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**, not completed reviews. Next: continue unfinished source traces and immediately start the next five-page or ten-finding batch.
- CODE-238 / #283: the actual `Ahamove::getOrderItems` method on PHP 8.4 threw an `Error` for one synthetic order-item object; the empty control returned `[]`. The shipping handler calls it before provider creation when its status/payment/provider-order conditions are met; address, requester or product-remark preparation may fail first. `Order::getOrderItemDetail` uses `loadObjectList`; two shipping-event trigger sites were read, but actual event dispatch and database/provider behavior were not exercised. Compared #282's separate cart-key root cause, completed the controlled dry-run and creation, and reconciled unchanged. Added a concise booking warning to the partial guide and updated handoffs and review rows. Probe and Issue-sync tests passed; the guide rendered; five primary-key checks and `git diff --check` passed (existing LF/CRLF warnings). Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%); new CODE-238 is additional. Next: continue remaining Ahamove event, address and rate paths, then the next individual five-page batch.
- Began documenting previously unmapped Ahamove: inspected its manifest, English labels, install/uninstall SQL, API wrapper and selected rate, address and order paths. Created a partial guide and menu/overview links, mapped the function inventory and recorded remaining event, provider, packaging and private-security work. The guide and navigation rendered, and their chapter targets resolved; no installation, provider request or real checkout occurred.
- CODE-237 / #282: the actual Ahamove remark method with a synthetic cart item emitted an undefined-key warning and passed null to a product stub, while an order-item object control passed its ID without warning. The session fixture is `files/ahamove-cart-remark-probe.php`. The clean duplicate dry-run, creation and unchanged reconciliation passed. Real product lookup, Joomla dispatch, provider and customer impact remain unverified.
- Quality: issue-sync tests passed; unique key checks passed for 279 Core handoff, 211 individual findings, 555 triage, 280 Issue ledger, 163 source records, 162 page inventory and 385 function inventory rows. The Ahamove guide and overview links resolved; all 161 menu chapter targets existed. `git diff --check` passed with pre-existing LF/CRLF warnings. Original progress remains 0/161 fully approved pages and 173/199 original findings with partial records; the new guide and CODE-237 are additional. Continue the next individual batch.
- Five-page tax follow-up: read the VAT overview, tax-group, tax-rate, no-VAT FAQ and price-configuration articles and inspected tax forms, product and shipping VAT queries, the shopper default and selected exemption/configuration paths. Added qualified explanations of separate shipping VAT and zero-rate default shipping to relevant pages; all five records remain partial. The bundled parser rendered all five; the shipping target exists, five register keys were unique and `git diff --check` passed with existing LF/CRLF warnings. No real Joomla, database, tax or checkout was exercised. Continue the next batch.
- Five-page follow-up batch: Giao, shopper groups, GLS update, module/plugin installation and plugin overview. Each was read and its source register updated; all remain partial. Joomla 5.4.6 source checks plugin identity by type/element/group and module identity by type/element/client; the installation guide now identifies these. The plugin overview distinguishes Core from separately distributed extensions after inspecting selected manifests and classifications. All five guides rendered with the bundled parser; all 21 overview chapter targets existed; five register primary keys were unique; whitespace passed with existing LF/CRLF warnings. Joomla 6, actual installation and provider runtime were not tested. Continue the next batch without counting partials as complete.
- GLS update redirect follow-up: read the complete article, current GLS manifest and address handler, rate token methods and checkout's shipping-plugin import and pre-address-store trigger. No article change was justified: it already distinguishes the historical extension and warns about the handler. Recorded the exact source and remaining uncertainty; installed event delivery and address persistence remain unverified.
- Re-read the standard shipping plugin manifest, service provider, English labels and rate handler, plus the shared shipping-extra-field and automatic-label source paths. Expanded the shipping-method guide with the multiple-field control, template tag, new-config Pacsoft default and legacy automatic-label allowance. The guide rendered and whitespace passed; actual Joomla label dispatch and checkout remain unverified. Continue the current batch and unresolved partial traces.
- CODE-236 / #281: traced shopper-group default shipping through `Shipping::getShopperGroupDefaultShipping`, standard and PostNord pickup plugins and `CartShipping::getDefault`. With a synthetic group rate of 100 and stubbed tax results, the actual helper returned 100 without a row, 0 with a zero-rate row and 125 with a 0.25-rate row. The session fixture is `files/shopper-default-shipping-probe.php`. The result does not verify actual query matching, Joomla identity, checkout or financial impact. Added qualified warnings to the shopper-group and shipping-method guides; both remain partial.
- Compared #280, #279, #278, #192, #186, #163 and #161; controlled duplicate-acknowledged dry-run and #281 creation succeeded, followed by unchanged reconciliation. Issue-sync tests passed; the two changed guides and Giao guide rendered; five register primary keys were unique (278 Core handoff, 210 individual findings, 554 triage, 279 Issue ledger, 162 page records). `git diff --check` passed with existing LF/CRLF warnings.
- Next batch started with Giao Hang Nhanh: re-read its complete guide, manifest, English labels, install/uninstall SQL and current configured-rate and provider-fee methods. Configured rates call the shared VAT helper; the provider-fee result carries zero shipping VAT. Added a qualified explanation to the guide and updated its partial evidence row. Bundled Markdown rendering, page-key uniqueness and whitespace checks passed; no actual provider, database, installation or checkout was exercised. Continue the remaining pages in this batch.
- Additional follow-up: read the complete Shipper, Default GLS and PostNord guides and the relevant current `onListRates` paths. Each calls `Rate::applyVat` for configured rates; the PostNord shopper-group default follows a separate branch. Added qualified VAT warnings to those guides and the general rate guide; all remain partial. Five affected guides rendered with the bundled Markdown parser, five register keys remained unique, and whitespace passed with existing line-ending warnings. No database or checkout result was tested.
- Continued the five-page shipping batch: shipping boxes, shipping methods, wrappings, Self Pickup and GLS Business. Source traces, exact reviewed paths and remaining limitations are in `SOURCE-REVIEW-REGISTER.csv`; none is approved. Clarified shared shipping-method pagination and wrapping price/order data, and expanded the GLS Business extra-field, export and automatic-label guidance.
- CODE-235 / #280: actual `Shipping::getShippingVatRates` query construction with synthetic DK/CA input and stubs compared state to numeric `tax_rate` rather than `tax_state`; SQL execution and financial impact remain unverified. Shared `Rate::applyVat` and GLS Business calls were inspected. Priority P1 is provisional. Six dry-run overlaps (#279, #278, #192, #186, #163, #161) were individually compared and found distinct; controlled creation, Issue fetch and unchanged reconciliation succeeded. The separate product-tax and exemption issues #263 and #142 are also distinct.
- Quality checks: `node docs-review\issue-sync.test.js` passed; five CSV ledgers parsed with unique primary keys (277 Core handoff, 209 individual findings, 553 triage, 278 Issue ledger, 162 page records). The GLS guide rendered with the repository's `marked.js` and both referenced chapter targets exist. `git diff --check` passed with existing LF/CRLF warnings. A first uniqueness check used an incorrect header name and failed; the corrected check passed. No Joomla, MySQL, export, label, carrier or checkout runtime was exercised.
- Current Core `2e2889680244db64b9e9f64da29608e02f543a70` is clean; documentation `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` has extensive preserved working changes. Graphify index `647c0dc795265544ea000acb0c9217da609db544` is stale; current source controls. The private handbook is absent and private security holds remain unreviewed.
- Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**; partial records are not completed reviews. Continue the unfinished shared shipping rate filters, persistence, export and label paths, then the next individual page and finding batches; preserve all restrictions.

## ACTIVE — resumed checkpoint (2026-11-25)

Issue reconciliation and source-backed documentation modernization continue
under the explicit maintainer resumption recorded in `RESUME.md`. Core and
Marketplace production code, commits, pushes, publication and test-site work
remain outside this workflow.

- Core `develop`: `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`; local
  `origin/develop`: `920ea0819e6bac6da694107270e1143d3c18e22f` (seven commits
  ahead; not fetched or merged).
- Documentation `modernize`:
  `6ae296dbe0f05654ef403b64739acb7820884402`.
- Final Core status has six modified tracked files and three untracked
  workflow/test paths; the three modified shipping-rate source/template files
  were not in the initial status snapshot. Preserve them; provenance is
  unverified. Documentation has 139 modified tracked files and five untracked
  paths.
- Issue ledger: 176 synced, 52 security holds, 15 test-only, zero ordinary
  pending-sync; #244 reconciles to CODE-198. Read-only reconciliation stopped
  at CODE-130 because its Core source is modified locally; no write occurred.
- CODE findings: 199 distinct triaged IDs remain OPEN. Page inventory: 145
  partial, one historical annotation, 15 historical-preserved, zero complete.
- Triage has 518 unique IDs (512 OPEN, six DONE); all 74 high-priority entries
  are represented in triage. The archive manifest has 41 unique names and all
  161 inventory paths exist.
- No runtime test or documentation modernization was performed in this
  recovery. Preserve all dirty worktrees.

## ACTIVE resume checkpoint — 2026-11-25

- Core HEAD was rechecked as
  `c0cda5fdfad6ef93ce56496315191c58a918749c` on `develop`; its worktree is
  clean.
- Documentation HEAD is
  `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` on `modernize`.
- Graphify index commit `647c0dc795265544ea000acb0c9217da609db544` is stale
  and did not cover dynamic callers; current source and direct diffs take
  precedence.
- CODE-130 source was rechecked: the later revision still has the Delete
  contract mismatch in its review evidence, but its ledger revision is stale
  and the sync tool stopped write mode. CODE-198 likewise stopped at revision
  drift.
- Inventory status is 143 complete, 0 partial, 17 historical-preserved and one
  historical annotation.
- Independent quality queue: `QUALITY-REVIEW.csv` contains 143/143 pages
  reviewed by register status. The first 24 pages and later batches contain
  direct source evidence; remaining register rows were closed only from
  source/inventory evidence, not runtime proof.
- Historical review: `HISTORICAL-PAGE-REVIEW.csv` contains 18 entries:
  17 preserved pages and one historical annotation. Disposition remains
  preserve or source-backed modernize/archival follow-up.
- Independent quality batch: 8 Discount pages reviewed against Core
  `c0cda5fdfad6ef93ce56496315191c58a918749c`; results are in
  `QUALITY-REVIEW.csv`. A coupon-guide correction now states that Coupon User
  supports multiple selections.
- Function inventory: `FUNCTION-INVENTORY.csv` contains 385 entries
  (84 admin forms, 266 plugins and 35 modules). Documentation mapping remains.
- Security holds: `SECURITY-HOLD-REVIEW.csv` contains 52 nonsensitive entries;
  exploitability remains unverified.
- Issue sync: `--continue-on-blocked` is implemented and regression-tested.
  A read-only all-record run continued past individual revision blocks and
  recorded no Issue creation or update.
- Code-finding review: `CODE-FINDING-REVIEW.csv` contains 199 open CODE IDs
  marked `revision-recheck-required` against Core `c0cda5f`.
- Function inventory: `FUNCTION-INVENTORY.csv` now contains 385 XML sources
  (84 admin forms, 266 plugin manifests, 35 module manifests).
- Independent quality evidence: `QUALITY-REVIEW.csv` currently records 16 pages
  reviewed against Core `c0cda5f`, including coupon multiple-user correction.
- Security hold review: `SECURITY-HOLD-REVIEW.csv` contains 52 nonsensitive
  register entries; exploitability is not established.
- Publication gates: `PUBLICATION-GATES.csv` records gates 1–7; gates 3–7 remain
  blocked or partial and none is approved.
- Local quality validation: 143/143 quality queue entries reviewed in
  `QUALITY-REVIEW.csv`; 18 historical/annotation entries recorded; 0 broken
  relative Markdown links found; `issue-sync.test.js` and `git diff --check`
  pass.
- Blockers: actual Joomla/MySQL/provider/browser runtime is unperformed; private
  redSHOP-internal handbook is absent; 199 open CODE IDs require current
  revision re-review; 52 security holds remain private-review items.
- A 18-page source/quality result was completed across two batches: eight
  Discount pages, four e-conomic pages and six Getting Started pages. Runtime
  verification remains explicitly unverified.
- Tests: `issue-sync.test.js` passed; `git diff --check` passed. Read-only
  reconciliation remains blocked by revision-drift review at CODE-198/CODE-130.
- Next: Getting Started overview, requirements, installation, navigation,
  main menu and subscription-policy pages.

## Historical checkpoint — authorized issue management and Coupons

The maintainer supplied a replacement Issue scope, recorded in `ISSUE-MANAGEMENT.md`. Its target is the private Core repository; the historical missing-scope blocker is superseded. The authorized workflow requires individual review and duplicate checks, controlled dry-run and immediate ledger updates. Specific GitHub/security blockers do not stop independent documentation work.

- PayPal FAQ: expanded manifest setting defaults at `beacc470`; the tracking manifest differs in other fields, so recheck on revision change. Guide rendered and whitespace passed; provider, callbacks and Joomla remain unverified. Next: continue independent manual work.
- COD guide: expanded manifest setting defaults using the English labels at `beacc470`; the local tracking ref differs in other manifest fields, so recheck on revision change. Guide rendered and whitespace passed; checkout and delivery remain unverified.
- CODE-199: payment eligibility configuration requires authorized private security review; source-level only with runtime exposure and exploitability unverified. No public Issue or sensitive details recorded. Dry-run skipped hold; COD guide rendered and whitespace passed. Ledger: 176 synced, 52 security holds, 15 test-only.
- CODE-198 / #244: PayPal currency manifest default is not an offered option; actual payment form emitted synthetic default and valid currency unchanged without making a request. Joomla binding, conversion and provider unverified. Fixture `files/paypal-currency-default-probe.php`. Guide rendered and whitespace passed. Duplicate check and dry-run passed; creation succeeded but ledger rename temporarily failed with EPERM. A read-only rerun found the stable marker, then apply persisted the existing issue and reconciliation passed without duplication.
- GLS Business guide: added customer-facing warning for already tracked CODE-136 after rechecking the rate output at `beacc470`. Rendered and links resolved; checkout and provider unverified.
- Billy guide: expanded basic, payment, invoice, reminder and beta defaults against the manifest and English labels at `beacc470`; no tracking differences in the plugin. Rendered and whitespace passed; provider, accounting and Joomla remain unverified. Categories overview now links the new module guide; rendered and links resolved.
- New category-module guide and navigation entry: source-backed settings and known limitations for separately distributed `mod_redshop_categories`; inventory marked partial. Guide, overview and menu rendered and their chapter links resolved; whitespace passed. Updated references in #241–#243 were dry-run, synchronized and reconciled. Joomla and supported-database behavior remain unverified. Ledger: 175 synced, 51 security holds, 15 test-only; inventory 145 partial.
- CODE-197 / #243: default category link-list helper selected `id` but read `cid`; synthetic id-only records produced warnings and collapsed to one row. Database and Joomla unverified. Fixture `files/category-tree-id-probe.php`. Handoffs, master, triage and ledger updated; duplicate check, dry-run, creation and reconciliation passed.
- redMASSCART guide: added a shared-quantity example after rechecking `Cart::redMassCart` at `beacc470`; no tracking differences in the module or inspected cart files. Rendered and chapter link resolved; whitespace passed. Actual cart behavior and Joomla remain unverified.
- CODE-196: shopper-group product module source-level security investigation held for authorized private review; runtime exposure and exploitability unverified. No public Issue or sensitive details recorded; dry-run skipped the hold. Guide rendered, chapter link resolved and whitespace passed. Ledger: 174 synced, 51 security holds, 15 test-only. Continue independent documentation work.
- Similar Tags and Manufacturer Scroller guides: clarified matching, query filters and default ordering against module source at `beacc470`; no tracking differences. Both rendered and chapter links resolved. Joomla and final quality review remain open. Next: continue partial manual guides.
- Discount and Who Bought guides: clarified threshold display and ordering, group matching, discontinued-product filtering and zero-price presentation against module source at `beacc470`; no tracking differences for the modules. Both rendered and chapter links resolved; sync tests and whitespace passed. Joomla, checkout and final quality review remain open.
- CODE-195 / #242: valid-sort dTree query was rejected by in-memory SQLite for an unbound publication-filter alias; MySQL and Joomla unverified. Fixture `files/category-sort-default-probe.php`. Compared distinct #241 and #206; dry-run, creation and reconciliation passed. Handoffs, master, triage and ledger updated; 174 synced, 50 security holds, 15 test-only.
- CODE-194 / #241: category module's declared sort default is not an option; actual dTree layout raised an undefined-variable warning for synthetic default under warnings-as-exceptions. Joomla unverified. Fixture `files/category-sort-default-probe.php`. Handoffs, master, triage and ledger updated; dry-run, creation and reconciliation passed. No dedicated guide identified.
- CODE-193 / #240: Like and Share manifest default is not an offered choice; actual Like layout emitted synthetic values unchanged. Joomla and provider behavior unverified. Fixture `files/facebook-like-default-probe.php`. Handoffs, master, triage, ledger and guide updated; duplicate check, dry-run, creation and reconciliation passed. One link and renderer passed; whitespace checked. Ledger before CODE-194: 172 synced, 50 security holds, 15 test-only.
- Search module guide: rechecked `mod_redshop_search.xml` at `beacc470` and clarified template ID, search-type and suffix defaults; no tracking differences for the module. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- Cart module guide: clarified button fallback and advanced options against `mod_redshop_cart.xml` and entry at `beacc470`. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- Product-compare module: rechecked manifest at `beacc470` and clarified empty class-suffix default; no tracking differences for this module. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- Price-filter module: rechecked manifest at `beacc470` and clarified empty class-suffix default; no tracking differences for this module. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- CODE-192 / #239: cart output manifest default is not a choice; actual layout selected the extended branch for synthetic `1`. Form binding and Joomla unverified. Fixture `files/cart-output-default-probe.php`. Handoffs, master, triage, ledger and guide updated; #202 compared, dry-run, creation and reconciliation passed. One link and renderer passed; whitespace checked. Ledger: 171 synced, 50 security holds, 15 test-only.
- Next: continue source-backed quality review of partial module guides; compare relevant `origin/develop` tracking differences. Maintain the registers and synchronize any eligible new findings.
- CODE-191 / #238: free-shipping helper returned a free-rate message for a disabled synthetic extension using SQLite and stubs. MySQL, Joomla and checkout unverified. Fixture `files/free-shipping-disabled-probe.php`. Handoffs, master, triage, ledger and guide updated; #189/#163/#162 compared, dry-run, creation and reconciliation passed. Two links and renderer passed; whitespace checked. Ledger: 170 synced, 50 security holds, 15 test-only.
- CODE-190: newsletter module source-level security investigation held for authorized private review; runtime exposure and exploitability unverified. No public Issue or sensitive details recorded; dry-run skipped it. Guide warns generically; three links, renderer and whitespace passed. Ledger before CODE-191: 169 synced, 50 security holds, 15 test-only. Continue independent work.
- Multi-currencies module guide: clarified multiple selection and removed repeated cache warning against `mod_redshop_currencies.xml` at `beacc470`; no tracking differences for the module. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Joomla sessions and checkout unverified.
- Login-greeting guide: replaced potentially sensitive technical security detail with a generic review warning; one link resolved, no baseline explicit IDs, renderer and whitespace passed. CODE-036 remains on security hold.
- Giao Hang Nhanh guide: clarified credential field types from the manifest at `beacc470`; no tracking differences for the plugin. Two links resolved, no baseline explicit IDs, renderer and whitespace passed; provider and Joomla unverified.
- Bambora and Flatpay customer guides: replaced potentially sensitive technical security details with generic review warnings; no baseline explicit IDs or local links, renderer and whitespace passed. Existing historical review records may contain sensitive details: do not publish them; preserve and arrange authorized private review/migration before sanitizing, rather than losing evidence.
- CODE-189: source-level gift-card deletion security investigation held for authorized private review; runtime exposure and exploitability unverified. No public Issue or sensitive details recorded; selected dry-run skipped the hold. Ledger: 169 synced, 49 security holds, 15 test-only. Continue independent work.
- Account-group guide: clarified blank new mappings based on `AccountgroupModel.php:80-96` and `tmpl/accountgroup/edit.php` at `beacc470`; no tracking differences in checked files. One link resolved, no baseline explicit IDs, renderer and whitespace passed; provider and Joomla unverified.
- CODE-188 / #237: gift-card table store returned true and assigned a replacement filename after simulated old-image deletion and failed upload. Actual filesystem, database and Joomla unverified. Fixture `files/giftcard-upload-probe.php`. Handoffs, master, triage, ledger and guide updated; duplicate check, dry-run, creation and reconciliation passed. Eleven baseline IDs retained, renderer and whitespace passed. Ledger: 169 synced, 48 security holds, 15 test-only.
- Countries guide: rechecked `forms/country.xml`, `CountryTable.php` and `CountriesModel.php` at `beacc470`; clarified blank required fields and default name ordering. Twelve baseline IDs and two links retained, renderer and whitespace passed; Joomla and integrations unverified.
- PostNord guide: clarified text-key handling and blank required shipment-field defaults using both manifests at `beacc470`; local tracking ref has no plugin differences. Four links in the guide and two related pages resolved; no baseline explicit IDs, renderer and whitespace passed. Provider and Joomla unverified.
- Shipper and Self Pickup guides: clarified label defaults and Shipper's rate/VAT path against manifests and `Shipping/Rate.php:170-191` at `beacc470`; no tracking differences for these plugins. Three links resolved, no baseline explicit IDs, renderer and whitespace passed. Checkout and label service unverified.
- Payment revision comparison: local tracking `920ea081` removes E-conomic fields in eight reviewed payment manifests and changes capture-status selectors to multiple in ePay, GiroPay and Paymill. Some labels/descriptions and ePay runtime code also differ. Guides remain based on checked-out `beacc470`; recheck affected guides and CODE-187 if the checkout changes. No merge or runtime test.
- GLS Business guide: rechecked `default_shipping_glsbusiness.xml` and clarified multiple shipping extra fields and the scope of its label default; two links, rendering, baseline explicit IDs and whitespace checked. Checkout and provider unverified.
- DOC-SEC-001: historical documentation image requires authorized private review for possible sensitive configuration; validity and exposure unverified. No public Issue or sensitive details recorded; selected dry-run skipped the hold. Ledger: 168 synced, 48 security holds, 15 test-only. Continue independent work; do not reuse the image.
- Product zoom guide: expanded mode-specific defaults and controls from `plugins/system/redproductzoom/redproductzoom.xml` at `beacc470`; one link resolved, no baseline explicit IDs, renderer and whitespace passed. Joomla browser behavior and accessibility unverified.
- PayGate and Paymill guides: expanded `paygate.xml` and `rs_payment_paymill.xml` settings and defaults; old provider screenshots not reinstated as current UI. Each retained its link, has no baseline explicit IDs and rendered; whitespace passed. Provider, callback and Joomla unverified.
- Money Booker guide: expanded `rs_payment_moneybooker.xml` settings and defaults without presenting old screenshots as current. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider, callback and Joomla unverified.
- GiroPay guide: expanded `rs_payment_giropay.xml` fields and defaults without presenting old provider screenshots as current. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider, callback and Joomla unverified.
- CODE-187 / #236: ePay manifest's payment-type default includes a value missing from actual generated options with synthetic Joomla/asset stubs. Form binding, persistence and provider unverified. Handoffs, master, triage, ledger and expanded guide updated; duplicate check, dry-run, creation and reconciliation passed. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Ledger now 168 synced, 47 security holds, 15 test-only. Fixture `files/epay-card-options-probe.php`.
- Bao Kim guide: added settings, defaults and status selector differences against `plugins/redshop_payment/baokim/baokim.xml` at `beacc470`; historical provider and checkout screenshots not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider and Joomla unverified.
- 2Checkout guide: rechecked `rs_payment_2checkout.xml` and clarified shopper group, identifiers and blank credential fields; old provider and checkout screenshots were not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider, callbacks and Joomla unverified.
- EAN transfer guide: expanded plugin settings and defaults, including its extra-info placeholder, against manifest and handler at `beacc470`; historical checkout screenshots not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Invoice delivery and payment reconciliation unverified.
- Bank transfer guide: expanded manifest fields, defaults and a percentage example against `rs_payment_banktransfer.xml`, its English language file and `Payment.php:496-524`; historical checkout screenshots were not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Actual checkout and bank reconciliation unverified.
- Image-preservation audit: 16 pages have changed baseline image references, including 15 plugin guides and the product guide. Historical plugin text was compared; the product SEO screenshot conflicts with current controls. Do not reuse historical screenshots without relevance and sensitive-content review; DOC-SEC-001 requires an authorized private channel. Continue source-backed work independently.
- Shipping-box guide: rechecked `forms/shippingbox.xml:6-72` and `ShippingboxTable.php:73-101`; clarified blank name, dimensions and priority versus published default. Eight baseline IDs and one link retained; renderer and whitespace passed. Actual save and checkout unverified.
- CODE-186 / #235: actual reset script displayed the same success alert for synthetic HTTP 200, 403 and 500; no request, reset, browser or Joomla run. Handoffs, master, triage, ledger and order guide updated; both baseline IDs retained, rendering and whitespace passed. Duplicate check and dry-run passed; Issue created and reconciled. Fixture `files/order-reset-response-probe.js`. Continue partial manual quality work.
- Full read-only reconciliation of earlier snapshot: 228 selected, 166 unchanged and 62 skipped (47 security holds and 15 test-only). CODE-186 and CODE-187 were added after the snapshot and separately reconciled.
- Manufacturer guide: rechecked list query and default order against `ManufacturersModel.php:59-68,100-123`; clarified default ID descending, subject to saved list state. Thirteen baseline IDs, four checked links, rendering and whitespace passed; Joomla list unverified.
- Dashboard configuration guide: added an individual-item example and the script-dependent parent/child checkbox behavior. Fourteen baseline IDs and five checked links retained; renderer and whitespace passed. Joomla UI and saved configuration unverified.
- Manual-wide local checks: all 160 Markdown pages rendered with bundled renderer; 350 `chapters/` links, 158 menu targets, 14 Markdown and 50 HTML local fragments, one cross-page fragment and three local product images resolved; all baseline explicit HTML IDs were retained. One external Markdown link and 220 external HTML references were not checked. Published browser routing and content quality remain unverified. Issue-sync and label tests and Core whitespace passed.
- Git recheck: Core HEAD remains `beacc470` on `develop`, documentation HEAD remains `6ae296db` on `modernize`. Local `origin/develop` tracking ref is `920ea081`, seven commits ahead, with 23 component, 13 library and 126 plugin paths changed; it has not been fetched or merged here. The three tax/currency table files checked in this pass have no diff against that local tracking ref. Continue against the recorded working revision and compare affected topics before relying on newer Core; preserve dirty worktrees.
- Currency guide: clarified configured-currency deletion guard and its limits against `CurrencyTable.php:118-129`; integrations and Joomla unverified. Nine baseline IDs retained, bundled rendering and whitespace passed.
- Tax group guide: rechecked form, list and rate-associated deletion guard; clarified required name, sorting and limitations. Product references and Joomla unverified. Eight baseline IDs and the checked link retained; bundled renderer and whitespace passed.
- CODE-180–182 and CODE-185 reconciled unchanged. Ledger: 166 synced, 47 security holds, 15 test-only; no pending-sync rows. Inventory: 144 partial, one historical annotation and 15 historical-preserved pages.
- CODE-185 / #234: actual tax-rate table store returned success after a synthetic first group-association write failed and a later one succeeded. Driver behavior, real database and Joomla unverified. Handoffs, master, triage, ledger and VAT guide updated; dry-run, creation and reconciliation passed. VAT guide retained 12 baseline anchors and checked link, rendered and whitespace passed.
- CODE-184: source-level security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent documentation work.
- CODE-183: source-level security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent documentation work.
- Shipping boxes guide: corrected the candidate-dimensions description and documented box-control visibility from `Shipping.php:1008-1109,1146-1183`, `Tags/Sections/Shippingbox.php:79-92` and `Shipping/Tag.php:562-576`. Checkout, carrier behavior and actual packing unverified. Eight baseline anchors and checked link retained; bundled renderer and whitespace passed.
- CODE-182 / #233: actual wizard save with a synthetic user-step session raised an undefined VATREMOVE warning under warnings-as-exceptions before redirect and after session update. Joomla handling and navigation unverified. Compared distinct #232 company text, #231 VAT tasks and #110 configuration copy; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and wizard guide updated; wizard rendered, four checked links resolved, baseline anchors retained and whitespace passed.
- CODE-181 / #232: actual wizard save with synthetic input and session retained the canonical company intro and stored the new text under a different key; actual file save and Joomla unverified. Compared distinct #231 VAT routing and #110 configuration copy; dry-run, creation and reconciliation passed. Guide and registers updated; four checked links resolved, baseline anchors retained, rendered and whitespace passed.
- CODE-180 / #231: actual wizard VAT layout rendered old or misspelled rate task names with a synthetic record; remove redirects to another legacy task. Joomla dispatch and rate changes unverified. Wizard guide expanded from source; handoffs, master, triage and ledger updated; dry-run, creation and reconciliation passed. Wizard retained baseline anchors, four checked links resolved, rendered and whitespace passed.
- CODE-179 / #230: actual suggestion cache methods raised TypeError refining a synthetic substring result without a product number; actual AJAX query does not select that field. Browser, AJAX and Joomla unverified; initialization is separately tracked as #229. Handoffs, master, triage, ledger and search guide updated; dry-run, creation and reconciliation passed. Guide rendered, checked link resolved and whitespace passed.
- CODE-178 / #229: Node VM loading actual module and component search scripts left synthetic keyword handlers unset and `makeUrl` undefined; default module refers to the latter. Other scripts, asset loading, browser and Joomla unverified. Compared distinct #227 custom-field rendering; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and search guide updated.
- CODE-177 / #228: actual accessory price CASE adapted to SQLite returned NULL for synthetic multiplication and division; actual price helper converted NULL to zero without VAT. Editor accepts both operators. MySQL, Joomla and checkout unverified. Handoffs, master, triage, ledger and product guide updated; dry-run, creation and reconciliation passed. Product guide retained 20 baseline anchors, seven checked links resolved, rendered and whitespace passed.
- CODE-176 / #227: real default Twig search layout rendered no custom-field selectors with synthetic populated and empty field data; module omits the data and layout checks for emptiness before iterating. Joomla, helper database and overrides unverified. Compared distinct #226 query; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and search guide updated. Search guide retained baseline anchors, checked link resolved, rendered and whitespace passed.
- CODE-175 / #226: SQLite equivalent of search joined-category exclusion retained a synthetic product assigned to both excluded and allowed categories. Product-wide exclusion policy, MySQL and Joomla unverified; not access control. Handoffs, master, triage, ledger and search guide updated; dry-run, creation and reconciliation passed. Guide rendered, checked link resolved and whitespace passed.
- CODE-174: source-level security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent documentation work.
- CODE-173 / #225: actual price-filter layout with synthetic selected 100–200 emitted the same limits and values; browser and Joomla state unverified. Handoffs, master, triage, ledger and module guide updated; dry-run, creation and reconciliation passed. Next verify guide and continue partial manuals.
- CODE-172 / #224: actual promotion removal duplicated one product and left another beyond the reduced count in a synthetic cart. Persistence and discount recalculation stubbed; real checkout unverified. Compared distinct #223 warning, #222 shipping restoration, #94 award lookup and #76 date comparison; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Nine baseline IDs and renderer passed.
- CODE-171 / #223: actual promotion removal with synthetic cart read an unset final index; warning-as-exception aborted before stubbed persistence. Joomla warning handling and checkout unverified. Compared distinct #222 shipping restoration; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Nine baseline IDs and renderer passed.
- Cart configuration guide: added distributed add-to-cart, quotation, timeout and AJAX dimension/template defaults from `default_cart_settings.php` and `config.dist.php:65,159-161,666,700,712-714,724-730`. Actual saved settings, template availability and storefront unverified. Six baseline IDs, rendering and whitespace passed.
- Product configuration guide: documented distributed template ID, ordering and out-of-stock attribute default against `default_product_template_image_settings.php` and `config.dist.php:171,460,710`. Template availability and storefront unverified. Fifteen baseline IDs, two links, rendering and whitespace passed.
- Category configuration guide: documented distributed category template IDs based on `default_category_template.php`, Configuration view and `config.dist.php:173-175`, without assuming records exist. Actual binding and storefront unverified. Six baseline IDs, two links, rendering and whitespace passed.
- Manufacturer configuration guide: documented distributed template ID and blank title limit/suffix against `default_manufacturer_setting.php`, `default_manufacturer_image_setting.php` and `config.dist.php:69-83,177,554-556`. Actual template binding and storefront unverified. Baseline anchors and checked link resolved; bundled Markdown and whitespace passed.
- CODE-170 / #222: actual promotion shipping apply and removal methods with synthetic two-promotion cart restored prior shipping on removing the non-shipping award, while free-shipping award remained. Discount recalculation and persistence stubbed; actual checkout unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Guide retained nine baseline IDs and rendered; whitespace passed. Six recent Issues reconciled unchanged. Ledger: 154 synced, 44 security holds, 15 test-only. Continue remaining partial manuals.
- CODE-169 / #221: actual mass-discount delete generated an unconditional reset of synthetic selected product sale flag, price and dates using parent/database stubs. Actual database and overlap semantics unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Guide baseline anchors and bundled renderer passed. Continue remaining manuals.
- CODE-168: additional source-level security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent work.
- Mass discount guide: clarified delete resets sale flag, price and dates for resolved products without checking overlap, based on `MassdiscountTable.php:126-219`; no actual database or Joomla tested. Next verify anchors/rendering and continue remaining manuals.
- Product-price discount guide: clarified zero/open and inclusive date predicates and empty-category eligibility for products with category IDs in the inspected `ProductPrice.php:548-607` path. Saved values, other paths and Joomla unverified. Baseline anchors and bundled renderer passed; continue partial manuals.
- CODE-167 / #220: newsletter controller with stubs raised ValueError on a synthetic negative batch size; positive size queued. Config preparation normalizes zero only; real saving and dispatch unverified. Compared distinct #168 progress, #169 routing and #170 recipient fields; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and newsletter guides updated. Both guides retained baseline anchors and checked links; bundled Markdown and whitespace passed. Next continue partial manuals.
- CODE-166 / #219: order-total discount schema uses numeric dates and list selects raw values; actual renderer with stubs failed for synthetic numeric start and end but accepted formatted strings. Actual saved records and Joomla list unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Guide baseline anchors and rendering passed; continue partial manuals.
- CODE-164 / #217 voucher extension: actual voucher list renderer raised Error on a synthetic null date with Joomla/config stubs; zero and valid dates rendered. Voucher schema permits null; actual records and Joomla unverified. Updated issue via evidence comment and reconciled; voucher guide updated. Voucher and coupon baseline anchors and bundled rendering passed; continue partial manuals.
- CODE-165 / #218: actual coupon and voucher models with parent/Joomla stubs rejected a start-only range while accepting end-only, both-empty and ordered ranges on PHP 8.4. Real persistence and checkout unverified. Handoffs, master, triage, ledger and both guides updated; dry-run, creation and reconciliation passed. Verify both guides' anchors/links and continue partial manuals.
- CODE-164 / #217: actual coupon list renderer raised an Error for a synthetic null date allowed by the install schema, with Joomla/config stubs; zero and valid dates rendered. Actual saved data, blank-date save and Joomla unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Verify coupon anchors and links, then continue remaining partial pages.
- CODE-163 / #216: actual product delivery helper with query-builder stub and in-memory SQLite selected an unpublished 1–2 day stockroom over a published 3–4 day stockroom. Expected publication policy, MySQL and Joomla storefront unverified. Compared distinct #215, #214, #205, #120 and #94; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Verify guide anchors and links, then continue remaining partial pages.
- CODE-162 / #215: actual product delivery helper with database/translation stubs displayed `0-0 weeks` for synthetic 1–2 and `1-2 weeks` for 8–15; intended units, persistence and Joomla storefront unverified. Compared distinct #214, #205, #120 and #94; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Verify guide anchors and links, then continue remaining partial pages.
- CODE-161 / #214: bundled Joomla switcher rendered neither delivery unit checked when given the stockroom XML's default and options, using asset stubs; real new-record form binding, persistence and storefront unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Guide retained five baseline IDs and one link; renderer and whitespace passed. Investigate Weeks delivery rendering and continue partial pages.
- Stockroom management: documented source-verified minimum-stock and delivery-range save checks (`StockroomModel.php:31-51`) at `beacc470`. The delivery-unit XML default does not match its options; actual Joomla form/save behavior is unverified and needs investigation. Check guide anchors and links, then investigate that mismatch safely and review remaining partial pages.
- User configuration: added source-verified registration, shopper-group and checkout-required distributed defaults; shipping phone/email defaults were not found in the distributed config. Sources are in the master; actual account, consent and checkout behavior remain unverified. Check guide anchors, links and rendering and continue partial configuration pages.
- Integration configuration: documented selected Clickatell, PostNord and e-conomic visibility, save checks and defaults; PostNord is disabled in the distributed configuration but automatic label generation and notification options are enabled if activated. Source references are in the master; provider operations and Joomla remain unverified. Check guide anchors, links and rendering and continue partial configuration pages.
- SEO configuration: documented distributed product, category and manufacturer pattern defaults against `component/admin/tmpl/configuration/default_seo_product.php`, `default_seo_category.php`, `default_seo_manufacturer.php` and `component/admin/config/config.dist.php:366-398` at `beacc470`; actual metadata, routing and Joomla remain unverified. Check SEO and price anchors, links and rendering, then continue remaining partial configuration pages.
- CODE-160 / #213 investigation: synthetic Chrome number input with initial `0.000` reported step mismatch for `0.16`, matching the VAT field's type and missing step. Joomla form and save not run; toolbar source submits directly, so do not claim save is blocked. Handoffs, master, triage, ledger and guide updated. Dry-run, creation and reconciliation passed; recheck guide links and anchors then continue SEO and other partial configuration guides.
- Price/VAT continued: expanded selector choices, distributed defaults, customer-location and EU-rate behavior, template text and the currency-change symbol reset using the configuration source, tax helpers and billing template at `beacc470`; exact references are in the master. Five baseline IDs and six links retained; bundled renderer and whitespace passed before the final symbol clarification. Real form, tax, shipping and Joomla are unverified. Recheck links/whitespace and continue partial configuration pages.
- Price configuration: verified discount, discount-mail and gift-card image controls, visibility and selected distributed defaults against configuration templates, view and `config.dist.php` at `beacc470`; guide expanded without claiming the scheduler sends mail. Five baseline IDs and six manual-root links retained; bundled Markdown rendered and whitespace passed. Tax, scheduler, cart and Joomla runtime remain unverified. Continue remaining price/VAT fields and partial manuals.
- Order configuration: clarified invoice-recipient visibility and distributed order-mail, customer-mail, invoice and reorder defaults against `default_ordertab.php`, Configuration view and `config.dist.php` at `beacc470`. Two baseline IDs retained; bundled Markdown rendered and whitespace passed. Actual payment, invoice numbering, mail and Joomla remain unverified. Continue remaining partial configuration fields and manuals.
- Feature settings: verified stockroom, comparison, review and import controls against their templates and `config.dist.php` at `beacc470`; documented additional distributed defaults and the stockroom-ID caveat. Six baseline IDs and three manual-root links retained; bundled Markdown rendered and whitespace passed. Joomla stock, comparisons and actual import remain unverified. Continue remaining partial configuration fields and manuals.
- General configuration: added source-checked distributed store defaults and image-processing choices against `default_settings.php`, `default_general_layout_settings.php`, configuration view and `config.dist.php` at `beacc470`. Three baseline IDs and three manual-root links retained; bundled Markdown rendered and whitespace passed. Saved settings, image processing and Joomla remain unverified. Continue remaining partial configuration fields and manuals.
- Cart configuration: clarified conditional controls, redirect choices, selected distributed defaults and **Quantity Max Characters** against the form, language string, config and actual product quantity renderer at `beacc470`. The guide retains six baseline IDs; bundled Markdown rendered and documentation whitespace passed. Checkout, shipping, provider and browser behavior remain unverified. Continue remaining partial configuration fields and manuals.
- Product and category configuration image controls and distributed defaults checked against their templates and `config.dist.php`; category suffix defaults also checked. Both articles updated; product retains 15 baseline IDs and two manual-root links, category six IDs and two links. Whitespace passed; #211 and #212 reconciled unchanged. Image generation, saved settings and Joomla storefront remain unverified. Continue remaining partial configuration and manual pages.
- Product configuration wrapping, accessory and related-product fields and distributed defaults checked against their templates, selector helper and `component/admin/config/config.dist.php` at Core `beacc470`; guide expanded. Existing saved values, Joomla UI and storefront remain unverified. Verify guide anchors and links; inspect remaining product image fields and other partial pages.
- Product configuration retained all 15 baseline IDs and both manual-root links; product guide retained 20 baseline IDs and seven links after its general-field/default update. Documentation whitespace, CODE-159 fixture and sync tests passed. Bundled Markdown renderer source pass found all 35 in-page fragment links in the 144 partial pages target an explicit ID or named anchor; cross-article scrolling remains the known CODE-003 issue and browser behavior was not retested. Continue remaining product configuration fields and partial manuals.
- CODE-159 / #212: actual first sample-reminder method called a mail stub after 60 seconds for a synthetic setting of one despite the setting describing days; no call at 59 seconds. No actual mail, scheduler, database or Joomla ran. Compared distinct coupon-expiry #85; dry-run, creation and reconciliation passed. Product configuration guide updated with source-backed distributed defaults and hidden-container caveats. Ledger: 202 entries, 144 synced, 43 security holds and 15 test-only. Verify guide anchors, links and whitespace; continue remaining product configuration fields and partial manuals.
- Manual quality pass: all 144 partial pages retained their baseline explicit IDs; 320 manual-root Markdown/HTML file references and five local image references resolved in a source scan. This does not check all link forms, fragments, external URLs, image currency or browser rendering. Product guide: removed obsolete SEO and calculator screenshots that conflict with current templates, labelled remaining screenshots historical and added alt text. Its 20 baseline IDs, seven manual-root links and remaining image alt text passed; Joomla and full field-level review remain open. Continue product editor field-level review and remaining partial manuals.
- CODE-158 / #211: actual category-filter layout emitted missing-key warnings and raised `TypeError` for each of four synthetic manufacturer, category, custom-field and attribute choices with empty input. The first two were used for creation; the latter two were added as reviewed evidence to the same Issue. Dry-runs, creation, comment, reconciliation, PHP fixture, sync test and label test passed. Joomla routing, database and storefront remain unverified. Ledger: 201 entries, 143 synced, 43 security holds and 15 test-only. Verify category guide baseline IDs and links; continue remaining partial manuals and findings.
- Categories overview: added a brief safe setup sequence and links to the existing category guide's bulk/tree precautions. Check baseline IDs and link; continue partial manuals.
- CODE-157 / #210: actual filter category loop raised `TypeError` for synthetic object and false shopper-group portal results with category and helper stubs. Real filtering, database and Joomla remain unverified. Compared distinct product-menu issue #205; dry-run, creation and reconciliation passed. Ledger: 200 entries, 142 synced, 43 security holds and 15 test-only. Continue partial manuals.
- Media overview retained zero baseline explicit IDs and both manual-root links resolve; browser rendering remains unverified.
- Media overview: added Product Files navigation and clarified file/database backups versus protected download access against existing media and product guides. Check links and baseline IDs; continue partial manuals.
- FAQ overview retains the original heading and zero baseline explicit IDs; all four manual-root links resolve. Browser rendering remains unverified. Continue partial manuals.
- FAQ overview: clarified package availability, safe payment/tax testing and scope against the linked FAQ articles. Check the four links and baseline explicit IDs; continue partial manuals.
- Editor guide retained zero baseline explicit IDs and both links resolve. Navigation-panel guide retained 13 baseline explicit IDs and all 16 manual-root links resolve. Generated fragments and rendering remain unverified. CODE-156 fixture, sync test and documentation whitespace passed; import guide retained 14 IDs and its export link. Continue partial manuals.
- Editor guide: verified Joomla editor fields in current forms and product template; added content examples and mail-sink guidance. Joomla editor plugins and rendering remain unverified. Check guide links and baseline IDs; continue partial manuals.
- CODE-156 / #209: actual import line counter returned 13 physical lines for a header and one multiline record; the UI's 10-row formula estimates two chunks although the splitter would create one. Browser, splitter and Joomla were not run. Compared distinct #107 and #109; dry-run, creation and reconciliation passed. Guide warning added. Ledger: 199 entries, 141 synced, 43 security holds and 15 test-only. Recheck guide anchors and link; continue partial manuals.
- Getting Started overview retained zero baseline explicit IDs and all 11 manual-root links resolve; rendering and generated heading fragments remain unverified. Continue partial manuals.
- Getting Started overview: added a safe navigation sequence and wizard caution consistent with the existing installation, upgrade and wizard guides. Check all overview links and baseline explicit IDs; continue partial manuals.
- Data Import guide retained all 14 baseline explicit IDs and its export link resolves; documentation whitespace check passed. The ledger has no pending-sync or pending-review rows; 43 security holds and 15 test-only items remain open. Inventory still has 144 partial pages. Continue manual quality review.
- Data Import guide: clarified global limits, minimum batch size and product record-key behavior against the screen, configuration and shared/product importer source. No import or database was run. Data Export guide retained all 14 baseline explicit IDs and its import link resolves. Check import anchors and export link; continue partial manuals.
- Data Export guide: documented product exporter extra-field and attribute defaults, stockroom columns and category/manufacturer filter interaction against the screen and plugin source. Actual export and Joomla UI remain unverified. Check links and baseline anchors; continue import/export and other partial manuals.
- CODE-152 through CODE-155 reconciled unchanged. Sync and label tests, video markup fixture, documentation whitespace check and Facebook guide baseline-ID/link check passed. Joomla, browser rendering and provider behavior remain unverified. Continue partial manuals.
- CODE-155 / #208: actual Facebook video layout's malformed closing tags caused following synthetic content to remain inside the blockquote in PHP libxml. Real browsers, SDK and Joomla remain unverified. Dry-run, creation and reconciliation passed; guide warning added. Ledger: 198 entries, 140 synced, 43 security holds and 15 test-only. Recheck guide link and anchors; continue partial manuals.
- Shopper-group logo guide: clarified guest versus logged-in selection and absence of guest-logo fallback, plus integer thumbnail dimensions. Existing link and baseline explicit IDs checked; rendering remains unverified. Continue partial manuals.
- CODE-154 / #207: actual shopper-group logo layout emitted an image without `alt` for synthetic guest and logged-in identities with a synthetic file path and image helper. Screen reader and Joomla storefront remain unverified. Dry-run, creation and reconciliation passed; guide updated. Ledger: 197 entries, 139 synced, 43 security holds and 15 test-only. Check guide link and baseline anchors; continue partial manuals.
- CODE-152 / #205: unchanged `doExecute` method extracted from the datafeed source raised `TypeError` for synthetic object and null menu results using stubs. The CLI bootstrap and full application were not run; real feed output, database and installed extension remain unverified. Dry-run, evidence comment and reconciliation passed. Continue remaining partial manuals.
- CODE-152 / #205: actual filter result layout raised `TypeError` for synthetic object and null menu results with isolated Joomla, category, product and template stubs. Real filtering, database and storefront remain unverified. Dry-run, evidence comment and reconciliation passed. Datafeed remains source-observed only; do not run its bootstrap against a live or shared site.
- CODE-152 / #205: actual Xmap product-tree path also raised `TypeError` for synthetic object and null menu results using query and Xmap stubs. Real query, installed extension and Joomla dispatch remain unverified. Dry-run, evidence comment and reconciliation passed. Filter layout and datafeed remain source-observed only.
- Facebook and free-shipping guides retained zero baseline explicit IDs; all three manual-root links resolve, including the free-shipping rate-list fragment. Rendering and generated heading fragments were not tested.
- Free-shipping promotion guide: clarified blank rate ID, empty cart and subtotal-boundary messages from the helper; CODE-105 remains open. Actual rate eligibility and checkout remain unverified. Check guide links and baseline anchors; continue partial manuals.
- Facebook module guide: expanded manifest defaults and layout-specific setting use; Page controls have no corresponding manifest Plugin choice. SDK consent, provider rendering, Joomla and responsive behavior remain unverified. Check guide link and baseline anchors; continue remaining partial manuals and CODE-152 callers.
- CODE-153 / #206: actual Xmap category method generated a query rejected for undefined alias `b` by in-memory SQLite with a query-builder stub. MySQL and installed Joomla/Xmap remain unverified. Compared distinct #205; dry-run, creation and reconciliation passed. Sync and label tests passed. Ledger: 196 entries, 138 synced, 43 security holds and 15 test-only. Continue CODE-152's source-only callers and partial manuals.
- CODE-152 / #205 Xmap follow-up: actual protected category-product path raised `TypeError` for synthetic object and null menu results with database and Xmap stubs. The real category query, extension installation and Joomla execution remain unverified. Dry-run, evidence comment, reconciliation, fixture and sync tests passed. Filter layout and datafeed remain source-observed only.
- CODE-152 / #205 follow-up: actual failed non-AJAX accessory-add workflow raised `TypeError` for null and object menu stubs; real cart processing and Joomla redirect unverified. Dry-run, evidence comment, reconciliation, fixture and sync tests passed. Comparison guide retained zero baseline explicit IDs and one resolved manual-root link. Filter layout, Xmap and datafeed remain source-observed only.
- CODE-152 / #205: actual Product Compare layout raised `TypeError` for synthetic null and object menu lookup results; Accessory workflow, filter layout, Xmap and datafeed same pattern source-observed only. Dry-run, creation and reconciliation passed; Joomla and extension installation unverified. Ledger: 195 entries (137 synced, 43 security holds, 15 test-only). Verify guide links and investigate other callers using isolated stubs; continue partial manuals.
- CODE-151 / #204: Mega Menu checks menu query `id` but reads `catid`; actual helper produced a missing-key warning and null category ID for synthetic id-only menu data. Compared distinct sorting issue #201; dry-run, creation and reconciliation passed. Joomla menu data and hierarchy remain unverified. Ledger: 194 entries (136 synced, 43 security holds, 15 test-only). Verify updated guide anchors and links, then continue partial manuals.
- Login Greeting guide: settings and guest behavior clarified; retained zero baseline explicit IDs and one resolved manual-root link. Actual Joomla session and output handling remain unverified. CODE-144 through CODE-150 reconciled unchanged.
- Product Tab guide: documented manifest settings, numeric defaults not among option values and the most-sold query's lack of order-status filter. CODE-039, CODE-077 and CODE-083 remain open. Product Tab and cart guides each retained zero baseline explicit HTML IDs and one resolved manual-root link; actual Joomla form/storefront and rendering unverified. Sync/label tests and both whitespace checks passed.
- CODE-150 / #203: with discount inclusion disabled the isolated actual cart calculator retained synthetic subtotal 100 while the separately exercised layout displayed a synthetic positive discount line. Intended semantics and real cart field relationships remain an investigation; Joomla storefront and checkout unverified. Dry-run, creation, reconciliation, fixture and sync tests passed. Ledger: 193 entries (135 synced, 43 security holds, 15 test-only). Verify cart guide anchors and links, then continue partial manuals.
- CODE-149 / #202: actual default Twig template omitted the empty-cart link with synthetic `showEmptyBtn` enabled because it checks a differently spelled variable; populated synthetic cart displayed it. Dry-run, creation and reconciliation passed. Joomla storefront and custom layouts remain unverified. Next investigate separate discount-line behavior using the session fixture and continue partial manuals. Ledger: 192 entries (134 synced, 43 security holds, 15 test-only).
- CODE-148 / #201 follow-up: actual Mega Menu helper lacks an Ordering comparator and retained synthetic ordering values 2 then 1 for ascending Ordering. Actual database query, nested menu and storefront remain unverified. Dry-run, evidence comment and reconciliation passed; fixture and sync tests passed. Mega Menu guide retained zero baseline explicit IDs and one resolved manual-root link. Continue partial manuals.
- CODE-148 / #201: actual Mega Menu sort helper returned `A, Z` for descending synthetic names because its reversed array is discarded. Dry-run, creation and reconciliation passed; guide expanded from manifest, entry, helper and layout. Nested sorting and Joomla storefront remain unverified. Ledger: 191 entries (133 synced, 43 security holds, 15 test-only). Verify guide anchors and links; investigate the separate Ordering mode before continuing partial manuals.
- Discount module guide: clarified settings and selection against manifest, helper and layout; retained zero baseline explicit IDs and one resolved manual-root link. Actual pricing, group and storefront behavior remain unverified.
- CODE-146 / #199 follow-up: actual Who Bought default layout also raised `DivisionByZeroError` with synthetic zero and isolated stubs. Updated both handoffs, master, triage, ledger and guide; dry-run, additive comment and reconciliation passed. Joomla forms and storefront remain unverified. Who Bought guide retained zero baseline explicit IDs and one resolved manual-root link; sync test and fixture passed.
- Shopper-group category and product guides: settings expanded against manifests and layouts; each retained zero baseline explicit IDs and one resolved manual-root link. CODE-037 remains a security hold pending authorized private review. Multi-currency guide also retained zero baseline explicit IDs and one resolved manual-root link. Actual Joomla session, access and storefront behavior remain unverified.
- Product module: manifest, entry query and default layout rechecked and selection/presentation settings expanded. Most-sold query has no order-status filter. Baseline explicit IDs (zero) and one manual-root link checked. Multi-currency: manifest, helper and default layout rechecked; settings and empty-selector behavior clarified. Verify its anchors and links; real database, sessions, cache, storefront, pricing and checkout remain unverified.
- redMASSCART guide retained zero baseline explicit HTML IDs and its manual-root link resolved; generated headings and rendering were not checked.
- CODE-147 / #200: actual mass-cart helper silently skipped an unknown synthetic number while submitting two eligible products at the same quantity to a cart stub and warning about an unpublished product. Compared distinct #196 and #142; dry-run, creation and reconciliation passed. Expanded redMASSCART guide against manifest, form, workflow and helper. Real database, cart addition and Joomla storefront unverified. Sync tests and isolated helper fixture passed. Ledger: 190 entries (132 synced, 43 security holds, 15 test-only). Verify guide anchors and links and continue partial manuals.
- Manufacturer and Similar Tags guides retained zero baseline explicit HTML IDs and each manual-root link resolved; generated headings and rendering were not checked. Sync and label tests, manufacturer fixture and both whitespace checks passed.
- CODE-146 / #199 and CODE-145 / #198: manufacturer scroller layout raised `DivisionByZeroError` for string zero and rendered an unlinked image with a linked name using isolated stubs; positive value rendered. Distinct from each other; both dry-runs, creations and reconciliations passed. Manufacturer guide expanded against manifest, helper and layout. Joomla form, storefront and alternate layouts unverified. Ledger: 189 entries (131 synced, 43 security holds, 15 test-only). Verify guide anchors and links, then continue partial manuals.
- CODE-144 / #197 follow-up: Joomla 5.4.0 and 6.0.0 tagged cache source forwards or stores callback results. Actual helper and module entry raised `TypeError` for excluded routes with a forwarding stub; installed Joomla cache and storefront remain unverified. Dry-run, evidence comment and reconciliation passed; public source links added to Core handoff.
- Search and Price Filtering modules: added settings tables against manifests and module entries, including defaults and routing or user-state behavior. Baseline HTML IDs (none), two manual-root links and whitespace checked; Joomla storefront and pricing unverified.
- CODE-141 / #194 follow-up: actual cancellation handler invoked stubbed cancellation with two synthetic shipping-method values and tracking; it does not inspect the method. Real event registration, encoded rates and provider remain unverified. Handoffs, master, triage, ledger and guide updated; dry-run, additive issue comment and reconciliation passed. No external operation was performed.
- Full read-only reconciliation used the pre-follow-up snapshot: 186 selected, 128 unchanged and 58 skipped (43 security holds and 15 test-only). The changed CODE-141 evidence was separately reconciled. Sync/label tests, fixture and both whitespace checks passed; holds and acceptance remain open.
- e-conomic account group: list, field and toolbar guidance expanded from current templates and model; baseline HTML IDs (none) and one manual-root link checked. Joomla UI and accounting provider remain unverified.
- e-conomic setup: documented account-dependent credentials/grant control, accounting field purposes, hidden fields and cashbook default against manifest and source. Three manual-root links resolve; no baseline HTML IDs; whitespace passed. Provider and Joomla behavior remain unverified.
- Bambora and Flatpay manifests: documented new-configuration defaults, ordinary form options and the existing CODE-029 / #92 currency typo. Payment security holds and provider/checkout verification remain open. Billy, Relatel, Bambora and Flatpay retained baseline HTML IDs (none); documentation whitespace passed.
- Billy and Relatel guides: added source-checked manifest defaults and payment/email settings detail, distinguishing defaults from saved configuration. Provider/accounting operations and Joomla UI are unverified; check guide anchors and links and continue remaining partial manuals.
- CODE-136 and CODE-140–143 reconciled unchanged; synchronization and label tests and both worktree whitespace checks passed. PostNord and Giao guides retained their baseline IDs (none); four manual-root links resolve. Rendering and actual Joomla/provider behavior remain unverified.
- CODE-143 / #196: actual Giao Hang Nhanh dynamic rate handler passed synthetic weight 2 to the stubbed fee method for quantities 1 and 3. Order-creation weight omission source-observed only; real provider units and checkout unverified. Compared #193–#195 before dry-run and creation; handoffs and manual updated; reconcile. Ledger: 186 entries (128 synced, 43 security holds, 15 test-only).
- CODE-142 / #195: actual Giao Hang Nhanh pre-store handler mapped synthetic `Delivered` to null while `Picking` and `Delevered` selected stubbed mappings. Provider status spelling and real dispatch remain unverified; compared distinct #193/#194 before dry-run and creation. Guide and handoffs updated; reconcile. Ledger: 185 entries (127 synced, 43 security holds, 15 test-only).
- CODE-141 / #194: actual Giao Hang Nhanh shipment handler reached stubbed creation for two synthetic shipping-method field values and does not read the field. Real encoded rates, event dispatch, provider and persistence unverified. Compared #193's different status/tracking guard before dry-run and creation; reconcile. Guide warning and handoffs updated. Ledger: 184 entries (126 synced, 43 security holds, 15 test-only).
- CODE-140 / #193: actual Giao Hang Nhanh shipment handler called a stubbed creation method for wrong status with empty tracking and configured status with existing tracking; all four combinations exercised. Synthetic paid orders and helper stubs only; no external requests, database or Joomla dispatch. Duplicate search, dry-run and creation passed; reconcile and continue plugin and manual review. Manifest settings and selector network side effects documented; page remains partial.
- CODE-136 / #190: source-observed shopper-group default rates in default-shipping and PostNord pickup omit descriptions. Updated handoffs, master, triage and ledger; dry-run, additive comment and reconciliation passed. PostNord manual expanded with distributed defaults and required shipment fields; provider and Joomla runtime unverified.
- CODE-139 / #192: actual USPS rate handler raised TypeError for object and null shipping addresses using isolated helpers and synthetic configuration. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger, shipping guide and inventory updated. Provider, database and Joomla checkout are unverified. Ledger: 182 entries (124 synced, 43 security holds, 15 test-only). Continue carrier and partial manual review; verify the latest guide.
- CODE-138 / #191: actual FedEx rate handler returned an empty list before provider lookup with a populated billing stub, synthetic configuration and valid box dimensions. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger, shipping guide and inventory updated. Provider, database and Joomla checkout are unverified. Ledger: 181 entries (123 synced, 43 security holds, 15 test-only). Continue carrier and partial manual review; verify the latest guide.
- CODE-136 / #190 additional evidence: Bring, USPS, UPS, FedEx, Ahamove and Giao Hang Nhanh rate objects also omit description by source inspection. Only the self-pickup fallback was actually exercised. Both handoffs, master, triage and ledger updated; dry-run, additive comment and reconciliation passed. No provider or checkout tested. Continue partial manuals and verify the latest guide edits.
- CODE-137: carrier diagnostic output requires authorized private review. Source observation only; runtime exposure and exploitability unverified. Nonsensitive security hold recorded in both handoffs, master, triage and ledger; no ordinary Issue created. Ledger: 180 entries (122 synced, 43 security holds, 15 test-only). Continue independent manuals and ordinary findings.
- CODE-136 / #190 follow-up: Shipper's rate constructor also omits description by source inspection; only self-pickup fallback was actually exercised. Updated handoffs, master, triage, ledger, Shipper guide and inventory; dry-run, additive comment and reconciliation passed. No Joomla checkout tested. Continue partial manuals and verify the latest guide edits.
- CODE-136 / #190: actual self-pickup fallback and shipping renderer emitted a missing-description warning with isolated helpers and layout; GLS variants are source-observed only. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and shipping guide updated. Joomla checkout remains unverified. Ledger: 179 entries (122 synced, 42 security holds, 15 test-only). Continue GLS and other partial manuals; verify the latest guide edits.
- CODE-135 / #189: actual GLS shipping-address handler and rate helper raised TypeError for a string shipping token and nonempty pickup selection with isolated plugin base. Checkout event dispatch, provider and database are unverified. Compared #188's separate lookup failure; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger, GLS guides and inventory updated. Ledger: 178 entries (121 synced, 42 security holds, 15 test-only). Continue GLS source review and partial manuals; verify the latest guide edits.
- CODE-134 / #188: actual GLS pickup lookup raised Error after simulated client-initialization failure with stubs and no network request. Compared #102's separate e-conomic plugin; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger, GLS guide and inventory updated. Provider and Joomla checkout remain unverified. Ledger: 177 entries (120 synced, 42 security holds, 15 test-only). Continue GLS source review and partial manuals; verify the latest guide.
- CODE-133 / #187: actual wrapper and shared model state methods with stubs map price and publication ordering to ID; name stays name. Compared #183's separate manufacturer model and #165's wrapper toggle, then dry-ran, created and reconciled. Handoffs, master, triage, ledger, wrapping guide and inventory updated. The fixture also emitted PHP 8.4 deprecations, some attributable to its parent stub; no Joomla UI or database tested. Ledger: 176 entries (119 synced, 42 security holds, 15 test-only). Continue wrapping and other partial manuals.
- CODE-132 / #186: actual box tag renderer with supplied rows and layout stubs rendered entries 1 and 3 for priorities 1, 2, 2; intended priority semantics and checkout remain unverified. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger, box guide and inventory updated. Pickup guide now explains the standard renderer's explicit self-pickup state-filter exemption; end-to-end checkout is unverified. Ledger: 175 entries (118 synced, 42 security holds, 15 test-only). Continue partial manuals and verify the latest guide edits.
- CODE-131 / #185: actual controller and model save methods emitted six missing-key warnings and two PHP 8.4 deprecations with a representative location submission and input/table stubs. The stubbed store succeeded; actual Joomla request and database are unverified. Compared #184's distinct Delete task; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger, pickup guide and inventory updated. Ledger: 174 entries (117 synced, 42 security holds, 15 test-only). Continue pickup and remaining partial manuals.
- CODE-130 / #184: shipping-rate and pickup-location Delete task and selection contracts mismatch. Dry-run, creation and reconciliation passed; handoffs, master, triage and ledger updated. Actual Joomla dispatch and database deletion remain unverified. Ledger: 173 entries (116 synced, 42 security holds, 15 test-only). Continue shipping and pickup source review and partial manuals.
- CODE-129: shared deletion boundary requires authorized private review. An isolated shared-table fixture was run; real database behavior and exploitability are unverified. Nonsensitive hold recorded in both handoffs, master, triage and ledger; reconciliation skipped it and no Issue was created. Ledger: 172 entries (115 synced, 42 security holds, 15 test-only). Continue independent source review and partial manuals.
- CODE-128 / #183: manufacturer form marks email, published and description sortable but the model allowlist omits them. Actual model state with stubs maps all three to ID; name stays name. Dry-run, creation and reconciliation passed; both handoffs, master, triage, ledger, guide and inventory updated. Supplier guide now includes ID and default ordering. Joomla UI and database remain unverified; continue manufacturer and remaining partial manuals.
- Ledger: 171 entries (115 synced, 41 security holds, 15 test-only).
- CODE-127 / #182 follow-up: the actual inherited copy method and actual table helper requested `AdminController` and failed before storing for field-group, manufacturer, supplier, template and text model fixtures with isolated controller, table and factory stubs. Real Joomla dispatch, database and installed extensions remain unverified. Updated both handoffs, master, triage and ledger; dry-run, additive Issue comment and reconciliation passed. Five affected guides retained 61 baseline HTML IDs and seven manual-root links; sync tests and whitespace checks passed. Continue partial manuals and independent source review.
- CODE-127 / #182: actual inherited field-group copy and table helper requested `AdminController` rather than `Fieldgroup` in an isolated controller-shaped fixture and threw before storing. Manufacturers, suppliers, text records and templates configure the same inherited unique-name path but were not exercised. Real Joomla dispatch, database and associations remain unverified. Dry-run, creation and three-issue reconciliation passed; both handoffs, master, triage, ledger, four guides and inventory updated. Continue copy-path verification and remaining partial manuals.
- Ledger: 170 entries (114 synced, 41 security holds, 15 test-only).
- Custom-field presentation pass: documented class, text input and textarea dimensions and the existing option-value warning against `field.xml`, field layouts and editor language strings. Field group, custom-field, postal and shopper-group guides retained 48 original HTML IDs and five manual-root links resolved. Sync and label tests, postal edit and field-group probes, and both worktree whitespace checks passed. No Joomla UI, browser rendering or database persistence tested; continue field/group source review and partial manuals.
- CODE-126 / #181: field-group publication is marked sortable but absent from the model allowlist. Actual model state with stubs maps published to name and keeps name unchanged. Compared #180's distinct selector-state failure; dry-run, creation and reconciliation passed; both handoffs, master, triage, ledger, guide and inventory updated. Joomla UI and database remain unverified. Continue field/group source review and remaining partial manuals.
- Ledger: 169 entries (113 synced, 41 security holds, 15 test-only).
- CODE-125 / #180: `FieldgroupsController` sets a section and limit before first model state access; the actual field-group and shared list model methods with the installed Joomla lazy-state trait and isolated stubs replaced section 17 with null and limit 99 with the configured default 20. The initial field-group selector also sets its limit before state initialization. Actual AJAX, Joomla UI and database remain unverified. Dry-run, creation and three-issue reconciliation passed; both handoffs, master, triage, ledger, two guides and inventory updated. Continue field/group source review and remaining partial manuals.
- Ledger: 168 entries (112 synced, 41 security holds, 15 test-only). Postal and shopper-group guides retained 9 and 9 original HTML IDs; their 2 and 1 manual-root links resolved. Generated heading fragments and published rendering were not checked.
- CODE-124 / #179: `zipcode.xml` calls `getState2Code` on country changes, but the actual function body is entirely commented out; an isolated VM invocation made no DOM or AJAX calls. State choices use the form country at render time. Dry-run, creation and reconciliation passed; both handoffs, master, triage, ledger, guide and inventory updated. Actual Joomla UI and saved association remain unverified. Continue postal field review and the remaining partial manuals.
- CODE-123 / #178: the postal editor suppresses the range endpoint for existing records, while the actual save model read the missing key twice in an edit-shaped fixture. Two warnings and one stubbed successful parent save were observed; real Joomla request, warning policy and database are unverified. Compared #73's separate parent-save failure, dry-ran, created and reconciled; both handoffs, master, triage, ledger, guide and inventory updated. Continue postal-code fields and remaining partial manuals.
- Ledger after CODE-123: 166 entries (110 synced, 41 security holds, 15 test-only). Issue sync and label tests passed; the first test invocation from the Core working directory failed due to the wrong path and was rerun successfully from the documentation repository. Holds require authorized private review.
- CODE-122 / #177: actual shopper-group table assigned a logo filename and returned success when an upload stub returned false and parent store stub returned true. No real upload, database or Joomla UI was tested. Compared #166's separate wrapper implementation; dry-run, creation and reconciliation passed. Guide and registers updated; continue partial manuals.
- Shopper-group field pass: clarified fields, generated portal link and logo extensions against the form and layouts. Actual save, upload, checkout and Joomla UI are unverified. Recheck guide anchors and continue partial manuals.
- CODE-121 / #176: actual base controller with a Joomla-style factory stub could not resolve the four state and shopper-group list/detail views; actual country view succeeded. No real Joomla dispatch or upgrade was tested. Compared #148's distinct renderer defect; dry-run, creation and reconciliation passed; both guides and registers updated. Validate both guides and continue partial manuals.
- Verification: rating, answer-mail, guest-subscriber and country-sort isolated probes passed; five changed guides retained 48 original HTML anchors and two checked manual-root links; `git diff --check` passed. Ledger: 163 entries (107 synced, 41 security holds, 15 test-only). Continue the state and other partial-page reviews.
- CODE-120 / #175: country prefix and flag sort requests fell back to name in actual country and shared model state methods using isolated stubs. Joomla UI and database were not tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Validate the country guide and continue partial manuals.
- Mail template guide: expanded field-level guidance against the form, section helper, hints and inspected mail paths. Joomla UI, order-status delivery and final page quality remain unverified; continue partial manuals and verify original anchors.
- CODE-119: newsletter confirmation association requires authorized private security review. No runtime or exploitability established; nonsensitive security hold recorded and no Issue created. Continue independent manual reviews.
- CODE-118 / #174: actual guest subscriber renderer and name helper used a stubbed zero-ID billing record instead of the stored subscriber name. No real database or Joomla UI was used. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue subscriber and other partial-page reviews.
- CODE-117 / #173: actual answer-send controller reported success when the actual mail helper returned false for a stubbed missing template; no real Joomla request or mail delivery. Compared #103's distinct save error; dry-run, creation and reconciliation passed. Guide and registers updated. Continue partial-page review and verify anchors after the latest guide edit.
- CODE-116 / #172: actual rating views and date helper with isolated stubs omit the editor timestamp and display today's date for a zero timestamp. Schema defaults to zero but real administrator save, database events and storefront are unverified. Compared #136's distinct link root cause; dry-run, creation and reconciliation passed. Guide and registers updated; continue remaining partial manuals.
- CODE-115 / #171: actual question table validation replaced an existing timestamp with the current time using a parent stub; actual database save, Joomla and storefront remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue question form and answer workflow review, then remaining partial manuals.
- CODE-034 / #103 follow-up: actual question model and controller with failed parent-save stub produced success redirects for Save and Apply; Apply also warned about missing `parent_id`. Dry-run, additive Issue comment and reconciliation passed. No Joomla, database or mail was used. Expanded question fields and previous-answer guidance; continue remaining partial manuals.
- Rating editor pass: corrected the guide's date claim because the current editor suppresses that field; documented the zero-to-five layout and individual form fields. Actual Joomla save and storefront remain unverified. Continue remaining partial manuals.
- Current ledger: 158 entries, 103 synced, 40 security holds and 15 test-only.
- CODE-114 / #170: actual preview with a grid-id stub matching Joomla 5.4.0/6.0.0 emitted `cid[]` without the arrays read by the actual send controller; simulated submission queued zero defaults. No real Joomla submission or email was used. Distinct from #169 routing and #168 progress. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue newsletter fields and remaining partial manuals.
- Newsletter field pass: clarified form fields, `{data}` body insertion and separate template editing. Four changed guides retained 46 baseline HTML anchors and 10 checked manual-root links; sync/label tests, isolated probes, six-issue reconciliation and whitespace checks passed. Continue partial manuals; Joomla, mail delivery, storefront and stock persistence remain unverified.
- Current ledger: 157 entries, 102 synced, 40 security holds and 15 test-only.
- CODE-113 / #169: newsletter preview send toolbar targets the singular controller; actual dispatcher normalization with stubs selects that controller, but the send method is on the plural controller. Full Joomla dispatch and real mail remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Next trace preview recipient fields and complete newsletter field review, then continue partial manuals.
- Current ledger: 156 entries, 101 synced, 40 security holds and 15 test-only.
- CODE-112 / #168: actual newsletter controller with isolated session/model and mail stubs omitted recipient details after the first across two chunks and emitted warnings. No real mail or Joomla response was tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue newsletter fields and remaining partial manuals.
- Current ledger: 155 entries, 100 synced, 40 security holds and 15 test-only.
- CODE-111 / #167: actual non-inline image layout emitted an empty URL and undefined-variable warning with an existing-file stub; inline used the stub thumbnail. The product back-image editor calls the non-inline layout. No Joomla UI or image persistence was tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue remaining product fields and partial manuals.
- Product image and stockroom guide checks: the two modified guides retained all 30 baseline HTML anchors and eight checked manual-root links; whitespace check passed. Published rendering, image persistence and stock changes were not verified.
- Subscriber field pass: documented email validation, user selection and newsletter options against the form, field classes and table. No Joomla UI, consent or delivery tested; page remains partial. Continue the manual quality pass.
- Current ledger: 154 entries, 99 synced, 40 security holds and 15 test-only.
- CODE-110 / #166: actual wrapping table returned success and assigned an image name when the upload stub returned false and parent store stub returned true. No real filesystem, database or Joomla UI was tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Next continue product tabs and remaining partial manuals.
- Current ledger: 153 entries, 98 synced, 40 security holds and 15 test-only.
- CODE-109 / #165: actual grid script submitted a checked row ID and a clicked row ID; the actual wrapper model separately generated a condition for the first ID with query stubs. The real form submission and database update were not tested. Duplicate checks, dry-run, creation and reconciliation passed; wrapping guide and registers updated. Next continue wrapper field review and the remaining partial manuals.
- Wrapping field and toolbar pass: documented the individual fields, supported upload extensions and inherited actions against the form, table, image layout and views. Actual image persistence, Joomla UI and checkout remain unverified; page stays partial. Next continue product tabs and other partial manuals.
- Product stockroom field pass: expanded editable and display-only columns using the product and variant templates; variant stock has a separate save form. Joomla UI and actual stock changes were not tested. Continue product tabs and partial-page review.
- Wrapper controller failure investigation: isolated actual controller methods produced error output and set success redirects after a stubbed model returned false. The reachable behavior of supported database drivers and Joomla response handling is unverified; no separate Issue claimed. Establish an actual false-return path before deciding on registration.
- Ledger: 152 entries, 97 synced, 40 security holds and 15 test-only. Synchronization and label tests passed; selected reconciliation skipped the hold and returned four unchanged issues.
- CODE-108: wrapping list search requires authorized private review. No runtime or exploitability established; recorded nonsensitive security hold in both handoffs, master, triage and ledger, with no Issue created. Continue independent product and manual reviews.
- CODE-107 / #164: the actual wrapper renderer with stubbed price 10 and tax 2 emitted 12 for both gross and net hidden fields; an isolated actual JavaScript selector propagated 12 as net. The `{without_vat}` renderer fixture emitted 10 for both. No actual Joomla storefront, tax integration or checkout was tested. Duplicate checks, dry-run, creation and reconciliation passed; wrapping guide and registers updated. Continue product and partial-page reviews.
- Wrapping eligibility source pass: `Tags/Sections/Product.php:1528-1545` calls `Product::getWrapper` with the all-products option enabled; `Helper/Product.php:473-503` combines product, category and all-products matches with OR and requires publication. Documented this distinction; real SQL and storefront remain unverified.
- Verification: CODE-103–105 and CODE-107 reconciled unchanged; CODE-106 remained a security hold. Sync tests, both isolated wrapper probes and `git diff --check` passed. Wrapping and product guides retained 10/20 original HTML anchors and eight checked manual-root links. Ledger: 150 entries (96 synced, 39 security holds, 15 test-only).
- CODE-106: new product payment selection requires authorized private review; actual helper was exercised with isolated stubs. Joomla, checkout and exploitability are unverified. Recorded nonsensitive security hold in both handoffs, master, triage and ledger; no Issue created. Continue independent product and manual reviews.
- Product field guidance: the inspected custom-field editor returns early when its product template is absent, otherwise renders applicable fields and integration output or an informational hint. Clarified those conditions and the payment-method selector in the product guide; Joomla UI and storefront remain unverified.
- Product type follow-up: `component/admin/src/View/Product/HtmlView.php:758-769` treats a product whose download flag is enabled as type File in the editor. Added conversion guidance; actual save/reload and type switching remain unverified.
- Product list: compared toolbar and list template with the guide and replaced unclear wording for columns and bulk actions. Actual Joomla UI and bulk operations remain unverified.
- Current ledger after CODE-106: 149 entries (95 synced, 39 security holds, 15 test-only); inventory remains 144 partial pages. Clarified type and subscription field wording against the editor. Continue field-level product reviews and remaining partial pages.
- Product wording pass: clarified list actions, type controls and general fields against the inspected editor and toolbar. All 20 baseline HTML anchors and seven manual-root links passed; `git diff --check` passed. No Joomla UI or checkout was tested. Next continue the remaining product tabs and other partial pages.
- Subscription source pass: `Subscription/PlanValidator.php` requires a positive integer period and finite nonnegative price rounded to four decimals; `ProductModel.php:1636-1748` deletes omitted plans when saving; the reminder input has `maxlength=2`. Documented these conditions and a precaution. Existing `tests/unit/subscription-domain.php` passed. Real save, existing subscription impact and Joomla UI remain unverified.
- Full read-only reconciliation before CODE-106 selected 148 rows: 95 unchanged, 38 security holds and 15 test-only skipped. Subsequently corrected references for #161 and #163 via dry-run and additive comments; both reconciled unchanged. Sync and label tests passed; the three edited guides retained their original HTML anchors and whitespace checks passed.
- CODE-105 / #163: actual `Rate::getFreeShippingRate` with stubs added postal predicates for `9999` but not `SW1A 1AA`; the stubbed rate return led to the free-shipping-in-use message for the latter. The database and checkout were not tested. Distinct from #162's calculator SQL, confirmed by root-cause comparison; dry-run, creation and reconciliation passed. Updated the guide and review registers. Continue shipping and product field reviews and remaining partial pages.
- Shipping follow-up: checkout helper `Shipping.php:771-856` includes ASCII letters in the array named `$numbers`; ordinary alphanumeric destinations enter the SQL-filter branch. A stubbed unrestricted-rate hypothesis was not reproduced and is not recorded as a bug. An actual database is still needed to verify SQL comparison and rates end-to-end.
- Shipping rate guide: documented shared-selector inclusive weight/volume/order-total ranges, zero end bounds and zero-pair dimension behavior from `Shipping::listShippingRates`, and scoped priority guidance to candidate ordering. Plugin-specific behavior, actual SQL, checkout and final page review remain unverified.
- CODE-104 / #162 follow-up: SQLite still rejected all three captured queries near `ORDER` after removing the duplicate conjunction in the fixture, consistent with the unclosed order-total predicate. MySQL remains unverified. Updated evidence, dry-ran and added an idempotent Issue comment; reconciliation passed.
- CODE-104 / #162: `Shipping\Rate::calculate` generates consecutive `AND` tokens for empty, numeric and alphanumeric destination fixtures; an isolated invocation of the actual method and an in-memory SQLite parser confirmed the generated syntax error. Joomla, MySQL and checkout remain unverified. The template invokes this optional cart calculator via AJAX. Duplicate checks, dry-run, creation and reconciliation passed; cart guide and registers updated. Continue shipping and product field reviews and remaining partial pages.
- CODE-103 / #161: `component/admin/tmpl/shippingrate/edit.php:374-391` uses numeric postal boundary inputs; the install schema uses text columns and the rate helper has separate alphanumeric filtering. A representative browser fixture with `SW1A 1AA` produced an empty number-input value; the actual Joomla form, database and checkout were not tested. Duplicate searches, sync tests, dry-run, creation and reconciliation passed. The existing isolated postal-code regression script passed. Updated the guide and review registers. Next trace the distinct cart-estimate SQL and continue shipping and product field reviews.
- Plugin overview: added a safe integration-preparation workflow against the installation and plugin guides. No Joomla UI, payments, carrier or accounting provider was tested. Next validate overview links and continue remaining partial-page field reviews.
- Full read-only Issue reconciliation selected 145 ledger entries: 92 unchanged, 38 security holds and 15 test-only skipped, with no pending review/sync and no writes. Sync and label tests passed. Holds and runtime acceptance remain open. Continue remaining product field-level reviews and 144 partial manual pages.
- Module overview: added a configuration/verification workflow against the product, cart and currency module guides. No Joomla UI, browser, checkout or currency provider was tested. Next validate overview links and continue remaining partial-page field reviews.
- Orders overview: added a review/create workflow and export/deletion precautions against the order list, creation and quotation guides. No order, provider or Joomla runtime was used. Next validate overview links and continue remaining partial-page field reviews.
- Stockroom overview: added a setup sequence against the stockroom, inventory and image guides, including preorder and deletion precautions. No stock, Joomla runtime or notification was changed or tested. Next validate overview links and continue remaining partial-page field reviews.
- Coupon value recheck: `CouponTable::doCheck` rejects empty values; `CartDiscount` rejects a negative calculated discount. Clarified positive-value guidance without claiming administrator validation rejects all negative inputs. No Joomla checkout was tested. Next check coupon anchors and continue partial-page field reviews.
- Manual baseline-anchor check: 118 tracked changed pages retained all 552 original HTML heading/anchor IDs checked against documentation HEAD. Generated heading fragments and published rendering were not checked. Continue the product field-level reviews and remaining partial pages.
- VAT/currency overview: added a configuration and verification sequence cross-checked against tax-group, rate and currency guides. No actual tax, checkout or currency-provider operation was tested. Next validate overview links and continue remaining product field-level reviews and partial pages.
- User overview: added a customer-management sequence and deletion/synchronization precautions against the existing user and shopper-group guides. No customer accounts or Joomla runtime were used. Next validate overview links and continue remaining product field-level reviews and partial pages.
- Manual-wide link check: 348 Markdown links targeting `chapters/` resolved to existing files. Fragments, HTML links, images and published rendering were not checked. Inventory remains at 144 partial pages; continue product field-level reviews and remaining partial pages.
- Shipping overview: added a setup and verification sequence against the existing method, box and wrapping guides, including copy and packing limitations. No Joomla checkout or provider was tested. Next validate overview links and continue remaining product field-level reviews and partial pages.
- Product-management overview: added a setup sequence and clarified media/download and price-rule distinctions, cross-checking existing product, media and price guides. Joomla runtime and manual-wide quality remain open. Next validate overview links and continue remaining product field-level reviews and partial pages.
- CODE-102/#160 shipped-layout follow-up: local Twig parser with a stub `redconfig` filter reports a syntax error on line 5. Full redSHOP Twig and storefront remain unverified. Updated registers and appended evidence after dry-run; a transient TLS certificate error cleared on retry without bypassing validation. Next reconcile #160 and continue remaining product field-level reviews and partial pages.
- CODE-102/#160 additional evidence: actual layout helper requests a quantity-select filename absent from the source tree while a differently named layout exists. A probe used the actual helper with Twig stubbed; Twig loading, overrides and full storefront remain unverified. Updated handoffs, master, triage, ledger and guide; dry-run and additive Issue comment passed. Next reconcile #160, validate product anchors and continue remaining product field-level reviews and partial pages.
- CODE-102/#160: actual add-to-cart quantity-select replacement and base string replacer left the ordinary tag unchanged with an isolated layout stub; full rendering, cart and checkout remain unverified. Duplicate search, sync tests and dry-run preceded creation; product guide and registers updated. Next reconcile #160, validate product anchors and continue remaining product field-level reviews and partial pages.
- Product quantity-select source pass: `Tags/Sections/Addtocart.php:490-514` uses the product choices or global fallback, removes duplicates, sorts and gives other quantity tags precedence. Documented this in the product guide; no Joomla storefront was tested. Next continue remaining product field-level reviews and partial pages.
- CODE-101/#159: the actual related-product selection parser with isolated Select2 stubs mislabelled two IDs when the first name contained a comma. The controller format also makes colons ambiguous. Browser, persisted associations and database remain unverified. Duplicate search, dry-run, creation and product-anchor/whitespace checks passed; guide and registers updated. Next reconcile #159 and continue remaining product field-level reviews and partial pages.
- CODE-099/#158: actual inventory template with a schema-shaped stockroom object emitted an empty reset identifier and missing-property warning; the install schema supplies `id`. Joomla UI, upgraded schema and database remain unverified. Duplicate search and dry-run preceded creation; inventory guide and registers updated. CODE-100 records a separate nonsensitive security hold pending authorized private review. Next reconcile #157/#158 and validate inventory anchors, then continue remaining product field-level reviews and partial pages.
- CODE-098/#157: isolated execution of the actual inventory model/controller rejected a row, processed another, queued a warning and set a success redirect. No real database, stock mutation or Joomla UI was used. Duplicate searches, sync tests and dry-run preceded creation; handoffs, master, triage, ledger and inventory guide updated. Next reconcile #157, validate the guide and continue the product field-level review and other partial pages.
- Product discontinued source pass: `Cart\Render` substitutes expiry text in the add-to-cart form and the bulk-add helper skips expired products. Replaced an unconditional purchase-prevention claim with scoped guidance and isolated checkout verification; no Joomla UI, cart or checkout tested. Continue product field-level reviews.
- Verification: product guide retains all 20 original anchors and its manual-root links resolve; `git diff --check`, synchronization tests and read-only reconciliation of CODE-094–097 passed. The calculator probe was rerun for rounding, metadata, range input and extra-option total with isolated stubs. No Joomla, SQL, checkout or provider was tested. Next continue the product field-level review and remaining partial pages.
- CODE-097/#156: actual price-per-piece calculator with isolated stubs returned total 15 for 1.5 pieces at base unit price 10 both without an option and with a `+5` option; the reported per-piece value changed from 10 to 15. Real option lookup, database, Joomla checkout and tax were not tested. Compared with #153–#155's rounding, metadata and range causes; distinct-aware dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and product guide/inventory updated. Ledger: 140 entries (88 synced, 37 security holds, 15 test-only). Next validate product guide anchors and links, then continue remaining product field-level reviews.
- CODE-096/#155: actual `Calculation::discountCalculator` with an isolated lookup stub passed integer 1 for area and volume measurements of 1.5, but float 1.5 for Area Quantity; source applies the integer cast to circumference as well. The actual lookup helper supports float input. No real range query, database or Joomla checkout was run. Compared with #153's piece-rounding and #154's metadata causes; distinct-aware dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and product guide/inventory updated. Ledger: 139 entries (87 synced, 37 security holds, 15 test-only). Next validate product guide anchors and links, then continue remaining product field-level reviews.
- CODE-095/#154: actual area `Calculation::productMeasurement` with isolated dependencies displayed per-piece price 10 but returned structured `calcPricePerPiece` value 2 (product length). Source has the same assignment in volume and circumference; cart code stores and compares the metadata. No Joomla cart, checkout or database was run. Compared with #153's distinct rounding behavior; distinct-aware dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and product guide/inventory updated. Ledger: 138 entries (86 synced, 37 security holds, 15 test-only). Next validate product guide anchors and links, then continue remaining product field-level reviews.
- CODE-094/#153: the actual price-per-piece calculator with isolated stubs returned 1.5 pieces/price 15 when decimal pieces were disabled, and 2 pieces/price 20 when enabled, for an area ratio of 1.5 and unit price 10. The Yes/No mapping was checked in `RedshopSelect::booleanlist`. No database, Joomla storefront, cart, tax integration or payment was tested. Duplicate searches, dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and product guide/inventory updated. Ledger: 137 entries (85 synced, 37 security holds, 15 test-only). Next validate product guide anchors and links, then continue remaining product field-level reviews.
- CODE-093: source review identified an attribute-property cache/publication-scope question requiring an authorized private security review. No runtime or exploitability was established; no Issue was written. Registered a nonsensitive security-hold in both handoffs, master, triage and ledger. Ledger: 136 entries (84 synced, 37 security holds, 15 test-only). Continue independent product-field and manual reviews.
- Product toolbar correction: Cancel does not guarantee rollback of separately requested attribute/accessory deletions or preorder resets; replaced the conflicting blanket claim in the guide. Source checked, no Joomla UI or actual operation run. Validate the product guide and continue remaining field-level reviews.
- CODE-092/#152: actual `deleteRow_accessory` and `delete_accessory` source functions in an isolated Node DOM/XHR fixture removed the row before request completion and left it absent after simulated HTTP 500. No browser, network request, database or Joomla server was used. Duplicate searches, dry-run, creation and reconciliation passed; both handoffs, master, triage, ledger and product guide/inventory were updated. Ledger: 135 entries (84 synced, 36 security holds, 15 test-only). Next validate product guide anchors and links and continue remaining product field-level reviews.
- CODE-091/#151: actual `AttributesetModel::delete` and `ProductAttribute::getAttributeProperties` with isolated stubs generated a published-property filter, deleted the returned attribute and its properties, then deleted the set. Attributes with no published property are not selected in that path. No SQL or filesystem operation was performed. Compared with #124's distinct copy omission; distinct-aware dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and guide/inventory updated. Ledger: 134 entries (83 synced, 36 security holds, 15 test-only). Next validate attribute guide anchors and links, then continue partial-page reviews.
- Custom-field source recheck: `FieldTable::doCheck` normalizes names before a cross-section duplicate lookup; `FieldsModel::getFieldsBySection` conditionally applies stored product IDs when an item ID and products column exist. Added guidance for unique names and selected/unselected product tests. No database or Joomla rendering was tested. Next validate custom-field guide anchors and links, then continue remaining partial pages.
- Custom-field group source recheck: `ExtraFields::listAllField` buckets returned records by group name, not group ID. Added a distinct-name recommendation and isolated tab-verification guidance; no Joomla UI, access or output was tested. CUST-010 remains on security hold. Next validate group guide anchors and links, then continue remaining partial pages.
- CODE-090/#150: `TemplateTable::doStore` ignores the return of `File::write`; with an existing-record fixture, stubbed successful parent store and false-returning writer the actual method returned true. Neither the real filesystem nor database was used. Duplicate searches, dry-run, creation and reconciliation passed; both handoffs, master, triage, ledger and template guide/inventory were updated. Ledger: 133 entries (82 synced, 36 security holds, 15 test-only). Next validate template guide anchors and links, then continue remaining partial-page reviews.
- Country guide source recheck: `PhonePrefix::renderPhonePrefixDropdown` prepends `+` and falls back to configured shop country when no selection is supplied; `LanguageHelper::renderMetaLanguageDropdown` filters/matches country and flag data against installed Joomla languages. Updated guidance and inventory; no Joomla UI, address, language-selector or provider operation was tested. Next validate country guide anchors and links, then continue remaining partial pages.
- CODE-089/#149: `ZipcodeTable::doCheck` casts postal-code text to integer; the actual method with stubbed dependencies queried `999` for `0999`, `0` for `A1 2BC`, and `1234` for `1234`. The install schema uses `VARCHAR`. No MySQL or Joomla UI was tested. Duplicate searches, dry-run, creation and reconciliation passed; both handoffs, master, triage, ledger and postal-code guide/inventory were updated. Ledger: 132 entries (81 synced, 36 security holds, 15 test-only). Next validate postal-code guide anchors and links, then continue remaining partial-page source reviews.
- CODE-088/#148: actual `States\HtmlView::onRenderColumn` with isolated stubs returned the three-letter label for integer `3` but the two-letter label for string `"3"`; `World::getStateCode` compares loosely. Database-driver result types and Joomla list/address behavior remain unverified. Duplicate searches, synchronization tests, dry-run, Issue creation and reconciliation passed; both handoffs, master, triage, ledger and state guide/inventory were updated. Ledger: 131 entries (80 synced, 36 security holds, 15 test-only). Next validate state guide anchors and links, then continue remaining partial-page source reviews.
- CODE-087/#147: actual category `copy` and `saveCategory` methods with a deliberately failing bind returned true and called a stubbed media-copy method with target ID zero. The inherited controller source reports the selected count; the controller, real filesystem and database were not run. Compared with #146 and confirmed a different root cause (failure propagation versus filter payload). Duplicate-aware dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and category guide/inventory updated. Ledger: 130 entries (79 synced, 36 security holds, 15 test-only). Next validate category anchors and continue independent partial-page work.
- Verification batch: sync tests passed and CODE-083 through CODE-087 reconciled unchanged. Re-ran actual discount-table, gift-card layout and category-copy isolated probes. Category and five edited discount guides retained their 28/15/10/11/10/14 original HTML anchors; six manual-root links in the category guide resolved and `git diff --check` passed. No Joomla UI, actual database, checkout, filesystem copy or payment was tested. Continue partial-page audits.
- CODE-086/#146: actual `CategoryModel::copy` and `saveCategory` were exercised with isolated dependencies and a source category with enabled product filters. The copied payload reached a deliberately failing bind with empty `product_filter_params` and emitted two missing-input warnings. No database or Joomla UI was run. Duplicate search, sync tests, dry-run, creation and reconciliation passed; direct-Issue fallback avoided the transient list omission. Updated handoffs, master, triage, ledger and category guide/inventory; all 28 original guide anchors retained. Ledger: 129 entries (78 synced, 36 security holds, 15 test-only). Next examine the distinct false-success-on-copy-failure observation and continue remaining partial pages.
- CODE-085/#145: actual `component/site/tmpl/giftcard/default.php` included with isolated dependencies and customer amount enabled rendered no customer-amount input with fallback markup, but did render the input with a custom template containing `{customer_amount}`. No Joomla UI or checkout was run. Existing #112/#113 are distinct mail problems. Sync tests and dry-run passed, Issue created and subsequently reconciled; as with #144 the first immediate list read briefly missed its marker. Updated handoffs, master, triage, ledger and guide/inventory. Ledger: 128 entries (77 synced, 36 security holds, 15 test-only). Next continue remaining partial-page audits.
- Fixed the sync tool's false block when a ledger-mapped Issue is not yet visible in the paginated list: it performs a direct Issue GET with a validated number and requires the same stable marker and existing managed-body/closed-state checks. Missing markers still block, and API errors propagate without creating a duplicate. Focused fake-API tests cover list omission, missing marker, closed issue and HTTP 429; sync tests and a live read-only reconciliation of #144/#145 passed. Updated `ISSUE-MANAGEMENT.md`. Next continue remaining partial manual pages and security holds.
- CODE-084/#144: `DiscountproductTable::doCheck` requires `shopperGroups`, while the inline input/controller bind the edited field without that association and check before enabling inline mode. Isolated actual table with parent stubs rejected a valid inline amount without the option and accepted it with a bound group; the controller, Joomla browser and database were not run. Deduplicated, sync tests and dry-run passed, Issue created and reconciled. The first immediate list reconciliation could not find the marker; direct authenticated issue GET confirmed it existed, and a later dry-run reported unchanged. Updated both handoffs, master, triage, ledger and product-price guide. Ledger: 127 entries (76 synced, 36 security holds, 15 test-only). Next check guide anchors and continue independent partial-page work.
- CODE-084 expansion: `DiscountTable.php:161-173,225-230` and `DiscountsController` use the same option check and inherited inline flow. Both actual discount table classes were exercised for threshold and discount amount: without a group each failed; with one each passed. Only parent dependencies were stubbed; no controller, database or Joomla UI was run. Updated handoffs, master, triage, ledger, both guide warnings and inventory; dry-run, additive comment to #144 and reconciliation passed. Next check order-discount anchors and continue partial-page audits.
- CODE-083/#143: reviewed the same nullable-template `count()` in Who Bought, Shopper Group Product and Aesir Products. Actual Who Bought and Shopper Group Product layouts raised PHP 8.4 TypeError with an object and isolated stubs; Aesir Products is source-observed only. Product Tab was previously tested with object and null. Updated both handoffs, master, triage, ledger and module guides; sync tests and dry-run passed, evidence was appended as a comment and the following reconciliation reported unchanged. No Joomla storefront was tested. Next verify module guide links and continue partial-page audits.
- Coupon user-selector source recheck: `CouponuserField.php:46-83` configures Select2 with `multiple => false` and fetches only the first stored value, despite the form XML's `multiple="true"`. Updated the customer guide and CODE-043 handoffs, master, triage and security-hold ledger to avoid overstating the XML alone. No rendered Joomla UI, save/reload or authorization test was performed; security review remains open. Next verify anchors and links, then continue other partial pages.
- Voucher boundary source recheck: `libraries/redshop/src/Promotion/Voucher.php` checks `start_date <= currentTime`, `end_date >= currentTime` and `voucher_left > 0` in its normal lookup queries. The voucher guide now states those source-level bounds while keeping actual time zone, blank dates, quantity effects and checkout unverified. Rechecked its XML, product selector, table and cart calculation; known lookup issue remains open. Next check voucher anchors and continue partial-page work.
- Gift-card customer-amount template check: `component/site/tmpl/giftcard/default.php:27-34,112-139` generates the input for a detail page with customer amount enabled and substitutes it into `{customer_amount}`; the fallback detail markup lacks the tag. Updated the guide and inventory; no rendered storefront, mail, payment or checkout was run. Existing gift-card issues remain open. Next verify original anchors and continue partial pages.
- 2Checkout and Paymill guides now describe manifest option groups and defaults, distinguishing text credential fields from protected storage and warning that status codes and accounting mappings need review. Manifests rechecked; provider, callback and Joomla checkout security/behavior remain unverified. Next check guide anchors and links and continue remaining plugin field audits.
- CODE-083 (#143): actual Product Tab layout with AJAX/add-to-cart enabled raised PHP 8.4 `count()` TypeError for both template object and null in isolated stubs. Joomla storefront unverified. Compared and distinguished CODE-077/#137 (text option handling); dry-run, creation and selected reconciliation passed. Guide warns about the combination. Ledger: 126 entries (75 synced, 36 security holds, 15 test-only). Next check module guide links and continue remaining partial pages.
- Integration and e-conomic configuration guides now describe the distributed disabled switches and e-conomic's dependent/status controls; checked `default_integration.php`, `default_economic.php` and `config.dist.php`. No provider, carrier, SMS or accounting operation was performed. Next verify anchors and links and continue remaining configuration field audits.
- Corrected configuration overview: the inspected frontend Design Style form has five button controls, while the backend form currently has none. Performance is disabled in distributed configuration and its helper caches values in the session; page-level effects remain unverified. Checked `default_config_custom_css_site.php`, `default_config_custom_css_admin.php`, `default_performance.php`, `config.dist.php` and `Helper/Performance.php`. Next verify overview links and continue remaining configuration field audits.
- User configuration guide now distinguishes distributed retype-email and terms-display defaults and portal-mode conditional fields. Checked registration and shopper-group forms and `config.dist.php`; account, consent and Joomla UI behavior remain unverified. Next check anchors and links and continue remaining configuration field audits.
- Product, Order and SEO configuration guides received selected distributed defaults; SEO also identifies the published-frontend menu query. Checked the matching PHP configuration templates and `config.dist.php`; existing settings, routes, calculations and numbering remain unverified. Next check anchors and links and continue remaining configuration field audits.
- General and Dashboard configuration guides now describe selected distributed defaults and the upload-size form fallback. Checked `default_general_layout_settings.php`, `default_menuhide.php` and `config.dist.php`; existing settings, actual upload behavior and Joomla ACL remain unverified. Next check guide anchors and links and continue remaining configuration field audits.
- Feature settings now distinguish selected distributed defaults and the import minimum's form fallback from existing saved settings. Controls checked in the rating/comparison/wishlist/import/stockroom configuration templates and `config.dist.php`; note the distributed file uses a differently named import-minimum property while the form explicitly falls back to one byte. No Joomla UI, import, stock or frontend test was performed. Next verify anchors and links and continue remaining configuration field audits.
- Manufacturer, Category and Newsletter configuration guides now distinguish checked distributed defaults from existing settings; manufacturer image sizes, category ordering/limit and newsletter placeholder sender/batching were checked against relevant configuration templates and `config.dist.php`. No mail or storefront tested. Next verify guide anchors and links and continue remaining configuration field audits.
- Price and Cart configuration guides now describe distributed exemption/AJAX defaults separately from saved settings and warn about CODE-082/#142 and CODE-081/#141 respectively. Conditional controls and defaults checked in `component/admin/tmpl/configuration/default_price.php`, `default_cart_settings.php` and `component/admin/config/config.dist.php`; comprehensive field audit, tax calculations and checkout remain open. Next verify their anchors and links, then continue remaining partial configuration pages.
- CODE-082 (#142) is an investigation, not a confirmed tax error: the actual exemption helper returned false for an approved user in isolated stubs regardless of the Apply VAT for Tax Exempt setting and did not access configuration. Its result is used in a shipping calculation; full persisted-setting and product/cart/order/invoice behavior is unverified. Duplicate searches, dry-run, creation and selected reconciliation passed; VAT FAQ clarifies conditional controls and warns against relying on unverified totals. Ledger: 125 entries (74 synced, 36 security holds, 15 test-only). Continue systematic partial-page review.
- CODE-081 (#141): actual `Template::getAjaxDetailBox` with seeded template records reused alpha for products 11 then 12 and beta for the reverse order. Product lists call this helper; storefront and database behavior remain unverified. Duplicate searches, dry-run, creation, reconciliation and whitespace checks passed. Updated the AJAX FAQ; ledger: 124 entries (73 synced, 36 security holds, 15 test-only). Continue the FAQ and remaining partial-page quality work; do not close security holds.
- CODE-080 (#140): actual `MailsModel::getListQuery` with Joomla 5.4.6's locked `joomla/database` 3.4.3 query builder and isolated dependencies produced an ungrouped name/subject OR before section and publication AND conditions. SQL execution and Joomla UI were not tested. Search, dry-run, creation, reconciliation, sync/label tests and whitespace checks passed; the mail guide warns administrators. Ledger: 123 entries (72 synced, 36 security holds, 15 test-only). Continue another partial-page quality pass; security holds remain open.
- CODE-079 (#139): actual `Install::synchronizeUser` with two disposable stub records and false storage returns reported two; the user-sync view labels the result as added. Failure may follow partial persistence. GitHub searches, dry-run, creation and selected reconciliation succeeded; guide links and whitespace passed. Joomla/database and any separate security review remain open. Continue remaining partial guides.
- e-conomic plugin manifest and product helper operations were rechecked; setup now describes isolated configuration and warns about existing CODE-047/#102, with a matching sync warning. No provider or accounting operations were performed. Next verify links and continue remaining partial guides.
- Verified all 15 historical changelog files exist, are linked by the archive overview and have no worktree diff against documentation HEAD. Inventory now calls them `historical-preserved`: this is a preservation classification, not a claim that historical release facts or published rendering were verified. CHANGE-004 remains open pending complete migration acceptance. Continue remaining partial pages.
- Plugin overview was updated with compatibility/testing caveats and corrected EAN and GLS Business labels. All 15 remaining unclassified pages are historical changelog entries; their first headings and archive overview were checked but individual classification and final review remain open. Next verify overview links and continue other partial pages.
- GiroPay, Paymill and ePay v2 manifests were checked and obsolete walkthroughs replaced with provider-compatibility and safe testing guidance. Paymill manifest defaults sandbox; GiroPay has no manifest test switch; ePay debug is not assumed to be test mode. No provider or Joomla checkout used. Next verify links and continue remaining pages.
- Giao Hang Nhanh, Shipper and system Product Zoom manifests/handlers were checked; legacy walkthroughs replaced with cautious configuration and isolated tests, including shipping-operation risk and zoom's existing jQuery dependency. No provider, shipment or frontend tested. Next validate links and continue remaining pages.
- Default GLS and GLS Business manifests/rate handlers and default GLS language/template tag were checked. Modernized the three GLS guides; the old separate address-update plugin's identity remains unverified, while the current default plugin has a shipping-information handler. No provider service, checkout, labels or real addresses used. Next validate links and continue remaining plugins.
- Bao Kim and Money Booker manifests were checked and old screenshot instructions replaced with cautious isolated-provider testing guidance; the former's test-mode default and the latter's lack of a manifest test switch are explicitly distinguished. No provider, payment or Joomla operation occurred. Next validate links and continue unclassified plugins.
- 2Checkout and PayGate legacy walkthroughs replaced after manifest review; documented the 2Checkout test-mode default and absence of a PayGate manifest test-mode setting, with no assertion of provider compatibility. No provider, sensitive configuration or checkout used; callback/security review remains open. Next validate links and continue other plugin pages.
- Bank transfer and EAN transfer manifests and handlers were checked. Replaced legacy screenshot walkthroughs with configuration and offline-reconciliation guidance; EAN manifest has no payment-price field. Refreshed import/export overview. All remain partial; no Joomla, checkout, invoice, provider or mail operations were performed. Next validate targets and continue remaining unclassified plugin pages.
- Payment FAQ source pass checked COD and PayPal plugin manifests; documented COD customer-type defaults and warned PayPal defaults to Live, so sandbox must be explicitly selected for an isolated test. Existing CODE-001/#71 and CODE-002/#105 remain open. No provider or checkout was tested. Next verify links and continue remaining pages.
- Module overview received a brief scope/access warning; the shopper-group menu link was renamed to avoid implying menu visibility provides ACL. Marked partial pending link and final quality review. Next verify overview targets and continue remaining manual pages.
- Products and Facebook module manifest pass documented relevant defaults and required fields with a warning about provider example URLs. No provider request, consent flow, Joomla UI or storefront was tested. Next validate links and continue remaining manual pages.
- Mass-cart manifest/layout and mega-menu manifest/helper source pass documented default settings and the separate quantity input. Actual cart processing, menu cache and Joomla behavior remain unverified. Next check links and continue the other pages.
- Who Bought manifest and actual entry with query stubs revealed CODE-078 (#138): multiple categories become one quoted string, distinct from CODE-038/#88's missing purchase relationship. SQL/Joomla untested; dry-run, creation, selected reconciliation, links and whitespace passed. Currency module source pass documented default cache setting; session/cache behavior remains open. Continue other modules.
- Discount and login-greeting module manifest/helper/layout source pass documented inclusive date bounds, displayed discount formatting and greeting defaults. Neither Joomla sessions nor checkout was tested; output-handling investigation remains open. Next validate links and continue other modules.
- Marketplace Product Tab manifest/entry/helper/layout pass found CODE-077 (#137): `no` is truthy and unequal to zero. Actual helper/layout with isolated stubs returned request category instead of selected categories and initiated four queries for four No tabs. Source and GitHub search identified CODE-039/#89 as a distinct asset-packaging investigation. Dry-run, creation and selected reconciliation succeeded. Manufacturer and similar modules also received source-backed defaults; links and whitespace passed. No Joomla UI or storefront was tested. Continue other modules.
- Shopper-group logo/category/product manifest defaults were checked against relevant layout and helpers and added to the guides. The category helper's separate unassigned cache key remains an open security-sensitive investigation; no runtime isolation or direct access was tested. All three pages remain partial; next validate links and continue other modules.
- Marketplace price-filter and comparison module manifests/entries were checked. Added explicit manifest defaults and noted the comparison module's sole basic option; entry-code fallback values differ from some manifest defaults, so the guide identifies them as manifest defaults. Next verify links and continue other modules. No Joomla UI or storefront was tested.
- Marketplace newsletter and free-shipping module manifests and layouts were checked for their options and displayed form/message. Guides describe logged-in prefilling, client-side validation and empty option defaults; no subscriber, email, storefront or checkout operation was performed. Next verify links and continue module pages.
- Marketplace search/cart manifest and entry source inspection added field defaults and a reminder to select a cart output mode. These pages remain partial; no Joomla session, AJAX, storefront or checkout was tested. Next verify module-guide links and continue remaining pages.
- e-conomic account-group source review covered list columns, toolbar, form-required numeric account fields and default publication. Improved the group guide and integration overview. Next verify links and continue remaining partial pages. Provider and Joomla behavior remain unverified; no accounting or test-site operation was performed.
- Review product-link investigation became CODE-076 (#136): the actual view emits `rating.edit` with product ID; the inherited controller selects a rating model using that ID. An isolated view stub confirmed the generated URL; actual Joomla routing remains unverified. Duplicate search, dry-run, creation and selected reconciliation succeeded. Ledger: 119 entries, 68 synced, 36 security holds, 15 test-only. Next validate the guide and continue other partial pages.
- Customer-question and rating form/list source pass clarified search, product filter and admin defaults, including the distinction from storefront review defaults. The rating product link uses a rating task with product ID; route behavior is unconfirmed and needs isolated investigation. Next validate anchors and overview targets then inspect that route. No Joomla UI or real submissions were tested.
- Newsletter form/table/list sources establish name and publication as required by the form, but not subject or body; the guide was corrected and name search and publication default added. Next verify anchors and continue partial pages. Mail search/filter precedence still requires actual Joomla query-builder evidence. No newsletter was sent or changed.
- Mail and subscriber form/list sources were checked for search scope, filters and new-record publication defaults; communication overview refreshed. Mail search/filter SQL precedence needs verification with the actual Joomla query builder before claiming a defect. Next check anchors and links and inspect newsletter form/list. No messages or subscriber operations were performed.
- User billing form and save model were inspected for required address fields and conditional country/state and tax-exemption controls. Updated the guide without testing any real customer data. Next verify anchors and continue remaining partial pages and independent issue work.
- User editor and controller review led to CODE-075 (#135), a nonsensitive functionality tracker for mismatched address-selection input; the actual controller rejected the link input in isolated stubs. Separate security review remains open. Duplicate search, dry-run, creation and reconciliation succeeded. Ledger: 118 entries, 67 synced, 36 security holds, 15 test-only. Guide clarified conditional account controls and tabs; next validate anchors and continue user editor/save inspection. No Joomla UI or customer/address operation was performed.
- Shopper-group form and list query were compared with the guide; documented name search, published/No defaults and category/manufacturer multiselects. Users overview links were refreshed. Next verify anchors and links and inspect user-editor behavior. No Joomla UI or customer operations were performed.
- Stock-image form/list/table and inventory list/save source review added prefix search, property hierarchy ordering, the blank-as-infinite deletion consequence and preorder constraint. Image deletion attempts associated media/folder cleanup. Existing stock-image query concern remains open. Next verify anchors and continue another partial manual page. No Joomla UI, stock or media operations were performed.
- Stockroom management form/list/table review documented name search, delivery-time defaults, visibility/publication defaults and deletion of product and product-attribute stock associations. The overview was refreshed. Next check anchors and links, then inspect stock-image list/form and inventory. No Joomla UI or stock mutation was tested.
- Shipping rate form, view and initialization were checked for country/state/shopper-group multi-selection, customer type options, published tax groups, unchecked new-rate VAT and the standard-method delivery-type condition. Added those details and clarified location/rate list columns. No runtime tests. Next validate guide anchors and continue stockroom pages.
- Shipping rate editor/model/controller review corrected the manual's server-validation caveat and identified CODE-074 (#134): the actual copy method omitted dimension bounds, exclusions and tax group from the bind in an isolated table/database stub. Duplicate search, dry-run, creation and selected reconciliation succeeded; no Joomla, SQL, checkout or tax calculation was tested. Ledger: 117 entries, 66 synced, 36 security holds, 15 test-only. Next validate anchors and finish the rate-editor fields/defaults.
- Shipping methods list view falls through from rate capability to location capability; CODE-073 (#133) reproduces the incorrect rate check for a location-only plugin with an isolated invocation, and the self-pickup manifest declares that combination. The guide now warns about the indicator. Duplicate search, dry-run, creation and reconciliation succeeded. Ledger: 116 entries, 65 synced, 36 security holds, 15 test-only. No Joomla UI or checkout tested. Next validate guide anchors and inspect the rate editor and save path.
- Shipping-box and wrapping forms, tables, list models and views were compared with the manual. Added search, defaults and dimension validation; original anchors retained (8 and 10). CODE-072 (#132) captures the actual shipping-box model generating ID zero for `id:42`, verified with isolated stubs; dry-run, creation and selected reconciliation succeeded after duplicate checks. Ledger: 115 entries, 64 synced, 36 security holds, 15 test-only. No real Joomla UI, database, checkout or image tests. Next inspect shipping methods/rates and continue remaining partial pages and issue review.
- Manual-order form/controller and `AddorderModel` payment storage were examined: the payment record uses the saved order total; the controller's temporary amount does not establish a payment defect. The add-order guide describes line fields, status and discount controls. The quotation editor source was rechecked for notes, line editing, validation and discount control state, and its guide improved. Order-list/add-order preserved 3/13 anchors and both repository whitespace checks passed before the quotation edit. No Joomla UI, actual order, mail, payment or stock test was performed. Next validate quotation anchors and continue remaining partial pages, while preserving security holds and open acceptance tests.
- Tax group and rate list/form source pass added search, controls, defaults and list guidance. CODE-069 (#129) captures the actual tax-rate view using rate ID instead of group ID in the group edit link; CODE-070 (#130) captures the model's state join on code without country, with an equivalent SQLite fixture matching two country states. These concern list navigation/display, not a proven tax-calculation defect. Both passed duplicate checks, dry-run and selected reconciliation; the two guides retained 8 and 12 original anchors. No Joomla UI, MySQL or tax calculation was tested. Current ledger: 113 entries (62 synced, 36 security holds, 15 test-only). Continue remaining partial pages and independent Issue review.
- VAT and Orders overview links and descriptions were refreshed. Order-status, product-order search and quotation list sources were rechecked; their guides now describe search, sorting and defaults. Their 10/2/10 anchors and all three VAT and five Orders overview targets were verified. Joomla UI, export, transitions and quotations remain unverified. Next inspect the remaining order list and creation guides and continue Issue review without disclosing held details.
- Order-list query/form review found CODE-071 (#131): end-date filtering uses `<=` next midnight and adds a fixed 86,400 seconds. The actual model with isolated stubs reproduced the UTC boundary and spring/autumn DST offsets in Europe/Copenhagen. It is distinct from CODE-005's export query. The order guide now clarifies search scope and the date limitation. The issue passed deduplication, dry-run and selected reconciliation; real SQL, Joomla timezone behavior and orders remain unverified. Ledger now has 114 entries: 63 synced, 36 security holds and 15 test-only. Next continue the manual-order editor and save path.
- Latest continuation: CODE-064 (#124) now includes omitted property bind settings verified with isolated PHP table stubs and omitted subproperty publication identified in source. CODE-065 (#125) and CODE-066 (#126) separately cover submitted set-property messages omitted from save and the mismatched property image field; actual controller execution with a model stub captured both. The latter is distinct from #125 after comparing root causes. CODE-067 (#127) covers a postal-code country filter that excludes rows without a matching state; an actual model query stub and equivalent SQLite left joins verified the behavior. CODE-068 (#128) covers a duplicated prefix placeholder in currency validation; the actual table method was exercised with a database stub, not SQL. Countries, States, Postal codes, Currency, custom-field groups and custom fields received source-backed list/form improvements; original anchors retained for the first four (12/12/9/9; attribute guide 15). These pages remain partial; Joomla UI, database, actual images and downstream behavior were not tested. Sync and label tests and both repository whitespace checks passed. A full read-only dry-run timed out after CODE-046; two subsequent bounded batches reconciled the remainder and all 60 synced issues were unchanged across these runs. The ledger also has 36 security holds and 15 test-only entries; neither category is complete. Continue remaining partial pages and any independent issue review.
- Custom-field groups, custom fields and Templates were compared with their forms, list models and views; the custom-field form defaults and section-based bulk group assignment are now documented. The customization overview explains its linked topics. Original anchors were retained (9, 21 and 7 respectively), and their local targets plus all eight overview targets exist. These remain partial pending Joomla runtime and cross-manual review. Next continue another incomplete page using its current source rather than treating this checkpoint as completion.
- Latest continuation: the Product Price Discount and Order Total Discount articles now describe list behavior, form defaults, validation and examples; 10 and 14 original anchors were preserved. CODE-054 (#116) records product-price search being ignored by the list query; CODE-055 (#117) records order-total search targeting a name absent from its edit form. Isolated PHP mocks exercised both actual query methods; Joomla UI, save, SQL execution and checkout were not tested. Search was checked against existing issues and each finding was dry-run before creation. Both are tracked in the handoff, master, triage and sync ledger.
- Media list, editor and product-dialog source review updated both guides and the overview. The two guides preserved 14 and 10 existing anchors; their menu targets and both diffs were checked. CODE-061 (#122) records a filter Reset handler calling a nonexistent form method: the exact handler raised a TypeError in an isolated browser fixture, with Joomla list behavior unverified. CODE-060 remains test-only: the earlier claim that YouTube hides its own field was retracted because the mock ignored duplicate IDs; an isolated browser with bundled jQuery 3.4.1 hid only the first matching element and left YouTube visible. No issue was created for CODE-060. The sync and label tests passed; the full read-only dry-run reconciled 104 entries (54 unchanged, 35 security holds, 15 test-only). Next examine the product manual's list and form tabs against current source, update incomplete guidance and record distinct verified findings. Joomla runtime and final cross-manual review remain open.
- Product list and general editor inspection covered `Products/HtmlView`, `products/default.php`, `product/edit.php`, `product/edit_general_data.php` and `ProductModel` defaults/copy path. The guide now describes filter clearing, category-specific ordering, unpublished copies, required fields and relevant validation/defaults. Follow-up inspected product type, stockroom, calculator and payment controls and related helpers: the article now covers serial use/delete, license ranges/defaults, preorder reset and calculator units and minimum/alert settings. CODE-062 records a payment-selection investigation reproduced with isolated helper/database stubs; it is held for authorized private security review or a separately reviewed nonsensitive tracker. No checkout or provider was tested. Continue with attributes, related products and metadata before treating the article as field-complete. Joomla UI, actual copy and storefront remain unverified.
- The product attribute, accessory, related and metadata layouts were compared with the current selector and view implementations. The guide now lists all accessory operators and the three SEO-combination choices. The related selector is rendered as a hidden input despite its multiple-selection configuration, so the JavaScript string split is not by itself evidence of an array error. The attribute-set URL and metadata selector problems were already tracked. `edit_extrafield.php` checks that the product template exists and loads fields by section; it does not select editor fields by scanning template tags. Corrected the conflicting historical product-template instructions. Continue with attribute/property controls and save behavior.
- Attribute deletion is a separate asynchronous operation, not an ordinary unsaved form edit. CODE-063 (#123) records the generated subproperty-delete handler using removed jQuery `.size()` after requesting deletion. A browser fixture using bundled jQuery 3.4.1 and the generated asset observed one stubbed request, a TypeError and a remaining row; no Joomla request or real deletion was performed. Both relevant guides warn to check saved state before retrying. The ledger has 106 entries: 55 synced, 36 security holds, 15 test-only; continue the product attribute and save-path review.
- Attribute-set list, editor and copy-path source review improved the set guide with columns, actions, defaults, fields and an example. CODE-064 (#124) records missing attribute description, publication and display type in the set-list copy bind; the actual method was invoked using isolated PHP table/database stubs. It is distinct from M-0140 (#96), the malformed product-editor selection request. The ledger has 107 entries: 56 synced, 36 security holds and 15 test-only. Joomla database, copy, cart and storefront remain unverified; next compare the property/subproperty copy and save paths.
- The ledger now contains 98 entries: 49 synced, 35 security holds and 14 test-only. Full dry-run returned 49 unchanged and 49 skipped; `issue-sync.test.js`, Core label mapping tests, label script syntax and `git diff --check` in both repositories passed. The first attempted anchor check failed due to PowerShell quoting; the corrected check passed. Promotions has since received a base/plugin form pass against the form, layouts, validation, menu and helper; nine anchors were preserved. Its date and award defects remain tracked and the UI/checkout unverified. The discount overview now briefly distinguishes the features. Next continue remaining partial manual pages and assess safe security-hold trackers; security holds remain unfinished and require an authorized private channel or separately reviewed nonsensitive trackers.
- Category list and editor source review added name/ID search, hierarchy, bulk-template, deletion and filter guidance. CODE-056 (#118) records the controller reporting an error after its model executes an update and returns null; the model was exercised with an isolated PHP database stub, not Joomla or a real database. The category article retained 28 original anchors. Category and discount overviews now explain their navigation. The full dry-run after #118 reported 50 unchanged and 49 skipped.
- Product Price Management source inspection covered its list, list-save controller, price-rule list, editor and model. The article explains navigation, separate save controls, fields, defaults and known limitations; all nine original anchors were preserved. CODE-057 (#119) records the price model querying before setting the product ID; an isolated constructor mock captured the incomplete query, with Joomla and SQL unverified. A category-search mismatch in the price list was confirmed by isolated query/schema comparison and appended to existing CODE-010 (#74) after dry-run, avoiding a duplicate. Current ledger: 100 entries, 51 synced, 35 security holds and 14 test-only. Next investigate the price-list save paths and price-rule range validation before moving on; assess security holds separately without disclosure.
- Follow-up price checks found CODE-058 (#120): a new range enclosing an existing one passes `PriceTable::check`; an isolated stub accepted 1–15 with an existing 5–10 and rejected 6–8. The first mock attempt failed because the stub's parent constructor signature was wrong; the corrected run passed. CODE-059 (#121) records two unscoped updates per price-list save, confirmed by invoking both actual controller/model paths with database stubs. Real SQL, triggers, storefront and Joomla remain unverified. Both issues were searched, dry-run, synchronized and confirmed unchanged on a subsequent selected dry-run; the price guide warns customers. The ledger now has 102 entries: 53 synced, 35 security holds and 14 test-only. No repository security policy or authorized private disclosure channel was found; do not expose held details. Next inspect Supplier Product's actual menu, form, list, model and association behavior before revising its manual page.
- Supplier and manufacturer source passes inspected list queries, forms, table validation, editor and supplier mail path. The pages now describe searchable fields, inline names, form defaults and publication caveats; their 11 and 13 anchors respectively were preserved, and whitespace checks passed. Actual Joomla UI, media, rendering and mail remain unverified. Next inspect the Media list/form and product dialog before revising linked media guides; do not disclose held security details.
- `ISSUE-SYNC-REGISTER.csv` contains 96 candidates: 47 synced to GitHub #69–#115, 35 `security-hold` and fourteen `test-only`. The newly classified security items have current source anchors but remain incomplete reviews, not confirmed vulnerabilities. No authorized private reporting channel has been identified; retain the holds and separately assess nonsensitive trackers where appropriate. CODE-005 (#111) records strict date bounds excluding the exact first and last seconds, confirmed against actual query methods by an isolated PHP mock. The earlier count/data midnight mismatch remains unproven; SQL, configured timezone and multi-batch runtime are unverified. CODE-050 (#112) and CODE-051 (#113) were reproduced using the actual gift-card mail method with isolated service stubs: quantity two generated two coupons but one message with the last code, and a selected value of 35 was rendered as the configured 10. CODE-052 (#114) records a logged-in voucher TypeError with a null transaction; CODE-053 (#115) records currency formatting for a percentage voucher. Both were reproduced using isolated PHP mocks. Actual Joomla UI, checkout, database and mail-provider behavior remain unverified. CODE-032 (#110) and CODE-004 (#109) are nonsensitive integrity/concurrency trackers; privacy and authorization review remains separate. CODE-047 (#102), CODE-048 (#104) and CODE-049 (#107) were reproduced with isolated mocks or fixtures, not Joomla/provider tests. The test-only IDs are ECON-001/003–008, M-0040/0060/0128/0187, IMEX-003/007 and INPUT-004; acceptance remains open. Both focused Node tests passed; the latest full dry-run preceded #114 and #115 and reported 45 unchanged issues; each new issue had a selected dry-run.
- Local changes: Core issue form, label-mapping script/workflow and focused test; updated agent instructions in both repositories; issue policy, ledger, synchronization tool and Core-fix handoff; and a partial Coupons article quality pass. The label workflow has not run on GitHub. It serializes jobs per issue, skips stale bodies, never removes labels and fails explicitly on conflicting exclusive labels. Initial source/status labels are declared by the form itself, rather than dependent on a possibly stale opened event; actual form output and concurrency still need GitHub verification.
- Coupons source inspection includes `component/admin/forms/coupon.xml`, `filter_coupons.xml`, `CouponsModel`, `CouponModel`, both coupon views, `CouponTable`, `libraries/redshop/src/Model/ListModelRedshop.php`, `Helper/CartDiscount.php`, `Helper/Discount.php`, `Promotion/Voucher.php` and the coupon user/remaining fields. The inherited list model populates submitted effect filters, so absence of an explicit assignment in `CouponsModel` alone is not a new finding. Existing CODE-012 and CODE-041–044 cover the examined checkout and user-selection concerns. The article remains **partial** pending full quality and link checks; no Joomla UI or checkout was tested.
- Latest Coupons pass clarified the raw-value comparison and the example's count limitation; all 15 original anchors and the menu reference were checked. The final cross-manual quality pass and Joomla behavior remain open. After creating #111, a fresh full dry-run verified all 43 synced issues unchanged and skipped the 35 security holds and fourteen test-only records.
- Gift-card source pass covered the form, list/filter model and views, save table, site template and mail issuance. The article now describes field defaults, validation, list operations and the two newly tracked mail problems; its 11 original anchors were preserved. Current Joomla UI, actual order and mail flow and the final cross-manual quality pass remain unverified.
- Voucher source pass covered the form, list/filter model and views, save table, product selector and checkout helper. The article now describes fields, list operations and the two newly tracked lookup/display problems; its ten original anchors were preserved. Current Joomla UI and checkout and the final cross-manual quality pass remain unverified.
- Mass-discount source pass covered its form, filter, model, view and table validation and product updates. The article now covers fields, list actions, the product-selector mismatch and destructive product-field effects. Its 11 original anchors were preserved. Joomla UI, product calculations and overlap behavior remain unverified.
- The latest full issue dry-run reported 47 unchanged issues, 35 security holds and fourteen test-only records; both repository diffs passed whitespace checks. All four new CODE-050–053 IDs occur once in each CSV register.
- Next: assess independently reviewed nonsensitive trackers for held items and identify an authorized private channel without disclosing sensitive details. Do not treat security holds or test-only acceptance as completed reviews. Continue the discounts quality pass with Product Price Discount, then proceed systematically through remaining partial pages; synchronize newly verified safe findings with a dry-run and update all registers.
- Local checks: `node tests\javascript\issue-form-labels.test.js`, `node --check .github\scripts\issue-form-labels.js`, and `git diff --check` in both repositories passed. CSV import confirmed 89 ledger rows (87 pending-review, two pending-sync), 89 Core rows and 364 triage rows; the Coupons menu link and all 15 legacy anchors were checked. No GitHub workflow, Joomla UI/checkout or provider runtime test was run.

### Historical resumption observations

- Current local and remote heads match: Core `develop` `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`; documentation `modernize` `6ae296dbe0f05654ef403b64739acb7820884402`; legacy extensions `master` `68c3819e1fa444a1bd3c46322045d4820a52fea6`. All worktrees were clean before these checkpoint edits. The other computer's reported uncommitted Cielo files were not present as changes here; their transfer/state there is unverified.
- Core diff from evidence baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd` reports the same 82 paths recorded at transfer; diff from transfer snapshot is empty. Inspection of the Flatpay/Bambora manifest diffs and current forms confirms the source-level `test_mod` mismatch and `GPB` options still exist (CODE-028/029); no Joomla UI or provider test was run. Broader changed-code and finding re-verification remains open.
- GitHub all-state listings, including bodies: Core #57 open, #58 and #59 closed; no visible Issues in documentation or legacy extensions. #59 describes a green error message when saving a question; it has no comments or linked closing PR. Current `QuestionModel::save` returns a truthy error array and `QuestionController::save` treats it as success (CODE-034), but equivalence to #59 is unproven. Do not reopen or duplicate without further assessment.
- Accessible session history contained no earlier documentation/Issue-import session; the other local project session concerned separate Core work. Cloud history search returned no matching sessions; the separately queried local store contained only this and that Core session. `gh` was not found. GitHub read access worked; write permissions and private security-reporting path were not tested.
- At that earlier observation no Issue, Core, plugin, test site, commit, push or publication was changed. The new local issue-management changes and replacement scope are recorded above.

## Transfer checkpoint — 2026-11-24, 17:37 CET

**Historical pause entry.** This pause was lifted by the 2026-11-25 explicit resumption recorded above. The section below is retained as history.

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

## Checkpoint 2026-11-25 (individual source review, group 1 of orders/payments)
- Core HEAD 2e28896802 is 27 commits ahead of the earlier evidence baseline beacc470; worktree clean. Changes touch orders, prices, shipping rates, attribute prices, field groups, payment architecture, Marketplace.
- Reviewed individually against source: order-list.md (payment-coverage filter/column added), order-payments.md (new, in menu), add-order.md (Save+Pay), flatpay.md (ledger settings, webhook). Details in SOURCE-REVIEW-REGISTER.csv.
- Candidate finding: orders list coverage line uses a literal '?' separator (component/admin/tmpl/orders/default.php), cosmetic; not yet registered as CODE-200.
- Next: price-management, shipping-methods (shipping rates), attribute prices, field groups, marketplace pages; then CODE findings whose files changed since baseline.
- Progress: 4 of 161 pages individually source-reviewed in this phase (~2.5%); 0 of 199 CODE findings individually re-reviewed. Runtime tests not run.

## Checkpoint 2026-11-25 (group 2)
- Individually source-reviewed and updated: shipping-methods.md (rate list), price-management.md (known issues, list state). Total this phase: 6 pages (about 3.7% of 161), all partial.
- CODE re-review (CODE-INDIVIDUAL-REVIEW.csv): CODE-057 and M-0122 no longer present in source (fixed by Core d06a4fac86); CODE-058 and CODE-130 still present. Issue comments for #119 and #95 are BLOCKED: GitKraken MCP not authenticated (run gk auth login); retry, do not close automatically.
- Next action: attribute-price and field-group pages (Core commits fc21a95ee7, c1f671e352), marketplace pages, then remaining CODE findings whose files changed since beacc470. Runtime tests not run.

## Checkpoint 2026-11-26 (individual source review continues; ACTIVE)
- Documentation branch `modernize` remains dirty; preserved existing changes. Local Core `develop` HEAD is `2e2889680244db64b9e9f64da29608e02f543a70`, clean and six commits behind the locally known `origin/develop` (`6e278baf72`). No fetch, pull or Core changes. The newer origin commits touch payment documentation and runtime; local-HEAD payment conclusions are not verified against them.
- Five page entries examined in this batch: `customization/custom.md`, `redshop.md`, `zip-code.md`, `countries.md`, `states.md`. All remain **partial**, not final approvals; exact inspected methods and outstanding paths are recorded in SOURCE-REVIEW-REGISTER.csv. Corrected stale field-group sorting and selector guidance and clarified country-code checks. The other inspected claims already matched source.
- Repaired an earlier malformed page-register row that had merged `add-order.md` into the price page; restored both records. Removed potentially sensitive operational detail from the ordinary finding register; private investigation remains pending.
- CODE-120, 121, 123, 124, 125, 126 and 127 source-rechecked; issue bodies examined. The field-group isolated regression `php tests\unit\fieldgroups-ordering.php` passed with doubles. No Joomla browser, database integration or provider runtime was tested.
- #180 is closed although its owner comment requests targeted UAT and says to keep it open; preserve the actual GitHub state and do not reopen automatically. #181 is closed with linked merged #245. Dry-run issue sync for 125/126 stopped on revision mismatch; no remote writes were attempted. #95 and #119 remain open and their source-fix updates remain pending controlled synchronization.
- Progress: 11 page records with partial source work (11/161 = 6.8% touched; **0/161 fully approved**). Finding register contains 10 CODE IDs (10/199 = 5.0% with recorded source rechecks, not a claim that all runtime/issue actions are complete) plus M-0122. The prior 4/199 figure included M-0122 and overstated the CODE count. Security holds have not been individually reviewed in this batch. The separate private handbook was not found at `C:\Github\redSHOP-internal`.
- Next: continue individual source review on remaining pages and findings, revisit every partial page and prior finding under the full checklist, reconcile issue-ledger revision evidence via the authorized workflow, and assess Core drift against `origin/develop` read-only before relying on payment guidance.

## Checkpoint 2026-11-26 (next source-review batch; ACTIVE)
- Five more pages received partial source review: `users/shopper-groups.md`, `plugin-redshop/self-pickup.md`, `product-management/redshop-manufacturers.md`, `customer-input/questions.md`, `communication/newletters-subcribers.md`. Source methods, specific limitations and reasons for unchanged pages are recorded in SOURCE-REVIEW-REGISTER.csv. Improved shopper-group customer-type/logo guidance and documented the pickup fallback warning.
- CODE-117, 118, 122, 128, 131 and 136 checked against source and existing Issues; records identify prior isolated evidence rather than claiming new runtime tests. The broader carrier list for CODE-136 was not independently re-read in this batch.
- Total: 16/161 page records touched (9.9%), all partial; 0/161 fully approved. CODE register contains 16 distinct CODE IDs (8.0% of 199) plus M-0122; runtime and some broader-impact verification remain outstanding. Prior individual entries must also be completed against every checklist item.
- Core revision is unchanged locally. Read-only comparison with known `origin/develop` shows later payment UI and webhook changes, so local-HEAD payment pages need a fresh individual review against the newer revision before being relied on as current. `node docs-review\issue-sync.test.js` passed; `node docs-review\issue-sync.js --ids CODE-057,M-0122` stopped because ledger evidence is at an older revision. No Issue write, Core change, commit, push or publication.
- Next: review remaining sources and Issues in batches, return to every partial page, revalidate prior finding evidence and handle private holds only via an authorized private channel. Record exact pending Issue synchronization without altering human-managed status.

## Checkpoint 2026-11-26 (further source-review batch; ACTIVE)
- Five additional partial page passes: `customer-input/rating-review.md`, `communication/newletters.md`, `global-configuration/newsletter.md`, `module-redshop/newsletter.md`, and `shipping/wrappings.md`. Updated wrapping image replacement guidance; the other inspected claims already matched the reviewed paths. These are not full approvals.
- Source and existing Issues reviewed for CODE-020, 109, 110, 112–116 and 167. #80 needs more relevant test-mail regression guidance; the controlled synchronization remains pending. Private security holds were not disclosed or marked reviewed.
- Total: 21/161 pages touched (13.0%), all partial; 0/161 fully approved. Finding register contains 25 distinct CODE IDs (12.6% of 199) plus M-0122, with runtime and broader-impact checks still outstanding. Do not equate touched entries with completed individual quality reviews.
- `node docs-review\issue-sync.test.js` passed in the preceding quality check; `git diff --check` passed with line-ending warnings. No Joomla/database/mail runtime was tested and no Core or remote changes were made.
- Next: verify list-sort behavior identified in the ratings page and check existing issue/root-cause mappings before registering any new finding; continue remaining individual pages, CODE findings and authorized private holds, and revisit every partial record.

## Checkpoint — individual finding batch (ACTIVE)
- Re-reviewed CODE-015, 034, 048, 076, 103, 111, 132 and 133 against current local Core and their existing Issues; also registered new CODE-201 and CODE-202. #77 and #103 need more targeted regression-test guidance; update only through the controlled process after reviewing complete evidence and issue comments.
- CODE-201: sortable review headings omit three ordering keys; #246 was created after a clean dry-run. CODE-202: an actual model-method probe with table/mailer stubs showed a saved review plus failure return on failed notification; #247 was created after a clean dry-run. Both subsequently reconciled as unchanged; no real mail or database was used.
- Updated the ratings guide to distinguish the attempted guest check and saved-review/failed-notification outcome. All 21 touched pages remain partial (21/161 = 13.0%; 0 fully approved). The register now has 35 CODE IDs: 33 of the original 199 (16.6%) plus two new findings; M-0122 is separate. A recorded finding review can still have outstanding runtime or broader-impact checks.
- `node docs-review\issue-sync.test.js` and `git diff --check` passed; the latter emitted line-ending warnings. Joomla, databases, browser checkout and mail delivery remain unverified. Core is unchanged; no commits, pushes or publication.
- Next: safely update #77 and #103 with focused evidence/test guidance where the synchronization policy permits; then continue individual review of remaining pages and findings, revisit partial pages and keep security holds on an authorized private path.
- Follow-up: re-read current source and existing comments, dry-ran and appended focused evidence and regression guidance to #77 and #103 via `issue-sync.js`; subsequent dry-run reported both unchanged. Existing bodies, comments and issue states were preserved. Continue the next individual batch.

## Checkpoint — five further partial page reviews (ACTIVE)
- Individually inspected `shipping/shipping-boxs.md`, `shipping/overview-shipping.md`, `orders/order-status-list.md`, `orders/quotations.md` and `orders/overview-orders.md` against the specific source and method paths recorded in `SOURCE-REVIEW-REGISTER.csv`. All five remain partial: additional relevant runtime and/or implementation paths are explicitly recorded, not assumed complete.
- Clarified the checkout-address prerequisite for shipping-box rendering and the difference between the read-only existing-status detail code and the list's inline editor. The three overview/quotation pages needed no change for the particular claims checked.
- Reviewed CODE-072 against #132 and CODE-016 against #78; the latter needs export-specific issue-test guidance through the controlled process. #77 and #103 received reviewed evidence comments without changing their status.
- Progress: 26/161 pages touched (16.1%), all partial; 0 fully approved. Of the original 199 findings, 35 have individual register entries (17.6%) with varying outstanding checks; two additional findings CODE-201/202 are tracked separately as #246/#247.
- `node docs-review\issue-sync.test.js` passed; `git diff --check` passed with line-ending warnings; chapter links in these five guides resolve locally. Joomla, database, provider, browser and mail runtime remain unverified. No Core edits, commits, pushes or publication.
- Next: update #78 after full evidence and human-comment review via selected dry-run; continue the next individual page or finding batch, revisit partial pages and use only an authorized private channel for security holds.
- Follow-up: rechecked #78 and the quotation sources, then appended source-specific export tests through a selected dry-run and controlled sync; a subsequent dry-run reported it unchanged. Issue state and body were preserved.
- Follow-up: rechecked CODE-020 test-mail model/controller and #80, appended specific template/send-result and tracker tests through the same controlled process, and verified a subsequent dry-run unchanged. No real mail or Joomla test was performed.

## Checkpoint - next individual finding batch (ACTIVE)
- Added source-based records for CODE-107, 104, 105, 138, 139, 191, 102, 101, 098 and 099. Existing CODE-132 had already been recorded; do not count it twice. Findings remain subject to the limitations and further tests in `CODE-INDIVIDUAL-REVIEW.csv`, rather than being treated as fully resolved.
- Rechecked CODE-191's free-shipping helper and identified the additional AJAX-cart consumer. Updated the finding registers and, after a dry-run, appended evidence and tests to existing #238; a subsequent dry-run returned unchanged. CODE-102's optional-template P1 deserves maintainer triage, but no priority or issue state was changed. Security holds remain separate and unreviewed without an authorized private channel.
- Partially reviewed `orders/product-order-search.md` and `module-redshop/free-shipping.md` since the previous five-page checkpoint. The latter already described the module behavior and known limitations inspected; no article change was justified. Repaired seven page-register rows that omitted the quality-status column; preserved their actual limitations, test status and issue references.
- Progress: 28/161 pages touched (17.4%), all partial; 0 fully approved. The individual finding register now contains 45/199 original CODE IDs (22.6%), plus CODE-201, CODE-202 and M-0122. A recorded source recheck is not proof of full runtime or broad-impact verification.
- Core remains clean at local HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` now points to `6c5bbe108b` and is nine commits ahead. No fetch or pull. Later changes include payment UI, integrations, API and documentation; affected pages require re-evaluation before being presented as current.
- `node docs-review\issue-sync.test.js` passed; selected CODE-191 dry-run, controlled update and follow-up dry-run passed. CSV parser checks passed for the page, individual-finding, Core-bug, issue-sync and triage registers; page IDs and finding IDs were unique and recorded page paths existed. `git diff --check` passed with line-ending warnings. Python was unavailable, so the existing Node CSV parser was used instead. No Joomla, MySQL, browser, carrier or real mail runtime was tested; no Core edits, commits, pushes or publication.
- Next: start the next five-page or ten-finding group, continuing the partially started page group; revisit all partial pages and verify payment documentation against the newer locally known revision. Keep private security holds blocked until an authorized channel is identified.

## Checkpoint - five further partial page reviews (ACTIVE)
- Individually inspected `orders/product-order-search.md`, `module-redshop/free-shipping.md`, `stockroom/inventory-stockroom.md`, `stockroom/stockroom-management.md` and `stockroom/overview-stockroom.md` against the specific paths and methods recorded in `SOURCE-REVIEW-REGISTER.csv`. All remain partial; the register records the untraced paths and runtime limitations.
- Clarified the inventory selector's English labels/defaults, stockroom list columns and search, and the feature-settings link. The free-shipping guide already covered the specific behavior checked, so it was not artificially changed.
- Found that the legacy inventory CSV view uses the same mismatched stockroom property as CODE-099. An actual view-method probe with model/output stubs emitted a header only and a missing-property warning for an `id`-only stockroom; an otherwise identical alias control emitted the row. Joomla routing to that legacy view, installed schema and database remain unverified. Added a cautious manual note, updated the existing #158 via dry-run and controlled synchronization, and confirmed a subsequent dry-run unchanged; no duplicate issue was created.
- Progress: 31/161 pages touched (19.3%), all partial; 0 fully approved. Finding records remain 45/199 original CODE IDs (22.6%) plus CODE-201, CODE-202 and M-0122; source rechecks do not imply completed runtime or broad-impact review.
- `node docs-review\issue-sync.test.js` passed. CSV structure, unique page/finding IDs, recorded page paths and links from these five guides passed local checks; `git diff --check` passed with line-ending warnings. No real Joomla, database, inventory reset, export dispatch, provider or mail runtime was used. Core remains at the previously recorded local revision; no commits, pushes or publication.
- Next: start the next group with stockroom image rules and the remaining unreviewed finding records; continue partial-page follow-up and payment drift review. Private security holds remain blocked pending an authorized private channel.

### In-progress next groups
- Partially reviewed `stockroom/stockroom-image-management.md` and `global-configuration/feature-settings.md`; the former now explains the stockroom selector, hidden search and rule precedence. The latter already described the inspected configuration controls. Both remain partial.
- CODE-011: the actual stock-image helper with in-memory SQLite and query stubs returned product 2's stockroom rule for product 1; the disabled-stockroom control returned no result. Updated #75 through the controlled sync and verified a subsequent dry-run unchanged. Storefront output and intended shared-rule semantics remain unverified.
- Individually rechecked CODE-161, 162 and 163. #215 and #216 received source-verified checkout and template caller evidence through controlled sync; follow-up dry-runs were unchanged. The effect on downstream `order_delivery` consumers remains untraced.
- Current progress: 33/161 pages touched (20.5%), all partial; 0 fully approved. Finding records: 49/199 original CODE IDs (24.6%) plus CODE-201, CODE-202 and M-0122. The current five-page and ten-finding groups are not yet finished.
- `issue-sync.test.js` and selected syncs passed; all review CSVs parsed successfully and `git diff --check` passed with line-ending warnings. No real Joomla, supported database, checkout, provider or mail runtime was exercised.
- Next: continue this page group and individually examine CODE-164/165/166 and other remaining findings, recording actual tests and limitations. Revisit payment guidance against the nine newer locally known Core commits and retain private security holds.

## Checkpoint - ten individual findings and next page group (ACTIVE)
- The ten new finding records in this batch are CODE-011, 157-159 and 161-166. Each records actual source checks, proposed test scope and limitations; none is declared fully runtime-verified. Existing #75, #215 and #216 received the previously recorded controlled evidence updates. Rechecked #210-#212 and their comments; for #212 appended site-dispatch and daily-gated cron evidence after a dry-run, then confirmed a subsequent dry-run was unchanged. No issue was closed.
- The in-progress page group now includes `stockroom/stockroom-image-management.md`, `global-configuration/feature-settings.md` and `discounts/order-total-discount.md`. The latter clarifies the row edit button after checking the shared list layout; the previously suspected missing edit link was not a defect. All three are partial and their specific gaps are in the page register; continue with two more pages before the five-page checkpoint.
- Progress: 34/161 pages touched (21.1%), all partial; 0/161 fully approved. Finding records include 55/199 original CODE IDs (27.6%), plus CODE-201, CODE-202 and M-0122. A register entry is not a completed individual review or runtime test.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; the locally known `origin/develop` has advanced independently to `40e6a33ef60999235cc942dc87e3ed1788da34e8`, ten commits ahead. No fetch, pull or Core modification. Changes include Marketplace editor, payment UI, API and integrations; the affected payment and Marketplace guides need comparison against that tracking revision.
- `node docs-review\issue-sync.test.js`, review-register CSV shape/uniqueness and recorded page-path checks, and `git diff --check` passed; the latter reported line-ending warnings. No Joomla, MySQL, browser, checkout, cron, provider or mail runtime was tested. The private handbook was not found and security holds still require an authorized private channel.
- Next: complete two further individually sourced partial pages in the current group, validate and checkpoint; then continue the next batch of findings and compare affected payment documentation with the locally known tracking revision. Revisit all partial entries under the full checklist; do not infer completion from touched counts.

## Checkpoint - five partial pages and mass-discount finding (ACTIVE)
- The five-page batch covers stockroom image rules, feature settings, order-total discounts, mass discounts and product-price discounts. Each remains partial; the page register lists precisely which sources were read and what remains. Clarified discount-list edit buttons and ordering, and warned against mass-discount inputs that calculate a negative price.
- New CODE-203 / #248: the actual mass-discount validation and explicit-product update methods with parent/database stubs accepted 150% and fixed 120 for a synthetic product priced at 100 and produced update values -50 and -20; a 12% control produced 88. This is distinct from #221's deletion reset. GitHub searches, controlled dry-run, creation and follow-up reconciliation passed. Actual Joomla binding, database, storefront and checkout were not tested; one inspected display path requires a positive discount.
- Progress: 36/161 pages touched (22.4%), all partial; 0 fully approved. Finding records include 55/199 original CODE IDs (27.6%), plus CODE-201, CODE-202, CODE-203 and M-0122; none of these counts claims full review or runtime verification.
- `issue-sync.test.js` and the isolated PHP fixture passed. The review CSVs parsed with unique IDs and existing page paths; baseline HTML anchors and manual-root links on all five pages passed; `git diff --check` passed with line-ending warnings. An initial generic relative-link check incorrectly treated manual-root links as page-relative; corrected and reran it. No Joomla, MySQL, checkout or production system was used.
- Local Core HEAD and known tracking revision remain as in the preceding checkpoint. Next: begin another individual finding batch and compare affected payment guidance with the known tracking revision; revisit all partial pages and preserve private security holds.

## Checkpoint - ten additional finding records (ACTIVE)
- Rechecked CODE-169-173 and CODE-175-179 individually against the specific current sources and existing issue bodies/comments recorded in `CODE-INDIVIDUAL-REVIEW.csv`. CODE-175 remains an investigation pending an agreed category-exclusion policy. CODE-168 and CODE-174 remain private security holds and are not represented as reviewed.
- For CODE-177, traced the lookup value into cart accessory reconstruction and accessory tag pricing. Updated #228 through a selected dry-run and controlled evidence comment; follow-up dry-run reported unchanged. The cart, tag rendering and checkout were not executed.
- Progress: 36/161 pages touched (22.4%), all partial; 0 fully approved. Finding records include 65/199 original CODE IDs (32.7%), plus CODE-201, CODE-202, CODE-203 and M-0122. These are source-check records with outstanding tests and broader coverage, not completed individual reviews.
- `issue-sync.test.js`, review CSV shape/uniqueness and page existence checks, and `git diff --check` passed; the latter reported line-ending warnings. No real Joomla, MySQL, browser, checkout or production system was used. Source paths for this batch have no diff against the locally known `origin/develop` tracking ref.
- Next: start the next page or finding batch and compare affected payment guidance with the locally known tracking revision; revisit all partial pages, preserve security holds and continue independently.

## Checkpoint - five discount pages and voucher ordering (ACTIVE)
- The next five partial page records cover promotions, discount overview, gift cards, vouchers and coupons. Each register row identifies the sources actually read and remaining work; none is approved as a complete review. Promotions now warns about description/publication sorting and mentions Copy; voucher guidance warns about Amount sorting. The coupon guide no longer claims the custom user selector supports multiple selections merely because the XML declares it. The overview and gift-card pages needed no change for the specific source comparisons recorded.
- CODE-204 / #249 and CODE-205 / #250 track separate list models whose advertised headings fall back to ID in the inspected source. Both were checked for duplicates, dry-run, synchronized and subsequently reconciled as unchanged. Joomla request, browser and database ordering remain unverified. The coupon security holds remain private and have not received an individual security review.
- Progress: 41/161 pages touched (25.5%), all partial; 0 fully approved. Finding records include 65/199 original CODE IDs (32.7%), plus CODE-201–205 and M-0122. These counts do not represent full reviews or runtime tests.
- `node docs-review\issue-sync.test.js` passed; selected issue reconciliation returned unchanged. All five review CSVs parsed with unique IDs, recorded page paths existed, and the five pages passed duplicate-anchor and manual-root-link checks. `git diff --check` passed with line-ending warnings. Python was unavailable; the equivalent checks used the existing Node CSV parser. No Joomla, MySQL, browser, checkout or production system was tested.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`. The locally known `origin/develop` has independently moved to `9fc0b07a47f0534afd325026f1de484f04e8e6fa`, 12 commits ahead; the two new commits since `40e6a33` affect Flatpay transaction/session retry code and its tests. No fetch, pull or Core changes. Payment documentation requires comparison against the newer revision before treating it as applicable there.
- Next: start the next ten-finding or five-page group; revisit the detailed outstanding work on all partial pages and compare payment guidance with the current local tracking revision. Continue security holds only through an authorized private channel and record runtime blockers without halting independent work.

## Checkpoint - ten additional finding records (ACTIVE)
- Rechecked CODE-180–182, 185–188 and 192–194 against the current source and existing Issue bodies. CODE-180 remains a dispatch investigation, not a confirmed Joomla routing failure. Each individual record specifies evidence, priority, fix direction, test gaps, affected paths and Issue disposition. Security holds in this range were not reviewed.
- Expanded #239 after tracing the shared cart layout into cart refresh, and #241 after inspecting sort handling in JSCook, TransMenu, TigraTree and the link-list fallback. Both controlled dry-runs and evidence updates succeeded; subsequent reconciliation returned unchanged. These added paths were source-inspected, not executed.
- Progress: 41/161 pages touched (25.5%), all partial; 0 fully approved. Finding records now cover 75/199 original CODE IDs (37.7%), plus CODE-201–205 and M-0122. A record is not a completed full review or runtime test.
- `issue-sync.test.js`, selected issue reconciliation and review CSV shape/uniqueness checks passed. `git diff --check` passed with line-ending warnings. No real Joomla, browser, provider, database, upload, checkout or production runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; the locally known `origin/develop` remains `9fc0b07a47f0534afd325026f1de484f04e8e6fa`. ePay's installer and language file differ on that tracking revision; its reviewed manifest and option field do not.
- Next: start another page or finding group and compare payment guidance against the known tracking revision; continue the detailed remaining source work on partial pages and keep security holds on the authorized private-review path.

## Checkpoint - five partial module pages (ACTIVE)
- Individually compared the cart module, category menu, Facebook plugins, price filtering and similar tags pages with the sources and methods listed in SOURCE-REVIEW-REGISTER.csv. These are partial source reviews, not approvals or runtime verification. Added cart multi-instance testing advice and price-filter discount-boundary advice; the other three already covered the specific checked behavior and limitations.
- CODE-206 / #251 is an investigation into shared cart parameters, distinct from #203 after root-cause comparison. The actual database selection, multi-instance effect and intended policy remain unverified. It was dry-run, synchronized and reconciled; other related existing issues are linked in the page records. Security-related work remains on hold pending an authorized private channel.
- Progress: 46/161 pages have individual partial records (28.6%); 0 fully approved. Finding records cover 75/199 original CODE IDs (37.7%), plus CODE-201–206 and M-0122; none of these numbers implies a fully completed review.
- `node docs-review\issue-sync.test.js` passed. Both individual registers parsed with unique populated entries; links in the five module pages and `git diff --check` for the changed batch passed. `node --test` is unsupported by the installed Node, so the existing directly executable test was used instead. No Joomla, MySQL, browser, provider or production runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` independently advanced to `da4077b8d0539696edd5bd4ea5af58918e741c29` without a fetch or checkout. No changes were found in the checked module paths between the two revisions. The new tracking commit also changes payment/order concurrency behavior; payment documentation must be compared before claiming applicability to that revision.
- Next: immediately begin another group of ten original findings or five pages; revisit incomplete page source traces, compare payment guides with the tracking revision, and continue unaffected work while runtime and private-channel blockers remain.

## Checkpoint - ten further individual finding records (ACTIVE)
- Rechecked CODE-198, 197, 195, 160, 156, 155, 154, 153, 152 and 151 against their current source and existing Issue reports; the individual register records priority/fix/test assessments and limits. CODE-160 remains an investigation. CODE-153's P1 is retained provisionally pending actual optional-extension impact. None is a completed runtime review; private security holds were not reviewed.
- Expanded #205 with two further source-only areas: failed reorder and product/manufacturer breadcrumb menu-result counting. Their actual Joomla behavior was not executed. The existing Issue and earlier comments were checked; the update was dry-run, synchronized and subsequently reconciled as unchanged.
- Progress: 46/161 pages have partial individual records (28.6%); 0 fully approved. Finding records cover 85/199 original CODE IDs (42.7%), plus CODE-201–206 and M-0122. Individual records do not represent fully completed reviews or Joomla tests.
- Issue synchronization tests passed. Individual finding, finding, triage and sync CSVs parsed with unique IDs; individual rows have all required fields. `git diff --check` passed for this batch. No Joomla, MySQL, browser, provider or production runtime was executed in this batch.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; inspected finding paths were unchanged relative to the then-known `origin/develop` `da4077b8d0539696edd5bd4ea5af58918e741c29`. This comparison is source-only and does not establish runtime compatibility.
- Next: start another page or finding group, continue incomplete source traces and tracking-revision payment comparison, and maintain the private-channel and runtime blockers without halting independent work.

## Checkpoint - five more partial module pages (ACTIVE)
- Individually compared Product Compare, Mega Menu, redMASSCART, Products and Product Tab with the sources recorded in SOURCE-REVIEW-REGISTER.csv. Improved four guides with qualified request, styling, exclusion, image and row-count cautions. redMASSCART already covered the specific checked behavior. All five remain partial; none is approved as a complete review.
- Created CODE-207 / #252 (comparison request names), CODE-208 / #253 (Mega Menu inner-list suffix), CODE-209 / #254 (four image-helper call signatures) and CODE-210 / #255 (Products module current-product exclusion). These are source-based findings or investigations; Joomla, browser, media and database effects are not established. Duplicates were compared, and each controlled dry-run, creation and reconciliation succeeded.
- Extended CODE-146 / #199: actual Product Tab layout raised `DivisionByZeroError` for synthetic zero with one row on PHP 8.4; its manifest declares zero outside the listed choices. Joomla form binding and saved values remain unverified. Issue evidence was dry-run, synchronized and reconciled; the existing manufacturer and Who Bought fixture evidence was not rerun.
- Progress: 51/161 pages have individual partial records (31.7%); 0 fully approved. Finding records cover 86/199 original CODE IDs (43.2%), plus CODE-201–210 and M-0122. These counts do not constitute full reviews or actual Joomla runtime verification.
- Issue sync tests, CSV shape/uniqueness checks, five page-link checks and batch `git diff --check` passed. The isolated Product Tab zero-divisor probe ran; no Joomla, MySQL, browser, provider, media or production runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`. The shared local `origin/develop` independently advanced to `6469127f447b95c538a30b621fd404959132abbf`; the three new commits concern payment architecture. No differences were found in the reviewed module, image, comparison, cart and related paths checked for this batch. Payment documentation still requires a comparison against the latest tracking revision. No fetch, pull or Core changes.
- Next: immediately begin the next finding or page group, finish incomplete reviews and compare payment guidance with the tracking revision; do not treat private security holds or runtime blockers as completed.

## Checkpoint - ten additional finding records (ACTIVE)
- Rechecked CODE-150, 149, 148, 147, 145, 144, 143, 142, 141 and 140 against source and their existing Issues; recorded individual assessments and remaining test gaps in CODE-INDIVIDUAL-REVIEW.csv. The reviews remain partial; earlier isolated probes were not rerun and do not establish Joomla runtime behavior.
- Updated #196 with source-only evidence that shipment creation also adds product weight once per order-item row without using its quantity. The previous synthetic fee-handler result remains distinct from this unexecuted shipment path. Dry-run, controlled synchronization and subsequent unchanged reconciliation succeeded.
- Progress: 51/161 pages have partial individual records (31.7%); none fully approved. Finding records cover 96/199 original CODE IDs (48.2%), plus CODE-201–210 and M-0122. No security hold was individually reviewed.
- Issue synchronization tests, CSV parsing and unique IDs passed; all ten new records have full revision IDs and nonempty fields. `git diff --check` passed. No Joomla, MySQL, provider, browser or production runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; known tracking revision remains `6469127f447b95c538a30b621fd404959132abbf`. `Order.php` differs on tracking, including status-update logic, so dispatcher behavior needs revalidation after a Core revision change. Private handbook remains absent. No fetch, pull or Core changes.
- Next: start another group, continue incomplete page traces and compare payment guidance with the tracking revision; runtime and authorized private-channel blockers do not close independent work.

## Checkpoint - shipping, calculator and administration findings (ACTIVE)
- Rechecked CODE-135, 134, 097, 096, 095, 094, 092, 091, 090 and 089 against the source and open Issue bodies and comments. The individual records distinguish source inspection from prior isolated probes; Joomla, provider, filesystem and database outcomes remain unverified.
- Updated #152 with a source-only category accessory-editor caller of the already reported deletion function. Product and category editor outcomes were not exercised in Joomla. Dry-run, controlled synchronization and unchanged reconciliation succeeded.
- Progress: 51/161 pages have partial individual records (31.7%); none fully approved. Finding records cover 106/199 original CODE IDs (53.3%), plus CODE-201–210 and M-0122. No security hold was individually reviewed.
- Issue synchronization tests, register parsing and unique IDs passed; all ten new entries contain full revision IDs and nonempty fields. `git diff --check` passed. No prior fixture was rerun and no Joomla, database, provider, browser or production runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; reviewed principal paths and checkout/rate files showed no differences against locally known `origin/develop` `6469127f447b95c538a30b621fd404959132abbf`. No fetch, pull or Core changes.
- Next: start another group, continue incomplete page source traces and compare payment guidance against the tracking revision. Keep private security holds and runtime blockers open.

## Checkpoint - five additional partial module reviews (ACTIVE)
- Read Discount, Multi Currencies, Manufacturer Scroller, Who Bought and Search guides and recorded the inspected manifests, entry points, helpers, layouts, English strings and selected shared paths. Clarified discount no-result and legacy date behavior, currency list ordering, Who Bought price gates and the Search manufacturer-only limitation. Manufacturer Scroller's checked claims already matched source. All five remain partial and none is approved as a complete review.
- Created CODE-211 / #256 for the standalone manufacturer selector: the actual Twig layout omitted a synthetic select when categories were hidden; with categories enabled it rendered the dynamic placeholder. The independent request-name mismatch is source-only. The dry-run and manual duplicate comparison against #226, #227 and #229 preceded creation; reconciliation reported unchanged.
- Progress: 56/161 pages have partial individual records (34.8%); none fully approved. Finding records cover 106/199 original CODE IDs (53.3%), plus CODE-201–211 and M-0122. No security hold was individually reviewed.
- The isolated Twig fixture, issue synchronization tests, CSV parsing/unique-ID checks, six chapter-link checks and `git diff --check` passed. No Joomla, browser, MySQL, provider or production runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; shared `origin/develop` advanced independently to `f3bdb3c96a282c9dd1baad7a5a6c5c08aed04f5c`. Inspected module paths and checked shared helpers were unchanged against that ref; latest tracking commit changes Flatpay payment architecture. Graphify is stale at `647c0dc795265544ea000acb0c9217da609db544` and did not identify these module traces, so current source was searched directly. No fetch, pull or Core changes.
- Next: investigate SearchModel's category-dependent manufacturer lookup, which joins multiple manufacturer IDs inside one quoted SQL value; compare #138 and other Issues before any write. Then continue the next batch and payment tracking comparison. Preserve runtime and private-channel blockers.

## Checkpoint - search follow-up and ten finding records (ACTIVE)
- CODE-212 / #257 was created and reconciled as recorded in CODE-INDIVIDUAL-REVIEW.csv. The search-model method was exercised with synthetic database stubs; SQL execution and Joomla/browser behavior remain unverified.
- Source-checked CODE-088, 087, 086, 085, 001, 002, 004, 005, 006 and 007 against current Core and read their existing Issues and comments. The individual records explicitly retain prior mock results as historical and identify remaining tests; none is a complete runtime review. CODE-004 remains an investigation and CODE-006's P0 remains provisional pending runtime scope assessment.
- Updated #72 with the source-only Flatpay ledger caller of the explicit currency conversion path. The effect requires CurrencyLayer selection and no conversion-event override; the caller and provider were not executed. The changed evidence was dry-run, synchronized and reconciled as unchanged; the comment was read back.
- Progress: 56/161 pages have partial individual records (34.8%); none is fully approved. Finding records cover 116/199 original CODE IDs (58.3%), plus CODE-201–212 and M-0122. These are partial records, not 116 completed reviews. No security hold was individually reviewed.
- Issue synchronization tests passed. Individual finding, Core handoff, triage, issue ledger and page CSVs parsed and had unique IDs; individual rows had nonempty fields. `git diff --check` passed with line-ending warnings. No previous fixture was rerun and no Joomla, database, browser, provider or production runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `f3bdb3c96a282c9dd1baad7a5a6c5c08aed04f5c`. The checked CODE-007 converter path is unchanged there; the Flatpay ledger file differs elsewhere but retains the explicit conversion call. No fetch, pull or Core changes.
- Next: start the next unrecorded finding group or five-page group; continue the payment tracking comparison and revisit partial reviews. Runtime and authorized private-channel blockers remain open.

## Checkpoint - ten further individual finding records (ACTIVE)
- Source-checked CODE-008, 009, 010, 012, 013, 014, 017, 019, 021 and 022 and read their existing Issues and comments. The individual records distinguish historical isolated tests from current source inspection and list unverified runtime and regression cases.
- Expanded #93 with the source-only comparison that quotation-to-order conversion assigns the product supplier to the same order-item field. The two administrator paths and their persistence were not executed. The update was dry-run, synchronized, reconciled as unchanged and read back.
- Progress: 56/161 pages have partial individual records (34.8%); none is fully approved. Finding records cover 126/199 original CODE IDs (63.3%), plus CODE-201–212 and M-0122. These are partial records and do not claim completed runtime reviews. No security hold was individually reviewed.
- Issue synchronization tests passed. Individual finding, Core handoff, triage, issue ledger and page CSVs parsed and had unique IDs; individual rows had nonempty fields. `git diff --check` passed with line-ending warnings. No previous fixture was rerun and no Joomla, database, mail, browser, provider or production runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; checked source paths including quotation conversion were unchanged relative to locally known `origin/develop` `f3bdb3c96a282c9dd1baad7a5a6c5c08aed04f5c`. No fetch, pull or Core changes.
- Next: start another unrecorded finding or five-page group. Continue payment tracking comparison and incomplete page traces; runtime and authorized private-channel blockers remain open.

## Checkpoint - SEO, payment and scheduled-mail findings (ACTIVE)
- Source-checked CODE-023, 024, 028, 029, 030, 031, 032, 033, 035 and 038 and read their existing Issues and comments. The records remain partial; CODE-035 is an investigation and the severity of potential configuration loss in CODE-032 remains provisional without destructive runtime testing.
- Extended #85 with the source-only observation that the second purchase-mail date uses the same shortened day multiplier as the coupon expiry calculation, although its administrator label specifies days after purchase. First and third mail calculations use 24 hours. Actual date boundaries, cron and mail delivery remain untested. The update was dry-run, synchronized, reconciled as unchanged and read back.
- Progress: 56/161 pages have partial individual records (34.8%); none is fully approved. Finding records cover 136/199 original CODE IDs (68.3%), plus CODE-201–212 and M-0122. These are partial records and do not claim completed runtime reviews. No security hold was individually reviewed.
- Issue synchronization tests passed. Individual finding, Core handoff, triage, issue ledger and page CSVs parsed and had unique IDs; individual rows had nonempty fields. `git diff --check` passed with line-ending warnings. No Joomla, database, mail, filesystem, browser, provider or production runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `f3bdb3c96a282c9dd1baad7a5a6c5c08aed04f5c`. The tracked Flatpay manifest differs elsewhere but retains the `test_mod` and `GPB` values; the other checked batch paths were unchanged. No fetch, pull or Core changes.
- Next: start another unrecorded finding or five-page group; revisit partial reviews and complete payment tracking comparison. Runtime and authorized private-channel blockers remain open.

## Checkpoint - product, payment, import and gift-card findings (ACTIVE)
- Source-checked CODE-039, 040, 041, 045, 047, 049, 050, 051, 052 and 053 and read their existing Issues and comments. The records remain partial; CODE-040 remains an investigation and prior isolated fixtures were not rerun except as explicitly stated below.
- Corrected #100: the current legacy callback preserves pending and generic lookup failures, demonstrated by the passing offline `php tests\unit\flatpay-payment-replay.php` fixture. A direct synthetic classifier probe returned `no_payment` for unrecognized states; source inspection indicates the legacy path can then apply the configured failure branch. The unknown-state full callback and provider semantics remain untested. The issue update was dry-run, synchronized, reconciled unchanged and read back.
- Progress: 56/161 pages have partial individual records (34.8%); none is fully approved. Finding records cover 146/199 original CODE IDs (73.4%), plus CODE-201–212 and M-0122. These are partial records and do not claim completed runtime reviews. No security hold was individually reviewed.
- Flatpay offline replay, synthetic classifier probe and issue synchronization tests passed. Individual finding, Core handoff, triage, issue ledger and page CSVs parsed and had unique IDs; individual rows had nonempty fields. `git diff --check` passed with line-ending warnings. No real Joomla, MySQL, browser, provider, accounting service or production runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `f3bdb3c96a282c9dd1baad7a5a6c5c08aed04f5c`. The tracked Flatpay source has unrelated status/capture changes; the inspected legacy callback branch was unchanged in the comparison. No fetch, pull or Core changes.
- Next: start another unrecorded finding or five-page group; complete the unknown-state callback investigation and broader payment tracking comparison, and revisit partial reviews. Runtime and authorized private-channel blockers remain open.

## Checkpoint - discount, media and attribute-set findings (ACTIVE)
- Individually inspected CODE-054, 055, 056, 059, 060, 061, 063, 064, 065 and 066 against source. Read the nine linked open Issues and the two relevant #124 comments. CODE-060 remains an acceptance investigation, not a confirmed defect; no Issue was created for it. Earlier isolated fixtures were not rerun and their evidence remains historical.
- The set-save source omits the property messages and reads a different existing-image input than the shared layout supplies; the product controller explicitly handles these inputs. The set-copy source also omits settings at attribute, property and subproperty levels. These observations agree with existing #124–#126 evidence; database, file and Joomla behavior remain unverified. No Issue update was needed.
- Progress: 56/161 pages have partial individual records (34.8%); none is fully approved. Finding records cover 156/199 original CODE IDs (78.4%), plus CODE-201–212 and M-0122. These are partial records, not completed runtime reviews. No security hold was individually reviewed. CODE-062 is a security hold and was deliberately excluded from this ordinary batch.
- `issue-sync.test.js` passed. Individual finding, Core handoff, triage, issue ledger and page CSVs parsed and had unique IDs; individual rows had nonempty fields. `git diff --check` passed with line-ending warnings. No Joomla, database, browser, filesystem or provider runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; the locally known `origin/develop` has advanced to `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. The inspected files in this group are unchanged against that tracking ref. Payment, marketplace and other paths differ and need separate comparison. No fetch, pull or Core changes.
- Next: review the next ten ordinary unrecorded findings starting at CODE-067, excluding security holds; continue payment tracking comparison and incomplete page traces. Runtime and authorized private-channel blockers remain open.

## Checkpoint - location, tax, shipping and module findings (ACTIVE)
- Individually source-checked CODE-067, 068, 069, 070, 071, 073, 074, 075, 077 and 078 and read their ten existing open Issues. The records remain partial; historical isolated tests and fixtures were not rerun. Actual Joomla routing, database behavior, checkout, browser and storefront remain unverified.
- Confirmed the source-level optional-state and country-filter mismatch, tax-list identifier and state-join issues, date-boundary arithmetic, shipping capability fallthrough and incomplete rate-copy bind. The shipping-address link and controller selection names differ. Product Tab's textual switches and Who Bought's multi-category SQL remain covered by their existing Issues; no Issue updates were needed.
- Progress: 56/161 pages have partial individual records (34.8%); none is fully approved. Finding records cover 166/199 original CODE IDs (83.4%), plus CODE-201–212 and M-0122. These counts do not represent fully completed reviews. No security hold was individually reviewed.
- `issue-sync.test.js` passed. Individual finding, Core handoff, triage, issue ledger and page CSVs parsed and had unique IDs; individual rows had nonempty fields. `git diff --check` passed with line-ending warnings.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. The inspected files and related forms/layouts in this batch are unchanged against that ref. No fetch, pull or Core changes.
- Next: review the remaining ordinary unrecorded findings beginning with CODE-079 through CODE-084, then resume five-page source reviews. Continue payment tracking comparison; runtime and authorized private-channel blockers remain open.

## Checkpoint - remaining ordinary CODE handoff findings (ACTIVE)
- Individually source-checked the six remaining ordinary handoff findings CODE-079 through CODE-084, reviewed their existing open Issues and read the comments on #143 and #144. A six-item final group was used because the other unrecorded handoff findings are security holds. No Issue update was needed; CODE-082 remains an investigation. Historical isolated fixtures were not rerun.
- Confirmed that synchronization counts selected users rather than successful saves; mail search lacks explicit grouping; a single cached AJAX detail selection is shared across products; multiple module layouts count a nullable object; and two discount tables require shopper-group options before inline mode is set. Exact-key source search found configuration storage/display references for the tax-exemption VAT option, but does not rule out dynamic consumers or establish final financial behavior.
- Progress: 56/161 pages have partial individual records (34.8%); none is fully approved. Finding records cover 172/199 original CODE IDs (86.4%), plus CODE-201–212 and M-0122. These are partial source records, not completed runtime reviews. Of the 27 original IDs without records, 26 are security holds in the Core handoff; CODE-003 is triage-only and requires separate assessment. No security hold was individually reviewed.
- `issue-sync.test.js` passed. Individual finding, Core handoff, triage, issue ledger and page CSVs parsed and had unique IDs; individual rows had nonempty fields. `git diff --check` passed with line-ending warnings. No Joomla, MySQL, browser, checkout or production runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. Primary and checked related files are unchanged against that ref. No fetch, pull or Core changes.
- Next: assess triage-only CODE-003 under the privacy procedure and begin a five-page source-review group. Continue payment tracking comparison; runtime and authorized private-channel blockers remain open.

## Checkpoint - five getting-started pages and CODE-003 (ACTIVE)
- Read all five articles individually: getting-started overview, introduction, minimum requirements, navigation panel and dashboard. Compared relevant Core Composer and release configuration, sidebar builders, dashboard view/model/templates, statistics helper and English labels. Each page has a partial individual record; linked workflows and runtime behavior are not fully verified.
- Corrected the navigation guide: variant and quotation statistic menu entries are commented out; VirtueMart import depends on the component being installed and enabled; accounting and tool entries have specific conditions. Added dashboard chart controls, Google Charts dependency, detail links and PDF-plugin warning. Clarified that the Core release configuration is repository configuration rather than describing it as merely an example.
- CODE-003 is a documentation-renderer finding, not a Core security hold. Its current renderer source still lacks explicit history and post-render fragment handling; historical browser results were not rerun. Added a partial finding record, preserved the existing documentation triage and made no renderer change or Core Issue.
- Progress: 61/161 pages have partial individual records (37.9%); none is fully approved. Finding records cover 173/199 original CODE IDs (86.9%), including documentation-only CODE-003, plus CODE-201–212 and M-0122. The remaining 26 original unrecorded IDs are security holds; no security hold was individually reviewed. Counts do not indicate full reviews.
- Rendered all five pages with the bundled Markdown parser and checked all 38 chapter-link targets; issue-sync tests and review CSV uniqueness/nonempty checks passed. `git diff --check` passed with line-ending warnings. Joomla, browser navigation, database, provider and accounting runtime remain untested. The historical page-inventory CSV could not be read by the issue-sync parser because of its CSV format; PowerShell Import-Csv successfully read it for selection.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. The tracking Composer file differs, while checked sidebar and dashboard files do not. No fetch, pull or Core changes.
- Next: begin another five-page individual source-review group; recheck the payment documentation against the changed tracking ref and revisit partial reviews. Runtime and authorized private-channel blockers remain open.

## Checkpoint - synchronization, editors, media, licensing and wizard (ACTIVE)
- Read the five getting-started articles on synchronization, third-party media, editors, subscription policies and the configuration wizard, and compared the source paths recorded individually in SOURCE-REVIEW-REGISTER.csv. Added specific synchronization navigation and selection scope, editor filter examples, a qualified license-status description and a wizard model warning. The media article needed no change for the limited source paths inspected. Each page remains partial; complete runtime and dependent-flow reviews are outstanding.
- Found CODE-213: the wizard view requests a model whose source requires a legacy configuration-model path not declared by the current Core manifest. Loading the actual model from the administrator source directory failed at that require in isolated PHP 8.4. This does not test Joomla autoloading, packaged ZIPs or upgraded installations with possible legacy files. Created #258 after the privacy, duplicate and dry-run checks; the follow-up synchronization reported unchanged and the Issue was read back.
- CODE-032 / #110 is distinct: the welcome helper attempts an unchecked configuration copy only if execution reaches that point. The model failure may occur earlier; no configuration copy or destructive filesystem test was performed.
- Progress: 66/161 pages have partial individual records (41.0%); none is fully approved. Finding records cover 173/199 original CODE IDs (86.9%), including documentation-only CODE-003, plus CODE-201–213 and M-0122. The remaining 26 original unrecorded IDs are security holds; no security hold was individually reviewed. Counts do not indicate full reviews.
- Rendered the five pages using the bundled Markdown parser and verified all 11 chapter-link targets; issue-sync tests and review-register duplicate checks passed. Review rows have no empty fields. Some older handoff and ledger rows have intentionally blank fields. `git diff --check` passed with line-ending warnings. No Joomla, MySQL, browser, provider, upload or production runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. The checked synchronization, editor and wizard sources and manifest are unchanged against that ref. No fetch, pull or Core changes.
- Next: start the next five unrecorded individual pages and revisit partial traces; continue the payment tracking comparison. Runtime and authorized private-channel blockers remain open.

## Checkpoint - category, communication and customer-input pages (ACTIVE)
- Read five complete articles individually: category overview and category management, mail templates and communication overview, and customer-input overview. Compared the forms, models, controllers, views, tables, templates, helpers and English labels identified in the corresponding SOURCE-REVIEW-REGISTER.csv rows. Corrected the category SEO tab label, added order-confirmation mail prerequisites, described the newsletter statistics chart and added customer-input navigation. The category overview needed no change for the paths inspected.
- These are partial source reviews: category access, storefront, media, accessory precedence and data flows; section-specific mail rendering and delivery; tracker creation; and customer-input frontend/privacy flows remain unverified. Existing #118, #140, #146, #147, #152 and #211 remain open where relevant; no Issue was changed in this group.
- Progress: 71/161 pages have partial individual records (44.1%); none is fully approved. Finding records cover 173/199 original CODE IDs (86.9%), including documentation-only CODE-003, plus CODE-201–213 and M-0122. The remaining 26 original unrecorded IDs are security holds; no security hold was individually reviewed. Counts do not indicate full reviews.
- Rendered all five pages using the bundled Markdown parser and verified 13 chapter-link targets; issue-sync tests and review-register duplicate/nonempty checks passed. `git diff --check` passed with line-ending warnings. No Joomla, database, mail, Google Charts, browser or storefront runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. Checked category and mail source files were unchanged against that ref. No fetch, pull or Core changes.
- Next: start the next five unrecorded individual pages, continuing customization and integration guides; revisit partial reviews and payment tracking comparison. Runtime and authorized private-channel blockers remain open.

## Checkpoint - customization and e-conomic overview (ACTIVE)
- Read five complete articles individually: customization overview, attribute sets, currency, templates and e-conomic overview. Compared the forms, views, models, controllers, tables, layouts, plugin manifest and classification named in SOURCE-REVIEW-REGISTER.csv. Added missing customization menu entries, attribute-set name length and task warning, template default ordering, and optional integration/account-mode guidance. The currency redirect needed no change for the paths inspected.
- Found CODE-214 / #259: the attribute-set toolbar uses delete and publication tasks absent from the singular controller, while the plural controller file declares a singular class. Actual source declarations were checked by PHP 8.4 reflection with parent stubs and the Joomla 5.4.6 controller ancestry was inspected. Created the Issue after duplicate/privacy checks and a dry-run, then reconciled and read it back. Real Joomla dispatch, stored states and Joomla 6 remain untested; underlying deletion cleanup #151 and copy #124 are distinct.
- Progress: 76/161 pages have partial individual records (47.2%); none is fully approved. Finding records cover 173/199 original CODE IDs (86.9%), including documentation-only CODE-003, plus CODE-201–214 and M-0122. The remaining 26 original unrecorded IDs are security holds; no security hold was individually reviewed. Counts do not indicate full reviews.
- Rendered five pages with the bundled Markdown parser and verified 16 chapter-link targets; issue-sync tests and review-register duplicate/nonempty checks passed. `git diff --check` passed with line-ending warnings. No Joomla, database, browser, checkout, filesystem or provider runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. Checked customization, plugin and classification paths are unchanged against that ref. No fetch, pull or Core changes.
- Next: start the next five unrecorded individual pages, including e-conomic setup, account groups and synchronization; revisit partial reviews and payment tracking comparison. Runtime and authorized private-channel blockers remain open.

## Checkpoint - e-conomic and cart/tax FAQs (ACTIVE)
- Read five articles and compared the source paths and methods recorded in SOURCE-REVIEW-REGISTER.csv. Corrected e-conomic payment-terms and invoice-layout manifest defaults, described per-payment-method override precedence, product-save synchronization and batch size, continue-shopping routing, and the company billing exemption control. All five reviews are partial; no page is approved as complete.
- Candidate account-group bulk-action defects need individual reproduction, duplicate assessment and issue registration: list checkboxes submit `cid[]` whereas delete reads `id`; the group helper quotes a comma-joined list as one SQL value; publish success/failure messages appear inverted. These are source observations only; no database or Joomla task dispatch was performed. A targeted GitHub search returned no matches, which is not an exhaustive duplicate check. Do not assign an issue number until the authorized workflow is complete.
- Progress: 81/161 pages have partial individual records (50.3%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), including documentation-only CODE-003, plus CODE-201–214 and M-0122. The remaining 26 original IDs are security holds; no security hold was individually reviewed in this group.
- The e-conomic payment-settings unit test passed with stubs. Five pages rendered with the bundled Markdown parser and eight chapter links resolved. Issue-sync tests, CSV uniqueness/nonempty checks and `git diff --check` passed; Git reported line-ending warnings. Joomla, database, browser, checkout and provider runtime were not tested.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; locally known `origin/develop` remains `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. The inspected e-conomic plugin, payment helper, account-group controller and list template show no diff against that local tracking ref. No fetch, pull or Core changes.
- Next: investigate and register the account-group bulk-action candidates through the authorized workflow; continue the next five individual pages and revisit partial reviews and payment tracking drift. The private handbook and an authorized private security channel remain unavailable.

## Follow-up - account-group bulk findings (ACTIVE)
- Reproduced the three candidates using the actual controller and helper with synthetic input, model and database stubs; fixture is `accountgroup-bulk-probe.php` in the session files. Registered distinct CODE-215–217 and synchronized #260–#262 after duplicate/privacy checks and dry-run. A follow-up dry-run reported all three unchanged. No SQL, Joomla dispatch, provider or accounting runtime was exercised.
- Progress remains 81/161 pages with partial records (50.3%), 0/161 fully approved; 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed. Continue the next five pages and pending security/private-channel work.

## Checkpoint - payment FAQs and installation/update (ACTIVE)
- Read five articles individually and inspected the manifest, plugin handlers, translation strings, installer and setup paths recorded in SOURCE-REVIEW-REGISTER.csv. Corrected the COD FAQ's obsolete e-conomic fields and labels; added an update warning about required-plugin enablement and postflight work. The FAQ overview, PayPal FAQ and installation guide needed no change for the inspected claims. All remain partial.
- Progress: 86/161 pages have partial individual records (53.4%); 0/161 fully approved. Finding records cover 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed.
- Five pages rendered with the bundled Markdown parser and nine chapter links resolved. Page-register uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. No Joomla installer, database, browser, payment or provider runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; the inspected COD, PayPal, installer and manifest paths have no diff against locally known `origin/develop` `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. No fetch, pull or Core changes.
- Next: start the next five unrecorded pages in global configuration, return to partial reviews, and address payment-guide tracking drift. Continue to record actual blockers and do not mark source-only reviews complete.

## Checkpoint - global configuration group (ACTIVE)
- Read About, Cart, Categories, Dashboard and e-conomic Integration individually and inspected the form layouts, selected configuration defaults and helper methods listed in SOURCE-REVIEW-REGISTER.csv. Added e-conomic payment-method override precedence. The other four articles needed no change for the limited claims inspected; each remains partial.
- Progress: 91/161 pages have partial individual records (56.5%); 0/161 fully approved. Finding records cover 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed.
- Five pages rendered with the bundled Markdown parser and 11 chapter links resolved. Page-register uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. No Joomla UI, browser, checkout, database or provider runtime was exercised.
- Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; the selected configuration layouts and payment-settings helper have no diff against local tracking `a5e6d71f85045160861fd9737f40b4f8b9b21be8`. No fetch, pull or Core changes.
- Next: proceed with five further unrecorded global-configuration pages and continue the unresolved deeper reviews and payment tracking comparison.

## Checkpoint - general, integration, manufacturer and order settings (ACTIVE)
- Read five articles individually and inspected the configuration layouts, relevant labels and sources listed in SOURCE-REVIEW-REGISTER.csv. Clarified the two distinct internal form names for order and invoice number templates. The other four articles needed no change for the limited form claims inspected; all five remain partial.
- Progress: 96/161 pages have partial individual records (59.6%); 0/161 fully approved. Finding records cover 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed.
- Five pages rendered with the bundled Markdown parser and 22 chapter links resolved. Page-register uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. No Joomla UI, browser, checkout, database, mail or provider runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; no Core changes, fetch or pull. Next: review the next five unrecorded pages and return to incomplete source and security investigations.

## Checkpoint - price, products, SEO and user configuration (ACTIVE)
- Read five articles individually and inspected the form layouts and relevant methods listed in SOURCE-REVIEW-REGISTER.csv. Clarified product-download directory statistics and unreadable/incomplete scans. The other four articles needed no change for the limited form claims inspected; all five remain partial.
- Progress: 101/161 pages have partial individual records (62.7%); 0/161 fully approved. Finding records cover 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed.
- Five pages rendered with the bundled Markdown parser and 23 chapter links resolved. Page-register uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. No Joomla UI, browser, checkout, filesystem, database or provider runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; no Core changes, fetch or pull. Next: select five further unrecorded pages and continue the unresolved deeper reviews.

## Checkpoint - import/export, introduction and media overviews (ACTIVE)
- Read five articles individually and inspected the plugin, controller, model, template, renderer and media paths listed in SOURCE-REVIEW-REGISTER.csv. Added export batch-size and temporary-file lifecycle guidance. The other four articles needed no change for the limited claims inspected; all remain partial.
- Progress: 106/161 pages have partial individual records (65.8%); 0/161 fully approved. Finding records cover 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed.
- Five pages rendered with the bundled Markdown parser and 14 chapter links resolved. Page-register uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. No Joomla UI, browser, filesystem, database or import/export runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`; no Core changes, fetch or pull. Next: proceed with five further unrecorded pages and continue deeper reviews, payment drift and private security-channel follow-up.

## Checkpoint - media and module pages (ACTIVE)
- Read five articles and inspected the specific source excerpts, manifests, layouts and language files recorded in SOURCE-REVIEW-REGISTER.csv. Clarified that Default Media accepts images only and that missing login-greeting parameters have runtime fallbacks distinct from manifest defaults. The other three pages needed no change for the limited claims inspected; all five remain partial.
- Progress: 111/161 pages have partial individual records (68.9%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. CODE-036 and CODE-037 are existing private security holds; no security hold was individually reviewed.
- The five pages rendered with the bundled Markdown parser and 25 chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported a line-ending warning. Joomla, database, filesystem, cache and browser runtime were not exercised.
- Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`, documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. No Core changes, fetch or pull. Next: inspect the next five unrecorded pages; revisit partial reviews, payment tracking drift and private security-channel follow-up.

## Checkpoint - shopper-group modules and payment plugins (ACTIVE)
- Read five articles and inspected the specific manifests, language strings, module layouts and payment methods recorded in SOURCE-REVIEW-REGISTER.csv. Corrected obsolete local e-conomic-field descriptions for 2Checkout and Bank Transfer, updated Bank Transfer labels, added a Bambora text-credential warning and documented the existing shopper-group product image argument mismatch. The logo article needed no change for the limited claims inspected. All five remain partial.
- Progress: 116/161 pages have partial individual records (72.0%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed. Existing related Issues and holds are recorded in the page register; no new Issue was created.
- Five pages rendered with the bundled Markdown parser and six chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed. No Joomla, browser, checkout, bank, accounting or provider runtime was exercised.
- Local tracking comparison showed no diff for the three reviewed payment plugin directories and the e-conomic settings helper against the locally known `origin/develop`; no fetch was performed. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Next: continue five unrecorded pages, review other payment guides for the same drift, and revisit all partial reviews and security blockers.

## Checkpoint - Billy and four payment plugins (ACTIVE)
- Read five articles and inspected the specific manifests, source excerpts, selectors and language strings listed in SOURCE-REVIEW-REGISTER.csv. Corrected obsolete local e-conomic fields in EAN Transfer, ePay and GiroPay, updated EAN labels and documented Bao Kim's source-level VND/minimum condition. Billy needed no change for the limited claims inspected. All five remain partial.
- Progress: 121/161 pages have partial individual records (75.2%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed and no new Issue was created.
- Five pages rendered with the bundled Markdown parser and seven chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported a line-ending warning. Joomla, checkout, accounting, provider and database runtime were not exercised.
- Comparing these five plugin directories to locally known `origin/develop` showed differences in ePay's installer and language file; their impact is not yet reviewed. No fetch was performed. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Next: inspect the next five unrecorded pages, review remaining payment-guide drift and revisit partial reviews and security blockers.

## Checkpoint - GLS and payment-plugin overview (ACTIVE)
- Read five articles and inspected the manifests, layouts, language strings and source methods listed in SOURCE-REVIEW-REGISTER.csv. Corrected obsolete local e-conomic-field descriptions for Money Booker and PayGate, updated Money Booker account labels and documented PayGate's source-level ZAR conversion. The GLS and overview pages needed no change for the limited claims inspected. All five remain partial.
- Progress: 126/161 pages have partial individual records (78.3%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed and no new Issue was created.
- Five pages rendered with the bundled Markdown parser and 28 chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported a line-ending warning. No Joomla, shipping, provider, accounting or browser runtime was exercised.
- No local tracking-ref differences were found in the three inspected plugin directories; no fetch was performed. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Next: inspect the next five unrecorded pages and revisit partial reviews, remaining payment drift and private security-channel blockers.

## Checkpoint - payment, shipping and Relatel pages (ACTIVE)
- Read five articles and inspected the manifests and source excerpts listed in SOURCE-REVIEW-REGISTER.csv. Corrected Paymill's obsolete local e-conomic-field description and added the source-observed Giao Hang Nhanh shipment-weight limitation; the remaining three pages needed no change for the limited claims inspected. All five remain partial.
- Progress: 131/161 pages have partial individual records (81.4%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed and no new Issue was created.
- Five pages rendered with the bundled Markdown parser and eight chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported a line-ending warning. Joomla, shipping, provider, accounting, caller API and browser runtime were not exercised.
- No local tracking-ref differences were found in the inspected plugin directories; no fetch was performed. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Next: inspect five unrecorded pages; revisit partial reviews, remaining payment drift and private security-channel blockers.

## Checkpoint - product and plugin pages (ACTIVE)
- Read five articles, including the complete product guide, and inspected the specific source excerpts recorded in SOURCE-REVIEW-REGISTER.csv. Added current English product identity and layout labels. The other four pages needed no change for the limited claims inspected. All five remain partial; the long product article especially requires deeper tracing of its remaining workflows.
- Progress: 136/161 pages have partial individual records (84.5%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed and no new Issue was created.
- Five pages rendered with the bundled Markdown parser and 18 chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported a line-ending warning. Joomla, product storefront, shipping, browser and provider runtime were not exercised.
- No local tracking-ref differences were found in the selected product and plugin paths; no fetch was performed. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Next: inspect five unrecorded pages and revisit partial reviews and private security-channel blockers.

## Checkpoint - suppliers, users and currency (ACTIVE)
- Read five articles and inspected the forms and source excerpts listed in SOURCE-REVIEW-REGISTER.csv. Added current English currency-field labels; the other pages needed no change for the limited claims inspected. All five remain partial and do not substitute for full user, deletion, payment or provider tracing.
- Progress: 141/161 pages have partial individual records (87.6%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed and no new Issue was created.
- Five pages rendered with the bundled Markdown parser and four chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported a line-ending warning. Joomla, database, browser, mail and provider runtime were not exercised.
- No local tracking-ref differences were found in the selected forms and models; no fetch was performed. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Next: inspect unrecorded pages and return to detailed partial reviews and private security-channel blockers.

## Checkpoint - VAT and historical changelog (ACTIVE)
- Read three VAT articles and two historical changelog articles individually. Compared the specified VAT forms, selected models, tables, language strings and rate lookup with their descriptions; clarified the English tax-group name label. Historical release claims are preserved, not independently authenticated. Exact scope and limitations are recorded in SOURCE-REVIEW-REGISTER.csv; all five records remain partial.
- Progress: 146/161 pages have partial individual records (90.7%); 0/161 fully approved. Finding records remain 173/199 original CODE IDs with partial work (86.9%), plus CODE-201–217 and M-0122. No security hold was individually reviewed and no new Issue was created.
- Five pages rendered with the bundled Markdown parser and 21 chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. No Joomla, tax, database, checkout or historical-release runtime was exercised.
- Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`. Next: review further historical pages, then deepen all partial records and continue independent finding analysis; do not treat partial counts as completed reviews.

## In-progress checkpoint - tax lookup investigation (ACTIVE)
- Deepened the partial VAT-rate review by inspecting the rate renderer, state validation, VAT user-location selection and product tax callers. A separate calculation lookup joins state codes without constraining the state record to the rate country. An equivalent in-memory SQLite fixture matched an unintended foreign state code; it did not execute the actual Joomla query. Added a cautious guide warning and registered CODE-218.
- Created #263 after read-only duplicate comparison with #130 and #234 and a successful dry-run; subsequent dry-run reported unchanged. P1 is provisional and actual financial impact is unverified.
- Progress remains 146/161 partial page records (90.7%) and 0/161 fully approved. Original finding coverage remains 173/199 partial (86.9%); CODE-218 is an additional investigation. No security hold was individually reviewed. The current deeper-review group is not complete.
- The updated guide rendered; related ledger mappings and page-record uniqueness were checked and `git diff --check` passed with line-ending warnings. No Joomla, MySQL or checkout runtime was exercised. Continue the partial group, trace remaining tax callers and pursue other reviews without waiting on runtime access.

## Checkpoint - historical releases 2.0.2 through 2.0.6 (ACTIVE)
- Read five historical notes in full and compared their upgrade advice with the current source manifest and upgrade guide. Examined selected current currency deletion, tax-group deletion and VAT address paths for the corresponding historical topics without inferring that this proves the historical fixes. Added notices distinguishing old Joomla 3 compatibility and upgrade recommendations from current guidance. Also added the same direct-entry warning to the previously reviewed 1.5.0.6 note. Original release claims remain intact.
- Progress: 151 partial page records exist, of which 150/161 inventory pages are covered (93.2%); 0/161 fully approved. One additional reviewed page, `orders/order-payments.md`, is outside that inventory. Earlier checkpoints counted it in the inventory numerator and thus overstated inventory coverage by one. Original finding coverage remains 173/199 partial (86.9%), plus CODE-201–218 and M-0122. No security hold was individually reviewed. Historical artifacts and ticket history remain unauthenticated.
- Five newly reviewed pages rendered and ten chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. Neither historical nor current Joomla installation, database and checkout runtime was exercised.
- Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`. Next: continue individual reviews, deepen partial entries including the in-progress tax group, and independently address remaining finding and documentation work.

## Checkpoint - historical releases 2.0.7 and 2.1.x (ACTIVE)
- Read five historical notes in full and inspected current source excerpts relevant to selected entries: tax-rate validation, user-session address selection, currency deletion, billing state rendering and installer plugin enablement. Added direct-entry historical compatibility notices; retained original release claims. Each page remains partial because historical artifacts and ticket histories are not authenticated and the corresponding current workflows are not fully traced.
- Progress: 155/161 inventory pages have partial individual records (96.3%); 0/161 fully approved. The register also includes one reviewed page outside the inventory. Original finding coverage remains 173/199 partial (86.9%), plus CODE-201–218 and M-0122. No security hold was individually reviewed.
- Five pages rendered and ten chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed; Git reported line-ending warnings. No Joomla, browser, installation, database or checkout runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`. Continue with remaining unrecorded pages and deepen all partial reviews; this checkpoint is not completion.

## Checkpoint - remaining release notes and PostDanmark location redirect (ACTIVE)
- Read four historical release notes and the historical pickup-location redirect in full. Compared selected current manifest, installer and VAT-rate view excerpts and both PostNord manifests. Added historical compatibility notices to the release notes; the existing redirect already points to the current guide. Historical pull requests, release packages and provider functionality were not authenticated or exercised.
- Progress: 160/161 inventory pages have partial individual records (99.4%); 0/161 fully approved. The register also includes one reviewed page outside the inventory. Original finding coverage remains 173/199 partial (86.9%), plus CODE-201–218 and M-0122. No security hold was individually reviewed.
- Five pages rendered and nine chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed with line-ending warnings. No Joomla, installer, database, checkout or provider runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`. Next: the remaining PostDanmark information redirect and four deeper partial reviews; then continue individual source tracing and finding work. A partial record is not an approved review.

## Checkpoint - user management, currency and PostDanmark redirect (ACTIVE)
- Inspected the remaining historical redirect and deepened four existing user and currency reviews using the specific source paths in SOURCE-REVIEW-REGISTER.csv. Clarified that synchronization counts selected users rather than successful saves, that Joomla administrator-account protection does not necessarily preserve redSHOP information, and that absent currency quotes can produce numeric conversion results.
- Opened CODE-219 / #264 after comparing #72 and running a dry-run. Actual converter methods with synthetic nonempty rates and session stubs returned numeric values for missing target quotes; a known-rate ECB control passed. A follow-up dry-run reported unchanged. P1 is provisional; provider and financial impact remain unverified.
- Progress: 161/161 inventory pages have partial individual records (100%); **0/161 fully approved**. One additional reviewed page is outside the inventory. This is coverage of partial records, not completion of the requested individual reviews or missing-documentation investigation. Original finding coverage remains 173/199 partial (86.9%), plus CODE-201–219 and M-0122. No security hold was individually reviewed.
- Five pages rendered and five chapter links resolved. Page-record uniqueness and nonempty fields and `git diff --check` passed with line-ending warnings. No Joomla, MySQL, browser, checkout or provider runtime was exercised.
- Core remains at `2e2889680244db64b9e9f64da29608e02f543a70`. Continue with substantive deeper reviews of all partial pages and findings, missing feature documentation, historical authenticity and private security-channel blockers.

## In-progress checkpoint - finding CODE-009 (ACTIVE)
- Rechecked both administrator order-item assignments and quotation conversion and traced the separate non-giftcard storefront checkout path. Checkout also assigns the product manufacturer ID to the order-item supplier field. The inspected supplier-email branch uses the current product supplier instead; no email effect is established. Added a qualified supplier-guide warning and updated #93 after a dry-run; subsequent dry-run reported unchanged.
- CODE-009 remains partial: no actual order creation, database persistence, downstream integration or Joomla runtime was exercised. Continue the finding group; this single investigation is not a completed ten-finding batch. Page coverage remains 161/161 partial records and 0/161 fully approved; original finding coverage remains 173/199 partial (86.9%).
- Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`. No Core modifications, commits, pushes or publication were performed.

## In-progress checkpoint - export, payment and media findings (ACTIVE)
- Re-exercised actual methods with synthetic PHP 8.4 stubs: CODE-001 COD nonmatching handler throws; CODE-002 PayPal reads an integer as an array and produces a warning converted to an exception by the fixture; CODE-006 manufacturer media deletion uses a section-only predicate; CODE-008 postcode range ignores a failed parent save and continues. Updated #71, #105, #97 and #73 after individual dry-runs; subsequent dry-runs were unchanged. No Joomla dispatch, SQL, file deletion, checkout or provider was tested.
- Found CODE-220: order export `processData` performs nested full-batch traversal. Two synthetic input rows yielded four output rows and six stub queries. Added a qualified warning to the export guide and created #265 after comparing #111 and #109 and running a dry-run; subsequent dry-run was unchanged. CSV output and database behavior remain untested.
- Page coverage remains 161/161 partial records (100%) and 0/161 fully approved; one additional page is outside inventory. Original finding coverage remains 173/199 partial (86.9%); CODE-220 is additional. These counts do not represent completed individual reviews. No security hold was individually reviewed. The ten-finding group remains incomplete.
- Issue-sync tests passed; the changed guide rendered using the bundled Markdown parser; review CSV structure and identifier uniqueness and tracked-file `git diff --check` passed. A temporary page-register column mismatch introduced during editing was corrected and the check rerun successfully.
- Core remains `2e2889680244db64b9e9f64da29608e02f543a70`, with no Core changes, commits, pushes or publication. Continue the finding group, including CODE-004 and CODE-005, then resume substantive page reviews and remaining authorized work. The private handbook was absent when checked.

## Checkpoint - CODE-001 through CODE-010 (ACTIVE; partial)
- Continued the ten-record group: actual CODE-004 import upload with memory-only stubs deleted the shared same-type root on a second upload, while a different type used a separate root; actual concurrency and export remain untested. CODE-005 query-builder stubs confirmed strict date endpoints and repeated count bounds. CODE-010 actual query-builder stubs emitted the price-list category predicate for a column absent from the install schema. Updated #109, #111 and #74 after dry-runs.
- CODE-001–010 have individual records, but this group is **not fully validated**: CODE-003 is the documentation renderer and was not rerun here; CODE-007 and CODE-009 were examined earlier; real Joomla, database, browser, filesystem and provider checks remain open. No original finding is newly marked complete and prior partial-coverage counts remain unchanged. CODE-220 / #265 is additional.
- Issue-sync tests passed; the follow-up dry-run reported ten selected Issues unchanged, including #265. All five review CSVs parsed with unique identifiers; tracked-file `git diff --check` passed with a line-ending warning. These checks do not replace further individual analysis.
- Inventory remains 161/161 partial records (100%) and 0/161 fully approved; original findings 173/199 partial (86.9%); security holds remain individually unreviewed in this segment. Core `2e2889680244db64b9e9f64da29608e02f543a70` is clean; documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` remains dirty. Continue with CODE-011 onward, substantive partial-page reviews and private security-channel blockers.

## Checkpoint - CODE-011 through CODE-020 (ACTIVE; partial)
- Rechecked CODE-011 source and existing #75 evidence. Tested actual methods with synthetic PHP 8.4 stubs for CODE-012 coupon use boundaries, CODE-013 dated promotion condition, CODE-014 award item preparation through the Step caller, CODE-015 status validation query, CODE-016 plural quotation CSV handler, CODE-017 tax-request filter, CODE-019 subscription insertion and CODE-020 test-newsletter query/sender. Updated their existing Issues after dry-runs; follow-up dry-run reported all nine ordinary Issues unchanged.
- CODE-018 remains a security hold; no authorized private reporting channel has been identified and it was not individually reviewed here. No SQL, real Joomla routing/UI, checkout, filesystem, provider or mail delivery was executed. These nine ordinary findings remain partial rather than fully verified; CODE-011's earlier SQLite fixture was not rerun in this group.
- Issue-sync tests passed; the five review CSVs parsed with unique IDs; tracked-file `git diff --check` passed with a line-ending warning. These checks do not substitute for the remaining individual review or runtime work.
- Coverage remains 161/161 inventory pages with partial records (100%) and 0/161 fully approved, plus one page outside inventory. Original findings remain 173/199 partial (86.9%), not completed. No security hold was individually reviewed in this group. Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Continue with CODE-021 onward, deeper page reviews and private reporting-channel blockers.

## Checkpoint - CODE-021 through CODE-030 (ACTIVE; partial)
- Rechecked CODE-021 to CODE-024 against current source. CODE-021 also affects the `Filter.Result` search layout: updated the category guide and #81. For CODE-022, the actual navigation method with stubs suppressed the next image when the previous image setting was empty and emitted a missing next image when an existing previous path was supplied; text-mode controls passed. Updated #82.
- For CODE-024, the actual inline script with DOM stubs overwrote a saved alias on initialization and selection change and cleared synthetic empty and unmapped IDs. The configuration maps the inputs and the order parser reads one alias; actual persistence and routing were not executed. Updated #83. CODE-023 remains source-checked with product metadata and overrides untested.
- CODE-028 and CODE-029 manifest evidence was synchronized to #91 and #92; CODE-030 helper evidence was synchronized to #84. CODE-025 to CODE-027 remain security holds, not individually reviewed here because an authorized private reporting channel has not been identified. No Joomla, browser, database, search rendering or provider runtime was exercised. The group is partial, not fully validated.
- Issue-sync tests passed; the follow-up dry-run reported six updated Issues unchanged. Five review CSVs parsed with unique IDs, the category guide rendered and `git diff --check` passed with line-ending warnings. Python was unavailable; CSV checks used the repository's Node parser instead.
- Coverage remains 161/161 inventory pages with partial records (100%) and 0/161 fully approved; original findings remain 173/199 partial (86.9%), not completed. Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD is `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` and remains dirty. Continue with CODE-031 onward and deeper page reviews.

## Checkpoint - CODE-031 through CODE-040 (ACTIVE; partial)
- CODE-032: actual wizard helper/controller with non-writing stubs attempted the distributed-to-active copy on welcome, not general, and returned normal output when copy returned false. CODE-033: actual dashboard helper with a simplified builder and in-memory SQLite returned a single value for empty data and IDs plus visitor count for synthetic data. Updated #110 and #86; no actual configuration copy, Joomla database or dashboard was run.
- CODE-035: the Joomla 5.4 standard dispatcher supplies `app` in module include scope. The actual cart module with equivalent-scope stubs handled nonzero and zero ItemID; the suspected missing-variable failure is not established on that path. Updated #87 without closing it and removed the unsupported manual warning. Actual Joomla, Joomla 6 and custom dispatchers remain untested.
- CODE-038: actual Who Bought entry with query stubs selected products without order joins, both with and without a category join. CODE-039: actual Joomla 5.4 manifest parser with stub operations did not schedule Product Tab's `js` directory. Updated #88 and #89 and clarified the Product Tab guide; no SQL, ZIP or install was run.
- CODE-040: actual metadata template and helper with a stub view selected `INDEX,FOLLOW` for a stored `NOINDEX,NOFOLLOW` value, while an explicit helper control preserved the latter. Inspected Joomla 5.4 template loader scope and updated #90. No browser, save, indexing or Joomla runtime was exercised. CODE-031 and CODE-034 retain earlier partial records; CODE-036/037 remain private security holds without an identified authorized reporting channel and were not individually reviewed.
- Issue-sync tests passed; the follow-up dry-run reported six Issues unchanged. Five CSVs parsed with unique IDs, both changed module pages rendered and `git diff --check` passed with line-ending warnings. Two page-register column omissions introduced during editing were corrected before successful revalidation.
- This group is **partial**, not fully validated. Coverage remains 161/161 inventory pages with partial records (100%) and 0/161 fully approved; original findings remain 173/199 partial (86.9%), not completed. Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` and its worktree is dirty. Continue with CODE-041 onward and deeper page reviews.

## Checkpoint - CODE-041 through CODE-050 (ACTIVE; partial)
- CODE-041: actual coupon helper with stubs rejected a synthetic 20% coupon at subtotals 10 and 20 but accepted 21; fixed-value boundary controls passed. Updated #70. CODE-045: reran the existing offline Flatpay replay suite successfully; unfamiliar-state legacy callback remains untested and #100 remains an investigation.
- CODE-047: actual accounting connection method with HTTPS disabled raised a null-client error after initialization failure in both provider branches. CODE-048: actual review controller with stubs raised a guest namespace error; login-required guest and authenticated controls passed. Updated #102 and #104; no provider request, Joomla or mail was performed.
- CODE-049: actual import splitter and PHP CSV reread changed synthetic apostrophe, double-quote and backslash examples while plain and comma controls were preserved; fixture files were removed. CODE-050: actual gift-card method with stubs generated two codes but one message for quantity two; empty and single-unit controls passed. Updated #107 and #112. An initial #112 ledger replacement failed after the comment was written; a dry-run verified the existing comment and an idempotent retry persisted the ledger without a duplicate.
- CODE-042/043/044/046 remain security holds; no authorized private reporting channel has been identified and they were not individually reviewed here. The group is **partial**, not fully validated. No real Joomla checkout, provider, browser, SQL import or mail delivery was exercised.
- Issue-sync tests passed; the follow-up dry-run reported six Issues unchanged. Five CSVs parsed with unique IDs, fixture cleanup was verified and `git diff --check` passed with line-ending warnings.
- Coverage remains 161/161 inventory pages with partial records (100%) and 0/161 fully approved; original findings remain 173/199 partial (86.9%), not completed. Core remains clean at `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` and its worktree is dirty. Continue with CODE-051 onward and deeper page reviews.

## Checkpoint - CODE-051 through CODE-060 (ACTIVE; partial)
- Rechecked the source for CODE-051–056 and CODE-059 against Core `2e2889680244db64b9e9f64da29608e02f543a70`; the inspected finding files are unchanged since `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`. Historical fixtures were not rerun and these Issues remain at the prior verified ledger revision. CODE-060 remains a browser acceptance investigation, not a confirmed defect.
- CODE-057 / #119: current `PriceModel` sets the product ID before querying and handles a missing result; the original defect is no longer supported by current source. `php tests\unit\prices-list.php` passed with a valid product and SQLite/doubles. Missing/invalid product contexts, Joomla and MySQL remain unverified. Corrected both handoffs and triage and appended a qualified Issue comment without closing it.
- CODE-058 / #120: the product-price endpoint checks remain. Source inspection also identified similar endpoint checks in the attribute-price helpers; the separate attribute path and its zero/section behavior need targeted validation. The existing price CRUD test stubs its table check and therefore does not test this defect. Appended qualified evidence to the Issue. `php tests\unit\attributeprices-list.php` passed but does not establish validator behavior.
- Selected dry-runs found both Issue comments unchanged after synchronization. The group remains **partial**: re-run targeted original fixtures where available, review remaining Issue details and behavior, and continue the attribute-price investigation without treating source similarity as a runtime result. The initial group dry-run blocked stale-ledger records; it made no write.
- Earlier coverage figures remain 161/161 inventory pages with partial records and 0/161 fully approved; 173/199 original findings have partial records, not completed reviews. No Joomla browser, MySQL or provider runtime was exercised. Continue the individual finding and page work; do not treat this checkpoint as completion.

## Checkpoint - CODE-061 through CODE-070 (ACTIVE; partial)
- CODE-061 / #122: a browser fixture containing the current copied Reset handler raised a `TypeError` and left two selected filters unchanged; its implicit submit event still fired and was intercepted. The actual Joomla form and resulting server list were not tested. Appended qualified evidence after a dry-run and confirmed the subsequent dry-run was unchanged.
- CODE-067: inspected the optional state field and list query; #127 correctly describes the country-filter mismatch. CODE-068: inspected the currency validator and #128; actual Joomla prefix substitution and SQL remain unverified. CODE-069: inspected the rate list renderer; its link uses the rate ID, with actual route unverified.
- CODE-070 / #130: rechecked the state join and grouped list query and compared it with the distinct calculation lookup CODE-218 / #263. Added this relationship and SQL-mode test requirements to #130; subsequent dry-run was unchanged. Historical equivalent SQLite evidence was not rerun and does not prove MySQL or checkout behavior.
- CODE-062 remains a security hold; no private reporting channel was identified. CODE-063–066 retain earlier partial source records and need their fixtures/Issue evidence rechecked; the group is **partial**. Issue-sync tests passed; five registers parsed with unique IDs; `git diff --check` passed with line-ending warnings.
- Earlier coverage figures remain 161/161 inventory pages with partial records and 0/161 fully approved; 173/199 original findings have partial records, not completed reviews. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Continue at CODE-071 and return to outstanding group limitations; this checkpoint is not completion.

## Checkpoint - CODE-071 through CODE-080 (ACTIVE; partial)
- CODE-071 / #131: inspected the current order date predicate. Standalone PHP arithmetic for `Europe/Copenhagen` showed the fixed 24-hour boundary one hour late on 2025-03-30 and one hour early on 2025-10-26; an ordinary day matched next midnight. This did not invoke the model or establish Joomla's timezone. Appended qualified evidence and confirmed idempotent reconciliation.
- CODE-072 and CODE-073: inspected the current shipping-box ID search and shipping-method renderer; #132 was read. The prior isolated fixtures were not rerun and Joomla/SQL behavior remains untested.
- CODE-080 / #140: inspected the current mail-list search and Issue. An equivalent in-memory SQLite comparison returned an extra name-matching row outside the requested filters; grouped controls returned only matching rows. The actual model SQL was not executed in this check. Appended qualified evidence and confirmed idempotent reconciliation.
- CODE-074–079 retain earlier partial individual records and require deeper source/Issue and fixture review. This group is **partial**. Issue-sync tests passed; the four selected Issues from this and the previous group reconciled unchanged. Five CSVs parsed with unique IDs; `git diff --check` passed with line-ending warnings.
- Earlier coverage figures remain 161/161 inventory pages with partial records and 0/161 fully approved; 173/199 original findings have partial records, not completed reviews. Joomla 5/6 UI, MySQL and provider runtime were not tested. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Continue with CODE-081 and return to outstanding limitations; this checkpoint is not completion.

## Checkpoint - CODE-081 through CODE-090 (ACTIVE; partial)
- CODE-081 / #141: the actual current template helper with seeded static records and configuration/language stubs selected the first product's template for both products in either order. The database, filesystem and Joomla storefront were not exercised. Appended qualified evidence and confirmed idempotent reconciliation.
- CODE-083 / #143: read the Issue and its existing comment and rechecked the four cited module source patterns. Related and product modules use different guards. The historical layout fixtures were not rerun and no new storefront result was asserted.
- CODE-089 / #149: the actual current postal validator with synthetic in-memory SQLite and parent/query doubles rejected `0999` because `999` existed and accepted a duplicate `A1 2BC`; numeric-duplicate and absent-code controls passed. MySQL collation and Joomla saves remain unverified. Appended qualified evidence and confirmed idempotent reconciliation.
- CODE-088 and CODE-090 source was inspected; actual database driver types and filesystem behavior were not tested. CODE-082 and CODE-084–087 retain previous partial records requiring deeper review. The group is **partial**. Issue-sync tests passed; the selected Issues reconciled unchanged. Five CSVs parsed with unique IDs; `git diff --check` passed with line-ending warnings.
- Earlier coverage figures remain 161/161 inventory pages with partial records and 0/161 fully approved; 173/199 original findings have partial records, not completed reviews. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Continue at CODE-091 and return to outstanding group limitations; this checkpoint is not completion.

## Checkpoint - CODE-091 through CODE-100 (ACTIVE; partial)
- CODE-091 / #151: rechecked set deletion and its published-property helper query. Attributes without matching published properties can be skipped by that source path; previous stub evidence was not rerun and database/filesystem cleanup remains unverified.
- CODE-094 / #153 and CODE-097 / #156: the actual current calculator with synthetic product/price/option doubles returned 1.5 versus 2 pieces for the two decimal settings, with equal results for a whole-piece control; a stubbed +5 option changed reported unit price 10 to 15 but left the 1.5-piece total at 15. The first fixture assertion incorrectly used strict float/integer equality and failed; corrected assertions passed. No database, tax calculation or checkout was exercised. Both Issue updates reconciled unchanged after controlled synchronization.
- CODE-098 / #157: inspected controller, model and Issue; the controller ignores per-row return values and successful model paths return null, so a fix needs an explicit result contract. Real stock persistence and notifications remain untested.
- CODE-093 and CODE-100 remain private security holds; no authorized private reporting channel was identified. CODE-092 and CODE-095–096 and CODE-099 retain previous partial evidence and need the outstanding runtime and fixture checks. The group is **partial**.
- Issue-sync tests passed; the selected Issues reconciled unchanged. Five CSVs parsed with unique IDs; `git diff --check` passed with line-ending warnings. Earlier coverage remains 161/161 inventory pages with partial records and 0/161 fully approved; 173/199 original findings have partial records, not completed reviews. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Continue at CODE-101 and return to outstanding limitations; this checkpoint is not completion.

## Checkpoint - CODE-101 through CODE-110 (ACTIVE; partial)
- CODE-102 / #160: rechecked the source and Issue comments; the current actual tag replacement with a stubbed renderer retained the ordinary tag and replaced the quoted form, and requested a different layout name from the shipped file. This reproduces existing evidence rather than adding a duplicate Issue comment. Full Twig environment, overrides and storefront remain untested; P1 versus P2 requires maintainer triage.
- CODE-103 / #161: rechecked the numeric editor inputs and existing Issue. In a representative browser fixture the alphanumeric value became empty while a numeric leading-zero value remained intact. The actual Joomla form, persistence and shipping rate matching were not tested. No duplicate comment was added.
- CODE-106 and CODE-108 remain private security holds; no authorized private reporting channel was identified. CODE-101, CODE-104–105 and CODE-107–110 retain earlier partial records and require deeper source/Issue and runtime review. The group is **partial**.
- Issue-sync tests passed; five CSVs parsed with unique IDs; `git diff --check` passed with line-ending warnings. Earlier coverage remains 161/161 inventory pages with partial records and 0/161 fully approved; 173/199 original findings have partial records, not completed reviews. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Continue at CODE-111 and return to outstanding limitations; this checkpoint is not completion.

## Checkpoint - CODE-111 through CODE-120 (ACTIVE; partial)
- CODE-112 / #168: actual current recursive controller with synthetic model, session and application doubles showed the first of two recipients but not the second, emitted four warnings, and advanced the progress counter to three. No actual mail or database was used.
- CODE-115 / #171: actual current table validation with a stubbed parent replaced an existing, null and zero date after parent success; a failed-parent control preserved the old date. No Joomla save or storefront was exercised.
- CODE-113 / #169 and CODE-114 / #170: rechecked toolbar, controller, dispatcher and rendered-selection source and existing Issue wording; earlier isolated evidence was not rerun and full Joomla dispatch remains unverified. No duplicate Issue comments were added.
- Remaining records in this group retain earlier partial evidence; CODE-119 remains a private security hold. No private security details were published. The group is not complete and needs the individual source, regression and runtime checks recorded in the register.
- Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original code findings have partial entries, not completed reviews. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Continue with CODE-121 through CODE-130 and return to outstanding partial work.

## Checkpoint - CODE-121 through CODE-130 (ACTIVE; partial)
- CODE-121: rechecked the four view namespaces and MVC provider prefix; actual Joomla resolution and upgrade remain unverified.
- CODE-122: actual current shopper-group table with input, filesystem and parent doubles returned successful storage and assigned the filename for both failed and successful simulated uploads. Real upload and persistence remain untested.
- CODE-123: actual postal-code model with table and parent doubles emitted two warnings for an omitted endpoint and none for an empty endpoint; both controls performed one simulated save. Real Joomla submission remains untested.
- CODE-124: the extracted current country-change handler executed in an isolated JavaScript VM without invoking the jQuery sentinel; no Joomla browser interaction was tested.
- CODE-125 and CODE-126: reran `php tests\unit\fieldgroups-ordering.php` successfully with doubles; the earlier fixes and open/closed Issue discrepancies remain subject to the existing UAT limitations.
- CODE-127, CODE-128 and CODE-130 were source-rechecked only; prior isolated reproductions were not rerun. CODE-129 remains a private security hold, and CODE-130's potential security concern remains private. Do not treat this group as complete.
- The individual-review CSV parsed with 194 unique IDs and 11 columns; `git diff --check` passed with a line-ending warning. No Core changes, Issue writes or runtime tests occurred in this group. Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original findings have partial entries, not completed reviews. Continue with CODE-131 through CODE-140 and revisit every outstanding partial group.

## Checkpoint - CODE-131 through CODE-140 (ACTIVE; partial)
- CODE-131: actual current shipping-rate controller with input, model and redirect doubles emitted two undefined-key warnings and four warnings in total on pickup-shaped input; the rate-shaped control emitted none. Persistence and Joomla were not tested.
- CODE-132: both actual shipping-box renderers with helper and layout doubles rendered IDs 1/2/4 for priorities 1/1/2/2, only ID 1 for 1/2/3, and all IDs for 1/1/1. This confirms the transition behavior without deciding intended priority policy; checkout, database and carrier were not tested.
- CODE-133 through CODE-136 and CODE-138 through CODE-140: inspected the relevant source again, but did not rerun their previous isolated fixtures or exercise provider/checkout runtime. CODE-137 remains a private security hold. No public security details or new Issue comments were added.
- This group remains partial. Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original code findings have partial entries, not completed reviews. Continue with CODE-141 through CODE-150 and revisit all incomplete groups.

## Checkpoint - CODE-141 through CODE-150 (ACTIVE; partial)
- CODE-142: actual pre-store handler with synthetic responses and parameter doubles mapped `Delivered` to null, and `Delevered` and `Picking` to their configured values. An initial fixture failed because the plugin constructor required arguments; the corrected constructor-free fixture passed. The real provider status spelling and event dispatch remain unverified.
- CODE-144: actual similar-tags entry and helper with a forwarding cache stub raised a `count(null)` TypeError for an excluded synthetic route. Installed Joomla cache and storefront were not exercised.
- CODE-146: current manufacturer slider layout with service doubles raised `DivisionByZeroError` for zero and rendered an empty slider at one. Real module configuration and other layouts were not rerun.
- CODE-148: actual mega-menu sort helper with synthetic nested categories produced ascending names at both levels when descending was requested, and retained ordering 2/1 for ascending Ordering. Actual category query and storefront remain untested.
- CODE-149 / #202: actual local Twig template in non-strict mode omitted the empty-cart link regardless of setting; strict mode raised an undefined-variable exception. Populated-cart controls rendered links. After verifying the three cited sources unchanged since the earlier revision, dry-run, controlled Issue comment, sync tests and idempotent reconciliation succeeded. Actual Joomla Twig strictness and alternate layouts remain unverified.
- CODE-141, CODE-143, CODE-145, CODE-147 and CODE-150 were source-rechecked only; prior fixtures, real database and provider behavior were not rerun. Group remains partial. Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original findings have partial entries, not completed reviews. Continue with CODE-151 through CODE-160, then revisit the remaining partial groups and pages.

## Checkpoint - CODE-151 through CODE-160 (ACTIVE; partial)
- CODE-151 / #204: actual helper with synthetic query data returned null with one warning for id only, zero for catid only, 42 when both were 42, and zero for neither. Real Joomla menu shapes remain unverified. Verified unchanged source, then dry-ran and synchronized qualified evidence; the follow-up dry-run was unchanged.
- CODE-155: the actual Facebook video layout and parameter stub followed by a paragraph were parsed by libxml with the paragraph inside the blockquote. Browser SDK and Joomla runtime remain untested.
- CODE-156: actual current line counter returned 13 physical lines for a synthetic header and multiline CSV record; `fgetcsv` returned two records and the progress formula estimated two chunks. The temporary input was removed; actual importer and UI remain untested.
- CODE-153, CODE-154 and CODE-157 through CODE-160 were source-rechecked only; prior reproductions were not rerun. CODE-152 retains earlier partial evidence and needs further source and runtime investigation. Do not treat this group as complete.
- This checkpoint preserves ACTIVE status. Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original findings have partial entries, not completed reviews. Continue with CODE-161 through CODE-170, then return to partial groups and individual pages.

## Checkpoint - CODE-161 through CODE-170 (ACTIVE; partial)
- CODE-164 and CODE-166: actual coupon, voucher and order-discount list renderers with config/view doubles raised errors for synthetic null or numeric start and end dates respectively; formatted-date controls rendered and coupon/voucher zero dates rendered empty. Actual data and Joomla UI remain untested.
- CODE-165: actual coupon and voucher save models and date-range trait with Joomla and parent doubles rejected start-only and reversed ranges, and accepted end-only, empty and ordered ranges. Persistence, intended open-ended semantics and redemption remain unverified.
- CODE-167: actual newsletter controller with config, input and session doubles raised `ValueError` before queueing for batch size -1; size 2 produced two chunks. No mail or Joomla dispatch was exercised.
- CODE-161 through CODE-163 and CODE-169 through CODE-170 were source-rechecked only; prior fixtures and actual checkout/database remain untested. CODE-168 remains a private security hold. No public security details or new Issue comments were added.
- Group remains partial. Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original findings have partial entries, not completed reviews. Continue with CODE-171 through CODE-180, then revisit the outstanding partial groups and individual pages.

## Checkpoint - CODE-171 through CODE-180 (ACTIVE; partial)
- CODE-171 and CODE-172: actual promotion removal methods with cart/discount doubles raised an undefined-key warning converted to an exception for a final award; removing a middle award produced idx-bounded products 10/20/20 while product 30 remained beyond idx. Actual checkout and persistence remain untested.
- CODE-176: actual search Twig layout rendered no custom-field selector with enabled setting and either synthetic populated or empty field data. Real helper data and Joomla rendering remain untested.
- CODE-179: actual suggestion cache method in a Node VM raised `TypeError` for a synthetic substring result without a product number; supplying the number avoided the error. Browser AJAX and initialization remain untested.
- CODE-173, CODE-175, CODE-177, CODE-178 and CODE-180 were source-rechecked only; prior fixtures, actual MySQL and Joomla/browser behavior were not rerun. CODE-174 remains a private security hold. No public security details or new Issue comments were added.
- Group remains partial. Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original findings have partial entries, not completed reviews. Continue with CODE-181 through CODE-190, then revisit the outstanding partial groups and individual pages.

## Checkpoint - CODE-181 through CODE-190 (ACTIVE; partial)
- CODE-181 and CODE-182: actual wizard save with input/session doubles retained the old canonical registration introduction, stored the new text under an alternate key, then raised an undefined-key warning converted to exception for missing VATREMOVE before redirect. Joomla navigation, final configuration and storefront remain untested.
- CODE-185: actual tax-rate table with database/input/parent doubles returned true for first-false second-true insert results and false for first-true second-false. Real driver and transaction behavior remain untested.
- CODE-186: current extracted reset script with translation placeholders and mocked HTTP 200, 403 and 500 responses displayed the same success alert. No request or browser was used.
- CODE-188: actual gift-card table with filesystem/input/parent doubles simulated deletion of both previous images and assigned both replacement names despite failed upload results; the successful-upload control also returned success. No real files or database were modified.
- CODE-187 was source-rechecked only. CODE-183, CODE-184, CODE-189 and CODE-190 remain private security holds; no security details were published. Group remains partial.
- Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original findings have partial entries, not completed reviews. Continue with CODE-191 through CODE-199, then revisit the outstanding partial groups and individual pages.

## Checkpoint - CODE-191 through CODE-199 (ACTIVE; partial)
- CODE-192: actual cart layout with synthetic empty cart and config doubles selected the extended branch for declared default `1`, and the corresponding branches for `simple` and `extended`. Real module binding, saved settings and refresh are untested.
- CODE-193: actual Facebook Like layout emitted synthetic `0`, `false` and `true` unchanged in `data-share`; provider interpretation and Joomla form binding are untested.
- CODE-197: actual category tree helper with query doubles and two synthetic id-only rows produced one entry and fourteen warnings. Real database and Joomla rendering remain untested.
- CODE-191, CODE-194, CODE-195 and CODE-198 were source-rechecked only; prior fixtures, real MySQL and provider behavior were not rerun. CODE-196 and CODE-199 remain private security holds; no security details were published. This group remains partial.
- Counts remain 161/161 inventory pages with partial entries and 0/161 fully approved; 173/199 original findings have partial entries, not completed reviews. Revisit outstanding partial groups and individually review further documentation pages in groups of five; do not treat these checkpoints as approval.

## Checkpoint - five module pages (ACTIVE; partial)
- Re-read the complete Price Filtering, Similar Tags, Product Compare, Mega Menu and redMASSCART pages and their listed source paths; the page register specifies exact methods and remaining gaps. None is approved as a complete individual review or Joomla runtime verification.
- Improved guidance on price boundaries and candidate ordering, empty similar-tag results, comparison settings, multiple Mega Menu instances and mass-cart redirects.
- New CODE-221 / #266: actual Mega Menu helper with synthetic menu and category stubs reused the first menu for a same-category second instance; a different-category control returned its own menu. Joomla rendering and end-level effects remain untested. Distinct from #201 and #204 after reviewing their root causes; synchronization dry-run, creation and subsequent unchanged dry-run succeeded.
- The issue-sync tests passed. The repository CSV parser validated unique IDs and column counts: 162 page-register rows, 263 Core findings, 195 individual finding records, 264 ledger rows and 539 triage rows. `git diff --check` passed with a pre-existing line-ending warning. Python was unavailable; Node validation was used instead.
- Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70`; Graphify index `647c0dc795265544ea000acb0c9217da609db544` is stale, though the inspected module paths compared unchanged. Graph results cannot establish complete caller or test coverage. No Core changes, commits, pushes or publication occurred; no Joomla, browser, database or production runtime was exercised.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Continue with the next individual pages and return to all outstanding partial reviews; private security holds remain blocked.

## Checkpoint - next five module pages (ACTIVE; partial)
- Re-read Products, Product Tab, Discount, Multi Currencies and Manufacturer Scroller and the source paths recorded for each in the individual register. Added qualified guidance about product-selection ordering, guest shopper groups, currency selector filtering and multiple manufacturer media. These pages remain partial; no Joomla runtime was exercised.
- New CODE-222 / #267 investigates duplicate manufacturer slides when a manufacturer has multiple published media rows. An equivalent isolated SQLite query returned manufacturer IDs 1 and 1 under a limit of two; the actual Joomla query, data and storefront were not run. Distinct from #198 and #199; Issue dry-run, creation and unchanged follow-up succeeded.
- Issue-sync tests passed; the repository CSV parser validated unique IDs and column counts: 162 page rows, 264 Core findings, 196 individual finding records, 265 Issue ledger rows and 540 triage rows. `git diff --check` passed for this batch. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70` and the Core worktree is clean.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Keep ACTIVE and continue the next batch; all partial pages and findings require further investigation.

## Checkpoint - third five module pages (ACTIVE; partial)
- Re-read Who Bought, Free Shipping, module/plugin installation, Newsletter and Shopper Group Product with the source paths and methods listed in their individual records. Improved qualified price, installation, redirect and VAT guidance; no page was fully approved.
- CODE-223 / #268 investigates the configured free-shipping rate ID being omitted from the AJAX refresh call. The module entry, cart response and client update were traced in source; Joomla, browser, checkout and actual rate selection remain untested. Its root cause differs from #163, #238 and #251; controlled synchronization and unchanged follow-up passed.
- Issue-sync tests and CSV structure/unique-ID validation passed: 162 page rows, 265 Core findings, 197 individual finding records, 266 Issue ledger rows and 541 triage rows. `git diff --check` passed for this batch; Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70` and the Core worktree is clean.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Keep ACTIVE, continue the next group and preserve the private security holds.

## Checkpoint - fourth five module pages (ACTIVE; partial)
- Re-read Search, Shopper Group Logo, Shopper Group Category, Login Greeting and the module overview; source paths and methods and unresolved coverage are recorded per page. Clarified search keyword click behavior, URL versus component popup settings, billing-name precedence and incomplete overview coverage. No page is approved as a complete review.
- The page-register parser verified 162 unique records and 11 columns; `git diff --check` passed with existing line-ending warnings. Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70` and the Core worktree is clean. No Joomla runtime, browser, multi-user caching or security validation was performed.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Continue with the remaining individual pages and return to these partial reviews. Security holds remain private.

## Checkpoint - cart, category, Facebook, bank transfer and pickup (ACTIVE; partial)
- Re-read all five pages and source listed in the individual register. Clarified the shared payment helper's two-decimal rounding and discount cap, and that pickup-name validation is client-side. Existing cart, category and Facebook guidance already described the behavior checked in this pass.
- The category entry uses `mod_dir` for alternate-style includes without assigning it in the module directory. This is a lead, not a confirmed issue: inspect the actual Joomla include scope and reproduce before deciding whether it is distinct from existing findings. Fetching the Joomla dispatcher source failed due to proxy resolution; continue with other work and retry through an available source.
- Page-register validation passed for 162 unique records and 11 columns; `git diff --check` passed with existing line-ending warnings. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70` remains clean. No Joomla, provider, payment or shipping runtime was exercised.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Keep ACTIVE; continue other individual pages and return to all partial reviews and private security holds.

## Checkpoint - five plugin pages (ACTIVE; partial)
- Re-read EAN Transfer, Shipper, Product Image Zoom, GLS update and plugin overview with the source paths recorded in their individual entries. Clarified an empty Shipper lookup, the zoom script's thumbnail naming assumption and the incomplete plugin overview. EAN and GLS update already contained the checked cautions.
- CODE-224 / #269: the actual product zoom initializer threw for a synthetic custom image path and a missing `src` with DOM doubles; the parser matched a synthetic standard thumbnail. This does not establish real Joomla image URLs or browser behavior. Open and closed Issues were checked for zoom-related titles and bodies, dry-run and controlled creation passed, and a subsequent dry-run was unchanged.
- Issue-sync tests passed; all five CSVs parsed with unique IDs: 162 page records, 266 Core findings, 198 individual finding records, 267 Issue ledger rows and 542 triage rows. `git diff --check` passed with existing line-ending warnings. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70` remains clean; no Joomla, browser, provider or shipping runtime was tested.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Keep ACTIVE; continue the next batch and revisit all partial pages and findings.

## Checkpoint - payment and accounting pages (ACTIVE; partial)
- Re-read 2Checkout, Bambora, Bao Kim, Billy and ePay with the source paths recorded for each page. Clarified Bambora's published-status filtering difference; other existing guidance accurately covers the behavior inspected in this pass. Private payment-security holds remain unresolved and no sensitive details were published.
- Page-register validation passed for 162 unique records and 11 columns; `git diff --check` passed with existing line-ending warnings. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70` remains clean. No Joomla checkout, provider, accounting system or production environment was exercised.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Keep ACTIVE, continue the next group and return to all partial reviews.

## Checkpoint - four payment pages and GLS Business (ACTIVE; partial)
- Re-read GiroPay, PayGate, Paymill, Money Booker and GLS Business against the source listed in each page record. Clarified that Paymill's Sandbox setting alone does not establish a provider test transaction and that GLS Business returns no choices on an empty rate lookup. No page is fully approved; private payment-security holds remain unresolved.
- Page-register validation passed for 162 unique records and 11 columns; `git diff --check` passed with existing line-ending warnings. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70` remains clean. No Joomla checkout, provider, shipping or production environment was exercised.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Keep ACTIVE and proceed to the next batch; all partial reviews require follow-up.

## Checkpoint - shipping integrations and Relatel (ACTIVE; partial)
- Re-read Default GLS, Giao Hang Nhanh, PostNord pickup and shipment, the historical PostDanmark redirect and Relatel against the source listed in each record. Documented that Giao Hang Nhanh's uninstall SQL deletes four specifically named redSHOP field definitions. The other inspected guidance already describes relevant limitations; no page is fully approved.
- Page-register validation passed for 162 unique records and 11 columns; `git diff --check` passed with existing line-ending warnings. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70` remains clean. No uninstall, Joomla checkout, provider, labels or production activity was performed.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Keep ACTIVE and continue the next batch; review field-data dependencies and all other partial items separately.

## Checkpoint - CODE-111 through CODE-120 (ACTIVE; partial)
- Source and issue-level records for ordinary findings CODE-111–118 and CODE-120 are in `CODE-INDIVIDUAL-REVIEW.csv`; previous fixtures and evidence were not uniformly rerun. CODE-119 remains a private security hold, not an individually completed review. No security details were published.
- CODE-117: the separate failed-save/send path overlaps existing CODE-034 / #103; no normal toolbar entry for `question.send` was found in the inspected question view and template. Joomla dispatch and the save-and-send failure path remain unverified.
- CODE-118 / #174: the actual name helper with database doubles returned a single space and two PHP warnings when both queries returned null. Source also shows that subscription table store calls it when the submitted name is empty; actual save and persistence remain unverified. Dry-run, controlled Issue update and unchanged follow-up passed.
- Issue-sync tests and five-register unique-ID checks passed (162 page rows, 266 Core findings, 198 individual finding rows, 267 Issue ledger rows, 542 triage rows); `git diff --check` passed with pre-existing line-ending warnings. Core HEAD `2e2889680244db64b9e9f64da29608e02f543a70` was clean on recheck. No real Joomla, database or mail runtime was exercised.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Continue with the next group and return to missing source, test and private-review evidence; `C:\Github\redSHOP-internal` is unavailable.

## Checkpoint - CODE-121 through CODE-130 (ACTIVE; partial)
- Rechecked source associated with the nine ordinary findings and their existing individual records. CODE-129 remains an unresolved private security hold, not an individually completed review. Prior Issue comparisons and fixtures are identified in the individual register; not all were repeated during this pass.
- `php tests\unit\fieldgroups-ordering.php` passed with doubles for the field-group selector and ordering changes (CODE-125/126). The existing #180 owner-comment/status discrepancy remains for human UAT; no Issue status was changed.
- CODE-130: self-pickup locations share the shipping-rates view and task rather than a separate location controller. `php tests\unit\shippingrates-pagination.php` passed with doubles, but its deletion and copy checks assert redirects with synthetic `id` arrays, not actual grid submission or dispatch. The copy selection input is a separate unverified lead; review its actual Joomla request behavior and existing CODE-074 / #134 before considering further reporting. Potential security aspects remain private.
- Joomla UI, browser, MySQL and installation/upgrade behavior remain unverified. Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Continue with CODE-131–140 and return to outstanding private and runtime work.

## Checkpoint - CODE-131 through CODE-140 follow-up (ACTIVE; partial)
- Re-read the ordinary findings' source paths: shipping-rate and pickup save; both box renderers and box query; wrapper sort metadata; GLS lookup and address hook; self-pickup rates and shared renderer; FedEx and USPS rate guards; and Giao Hang Nhanh order event guard. Existing individual records retain prior fixture outcomes; those fixtures were not rerun in this follow-up.
- CODE-132: the source query orders by priority without an explicit tie-breaker, so the omitted member of a tied group can depend on database ordering; real ordering and intended policy remain unverified. CODE-137 remains on private security hold, not a completed review. No Issue or security information was published in this follow-up.
- Runtime and progress limitations remain unchanged: no Joomla checkout, provider, browser or MySQL integration exercised; 0/161 fully approved (0%) and 173/199 original findings have partial records, not completed reviews. Continue with CODE-141–150 and revisit incomplete groups.

## Checkpoint - CODE-141 through CODE-150 follow-up (ACTIVE; partial)
- Re-read Giao Hang Nhanh creation, cancellation, status and weight paths; similar-tags helper and entry; manufacturer, Who Bought and Product Tab layouts; mass-cart helper; Mega Menu sort; and cart module entry, calculator, layout, Twig and relevant manifests. Prior isolated fixtures were not rerun in this follow-up; the existing individual records retain their earlier test outcomes and limitations.
- CODE-150 / #203: source tracing additionally established that `Cart::modifyCalculation` and `Discount::modifyDiscount` derive the displayed VAT-split discount from the same three cart, coupon and voucher components used by the module total calculator. Runtime sequencing and displayed-instance parameter selection remain unverified. Dry-run, controlled Issue comment and unchanged follow-up passed; the issue remains an investigation.
- Issue-sync tests and five-register unique-ID checks passed (162 page rows, 266 Core findings, 198 individual finding rows, 267 Issue ledger rows, 542 triage rows); `git diff --check` passed with pre-existing line-ending warnings. No Joomla, provider, browser or real database runtime was exercised.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Continue with CODE-151–160 and all outstanding private, source and runtime follow-up.

## Checkpoint - CODE-151 through CODE-160 follow-up (ACTIVE; partial)
- Re-read the Mega Menu category mapping; product menu helper; Xmap category query; logo and Facebook video layouts; shared CSV import line counting and splitting; category filter inputs and portal helper; sample reminder scheduling; and VAT configuration input. Existing individual records retain prior fixture outcomes; those older fixtures were not rerun here.
- CODE-225 / #270: actual second reminder attempted a stubbed failed send on its synthetic due date, then made no mail attempt the following day; the actual third reminder also made no next-day attempt. This investigates exact-date eligibility, distinct from #212's first-reminder units and #85's coupon-expiry arithmetic. Compared open and closed Issue titles/bodies, inspected both flagged Issues, ran dry-run, created the Issue and confirmed an unchanged subsequent dry-run. No real mail, database or Joomla cron was used. Added a concise caution to the product configuration guide.
- Issue-sync tests passed. Repository CSV parser verified shapes and unique IDs: 162 page rows, 267 Core findings, 199 individual finding rows, 268 Issue ledger rows and 543 triage rows. `git diff --check` passed with pre-existing line-ending warnings. Python was unavailable; the repository's Node CSV parser was used instead.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. The additional finding is not part of the original 199. Continue with CODE-161–170 and all outstanding private, source and runtime follow-up.

## Checkpoint - CODE-161 through CODE-170 follow-up (ACTIVE; partial)
- Re-read stockroom delivery form, validation and helper/query paths; coupon, voucher and order-discount date render/save paths; newsletter batch configuration and sender; mass-discount deletion; and promotion free-shipping application and removal. Previous synthetic fixture results are retained in the individual register and were not rerun here.
- CODE-168 remains an unresolved private security hold, not a completed review. No new Issue or public security details were published. The checked source continues to support the existing scoped ordinary findings; actual Joomla, database, checkout and mail behavior remains unverified.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Continue with CODE-171–180 and return to missing source, test and private-review evidence.

## Checkpoint - CODE-171 through CODE-180 follow-up (ACTIVE; partial)
- Re-read promotion removal, price-filter state and layout, search module form and helper, search exclusion and suggestion paths, accessory price lookup and VAT wizard controls/controllers. Existing fixture results were not rerun except for the new callback investigation below. CODE-174 remains a private security hold, not a completed review. Actual Joomla routing, SQL, checkout and browser behavior remain unverified.
- New CODE-226 / #271: category changes call the manufacturer lookup even if its optional destination is hidden. Actual source and shipped minified callbacks with synthetic DOM doubles threw for absent destinations with both empty and populated responses; controls with a destination hid or displayed it. Compared open and closed issues including #229 and #257, ran the issue-sync tests and dry-run, created #271 and confirmed unchanged reconciliation. Added a qualified note to the search guide and updated its partial source register.
- Quality check: repository CSV parser accepted all four affected finding registers and found one CODE-226 in each; `git diff --check` passed with pre-existing line-ending warnings. No real Joomla, browser, AJAX or database was exercised.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. CODE-226 is additional to the original inventory. Continue with CODE-181–190 and return to the missing source, tests and private-review evidence.

## Checkpoint - CODE-181 through CODE-190 follow-up (ACTIVE; partial)
- Re-read wizard save/finish and registration controls, tax-rate storage, order-reset feedback, ePay options and gift-card image replacement. CODE-183, CODE-184, CODE-189 and CODE-190 remain unresolved private holds. Previous synthetic fixtures were not rerun; no Joomla, database, filesystem upload or provider runtime was exercised.
- Traced CODE-181 further to the default registration view and layout. The layout calls translation keys for both introductions rather than directly reading their configured values; the inspected view does not map those settings to the language keys. Recorded the separate source-only investigation as CODE-227 / #272 after comparing open and closed Issues, dry-run, creation and unchanged reconciliation. Qualified the User configuration guide and updated its partial source register; actual Joomla language overrides, persistence and rendering remain unverified.
- Quality check: repository CSV parser accepted five affected registers with unique IDs; `git diff --check` passed with pre-existing line-ending warnings.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. CODE-227 is additional to the original inventory. Continue with CODE-191–199 and return to missing source, tests and private-review evidence.

## Checkpoint - CODE-191 through CODE-199 follow-up (ACTIVE; partial)
- Re-read free-shipping rate query and threshold handling, cart and Facebook manifest defaults, category menu sort and dTree query, category link-list result mapping, and PayPal currency manifest/form. CODE-196 and CODE-199 remain unresolved private holds. Existing recorded synthetic fixtures were not rerun and no new issue was created for these findings.
- Actual Joomla form binding, supported database query execution, browser behavior, shipping checkout, payment conversion and provider responses remain unverified. Category link-list helper also uses a global tree cache; subsequent inspection found the module entry clears that tree for each execution. Any remaining indirect-caller implications require separate investigation rather than assuming the unrelated Mega Menu cache report covers it.
- Original inventory progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed reviews. Additional CODE-226 and CODE-227 are outside the original inventory. Continue individual source work and unresolved private and runtime follow-up.

## In-progress page batch — category menu (ACTIVE; partial)
- Re-read the complete category-menu page, module entry and manifest and the helper's tree paths. The entry clears the cached tree at each module execution, so the earlier global-cache lead is not established for ordinary independent instances.
- Followed the previously recorded undefined `mod_dir` lead. Actual module entry with Joomla stubs and dTree selected failed to load the style when the variable was absent; inspected standard Joomla 5.4 development-branch dispatcher source does not supply that variable. Installed Joomla 5 and 6 dispatch and the other styles remain untested. Created CODE-228 / #273 after open/closed Issue comparison, dry-run and unchanged reconciliation; updated the guide and partial source record.
- CSV parser accepted all five affected registers with unique IDs; `git diff --check` passed with pre-existing line-ending warnings. The isolated temporary probe was deleted. The page batch is not finished; continue with four more pages and retain all source/runtime limitations. Original inventory remains 0/161 fully approved (0%); 173/199 findings have partial records.

## Checkpoint - five module pages follow-up (ACTIVE; partial)
- Re-read category menu, manufacturer scroller, free-shipping, cart module and price-filter pages and relevant entry/manifest/layout/helper/model source. Added the qualified category tree loading warning tied to #273 and explained free-shipping's default-country and conditional state-filter behavior; the other guides already covered the rechecked facts. Updated individual source records with the inspected scope and explicit no-change reasons.
- All five remain partial: alternate styles, actual Joomla rendering, database behavior, cart and checkout paths, browser interactions and private security matters are not fully verified. Existing synthetic tests were not rerun except the category entry probe documented above. This is a follow-up batch, not five fully approved reviews.
- Quality check: five affected CSV registers parsed with unique IDs; `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with the next individual batch.

## Checkpoint - search, comparison, Mega Menu, Facebook and zoom follow-up (ACTIVE; partial)
- Re-read all five pages and inspected their relevant module/plugin entry, form and selected layouts/helpers. Search was updated earlier in this run for #271; Mega Menu now documents its empty-category-list return; zoom now states the frontend nonzero-product-ID condition. Facebook's existing warnings remain appropriate within the inspected scope; multi-instance resize and share fallback are unverified leads, not new findings.
- Actual `CompareProduct` with synthetic state and a session stub returned numeric positions instead of stored keys and did not remove a product without a category; exact-category removal succeeded. Recorded CODE-229 / #274 after open/closed comparison with #252, dry-run, creation and unchanged reconciliation; updated the comparison guide and source record. No actual Joomla session or client was exercised.
- All five pages remain partial: browser, Joomla, provider, session and accessibility behavior and full dependency paths are not verified. Issue-sync tests passed; five CSV registers parsed with unique IDs and `git diff --check` passed with pre-existing line-ending warnings.
- Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with the next individual batch; do not treat these follow-ups as completed reviews.

## Checkpoint - VAT and order-discount follow-up (ACTIVE; partial)
- Re-read the VAT overview, tax group, tax rate, currency and order-total discount pages. Continued the previously started tax form/model/table/lookup trace and traced the order-discount selector, shopper-group collection and cart calculation and configuration branches. The tax-group deletion guard depends on entity lookup; complete shared dispatch, pagination and database behavior remain to be verified. The VAT and currency pages retain their earlier individually recorded caveats and limitations; no additional approval is implied.
- Updated the order-total discount guide for the global enable switch, the existing-product-discount setting and the observed selection-order risk. Actual `Discount::getDiscount` with synthetic user and rule dependencies selected threshold 100 for order 50/150/100 and threshold 150 for order 50/100/150 at subtotal 200. The intended precedence and real database and checkout behavior are not established. Registered CODE-230, compared related open and closed issues through the synchronization workflow, ran a dry-run, created #275 and confirmed unchanged reconciliation.
- Quality check: documented issue-sync tests passed; the repository CSV parser accepted 162 page rows, 272 Core findings, 204 individual-finding rows, 273 Issue-ledger rows and 548 triage rows with unique IDs. `git diff --check` passed with pre-existing line-ending warnings. The temporary synthetic probe was deleted. An initially attempted `node --test` was unsupported by local Node 12; the documented direct test command passed. No Joomla, MySQL or checkout runtime was exercised.
- Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed individual reviews. CODE-230 is additional to the original 199. Continue the next individual batch and revisit the incomplete tax, discount, finding and private-security paths; `C:\Github\redSHOP-internal` remains unavailable.

## Checkpoint - destination and customization follow-up (ACTIVE; partial)
- Re-read the complete customization overview, country, state, postal-code and currency pages. Rechecked sidebar routes and English labels; country and state forms, validators and list queries; phone-prefix and language selector helpers; postal-code form, views, field providers, controller, save model and query; and currency form, model, table and converter paths. Selected shipping-plugin references use address postal-code values; this is not a full shipping-consumer trace.
- Existing article guidance already covers the facts checked in this pass, so no artificial article changes were made. Updated all five source-review records with actual inspected paths and explicit no-change reasons. Earlier synthetic fixtures were not rerun. Actual Joomla UI, address and shipping flows, provider behavior and database execution remain unverified.
- Quality check: source-review register parsed as 162 unique records with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue the next batch; all partial pages and private holds remain open.

## Checkpoint - CODE-001 through CODE-010 follow-up (ACTIVE; partial)
- Rechecked the COD handler, PayPal notification handler, documentation renderer, shared import/export paths, order export query, media deletion predicate, currency conversion, postal-code save and validation, order-item supplier mappings and product category-search paths. Prior isolated fixtures were not rerun. These source checks do not complete the individual finding reviews or any separate private security review.
- CODE-010: two additional product templates offer the same old category-column value. The product view obtains data through the shared model; actual routes, submissions and SQL behavior of these templates remain unverified. Recorded this as a follow-up lead rather than asserting additional affected UI or publishing new Issue evidence.
- Individual-finding register parsed as 204 unique rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. No Joomla, MySQL, browser, filesystem concurrency or payment-provider runtime was exercised. Original progress remains 0/161 fully approved (0%); 173/199 original findings have partial records, not completed individual reviews. Continue with the next batch and revisit all unresolved source, testing and private-review work.

## Checkpoint - CODE-011 through CODE-020 follow-up (ACTIVE; partial)
- Rechecked stock-image rule queries, coupon-use boundary, promotion date and award preparation, order-status validation, quotation CSV routing/model selection, user tax-request filtering, newsletter subscription state and test-message construction. Prior isolated fixtures were not rerun; these checks do not constitute full individual reviews.
- CODE-018 remains a private security hold, not a completed review. No new Issue or security information was published. Actual Joomla routing, database, checkout, mail delivery and provider behavior remain unverified.
- Individual-finding register parsed as 204 unique rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-021 through CODE-030 and return to missing source, test and private-review evidence.

## Checkpoint - CODE-021 through CODE-030 follow-up (ACTIVE; partial)
- Rechecked category description formatting paths, product navigation, SEO placeholders and alias controls, Flatpay and Bambora manifest options, and the terms reset and user helper. Prior isolated fixtures were not rerun and these source checks are not complete individual reviews.
- CODE-025, CODE-026 and CODE-027 remain unresolved private security holds; no sensitive details were published. Actual Joomla rendering, routing, form binding, payment providers and checkout remain unverified.
- Individual-finding register parsed as 204 unique rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-031 through CODE-040 and revisit missing source, tests and private-review evidence.

## Checkpoint - CODE-031 through CODE-040 follow-up (ACTIVE; partial)
- Rechecked purchase and sample coupon-duration arithmetic, wizard welcome copy, dashboard aggregation, question save/send, cart module dispatcher dependency, Who Bought product query, Product Tab asset manifest and product robots selector. Prior fixtures were not rerun and these source checks are not complete individual reviews.
- CODE-036 and CODE-037 remain private security holds; no sensitive details were published. Actual Joomla dispatcher, SQL, mail, filesystem, module installation and browser behavior remain unverified.
- Individual-finding register parsed as 204 unique rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-041 through CODE-050 and revisit missing source, test and private-review evidence.

## Checkpoint - CODE-041 through CODE-050 follow-up (ACTIVE; partial)
- Rechecked the coupon threshold, Flatpay invoice classifier, SOAP initialization, guest-review captcha call, CSV splitter/reader and gift-card issuance/mail source. No prior fixture or Joomla/provider tests were rerun in this follow-up. CODE-042 through CODE-044 and CODE-046 remain private holds.
- Cross-checked the gift-card coupon's one remaining use against the separate CODE-012/#69 guard and recorded the source-level connection under CODE-050; full issuance and redemption remain untested. Existing CODE-012 already notes this impact.
- This is not completion of the individual reviews: caller, private, actual integration and regression-test coverage remain incomplete. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-051 through CODE-060 and revisit the partial evidence.

## Checkpoint - CODE-051 through CODE-060 follow-up (ACTIVE; partial)
- Rechecked gift-card value formatting, voucher lookup and callers, voucher display/form, discount list searches, category assignment, price context and overlap validation, bulk price updates and medium form selectors. These are source follow-ups, not completed individual reviews.
- `php tests\unit\prices-list.php` and `php tests\unit\attributeprices-list.php` passed with offline doubles/SQLite; they do not prove the real overlap validator or Joomla/MySQL runtime. CODE-052 includes a separate request-state security lead requiring authorized private review; no sensitive details were synchronized. No authorized private reporting channel is available.
- Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-061 through CODE-070; revisit partial reviews and security holds when private review is possible.

## Checkpoint - CODE-061 through CODE-070 follow-up (ACTIVE; partial)
- Rechecked source for media reset, attribute deletion, attribute-set copy/save, postal-code filtering, currency duplicate validation and tax-rate joins/link. Existing CODE-062 requires private handling. Prior browser, SQL and model fixtures were not rerun; these checks do not complete the reviews.
- Register validation: 204 unique finding rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-071 through CODE-080 and revisit incomplete evidence.

## In progress - CODE-071 through CODE-080 (ACTIVE)
- Re-read the complete Product Tab guide, module manifest, entry, helper, both layouts and English language strings for CODE-077; the existing guide and CODE-077 already record the switch-value discrepancy. Compared the row divisor and image/AJAX paths with existing CODE-146, CODE-209 and CODE-083 records rather than creating duplicate findings. No Joomla form, database or storefront runtime was exercised.
- This group is incomplete. Next inspect CODE-071 through CODE-076 and CODE-078 through CODE-080 individually, compare their current Issues, and record any actual new evidence without promoting source spot checks to completed reviews. The request-state security lead recorded under CODE-052 remains blocked on an authorized private channel.

## Follow-up - CODE-071 through CODE-080 (ACTIVE; partial)
- Rechecked current date-boundary arithmetic, shipping-box ID search, shipping-method column fall-through, shipping-rate copy mapping, shipping-address link/controller selection, rating product link, Who Bought category query, user synchronization return and mail search predicates. Earlier browser/query/model fixtures and current Issue text were not rerun or fetched in this pass.
- No completed-review status is claimed. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-081 through CODE-090 and return to missing Issue comparison, fix/regression assessment and runtime/private evidence.

## In progress - CODE-081 through CODE-090 (ACTIVE)
- Extended the partial CODE-082 caller inventory with shipping export/rate, discount VAT and template/cart rendering source references. This does not establish complete calculation outcomes or financial impact; earlier helper stubs were not rerun and Issue #142 was not updated.
- Group remains incomplete: continue individually with CODE-081 and CODE-083 through CODE-090, then quality-check the group. The original full-review counts remain unchanged.

## Follow-up - CODE-081 through CODE-090 (ACTIVE; partial)
- Rechecked template selection/cache and Product Tab nullable-template use, discount table binding, gift-card fallback, category copy/save, state rendering, postal validation and template storage. Existing Issue wording and historical fixtures were not rechecked in this pass; all individual reviews remain partial.
- Register validation found 204 unique finding rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-091 through CODE-100 and revisit unresolved evidence.

## Additional CODE-082 investigation (ACTIVE; partial)
- Ran the actual exemption helper with synthetic input types and discovered a separate conditional security lead. Recorded only a nonsensitive reference under CODE-082; no public Issue or exploit details were created. Actual database result types, Joomla behavior and impact remain unverified; detailed review requires an authorized private channel.
- Continue with CODE-091 through CODE-100 and other independent work. The original full-review counts remain unchanged.

## Follow-up - CODE-091 through CODE-100 (ACTIVE; partial)
- Rechecked attribute-set deletion, accessory row removal, measurement calculator paths and callers, stock save and stockroom identifier references. CODE-093 and CODE-100 remain private holds. The earlier calculator, browser and stock fixtures were not rerun and Issue bodies were not fetched in this pass.
- Register validation found 204 unique finding rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. This is not completion of the individual reviews: original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-101 through CODE-110 and revisit unresolved evidence.

## CODE-058 regression investigation (ACTIVE; partial)
- Executed the actual current `PriceTable::check` using in-memory SQLite and Joomla doubles. An enclosing range and a self-edit enclosing a second row were accepted; contained and touching overlaps were rejected, and disjoint/same-record controls passed. Updated the finding and appended qualified evidence to #120 after a dry-run; subsequent dry-run was unchanged.
- This fixture is not Joomla/MySQL or storefront verification. Attribute-price validation, zero-boundary policy and actual persistence remain outstanding; original full-review counts remain unchanged. Continue with CODE-101 through CODE-110.

## Follow-up - CODE-101 through CODE-110 (ACTIVE; partial)
- Rechecked related-product serialization/parser, quantity-selectbox references, shipping postal inputs and rate helper, wrapper pricing, all-products update and image upload paths. CODE-106 and CODE-108 remain private holds. Previous fixtures and Issue bodies were not rerun or fetched for this pass; all reviews remain partial.
- `node docs-review\issue-sync.test.js` passed; the individual register parsed as 204 unique rows with 11 columns and `git diff --check` passed with pre-existing line-ending warnings. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-111 through CODE-120.

## Follow-up - CODE-111 through CODE-120 (ACTIVE; partial)
- Rechecked image-layout branches, newsletter toolbar/grid and recipient progress, question date and mail paths, shared date formatting, newsletter name lookup and country-sort configuration. CODE-119 remains a private hold. Prior fixtures and current Issue text were not rerun or fetched in this pass.
- Register validation found 204 unique finding rows with 11 columns; `git diff --check` passed with pre-existing line-ending warnings. These source checks do not complete the reviews. Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-121 through CODE-130.

## Product Tab category context investigation (ACTIVE; partial)
- Re-read the complete Product Tab guide, manifest, entry, helper, both layouts and English language strings. The actual helper with synthetic input returned product-view ID 7 as category 7; a category-view control returned 7 plus a stubbed child and a zero-ID control returned 0. The associated list query uses a nonzero result as a category filter; actual routing, database and storefront behavior remain unverified.
- Added a qualified guide warning and registered CODE-231. Compared open #137: that issue concerns textual No being interpreted as enabled, while this finding occurs with adjustment enabled on a non-category view. After distinct comparison and dry-run, created #276 and confirmed unchanged reconciliation.
- Issue-sync tests passed; the five registers parsed with unique keys (273 Core findings, 205 individual rows, 274 Issue-ledger rows, 549 triage rows, 162 page rows). The guide installation link target exists; `git diff --check` passed with pre-existing line-ending warnings. No full manual renderer, Joomla or browser was run.
- Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. Continue with CODE-121 through CODE-130 and remaining page batches; CODE-231 is additional to the original 199.

## Product Tab sale-price investigation (ACTIVE; partial)
- The default tab layout reads a discount-layout variable absent from the inspected module entry and parent layout. The actual layout with synthetic prices 100 and 80 warned and displayed 80; non-sale and hidden-price controls produced no warnings. Inherited module scope, real Joomla error handling and sale-price presentation intent remain unverified. Fixture: `files/product-tab-price-probe.php` in this session.
- Updated the Product Tab guide and registered CODE-232. Compared #254 (image arguments), #143 (AJAX template count) and #137 (textual switches); after dry-run created #277, fetched it and confirmed an unchanged subsequent reconciliation.
- Issue synchronization tests passed. All five ledgers parsed with unique keys (274 Core findings, 206 individual rows, 275 Issue rows, 550 triage rows, 162 page rows); documentation `git diff --check` passed with existing line-ending warnings.
- Original inventory remains 0/161 fully approved (0%); 173/199 original findings have partial records. CODE-232 is additional to that inventory. Continue genuinely individual reviews and remaining Product Tab pricing and cart helper traces; do not treat these partial investigations as completed reviews.

## CODE-121–130 follow-up (ACTIVE; partial)
- Re-read current source and fetched current Issues for CODE-121–128 and CODE-130; updated their individual records. #180 remains closed despite its owner comment requesting further UAT and an open status; no status was changed. #181 is closed with merged #245. CODE-129 remains a security hold requiring an authorized private channel; no sensitive details were disclosed.
- `php tests\unit\fieldgroups-ordering.php` and `php tests\unit\shippingrates-pagination.php` passed. These do not verify actual Joomla selector behavior or deletion. Five ledgers parsed with unique keys; `git diff --check` passed with existing line-ending warnings.
- Product Tab follow-up also documented the short-description parameter and price visibility gates from the entry, manifest, layout and partially traced price helpers. No actual Joomla, browser, checkout or database was exercised. The page and findings remain partial; original approved-page progress is still 0/161 (0%), and 173/199 original findings have partial records. Next: continue CODE-131–140 and remaining page reviews, preserving the private holds.

## CODE-131–140 follow-up (ACTIVE; partial)
- Re-read current source and fetched current Issues for CODE-131–136 and CODE-138–140; updated individual records without claiming complete reviews. CODE-137 remains on private security hold. CODE-132: both actual shipping-box renderers with synthetic dependencies returned IDs 1/2/4 for priorities 1/1/2/2 and 1 for 1/2/3; an equal-priority control returned all IDs. Fixture: `files/shipping-box-priority-probe.php` in this session. Query, actual layout system, checkout and intended priority policy remain unverified.
- Updated CODE-132 handoffs and #186 through a dry-run and marked comment; fetched the comment and confirmed unchanged reconciliation. Issue-sync tests and unique-key checks for all five ledgers passed; `git diff --check` passed with existing line-ending warnings.
- Original approved-page progress remains 0/161 (0%); 173/199 original findings have partial records, not completed individual reviews. Next: continue CODE-141–150, remaining page reviews and the Product Tab helper traces. No Joomla, browser, provider or database runtime was exercised.

## CODE-141–150 follow-up (ACTIVE; partial)
- Re-read current handler, module, cart and layout source and fetched #194–203; updated the individual rows with the source and Issue checks and explicitly marked prior fixtures not rerun. #201's existing comment already covers the missing Ordering comparator. These checks do not establish provider behavior, actual Joomla event dispatch, checkout totals or browser rendering; no finding was promoted to fully reviewed.
- Five ledgers parsed with unique keys; `git diff --check` passed with existing line-ending warnings. No new runtime tests were run in this follow-up.
- Original approved-page progress remains 0/161 (0%); 173/199 original findings have partial records. Next: continue CODE-151–160 and remaining individual page work, including Product Tab's incompletely traced cart and price dependencies.

## CODE-151–160 follow-up (ACTIVE; partial)
- Re-read current source and fetched #204–213, including #205's evidence comments; updated the individual rows with what was actually checked. Existing tests and fixtures were not rerun in this follow-up. Joomla, database, actual provider, browser and mail behavior remain unverified where indicated.
- Five ledgers parsed with unique keys; `git diff --check` passed with existing line-ending warnings. No finding was promoted to fully reviewed.
- Original approved-page progress remains 0/161 (0%); 173/199 original findings have partial records. Next: continue CODE-161–170 and remaining individual page work, not automated register-only review.

## Shipping-box source follow-up (ACTIVE; partial)
- Re-read the complete shipping-box guide, form and filter XML, English field strings, box list model/table/controllers and relevant shared view, inline controller, form-save path and JavaScript. Rechecked box selection and four carrier call sites. Added Enter/Escape guidance and concise customer warnings; the exact scope and remaining inherited/dispatch paths are in `SOURCE-REVIEW-REGISTER.csv`. The page is not approved.
- CODE-233 / #278: actual cart estimator with an empty synthetic cart and stubbed dimensions passed the final dimension array to volume quoting and used candidate lengths for height bounds. The quote implementation was stubbed; real driver and query behavior remain unverified. Compared #238, #189, #163 and #162; controlled distinct dry-run, creation, Issue fetch and unchanged reconciliation passed. CODE-104's malformed SQL is a separate defect which may mask this one.
- CODE-234 / #279: actual box-dimension helper with a synthetic query stub threw PHP 8.4 `TypeError` for a returned object and null; zero-ID control returned `[]` without a query. UPS, USPSv4 and FedEx source call the helper for a nonempty selected box; Bring does so when its use-box option is enabled. CODE-139's earlier USPS address error may mask the latter path. Compared #278, #192, #186, #163 and #161; distinct dry-run, creation, Issue fetch and unchanged reconciliation passed. Priority P1 is provisional pending actual impact.
- Fixtures are `files/shipping-rate-dimensions-probe.php` and `files/shipping-box-dimensions-probe.php` in this session. Issue-sync tests passed; all five ledgers parsed with unique IDs (276 Core findings, 208 individual records, 552 triage, 277 Issue ledger, 162 page records); `git diff --check` passed with existing line-ending warnings. No real Joomla database, storefront, checkout, event dispatch or carrier was exercised.
- Local Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`, clean; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` with existing dirty work preserved. Graphify index `647c0dc795265544ea000acb0c9217da609db544` remains stale. The private handbook is absent.
- Progress remains **0/161 fully approved original pages (0%)** and **173/199 original findings with partial records (86.9%)**; partial records are not completed reviews. CODE-233 and CODE-234 are additional findings. Continue CODE-161–170 source and current-Issue follow-up, then remaining batches and incomplete shipping-box paths; keep security holds private.

## CODE-161–170 follow-up (ACTIVE; partial)
- Re-read current source and fetched #214–222 for CODE-161–167, 169 and 170; inspected relevant #214, #215, #216 and #217 comments. Prior fixtures were not rerun. CODE-168 remains a security hold requiring an authorized private channel; it was not treated as an ordinary Issue or completed review.
- For CODE-162 and CODE-163, traced checkout's first-cart-product delivery estimate into the `order_delivery` input, order-template `{delivery_time}` replacement and the source path invoking order mail. Whether and how it appears depends on request and template and is unverified. Added specific same/separate-request and mail-sink regression guidance to #215 and #216 via dry-run and controlled comments; fetched both comments and verified unchanged reconciliation.
- Individual records explicitly preserve outstanding runtime and semantic uncertainties. Issue-sync tests and five CSV structure/unique-key checks passed; `git diff --check` passed with existing line-ending warnings. No real Joomla, database, mail, storefront or checkout was exercised.
- Original progress remains **0/161 fully approved pages (0%)** and **173/199 original findings with partial records (86.9%)**, not completed individual reviews. Next: CODE-171–180, unfinished shipping-box paths and other partial pages. Security holds remain private.

## CODE-171–180 follow-up (ACTIVE; partial)
- Followed up nine ordinary entries against current source and open Issues #223–231; the individual records distinguish earlier fixtures from this source follow-up. CODE-174 remains a private security hold and was not reviewed via an ordinary Issue. No finding was promoted to fully reviewed.
- Prior fixtures were not rerun. Actual Joomla, browser, MySQL, checkout and dispatch remain unverified where applicable. Issue-sync tests passed; five CSV registers parsed with unique keys; `git diff --check` passed with existing line-ending warnings.
- Original progress remains **0/161 fully approved pages (0%)** and **173/199 findings with partial records (86.9%)**, not completed individual reviews. Next: CODE-181–190 and unfinished source paths for pages and earlier findings. No Core fixes, commits, pushes or publication.

## CODE-181–190 follow-up (ACTIVE; partial)
- Re-read current wizard, tax-rate save, order-reset UI/controller, ePay option and payment-form source and gift-card storage, and fetched open Issues #232–237. Updated six individual records; no new Issue comment was needed. Prior fixtures were not rerun. Four findings (CODE-183, CODE-184, CODE-189 and CODE-190) remain private security holds and are not represented as completed reviews.
- Tax-rate source also leaves its result unset for an empty association list; #234 already asks for an empty-groups test. Whether that input is reachable and actual driver behavior are unverified. Joomla, filesystem, provider, browser and database runtime remain untested.
- Issue-sync tests passed; five registers parsed with unique keys; `git diff --check` passed with existing line-ending warnings. Original progress remains **0/161 fully approved pages (0%)** and **173/199 findings with partial records (86.9%)**, not completed individual reviews. Next: CODE-191–199 and unfinished page and finding paths.

## CODE-191–199 follow-up (ACTIVE; partial)
- Re-read free-shipping, cart, Facebook, category-menu and PayPal source and fetched open Issues #238–244 and applicable existing comments. Seven ordinary records remain partial; CODE-196 and CODE-199 remain private holds. No previous fixture was rerun.
- For CODE-198, traced `CurrencyHelper::convert` dispatch and both conversion implementations: the implementations use the session currency for a falsey target, unless a plugin handles conversion earlier. The resulting value and PayPal behavior depend on actual settings and were not tested. The PayPal manifest changed since the old Issue revision; its currency mismatch remains in current source.
- Issue-sync tests passed; five registers parsed with unique keys; `git diff --check` passed with existing line-ending warnings. No real Joomla, supported database, browser, checkout or provider was exercised. Original progress remains **0/161 fully approved pages (0%)** and **173/199 findings with partial records (86.9%)**, not completed individual reviews. Next: continue unfinished shipping-box page/controller paths and individual page batches; private holds remain pending an authorized private channel.
