# Resume GitHub Issue and documentation work

## PAUSED — controlled checkpoint, 2026-11-27

The maintainer explicitly paused the project after the current stage. Do not
resume project actions, issue writes, documentation work or autonomous loops
without a new explicit resume. Older ACTIVE entries and next-action statements
below are historical and superseded by this checkpoint.

- Current stage completed as a bounded partial source investigation: wishlist
  guest button markup and the actual JavaScript handler disagree about the form
  target. With synthetic attributes matching the layout and DOM stubs, the
  handler prevented default and submitted nothing; supplying the expected
  target caused the control to submit. CODE-281 / #321 created after a dry-run
  and reconciled; labels checked. Guide and review registers updated. Real
  browser, Joomla, session persistence, registered flow and overrides remain
  unverified. No new security hold or completed security review.
- Prior related-products follow-up: CODE-210 / #255 received an evidence
  comment after dry-run, then reconciled unchanged. Its actual module entry
  with stubs skipped lookup for `id=42`, but called it for `pid=42`; real
  routing and menu selection remain unverified.
- Core `develop` HEAD `ff72aba6939637ed8fd55d4acc4c109f641adccc`;
  documentation `modernize` HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`;
  legacy extensions `master` HEAD `68c3819e1fa444a1bd3c46322045d4820a52fea6`.
  Core has two modified project instruction files; documentation has 141
  tracked modified and 32 untracked files, no deletions or staged files;
  legacy extensions clean. Preserve every worktree change.
- Validation: wishlist JavaScript isolated handler/control probe passed; both
  changed guides rendered in the recent passes; Issue-sync tests and dry-run
  reconciliations passed; eight CSV key checks and `git diff --check` passed
  with line-ending warnings. Common credential-pattern scan found no matches
  in 173 changed/new documentation files; it is not a privacy or security
  clearance. GitKraken detail access was denied; GitHub read and the controlled
  sync worked. No real Joomla, browser, database, provider or production test.
- On explicit resumption: compare current branches, HEADs and worktrees with
  this checkpoint, inspect relevant Core/plugin/module/library/Marketplace
  changes and current GitHub Issues, reverify affected findings and revisit
  changed documentation. Preserve unrelated work and do not repeat still-valid
  reviews. Next investigate the guest wishlist link and registered add/remove
  flows and their template/handler contracts; distinguish them from #321 and
  review existing Issues before any write. The full remaining workstreams,
  metrics, blockers and commit cautions are in `WORK-PROGRESS.md`.

The earlier continuous loop is suspended until explicit resumption. Existing
no-Core-fix, no-commit, no-push, no-publication, no-live-site and private
security restrictions remain.

- CODE-210 / #255: related-products entry also reads `pid`; its actual entry
  with input/helper stubs skipped lookup for `id=42` and called it for
  `pid=42`. Reused the existing product-context investigation, updated guide
  and evidence, dry-ran synchronization, appended evidence and reconciled
  unchanged. Existing priority retained; real Joomla routing, menu context,
  database results and storefront remain unverified. Next: individually trace
  wishlist add/remove behavior and update its partial guide as warranted.
- Related Products: added a partial guide and navigation after inspecting the
  manifest, entry, layout and selected related-product and image helper paths.
  Actual entry with enabled/selected stockroom and stubs raised a null query
  error in isolated include scope; no-selection control rendered. Created
  #320 / CODE-280 after duplicate checks and dry-run, reconciled unchanged and
  verified labels. Joomla include scope, database and storefront unverified.
  Guide/navigation rendering, links, Issue-sync tests, registry key uniqueness
  and whitespace passed. Inventory 128/385 partial mappings (33.2%), 257 need
  mapping; 322 Core findings, 249 individual records, 323 ledger rows
  (251 synced, 57 private holds, 15 test-only), 598 triage and 183 page/source
  records. Next: continue individual wishlist or other unfinished module paths.
- Product Slideshow: added partial guide/navigation after inspecting manifest,
  entry, selected helper paths and default layout. Actual layout with distinct
  synthetic product lists and stubbed asset calls rendered the same two
  placeholder images. Created #319 / CODE-279 after duplicate checks and
  dry-run, reconciled unchanged and verified labels. No real XML write,
  product query, external asset, Joomla or browser was tested. Guide and
  navigation rendered, links, Issue-sync tests, registry key uniqueness and
  whitespace passed. Inventory 127/385 partial mappings (33.0%), 258 need
  mapping; 321 Core findings, 248 individual records, 322 ledger rows
  (250 synced, 57 private holds, 15 test-only), 597 triage and 182 page/source
  records. Next: continue individual wishlist or other unfinished module paths.
- CODE-278: actual Main Category Scroller `getPathThumbnail` with no full media,
  a synthetic existing fallback file and stubs failed on `generateThumb` on
  null; without a configured fallback the no-image control returned normally.
  Updated the partial guide and created #318 after duplicate checks, distinguishing
  #316's separate layout failure; reconciled unchanged and verified labels.
  Guide rendering, Issue-sync tests, registry key uniqueness and whitespace
  passed. Real image processing, Joomla and storefront remain untested.
  Totals: 320 Core findings, 247 individual records, 321 ledger rows
  (249 synced, 57 private holds, 15 test-only), 596 triage; inventory remains
  126/385 partial mappings (32.7%), with 259 needing mapping. Continue the
  next unfinished individual source path; do not treat holds as reviewed.
- Featured Product module: added a partial guide and navigation after reading
  the manifest, entry, helper, layout, language and selected image and pricing
  signatures. Documented featured/published selection, discontinuation setting
  and options without claiming installed behavior. Inventory 126/385 partial
  mappings (32.7%), 259 need mapping; 181 page/source records. Guide and
  navigation rendered, links, mapping, page-key uniqueness and whitespace
  passed. No new issue or Joomla, database, carousel, pricing or checkout
  runtime verification. Next: continue individual wishlist or other unfinished
  module paths and potential findings.
- Minicart: added a partial guide and navigation after inspecting its manifest,
  entry, layout, CSS, language and selected shared cart calculation paths.
  Actual default layout with a fixed synthetic populated cart and stubs
  rendered identically with all four manifest display options on and off;
  shared calculator reads a published Cart module record. Created #317 /
  CODE-277 after duplicate searches and dry-run; reconciled unchanged and
  verified labels. No real cart recalculation, Joomla, browser or checkout
  tested. Guide/navigation rendering, links, Issue-sync tests and whitespace
  passed. Inventory 125/385 partial mappings (32.5%), 260 need mapping;
  319 Core findings, 246 individual records, 320 ledger rows (248 synced,
  57 private holds, 15 test-only), 595 triage and 180 page/source records.
  Next: continue individual wishlist or other unfinished module source paths.
- Wishlist module: added a partial guide and navigation based on its manifest,
  entry, helper, layout, language, installer, selected shared wishlist helper
  paths and feature defaults. Explained that the module's nonempty list check
  does not establish that products are saved. Compared shopper-group category,
  product and logo and Tags Similar manifests with existing guides and prior
  source records. Mapped all five partial: 124/385 (32.2%), 261 need mapping;
  179 page/source records. Guide and navigation rendered, links, mapping
  targets, page-key uniqueness and whitespace passed. No new issue; no Joomla
  session, wishlist persistence, browser, accessibility or private security
  assessment was performed. Next: continue individual modules and feature
  paths, including wishlist add/remove behavior where actionable.
- Five more module mappings: compared newsletter, price filtering, product
  comparison, search and Who Bought manifests and selected entry/layout paths
  with their existing guides and prior source records. Relevant module source
  was unchanged since the older recorded revision. Mapped all five partial:
  119/385 (30.9%), 266 needing mapping. Guides rendered and their chapter
  links and mapping targets resolved; whitespace check passed. No new issue or
  article change in this limited pass. Joomla sessions, search, pricing,
  checkout, mail and private holds remain unverified. Next: continue individual
  shopper-group modules and other unmapped source paths.
- Category scrollers: added a partial guide and navigation distinguishing
  category listings from the category product scroller, after inspecting both
  manifests, entries, layouts, helper, language and Marketplace classification.
  The actual main-category layout with a synthetic category and router stub
  raised PHP 8.4 TypeError for both integer and null menu IDs; router source
  returns an ID or null. Created #316 / CODE-276 after duplicate searches and a
  dry-run, corrected its source anchor in a follow-up and reconciled unchanged.
  Mapped both scrollers and Mega Menu partial: inventory 114/385 (29.6%), 271
  needing mapping. Totals: 318 Core findings, 245 individual records, 319
  ledger entries (247 synced, 57 private holds, 15 test-only), 594 triage and
  178 page/source records. Guide and navigation rendered, links, registry keys,
  issue-sync tests and whitespace passed. An initial renderer check incorrectly
  required a heading in the list-only menu; corrected check passed. No Joomla,
  browser, actual router, database, package or checkout runtime was tested.
  Next: continue another unfinished module, page or finding; keep holds private.
- Module mapping continuation: compared cart, category, manufacturer scroller,
  redMASSCART and product-tab manifests and selected entry/layout code with
  their existing guides and prior source reviews. Confirmed relevant older
  module paths are unchanged since their recorded Core revision. Mapped all
  five partial, not complete: 111/385 (28.8%) partial mappings and 274 needing
  mapping. Target existence, inventory statuses and whitespace checks passed.
  No new issue or article change was warranted by this limited pass; Joomla,
  checkout, browser, module packaging and private security holds remain
  unverified. Next: continue the Mega Menu manifest and other unmapped module
  source paths, then other incomplete work.
- Product-in-content follow-up: added a partial guide and navigation for the
  separately distributed content replacement and editor button plugins.
  The actual button with stubs generates a singular product-view URL while
  the selector template is in the plural view; #314 created after duplicate
  checks and dry-run, then reconciled unchanged. Template lookup filters for
  published records. No actual Joomla editor/modal, product rendering or
  storefront was tested. Registry validation identified three older statistics
  source rows missing the quality column; restored their partial status.
  Function inventory: 84/385 partial mappings (21.8%), 301 need mapping;
  79 are admin forms. 316 Core findings, 243 individual records, 317 ledger
  rows (245 synced, 57 private holds, 15 test-only), 592 triage entries and
  175 page and source records. Next: continue AcyMailing product integration
  source review and other unfinished individual pages; keep private holds private.
- AcyMailing follow-up: its actual `getProduct` with synthetic product data and
  image-helper stub passed the configured image width as the image product ID.
  Added this caller to #254 after a dry-run and reconciled; real image lookup
  and AcyMailing preview/email were not run. Documented its distinct product
  tags and published template requirement, and linked from the separate
  redSHOP newsletter guide. Also documented the optional Quick Icon plugin's
  group match and mapped its manifest partial; Joomla module/ACL unverified.
  Function inventory now 86/385 partial mappings (22.3%), 299 need mapping.
  Guide rendering, links, Issue-sync tests, registry shape and whitespace
  checks passed. Continue the next unfinished plugin or page source review.
- Export follow-up: compared category and product export manifests and
  selected source paths with the existing guide. Added that category CSV image
  names are not image-file backups; mapped both manifests partial. The guide
  rendered and its chapter links resolved. Inventory is 88/385 partial
  mappings (22.9%), with 297 needing mapping. No real Joomla export, database,
  media filesystem or re-import was tested. Continue other export adapters or
  unfinished individual pages, keeping security holds private.
- Export continuation: compared manufacturer and related-product manifests
  and query/processing source. Clarified grouped product IDs and image
  references for manufacturers and the two related-product SKU columns.
  Mapped both manifests partial; guide rendering, links, registry checks and
  whitespace passed. Inventory is 90/385 partial mappings (23.4%), 295 need
  mapping. No actual Joomla SQL/export or media was tested. Continue remaining
  export adapters and unfinished page paths.
- Export continuation: compared the product-stockroom manifest, headers and
  association query and the order export manifest with existing reviewed order
  evidence. Clarified stockroom CSV columns and association scope; mapped both
  manifests partial. Guide rendering, registry checks and whitespace passed.
  Inventory is 92/385 partial mappings (23.9%), 293 need mapping. No Joomla SQL
  or actual export was tested. Continue other export plugins and page reviews.
- Export continuation: compared shopper-group product-price and option-price
  manifests, headers and queries. Documented price columns, property and
  sub-property scope and exclusion of empty product numbers in the product-price
  query; mapped both manifests partial. Guide rendering, registry checks and
  whitespace passed. Inventory is 94/385 partial mappings (24.4%), 291 need
  mapping. No actual Joomla/database export or price calculation was tested.
  Continue remaining adapters and unfinished page reviews.
- Export continuation: compared user, shipping-address and subscriber export
  manifests, headers and queries. Clarified their record scope, the empty
  password column and that exported subscriber columns do not establish consent
  or publication state. Mapped all three partial. Guide rendering, registry
  and whitespace checks passed; no actual Joomla/database export was tested.
  Inventory is 97/385 partial mappings (25.2%), 288 need mapping. Next: review
  remaining attribute and custom-field export adapters and other page paths.
- Export continuation: compared attribute and custom-field manifests, headers
  and relevant selector/query paths. Clarified multi-product filtering and the
  product join in field-data exports; mapped both partial. Guide rendering,
  registry and whitespace checks passed. Inventory is 99/385 partial mappings
  (25.7%), 286 need mapping. Adapter review is partial, not runtime verification.
  Next: continue individual page and feature review outside export adapters.
- Product search integrations: added a partial guide and navigation separating
  the Smart Search product indexer, legacy content-search plugin and redSHOP
  Search module. Compared manifests, defaults and selected index/query/event
  source; mapped both plugin manifests partial. Four guides/navigation rendered,
  links and registry keys/shape passed; no actual Joomla index, browser,
  permissions or search was tested. Inventory 101/385 partial mappings
  (26.2%), 284 need mapping; 176 page/source records. Next: continue finder
  event paths or another incomplete integration and page batch.
- CODE-275: actual category export processing with synthetic rows and media
  stubs repeated absent main-image lookups, emitted warnings and did not ask
  for the independently stubbed thumbnail; populated-main-image control reached
  the thumbnail lookup. #315 created after duplicate checks and dry-run and
  reconciled unchanged. Guide warns about the possible missing thumbnail.
  Fixture, Issue-sync tests, guide rendering, registry checks and whitespace
  passed. No Joomla export, real database or image file was tested. Current
  counts: 317 Core findings, 244 individual records, 318 ledger entries
  (246 synced, 57 private holds, 15 test-only), 593 triage and 176 page/source
  records. Continue individual pages and other export/image paths.
- Backend access: added a partial guide and navigation after inspecting the
  access form, menu, view, model, controller and action declarations. Described
  the separate backend rules screen and isolated group testing without claiming
  enforcement. Mapped the admin form partial; guide/navigation rendering, link
  and registry checks passed. Inventory 102/385 partial mappings (26.5%),
  including 80 admin forms; 283 need mapping. Page/source records are 177.
  No actual Joomla ACL persistence, inheritance or enforcement was tested;
  private holds remain private. Continue the next unfinished page or feature.
- Discount and login greeting modules: compared current manifests, entries and
  layouts with their existing guides; rechecked the current billing-name
  helper and verified the discount User/Discount helper paths unchanged since
  the prior review. Mapped both manifests partial, without modifying already
  accurate guides. Both rendered and their links resolved. Inventory is 104/385
  partial mappings (27.0%), 281 need mapping. No Joomla runtime or private
  security assessment was performed; the greeting hold remains private.
  Continue individual module and page reviews.
- Currency and free-shipping modules: compared current manifests, entries and
  layouts plus the currency helper with their existing guides and prior rate
  review. Mapped both manifests partial; guides rendered, links, registry and
  whitespace checks passed. Inventory is 106/385 partial mappings (27.5%),
  279 need mapping. No real session, provider, checkout or Joomla runtime was
  tested. Continue other unmapped module paths and incomplete page reviews.
- Attribute follow-up: the actual attribute and redSHOP base models with
  application and Joomla base stubs rejected the status heading's dotted
  ordering field and fell back to ID in both directions; name and unqualified
  status controls were accepted. #305 created after comparison with #303,
  dry-run and reconciliation. The guide cautions about the heading. #304's
  source anchor was corrected and an evidence comment synchronized. The
  price guide now distinguishes option prices from product price rules and
  documents tested source controls and the source-only overlap limitation.
  `attributeprices-list.php` and issue-sync tests passed; actual Joomla browser,
  database and storefront pricing remain unverified. Next: continue individual
  attribute property price calculations and remaining partial page paths.
  CODE-264 is a source-only private hold with no ordinary Issue; runtime impact
  and exploitability are unverified and an authorized private reporting
  channel is unavailable. Do not treat the hold as a completed review.
- CODE-058 follow-up: actual attribute-price table check and endpoint helpers
  with in-memory SQLite and Joomla/database doubles accepted a range enclosing
  an existing range; contained and disjoint controls behaved as expected.
  A zero-start enclosing range also passed; a positive start with zero end
  failed quantity-order validation, and matching IDs across distinct sections
  interfered with validation in the isolated fixture.
  #120 updated after dry-run and reconciled unchanged. Earlier product-price
  fixture was not rerun; validator source unchanged since its recorded revision.
  Linked the product editor guide to the new option-price guidance.
  The attribute-set editor reaches the same nested option layouts; its guide
  now links the option-price cautions too. This is source-only, not a full
  attribute-set form or pricing runtime verification.
  Real Joomla, MySQL and storefront behavior remain unverified. Next: continue
  remaining price edge cases and other partial page paths.
- Attribute stockroom follow-up: actual ProductModel with SQLite and lookup,
  application and event stubs persisted an earlier row before rejecting a
  later row; reversed failure and valid controls passed. Added a dialog
  caution and #306 after comparing #157 and #228; dry-run and reconciliation
  passed. Joomla dispatch, MySQL, browser and event effects remain unverified.
  An empty association lookup produced warnings before a stubbed insertion;
  #307 created and reconciled separately. Real insertion and Joomla error
  handling remain unverified.
  Next: continue inventory, option and remaining partial page paths.
- Product attribute list: added a partial source-backed guide and navigation;
  mapped editor and filter forms, plus the independently checked state filter.
  Actual AttributesModel with list-state/query stubs ignored nested product
  input; actual bundled Joomla table binding with event stubs ignored the
  editor publication field on a schema-shaped object. #303 and #304 created
  after dry-run and reconciled. Full Joomla form submission, table construction,
  database and storefront remain unverified. Next: continue individual product
  attribute properties and other incomplete page paths.
- Postal-code and stock-image filters: compared both XML forms with current
  list models and the stock-image view. Documented the postal-code model's ID
  ascending default and mapped both filters; stock-image filters remain hidden.
  Rendered both guides and checked XML counts and targets. Source-only; actual
  Joomla lists, media and database remain unverified. Next: continue individual
  page and function reviews.
- Newsletter follow-up: re-read newsletter and subscriber forms and current
  list models. Documented that subscriber user and newsletter headings sort
  by stored IDs rather than displayed names. Mapped both filters and the
  subscription form; rendered the articles and checked inventory targets and
  XML counts. Source-only follow-up; Joomla list, consent and mail runtime
  remain unverified. The actual unsubscribe helper returned success without a
  query for a guest and empty email; checkout has a sign-off branch that passes
  no email. #302 created after comparing #284 and #189; reachability and real
  checkout remain unverified. Next: continue individual newsletter recipient/consent
  paths or another incomplete page; private holds remain private.
- Customer tags: added a partial source-backed guide and navigation. The
  list counts association rows rather than distinct users or products, and
  tag records can be shared. Full actions, database and storefront behavior
  remain unverified. Actual admin model with SQLite and stubs returned false
  for publication against schema-shaped tables and returned success for
  uncommitted single and ineffective multi-ID deletion. #298 and #299 were
  created after dry-run and reconciled unchanged. Actual redSHOP base task
  execution with task-map stubs fell back to display for missing toolbar tasks;
  #300 created and reconciled. Full factory and UI dispatch remain unverified.
  Actual account Twig with synthetic context emitted literal PHP detail links
  and an identifier that actual editTag rejected with a stub table. #301 was
  created and reconciled; full browser and database behavior is unverified.
  CODE-255 is held for
  authorized private review; no
  ordinary Issue created, and exposure and exploitability are unverified.
  Next: independently verify tag list actions and persistence, while keeping
  security investigation private, then continue other partial page paths.
- Text Library follow-up: added a partial source-backed guide and navigation;
  mapped both text forms after verifying their field counts. The published-text
  replacement helper reads all sections without a section restriction, so the
  guide recommends distinct names and testing individual template paths.
  Guide and navigation rendered, chapter targets and inventory keys checked.
  Actual Joomla editor, database, browser and newsletter delivery remain
  unverified. Next: continue individual source paths and other partial pages.
- Currency follow-up: actual Currency Layer initialization with a controlled
  clock and mocked provider retained an old cache on an eligible refresh;
  no-cache control used fetched rates. Added guidance and created #292 after
  comparison with #72 and #264, dry-run and unchanged reconciliation.
  Real Joomla, provider, checkout and accounting remain unverified.
- Sample follow-up: added a partial source-backed guide and navigation.
  Actual sample save with SQLite and stubs regenerated a colour ID and removed
  rows when input was missing. Created #294 after dry-run and reconciled.
  Actual Twig with schema-shaped rows and a stub helper omitted names and
  passed null; equivalent SQLite detail join failed on an old column. Created
  #295 after dry-run and reconciled. Joomla, MySQL, inline edits and existing
  requests remain unverified. Actual bulk-request model with SQLite and query
  stubs returned success without changing multiple selected IDs; #296 created
  and reconciled. For catalogue and sample requests actual redSHOP base
  dispatch with task-map stubs and the bundled Joomla grid helper showed task
  and selection mismatches; #297 created and reconciled. Full dispatch and
  UI remain unverified. Next: continue other request and page paths.
- Catalogue follow-up: added a partial source-backed guide and navigation.
  Actual mail method with a database stub failed to resolve its helper;
  separate actual-controller probe selected a success message with a failed
  mail stub. #293 was created and updated after dry-runs and reconciled.
  CODE-250 is held for private review; no ordinary Issue created. Real Joomla,
  browser, request persistence and mail remain unverified. Next: continue
  remaining partial catalogue request/media paths and other page batches.
- Function inventory: mapped 46 existing administrator forms to their
  source-reviewed guides after checking current XML field counts and target
  files. That earlier pass reached 48 of 385 partial mappings (12.5%).
  Corrected the template form count: three fields are XML comments, not active.
  This is not complete feature coverage or runtime verification. Continue
  mapping against individually reviewed sources, not names alone.
- Stockroom filter follow-up: compared the one-field form and current
  `StockroomsModel` search and ordering against the stockroom guide. Mapped
  the filter as partial, without a Joomla runtime claim. Field-group filter
  follow-up compared its two fields with the model and existing guide and
  mapped it as partial; the field-group ordering fixture passed. The custom
  field list filter was also mapped after source comparison. CODE-267 is a
  source-only private hold with no ordinary Issue; runtime impact and
  exploitability are unverified and the authorized reporting channel is
  unavailable. Function inventory
  previously reached 53/385 partial mappings (13.8%), including 51 admin forms, after
  comparing gift-card and mail filter forms and list queries with their guides.
- Category filter follow-up: compared all three fields with the category
  list model and guide, including template assignment rather than filtering.
  The mapping is partial and Joomla behavior remains unverified. Inventory
  previously reached 54/385 partial mappings (14.0%), including 52 admin forms.
- Manufacturer filter follow-up: compared the search form and list query with
  the guide. Mapped it as partial; inventory then had 55/385 partial mappings
  (14.3%), including 53 admin forms. Joomla runtime remains unverified.
- Order list filter follow-up: compared all seven fields and the search and
  date query with the guide; documented the differing search-space handling.
  Mapped the form as partial. Inventory then had 56/385 partial mappings (14.5%),
  including 54 admin forms; 329 entries needed mapping. No Joomla UI or database
  runtime verification.
- Order-status filter follow-up: compared the search form and list query with
  the guide and documented its default ordering. Inventory then had 57/385
  partial mappings (14.8%), including 55 admin forms; 328 entries need mapping.
- Mass-discount filter follow-up: compared both fields and the list query with
  the guide. Mapped partial; inventory now has 58/385 partial mappings (15.1%),
  including 56 admin forms; 327 need mapping. No Joomla UI or database runtime
  verification.
- Media filter follow-up: the default template renders its own type and section
  controls rather than the three fields in `filter_media.xml`; current list
  query reads the separate media states. Left this XML form unmapped pending
  alternate-layout and runtime tracing.
- Promotion filter follow-up: compared its search form and current list query
  with the guide and mapped it partial. Inventory then had 59/385 partial
  mappings (15.3%), including 57 admin forms; 326 needed mapping.
- Questions filter follow-up: compared both fields and the current list query
  with the guide and documented top-level questions and default order. Inventory
  then had 60/385 partial mappings (15.6%), including 58 admin forms; 325 needed
  mapping. No Joomla UI or database runtime verification.
- Ratings filter follow-up: compared the search form and list query with the
  guide and documented default order. Inventory then had 61/385 partial mappings
  (15.8%), including 59 admin forms; 324 needed mapping.
- Shipping-box filter follow-up: compared the search form and current query
  with the guide; the existing ID-search warning still matches the source.
  Mapped partial. Inventory then had 62/385 partial mappings (16.1%), including
  60 admin forms; 323 needed mapping. No Joomla UI or database runtime test.
- Shipping-method filter follow-up: compared its XML, list model, view and
  shared layout; documented that the default view hides filters. Inventory now
  then had 63/385 partial mappings (16.4%), including 61 admin forms; 322 needed
  mapping. No Joomla UI or database runtime verification.
- Plugin-list follow-up: compared six filter fields, list model, menu and view;
  added navigation and the metadata-based selection caveat to the overview.
  Inventory then had 64/385 partial mappings (16.6%), including 62 admin forms;
  321 needed mapping. No Joomla UI or database runtime verification.
- Shopper-group filter follow-up: compared search form and list query with
  the guide and documented default ordering. Inventory then had 65/385 partial
  mappings (16.9%), including 63 admin forms; 320 needed mapping. View resolution
  and Joomla UI/database remain unverified.
- Customer statistics: added a partial source-backed guide and navigation for
  the paid-order report, date control and export/print cautions. Mapped its
  filter partial. Inventory now has 66/385 partial mappings (17.1%), including
  64 admin forms; 319 need mapping. No actual Joomla database, browser, export
  or print runtime verification. CODE-268: actual export controller with
  synthetic data and stubs produced an extra CSV column for a name containing
  a comma; #308 created after duplicate comparison and dry-run and reconciled
  unchanged. Issue-sync tests passed.
- Order statistics: added a partial source-backed guide and navigation; mapped
  the filter with its XML search field noted as not rendered by the default
  template. CODE-269: actual export controller with synthetic aggregate data
  and stubs failed on empty input and warned on missing order ID. #309 created
  after duplicate comparison and dry-run, then reconciled unchanged. Inventory
  then had 67/385 partial mappings (17.4%), including 65 admin forms; 318 needed
  mapping.
- Product statistics: added a partial source-backed guide and navigation; mapped
  the date filter, documenting grouping, CSV and SQL-mode limitations.
  Inventory now has 68/385 partial mappings (17.7%), including 66 admin forms;
  317 need mapping. The actual product export controller with synthetic data
  and stubs produced an extra CSV field for a comma-containing name; CODE-268
  scope update synchronized to #308 after dry-run and reconciled unchanged.
  CODE-270: actual product and base model state with stubs rejected the
  order-count heading and fell back to product name in both directions;
  unit-sold controls passed. #310 created after dry-run and reconciled
  unchanged. CODE-271: actual model issued an SQL-mode statement captured by
  a database stub; MySQL 8 worklog describes removal of one mode. Real database
  behavior unverified: no MySQL or container tools available. #311 created;
  investigation and compatibility labels corrected and verified; reconciled
  unchanged. Supplier filter follow-up compared the search form and current
  query with its guide; mapped partial. Inventory then had 69/385 partial mappings
  (17.9%), including 67 admin forms; 316 needed mapping.
- Tax-group filter follow-up compared search and ordering against its guide
  and documented default ordering. Inventory then had 70/385 partial mappings
  (18.2%), including 68 admin forms; 315 needed mapping.
- Tax-rate filter follow-up compared all four fields and the list query with
  its guide and documented default ordering. Inventory then had 71/385 partial
  mappings (18.4%), including 69 admin forms; 314 needed mapping.
- Template filter follow-up compared search, section and publication fields
  with the current list query and guide. Inventory then had 72/385 partial
  mappings (18.7%), including 70 admin forms; 313 needed mapping.
- Voucher and wrapping filter follow-up compared both XML forms and list
  queries with existing guides; the wrapping guide now notes default ordering.
  Inventory then had 74/385 partial mappings (19.2%), including 72 admin forms;
  311 needed mapping. No Joomla UI or database runtime verification.
- Category editor and plugin list-form follow-up compared current forms and
  their relevant views/layouts with existing guides. The plugin overview
  identifies its Joomla editor link. Inventory then had 76/385 partial mappings
  (19.7%), including 74 admin forms; 309 needed mapping. The category permissions
  and individual plugin settings are not fully traced; no Joomla UI runtime.
- Question editor and tax-group form follow-up compared current fields,
  editor layout or table checks with their guides. Inventory then had 78/385
  partial mappings (20.3%), including 76 admin forms; 307 needed mapping.
  No Joomla UI, mail, database or tax runtime verification.
- Product Files follow-up compared upload form, administrator view/controller
  and service with the guide; documented product search, version syntax and
  plan options. Inventory then had 79/385 partial mappings (20.5%), including
  77 admin forms; 306 needed mapping. Isolated product-download service and UI
  tests passed; actual Joomla, database and customer download runtime remain
  unverified.
- Release Publisher: added a partial source-backed guide and navigation for
  the gated list, settings and storage migration. Mapped its form. Inventory
  then had 80/385 partial mappings (20.8%), including 78 admin forms; 305 needed
  mapping. Publisher access, migration view and coordinator isolated fixtures
  passed. No actual Joomla migration, deployment or publication performed.
- PostNord standalone label: compared form, default data, view, controller and
  client; documented fields and payload cautions. Actual controller and client
  with synthetic inputs and mocked cURL emitted a blank recipient for an empty
  company (#312 / CODE-273) and blank weights for a supplied weight (#313 /
  CODE-272). Company and alternate weight-key controls passed. Order weight
  producer source suggests the second mismatch also affects order labels but
  was not executed. Both Issues created after dry-run, labels checked and
  reconciliation unchanged. No Joomla, network or provider runtime performed.
  Inventory then had 81/385 partial mappings (21.0%), 79 admin forms; 304 needed mapping.
  Registers: 315 Core findings, 242 individual records, 316 ledger rows
  (244 synced, 57 private holds, 15 test-only), 591 triage, 173 page and 173
  source records.
- Category product filters: added a partial source-backed module guide and
  navigation, with a warning for existing #211. Inventory is 82/385 partial
  mappings (21.3%), 79 admin forms; 303 need mapping. Page and source registers
  each have 174 entries. Guide and linked pages rendered and chapter targets
  resolved; no Joomla storefront test. Next: continue incomplete module/plugin
  references and page paths; mapping is not completion or runtime verification.
- Payment-link follow-up: clarified that link controls require eligibility,
  permissions and a generated URL, rather than only an outstanding balance.
  Source and rendered guide checked; real Joomla, mail and gateway unverified.
- Billy follow-up: inspected current cashbook projection, order-list control,
  claim and provider-response paths; added qualified operational guidance.
  Isolated cashbook registration and plugin tests passed with SQLite and
  provider mocks; real Joomla, MySQL and Billy remain unverified. Next:
  continue the payment/accounting page batch and other partial reviews.
- Five-page follow-up: shopper groups, order-total discounts, GLS Business,
  order list and Ahamove. Added qualified overlapping-discount and export
  handling guidance; corrected current legacy payment-coverage descriptions.
  Existing discount and Ahamove guidance already covers inspected paths. Five
  guides rendered and chapter targets resolved. CODE-247 is a private hold;
  no ordinary Issue was created and the sync dry-run skipped it. Historical
  fixtures and Joomla, SQL, export, browser and provider runtime were not
  rerun. Next: continue individual pages and unfinished source paths.
- Current register validation: 309 Core findings, 236 individual finding
  rows, 310 ledger rows (238 synced, 57 security holds, 15 test-only), 585
  triage and 169 each source and page records. Counts are not approvals.
  Comparable historical baseline remains 0/161 fully approved original pages
  and 173/199 original findings with partial records.
- CODE-231–240: compared product, shipping, checkout and stock-image paths
  against current Core. Ahamove serialization remains unchanged; the order
  status handler now gates its shipping event on accepted or verified current
  same-status transitions. Checkout payment changes and the added SQL table
  are separate; the tax schema line reference was corrected. #276–285 updated
  after dry-run and reconciled unchanged. Historical fixtures and actual
  Joomla, events, database, checkout and provider behavior remain unverified.
  CODE-241–246 already reference current Core; next: individual page work and
  remaining partial finding/security work.
- CODE-221–230: compared recorded menu, scroller, shipping, zoom, reminder,
  search, registration, comparison and discount paths against current Core;
  unchanged since prior review. #266–275 updated after dry-run and reconciled
  unchanged. Historical fixtures and actual Joomla, database, browser, mail
  and checkout were not rerun.
- CODE-211–220: compared the recorded search, wizard, attribute-set,
  account-group, tax, currency and export source paths against current Core;
  unchanged since prior review. #256–265 updated after dry-run and reconciled
  unchanged. Historical fixtures and actual Joomla, database, browser,
  provider, export and   financial behavior were not rerun.
- CODE-205–210: compared voucher ordering, cart settings, comparison request
  names, Mega Menu suffix, product image arguments and product exclusion
  against current Core. Relevant files unchanged since prior source review;
  #250–255 updated after dry-run and reconciled unchanged. Real Joomla,
  database, browser, media and multiple-instance behavior remain untested.
  Remains partial.
- CODE-201–204: rechecked rating and promotion list ordering, review mail
  handling and mass-discount validation. Relevant source unchanged; SQL
  addition is unrelated. #246–249 updated after dry-run and reconciled
  unchanged. Historical fixtures and actual Joomla, mail, SQL and checkout
  remain unverified.
- CODE-198: rechecked legacy PayPal currency manifest, form and conversion
  paths; relevant files unchanged since prior review. #244 updated after
  dry-run and reconciled unchanged. Historical fixture, real provider and
  Joomla binding not rerun. CODE-199 is private.
- CODE-193–195 and 197: rechecked Facebook Like default and category-menu
  sorting, dTree alias and link-list mapping. Relevant files unchanged since
  prior review; #240–243 updated after dry-run and reconciled unchanged.
  Historical fixtures, provider, database and Joomla not rerun. CODE-196
  remains a private security hold.
- CODE-191–192: rechecked free-shipping rate query and cart output default;
  relevant paths unchanged since prior review. #238–239 updated after dry-run
  and reconciled unchanged. Historical fixtures and actual Joomla, checkout,
  database and form binding not rerun.
- CODE-185–188: rechecked tax-rate association saving, order-reset response,
  ePay options and gift-card replacement. ePay installer changes add an
  unrelated compatibility preflight; relevant finding paths remain unchanged.
  #234–237 updated after dry-run and reconciled unchanged. Historical fixtures,
  provider, Joomla and filesystem not rerun. CODE-183, 184, 189 and 190
  remain private security holds.
- CODE-180–182: rechecked wizard VAT tasks, company text mapping and removal
  flag; relevant files unchanged since prior review. #231–233 updated after
  dry-run and reconciled unchanged. Historical fixtures and actual Joomla
  dispatch, configuration persistence and navigation were not rerun.
- CODE-177–179: rechecked accessory operators and search suggestion source;
  relevant files unchanged since prior review. #228–230 updated after dry-run
  and reconciled unchanged; accessory editor line reference corrected.
  Historical fixtures, MySQL, Joomla, browser and checkout not rerun.
- CODE-175–176: rechecked search category predicates and custom-field Twig
  flow; relevant files unchanged since prior review. #226–227 updated after
  dry-run and reconciled unchanged. Historical fixtures and real search,
  Joomla and database behavior remain unverified. CODE-174 remains a private
  security hold.
- CODE-173: rechecked price-filter bounds and request state; relevant source
  unchanged since the prior review. #225 updated after dry-run and reconciled
  unchanged. Historical layout fixture and real browser state were not rerun.
- CODE-169–172: rechecked mass-discount deletion and promotion shipping and
  item-removal paths; relevant files unchanged since prior review. #221–224
  updated after dry-run and reconciled unchanged. Historical fixtures and
  actual database, cart and checkout remain unverified. CODE-168 remains a
  private security hold.
- CODE-166–167: rechecked discount list renderer, newsletter batch field,
  configuration preparation and send controller; relevant files unchanged
  since prior review. #219–220 updated after dry-run and reconciled unchanged;
  SQL line reference corrected. Historical fixtures and actual Joomla,
  persistence and mail remain unverified.
- CODE-164–165: rechecked coupon/voucher list renderers, save models and
  date trait; relevant files unchanged since previous review. SQL added an
  unrelated table; corrected shifted voucher schema line reference. #217–218
  updated after dry-runs and reconciled unchanged. Historical fixtures,
  Joomla forms, persistence and checkout remain unverified.
- CODE-161–163: rechecked stockroom form, model, delivery helper and checkout
  diff; unchanged relevant paths at current Core. #214–216 updated after
  dry-run and reconciled unchanged. Guide already covers the limitations;
  historical fixtures and actual Joomla, SQL and mail were not rerun.
- CODE-160: rechecked VAT field, default and tooltip and compared submission
  paths against prior revision; #213 updated after dry-run and reconciled
  unchanged. The guide already warns of the uncertainty. The historical
  browser fixture was not rerun and actual Joomla save remains unverified.
- Product Scroller limit: CODE-246 / #291 created after comparison with
  #288–290, dry-run and unchanged reconciliation. Core passes `LIMIT 5` to
  setLimit; public Joomla Database 3.4.0 casts it to integer, PHP 8.4 separately
  casts it to zero, and the MySQL builder omits nonpositive limits. The
  installed framework, actual SQL, Joomla 5.4/6 and storefront remain
  unverified. Next: continue individual pages and remaining finding reviews.
- Product Scroller follow-up: a separate fixture executed the actual category
  helper with stubbed dependencies and returned descendants 6 and 7 with
  `id` but no `category_id`, which the scroller reads. #289 evidence was
  updated after dry-run and reconciled unchanged. Public Joomla Database 3.4.0
  casts `setLimit` arguments to int; separate PHP 8.4 casts `LIMIT 5` to 0.
  The local Joomla database package is absent, so the installed adapter,
  integrated module and SQL remain unverified.
- Product Scroller: new partial guide and navigation, source mapping and
  #288–290 for diagnostic message, category predicate and discount-layout
  option. Actual entry and ShowProducts used stubs; equivalent SQLite only.
  Joomla query builder, installed package, browser and MySQL are unverified.
  Next: verify setLimit adapter and descendant mapping, then continue pages.
- Price-filter follow-up: reviewed the guide, module entry/manifest/layout,
  model, raw view and result layout. #287 now also records filter, scroller
  and wishlist helper call order; actual displays and filter behavior remain
  unverified. Guide and partial source row updated; dry-run, Issue comment
  and unchanged reconciliation passed. Continue individual page batches.
- Shopper Group Product follow-up: #287 now records the layout's unconditional
  price calls, and #143 records that the AJAX template count precedes its
  Add To Cart setting check. Both were updated after dry-run and reconciled.
  The guide and partial source row were updated; actual module, checkout and
  private security remain unverified. Next: continue individual page batches.
- Product Tab pricing follow-up: #287 records repeated synthetic special
  discount application to a shared product. Actual net-price helper returned
  90 alone and 81 after `getPrice` with a preseeded discount and stubbed
  dependencies; evidence was appended and reconciled unchanged. Real rule
  selection, cache integration, storefront and checkout remain untested.
  Continue additional product-module callers and remaining page batches.
- Product Tab cart follow-up: #286 records a module-ID propagation defect and
  possible duplicate forms; actual renderer probe used stubs, not real tag/Twig
  or Joomla/browser. Guide and partial source record updated. Distinct #251 and
  #268 were reviewed before creation; reconciliation returned unchanged. Next:
  continue the remaining Product Tab pricing and cart traces and page batches.
- CODE-131–133 were rechecked at local Core HEAD and #185–187 updated after
  dry-run and reconciled unchanged. Historical fixtures were not rerun;
  actual Joomla, checkout and database remain unverified. CODE-137 remains a
  private security hold. Core instruction files have existing local modifications.
- CODE-136: rechecked the self-pickup fallback and shared rate renderer;
  #190 was updated after dry-run and reconciled unchanged. Other carrier
  observations and the isolated fixture remain historical. Both affected
  guides already warn about the inspected paths. Next: CODE-160 onward and
  remaining partially reviewed manual pages; keep security holds private.
- CODE-159: rechecked reminder setting, helper and scheduler paths; #212
  updated after dry-run and reconciled unchanged. Existing configuration
  guide covers the discrepancy. Historical fixture not rerun; actual
  scheduler, mail, Joomla and database remain unverified.
- CODE-158: rechecked filter input and four control branches; #211 updated
  after dry-run and reconciled unchanged. The category guide already warns
  about initial rendering. Historical fixture not rerun; full GET/POST
  roundtrip and actual Joomla remain unverified.
- CODE-157: rechecked filter category loop, portal helper and search controller;
  #210 updated after dry-run and reconciled unchanged. Historical fixture not
  rerun; actual Joomla routing, filtering and database remain unverified.
- CODE-156: rechecked import line counting, CSV splitting and progress formula;
  #209 updated after dry-run and reconciled unchanged. The import guide
  already warns about multiline progress. Historical fixture not rerun;
  browser, actual import and database remain unverified.
- CODE-155: rechecked video closing markup; #208 updated after dry-run and
  reconciled unchanged. Existing guide warns about it. Historical libxml
  fixture not rerun; browser, provider SDK and Joomla remain unverified.
- CODE-152: rechecked the listed menu lookup and caller paths, including
  changed reorder controller lines; #205 updated after dry-run and reconciled
  unchanged. Historical fixtures not rerun; reorder and breadcrumb execution
  and real Joomla/database behavior remain unverified.
- CODE-150: rechecked cart total, discount sources and line display; #203
  updated after dry-run and reconciled unchanged. The existing guide describes
  the investigation. Historical separate fixtures not rerun; real sequencing,
  module-instance settings and storefront remain unverified.
- CODE-151: rechecked menu category-key handling; #204 updated after dry-run
  and reconciled unchanged. Historical fixture not rerun; actual Joomla menu
  query shapes remain unverified. Existing guide already carries the warning.
- CODE-153: rechecked Xmap category query, recursion and schema; #206 updated
  after dry-run and reconciled unchanged. Prior SQLite fixture not rerun;
  supported database, installed Xmap and Joomla remain unverified.
- CODE-154: rechecked guest and group logo output; #207 updated after dry-run
  and reconciled unchanged. Existing guide warns about the missing text
  alternative; historical fixture and real assistive technology not tested.
- CODE-148/149: rechecked Mega Menu sort choices and recursion and cart
  module's empty-button template variable. #201/202 updated after dry-run
  and reconciled unchanged. Existing guides cover these paths; historical
  fixtures were not rerun and installed layouts and Joomla remain unverified.
- CODE-147: rechecked mass-cart helper and workflow, and identified both
  model and workflow callers. #200 updated after dry-run and reconciled
  unchanged. Historical fixture not rerun; actual cart/UI/database unverified.
- CODE-146: rechecked three module divisor paths and settings; #199 updated
  after dry-run and reconciled unchanged. Historical fixtures not rerun;
  actual Joomla form binding and storefront remain unverified.
- CODE-144/145: rechecked Similar Tags helper/entry and manufacturer scroller
  manifest, entry and default layout. #197/198 updated after dry-run and
  reconciled unchanged. Existing module guides cover these paths; historical
  fixtures were not rerun and installed Joomla/cache/overrides remain untested.
- CODE-143: rechecked dynamic-fee and shipment weight paths and the order-item
  quantity field; #196 updated after dry-run and reconciled unchanged. The
  guide already warns about these paths. Fee fixture not rerun; shipment
  execution, provider units and actual checkout remain unverified.
- CODE-141: rechecked creation/cancellation and current event sites; #194
  was updated after dry-run and reconciled unchanged. Cancellation event
  registration and real encoded tokens remain unverified; fixtures not rerun.
- CODE-142: rechecked the manifest and both status-mapping handlers; #195
  was updated after dry-run and reconciled unchanged. The Giao Hang Nhanh
  guide already describes the conditional limitation. Historical fixture not
  rerun; actual provider spelling and Joomla event delivery remain unverified.
- CODE-138/139: rechecked FedEx and USPS handlers and address/billing helpers;
  #191/192 were updated after dry-run and reconciled unchanged. The shipping
  guide's existing warnings match these paths. Historical fixtures were not
  rerun; actual Joomla, providers and database remain unverified.
- CODE-134/135: rechecked GLS lookup, checkout selection and rate handling at
  current local source. #188/189 were updated after dry-run and reconciled
  unchanged. Historical fixtures were not rerun; no live SOAP, actual Joomla
  event delivery or checkout persistence was tested.
- CODE-140 was rechecked after the Order helper changed; two order-update
  dispatch sites and an additional checkout dispatch site were inspected.
  #193 was updated after dry-run and reconciled unchanged. The earlier stub
  fixture was not rerun and actual event delivery remains unverified.
- CODE-112–116 were rechecked at local Core HEAD and their existing issues
  #168–172 updated after dry-runs and reconciled unchanged. Historical stubs
  were not rerun. The review-date layout has two additional calls into the
  shared formatter; its runtime route is unverified. Newsletter article
  warnings still match the inspected paths; its page review remains partial.
  CODE-117–118 and CODE-120 were subsequently rechecked and #173–175 updated
  and reconciled unchanged; CODE-119 remains a private hold. Continue with
  CODE-121–124 were subsequently rechecked and #176–179 updated and reconciled;
  CODE-125/126 are fixed in the current source, and the isolated field-group
  regression test passed. #180 and #181 are closed; #180's owner comment
  requests UAT and says keep open, so this discrepancy was not changed.
  CODE-127, CODE-128 and CODE-130 were rechecked; #182–184 were updated and
  reconciled. CODE-129 remains a private security hold. Continue with
  CODE-131–140 and partially reviewed manual pages.
- PayPal FAQ follow-up: distinguished the legacy plugin from the separate
  PayPal Credit Card plugin, documented inspected settings and live Card Fields
  restriction, corrected the obsolete menu title and added the FAQ to the
  plugin overview. Source register remains partial; the local tracking-only
  PayPal completion/reconciliation commit needs a separate review before its
  changes can be described as checked-out behavior. The bundled Markdown
  renderer and chapter-target checks passed, as did issue-sync tests and the
  PayPal asset registration test. PayPal flow, plugin-loading and webhook
  tests could not start: the plugin or test Composer autoloaders are missing.
  No dependencies were installed and no real Joomla or provider was tested.
  CODE-101's controller/model/client source and direct caller search were
  rechecked at local HEAD; prior fixtures were not rerun. Updated the
  handoff and appended qualified evidence to #159 after dry-run, then
  reconciled unchanged. GitHub `develop` now matches tracking commit
  `24fcdfb91dcf66bb49fe6a038b4760b9dd475adf`; that commit changes no
  CODE-101 paths. CODE-102 was also checked at current source; its separate
  property-specific rendering and default-quantity paths need regression
  coverage. Updated #160 after dry-run and reconciled unchanged; its priority
  remains unchanged for maintainer triage. CODE-103's editor, model
  and matching paths were checked; the isolated checkout postal-code fixture
  passed but does not exercise the editor. Updated #161 after dry-run and
  reconciled unchanged. CODE-104's client, controller,
  configuration gates and calculator query were rechecked without rerunning
  its historical SQL fixture; #162 was updated and reconciled after dry-run.
  CODE-105's additional cart-refresh caller was
  checked and distinguished from existing CODE-223; #163 was updated and
  reconciled after dry-run. CODE-107's image and asynchronous price paths and
  CODE-109/110 grid and save branches were traced; #164–166 were updated
  after dry-run. All eight ordinary findings reconciled unchanged together.
  Historical fixtures remain historical; reviews and runtime remain partial.
  The free-shipping guide was rechecked without an unnecessary edit. The
  order-payments guide now qualifies reconciliation by gateway, operation and
  installed version; its seven anchors and renderer passed. Retain private
  holds and immediately continue unfinished manual and finding reviews.
- Current local Core remains `ff72aba6939637ed8fd55d4acc4c109f641adccc`;
  GitHub `develop` and local tracking `origin/develop` have advanced to
  `24fcdfb91dcf66bb49fe6a038b4760b9dd475adf` (one PayPal-related commit).
  No fetch, merge or checkout was performed. Recheck affected PayPal findings
  and pages against the actual checked-out source and note tracking drift.
- The order-payments guide has been partially corrected against current local
  capability and payment-action source; focused offline tests and rendering
  passed. The earlier CODE-101–105/107/109/110 dry-run blocked all eight on
  recorded revision drift. CODE-101–105/107/109/110 were since source
  reverified and synchronized, with historical fixtures explicitly qualified.
  Continue other partial
  pages and findings; security holds remain private.
- Core `develop`: local HEAD `ff72aba6939637ed8fd55d4acc4c109f641adccc`;
  instruction files have local modifications. GitHub `develop` was
  `24fcdfb91dcf66bb49fe6a038b4760b9dd475adf` at the previous remote check.
  Since the previous Core checkpoint `2e2889680244db64b9e9f64da29608e02f543a70`,
  the branch contains 57 commits and 209 changed paths (22 component, 14 library,
  67 plugin, 7 Marketplace, 15 source/language, and 84 other paths). Changes
  include payment architecture and PayPal/payment plugins; no module paths
  changed. Verify findings against the current source, not the stale graph.
- Documentation `modernize`: HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`,
  matching `origin/modernize`; extensive pre-existing modified and untracked
  work remains untouched. Legacy extensions `master` is clean at
  `68c3819e1fa444a1bd3c46322045d4820a52fea6`, matching `origin/master`.
  `redSHOP-internal` is unavailable.
- GitHub confirms `Rmh1978/redSHOP-rmh` is private. CODE-101–105 and CODE-107/109/110 map to open Issues
  #159–166; their issue bodies and labels were read. CODE-106 and CODE-108
  remain private security holds with no authorized private reporting channel
  identified.
- Graphify is indexed at `647c0dc795265544ea000acb0c9217da609db544`, stale
  against Core HEAD. Do not treat its callers/tests as complete evidence.
- Continue with the partially reviewed CODE-111–120 batch, checking current
  source and mapped Issues, preserving prior tests as historical evidence and
  retaining CODE-119 as a private hold. CODE-111's source and four callers
  were rechecked; #167 was updated after dry-run and reconciled unchanged.
  Continue with CODE-131–140 and partial manual pages. Keep
  the pause counts below as the comparison baseline until actual work changes
  them; no review completion is inferred from this status update.

## PAUSED — previous controlled checkpoint, 2026-11-26 (historical)

The maintainer explicitly paused the entire project. Do not start another page,
finding, security review, Issue batch, manual edit or autonomous continuation
until the maintainer explicitly authorizes resumption. All `ACTIVE`, `continue`
and next-batch statements below this checkpoint are historical and superseded.
No commit, staging, push, merge, publication, production change or functional
Core fix was performed by this pause task.

- Core: `develop`, HEAD `2e2889680244db64b9e9f64da29608e02f543a70`, clean.
  Documentation: `modernize`, HEAD `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`,
  existing worktree changes preserved. Legacy extensions: `master`, HEAD
  `68c3819e1fa444a1bd3c46322045d4820a52fea6`, currently clean. These are local
  states, not assertions about remote heads. The private handbook is absent.
- Latest source work: stockroom/attribute page follow-up and ordinary
  CODE-101–110 follow-up are partial; CODE-106/108 remain private holds.
  CODE-240 / #285 was created and reconciled; #159–166 ordinary mappings and
  #151/#154–157 were reconciled. The current finding and page records retain
  source paths, methods, historical fixtures and remaining verification.
- Original pages: 0/161 fully approved; 161/161 have partial source records.
  Two additional new pages also have partial records. Original findings:
  173/199 have individual partial records, 26 do not; none of those counts
  proves a complete review. All 52 security holds need private verification.
  See `WORK-PROGRESS.md` for precise denominators and comparisons.
- The Issue ledger records 216 synced mappings, 52 private holds and 15
  test-only rows; it is not a fresh remote audit or a complete create/update
  event history. Previous Issue-sync tests and recent isolated stubs passed,
  but no full Joomla, database, browser, provider or production verification
  is claimed. Four publication gates remain blocked and three partial.
- Security: historical review records may contain sensitive evidence and must
  not be published without authorized private review. A bounded credential
  pattern scan found no matches; it cannot clear all private or customer data.
  The private reporting channel and isolated runtime environments remain
  outstanding. Preserve evidence; do not transfer it to public Issues.
- After explicit resumption, first compare local branches, HEADs, worktrees and
  changed Core paths with this checkpoint. Recheck affected findings and
  existing open/closed Issues, and revisit affected pages. Then continue the
  unfinished individual CODE-101–110 and stockroom/attribute source paths,
  followed by remaining partial pages and findings in the authorized batches.
  Avoid repeating still-valid evidence; follow `ISSUE-MANAGEMENT.md`, private
  security procedures and the permanent quality rules in `AGENTS.md`. Record
  each blocker and continue only within the newly authorized scope.

## ACTIVE — shipping pages and CODE-235 follow-up

- CODE-091–100 follow-up: rechecked eight ordinary source paths; CODE-093 and CODE-100 remain private holds. An actual calculator probe with synthetic dependencies exercised fractional-piece settings, separate plus/minus/percentage options, all three affected metadata branches and four range methods. Updated #154–#156 with qualified results and #151/#157 with current source after dry-runs; all eight ordinary Issues reconciled unchanged. Historical deletion, accessory and inventory fixtures were not rerun. Issue-sync tests, five nonempty/unique ledger checks and whitespace passed; an accidentally removed CODE-096 key was restored before synchronization. All reviews remain partial and no real Joomla, database, cart or tax runtime was tested. Continue CODE-101–110 and unfinished page paths. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- Five-page stockroom/attribute follow-up: re-read Inventory, Stockroom Management, Stockroom Image Management, Stockroom overview and Attribute Sets against selected source paths. Added qualified preorder-image and save verification guidance; the other inspected paths did not justify artificial edits. Five pages rendered and chapter targets resolved; Issue-sync tests, five register uniqueness checks and whitespace passed with existing LF/CRLF warnings. All pages remain partial; no Joomla, browser, real database or filesystem runtime was exercised.
- CODE-240 / #285: actual stock-image `doStore` returned true after a synthetic filename-update exception with parent, media and database stubs; successful-update and no-image controls passed. Created and reconciled the Issue after duplicate dry-run. Real Joomla save, upload and consequences remain unverified. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%); this new finding is additional. Continue CODE-091–100 and unfinished page paths; CODE-093 and CODE-100 remain private holds.
- CODE-081–090 partial follow-up: re-read source paths for all ten and compared their existing partial records. Added current isolated missing-match and inline-validation controls to #141 and #144, and corrected the category controller attribution with a separate controller probe on #147. Existing current-revision mappings #149 and #141 reconciled unchanged. Other historical fixtures were not rerun and other Issue mappings were not rechecked in this follow-up. Issue-sync tests, five ledger uniqueness checks and whitespace passed with existing line-ending warnings. No finding is marked fully reviewed; continue CODE-091–100 and return to all unfinished work.
- CODE-081 missing-match control: the actual helper with seeded static records and no configured default cached null when a product without a match preceded a product with a named match; reversing order returned the named result twice. Disabled AJAX returned null. Updated #141 after dry-run and reconciled unchanged; no database, actual template files or Joomla storefront was used. Continue the partial finding batch.
- CODE-087 controller probe: the actual category controller selected the expected success and error language keys for true and false stub-model returns. The model was not run in the same call and the earlier model fixture was not located. Appended qualified evidence to #147 and reconciled unchanged; Joomla dispatch, database and filesystem remain unverified. Continue the partial finding batch.
- CODE-084 current check: both actual discount-table bind/check methods rejected each valid inline field with the missing-group error without a bound group and accepted each with one; zero-discount controls failed with the amount error. This PHP 8.4 probe used a stub parent and did not run the controller, database or UI. Updated #144 after dry-run and reconciled unchanged. Continue the partial CODE-081–090 follow-up.
- Five-page follow-up: read Categories, States, Postal Codes, Gift Cards and Templates; traced selected form, model, view, controller and helper paths. Clarified English state field labels, gift-card detail amount/quantity tags and template copy state; corrected linked Issues in page records. Existing category and postal-code warnings remain appropriate on the inspected paths. All five pages remain partial; five rendered and their chapter targets existed, with no Joomla/database/browser runtime. Continue CODE-081–090 follow-up and unfinished page paths. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-087 correction: the category list toolbar invokes `category.copy` and the category-specific controller chooses the message based on the model result. The earlier inherited-controller and selected-count attribution was wrong. Corrected local evidence and appended an explicit correction to #147 after a dry-run; subsequent reconciliation was unchanged. The existing category guide's warning remains appropriate. The historical isolated fixture was not located or rerun; real Joomla dispatch and filesystem behavior remain unverified. Continue CODE-081–090 follow-up and unfinished page paths; this is not a completed batch or review.
- CODE-071–080 follow-up: re-read all ten source paths; refreshed eight Issue anchors after dry-run and reconciled all ten unchanged. Earlier browser, model, date and SQL fixtures were not rerun and all records remain partial. Issue-sync tests and whitespace checks passed. Continue CODE-081–090 and unfinished pages. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-061–070 follow-up: re-read nine ordinary source paths; CODE-062 remains an unreviewed private hold. Refreshed seven existing Issue anchors after dry-run and reconciled all nine unchanged. Prior browser, SQL and model fixtures were not rerun; all ordinary records remain partial. Issue-sync tests and whitespace checks passed. Continue CODE-071–080 and unfinished pages. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-051–060 follow-up: re-read all ten source paths; CODE-060 remains an acceptance investigation, not a confirmed issue. Refreshed current source anchors on seven existing Issues after dry-run and reconciled all nine ordinary mappings unchanged. Offline `prices-list.php` passed for valid product CRUD but uses a stubbed table check and does not verify the overlap defect. Issue-sync tests and whitespace checks passed. All records remain partial. Continue CODE-061–070 and unfinished pages. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-041–050 follow-up: re-read six ordinary source paths; four security holds remain private and unreviewed. Six mapped Issues reconciled unchanged. The offline Flatpay replay passed, including pending and API-failure controls, but did not cover the unknown full callback; other earlier fixtures were not rerun. Issue-sync tests and whitespace checks passed. Continue CODE-051–060 and unfinished page paths. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-031–040 source follow-up: re-read eight ordinary paths and reconciled their existing Issues unchanged; CODE-036 and CODE-037 remain private holds, not completed private reviews. All ordinary records remain partial and prior fixtures were not rerun. Issue-sync tests and whitespace checks passed. Continue CODE-041–050 and unfinished page paths. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-021–030 follow-up: re-read seven ordinary source paths; CODE-025–027 remain private holds, not completed private reviews. Reverified CODE-023 against current Core, added current evidence to #99 and reconciled all seven mapped Issues unchanged. Prior synthetic fixtures were not rerun and all records remain partial. Issue-sync tests and three unique-key checks passed; an initial CSV check used the wrong key before correction. Continue CODE-031–040 and unfinished page paths. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-011–020 follow-up: re-read the nine ordinary findings' current source paths and prior individual evidence; all remain partial. CODE-018 remains a private security hold, not an ordinary Issue or a completed private review. The coupon reapplication path is recorded as source-only and needs a failure-path test before drawing conclusions. Nine mapped Issues reconciled unchanged; 213 individual rows have unique IDs and Issue-sync/whitespace checks passed. Continue CODE-021–030 individually and unfinished page paths. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%).
- CODE-001–010 individual follow-up: the existing individual rows record the source and Issue comparisons, provisional priorities, proposed fixes, regression cases and limits; all remain partial. CODE-003 is the documentation renderer and has no Core Issue. Reconciled the other nine mapped Issues unchanged; Issue-sync tests and whitespace checks passed. For CODE-010, additionally read the product controller and view: the controller sets the insert-product layout and the view obtains data from the shared model, but the additional picker entry points and real dispatch remain unverified. Next: continue CODE-011–020 individually and revisit unfinished paths. Original progress remains 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%); partial work is not completion.
- Five-page discount follow-up: read Gift Cards, Mass Discount, Product Price Discount, Order Total Discount and the discount overview; rechecked their forms and selected issuance, table-update, validation and menu paths. Added a qualified free-shipping fulfillment check to Gift Cards for CODE-239 / #284. The other inspected claims already matched those paths, so no artificial article edits were made. Five guides rendered, chapter targets resolved and their partial review rows parsed. No actual Joomla, mail, database or checkout was tested. Continue the next individual batch.
- Five-page free-shipping follow-up: individually read Self Pickup, the free-shipping message module, Promotions, Coupons and Vouchers, then inspected their relevant forms, cart flag paths and checkout excerpts. Added qualified fulfillment checks to four guides; the message module already distinguishes informational text from checkout eligibility. CODE-239 / #284 is a source-only investigation: the inspected free-shipping checkout layout suppresses the selector and order save skips the submitted method; intended policy, actual persistence and downstream effects remain unverified. Compared distinct #189 and reconciled the new Issue unchanged. Five guides rendered, chapter targets and register shapes checked, Issue-sync tests passed, and the isolated checkout selection test passed without exercising free-shipping order save. All five pages remain partial. Continue the next batch; original progress remains 0/161 fully approved pages and 173/199 findings with partial records.
- Next five-page partial follow-up: read Shipper, Default GLS, Giao, PostNord and GLS Business, and rechecked their rate handlers and selected manifests against the shared selector. Added a PostNord shopper-group default caution for CODE-236 / #281. The other inspected claims already matched those paths; no artificial edits were made. Five guides rendered, chapter targets resolved, source rows parsed and Issue-sync tests passed. No provider, database or Joomla runtime was exercised. Continue the next individual batch and revisit all partial paths.
- Five-page source follow-up: Ahamove, shipping methods, wrappings, shipping boxes and shipping overview were read individually and remain partial. Clarified Ahamove requester/map behavior, shared mixed-cart rate predicates and wrapping cart variants. No further box/overview edit was justified by the inspected paths. Five guides rendered and their chapter links resolved. Corrected 14 other source-register rows with a missing partial-quality field; all 163 records now parse with unique paths. No Joomla, browser, database or provider runtime was exercised. Next: continue the remaining partial source traces and the next individual batch.
- CODE-238 / #283: `Ahamove::getOrderItems` threw an `Error` for a synthetic nonempty order-item object; an empty-list control returned `[]`. The order-shipping handler calls it before `createOrder`, after address, requester and remark preparation that may fail first. Compared distinct #282, synchronized and reconciled unchanged. The Ahamove guide and source register remain partial; no real dispatch, database, Joomla or provider was tested. The probe and Issue-sync tests passed, the guide rendered, five register keys were unique and `git diff --check` passed with existing line-ending warnings.
- Next: continue individual source review of remaining Ahamove event, address and rate paths and the next five-page batch. Original progress is still 0/161 fully approved pages (0%) and 173/199 original findings with partial records (86.9%); partial work is not completion.
- Added a partial [Ahamove guide](../manual/en-US/chapters/plugin-redshop/ahamove.md), menu and plugin-overview links after inspecting its manifest, English labels, SQL and selected rate/order paths. CODE-237 / #282 records a cart remark product-key defect confirmed with an actual method and synthetic dependencies; provider and real checkout remain unverified. Next: continue the Ahamove source and private-security review only via authorized procedures, and the next individual documentation batch.
- Tax follow-up batch: read the VAT overview, tax-group, tax-rate, no-VAT FAQ and price-configuration pages and traced relevant product and shipping VAT paths, group forms and exemption display/calculation excerpts. Added qualified shipping-specific guidance and updated individual source records. All remain partial; five pages rendered, their shipping links resolved and register keys were unique. No Joomla, real tax query or checkout was tested. Continue the next batch.
- CODE-236 / #281: the actual shopper-group default shipping helper with a synthetic base rate of 100 returned 0 for a zero-rate VAT row, 100 for no row and 125 for a 0.25-rate row. This is separate from CODE-235's state predicate; actual database row selection and checkout remain unverified. Compared seven flagged Issues, created #281 after a clean controlled dry-run and reconciled unchanged. Warnings were added to the shopper-group and shipping-method guides; both remain partial.
- CODE-235 / #280: the shipping VAT lookup compares a state code to the numeric tax-rate column. Actual query construction was exercised with synthetic input and stubs; database execution, tax impact and checkout remain unverified. Six flagged Issue overlaps were individually compared before controlled sync; #280 was fetched and the subsequent dry-run reported unchanged.
- Shipping boxes, methods, wrappings, Self Pickup and GLS Business have further source evidence in `SOURCE-REVIEW-REGISTER.csv`; all remain partial. The GLS guide now covers extra-field configuration, order export and automatic-label gates and warns about the VAT lookup. Continue the unreviewed shared rate, persistence, export and label paths.
- Core `2e2889680244db64b9e9f64da29608e02f543a70` is clean; documentation `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` has extensive preserved working changes. Graphify index `647c0dc795265544ea000acb0c9217da609db544` is stale. Original progress remains 0/161 fully approved pages (0%) and 173/199 findings with partial records (86.9%); partial records are not completed reviews.
- Continue individual source work and quality checks, preserving private security holds and no-Core-fix/no-commit/no-push/no-publication restrictions. The separate private handbook is absent.
- Follow-up: confirmed that Shipper, Default GLS and configured PostNord pickup rates also invoke the shared VAT calculation. Added qualified warnings to their guides and the general shipping-rate guide; all remain partial. Next: continue individual source traces for remaining shipping plugins and the unfinished rate, persistence, export and label paths.
- Next batch started: re-read Giao Hang Nhanh's guide, manifest, English labels, install/uninstall SQL and current rate/fee methods. Configured rates call shared VAT; the separate provider-fee choice reports zero VAT. Added a qualified guide note; provider, checkout and actual tax are unverified. Continue the remaining pages in this batch.
- Re-read the standard shipping plugin manifest, English labels, provider and rate handler plus the shared extra-field and automatic-label paths. Expanded its options in the shipping-method guide; label dispatch and real checkout remain unverified. Next: continue the partial Giao and shopper-group reviews and three other individual pages in the current batch.
- GLS update redirect follow-up: re-read its complete article, current GLS manifest and address handler, rate token methods and checkout's pre-store trigger. No article change was justified; its source record remains partial because installed event delivery, the historical package and real address persistence are unverified.
- Five-page follow-up batch: Giao, shopper groups, GLS update, module/plugin installation and plugin overview remain partial. Added precise extension-identity guidance based on local Joomla 5.4.6 installer source and clarified Core versus separately distributed plugins. Five guides rendered, 21 overview chapter targets existed and five register keys were unique. Continue the next individual batch and revisit all incomplete traces; Joomla 6 and real installation were not tested.

## ACTIVE — CODE-191–199 follow-up

- Rechecked seven ordinary findings against source and open Issues #238–244. The records remain partial; prior fixtures were not rerun. CODE-196 and CODE-199 remain private holds, without a completed private review.
- For CODE-198, read both currency conversion implementations and the plugin-dispatch path: a falsey target falls back to session currency in the implementations, while a conversion plugin may override them. No actual conversion, Joomla binding or provider behavior was exercised.
- Original progress remains 0/161 fully approved pages (0%) and 173/199 findings with partial records (86.9%); partial records are not completed reviews. Continue unfinished page and finding traces; see the latest `WORK-PROGRESS.md`. Project remains ACTIVE.

## ACTIVE — CODE-181–190 follow-up

- Rechecked six ordinary findings against source and open Issues #232–237; all remain partial and prior fixtures were not rerun. CODE-183, CODE-184, CODE-189 and CODE-190 remain private security holds; no private review is claimed.
- Core HEAD is `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD is `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Original progress remains 0/161 fully approved pages (0%) and 173/199 findings with partial records (86.9%); partial records are not completed reviews.
- Next: CODE-191–199 source and Issue follow-up, and unfinished page paths. See `WORK-PROGRESS.md`; project remains ACTIVE.

## ACTIVE — CODE-171–180 follow-up

- The nine ordinary CODE-171–180 entries were followed up against current source and open Issues #223–231; their individual rows remain partial. CODE-174 remains a private security hold, not an ordinary Issue review. Prior fixtures were not rerun and Joomla, browser, MySQL, checkout and dispatch behavior remain unverified where applicable.
- Core HEAD remains `2e2889680244db64b9e9f64da29608e02f543a70`; documentation HEAD remains `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`. Existing dirty documentation work is preserved. Original progress remains 0/161 fully approved pages (0%) and 173/199 findings with partial records (86.9%); partial records are not completed reviews.
- Next: continue individual source and Issue comparisons for CODE-181–190 and unfinished page paths. See the latest `WORK-PROGRESS.md` checkpoint. Project remains ACTIVE; security holds remain private.

## ACTIVE — shipping-box follow-up

- Current local Core `2e2889680244db64b9e9f64da29608e02f543a70` is clean; documentation `5fda0904d762a466afcb3c7d400ad8d0ab1492cb` has extensive preserved uncommitted work. Graphify index `647c0dc795265544ea000acb0c9217da609db544` is stale.
- Shipping-box guide remains partial after source follow-up; its page register lists reviewed paths and missing verification. New CODE-233 / #278 and CODE-234 / #279 were verified with actual methods and synthetic dependencies, deduplicated and synchronized. No Joomla, actual database, carrier or checkout runtime was tested; CODE-104 and CODE-139 can mask the respective findings.
- CODE-161–170 follow-up: re-read current source and Issues for nine ordinary entries; CODE-168 remains a private hold. Traced checkout delivery input through order-template replacement and mail source; controlled evidence comments to #215 and #216 reconciled unchanged. No real mail or Joomla checkout was tested.
- Original progress: 0/161 fully approved pages (0%); 173/199 original findings have partial records (86.9%), not completed reviews. Continue CODE-171–180 source and current-Issue follow-up, remaining page and finding batches, then all outstanding partial paths. The private handbook is absent; security holds remain private.
- Tests and exact details: latest `WORK-PROGRESS.md` checkpoint. Project stays ACTIVE; no Core fixes, commits, pushes or publication.

## ACTIVE — resumed checkpoint (2026-11-25)

The maintainer explicitly resumed the project. Continue issue reconciliation,
source-backed documentation modernization, local tests and checkpoints. Do not
change Core or Marketplace production code, commit, push, publish or run
unapproved test-site/provider work.

### Repositories and revisions

- Core `develop`: `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- Local Core `origin/develop` tracking ref:
  `920ea0819e6bac6da694107270e1143d3c18e22f`, seven commits ahead of HEAD.
  It was not fetched, merged or changed during recovery.
- Documentation `modernize`:
  `6ae296dbe0f05654ef403b64739acb7820884402`, tracking `origin/modernize`.
- Other checked repositories were clean: `redSHOPEXTENSIONS-rmh`
  `68c3819e1fa444a1bd3c46322045d4820a52fea6`,
  `VP-Neoteric-Joomla-Template` `3dc9a93bdebccd52e66e2d758cb200c9f66b7b7c`,
  and `Mouseflow-joomla-plugin` `a9c5319c93bc0a42a88c06462435194aff481b9f`.
- Preserve both dirty review worktrees. Final Core status has six modified
  tracked files and three untracked workflow/test paths; documentation has 139
  modified tracked files and five untracked paths. Three Core shipping-rate
  source/template modifications appeared in the final status but were not in
  the initial status snapshot; their provenance was not established here.
  Preserve them and inspect them only after explicit resumption. No reset,
  checkout, staging or commit was performed.

### Issue and register reconciliation

- The ledger has 243 unique review IDs: 176 `synced`, 52 `security-hold` and
  15 `test-only`; there are no ordinary `pending-sync` rows. Thus 176/243 =
  72.4% of all ledger rows are linked to GitHub, while 176/176 = 100% of the
  currently eligible ordinary sync rows are synced.
- CODE records in the Core review: 199 unique IDs in triage, all `OPEN`;
  CODE-003 is the renderer finding intentionally excluded from the Core handoff.
  The Core handoff CSV contains the other 198: 171 synced, 26 security holds,
  and one test-only. These remain review findings, not completed Core fixes.
- No duplicate IDs were found in the Core handoff (242 rows), triage (518 rows)
  or issue ledger (243 rows); no duplicate ledger Issue numbers or broken
  synced-row mappings were found. CODE-003's deliberate triage-only presence
  is documented in the quality audit.
- Triage currently has 518 unique IDs (512 OPEN, six DONE). All 74 unique
  high-priority queue entries are OPEN and represented in triage; all 41
  archive-manifest names are unique; all 161 page-inventory paths exist. The
  quality audit's 313-ID count is a historical Stage 23 snapshot, not the
  current register total.
- GitHub Issue #244 is OPEN and matches CODE-198's ledger mapping, title,
  evidence and marker. #243 and #242 are also OPEN and match CODE-197 and
  CODE-195. The latest known batch created #235–#244 (10 Issues); subsequent
  evidence updates for #241–#243 are recorded in the handoff. The ledger does
  not retain a lifetime create-vs-update event count, so a lifetime total
  cannot be reconstructed reliably.
- The fresh read-only `issue-sync.js --all` run found 60 synced Issues
  unchanged and skipped eight security holds, then correctly stopped at
  CODE-130 because its source file,
  `component/admin/src/View/Shippingrates/HtmlView.php`, is modified locally.
  It did not apply changes. There was no running sync process or stale
  `.issue-sync.lock`; the temporary lock was removed after the run. The
  historical #244 creation encountered a transient `EPERM` ledger rename, but
  the stable marker was found on read-only rerun and the ledger was reconciled;
  no duplicate was found.

### Progress report and calculation

- **GitHub Issue Management: 72.4% overall linkage** (176/243 ledger rows);
  **100% of eligible ordinary syncs** (176/176). The 52 security holds and 15
  test-only rows are intentionally withheld, not silently counted as ordinary
  sync failures.
- **Code-finding review: 100% register coverage** (199/199 distinct CODE IDs
  have triage records). This is evidence/triage coverage, not resolution:
  **199 code findings remain OPEN** (198 Core handoff findings plus CODE-003).
- **Documentation modernization: 0% formally complete** (0/161 inventory
  pages marked complete). There are 145 partial pages (145/161 = 90.1% with
  work in progress), one historical annotation and 15 preserved historical
  pages. Partial work is not counted as completed.
- **Final quality control: 0% signed off** (0/7 publication-quality gates
  fully complete in the audit). Interim checks have passed; Joomla, MySQL,
  provider and browser runtime verification remain unperformed where noted.
- **Overall estimated project status: 43.1%**, a rough equal-weight mean of
  the four phase metrics above: (72.4% + 100% + 0% + 0%) / 4. No weighted
  project baseline exists, so this is a transparent progress estimate, not a
  completion or release-readiness claim.
- Latest known issue activity: 10 created (#235–#244) and three evidence
  updates (#241–#243). This is the latest tracked batch only; exact cumulative
  create/update totals are not stored in the ledger.

### Recovery checks and next action

- Passed: `node docs-review\issue-sync.test.js`; direct
  `node tests\javascript\issue-form-labels.test.js`; `git diff --check` in
  Core and documentation. The full read-only sync reconciliation was partial
  and stopped at CODE-130 as described above.
- The documentation renderer previously rendered 160 Markdown pages and
  checked links/anchors; this is historical local validation, not browser or
  deployment QA. No Joomla, MySQL, payment-provider or live-site test was run.

### Resumed work checkpoint (2026-11-25)

- Current Core revision: `c0cda5fdfad6ef93ce56496315191c58a918749c`;
  current Core tracking branch is `develop/origin/develop`, with no dirty Core
  files observed in this recheck.
- Current documentation revision: `5fda0904d762a466afcb3c7d400ad8d0ab1492cb`;
  documentation working changes are limited to the three checkpoint/register
  files plus active batch updates.
- Graphify indexed commit `647c0dc795265544ea000acb0c9217da609db544`;
  it is stale relative to Core HEAD and was used only as supporting evidence,
  not as source-of-truth.
- CODE-130 and CODE-198 remain review findings with unchanged revision
  blockers. `--ids` sync stopped before writes because both finding source
  revisions changed since the ledger verification.
- Issue-sync tests pass. The read-only `--all` reconciliation is blocked for
  ordinary eligible entries only by CODE-198's revision drift; security holds
  are skipped.
- Actual inventory status: 143 complete pages, 0 partial pages, 17
  historical-preserved pages and one historical annotation.

### Independent quality and inventory checkpoint (2026-11-25)

- Independent first review batch: 8 Discount pages reviewed against Core
  `c0cda5fdfad6ef93ce56496315191c58a918749c`. Results are recorded in
  `docs-review/QUALITY-REVIEW.csv`. One concrete field-description correction
  was made to the coupon guide: Coupon User is a multiple-selection field.
- Function inventory: `docs-review/FUNCTION-INVENTORY.csv` contains 385 entries:
  84 administrator forms, 266 plugin manifests and 35 module manifests.
  Mapping to documentation and remaining source verification is open.
- Issue reconciliation: `--continue-on-blocked` was implemented with a
  passing regression test. Read-only `--all --continue-on-blocked` continued
  through security/test skips and recorded revision blocks instead of stopping
  the batch. No Issue was created or changed.
- Security holds: `docs-review/SECURITY-HOLD-REVIEW.csv` contains 52
  nonsensitive register entries. Exploitability remains unverified; no sensitive
  details were promoted to ordinary Issues.
- Open CODE findings: ledger includes 243 eligible/review rows but no
  revision-verified update batch can run until each finding is rechecked against
  the current Core revision and source state.
- Code-finding review: `docs-review/CODE-FINDING-REVIEW.csv` contains 199 open
  CODE IDs at the current Core review checkpoint. Each remains
  `revision-recheck-required`; no finding is marked fixed.
- Publication gates: `docs-review/PUBLICATION-GATES.csv` separates local
  verification from runtime and approval gates. None of gates 3–7 is approved.
- Local quality validation: 143/143 pages are recorded in
  `docs-review/QUALITY-REVIEW.csv`; 18 historical pages are recorded in
  `docs-review/HISTORICAL-PAGE-REVIEW.csv`; 0 broken relative Markdown links
  were found.
- Concrete blockers: private redSHOP-internal handbook unavailable; 199 open
  CODE IDs await revision re-review; 52 security holds await authorized private
  review; live/runtime gates 3–7 are not approved.
- Deep quality queue: `docs-review/QUALITY-REVIEW.csv` now contains 143
  reviewed entries. Source/register evidence is recorded separately from
  runtime verification; no runtime or provider pass is claimed.
- Historical review: `docs-review/HISTORICAL-PAGE-REVIEW.csv` contains all 18
  preserved/annotation pages with a preserve or modernize/archive disposition.
- Completed source/quality batches: eight Discount pages, four e-conomic
  pages and six Getting Started pages. Missing runtime verification is recorded separately and does not
  reduce content-completeness status.
- Next concrete task: complete a 5–10-page Getting Started group, beginning
  with overview, minimum requirements, installation, navigation and menu
  documentation; recheck current Core revision and links.
- **Next task only after explicit resumption:** inspect the existing local diff
  for `component/admin/src/View/Shippingrates/HtmlView.php` because it blocks
  CODE-130 source verification; then compare current Core and tracking-ref
  changes against the recorded revisions before relying on prior findings.
  Preserve all dirty files. After reconciliation, resume the existing partial
  manual review from the current inventory/checkpoint. Do not fetch, merge,
  issue-write, commit or publish automatically.

Older progress notes and historical pause wording below this checkpoint are
retained only for audit history. The ACTIVE section above and the explicit
2026-11-25 maintainer resumption are authoritative.
## Historical continuous-work instruction (superseded)

The earlier continuous-work instructions and checkpoint below were written
under a prior authorization state. They are retained for audit history only;
the ACTIVE resumed checkpoint above is authoritative.

## Historical checkpoint — authorized issue management and Coupons

The maintainer supplied replacement Issue-task scope. `ISSUE-MANAGEMENT.md` is the authoritative scope, taxonomy and safety policy; the earlier missing-scope blocker below is superseded. The target is the private `Rmh1978/redSHOP-rmh` repository. Continue independent documentation work when a specific synchronization or security-reporting step is blocked.

- PayPal FAQ: expanded manifest setting defaults at `beacc470`; the tracking manifest differs in other fields, so recheck on revision change. Guide rendered and whitespace passed; provider, callbacks and Joomla remain unverified. Next: continue independent manual work.
- COD guide: expanded manifest setting defaults using the English labels at `beacc470`; the local tracking ref differs in other manifest fields, so recheck on revision change. Guide rendered and whitespace passed; checkout and delivery remain unverified.
- CODE-199: payment eligibility configuration requires authorized private security review; source-level only with runtime exposure and exploitability unverified. No public Issue or sensitive details recorded. Dry-run skipped hold; COD guide rendered and whitespace passed. Ledger: 176 synced, 52 security holds, 15 test-only.
- CODE-198 / #244: PayPal currency manifest default is not an offered option; actual payment form emitted synthetic default and valid currency unchanged without making a request. Joomla binding, conversion and provider unverified. Guide rendered and whitespace passed. Duplicate check and dry-run passed; creation succeeded but ledger rename temporarily failed with EPERM. A read-only rerun found the stable marker, then apply persisted the existing issue and reconciliation passed without duplication.
- GLS Business guide: added customer-facing warning for already tracked CODE-136 after rechecking the rate output at `beacc470`. Rendered and links resolved; checkout and provider unverified.
- Billy guide: expanded basic, payment, invoice, reminder and beta defaults against the manifest and English labels at `beacc470`; no tracking differences in the plugin. Rendered and whitespace passed; provider, accounting and Joomla remain unverified. Categories overview now links the new module guide; rendered and links resolved.
- New category-module guide and navigation entry: source-backed settings and known limitations for separately distributed `mod_redshop_categories`; inventory marked partial. Guide, overview and menu rendered and their chapter links resolved; whitespace passed. Updated references in #241–#243 were dry-run, synchronized and reconciled. Joomla and supported-database behavior remain unverified. Ledger: 175 synced, 51 security holds, 15 test-only; inventory 145 partial.
- CODE-197 / #243: default category link-list helper selected `id` but read `cid`; synthetic id-only records produced warnings and collapsed to one row. Database and Joomla unverified. Handoffs, master, triage and ledger updated; duplicate check, dry-run, creation and reconciliation passed.
- redMASSCART guide: added a shared-quantity example after rechecking `Cart::redMassCart` at `beacc470`; no tracking differences in the module or inspected cart files. Rendered and chapter link resolved; whitespace passed. Actual cart behavior and Joomla remain unverified.
- CODE-196: shopper-group product module source-level security investigation held for authorized private review; runtime exposure and exploitability unverified. No public Issue or sensitive details recorded; dry-run skipped the hold. Guide rendered, chapter link resolved and whitespace passed. Ledger: 174 synced, 51 security holds, 15 test-only. Continue independent documentation work.
- Similar Tags and Manufacturer Scroller guides: clarified matching, query filters and default ordering against module source at `beacc470`; no tracking differences. Both rendered and chapter links resolved. Joomla and final quality review remain open. Next: continue partial manual guides.
- Discount and Who Bought guides: clarified threshold display and ordering, group matching, discontinued-product filtering and zero-price presentation against module source at `beacc470`; no tracking differences for the modules. Both rendered and chapter links resolved; sync tests and whitespace passed. Joomla, checkout and final quality review remain open.
- CODE-195 / #242: valid-sort dTree query was rejected by in-memory SQLite for an unbound publication-filter alias; MySQL and Joomla unverified. Compared distinct #241 and #206; dry-run, creation and reconciliation passed. Handoffs, master, triage and ledger updated; 174 synced, 50 security holds, 15 test-only.
- CODE-194 / #241: category module's declared sort default is not an option; actual dTree layout raised an undefined-variable warning for synthetic default under warnings-as-exceptions. Joomla unverified. Handoffs, master, triage and ledger updated; dry-run, creation and reconciliation passed. No dedicated guide identified.
- CODE-193 / #240: Like and Share manifest default is not an offered choice; actual Like layout emitted synthetic values unchanged. Joomla and provider behavior unverified. Handoffs, master, triage, ledger and guide updated; duplicate check, dry-run, creation and reconciliation passed. One link and renderer passed; whitespace checked. Ledger before CODE-194: 172 synced, 50 security holds, 15 test-only.
- Search module guide: rechecked manifest at `beacc470` and clarified template ID, search-type and suffix defaults; no tracking differences for the module. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- Cart module guide: clarified button fallback and advanced options against the manifest and entry at `beacc470`. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- Product-compare module: rechecked manifest at `beacc470` and clarified empty class-suffix default; no tracking differences for this module. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- Price-filter module: rechecked manifest at `beacc470` and clarified empty class-suffix default; no tracking differences for this module. One link resolved, no baseline explicit IDs, renderer and whitespace passed; Joomla storefront unverified.
- CODE-192 / #239: cart output manifest default is not a choice; actual layout selected the extended branch for synthetic `1`. Form binding and Joomla unverified. Handoffs, master, triage, ledger and guide updated; #202 compared, dry-run, creation and reconciliation passed. One link and renderer passed; whitespace checked. Ledger: 171 synced, 50 security holds, 15 test-only.
- Next: continue source-backed quality review of partial module guides; compare relevant `origin/develop` tracking differences. Maintain the registers and synchronize any eligible new findings.
- CODE-191 / #238: free-shipping helper returned a free-rate message for a disabled synthetic extension using SQLite and stubs. MySQL, Joomla and checkout unverified. Handoffs, master, triage, ledger and guide updated; #189/#163/#162 compared, dry-run, creation and reconciliation passed. Two links and renderer passed; whitespace checked. Ledger: 170 synced, 50 security holds, 15 test-only.
- CODE-190: newsletter module source-level security investigation held for authorized private review; runtime exposure and exploitability unverified. No public Issue or sensitive details recorded; dry-run skipped it. Guide warns generically; three links, renderer and whitespace passed. Ledger before CODE-191: 169 synced, 50 security holds, 15 test-only. Continue independent work.
- Multi-currencies module guide: clarified multiple selection and removed repeated cache warning against manifest `beacc470`; no tracking differences for the module. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Joomla sessions and checkout unverified.
- Login-greeting guide: replaced potentially sensitive technical security detail with a generic review warning; one link resolved, no baseline explicit IDs, renderer and whitespace passed. CODE-036 remains on security hold.
- Giao Hang Nhanh guide: clarified credential field types from the manifest at `beacc470`; no tracking differences for the plugin. Two links resolved, no baseline explicit IDs, renderer and whitespace passed; provider and Joomla unverified.
- Bambora and Flatpay customer guides: replaced potentially sensitive technical security details with generic review warnings; no baseline explicit IDs or local links, renderer and whitespace passed. Existing historical review records may contain sensitive details: do not publish them; preserve and arrange authorized private review/migration before sanitizing, rather than losing evidence.
- CODE-189: source-level gift-card deletion security investigation held for authorized private review; runtime exposure and exploitability unverified. No public Issue or sensitive details recorded; selected dry-run skipped the hold. Ledger: 169 synced, 49 security holds, 15 test-only. Continue independent work.
- Account-group guide: clarified blank new mappings based on editor and model at `beacc470`; no tracking differences in checked files. One link resolved, no baseline explicit IDs, renderer and whitespace passed; provider and Joomla unverified.
- CODE-188 / #237: gift-card table store returned true and assigned a replacement filename after simulated old-image deletion and failed upload. Actual filesystem, database and Joomla unverified. Handoffs, master, triage, ledger and guide updated; duplicate check, dry-run, creation and reconciliation passed. Eleven baseline IDs retained, renderer and whitespace passed. Ledger: 169 synced, 48 security holds, 15 test-only.
- Countries guide: rechecked form, table validation and list model at `beacc470`; clarified blank required fields and default name ordering. Twelve baseline IDs and two links retained, renderer and whitespace passed; Joomla and integrations unverified.
- PostNord guide: clarified text-key handling and blank required shipment-field defaults using both manifests at `beacc470`; local tracking ref has no plugin differences. Four links in the guide and two related pages resolved; no baseline explicit IDs, renderer and whitespace passed. Provider and Joomla unverified.
- Shipper and Self Pickup guides: clarified label defaults and Shipper's rate/VAT path against manifests and helper at `beacc470`; no tracking differences for these plugins. Three links resolved, no baseline explicit IDs, renderer and whitespace passed. Checkout and label service unverified.
- Payment revision comparison: local tracking `920ea081` removes E-conomic fields in eight reviewed payment manifests and changes capture-status selectors to multiple in ePay, GiroPay and Paymill. Some labels/descriptions and ePay runtime code also differ. Guides remain based on checked-out `beacc470`; recheck affected guides and CODE-187 if the checkout changes. No merge or runtime test.
- GLS Business guide: rechecked manifest and clarified multiple shipping extra fields and the scope of its label default; two links, rendering, baseline explicit IDs and whitespace checked. Checkout and provider unverified.
- DOC-SEC-001: historical documentation image requires authorized private review for possible sensitive configuration; validity and exposure unverified. No public Issue or sensitive details recorded; selected dry-run skipped the hold. Ledger: 168 synced, 48 security holds, 15 test-only. Continue independent work; do not reuse the image.
- Product zoom guide: expanded mode-specific defaults and controls from the manifest; one link resolved, no baseline explicit IDs, renderer and whitespace passed. Joomla browser behavior and accessibility unverified.
- PayGate and Paymill guides: expanded manifest settings and defaults; old provider screenshots not reinstated as current UI. Each retained its link, has no baseline explicit IDs and rendered; whitespace passed. Provider, callback and Joomla unverified.
- Money Booker guide: expanded manifest settings and defaults without presenting old screenshots as current. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider, callback and Joomla unverified.
- GiroPay guide: expanded manifest fields and defaults without presenting old provider screenshots as current. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider, callback and Joomla unverified.
- CODE-187 / #236: ePay manifest's payment-type default includes a value missing from actual generated options with synthetic Joomla/asset stubs. Form binding, persistence and provider unverified. Handoffs, master, triage, ledger and expanded guide updated; duplicate check, dry-run, creation and reconciliation passed. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Ledger now 168 synced, 47 security holds, 15 test-only.
- Bao Kim guide: added source-verified settings, defaults and status selector differences; historical provider and checkout screenshots not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider and Joomla unverified.
- 2Checkout guide: rechecked manifest defaults and clarified shopper group, identifiers and blank credential fields; old provider and checkout screenshots were not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Provider, callbacks and Joomla unverified.
- EAN transfer guide: expanded plugin settings and defaults, including its extra-info placeholder; historical checkout screenshots not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Invoice delivery and payment reconciliation unverified.
- Bank transfer guide: expanded manifest fields, defaults and a percentage example against the plugin and payment helper; historical checkout screenshots were not reinstated as current UI. One link resolved, no baseline explicit IDs, renderer and whitespace passed. Actual checkout and bank reconciliation unverified.
- Image-preservation audit: 16 pages have changed baseline image references, including 15 plugin guides and the product guide. Historical plugin text was compared; the product SEO screenshot conflicts with current controls. Do not reuse historical screenshots without relevance and sensitive-content review; DOC-SEC-001 requires an authorized private channel. Continue source-backed work independently.
- Shipping-box guide: rechecked form defaults and validation; clarified blank name, dimensions and priority versus published default. Eight baseline IDs and one link retained; renderer and whitespace passed. Actual save and checkout unverified.
- CODE-186 / #235: actual reset script displayed the same success alert for synthetic HTTP 200, 403 and 500; no request, reset, browser or Joomla run. Handoffs, master, triage, ledger and order guide updated; both baseline IDs retained, rendering and whitespace passed. Duplicate check and dry-run passed; Issue created and reconciled. Continue partial manual quality work.
- Full read-only reconciliation of earlier snapshot: 228 selected, 166 unchanged and 62 skipped (47 security holds and 15 test-only). CODE-186 and CODE-187 were added after the snapshot and separately reconciled.
- Manufacturer guide: rechecked list query and default order against `ManufacturersModel.php`; clarified default ID descending, subject to saved list state. Thirteen baseline IDs, four checked links, rendering and whitespace passed; Joomla list unverified.
- Dashboard configuration guide: added an individual-item example and the script-dependent parent/child checkbox behavior. Fourteen baseline IDs and five checked links retained; renderer and whitespace passed. Joomla UI and saved configuration unverified.
- Manual-wide local checks: all 160 Markdown pages rendered with bundled renderer; 350 `chapters/` links, 158 menu targets, 14 Markdown and 50 HTML local fragments, one cross-page fragment and three local product images resolved; all baseline explicit HTML IDs were retained. One external Markdown link and 220 external HTML references were not checked. Published browser routing and content quality remain unverified.
- Git recheck: Core HEAD remains `beacc470` on `develop`, documentation HEAD remains `6ae296db` on `modernize`. Local `origin/develop` tracking ref is `920ea081`, seven commits ahead, with 23 component, 13 library and 126 plugin paths changed; it has not been fetched or merged here. The three tax/currency table files checked in this pass have no diff against that local tracking ref. Continue against the recorded working revision and compare affected topics before relying on newer Core; preserve dirty worktrees.
- Currency guide: clarified configured-currency deletion guard and its limits against `CurrencyTable.php:118-129`; integrations and Joomla unverified. Nine baseline IDs retained, bundled rendering and whitespace passed.
- Tax group guide: rechecked form, list and rate-associated deletion guard; clarified required name, sorting and limitations. Product references and Joomla unverified. Eight baseline IDs and the checked link retained; bundled renderer and whitespace passed.
- CODE-180–182 and CODE-185 reconciled unchanged. Ledger: 166 synced, 47 security holds, 15 test-only; no pending-sync rows. Inventory: 144 partial, one historical annotation and 15 historical-preserved pages.
- CODE-185 / #234: actual tax-rate table store returned success after a synthetic first group-association write failed and a later one succeeded. Driver behavior, real database and Joomla unverified. Handoffs, master, triage, ledger and VAT guide updated; dry-run, creation and reconciliation passed. VAT guide retained 12 baseline anchors and checked link, rendered and whitespace passed.
- CODE-184: source-level tax-rate deletion security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent documentation work.
- CODE-183: source-level wrapping deletion security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent documentation work.
- Shipping boxes guide: corrected the candidate-dimensions description and documented box-control visibility from `Shipping.php:1008-1109,1146-1183`, `Tags/Sections/Shippingbox.php:79-92` and `Shipping/Tag.php:562-576`. Checkout, carrier behavior and actual packing unverified. Eight baseline anchors and checked link retained; bundled renderer and whitespace passed.
- CODE-182 / #233: actual wizard save with a synthetic user-step session raised an undefined VATREMOVE warning under warnings-as-exceptions before redirect and after session update. Joomla handling and navigation unverified. Compared distinct #232 company text, #231 VAT tasks and #110 configuration copy; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and wizard guide updated; wizard rendered, four checked links resolved, baseline anchors retained and whitespace passed.
- CODE-181 / #232: actual wizard save with synthetic input and session retained the canonical company intro and stored the new text under a different key; actual file save and Joomla unverified. Compared distinct #231 VAT routing and #110 configuration copy; dry-run, creation and reconciliation passed. Guide and registers updated; four checked links resolved, baseline anchors retained, rendered and whitespace passed.
- CODE-180 / #231: actual wizard VAT layout rendered old or misspelled rate task names with a synthetic record; remove redirects to another legacy task. Joomla dispatch and rate changes unverified. Wizard guide expanded from source; handoffs, master, triage and ledger updated; dry-run, creation and reconciliation passed. Wizard retained baseline anchors, four checked links resolved, rendered and whitespace passed.
- CODE-179 / #230: actual suggestion cache methods raised TypeError refining a synthetic substring result without a product number; actual AJAX query does not select that field. Browser, AJAX and Joomla unverified; initialization is separately tracked as #229. Handoffs, master, triage, ledger and search guide updated; dry-run, creation and reconciliation passed. Guide rendered, checked link resolved and whitespace passed.
- CODE-178 / #229: Node VM loading actual module and component search scripts left synthetic keyword handlers unset and `makeUrl` undefined; default module refers to the latter. Other scripts, asset loading, browser and Joomla unverified. Compared distinct #227 custom-field rendering; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and search guide updated.
- CODE-177 / #228: actual accessory price CASE adapted to SQLite returned NULL for synthetic multiplication and division; actual price helper converted NULL to zero without VAT. Editor accepts both operators. MySQL, Joomla and checkout unverified. Handoffs, master, triage, ledger and product guide updated; dry-run, creation and reconciliation passed. Product guide retained 20 baseline anchors, seven checked links resolved, rendered and whitespace passed.
- CODE-176 / #227: real default Twig search layout rendered no custom-field selectors with synthetic populated and empty field data; module omits the data and layout checks for emptiness before iterating. Joomla, helper database and overrides unverified. Compared distinct #226 query; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and search guide updated. Search guide retained baseline anchors, checked link resolved, rendered and whitespace passed.
- CODE-175 / #226: SQLite equivalent of search joined-category exclusion retained a synthetic product assigned to both excluded and allowed categories. Product-wide exclusion policy, MySQL and Joomla unverified; not access control. Handoffs, master, triage, ledger and search guide updated; dry-run, creation and reconciliation passed. Guide rendered, checked link resolved and whitespace passed.
- CODE-174: source-level price-filter module security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent documentation work.
- CODE-173 / #225: actual price-filter layout with synthetic selected 100–200 emitted the same limits and values; browser and Joomla state unverified. Handoffs, master, triage, ledger and module guide updated; dry-run, creation and reconciliation passed. Next verify guide and continue partial manuals.
- CODE-172 / #224: actual promotion removal duplicated one product and left another beyond the reduced count in a synthetic cart. Persistence and discount recalculation stubbed; real checkout unverified. Compared distinct #223 warning, #222 shipping restoration, #94 award lookup and #76 date comparison; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Next verify guide and continue partial manuals.
- CODE-171 / #223: actual promotion removal with synthetic cart read an unset final index; warning-as-exception aborted before stubbed persistence. Joomla warning handling and checkout unverified. Compared distinct #222 shipping restoration; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Next verify guide anchors and continue partial manuals.
- Cart configuration guide: added distributed add-to-cart, quotation, timeout and AJAX dimension/template defaults from `default_cart_settings.php` and `config.dist.php:65,159-161,666,700,712-714,724-730`. Actual saved settings, template availability and storefront unverified. Next verify guide anchors/links and continue partial manuals.
- Product configuration guide: documented distributed template ID, ordering and out-of-stock attribute default against `default_product_template_image_settings.php` and `config.dist.php:171,460,710`. Template availability and storefront unverified. Next verify guide anchors/links and continue partial manuals.
- Category configuration guide: documented distributed category template IDs based on `default_category_template.php`, Configuration view and `config.dist.php:173-175`, without assuming records exist. Actual binding and storefront unverified. Next verify guide anchors/links and continue partial manuals.
- Manufacturer configuration guide: documented distributed template ID and blank title limit/suffix against `default_manufacturer_setting.php`, `default_manufacturer_image_setting.php` and `config.dist.php:69-83,177,554-556`. Actual template binding and storefront unverified. Next verify anchors/links and continue partial manuals.
- CODE-170 / #222: actual promotion shipping apply and removal methods with synthetic two-promotion cart restored prior shipping on removing the non-shipping award, while free-shipping award remained. Discount recalculation and persistence stubbed; actual checkout unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Guide retained nine baseline IDs and rendered; whitespace passed. Ledger: 154 synced, 44 security holds, 15 test-only. Continue remaining partial manuals.
- CODE-169 / #221: actual mass-discount delete generated an unconditional reset of synthetic selected product sale flag, price and dates using parent/database stubs. Actual database and overlap semantics unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Guide baseline anchors and bundled renderer passed. Continue remaining manuals.
- CODE-168: source-level product-price helper security investigation held without sensitive details pending an authorized private channel; exploitability and runtime unverified. No public issue created. Continue independent documentation work; do not infer a confirmed vulnerability.
- Mass discount guide: clarified delete resets sale flag, price and dates for resolved products without checking overlap, based on `MassdiscountTable.php:126-219`; no actual database or Joomla tested. Next verify anchors/rendering and continue remaining manuals.
- Product-price discount guide: clarified zero/open and inclusive date predicates and empty-category eligibility for products with category IDs in the inspected `ProductPrice.php:548-607` path. Saved values, other paths and Joomla unverified. Next verify guide anchors and continue partial manuals.
- CODE-167 / #220: newsletter controller with stubs raised ValueError on a synthetic negative batch size; positive size queued. Config preparation normalizes zero only; real saving and dispatch unverified. Compared distinct #168 progress, #169 routing and #170 recipient fields; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and newsletter guides updated. Newsletter guides retained baseline anchors and resolved checked links; bundled Markdown and whitespace passed. Next continue partial manuals.
- CODE-166 / #219: order-total discount schema uses numeric dates and list selects raw values; actual renderer with stubs failed for synthetic numeric start and end, but accepted formatted strings. Actual saved records and Joomla list unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Next verify guide anchors and continue partial manuals.
- CODE-164 / #217 voucher extension: actual voucher list renderer raised Error on a synthetic null date with Joomla/config stubs; zero and valid dates rendered. Voucher schema permits null; actual records and Joomla unverified. Related coupon issue updated with idempotent evidence comment and reconciled. Voucher guide updated. Next verify voucher anchors, links and rendering; continue partial manuals.
- CODE-165 / #218: actual coupon and voucher models with parent/Joomla stubs rejected a start-only range while accepting end-only, both-empty and ordered ranges on PHP 8.4. Real persistence and checkout unverified. Handoffs, master, triage, ledger and both guides updated; dry-run, creation and reconciliation passed. Next verify both guides' anchors/links and continue partial manuals.
- CODE-164 / #217: actual coupon list renderer raised an Error for a synthetic null date allowed by the install schema, with Joomla/config stubs; zero and valid dates rendered. Actual saved data, blank-date save and Joomla unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Next verify coupon anchors and links, then continue remaining partial pages.
- CODE-163 / #216: actual product delivery helper with query-builder stub and in-memory SQLite selected an unpublished 1–2 day stockroom over a published 3–4 day stockroom. Expected publication policy, MySQL and Joomla storefront unverified. Compared distinct #215, #214, #205, #120 and #94; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Next verify guide anchors and links, then continue remaining partial pages.
- CODE-162 / #215: actual product delivery helper with database/translation stubs displayed `0-0 weeks` for synthetic 1–2 and `1-2 weeks` for 8–15; intended units, persistence and Joomla storefront unverified. Compared distinct #214, #205, #120 and #94; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger and guide updated. Next verify guide anchors and links, then continue remaining partial pages.
- CODE-161 / #214: bundled Joomla switcher rendered neither delivery unit checked when given the stockroom XML's default and options, using asset stubs; real new-record form binding, persistence and storefront unverified. Handoffs, master, triage, ledger and guide updated; dry-run, creation and reconciliation passed. Guide retained five baseline IDs and one link; renderer and whitespace passed. Next investigate Weeks delivery rendering and continue partial pages.
- Stockroom management: documented source-verified minimum-stock and delivery-range save checks (`StockroomModel.php:31-51`) at `beacc470`. The delivery-unit XML default does not match its options; actual Joomla form/save behavior is unverified and needs investigation. Next check guide anchors and links, then investigate that mismatch safely and review remaining partial pages.
- User configuration: added source-verified registration, shopper-group and checkout-required distributed defaults; shipping phone/email defaults were not found in the distributed config. Sources are in the master; actual account, consent and checkout behavior remain unverified. Next check guide anchors, links and rendering and continue partial configuration pages.
- Integration configuration: documented selected Clickatell, PostNord and e-conomic visibility, save checks and defaults; PostNord is disabled in the distributed configuration but automatic label generation and notification options are enabled if activated. Source references are in the master; provider operations and Joomla remain unverified. Next check guide anchors, links and rendering and continue partial configuration pages.
- SEO configuration: documented distributed product, category and manufacturer pattern defaults against `component/admin/tmpl/configuration/default_seo_product.php`, `default_seo_category.php`, `default_seo_manufacturer.php` and `component/admin/config/config.dist.php:366-398` at `beacc470`; actual metadata, routing and Joomla remain unverified. Next check SEO and price anchors, links and rendering, then continue remaining partial configuration pages.
- CODE-160 / #213 investigation: synthetic Chrome number input with initial `0.000` reported step mismatch for `0.16`, matching the VAT field's type and missing step. Joomla form and save not run; toolbar source submits directly, so do not claim save is blocked. Handoffs, master, triage, ledger and guide updated. Dry-run, creation and reconciliation passed; recheck guide links and anchors then continue SEO and other partial configuration guides.
- Price/VAT continued: expanded selector choices, distributed defaults, customer-location and EU-rate behavior, template text and the currency-change symbol reset using the configuration source, tax helpers and billing template at `beacc470`; exact references are in the master. Five baseline IDs and six links retained; bundled renderer and whitespace passed before the final symbol clarification. Real form, tax, shipping and Joomla are unverified. Next recheck links/whitespace and continue partial configuration pages.
- Price configuration: verified discount, discount-mail and gift-card image controls, visibility and selected distributed defaults against configuration templates, view and `config.dist.php` at `beacc470`; guide expanded without claiming the scheduler sends mail. Five baseline IDs and six manual-root links retained; bundled Markdown rendered and whitespace passed. Tax, scheduler, cart and Joomla runtime remain unverified. Next continue the remaining price/VAT fields and partial manuals.
- Order configuration: clarified invoice-recipient visibility and distributed order-mail, customer-mail, invoice and reorder defaults against `default_ordertab.php`, Configuration view and `config.dist.php` at `beacc470`. Two baseline IDs retained; bundled Markdown rendered and whitespace passed. Actual payment, invoice numbering, mail and Joomla remain unverified. Next continue remaining partial configuration fields and manuals.
- Feature settings: verified stockroom, comparison, review and import controls against their templates and `config.dist.php` at `beacc470`; documented additional distributed defaults and the stockroom-ID caveat. Six baseline IDs and three manual-root links retained; bundled Markdown rendered and whitespace passed. Joomla stock, comparisons and actual import remain unverified. Next continue remaining partial configuration fields and manuals.
- General configuration: added source-checked distributed store defaults and image-processing choices against `default_settings.php`, `default_general_layout_settings.php`, configuration view and `config.dist.php` at `beacc470`. Three baseline IDs and three manual-root links retained; bundled Markdown rendered and whitespace passed. Saved settings, image processing and Joomla remain unverified. Next continue the remaining partial configuration fields and manuals.
- Cart configuration: clarified conditional controls, redirect choices, selected distributed defaults and **Quantity Max Characters** against the form, language string, config and actual product quantity renderer at `beacc470`. The guide retains six baseline IDs; bundled Markdown rendered and documentation whitespace passed. Checkout, shipping, provider and browser behavior remain unverified. Next continue the remaining partial configuration fields and manuals.
- Product and category configuration image controls and distributed defaults checked against their templates and `config.dist.php`; category suffix defaults also checked. Both articles updated; product retains 15 baseline IDs and two manual-root links, category six IDs and two links. Whitespace passed; #211 and #212 reconciled unchanged. Image generation, saved settings and Joomla storefront remain unverified. Next continue the remaining partial configuration and manual pages.
- Product configuration wrapping, accessory and related-product fields and distributed defaults checked against their templates, selector helper and `component/admin/config/config.dist.php` at Core `beacc470`; guide expanded. Existing saved values, Joomla UI and storefront remain unverified. Next verify guide anchors and links, then inspect remaining product image fields and other partial pages.
- Product configuration retained all 15 baseline IDs and both manual-root links; product guide retained 20 baseline IDs and seven links after its general-field/default update. Documentation whitespace, CODE-159 fixture and sync tests passed. Bundled Markdown renderer source pass found all 35 in-page fragment links in the 144 partial pages target an explicit ID or named anchor; cross-article scrolling remains the known CODE-003 issue and browser behavior was not retested. Continue remaining product configuration fields and partial manuals.
- CODE-159 / #212: actual first sample-reminder method called a mail stub after 60 seconds for a synthetic setting of one despite the setting describing days; no call at 59 seconds. No actual mail, scheduler, database or Joomla ran. Compared distinct coupon-expiry #85; dry-run, creation and reconciliation passed. Product configuration guide updated with source-backed distributed defaults and hidden-container caveats. Ledger: 202 entries, 144 synced, 43 security holds and 15 test-only. Verify guide anchors, links and whitespace, then continue remaining product configuration fields and partial manuals.
- Manual quality pass: all 144 partial pages retained their baseline explicit IDs; 320 manual-root Markdown/HTML file references and five local image references resolved in a source scan. This does not check all link forms, fragments, external URLs, image currency or browser rendering. Product guide: removed obsolete SEO and calculator screenshots that conflict with current templates, labelled remaining screenshots historical and added alt text. Its 20 baseline IDs, seven manual-root links and remaining image alt text passed; Joomla and full field-level review remain open. Next continue the product editor field-level pass, then remaining partial manuals.
- CODE-158 / #211: actual category-filter layout emitted missing-key warnings and raised `TypeError` for each of four synthetic manufacturer, category, custom-field and attribute choices with empty input. The first two were used for creation; the latter two were added as reviewed evidence to the same Issue. Dry-runs, creation, comment, reconciliation, PHP fixture, sync test and label test passed. Joomla routing, database and storefront remain unverified. Ledger: 201 entries, 143 synced, 43 security holds and 15 test-only. Verify category guide baseline IDs and links, then continue remaining partial manuals and findings.
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
- Data Import guide retained all 14 baseline explicit IDs and its export link resolves; documentation whitespace check passed. The ledger currently has no pending-sync or pending-review rows; 43 security holds and 15 test-only items remain open. Inventory still contains 144 partial pages requiring final quality review. Continue the manual rather than treating this check as completion.
- Data Import guide: clarified global limits, minimum batch size and product record-key behavior against the screen, configuration and shared/product importer source. No import or database was run. Data Export guide retained all 14 baseline explicit IDs and its import link resolves. Check import anchors and export link; continue partial manuals.
- Data Export guide: documented product exporter extra-field and attribute defaults, stockroom columns and category/manufacturer filter interaction against the screen and plugin source. Actual export and Joomla UI remain unverified. Check links and baseline anchors; continue import/export and other partial manuals.
- CODE-152 through CODE-155 reconciled unchanged. Sync and label tests, video markup fixture, documentation whitespace check and Facebook guide baseline-ID/link check passed. These checks do not verify Joomla, browser rendering or provider behavior. Continue partial manuals.
- CODE-155 / #208: actual Facebook video layout's malformed closing tags caused following synthetic content to remain inside the blockquote in PHP libxml. Real browsers, SDK and Joomla remain unverified. Dry-run, creation and reconciliation passed; guide warning added. Ledger: 198 entries, 140 synced, 43 security holds and 15 test-only. Recheck guide link and anchors; continue partial manuals.
- Shopper-group logo guide: clarified guest versus logged-in selection and absence of guest-logo fallback, plus integer thumbnail dimensions. Existing link and baseline explicit IDs checked; rendering remains unverified. Continue partial manuals.
- CODE-154 / #207: actual shopper-group logo layout emitted an image without `alt` for synthetic guest and logged-in identities with a synthetic file path and image helper. Screen reader and Joomla storefront remain unverified. Dry-run, creation and reconciliation passed; guide updated. Ledger: 197 entries, 139 synced, 43 security holds and 15 test-only. Check guide link and baseline anchors; continue partial manuals.
- CODE-152 / #205: unchanged `doExecute` method extracted from the datafeed source raised `TypeError` for synthetic object and null menu results using stubs. The CLI bootstrap and full application were not run; real feed output, database and installed extension remain unverified. Dry-run, evidence comment and reconciliation passed. Continue remaining partial manuals.
- CODE-152 / #205: actual filter result layout raised `TypeError` for synthetic object and null menu results with isolated Joomla, category, product and template stubs. Real filtering, database and storefront remain unverified. Dry-run, evidence comment and reconciliation passed. Datafeed remains source-observed only; its CLI bootstrap must not be run against a live or shared site. Continue partial manuals.
- CODE-152 / #205: actual Xmap product-tree path also raised `TypeError` for synthetic object and null menu results using query and Xmap stubs. Real query, installed extension and Joomla dispatch unverified. Dry-run, evidence comment and reconciliation passed. Filter layout and datafeed remain source-observed only; investigate safely and continue partial manuals.
- Facebook and free-shipping guides retained zero baseline explicit IDs; all three manual-root links resolve, including the free-shipping rate-list fragment. Rendering and generated heading fragments were not tested.
- Free-shipping promotion guide: clarified blank rate ID, empty cart and subtotal-boundary messages from the helper; CODE-105 remains open. Actual rate eligibility and checkout remain unverified. Check guide links and baseline anchors; continue partial manuals.
- Facebook module guide: expanded manifest defaults and actual layout-specific setting use; Page controls are not offered as a selectable Page plugin. SDK loading, provider consent, rendering and responsive behavior require authorized runtime verification. Check guide link and baseline anchors; continue remaining partial manuals and CODE-152 callers.
- CODE-153 / #206: actual Xmap category method generated a query rejected for undefined alias `b` by in-memory SQLite with a query-builder stub. MySQL and installed Joomla/Xmap remain unverified. Manually compared distinct #205; dry-run, creation and reconciliation passed. Sync and label tests passed. Ledger: 196 entries, 138 synced, 43 security holds and 15 test-only. Continue CODE-152's source-only callers and partial manuals.
- CODE-152 / #205 Xmap follow-up: actual protected category-product path raised `TypeError` for synthetic object and null menu results with database and Xmap stubs. The real category query, extension installation and Joomla execution remain unverified. Dry-run, evidence comment, reconciliation, fixture and sync tests passed. Continue safe investigation of the filter layout and datafeed and remaining partial manuals.
- CODE-152 / #205 follow-up: actual failed non-AJAX accessory-add workflow also raised `TypeError` for null and object menu stubs; real cart processing and Joomla redirect remain unverified. Dry-run, evidence comment, reconciliation, fixture and sync tests passed. Comparison guide retained zero baseline explicit IDs and one resolved manual-root link. Filter layout, Xmap and datafeed remain source-observed only; investigate safely with stubs and continue partial manuals.
- CODE-152 / #205: actual Product Compare layout raised `TypeError` when the synthetic menu lookup returned either null or an object. Accessory workflow, filter layout, Xmap and datafeed have the same source pattern but were not executed. Dry-run, creation and reconciliation passed; Joomla and extension installation remain unverified. Ledger: 195 entries, 137 synced, 43 security holds and 15 test-only. Verify comparison guide links, then investigate those other callers with safe isolated fixtures and continue partial manuals.
- CODE-151 / #204: Mega Menu checks menu query `id` but reads `catid`; the actual helper produced a missing-key warning and null category ID for synthetic id-only menu data. Compared distinct sorting issue #201; dry-run, creation and reconciliation passed. Real Joomla menu data and hierarchy remain unverified. Ledger: 194 entries, 136 synced, 43 security holds and 15 test-only. Verify the updated Mega Menu guide anchors and links, then continue remaining partial manuals.
- Login Greeting guide: clarified manifest settings and guest behavior; retained zero baseline explicit HTML IDs and one resolved manual-root link. Actual Joomla session and output handling remain unverified. CODE-144 through CODE-150 all reconciled unchanged.
- Product Tab guide: documented manifest settings, numeric defaults that do not match option values, and the most-sold query's lack of order-status filter. Existing CODE-039, CODE-077 and CODE-083 remain open. Product Tab and cart guides each retained zero baseline explicit HTML IDs and one resolved manual-root link; rendering and actual Joomla form/storefront behavior remain unverified. Sync/label tests and both whitespace checks passed. Continue remaining partial manuals.
- CODE-150 / #203: with discount inclusion disabled the actual isolated cart calculator retained synthetic subtotal 100 while the separately exercised layout displayed a synthetic positive discount line. Intended display semantics and real cart field relationships remain an investigation; Joomla storefront and checkout unverified. Dry-run, creation, reconciliation, fixture and sync tests passed. Ledger: 193 entries, 135 synced, 43 security holds, 15 test-only. Verify cart guide anchors and links, then continue remaining partial manuals.
- CODE-149 / #202: actual default Twig template omitted the empty-cart link with `showEmptyBtn` enabled because it checks a differently spelled variable; populated synthetic cart displayed it. Dry-run, creation and reconciliation passed. Joomla storefront and custom layouts remain unverified. Next investigate the separate discount-line setting with the session `files/cart-module-probe.php`, update the registers and guide, then continue remaining partial manuals. Ledger: 192 entries, 134 synced, 43 security holds, 15 test-only.
- CODE-148 / #201 follow-up: the actual Mega Menu sort helper has no Ordering comparator and retained synthetic ordering values 2 then 1 for ascending Ordering. Real database query, nested menu and storefront remain unverified. Dry-run, evidence comment, reconciliation, fixture and sync tests passed. Mega Menu guide retained zero baseline explicit IDs and one resolved manual-root link. Ledger: 191 entries, 133 synced, 43 security holds and 15 test-only. Continue remaining partial manuals.
- CODE-148 / #201: actual Mega Menu sort helper returned `A, Z` for descending synthetic names because its reversed array is discarded. Dry-run, creation and reconciliation passed; guide expanded from manifest, entry, helper and layout. Nested sorting and Joomla storefront remain unverified. Ledger: 191 entries, 133 synced, 43 security holds, 15 test-only. Verify guide anchors and links, then investigate the separate Ordering sort option and continue partial manuals.
- Discount module guide: clarified settings and helper selection against source; retained zero baseline explicit IDs and one resolved manual-root link. Actual pricing, group and storefront behavior remain unverified.
- CODE-146 / #199 follow-up: Who Bought default layout also raised `DivisionByZeroError` for synthetic zero with isolated stubs. Both handoffs, master, triage, ledger and guide updated; dry-run, additive comment and reconciliation passed. Real forms and storefront remain unverified. Who Bought guide has zero baseline explicit HTML IDs and one resolved manual-root link. Continue partial manuals.
- Shopper-group category and product guides: settings expanded against their manifests and layouts; each retained zero baseline explicit IDs and one manual-root link resolved. CODE-037 remains a private security hold, not a confirmed exploit. Multi-currency guide also retained zero baseline explicit IDs and one resolved manual-root link. No Joomla runtime, session or access behavior was tested.
- Product module guide: expanded selection and presentation options against the manifest, entry query and default layout; most-sold query has no order-status filter. Retained zero baseline explicit HTML IDs and resolved one manual-root link. Multi-currency guide: clarified manifest settings and empty-selector behavior against its helper and layout; verify its anchors and links. Actual database, sessions, cache, storefront, pricing and checkout remain unverified. Continue remaining partial manuals.
- redMASSCART guide retained zero baseline explicit HTML IDs and its manual-root link resolved; generated headings and rendering were not checked.
- CODE-147 / #200: actual mass-cart helper silently skipped a synthetic unknown number while submitting two eligible products at the same quantity to a cart stub and warning about an unpublished product. Compared distinct #196 and #142; dry-run, creation and reconciliation passed. Expanded redMASSCART guide against manifest, form, workflow and helper. Actual database, cart addition and Joomla storefront remain unverified. Ledger: 190 entries, 132 synced, 43 security holds, 15 test-only. Next verify guide anchors and links and continue remaining partial manuals.
- Manufacturer and Similar Tags guide checks: both retained zero baseline explicit HTML IDs and each manual-root link resolved; generated headings and rendering were not checked. Sync and label tests, manufacturer fixture and both whitespace checks passed.
- CODE-146 / #199 and CODE-145 / #198: manufacturer scroller default layout raised `DivisionByZeroError` with string zero and produced an unlinked image despite the Image Link setting; the linked-name and positive-value paths were exercised using isolated stubs. Joomla form, storefront and alternative layouts remain unverified. Compared the distinct root causes, dry-ran, created and reconciled both Issues. Expanded the manufacturer guide from manifest, helper and layout. Ledger: 189 entries, 131 synced, 43 security holds, 15 test-only. Next verify guide anchors and links, then continue remaining partial manuals.
- CODE-144 / #197 follow-up: Joomla 5.4.0 and 6.0.0 tagged cache source forwards or stores callback results; actual helper and entry raised `TypeError` with a forwarding stub. Installed Joomla cache and storefront remain untested. Dry-run, evidence comment and reconciliation passed; source references added to Core handoff. Continue remaining partial manuals.
- Search and Price Filtering modules: rechecked manifest and entry paths, added field-level configuration and default guidance. Both retain baseline HTML IDs (none) and two manual-root links resolve; Joomla storefront and pricing remain unverified. Continue remaining partial manuals.
- CODE-141 / #194 follow-up: the actual Giao Hang Nhanh cancellation handler also invokes stubbed cancellation for synthetic tracking and two different shipping-method values, without inspecting the method. Joomla event registration/dispatch and provider behavior are unverified. Updated both handoffs, master, triage, ledger and guide; dry-run, additive issue comment and reconciliation passed. Fixture: session `files/ghn-status-guard-probe.php`. No network or provider call was made.
- Full read-only reconciliation completed from its pre-follow-up snapshot: 186 selected, 128 unchanged and 58 skipped (43 security holds and 15 test-only). CODE-141's subsequent changed evidence was separately reconciled. Holds and test-only acceptance remain open. Sync/label tests, fixture and both whitespace checks passed.
- e-conomic account group: clarified list defaults, fields and actions from current model and templates. Baseline HTML IDs (none) preserved and one manual-root link resolves; Joomla and accounting provider remain unverified.
- e-conomic setup: added account-dependent authentication controls, accounting fields and cashbook defaults from the manifest and inspected provider field/handler. Three manual-root links resolve; no baseline HTML IDs. Provider, accounting and Joomla runtime remain unverified. Continue remaining partial manuals.
- Bambora and Flatpay guides: rechecked manifest defaults and existing CODE-029 / #92 currency typo; added current configuration guidance while keeping payment security holds and provider verification open. Billy, Relatel, Bambora and Flatpay retained their baseline HTML IDs (none); whitespace passed. Continue remaining partial manuals.
- Billy and Relatel guides: rechecked manifest defaults and shared Relatel monitoring; documented potentially consequential new-install defaults separately from saved settings. Accounting/provider operations and Joomla UI remain unverified. Next check both guides' anchors and links, then continue remaining partial manuals.
- CODE-136 and CODE-140–143 reconciled unchanged; sync/label tests and both whitespace checks passed. PostNord and Giao guides retained their baseline IDs (none) and four manual-root links resolve. This does not verify rendering.
- CODE-143 / #196: actual Giao Hang Nhanh dynamic rate handler passed synthetic weight 2 to a stubbed fee method for quantities 1 and 3. Order-creation weight omission is source-observed only; real provider units and checkout remain unverified. Compared #193–#195 before dry-run and creation; reconcile. Ledger: 186 entries, 128 synced, 43 security holds, 15 test-only. Continue plugin source review and other partial manuals.
- CODE-142 / #195: actual Giao Hang Nhanh pre-store handler mapped synthetic `Delivered` to null while `Picking` and `Delevered` selected stubbed mappings. Real provider status spelling and event dispatch are unverified. Compared #193 and #194 before dry-run and creation; reconcile. Ledger: 185 entries, 127 synced, 43 security holds, 15 test-only. Continue plugin review and other partial manuals.
- CODE-141 / #194: actual Giao Hang Nhanh shipment handler reached stubbed creation for two different synthetic shipping-method field values; it never inspects the field. Encoded rates, real event dispatch, provider and persistence unverified. Compared #193's different status/tracking guard before dry-run and creation; reconcile. Ledger: 184 entries, 126 synced, 43 security holds, 15 test-only. Continue Giao Hang Nhanh event paths and remaining partial manuals.
- CODE-140 / #193: actual Giao Hang Nhanh shipment handler called a stubbed creation method for the wrong status without tracking and for the configured status with tracking; other two guard combinations also tested. No external request, real order or Joomla event dispatch used. Dry-run and creation passed; reconcile and continue the plugin source and manual review. Ledger: 183 entries, 125 synced, 43 security holds, 15 test-only.
- CODE-136 / #190: shopper-group default rates in default-shipping and PostNord pickup omit descriptions by source inspection. Updated handoffs, master, triage and ledger; dry-run, additive comment and reconciliation passed. PostNord guide now distinguishes manifest defaults and required shipment fields from saved values; runtime and provider remain unverified.
- CODE-139 / #192: actual USPS rate handler raised TypeError for object and null shipping addresses using isolated helpers and synthetic configuration. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger, shipping guide and inventory updated. Provider, database and Joomla checkout are unverified. Ledger: 182 entries, 124 synced, 43 security holds, 15 test-only. Continue carrier and partial manual review; verify the latest guide.
- CODE-138 / #191: actual FedEx rate handler returned an empty list before provider lookup with a populated billing stub, synthetic configuration and valid box dimensions. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger, shipping guide and inventory updated. Provider, database and Joomla checkout are unverified. Ledger: 181 entries, 123 synced, 43 security holds, 15 test-only. Continue carrier and partial manual review; verify the latest guide.
- CODE-136 / #190 additional evidence: Bring, USPS, UPS, FedEx, Ahamove and Giao Hang Nhanh rate objects also omit description by source inspection. Only the self-pickup fallback was actually exercised. Both handoffs, master, triage and ledger updated; dry-run, additive comment and reconciliation passed. No provider or checkout tested. Continue partial manuals and verify the latest guide edits.
- CODE-137: carrier diagnostic output requires authorized private review. Source observation only; runtime exposure and exploitability unverified. Nonsensitive security hold recorded in both handoffs, master, triage and ledger; no ordinary Issue created. Ledger: 180 entries, 122 synced, 43 security holds, 15 test-only. Continue independent manuals and ordinary findings.
- CODE-136 / #190 follow-up: Shipper's rate constructor also omits description by source inspection; only self-pickup fallback was actually exercised. Updated handoffs, master, triage, ledger, Shipper guide and inventory; dry-run, additive comment and reconciliation passed. No Joomla checkout tested. Continue partial manuals and verify the latest guide edits.
- CODE-136 / #190: actual self-pickup fallback and shipping renderer emitted a missing-description warning with isolated helpers and layout; GLS variants are source-observed only. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger and shipping guide updated. Joomla checkout remains unverified. Ledger: 179 entries, 122 synced, 42 security holds, 15 test-only. Continue GLS and other partial manuals; verify the latest guide edits.
- CODE-135 / #189: actual GLS shipping-address handler and rate helper raised TypeError for a string shipping token and nonempty pickup selection with isolated plugin base. Checkout event dispatch, provider and database are unverified. Compared #188's separate lookup failure; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger, GLS guides and inventory updated. Ledger: 178 entries, 121 synced, 42 security holds, 15 test-only. Continue GLS source review and partial manuals; verify the latest guide edits.
- CODE-134 / #188: actual GLS pickup lookup raised Error after simulated client-initialization failure with stubs and no network request. Compared #102's separate e-conomic plugin; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger, GLS guide and inventory updated. Provider and Joomla checkout remain unverified. Ledger: 177 entries, 120 synced, 42 security holds, 15 test-only. Continue GLS source review and partial manuals; verify the latest guide.
- CODE-133 / #187: actual wrapper and shared model state methods with stubs map price and publication ordering to ID; name stays name. Compared #183's separate manufacturer model and #165's wrapper toggle, then dry-ran, created and reconciled. Handoffs, master, triage, ledger, wrapping guide and inventory updated. The fixture also emitted PHP 8.4 deprecations, some attributable to its parent stub; no Joomla UI or database tested. Ledger: 176 entries, 119 synced, 42 security holds, 15 test-only. Continue wrapping and other partial manuals.
- CODE-132 / #186: actual box tag renderer with supplied rows and layout stubs rendered entries 1 and 3 for priorities 1, 2, 2; intended priority semantics and checkout remain unverified. Dry-run, creation and reconciliation passed; handoffs, master, triage, ledger, box guide and inventory updated. The pickup guide now explains the standard renderer's explicit self-pickup state-filter exemption; end-to-end checkout is unverified. Ledger: 175 entries, 118 synced, 42 security holds, 15 test-only. Continue partial manuals and verify the latest guide edits.
- CODE-131 / #185: actual controller and model save methods emitted six missing-key warnings and two PHP 8.4 deprecations with a representative location submission and input/table stubs. The stubbed store succeeded; actual Joomla request and database are unverified. Compared #184's distinct Delete task; dry-run, creation and reconciliation passed. Handoffs, master, triage, ledger, pickup guide and inventory updated. Ledger: 174 entries, 117 synced, 42 security holds, 15 test-only. Continue pickup and remaining partial manuals.
- CODE-130 / #184: shipping-rate and pickup-location Delete task and selection contracts mismatch. Dry-run, creation and reconciliation passed; handoffs, master, triage and ledger updated. Actual Joomla dispatch and database deletion remain unverified. Ledger: 173 entries, 116 synced, 42 security holds, 15 test-only. Continue shipping and pickup source review and partial manuals.
- CODE-129: shared deletion boundary requires authorized private review. An isolated shared-table fixture was run; no real database or exploitability established. Nonsensitive security hold recorded and skipped by reconciliation; no Issue created. Ledger: 172 entries, 115 synced, 42 security holds, 15 test-only. Continue independent source review and partial manuals.
- CODE-128 / #183: actual manufacturer and shared list state methods with stubs map email, publication and description ordering to ID; name stays name. Dry-run, creation and reconciliation passed; guide and registers updated. Joomla UI and database remain unverified. Supplier list guidance now includes ID and default ordering. Continue manufacturer and other partial manuals.
- Ledger: 171 entries, 115 synced, 41 security holds and 15 test-only.
- CODE-127 / #182 follow-up: actual inherited copy with the actual table helper was exercised for field groups, manufacturers, suppliers, templates and texts with controller, table and factory stubs; each requested `AdminController` and failed before storing. Dry-run, additive Issue comment and reconciliation passed. Actual Joomla dispatch, database and installed extensions remain unverified. Five affected guides retained 61 baseline HTML IDs and seven manual-root links; sync tests and whitespace checks passed. Continue the partial manuals and independent source review.
- CODE-127 / #182: actual inherited field-group copy and table helper requested `AdminController` instead of `Fieldgroup` in a controller-shaped isolated fixture and threw before storing. Other affected unique-name copy models are source-identified but untested; Joomla dispatch and database remain unverified. Dry-run, creation and reconciliation passed; four manuals and registers updated. Continue copy-path verification and remaining partial manuals.
- Ledger: 170 entries, 114 synced, 41 security holds and 15 test-only.
- Custom-field guide: documented source-checked input presentation and the existing warning about changing option values. Four guides (field group, custom fields, postal codes and shopper groups) retained 48 baseline HTML IDs and five manual-root links resolved; sync/label tests, postal edit and field-group probes and whitespace checks passed. No Joomla UI, browser rendering or database persistence was tested. Continue field/group source review and remaining partial manuals.
- CODE-126 / #181: the field-group publication heading is sortable but its allowlist omits that field; actual model state with stubs fell back to name. Compared #180's distinct selector-state defect; dry-run, creation and reconciliation passed. Guide and registers updated; Joomla UI and database are unverified. Continue field/group source review and remaining partial manuals.
- Ledger: 169 entries, 113 synced, 41 security holds and 15 test-only.
- CODE-125 / #180: actual field-group model methods with the installed Joomla lazy-state trait and isolated stubs replaced requested section 17 with null and limit 99 with 20. Actual AJAX response, Joomla UI and database remain unverified. Dry-run, creation and three-issue reconciliation passed; field and group guides and registers updated. Continue the field/group source review and remaining partial manuals.
- Ledger: 168 entries, 112 synced, 41 security holds and 15 test-only. Postal and shopper-group guides retained 9 and 9 original HTML IDs; their 2 and 1 manual-root links resolved. This does not verify generated heading fragments or published rendering.
- CODE-124 / #179: the postal editor's country-change handler is entirely commented out; executing its actual body in an isolated VM caused no DOM or AJAX calls. State choices depend on the country at render time. Dry-run, creation and reconciliation passed; guide and registers updated. Actual Joomla UI and database remain unverified. Continue postal fields and partial manuals.
- CODE-123 / #178: the existing postal-code editor omits the range endpoint; the actual save model emitted two missing-key warnings and called a stubbed parent save once for edit-shaped data. Compared #73's distinct ignored-save failure; dry-run, creation and reconciliation passed. Actual Joomla request and database save remain unverified. Continue postal-code source and field review and the remaining partial manuals.
- Ledger after CODE-123: 166 entries (110 synced, 41 security holds, 15 test-only). Sync and label tests passed. Holds require authorized private review and are not completed.
- CODE-122 / #177: actual shopper-group table assigned a logo filename and returned success when an upload stub returned false and parent store stub returned true. No real upload, database or Joomla UI was tested. Compared #166's separate wrapper implementation; dry-run, creation and reconciliation passed. Guide and registers updated; continue partial manuals.
- Shopper-group field pass: clarified each form field, generated portal link and supported logo extensions against the form and layouts. Actual save, upload, checkout and Joomla UI are unverified. Recheck guide anchors and continue partial manuals.
- CODE-121 / #176: actual base controller with a Joomla-style factory stub could not resolve the four state and shopper-group list/detail views; actual country view succeeded. No real Joomla dispatch or upgrade was tested. Compared #148's distinct renderer defect; dry-run, creation and reconciliation passed; both guides and registers updated. Validate both guides and continue partial manuals.
- Current ledger: 163 entries, 107 synced, 41 security holds and 15 test-only. Rating, answer-mail, guest-subscriber and country-sort isolated probes passed. Five changed guides retained 48 baseline HTML anchors and two checked manual-root links; `git diff --check` passed. Continue the state and other partial-page reviews.
- CODE-120 / #175: country prefix and flag sort requests fell back to name in actual country and shared model state methods using isolated stubs. Joomla UI and database were not tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Validate the country guide and continue partial manuals.
- Mail template guide: expanded field-level guidance against the form, section helper, hints and inspected mail paths. Joomla UI, order-status delivery and final page quality remain unverified; continue partial manuals and verify its original anchors.
- CODE-119: newsletter confirmation association requires authorized private security review. No runtime or exploitability established; nonsensitive security hold recorded and no Issue created. Continue independent manual reviews.
- CODE-118 / #174: actual guest subscriber renderer and name helper used a stubbed zero-ID billing record instead of the stored subscriber name. Database selection and Joomla UI remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue subscriber and other partial-page reviews.
- CODE-117 / #173: actual answer-send controller reports success when the actual mail helper returns false for a stubbed missing template. No real Joomla request or mail delivery was used. Compared #103's separate save failure; dry-run, creation and reconciliation passed. Question guide and registers updated. Continue partial-page review and verify anchors after the latest guide edit.
- CODE-116 / #172: actual rating views and date helper with isolated stubs omit the editor timestamp and display today's date for a zero timestamp. The schema defaults to zero but real administrator save and database events are unverified. Compared #136's separate link defect, dry-ran, created and reconciled; guide and registers updated. Continue remaining partial manuals and verify the save path when an isolated Joomla/database environment is authorized.
- CODE-115 / #171: actual question table validation replaced an existing timestamp with the current time using a parent stub; actual database save, Joomla and storefront remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue question form and answer workflow review, then remaining partial manuals.
- CODE-034 / #103 follow-up: actual question model and controller with failed parent-save stub produced success redirects for Save and Apply; Apply also warned about missing `parent_id`. Dry-run, additive Issue comment and reconciliation passed. No Joomla, database or mail was used. Expanded the question field and previous-answer guidance; continue remaining partial manuals.
- Rating editor pass: corrected the guide's date claim because the current editor suppresses that field; documented the zero-to-five layout and individual form fields. Actual Joomla save and storefront remain unverified. Continue remaining partial manuals.
- Current ledger: 158 entries, 103 synced, 40 security holds and 15 test-only.
- CODE-114 / #170: actual preview with a grid-id stub matching Joomla 5.4.0/6.0.0 emitted `cid[]` without the arrays read by the actual send controller; simulated submission queued zero defaults. No real Joomla submission or email was used. Distinct from #169 routing and #168 progress. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue newsletter fields and remaining partial manuals.
- Newsletter field pass: clarified name, subject, body, template and publication controls, including the inspected `{data}` body insertion. Four changed guides retained 46 baseline HTML anchors and 10 checked manual-root links; sync/label tests, isolated probes, six-issue reconciliation and whitespace checks passed. Continue the partial manuals; Joomla, mail delivery, storefront and stock persistence remain unverified.
- Current ledger: 157 entries, 102 synced, 40 security holds and 15 test-only.
- CODE-113 / #169: newsletter preview send toolbar targets the singular controller; actual dispatcher normalization with stubs selects that controller, but the send method is on the plural controller. Full Joomla dispatch and real mail remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Next trace preview recipient fields and complete newsletter field review, then continue partial manuals.
- Current ledger: 156 entries, 101 synced, 40 security holds and 15 test-only.
- CODE-112 / #168: actual newsletter controller with isolated session/model and mail stubs omitted recipient details after the first across two chunks and emitted warnings. No real mail or Joomla response was tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue newsletter fields and remaining partial manuals.
- Current ledger: 155 entries, 100 synced, 40 security holds and 15 test-only.
- CODE-111 / #167: actual non-inline image layout emitted an empty URL and undefined-variable warning for a stub-resolved existing image; the inline fixture used the stub thumbnail. Product back-image editor calls the non-inline layout. Joomla UI and image persistence were not tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue remaining product fields and partial manuals.
- Product image and stockroom guide checks: both changed guides retained all 30 baseline HTML anchors and all eight checked manual-root links; whitespace check passed. Published rendering, image persistence and stock changes remain unverified.
- Subscriber field pass: documented email validation, user selection and newsletter options against the form, field classes and table. Actual consent, Joomla UI and delivery remain unverified; page remains partial. Continue the manual quality pass.
- Current ledger: 154 entries, 99 synced, 40 security holds and 15 test-only.
- CODE-110 / #166: actual wrapping table returned success and assigned an image name when the upload stub returned false and parent store stub returned true. Filesystem, database and Joomla UI were not tested. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue product tab and partial-page review.
- Current ledger: 153 entries, 98 synced, 40 security holds and 15 test-only.
- CODE-109 / #165: a previously checked wrapper can be targeted instead of the clicked row by the all-products inline toggle. The actual grid script and model were tested separately with isolated stubs; Joomla UI and database update remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue wrapper field review and remaining partial manuals.
- Wrapping field and toolbar pass: expanded the guide using the form, table, image layout and inherited toolbars. Image persistence, actual Joomla UI and checkout are unverified; page remains partial. Continue product tabs and other partial pages.
- Product stockroom field pass: distinguished editable product quantities, displayed delivery time and already-ordered count, and the variant stockroom's separate save form. Joomla UI and actual stock changes were not tested.
- Wrapper failure-path investigation: both actual controller actions set a success redirect after a stubbed model returns false, but supported database-driver failure behavior and Joomla response handling remain unverified. Do not claim a reachable production failure or create an Issue until the false-return path is established; continue independent reviews.
- Ledger: 152 entries, 97 synced, 40 security holds and 15 test-only. Synchronization and label tests passed; the selected read-only reconciliation skipped the hold and returned four unchanged issues.
- CODE-108: wrapping list search requires authorized private review. No runtime or exploitability established and no Issue created; nonsensitive security hold recorded. Continue independent product and manual reviews.
- CODE-107 / #164: actual wrapper renderer and selector tested separately with isolated stubs used gross wrapper price as its net hidden value. Storefront, tax integration and checkout remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue product and remaining partial-page reviews.
- Wrapping eligibility: the inspected product renderer uses published records matching the product, any product category, or all-products flag. Documented the OR behavior; actual database and storefront remain unverified.
- Verification: CODE-103–105 and CODE-107 reconciled unchanged; CODE-106 remains a security hold. Sync tests and isolated wrapper probes passed. Wrapping/product guides retain their 10/20 baseline HTML anchors and all eight checked manual-root links; whitespace check passed. The ledger now has 150 entries: 96 synced, 39 security holds and 15 test-only.
- CODE-106: new product payment selection requires authorized private review. The actual helper was exercised with isolated stubs; Joomla runtime and exploitability are unverified. Nonsensitive security hold recorded; no Issue created. Continue independent product and manual reviews.
- Product guide: clarified source-checked custom-field rendering conditions and payment selector; Joomla UI and storefront remain unverified.
- Product type follow-up: the inspected editor treats an existing product with its download flag enabled as File. Documented a conversion check; actual type switching and persistence remain unverified.
- Product list: clarified source-checked toolbar and list guidance and replaced obsolete wording. Bulk operations and Joomla UI remain unverified.
- Current ledger after CODE-106: 149 entries, including 95 synced, 39 security holds and 15 test-only. Inventory remains 144 partial pages; continue field-level product work and other partial pages rather than marking them complete.
- Product wording pass: clarified source-checked list actions, type controls and general product fields. The guide retains all 20 baseline HTML anchors and its seven manual-root links resolve; Joomla UI and checkout are unverified. Next continue the remaining product tabs and other partial manual pages.
- Subscription source pass: documented plan period and price validation, removal on save and reminder input length; existing subscription-domain tests passed. Existing subscription impact, actual save and Joomla UI remain unverified.
- Full read-only reconciliation before CODE-106 selected 148 rows: 95 unchanged, 38 security holds and 15 test-only skipped. After the reconciliation, #161 and #163 received corrected source references through dry-run and additive comments; both reconciled unchanged. Sync and label tests passed.
- CODE-105 / #163: the free-shipping message helper omits postal predicates for alphanumeric destinations; actual helper with a stubbed query and rate demonstrated a misleading-message scenario. Database and checkout remain unverified. Compared with #162's distinct SQL cause, then dry-run, creation and reconciliation passed. Guide and registers updated. Continue shipping and product field reviews and the partial manual pages.
- Shipping follow-up: the checkout helper's `$numbers` array includes ASCII letters as well as digits and spaces; the SQL-filter branch applies to ordinary alphanumeric inputs. An initial unrestricted-rate hypothesis was not supported by a stub probe; do not register it as a defect. Recheck actual SQL behavior with a real isolated database when available.
- Shipping rate guide now describes source-checked shared-selector range and priority behavior. Plugin-specific behavior, actual SQL, checkout and the full page review remain open.
- CODE-104 / #162 follow-up: after removing only duplicate `AND` in the captured query fixture, SQLite still reported an error near `ORDER`, consistent with the unclosed order-total condition. No MySQL query or Core change; dry-run, additive Issue comment and reconciliation passed.
- CODE-104 / #162: actual cart-estimator query generation with isolated stubs emitted duplicate `AND` for three destinations; SQLite rejected each query. MySQL, Joomla and checkout remain unverified. Duplicate checks, dry-run, creation and reconciliation passed; guide and registers updated. Continue shipping and product field reviews and the partial manual pages.
- CODE-103 / #161: the shared rate editor uses numeric inputs for textual postal boundaries; a representative browser number-input fixture returned empty for an alphanumeric value. The actual Joomla form, database and checkout were not tested. Duplicate searches, sync tests, dry-run, creation and reconciliation passed; guide and registers updated. Continue tracing distinct cart-estimate SQL and remaining shipping and product field reviews.
- Plugin overview: added a safe integration-preparation workflow based on the installation and plugin guides. No Joomla UI, payments, carrier or accounting provider was tested. Next validate overview links and continue remaining partial-page field reviews.
- Full read-only Issue reconciliation: 145 ledger entries selected, 92 unchanged, 38 security holds and 15 test-only skipped; no pending review/sync and no writes. Sync and label tests passed. Holds and runtime acceptance remain open. Continue remaining product field-level reviews and 144 partial manual pages.
- Module overview: added a configuration/verification workflow based on the product, cart and currency module guides. No Joomla UI, browser, checkout or currency provider was tested. Next validate overview links and continue remaining partial-page field reviews.
- Orders overview: added a review/create workflow and export/deletion precautions based on the order list, creation and quotation guides. No order, provider or Joomla runtime was used. Next validate overview links and continue remaining partial-page field reviews.
- Stockroom overview: added a setup sequence cross-checked against the stockroom, inventory and image guides, including preorder and deletion precautions. No stock, Joomla runtime or notification was changed or tested. Next validate overview links and continue remaining partial-page field reviews.
- Coupon value recheck: `CouponTable::doCheck` rejects empty values while `CartDiscount` rejects a negative calculated discount; clarified positive-value guidance without claiming the administrator form rejects all negative values. Joomla checkout remains unverified. Next check coupon anchors and continue partial-page field reviews.
- Manual baseline-anchor check: 118 tracked changed pages retained all 552 original HTML heading/anchor IDs checked against documentation HEAD. This does not verify generated heading fragments or published rendering. Continue the product field-level reviews and remaining partial pages.
- VAT/currency overview: added a configuration and verification sequence cross-checked against the tax-group, rate and currency guides. No actual tax, checkout or currency-provider operation was tested. Next validate overview links, then continue remaining product field-level reviews and partial pages.
- User overview: added a customer-management sequence and deletion/synchronization precautions based on the user and shopper-group guides. No customer accounts or Joomla runtime were used. Next validate overview links, then continue remaining product field-level reviews and partial pages.
- Manual-wide link check: all 348 Markdown links targeting `chapters/` resolved to existing files. This did not check fragments, HTML links, images or published rendering; 144 inventory pages remain partial. Continue the product field-level reviews and remaining partial pages.
- Shipping overview: added a setup and verification sequence based on the method, box and wrapping guides, including their documented copy and packing limitations. No Joomla checkout or provider was tested. Next validate overview links, then continue remaining product field-level reviews and partial pages.
- Product-management overview: added a practical setup sequence and distinguished catalog media from protected downloads and price rules. Cross-checked the related product, media and price guides; manual-wide quality and Joomla runtime remain open. Next validate overview links, then continue remaining product field-level reviews and partial pages.
- CODE-102/#160 shipped-layout follow-up: local Twig parser with a stub `redconfig` filter reports a syntax error on line 5 of the shipped quantity layout. This is not a full redSHOP Twig or storefront test. Updated registers and appended evidence after a successful dry-run; one earlier TLS certificate error cleared on retry without disabling validation. Next reconcile #160 and continue remaining product field-level reviews and partial pages.
- CODE-102/#160 additional evidence: the actual layout helper requests an add-to-cart quantity-select layout whose name differs from the shipped file. Confirmed the requested path with Twig stubbed; actual Twig loading, overrides and full storefront remain unverified. Updated guide and registers; dry-run and additive Issue comment passed. Next reconcile #160, validate product anchors and continue remaining product field-level reviews and partial pages.
- CODE-102/#160: actual add-to-cart quantity-select replacement and base string replacer left the ordinary tag unchanged with an isolated layout stub; full rendering, cart and checkout remain unverified. Duplicate search and dry-run preceded creation; product guide and registers updated. Next reconcile #160, validate the product guide and continue remaining product field-level reviews and partial pages.
- Product quantity-select source pass: documented per-product/global fallback, duplicate removal and tag precedence in the product guide against `Tags/Sections/Addtocart.php`; the Joomla storefront remains unverified. Next continue the remaining product field-level reviews and partial pages.
- CODE-101/#159: the actual related-product selection parser with isolated stubs mislabels two child products when the first name contains a comma. The controller's delimiter format also leaves colons ambiguous; browser, persisted associations and database were not tested. Duplicate search and dry-run preceded creation; product guide and registers updated. Product guide retains its 20 original anchors. Next reconcile #159, then continue remaining product field-level reviews and partial pages.
- CODE-099/#158: actual inventory template with a schema-shaped stockroom object omitted the reset identifier and emitted a missing-property warning. The install schema supplies `id`; upgraded schemas, Joomla UI and database remain unverified. Duplicate search and dry-run preceded creation; inventory guide and registers updated. CODE-100 is a separate nonsensitive security-hold pending authorized private review. Next reconcile #157/#158 and validate inventory anchors, then continue remaining product field-level reviews and partial pages.
- CODE-098/#157: actual inventory controller and model with isolated stubs rejected one row, processed another, queued a warning and set a success redirect. No real database, stock changes or Joomla UI were tested. Duplicate check and dry-run preceded creation; the guide and registers were updated. Next reconcile #157, validate the inventory guide, and continue the product field-level review and other partial pages.
- Product discontinued guidance now distinguishes inspected add-to-cart rendering and bulk-add checks from unverified existing-cart and checkout behavior. Validate the product guide and continue its remaining field-level review.
- Product-guide verification: all 20 original anchors and manual-root links checked; sync tests, whitespace check and CODE-094–097 reconciliation passed. Continue the product field-level review and other partial manual pages.
- CODE-097/#156: actual price-per-piece calculator with a stubbed `+5` option changed reported unit price from 10 to 15 but left the calculated total at 15 for 1.5 pieces. Database, checkout and tax remain unverified. Compared with #153–#155's distinct causes; distinct-aware dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 140 entries, 88 synced, 37 security holds, 15 test-only. Validate the product guide and continue its remaining field-level review.
- CODE-096/#155: actual calculator with a range-lookup stub passed 1 for area/volume measurements of 1.5 but 1.5 for Area Quantity; circumference has the same cast in source. Real range query and checkout remain unverified. Compared with #153/#154's distinct causes; distinct-aware dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 139 entries, 87 synced, 37 security holds, 15 test-only. Validate the product guide and continue its remaining field-level review.
- CODE-095/#154: actual area measurement with isolated stubs displayed per-piece price 10 but returned product length 2 in structured metadata; source shows the same assignment in volume and circumference. Joomla cart remains unverified. Compared with #153's distinct rounding behavior; distinct-aware dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 138 entries, 86 synced, 37 security holds, 15 test-only. Validate the product guide and continue its remaining field-level review.
- CODE-094/#153: actual price-per-piece calculator returned 1.5 pieces/price 15 for decimal No and 2 pieces/price 20 for Yes in isolated stubs. Joomla checkout and tax remain unverified. Duplicate searches, dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 137 entries, 85 synced, 37 security holds, 15 test-only. Validate the product guide and continue its remaining field-level review.
- CODE-093: attribute-property cache and publication scope need authorized private review; runtime and exploitability remain unverified. Registered as security-hold without GitHub disclosure; continue independent work. Ledger: 136 entries, 84 synced, 37 security holds, 15 test-only.
- Product actions: corrected the blanket Cancel claim to distinguish pending form edits from separate attribute/accessory deletion and preorder-reset requests. Source checked; Joomla UI and actual operations remain unverified. Validate the product guide and continue its remaining field-level review.
- CODE-092/#152: actual accessory-deletion JavaScript removed a row before completion and left it absent after a simulated HTTP 500 with isolated stubs. Joomla UI and server remain unverified. Duplicate searches, dry-run, creation and reconciliation passed; product guide and registers updated. Ledger: 135 entries, 84 synced, 36 security holds, 15 test-only. Validate product guide anchors and links, then continue its remaining field-level review.
- CODE-091/#151: actual attribute-set deletion and property helper with stubs used a published-only predicate, deleted only returned attributes and then the set. SQL/filesystem and Joomla remain unverified. Compared with #124's separate copy omission; distinct-aware dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 134 entries, 83 synced, 36 security holds, 15 test-only. Validate attribute guide anchors and links, then continue partial-page audits.
- Custom fields: documented global normalized-name lookup and conditional product-ID filtering from the table/model sources. No database or Joomla rendering was tested. Validate guide anchors and links, then continue remaining partial-page audits.
- Custom field groups: source recheck shows `listAllField` groups returned fields by group name rather than ID; guide recommends distinct names and isolated tab checks. No Joomla UI or access/output behavior was tested; CUST-010 remains on security hold. Next validate guide anchors and links and continue remaining partial-page audits.
- CODE-090/#150: actual template table returned success when a stubbed file writer returned false after a successful parent store. Real filesystem and database behavior remain unverified. Duplicate searches, dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 133 entries, 82 synced, 36 security holds, 15 test-only. Validate template guide anchors and links, then continue partial-page audits.
- Country guide: rechecked form, validation, phone-prefix and language helpers; documented the prepended plus, shop-country fallback and installed-language dependency. Joomla UI and integrations remain unverified. Next check guide anchors and links and continue remaining partial-page audits.
- CODE-089/#149: actual postal-code table validation queried `999` for `0999` and `0` for `A1 2BC` in isolated stubs, despite a text column. Database and Joomla UI remain unverified. Distinct from #73's failure reporting and #127's filter; duplicate searches, dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 132 entries, 81 synced, 36 security holds, 15 test-only. Continue partial-page audits.
- CODE-088/#148: the actual state-list renderer distinguishes integer `3` from string `"3"` in isolated stubs; the address helper uses loose comparison. Database result types and Joomla UI were not verified, so impact is conditional. Duplicate searches, sync tests, dry-run, creation and reconciliation passed; guide and registers updated. Ledger: 131 entries, 80 synced, 36 security holds, 15 test-only. Continue partial-page audits and keep the runtime verification open.
- CODE-087/#147: actual category copy returned true after a deliberately failed bind and invoked a stubbed media-copy call with target zero; the inherited controller reports selected count. Controller, filesystem and database unverified. Distinguished from #146's filter payload, dry-run, created and reconciled; category guide and registers updated. Ledger: 130 entries, 79 synced, 36 security holds, 15 test-only. Continue partial-page audits.
- CODE-086/#146: actual category copy/save methods with isolated stubs cleared copied product-filter parameters and emitted warnings before a deliberately failing bind. Database persistence and Joomla UI remain unverified. Deduplicated, dry-run, created and reconciled; category guide and registers updated. Ledger: 129 entries, 78 synced, 36 security holds, 15 test-only. Next investigate the separate observed copy-failure reporting path and continue manual reviews.
- CODE-085/#145: gift-card fallback detail template lacks `{customer_amount}`. Actual layout with isolated stubs rendered no input for fallback but did with a custom tag; storefront and checkout unverified. Deduplicated against #112/#113, dry-run, created and reconciled; immediate list read briefly missed its marker, then reconciliation passed. Guide and registers updated. Ledger: 128 entries, 77 synced, 36 security holds, 15 test-only. Continue partial-page review.
- Issue sync now fetches a mapped issue directly when it is absent from the paginated list, retaining marker/body integrity and closed-state checks; API failures propagate. Tests cover list omission, missing marker, closed issue and rate-limit failure without duplicate creation. Both #144 and #145 reconcile read-only. Continue remaining manual audits.
- CODE-084/#144: product-price discount inline edits lack the shopper-group option required by table validation; the actual table rejected an isolated inline amount and accepted it with a group. Deduplicated, dry-run, created and reconciled; immediate reconciliation initially missed the freshly created marker, but direct API confirmed it and a subsequent dry-run reported unchanged. Joomla UI and controller remain unverified. Guide and registers updated. Ledger: 127 entries, 76 synced, 36 security holds, 15 test-only. Continue partial-page review.
- CODE-084 also affects order-total discounts: both actual table classes rejected each inline field without a group in isolated tests and accepted each with a group. Issue #144 received additive evidence after dry-run and reconciled; both guides warn users. Next verify order-discount guide anchors and continue systematic partial-page review.
- CODE-083/#143 evidence was extended: actual Who Bought and Shopper Group Product layouts also raise PHP 8.4 `count()` TypeError for an object with isolated dependencies; Aesir Products has the same source pattern but was not executed. Product Tab was tested for object and null. Added an idempotent Issue comment after dry-run and reconciled; both module guides warn about AJAX cart. Joomla storefront remains unverified. Next continue systematic partial-page review and retain security holds.
- Coupon user-selector review narrows CODE-043: XML declares multiple, but the custom field configures a single selection and reads only the first stored value. Updated the guide and review records; rendered UI, save/reload and authorization remain unverified, and the security hold remains. Continue other partial-page reviews.
- Voucher guide now specifies the inspected lookup's inclusive date boundaries and positive remaining-count condition; actual timezone, quantities and checkout remain unverified. Next check anchors and continue partial-page audits.
- Gift-card guide now identifies the `{customer_amount}` detail-template tag and notes that the inspected fallback detail template omits it. No storefront or checkout was tested. Next verify anchors and continue partial-page audits.
- 2Checkout and Paymill plugin guides now describe manifest fields/defaults and the text credential fields; provider, callback and Joomla checkout remain unverified. Next check anchors and links and continue remaining plugin field audits.
- CODE-083 (#143) tracks Product Tab's PHP 8 `count()` TypeError for object/null AJAX detail results, confirmed using the actual layout and isolated stubs. Distinct from CODE-077/#137 after root-cause review. Dry-run, creation and reconciliation passed; Joomla storefront unverified. Ledger: 126 entries, 75 synced, 36 security holds, 15 test-only. Next validate module guide links and continue partial-page work.
- Integration and e-conomic configuration guides now clarify selected distributed disabled switches and conditional controls. Provider and Joomla behavior remain unverified. Next check anchors and links and continue remaining configuration field audits.
- Configuration start guide now accurately distinguishes the five frontend Design Style controls from the empty backend form and describes the disabled-by-default session-cache Performance option. Runtime effects remain unverified. Next check links and continue remaining configuration field audits.
- User configuration guide now describes selected distributed registration defaults and conditional portal controls; account, consent and Joomla runtime remain unverified. Next check anchors and links and continue remaining configuration field audits.
- Product, Order and SEO configuration guides now describe selected checked distributed defaults and the SEO published-frontend menu query. Runtime and complete field audits remain open. Next verify anchors and links and continue remaining partial configuration pages.
- General and Dashboard configuration guides now describe selected distributed defaults and the upload-size form fallback, without assuming existing installations share them. Next check anchors and links and continue remaining configuration field audits.
- Feature settings received source-backed distributed defaults and an explicitly identified import-minimum form fallback. Existing shop values and runtime remain unverified. Next check anchors and links and continue remaining configuration field audits.
- Manufacturer, Category and Newsletter configuration guides now identify checked distributed defaults separately from saved settings. Source controls were checked; mail, storefront and final field/quality audits remain open. Next verify anchors and links and continue remaining partial configuration pages.
- Price and Cart configuration guides now distinguish relevant distributed defaults from existing settings and warn about CODE-082/#142 and CODE-081/#141. Source controls were checked; full field audit and runtime remain open. Next verify anchors and links and continue remaining partial configuration pages.
- CODE-082 (#142) investigates whether Apply VAT for Tax Exempt affects calculations: the actual exemption helper did not read it and returned false for a stubbed approved user with either option value. Full tax paths and persisted configuration remain unverified; no actual financial error asserted. Duplicate searches, dry-run, creation and selected reconciliation passed; FAQ updated. Ledger: 125 entries, 74 synced, 36 security holds, 15 test-only. Continue remaining partial pages and independent review.
- CODE-081 (#141) tracks request-local AJAX detail-template selection reused across distinct products. Actual helper with seeded template records returned the first choice for both products in either order; storefront and database unverified. Duplicate searches, dry-run, creation and selected reconciliation passed. FAQ updated; ledger: 124 entries, 73 synced, 36 security holds, 15 test-only. Continue partial-page quality work and retain holds.
- CODE-080 (#140) records mail-name search bypassing section/publication filters under SQL precedence. Actual model and Joomla 5.4.6 locked `joomla/database` 3.4.3 query builder generated the ungrouped predicate in isolated dependencies; no SQL execution or Joomla UI was tested. Duplicate searches, focused sync/label tests, dry-run, creation and selected reconciliation passed. Ledger: 123 entries, 72 synced, 36 security holds, 15 test-only. Continue partial-page quality work and retain holds.
- CODE-079 (#139) tracks user synchronization reporting the selected count even when storage returns false; actual method with isolated stubs returned two for two failures. False can also follow partial persistence. Dry-run, issue creation, selected reconciliation, guide links and whitespace passed. Joomla/database and separate security review remain unverified. Ledger: 122 entries, 71 synced, 36 security holds, 15 test-only. Continue remaining partial guides.
- e-conomic setup and sync guidance was compared with the plugin manifest, product helper and existing CODE-047/#102; added safe setup steps and a failed-connection warning. Provider and accounting operations were not tested. Next validate links and continue remaining partial guides.
- All 15 historical changelog pages were confirmed present, linked from the archive and unchanged from documentation HEAD; inventory now uses `historical-preserved` rather than unclassified. This does not verify historical claims or published rendering and does not complete CHANGE-004. Continue remaining partial manual work.
- Plugin overview now warns about package/provider compatibility and links to the corrected EAN and GLS Business guide titles. The 15 remaining unclassified pages are historical release notes; preserve their contents and review their classification separately. Next verify overview links and continue remaining partial pages.
- GiroPay, Paymill and ePay v2 manifests were checked; legacy walkthroughs now flag unverified provider compatibility and isolated testing, distinguishing sandbox from debug. No provider or checkout used. Next validate targets and continue remaining partial pages and historical archive classification.
- Giao Hang Nhanh, Shipper and Product Zoom manifests and relevant handlers were checked; guides now distinguish provider operations, rate configuration and the correct zoom plugin identity. No shipment, checkout or Joomla frontend tested. Next validate targets and continue remaining unclassified pages.
- GLS default and business manifests/handlers were checked; three outdated guides now distinguish provider/rate/location setup and the unverified historical separate update plugin. No provider, label or checkout used. Next validate targets and continue remaining unclassified plugin pages.
- Bao Kim and Money Booker manifest passes replaced legacy checkout walkthroughs with test/compatibility guidance; Bao Kim defaults test mode to Yes, Money Booker's manifest has no test-mode switch. Provider and callbacks remain unverified. Next check links and continue remaining unclassified plugins.
- Legacy 2Checkout and PayGate manifests were checked and their guides replaced with isolated testing and compatibility guidance; 2Checkout exposes test mode and PayGate's inspected manifest has no test-mode switch. Provider, callbacks and Joomla checkout remain unverified. Next check links and continue unclassified plugin pages.
- Bank transfer and EAN transfer plugin guides were modernized against manifests and offline handlers; removed obsolete screenshots and unsupported EAN payment-price instruction, and distinguished receipts from payment/invoice confirmation. Import/export overview was refreshed. Next verify links and continue remaining unclassified plugin pages. No checkout, invoice, provider or mail was tested.
- Payment FAQ manifests rechecked: PayPal defaults to Live rather than Sandbox, and COD defaults both customer types to Yes. Guides now flag these choices. No checkout or provider was contacted. Next validate FAQ links and continue remaining pages.
- Marketplace module overview now distinguishes display from access control and no longer labels the shopper-group menu as ACL. It remains partial. Next validate all overview link targets and continue other manual pages.
- Marketplace Products and Facebook plugin manifests were checked; the guides clarify product display defaults and required provider fields/example URLs. Provider, consent and storefront behavior remain unverified. Next check guide links and continue remaining pages.
- Marketplace mass-cart form and mega-menu helper/manifest were checked; the guides clarify input layout and defaults. No cart, Joomla UI, access isolation or cache behavior was tested. Next validate links and continue remaining pages.
- CODE-078 (#138) tracks Who Bought quoting multiple categories as one value; actual entry with stubs captured the query, SQL/Joomla unverified. It is distinct from CODE-038/#88. Dry-run, creation, reconciliation, module links and whitespace checks passed. Ledger: 121 entries, 70 synced, 36 security holds, 15 test-only. Continue remaining module pages and manual work.
- Marketplace discount helper/layout and login-greeting entry/layout were checked; the guides clarify date bounds, output and manifest defaults. Output-handling review and actual Joomla session/checkout remain open. Next verify guide links and continue remaining pages.
- CODE-077 (#137) tracks Product Tab textual No values misinterpreted by the actual helper and layout in isolated stubs. Distinct from CODE-039 packaging; Joomla form and storefront unverified. Dry-run, creation and selected reconciliation succeeded; module guide links and whitespace passed. Ledger: 120 entries, 69 synced, 36 security holds, 15 test-only. Continue remaining module pages and other manual work.
- Shopper-group logo, category menu and product module manifests and relevant layout/helpers were checked; the guides now document defaults. The separate menu cache concern remains unverified and is not closed. Next check guide links and continue remaining module pages; no Joomla UI, access isolation or checkout was tested.
- Marketplace price-filter and comparison manifests/module entries were checked; the guides now describe manifest defaults and the comparison module's limited basic options. Runtime behavior remains untested. Next validate guide links and continue remaining module and manual pages.
- Marketplace newsletter and free-shipping module manifests/layouts were checked; their guides now explain form prefilling, browser validation and configuration defaults. Consent and actual storefront/checkout remain unverified. Next validate module links and continue remaining module pages and independent Issue work.
- Marketplace search and cart module manifest/entry source pass added configuration defaults and explicitly asks administrators to select a cart output mode. The existing cart route issue remains tracked. Next validate module guide links and continue remaining module and manual pages; no Joomla session, storefront or checkout was tested.
- e-conomic account-group editor/list/model source pass added the list, required fields and Published default; the integration overview was refreshed. Next verify links and continue remaining partial pages. No accounting account, provider, Joomla UI or real data was used.
- CODE-076 (#136) tracks the review-list product link using `rating.edit` and the product ID. The actual renderer with isolated route stubs confirmed the URL and the inherited edit controller uses the selected ID for the rating model; Joomla routing is unverified. Duplicate search, dry-run, creation and selected reconciliation succeeded. Ledger: 119 entries, 68 synced, 36 security holds, 15 test-only. Next validate the updated review guide and continue another partial manual page; no customer submissions were performed.
- Customer-question and review forms/list queries were checked: documented search scopes and admin publication/favoured defaults, and refreshed the overview. The rating-list product link uses a rating task with a product ID; actual routing remains an unconfirmed investigation. Next validate anchors and links, inspect that route using isolated evidence, and continue remaining partial pages. No Joomla UI or customer submissions were tested.
- Newsletter form/list source pass corrected the guide's unsupported claim that subject and body are form-required, and documented name search and the Published default. Next verify anchors and continue independent partial-page work; investigate mail search/filter precedence only with actual Joomla query-builder evidence. No newsletter was sent or changed.
- Mail-template and subscriber form/list source passes documented searches, filters and publication defaults; communication overview links were refreshed. The mail search combined with other filters warrants a further query-precedence check against the actual Joomla database query builder before recording any defect. Next validate anchors and links, inspect newsletter form/list and continue; no real messages or subscriber operations were performed.
- User billing layout and save model source pass clarified form-marked required address fields and conditional state and tax-exemption controls. `add-user.md` remains partial pending Joomla account and address behavior, privacy review and final quality. Next verify anchors and continue systematic remaining partial pages and independent Issue/security-hold work.
- User editor and shipping address controller source pass found CODE-075 (#135), a nonsensitive functionality tracker: the address link supplies a selection name the controller does not read. Isolated actual-controller stubs produced the no-selection error; duplicate search, dry-run, creation and selected reconciliation succeeded. Separate authorization/security review remains unverified. Ledger: 118 entries, 67 synced, 36 security holds, 15 test-only. Next validate user guide anchors and continue user editor/save review, then remaining partial pages. No actual user or address was modified.
- Shopper-group form/list source pass added name search, multiselects and documented defaults; the Users overview was refreshed. Next validate anchors and links, then inspect the user editor and save path; no customer or Joomla operation was performed.
- Stock-image form/list/table and inventory query/save source pass clarified image-record deletion, prefix search, hierarchical sorting and the effect of blank-as-infinite. Existing stock image lookup concern remains open; no actual stock or media operations were performed. Next validate both guides' anchors and continue systematic source review of remaining partial pages and independent Issue work.
- Stockroom management form, list and table source pass clarified name search, defaults and that deleting a stockroom deletes product and product-attribute stock associations. The stockroom overview now describes its three linked guides. Next validate anchors and links, inspect stock-image list/form and continue the inventory source pass; no Joomla UI, deletions or stock operations were performed.
- Shipping rate view, model and editor were additionally checked for list columns, multi-selects, customer types and VAT default; the guide remains partial because Joomla, provider and checkout behavior are untested. The rate-copy warning remains tracked in CODE-074 (#134). Next verify the guide anchors and continue the stockroom pages against current source; retain security holds and open acceptance work.
- Shipping rate copy source review found CODE-074 (#134): copies omit dimension ranges, excluded products and tax group from the bind. The actual copy method was invoked using isolated stubs; duplicate search, dry-run, creation and selected reconciliation succeeded. The guide now warns about copies and correctly notes the server's two boundary comparisons. Ledger: 117 entries, 66 synced, 36 security holds, 15 test-only. Next validate guide anchors and complete the rate-editor field/default review; no Joomla, SQL or checkout was tested.
- Shipping method list source review found CODE-073 (#133): a location-only plugin displays rate support due to view switch fallthrough, reproduced with isolated actual-view stubs and checked against the self-pickup manifest. Duplicate search, dry-run, creation and reconciliation succeeded. Ledger: 116 entries, 65 synced, 36 security holds, 15 test-only. Next validate shipping-method guide anchors and review its rate editor and save path; no Joomla UI or checkout was tested.
- Shipping-box and wrapping form/list source passes improved both guides, preserving 8 and 10 anchors. CODE-072 (#132) records prefixed box ID search comparing against zero; isolated actual model stubs reproduced it. Duplicate search, dry-run, creation and selected reconciliation succeeded. Ledger: 115 entries, 64 synced, 36 security holds and 15 test-only. No Joomla UI, SQL, checkout or image behavior was tested. Next inspect shipping methods and rates against their current forms and models, and continue the other partial pages and independent issue work.
- Manual-order editor and save path and quotation editor received further source-backed guidance. The manual-order payment record uses the saved order total in `AddorderModel::store`, so the separately calculated controller temporary amount alone is not evidence of a payment defect. Order-list and add-order anchors were checked (3 and 13); Joomla UI, real payment, stock and mail remain untested. Next validate quotation anchors and continue systematic source review of remaining partial manual pages; security holds and test-only acceptance remain open. Core and documentation HEADs remain `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e` and `6ae296dbe0f05654ef403b64739acb7820884402`.
- Tax group and rate list/form source pass improved both guides, with their 8 and 12 anchors preserved. CODE-069 (#129) reproduces the rate list's group link using a rate ID with an isolated view stub; CODE-070 (#130) captures a state join without country and demonstrates ambiguity with an equivalent SQLite fixture. Both were deduplicated, dry-run, synchronized and confirmed unchanged; no Joomla, MySQL or tax calculation was tested. The ledger now contains 113 entries: 62 synced, 36 security holds, 15 test-only. Continue remaining partial pages and independent Issue review; do not treat this checkpoint as completion.
- VAT and Orders overviews now explain their linked guides; order-status, product-order search and quotation list descriptions were checked against current sources. Their 10/2/10 original anchors and all overview targets were verified. All remain partial; next continue the order-list and order-creation guides against current code and retain security holds.
- Order-list source review found CODE-071 (#131), distinct from the order-export bounds issue: isolated actual model stubs captured an inclusive next-midnight bound and fixed-24-hour DST errors. The guide now explains search scope and the date limitation. Selected reconciliation confirmed #131 unchanged. No Joomla timezone, SQL or real orders were tested. Next inspect the manual-order form and save path; continue other partial guides and held-review handling.
- Latest continuation: CODE-064 (#124) received additive evidence for property settings (isolated copy bind) and subproperty publication (source inspection). CODE-065 (#125) and CODE-066 (#126) track separate set-save message and image-field defects, reproduced by isolated controller/model stubs. CODE-067 (#127) tracks postal-code country filtering through an optional state join, checked with the actual model predicate and an equivalent in-memory SQLite fixture. CODE-068 (#128) tracks currency validation's doubly prefixed table identifier, captured from the actual table method with a database stub. No Joomla UI, MySQL, actual image or save behavior was tested. Countries, States, Postal codes, Currency, custom-field and Template guides and the customization overview received source-backed improvements and remain partial. Original anchors and local targets of the custom-field and Template guides and overview were checked. The full read-only dry-run timed out after CODE-046; two subsequent bounded batches reconciled the remainder, and all 60 synced items were unchanged across those runs. Ledger: 60 synced, 36 security holds, 15 test-only. Focused sync/label tests and whitespace checks passed. Continue the next partial page; security holds remain unfinished.
- Latest continuation: CODE-054 (#116) and CODE-055 (#117) are distinct product-price and order-total discount search defects, confirmed with isolated PHP query mocks, individually dry-run and synchronized. The product-price query ignores search; the order-total query searches a name absent from its form. Both articles received source-backed list and form improvements; their 10 and 14 original anchors respectively were preserved. Joomla UI, database, save and checkout remain unverified. The current ledger has 98 entries: 49 synced, 35 security holds and 14 test-only. A full dry-run reported all 49 synced issues unchanged; sync and label tests and whitespace checks passed.
- Media list, editor and product-dialog source review updated both media guides and the overview; 14 and 10 pre-existing anchors and both menu targets were checked. CODE-061 (#122) records Reset calling a nonexistent form method, reproduced with the exact handler in an isolated browser fixture. CODE-060 is test-only: an earlier YouTube-hidden claim was retracted after a browser fixture exposed an incorrect mock assumption about duplicate IDs; actual Joomla behavior remains unverified. The full dry-run reconciled 104 entries: 54 unchanged, 35 security holds and 15 test-only. Issue-sync and label tests passed. Next continue the product manual against its list, tabs and form sources; keep the two media guides partial until Joomla and final review.
- Product and attribute-set source review improved both guides. CODE-062 is a payment-selection investigation reproduced with isolated helper stubs and held for private security review; no checkout or provider was tested. CODE-063 (#123) records stale subproperty display after a deletion request, reproduced with the generated asset and a stubbed browser request. CODE-064 (#124) records set-list copy omitting three attribute fields, reproduced with an isolated PHP table stub; it is distinct from M-0140 (#96). The ledger contains 107 entries: 56 synced, 36 security holds and 15 test-only. Continue attribute-set property/subproperty copy and save paths, then remaining partial pages. Joomla UI and storefront remain unverified.
- Promotions received a source-backed base/plugin form pass; its nine original anchors were preserved. The discount overview now explains the linked feature choices. The category list and editor pass documents search, bulk-template assignment, deletion safeguards and filters; 28 anchors were preserved. CODE-056 (#118) records a misleading bulk-assignment error after an update, confirmed with a PHP database stub. All these pages remain partial pending Joomla/runtime and final quality checks. Next continue Product Price Management: `PriceModel`, `PricesModel` and the price editor were read; inspect the price list, toolbar and save paths before updating the article. Independently assess safe trackers for security holds. No authorized private security-reporting channel has been identified; retain holds without disclosure. Test-only acceptance is still open.
- Product Price Management was subsequently updated from the list, model, editor and controller sources; its nine original anchors were preserved. CODE-057 (#119) tracks an uninitialized product ID in the price-rule model; an isolated constructor mock captured the incomplete lookup. A related category-search mismatch in the price list was added to existing CODE-010 (#74) via a dry-run and additive evidence comment, not a duplicate Issue. Joomla UI and real SQL remain unverified. Next investigate the price list's two save paths and price-rule range validation, then continue remaining manual pages; register new distinct findings safely.
- The price-rule check was further verified with an isolated table stub: CODE-058 (#120) records an enclosing range passing overlap validation. CODE-059 (#121) records each price-list save invoking an unscoped update twice; isolated controller/database stubs confirmed the calls and query shape. The manual warns about both. The ledger now has 102 entries: 53 synced, 35 security holds and 14 test-only; selected dry-runs for #74 and #119–#121 were unchanged. Next continue the product-management manual with Supplier Product: compare its current article against menu, forms, list/model and association behavior, preserve anchors and register distinct findings. Security holds remain incomplete.
- Supplier and manufacturer pages subsequently received source-backed list, field/default and mail-path improvements; 11 and 13 original anchors respectively were preserved. The supplier email path has no explicit publication check; actual delivery remains unverified. Next inspect Media forms, list, product dialog and association behavior before improving the two linked media pages; keep held security details out of Issues. Both pages remain partial.
- Core `develop`: `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`; documentation `modernize`: `6ae296dbe0f05654ef403b64739acb7820884402`; legacy extensions `master`: `68c3819e1fa444a1bd3c46322045d4820a52fea6`. All three matched their respective remote branch heads and were clean before these checkpoint edits on this computer. The three legacy Cielo changes mentioned below were not present in this checkout; their state on the other computer is unknown.
- The previous all-state listing had Core #57 open and #58/#59 closed. CODE-034 (#103) was compared with closed #59 and historical revision `67dd75b6a0`: the old model returned false and #59 described a green error, whereas current failure returns a truthy array and reports success. This session created #69–#110 for 42 reviewed findings; see the ledger for the exact mapping.
- Comparing Core against the evidence baseline identified the previously listed 82 changed paths; there are no committed changes since the transfer Core snapshot. The Flatpay and Bambora manifest changes do not correct the source conditions of CODE-028/029; UI/provider behavior remains untested. Other affected findings and pages still require targeted re-verification.
- `ISSUE-SYNC-REGISTER.csv` has 96 candidates: 47 synced, 35 `security-hold` and fourteen `test-only`. Initial source inspection and security classification do not complete the held reviews: they require an authorized private channel or separately prepared nonsensitive trackers; no such channel has been identified. CODE-005 (#111) records a separately verified first/last-second order-export boundary defect; an isolated PHP query mock confirmed predicates, but SQL, timezone and multi-batch runtime remain unverified. The earlier alleged count/data midnight mismatch is not established. CODE-050 (#112) and CODE-051 (#113) record gift-card code-delivery and displayed-value defects reproduced with isolated mail-service stubs. CODE-052 (#114) and CODE-053 (#115) record voucher lookup and list-formatting defects reproduced using isolated PHP mocks. Joomla UI, checkout, database and mail-provider behavior remain unverified. AUD-003-010 (#106) and AUD-003-013 (#108) record inspected publication-path/concurrency investigations without performing publication. CODE-004 (#109) and CODE-032 (#110) are nonsensitive concurrency/data-integrity trackers; privacy and authorization review remains separate. The test-only items remain open for acceptance in the review registers. Sync and label tests passed; the latest complete dry-run preceded #114 and #115, and each new issue had a successful selected dry-run. Continue independent documentation work while security review is blocked.
- Local, uncommitted changes include the Core issue form, a label workflow and tests, project instructions, issue policy and ledger, the sync tool and a partial Coupons pass. The workflow has not run on GitHub. The form declares initial source and status labels so a stale opened event cannot omit them; the workflow serializes per issue, skips stale bodies, never removes labels and reports conflicting exclusive labels for manual resolution. Actual GitHub form behavior is unverified.
- Continue with issue synchronization and review without inventing success or exposing sensitive evidence. Coupons, gift-card, voucher and mass-discount source-backed passes remain partial pending Joomla and the manual-wide quality review. Continue with the remaining discount pages, starting with product-price discounts; see `WORK-PROGRESS.md` for evidence and unverified behavior.

The prior pause and missing-scope statements below are historical and superseded.

## Read first

1. Documentation repository `AGENTS.md` and `.github/copilot-instructions.md`.
2. This file, `WORK-PROGRESS.md`, `PAGE-INVENTORY.csv`, `MASTER-ISSUES-AND-GAPS.md`, `TRIAGE-REGISTER.csv`, `HIGH-PRIORITY-QUEUE.csv`, and relevant stage notes and test plans.
3. `CORE-BUGS.md`, `CORE-BUGS.csv` and `CORE-FIX-INSTRUCTIONS.md` for product findings; the Core repository's `AGENTS.md` and current instructions before inspecting its source.

## Baseline and targeted change review

- Transfer snapshot: documentation `modernize` at `e40c93a0868058584e7ab309d77837c4aecadc6d`, Core `develop` at `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`, legacy extensions `master` at `68c3819e1fa444a1bd3c46322045d4820a52fea6`. Live origins matched these revisions before the checkpoint edits. The documentation checkpoint edits are not yet committed or pushed; the legacy checkout has three uncommitted Cielo files listed in `WORK-PROGRESS.md`. Preserve them.
- Existing finding evidence was recorded at Core `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, not at current Core HEAD. On resumption check branches, HEADs and worktrees; compare both that evidence baseline and the transfer snapshot against the actual Core state with `git diff --name-status <baseline> HEAD`. Inspect relevant changes, including local modifications. Map changed code and fixed CORE-BUGS to affected articles and reverify only affected items; do not restart the complete review. Record new evidence and revisions. If history is unavailable, say so and verify affected source directly.

## Historical GitHub Issue discovery (superseded by current checkpoint)

The available conversation contains no Issue-import specification, execution ledger or trustworthy ID-to-Issue mapping. On 2026-11-24 a read-only listing showed Core #57 open and #58/#59 closed, and no Issues in the documentation or legacy extensions repositories. No issue was created or updated in this checkpoint; #59 and CODE-034 have overlapping subjects but are not proven duplicates. GitHub state and permissions may have changed.

1. Establish the intended repository and locate any other session or mapping before importing. Query **all open and closed Issues**, inspect bodies, existing stable IDs and semantic overlaps, and record a durable mapping. If mapping or target cannot be established, stop before a remote write instead of guessing.
2. The 89 entries in `CORE-BUGS.csv` remain candidates, not 89 confirmed bugs or an exact count of missing Issues. Prioritize and individually reverify them against the current Core; group related entries, preserve original IDs and distinguish confirmed defects from risks, already-fixed items and test-only questions. Check archived review findings where needed.
3. Use an authorized private security-reporting path for potentially exploitable findings; do not publish sensitive exploit details in public Issues. Do not recreate, reopen or change an Issue solely because a local record is OPEN.
4. At that earlier checkpoint the issue form was legacy and no synchronization tool or import ledger was found. The current local changes and outstanding work are described above. No `gh` CLI was available on the original machine.
5. Before creating or updating Issues, respect the maintainer's authorization and target-repository scope; update the mapping and checkpoint immediately after each successful remote operation, including issue numbers and errors, so retries cannot duplicate work.

## Documentation: where to continue after explicit resumption

Start with `manual/en-US/chapters/discounts/coupon.md` as a quality reference. Compare the full article with current list, form, XML, language strings, models, helpers and checkout: purpose, navigation, columns, filters, sorting, inline controls, toolbar, every relevant field/default/validation/dependency, examples and interactions. Verify gift-card and coupon behavior against CODE-012/031/041–044; do not change Core. Keep detailed reproduction and tests in review material.

Completed topic passes and exact changes are recorded in `WORK-PROGRESS.md`; the latest pass covered indexed modules and product SEO. They are **not** final-quality approvals. Revisit earlier FAQ, installation, VAT, media, product, catalog, pricing, discounts, orders, users, configuration, integrations, communication and module rewrites against the professional customer-manual criteria. `PAGE-INVENTORY.csv` records provisional page-level classifications; an unclassified page is not necessarily unreviewed. Historical changelog notes are not a completed current manual.

After explicit resumption continue autonomously through open tasks: inspect source, rewrite inaccurate or incomplete customer guidance, preserve useful content and anchors, validate navigation/links and local tests, and update all shared registers and the checkpoint. Missing runtime environments, credentials or test-site authorization block only their specified tests, not source-backed documentation work. Record exact prerequisites and steps and continue to the next task. At the end perform a comprehensive quality pass.

New code findings go immediately into both CORE-BUGS files and the master and triage registers using stable IDs; verify existing findings after Core changes and reopen affected articles. Renderer CODE-003 belongs to the documentation repository. Do not change Core, extensions, production, test sites, commit, push or publish without the required explicit approval.
