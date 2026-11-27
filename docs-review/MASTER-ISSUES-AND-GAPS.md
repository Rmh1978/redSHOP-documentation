# redSHOP — shared master issue and gap register

## GitHub synchronization

**CODE-281 (open; #321):** Guest wishlist button omits the form target consumed by its click handler. Actual handler with synthetic layout attributes and DOM stubs prevented default and did not submit; target control submitted. Browser and Joomla remain unverified.

**CODE-280 (open; #320):** Actual Related Products module entry raised a null query error with enabled and selected stockroom in isolated include scope; no-selection control rendered. Joomla include scope and actual stock filtering remain unverified.

**CODE-279 (open; #319):** Actual Product Slideshow default layout rendered fixed placeholder images for different synthetic product lists with asset calls stubbed. Product query, XML write and Joomla browser behavior remain unverified.

**CODE-278 (open; #318):** Actual Main Category Scroller thumbnail helper raised an error with no full media and a synthetic existing default-image file; no-default control returned noimage. Real Joomla media and storefront are unverified; distinct from #316.

**CODE-277 (open; #317):** Actual minicart layout with fixed synthetic populated cart and stubs rendered identically with opposing display settings. Shared cart total calculation reads a cart-module record. Real cart recalculation and Joomla rendering remain unverified.

**CODE-276 (open; #316):** Main Category Scroller's actual default layout raised a PHP 8.4 TypeError for synthetic integer and null menu IDs supplied by a router stub. Router source returns an ID or null. Real Joomla routing and rendering remain unverified.

**CODE-275 (open; #315):** Actual category export processing with media stubs repeated missing full-image lookups and skipped a separately stubbed thumbnail; Joomla export and filesystem unverified.

**CODE-274 (open investigation; #314):** Actual product editor button with stubs points to a singular view while the selector layout belongs to the plural view. Actual Joomla modal dispatch and insertion unverified.

**CODE-273 (open; #312):** Standalone PostNord label controller and client with synthetic input and mocked cURL emitted an empty consignee name for a present empty company field. Company and absent-field controls passed; Joomla and provider behavior unverified.

**CODE-272 (open; #313):** PostNord client reads a different weight key from the standalone controller and the order label source. Actual standalone controller and client with mocked cURL emitted empty shipment and item weights; order dispatch and provider behavior unverified.

**CODE-271 (open investigation; #311):** Product statistics sets a session SQL mode containing a mode described as removed in the MySQL 8 worklog. Actual model statement was captured with a stub; real database acceptance is unverified.

**CODE-270 (open; #310):** Product statistics order-count heading is absent from the model sort allowlist. Actual product and base model state with stubs fell back to product name in both directions; Joomla browser and database remain unverified.

**CODE-269 (open; #309):** Order statistics export treats grouped report rows as individual orders; the actual controller with synthetic rows and stubs failed on an empty list and warned on a missing order ID. Full Joomla export is unverified.

**CODE-268 (open; #308):** Customer and product statistics exports concatenate CSV values without quoting. Each actual controller with synthetic data and stubs produced an extra column for a name containing a comma; full Joomla exports are unverified.

**CODE-267:** Custom field list review hold; source-only concern requires authorized private assessment. Runtime impact and exploitability unverified; no ordinary Issue.

**CODE-266 (open; #307):** Attribute stockroom save reads the first association before checking an empty result. Actual model with stubs emitted two PHP warnings; real Joomla error handling and insert unverified.

**CODE-265 (open; #306):** Attribute stockroom save can update an earlier row before rejecting a later one. Actual model with SQLite and doubles reproduced partial persistence; Joomla and MySQL unverified.

**CODE-264:** Pricing review hold; source-only concern requires authorized private assessment. Runtime impact and exploitability unverified; no ordinary Issue.

**CODE-263 (open; #305):** The product attribute status heading requests an ordering field absent from the model whitelist. Actual redSHOP state population with stubs fell back to ID; full Joomla browser and database remain unverified.

**CODE-254 (open; #297):** Catalogue and sample request views use delete tasks while controllers expose remove; list selections and controller input names also differ. Actual redSHOP base dispatch with task-map stubs and bundled Joomla grid helper reproduced the contracts; full Joomla dispatch is unverified.

**CODE-253 (open; #296):** Actual sample-request model bulk update and delete with SQLite and query stubs returned success but changed no rows for IDs 1 and 2; single-ID controls passed. Joomla dispatch and MySQL unverified; separate model and workflow from #261.

**CODE-252 (open; #295):** The standard sample template and request details use names replaced by current schema. Actual Twig with schema-shaped rows and a stubbed colour helper omitted names and passed null; an equivalent SQLite detail join failed on the old column. Real Joomla and MySQL remain unverified; distinct from #294.

**CODE-251 (open; #294):** Actual sample store with SQLite and stubbed dependencies recreated a retained colour with a new ID and removed all colours when the input was absent. Existing requests store colour IDs. Real Joomla, MySQL, inline editing and request display remain unverified.

**CODE-262:** Attribute editor publication field differs from the stored column. Actual bundled Joomla table binding with event stubs ignored the editor field; full form save remains unverified.

**CODE-261:** Product attribute filter form and list query use different request state. Actual model with stubs ignored nested product input; Joomla submission remains unverified.

**CODE-260:** Investigate guest checkout newsletter sign-off. Actual helper skips removal for a guest and empty email; checkout control reachability and runtime remain unverified.

**CODE-259:** Customer tag account detail links contain literal PHP and the edit form identifier differs from the model. Actual Twig and model probes used stubs; full browser behavior unverified.

**CODE-258:** Customer tag toolbar task and selection contracts differ from the handlers. Actual redSHOP dispatch with task-map stubs and earlier Joomla grid helper probe support the mismatch; full UI unverified.

**CODE-257:** Customer tag publication targets a table different from the install schema. Actual model with isolated SQLite and stubs returned false; Joomla dispatch and MySQL remain unverified.

**CODE-256:** Customer tag deletion quotes multiple IDs together and leaves the transaction open after success. Actual model with isolated SQLite and stubs demonstrated both; Joomla dispatch and MySQL remain unverified.

**CODE-255 (security hold):** Customer tag handling requires authorized private review. Runtime exposure and exploitability are unverified; no ordinary Issue has been created.

**CODE-250 (security hold):** Catalogue request handling requires authorized private review. Runtime exposure and exploitability are unverified; no ordinary Issue has been created.

**CODE-249 (open; #293):** Actual catalogue mail method with a database stub failed to resolve its unimported helper. In a separate actual-controller probe successful storage and failed mail stubs produced the sent-success message. Joomla autoload, database, browser and mail are unverified.

**CODE-248 (open; #292):** Currency Layer's eligible refresh fetches data but then reads and may rewrite the existing cache instead. Actual initialization with a simulated clock and mocked provider retained synthetic rate 2 instead of fetched 3; no-cache control returned 3. Real Joomla and provider behavior are unverified; distinct from #72 and #264.

**CODE-247 (security hold):** Order export selection requires authorized private review. Runtime exposure and exploitability are unverified; no ordinary Issue has been created.

**CODE-246 (open; #291):** Product Scroller passes `LIMIT 5` as a query limit. Public Joomla Database 3.4.0 source casts it to integer and its MySQL builder omits a nonpositive limit; a separate PHP 8.4 cast produced 0. Installed framework and SQL execution remain unverified.

**CODE-245 (open; #290):** Actual Product Scroller `ShowProducts` with synthetic prices rendered its old-price layout for both saved `no` and `yes`, while numeric string `0` used the single-price branch. Form binding and actual storefront remain unverified; separate module and option from #137, category query #289 and diagnostic #288.

**CODE-244 (open; #288):** Product Scroller unconditionally queues a diagnostic error in its lookup; actual module entry with stubs queued the message. Joomla message display remains unverified.

**CODE-243 (open; #289):** Actual Product Scroller query construction with synthetic category IDs produced an incorrect `IN` expression; an equivalent SQLite predicate selected an unintended synthetic ID. In a separate stubbed fixture the actual category helper returned child and grandchild objects with `id` but no `category_id`, which the scroller reads. Integrated descendants, Joomla query builder, MySQL and storefront behavior remain unverified.

**CODE-242 (open; #287):** Actual `Price::getPrice` compounded a synthetic 10% discount across two calls using a shared product when the price-record stub returned null; price-record and no-discount controls remained stable. Actual `getNetPrice` returned 90 alone versus 81 after `getPrice` on the same synthetic product with a preseeded discount. Real rule selection, cached helper integration, storefront and checkout remain unverified.

**CODE-241 (open investigation; #286):** The actual shared cart renderer omitted module ID from tag data for two synthetic module IDs; source tag code tests an unassigned local before building form identifiers. Real tag output, repeated-product pages and browser behavior remain unverified. Distinct from #143, #57, #268 and #251.

**CODE-240 / #285 (open):** The actual stock-image `doStore` returned true after a synthetic filename-update exception despite retaining a table error. The parent store, media helper and database were stubbed; actual Joomla save and filesystem effects remain unverified.

**CODE-239 / #284 (open investigation):** The inspected free-shipping checkout layout skips shipping selection and the order-save path does not read a submitted method. Physical-order fulfillment policy, actual checkout, persistence and downstream impact remain unverified.

**CODE-238 / #283 (open):** Ahamove order-item serialization assigns properties to an uninitialized element. The actual method threw on a synthetic nonempty order-item list, while empty input returned `[]`. Event dispatch and provider behavior are unverified.

**CODE-237 (open; #282):** Ahamove's cart remark builder reads a malformed product key. The actual method with a synthetic cart item warned and passed null to a product stub; an order-item object control passed its ID. Real checkout and provider behavior are unverified.

**CODE-236 (open; #281):** Shopper-group default shipping retains an initial zero amount when a matched VAT row has zero rate. The actual helper with synthetic dependencies returned 0 for a configured 100 shipping amount and a zero-rate VAT row, versus 100 without a row and 125 at a 0.25 rate. Actual database selection and checkout are unverified; distinct from CODE-235's query predicate.

**CODE-235 (open; #280):** The shipping VAT helper compares the numeric tax-rate field with a state code. The actual query-construction method was exercised with synthetic input and stubs; database and checkout behavior remain unverified. Distinct from #263's product-tax state join.

**CODE-234 (open; #279):** The selected-box dimension lookup calls `count()` on an object or null. The actual helper threw a PHP 8.4 `TypeError` with synthetic database results; database, carrier dispatch and Joomla checkout remain unverified.

**CODE-233 (open; #278):** Cart estimator overwrites scalar volume with a dimension array and compares height bounds against length. The actual method with synthetic dependencies confirmed the quote inputs; real database execution and Joomla checkout remain unverified. Distinct from CODE-104's malformed SQL.

**CODE-232 (open; #277):** Product Tab's sale-price layout reads a variable not set in the inspected entry or parent layout. The actual layout with synthetic prices emitted an undefined-variable warning; Joomla rendering and intended presentation are unverified.

**CODE-231 (open; #276):** Product Tab category adjustment uses a non-category request ID as a category ID in synthetic helper tests. Actual Joomla routing and database behavior remain unverified.

**CODE-230 (open; #275):** The actual order-discount selector chose different overlapping synthetic rules when their iteration order changed. The associated ID query has no explicit order. Intended precedence, supported database ordering and checkout impact remain unverified.

**CODE-229 (open; #274):** Comparison product-key lookup returns numeric array positions instead of stored keys and uses substring matching. The actual class with synthetic state retained an item on categoryless removal while exact-category removal succeeded; Joomla and session persistence are untested. Distinct from #252 request parameter names.

**CODE-228 (open; #273):** Four category tree styles use an undefined module-directory variable in the inspected entry. The actual entry with Joomla stubs failed to load dTree when the variable was absent; standard Joomla 5.4 development dispatcher source does not expose it. Installed Joomla and all styles remain unverified. Distinct from #241 sorting and #242 dTree query alias.

**CODE-227 (open; #272):** Normal configuration stores two registration introductions, but the inspected default frontend layout renders corresponding language keys rather than reading those settings. Source-only investigation; Joomla language overrides and rendering are unverified. Distinct from #232's wizard session-key mismatch.

**CODE-226 (open; #271):** Category changes invoke the search module's manufacturer callback even when its optional destination is not rendered. The actual source and shipped minified callbacks threw with DOM doubles for both empty and populated responses; controls with a destination hid or displayed it. Browser, AJAX and Joomla are unverified. Distinct from #256 selector visibility, #257 query construction and #229 suggestion initialization.

**CODE-224 (open; #269):** Product zoom indexes a thumbnail filename match without checking missing or nonmatching URLs. The actual initializer threw for synthetic paths with DOM doubles; browser and Joomla behavior remain unverified. See the Core handoff for tests and scope.

**CODE-223 (open; #268):** The free-shipping module passes its configured rate ID initially, but the AJAX cart refresh calls the helper without an ID and writes the result into the module message. Source only; actual browser and checkout behavior are untested. Distinct from #238 method enablement, #163 postal filtering and #251 cart-module settings.

**CODE-222 (open; #267):** Manufacturer scroller limits joined published media rows instead of distinct manufacturers. An equivalent SQLite query returned the same manufacturer twice under a limit of two when it had two published media rows. Actual Joomla SQL and storefront are untested; confirm intended image selection. Distinct from #198 image links and #199 slider divisor.

**CODE-221 (open; #266):** Mega Menu's in-request category-tree cache uses category ID but not the selected Joomla menu or end level. Actual helper with synthetic stubs returned the first menu for a second instance sharing its category; a distinct-category control returned its own menu. Joomla rendering is untested. Distinct from #204 category query keys and #201 sorting.

**CODE-220 (open; #265):** Order export processing repeats the full batch for each input row; the actual method with synthetic helper stubs returned four rows for two input rows. The shared export helper writes each transformed row, but SQL, CSV and Joomla runtime remain untested. Distinct from CODE-005 / #111 date boundaries and CODE-004 / #109 concurrent temporary-file reuse.

**CODE-009 (#93; further source evidence):** In addition to the two administrator paths, non-giftcard storefront checkout assigns order-item supplier ID from manufacturer ID. Quotation conversion uses product supplier; the inspected supplier-email branch reads the current product supplier rather than this stored field. Persistence, downstream effects and checkout remain unverified; the Issue was updated and a subsequent dry-run reported unchanged.

**CODE-219 (open; #264):** Both currency converters substitute rate 1 for an absent individual quote. Actual methods with synthetic nonempty rates returned a value for a missing target; provider, payment and Joomla paths are untested. Distinct from CODE-007 / #72's Currency Layer explicit-target bypass.

**CODE-218 (open; #263):** Tax calculation lookup joins states by three-character code without constraining country. An equivalent isolated SQLite fixture matched a foreign country's two-character state code when three-character codes were shared; the actual Joomla query, database and checkout are untested. Distinct from CODE-070 / #130's administrator-list display issue and CODE-185 / #234's association-write failure.

**CODE-215–217 (open; #260, #261, #262):** Account-group list deletion reads a different selection key; bulk SQL quotes multiple IDs together; and publication feedback is inverted. Actual controller/helper methods were exercised with synthetic stubs. Database and Joomla runtime are unverified.

**CODE-212 (open; GitHub #257):** The actual category-dependent search manufacturer lookup generated one quoted comma-separated value for two synthetic IDs with database stubs. SQL, Joomla and browser behavior remain unverified.

**CODE-211 (open; GitHub #256):** Search module's default Twig reads a differently capitalized manufacturer visibility key. With categories hidden an isolated actual-layout render omitted the configured selector; its request-name contract also needs verification. Joomla, browser, AJAX and search results are unverified.

**CODE-209 (open; GitHub #254):** Four product-module layouts and the AcyMailing integration pass product ID and link before dimensions to the image helper which expects dimensions first. The actual AcyMailing method with stubs confirmed the mismatched arguments; real image lookup, email and module rendering remain unverified.

**CODE-210 (open; GitHub #255):** Products module exclusion and Related Products lookup use `pid` while the product view and module links use `id`. The actual Related Products entry with stubs did not call the lookup for `id=42`, but did for `pid=42`. Joomla routing and actual module results remain unverified.

**CODE-207 (open; GitHub #252):** Product Compare module removal sends `pid` while the handler reads `id`; shared comparison sends `cid` while the handler reads `catid`. Source only; dispatch and session behavior unverified. Distinct from #205 menu-result counting.

**CODE-208 (open; GitHub #253):** Mega Menu form stores `moduleclass_sfx` while the entry reads `class_sfx` for the inner list. Joomla wrapper and actual form/storefront behavior remain unverified. Distinct from #201 and #204.

**CODE-206 (open; GitHub #251):** The shared cart-module parameter lookup does not select a displayed instance; initial module rendering uses instance parameters while total calculation and refresh use the shared lookup. Multiple-instance effect and intended policy remain unverified. Distinct from #203 and #239.

**CODE-205 (open; GitHub #250):** Voucher Amount is marked sortable but absent from the model allowlist and falls back to ID in the shared list state path. Source inspection only; Joomla and database behavior remain unverified. Separate voucher model and form from #249 and separate from voucher percentage formatting #115.

**CODE-204 (open; GitHub #249):** Promotion Description and Publication headings are marked sortable but absent from the model allowlist and fall back to ID in the shared list state path. Source inspection only; Joomla and database behavior remain unverified. Distinct affected model and form from #246, #187 and #183.

**CODE-203 (open; GitHub #248):** Mass-discount table validation and explicit-product update with isolated parent/database stubs accepted 150% or fixed 120 against price 100 and generated negative discount prices; a 12% control generated 88. Actual Joomla, database, storefront and checkout remain unverified. Distinct from CODE-169 / #221 deletion reset.

**CODE-202 (open; GitHub #247):** Review storage precedes administrator notification; the actual model returned failure after a successful table stub and failed mailer stub. A retry may encounter the duplicate check. Joomla database, controller and mail delivery remain unverified. Distinct from guest CAPTCHA CODE-048.

**CODE-201 (open; GitHub #246):** Review-list user, date and publication headings are marked sortable but absent from the model's allowlist and fall back to `r.id` in the shared list state path at Core `2e2889680244db64b9e9f64da29608e02f543a70`. Source inspection only; Joomla requests and database behavior remain unverified. Distinct from manufacturer and wrapping list findings because the affected model and form differ.

**Maintainer pause:** Project work and issue writes are paused pending explicit
resumption. Ledger: 176 synced, 52 security holds, 15 test-only and no pending
ordinary sync. Inventory: 145 partial, one historical annotation and 15
historical-preserved pages. Compare current Core source and worktrees against
the revisions recorded in `RESUME.md` before resuming; do not infer runtime
verification or close outstanding findings.

**Tax and currency guides:** Rechecked `forms/taxgroup.xml`, `TaxgroupsModel.php:32-42,55-75` and `TaxgroupTable.php:43-52` at Core `beacc470` for required name, default publication, list ordering and the associated-rate deletion check. Also checked `CurrencyTable.php:118-129` for its configured-currency deletion guard. Product/default-group references, integration dependencies, Joomla UI and checkout remain unverified.

**Dashboard configuration:** Rechecked `component/admin/tmpl/configuration/default_menuhide.php:19-100` and `ConfigurationController.php:115` at Core `beacc470`; added a single-item example and described the parent checkbox script. Joomla UI, saved configuration and permission enforcement remain unverified.

**Bank transfer guide:** Rechecked the plugin manifest and English labels plus `libraries/redshop/src/Helper/Payment.php:496-524` at `beacc470` for setting defaults and the inspected charge/discount calculation. The previous five screenshots depict the historical checkout and were not reinstated as current UI. Actual checkout, status changes, account reconciliation and Joomla remain unverified.

**EAN transfer guide:** Rechecked `plugins/redshop_payment/rs_payment_eantransfer/rs_payment_eantransfer.xml` and its `onPrePayment` handler at `beacc470`. Added field defaults including the extra-info placeholder; the eight prior screenshots depict the historical checkout and were not reinstated as current UI. Invoice generation, delivery, payment reconciliation and Joomla remain unverified.

**2Checkout guide:** Rechecked `plugins/redshop_payment/rs_payment_2checkout/rs_payment_2checkout.xml` at `beacc470` for advanced defaults and credential field types. Historical provider and checkout screenshots were not reinstated as current UI. Provider, callback and Joomla behavior remain unverified.

**Bao Kim guide:** Rechecked `plugins/redshop_payment/baokim/baokim.xml` at `beacc470` for credential field types, test mode and status selector defaults/queries. The original provider and checkout screenshots were not reinstated as current UI. Provider, callback and Joomla behavior remain unverified.

**GiroPay guide:** Rechecked `plugins/redshop_payment/rs_payment_giropay/rs_payment_giropay.xml` at `beacc470` for settings and defaults. Historical provider and checkout screenshots were not reinstated as current UI. Provider, callback and Joomla behavior remain unverified.

**Money Booker guide:** Rechecked `plugins/redshop_payment/rs_payment_moneybooker/rs_payment_moneybooker.xml` at `beacc470` for settings and defaults. Historical provider and checkout screenshots were not reinstated as current UI. Provider, callback and Joomla behavior remain unverified.

**PayGate and Paymill guides:** Rechecked `plugins/redshop_payment/paygate/paygate.xml` and `plugins/redshop_payment/rs_payment_paymill/rs_payment_paymill.xml` at `beacc470` for settings and defaults. Historical provider and checkout screenshots were not reinstated as current UI. Provider, callback and Joomla behavior remain unverified.

**Product zoom guide:** Rechecked mode-dependent controls and defaults against `plugins/system/redproductzoom/redproductzoom.xml` at `beacc470`. The historical screenshots were not reinstated as current UI. Joomla browser behavior and accessibility remain unverified.

**Payment guide revision drift (documentation review):** The reviewed payment plugin manifests at Core `beacc470` differ from local `origin/develop` `920ea081`, which has not been fetched or merged. The latter removes the E-conomic fields from the eight reviewed payment manifests other than Bao Kim and changes the capture-status selectors to multiple for ePay, GiroPay and Paymill. It also changes some label/description keys and ePay runtime code. Recheck the affected guides and CODE-187 after a revision change; do not treat the tracking ref as the current checkout or as runtime verification.

**DOC-SEC-001 (open; security hold):** A historical payment-guide image requires private review for possible sensitive configuration. Validity and exposure are unverified; no potentially sensitive details are recorded here. Do not reuse the image pending authorized private review.

**CODE-199 (open; security hold):** A source-level payment eligibility configuration investigation requires authorized private security review. Runtime exposure and exploitability remain unverified; no sensitive details or public issue recorded.

**CODE-198 (open; GitHub #244):** PayPal currency default is not an offered option; the actual form emitted synthetic `0` and `DKK` currency values unchanged (`rs_payment_paypal.xml:57-76`, `extra_info.php:21,77`). Joomla binding, conversion and provider response remain unverified. Distinct from CODE-002's notification path.

**CODE-197 (open; GitHub #243):** Category link-list helper selects an ID under one name and reads another; actual helper with synthetic id-only records emitted warnings and collapsed two rows into one (`helper.php:145-155,199-212,267-272`). Real database and Joomla unverified. Distinct from CODE-194's sort default and CODE-195's dTree query.

**CODE-196 (open; security hold):** A source-level shopper-group product module investigation requires an authorized private security review. Runtime exposure and exploitability remain unverified; no sensitive details or public issue recorded.

**CODE-195 (open; GitHub #242):** With a valid synthetic sort, the dTree layout generated a category query rejected by SQLite for an unbound publication-filter alias (`dtree.php:72-80`). MySQL, Joomla loading and storefront remain unverified. Distinct from the invalid sort default in CODE-194 and the Xmap plugin's separate query in CODE-153.

**CODE-194 (open; GitHub #241):** Category module sort default is absent from its options; actual dTree layout raised an undefined-variable warning for synthetic default under warnings-as-exceptions, while a valid sort reached a query stub (`mod_redshop_categories.xml:115-124`, `dtree.php:53-75`). The query was not executed in that test; Joomla binding and storefront remain unverified. A new category-module guide documents the settings and limitations.

**CODE-193 (open; GitHub #240):** Facebook Like and Share manifest default `0` is not an offered `false` or `true` option. Actual Like layout emitted synthetic values unchanged (`mod_redweb_facebook_plugins.xml:58-65`, `layouts/facebook/like.php:16-20`); Joomla binding and provider behavior unverified.

**CODE-192 (open; GitHub #239):** Cart module manifest output default is not an offered option. Actual cart layout selected its extended branch for synthetic `1` and the expected branches for `simple` and `extended` (`mod_redshop_cart.xml:29-34`, `Cart/Cart.php:25-37`). Joomla binding, persistence and storefront remain unverified; distinct from #202's empty-cart button.

**CODE-191 (open; GitHub #238):** Actual free-shipping message helper returned its free-rate message for a synthetic disabled extension and zero-price rate using in-memory SQLite and Joomla/query stubs (`Shipping/Rate.php:257-264,348-375`). Source rechecked at `2e2889680244db64b9e9f64da29608e02f543a70`; both the module and AJAX cart (`Cart/Render.php:209-212`) call the helper. MySQL, Joomla plugin discovery, AJAX cart and checkout remain unverified. Distinct from #163's postal filtering, #162's calculator SQL and #189's GLS address handler.

**CODE-190 (open; security hold):** A source-level newsletter module rendering investigation requires an authorized private security review. Runtime exposure and exploitability are unverified; no sensitive details or public issue recorded.

**CODE-189 (open; security hold):** A source-level gift-card deletion investigation requires an authorized private security review. Runtime exposure and exploitability are unverified; no sensitive details or public issue recorded.

**CODE-188 (open; GitHub #237):** Actual gift-card table store reported success and assigned a replacement filename after synthetic deletion and a failed upload (`GiftcardTable.php:75-103`). Actual files, database and Joomla unverified; separate from #177 and #166. See Core handoff and gift-card guide.

**CODE-187 (open; GitHub #236):** ePay manifest defaults include a payment type absent from the actual selector's options under Joomla/asset stubs (`rs_payment_epayv2.xml:131-135`, `fields/paymenttype.php:46-67`). Form binding, saved values and provider behavior remain unverified. Historical screenshots were not reinstated as current UI.

**CODE-186 (open; GitHub #235):** Actual order reset template script displayed its success alert for synthetic HTTP 200, 403 and 500 completion (`component/admin/tmpl/configuration/default_ordertab.php:17-52`). No request, database reset, actual browser or Joomla was run. See the order configuration guide and Core handoff.

**CODE-185 (open; GitHub #234):** Actual tax-rate table store returned true when the first synthetic shopper-group insert returned false and the second returned true; only the last result is returned (`TaxrateTable.php:78-107`). Real database failure/transaction behavior and Joomla remain unverified. The VAT rate guide also clarifies required name/group, optional location, negative-rate validation and the EU field's new-record default using `forms/taxrate.xml:6-82` and `TaxrateTable.php:46-63`.

**CODE-184 (open; security hold):** Additional source-level investigation requires an authorized private security review. Runtime exposure and exploitability are unverified; no sensitive details or public issue recorded.

**CODE-183 (open; security hold):** Additional source-level investigation requires an authorized private security review. Runtime exposure and exploitability are unverified; no sensitive details or public issue recorded.

**Shipping boxes guide:** Corrected the description of `libraries/redshop/src/Helper/Shipping.php:1008-1109,1146-1183`: it compares each box against three aggregate cart-dimension candidates, not individual product rows, and skips gift cards. Both inspected box renderers hide their control under shipping-method and count conditions (`Tags/Sections/Shippingbox.php:79-92`, `Shipping/Tag.php:562-576`). Real checkout, carrier behavior and physical packing remain unverified.

**CODE-182 (open; GitHub #233):** Actual wizard save with synthetic user-step input and session raised an undefined `VATREMOVE` key warning when warnings were converted to exceptions, before redirect but after session update. `WizardController.php:69-87` reads the flag unconditionally; the user step does not supply it. Joomla warning handling and navigation remain unverified. Distinct from #232 company text, #231 VAT tasks and #110 configuration copy.

**CODE-181 (open; GitHub #232):** Actual wizard controller save with synthetic session/input stubs left the canonical `REGISTRATION_COMPANY_INTROTEXT` unchanged and stored the submitted company text under `REGISTRATION_COMP_INTROTEXT`. Actual file saving and Joomla remain unverified. See `user_registration.php:89-113`, `WizardController.php:69-77,111-119` and `Config/App.php:395`. Distinct from #231's VAT task names and #110's configuration copy.

**CODE-180 (open; GitHub #231; investigation):** Wizard VAT layout rendered `tax_rate.add` and `tag_rate.edit` for a synthetic rate; removal redirects to `tax_detail.removefromwizard`. These differ from the current `TaxrateController` and `TaxratesController`. Joomla dispatch and actual rate changes remain unverified. See `price_vat.php:95-123` and `WizardController.php:87-90`.

**CODE-179 (open; GitHub #230):** Actual suggestion methods in `src/assets/com_redshop/js/redshop.search.js:170-185,252-301` raised TypeError in a Node VM when refining a synthetic substring result without `value_number`. AJAX query does not select that field (`SearchModel.php:1010-1016`); default initialization is separately tracked as CODE-178 / #229. Browser, AJAX and Joomla unverified.

**CODE-178 (open; GitHub #229):** Search module refers to `makeUrl()` and loads the suggestion script, but inspected default scripts/layout do not initialize `_b.AutoSuggest` or define `makeUrl`. Node VM with both actual scripts left synthetic keyword handlers unset and `makeUrl` undefined. Other scripts/overrides, Joomla asset loading and browser remain unverified. See `mod_redshop_search.php:19-20,55-60,112-140` and `src/assets/com_redshop/js/redshop.search.js:1-69`. Distinct from #227's custom-field rendering.

**CODE-177 (open; GitHub #228):** Product editor accepts five accessory price operators, but `libraries/redshop/src/Helper/Accessory.php:124-137` generates a CASE for only plus, minus and equals. Its generated CASE adapted to SQLite returned NULL for synthetic multiplication/division; the actual price helper converts NULL to zero when VAT is disabled. Cart accessory reconstruction and accessory tag pricing consume the lookup value. Actual MySQL, Joomla, storefront and checkout remain unverified.

**CODE-176 (open; GitHub #227):** Search module's default layout does not render custom-field selectors: `mod_redshop_search.php:145-161` omits helper field data from the Twig context and `tmpl/default.html.twig:40-57` loops only when that data is empty. The real Twig layout emitted no selector with synthetic populated or empty field data. Actual Joomla, database, overrides and submitted search remain unverified. Distinct from #226's category exclusion query.

**CODE-175 (open; GitHub #226; investigation):** SQLite equivalent of search's joined-category exclusion retained a synthetic product linked to both excluded and allowed categories. Product-wide exclusion policy, actual MySQL and Joomla remain unverified; exclusion is not access control.

**CODE-174 (open; security hold):** Additional source-level investigation requires an authorized private security review. Runtime exposure and exploitability are unverified; no sensitive details or public issue recorded.

**CODE-173 (open; GitHub #225):** Actual price-filter module layout used a synthetic selected 100–200 range for both limits and values. Browser and Joomla request/state behavior unverified.

**CODE-172 (open; GitHub #224):** Actual promotion removal on a synthetic cart duplicated one subsequent product and left another beyond the reduced count. Cart persistence and recalculation stubbed; real checkout unverified. Distinct from CODE-171's warning, CODE-170's shipping restoration, #94's award lookup and #76's date comparison.

**CODE-171 (open; GitHub #223):** Actual promotion removal read an unset final cart index in a synthetic fixture; warnings-as-exceptions aborted before stubbed cart persistence. Joomla warning handling and checkout unverified; distinct from CODE-170 shipping restoration.

**Cart configuration guide:** Rechecked `default_cart_settings.php` and `config.dist.php:65,159-161,666,700,712-714,724-730` at Core `beacc470` for distributed add-to-cart, quotation, timeout and AJAX defaults. Existing settings, template availability and storefront remain unverified.

**Product configuration guide:** Rechecked `default_product_template_image_settings.php` and `config.dist.php:171,460,710` at Core `beacc470`; documented distributed template ID, ordering and out-of-stock attribute default. Template availability and actual storefront are unverified.

**Category configuration guide:** Rechecked `default_category_template.php`, `Configuration/HtmlView.php:104-114,1046-1062` and `config.dist.php:173-175` at Core `beacc470`; documented distributed template IDs with an installation-specific validity caveat. Actual template binding and storefront are unverified.

**Manufacturer configuration guide:** Rechecked `default_manufacturer_setting.php`, `default_manufacturer_image_setting.php` and `config.dist.php:69-83,177,554-556` at Core `beacc470`; documented the distributed template ID and blank title limit/suffix without assuming installed records. Actual template binding and storefront are unverified.

**CODE-170 (open; GitHub #222):** Actual promotion apply/removal methods with a synthetic cart restored old shipping when a non-free-shipping promotion was removed while a free-shipping award remained. Discount recalculation and cart persistence stubbed; actual checkout unverified.

**CODE-169 (open; GitHub #221):** Actual mass-discount deletion generated an unconditional reset of a selected synthetic product's sale flag, discount price and dates using database/parent stubs. Real database, overlapping-rule semantics and storefront unverified.

**Mass discount guide:** `component/admin/src/Table/MassdiscountTable.php:126-219` resolves product, category and manufacturer selections and resets sale flag, discount dates and discount price during deletion without checking overlapping rules in that reset. Actual database execution and Joomla UI remain unverified.

**CODE-168 (open; security hold):** Additional source-level investigation requires an authorized private security review. Runtime exposure and exploitability are unverified; no sensitive details or public issue recorded.

**Product-price discount guide:** At Core `beacc470`, `libraries/redshop/src/Helper/ProductPrice.php:548-607` treats zero dates as open, compares nonzero bounds inclusively, and includes an empty category list when the product has category IDs. The guide scopes these statements to that lookup; actual saved values and other calculation paths are unverified.

**CODE-167 (open; GitHub #220):** Negative newsletter batch size is not normalized in inspected config preparation and caused the actual controller with stubs to throw `ValueError`; a positive batch queued. Configuration save, Joomla routing and mail unverified. Distinct from #168 progress indexing, #169 routing and #170 recipient fields.

**CODE-166 (open; GitHub #219):** Order-total discount schema stores numeric dates and list selects raw rows, but actual renderer with stubs raised `Error` for synthetic numeric dates and accepted formatted dates. Actual database rows and Joomla list unverified; distinct from nullable coupon/voucher date handling.

**CODE-165 (open; GitHub #218):** Actual coupon and voucher save methods with parent stubs rejected a synthetic start-only range but accepted end-only, both-empty and ordered ranges on PHP 8.4. Actual form, database persistence, timezone and checkout behavior remain unverified.

**CODE-164 (open; GitHub #217):** Coupon and voucher list date renderers each raised an `Error` for a schema-permitted synthetic null start date with Joomla/config stubs; zero and valid dates rendered. Actual stored rows, blank-date save and Joomla UI remain unverified. Voucher evidence reconciled with GitHub.

**CODE-163 (open; GitHub #216; investigation):** Actual product delivery helper with query-builder stub and in-memory SQLite selected an unpublished 1–2 day stockroom over a published 3–4 day stockroom. Current source assigns the first cart product's result to `order_delivery`, which order template tags read; checkout can call order mail. Request scope and actual output remain unverified. Intended publication policy, real MySQL and Joomla storefront remain unverified. Separate from CODE-162 / #215's Weeks conversion.

**CODE-162 (open; GitHub #215; investigation):** The actual product delivery helper divides Weeks values by seven and truncates: synthetic values 1–2 display `0-0 weeks` and 8–15 display `1-2 weeks`. Current source assigns the first cart product's result to `order_delivery`, which order template tags read; checkout can call order mail. Request scope and actual output remain unverified. Intended input/storage units and rounding, real persistence and storefront remain unverified. Separate from CODE-161 / #214's radio default mismatch.

**CODE-161 (open; GitHub #214):** Stockroom delivery-unit default `1` matches neither `Days` nor `Weeks`; the bundled Joomla switcher layout rendered neither checked with the XML default and options in an isolated stubbed invocation. Actual new-record binding, persistence and storefront remain unverified. Related to general output acceptance M-0225.

**User configuration source pass:** At Core `beacc470`, `component/admin/tmpl/configuration/default_registration.php:15-50,128-196`, `default_shopper_group.php:20-150`, `default_checkout_required.php:15-77`, `component/admin/src/View/Configuration/HtmlView.php:879-925,1006-1025`, and `component/admin/config/config.dist.php:89,295,348,358,412,424,430-446,472,698` support selected registration, shopper-group and required-field defaults. No distributed `REQUIRED_PHONE_ST` or `REQUIRED_EMAIL_ST` property was found. Actual forms, validation and Joomla account behavior remain unverified.

**Integration configuration source pass:** At Core `beacc470`, `component/admin/tmpl/configuration/default_clicktell.php:15-114`, `default_postdk.php:16-150`, `default_economic.php:28-104`, `default.php:90-106`, `component/admin/src/View/Configuration/HtmlView.php:177-188,1123-1134` and `component/admin/config/config.dist.php:267-273,502-504,562-564,592-600,670-678,738-740` support the documented visibility, selected defaults and save checks. Provider actions and Joomla behavior remain unverified.

**CODE-160 (open; GitHub #213; investigation):** The VAT-after-discount number field has no fractional step despite a `0.16` tooltip example. A synthetic Chrome field starting at `0.000` reported step mismatch for `0.16`; actual Joomla validation and save are unverified and the toolbar source submits directly.

**CODE-159 (open; GitHub #212):** The first sample reminder treats the setting described as days as minutes. The actual helper called a mail stub at 60 seconds for synthetic value 1; site dispatch invokes a daily-gated cron path, so actual timing depends on invocation. Dispatch, cron timing, database, Joomla and delivery remain unverified. Separate from coupon-expiry issue CODE-031 / #85.

**CODE-158 (open; GitHub #211):** Category product filter layout assumes selection arrays exist. Actual manufacturer, category, custom-field and attribute branches emitted warnings and `TypeError` with synthetic choices and empty input; Joomla routing and storefront remain unverified.

**CODE-157 (open; GitHub #210):** Filter category loop counts an object-or-false shopper-group portal result; actual layout raised `TypeError` for both synthetic values. Database, filtering and Joomla are unverified. Separate from CODE-152 / #205's product-menu result.

**CODE-156 (open; GitHub #209):** Import progress estimates chunks from physical lines while splitting parses CSV records. Actual counter returned 13 lines for a header and one multiline record; browser, splitter and Joomla remain unverified. Separate from CODE-049 / #107 and CODE-004 / #109.

**CODE-155 (open; GitHub #208):** Facebook video layout emits malformed closing tags; actual layout output placed subsequent content inside the blockquote in a PHP libxml HTML parser. Browser, provider SDK and Joomla behavior are unverified.

**CODE-154 (open; GitHub #207):** Shopper-group logo layout emits an image without `alt`; actual guest and logged-in branches exercised with synthetic file and helper stubs. Real storefront and assistive-technology behavior are unverified.

**CODE-153 (open; GitHub #206):** Xmap category-tree query references undefined alias `b`; actual method and a query-builder stub produced a query rejected by an in-memory SQLite database. MySQL, installed Xmap and Joomla are unverified. This is separate from CODE-152 / #205's later menu-result error.

**CODE-152 (open; GitHub #205):** Product Compare and filter layouts, failed non-AJAX accessory-add and both Xmap product paths raised `TypeError` for synthetic object and null menu results. The unchanged extracted datafeed method did likewise with stubs. Failed reorder and product/manufacturer breadcrumbs also count menu results in source; these additional paths, full CLI, real database, Joomla workflows and extension installation remain unverified. Issue follow-up synchronized.

**CODE-151 (open; GitHub #204):** Mega Menu checks `id` but reads `catid` from a menu query. Actual helper emitted a missing-key warning for synthetic id-only data; real Joomla menu data and hierarchy are unverified.

**CODE-225 (open; GitHub #270; investigation):** Second and third sample reminders require an exact due date. An isolated fixture found no next-day attempt after a failed second-reminder stub and no third-reminder attempt on the following day. Cron, delivery and the intended catch-up policy remain unverified; distinct from CODE-159 / #212 and CODE-031 / #85.

**CODE-150 (open; GitHub #203; investigation):** Cart module discount line can display with the discount-inclusion setting disabled in the actual isolated layout while the calculator excludes a synthetic discount. Current source derives the displayed discount fields from the same three discount components used by the calculator in two cart calculation paths; real sequencing, module-instance settings and Joomla storefront remain unverified.

**CODE-149 (open; GitHub #202):** Cart module passes `showEmptyBtn` but default Twig checks `showEmptBtn`. Actual template omitted the empty-cart button with synthetic enabled setting; installed Joomla and alternative layouts are unverified.

**CODE-148 (open; GitHub #201):** Mega Menu descending sort discards the reversed result and Ordering mode has no comparator branch. Actual helper retained synthetic ordering 2 then 1 and returned ascending names for a descending request. Real query, nested results and Joomla storefront are unverified; follow-up reconciled.

**CODE-147 (open; GitHub #200):** Mass-cart helper silently skips unknown product numbers. Actual helper with synthetic database and cart stubs skipped an unknown while processing known and unpublished products; real database, cart and Joomla UI remain unverified.

**CODE-146 (open; GitHub #199):** Manufacturer scroller and Who Bought default layouts divide by their scroll-count settings. Product Tab's default layout also uses its products-per-row setting as a divisor, and its manifest declares zero outside the offered choices. Actual layouts raised `DivisionByZeroError` for synthetic zero in isolated fixtures; Joomla forms and storefront are unverified. Product Tab follow-up reconciled.

**CODE-145 (open; GitHub #198):** Manufacturer scroller default layout does not link its image despite the Image Link setting. Actual layout rendered an unlinked image and linked name with isolated stubs; Joomla storefront and alternate layouts remain unverified.

**CODE-144 (open; GitHub #197):** Similar Tags module counts a nullable helper result. Actual helper and module entry raised `TypeError` for excluded synthetic routes with a forwarding cache stub; Joomla 5.4.0 and 6.0.0 cache source preserves callback results. Installed runtime and storefront remain unverified.

**CODE-143 (open; GitHub #196):** Giao Hang Nhanh dynamic fee weight ignores cart-row quantity. Actual handler sent weight 2 to a stubbed fee method for quantities 1 and 3; shipment creation also adds weight once per order row in source. Shipment execution, provider units, checkout and actual requests remain unverified; follow-up synchronized.

**CODE-142 (open; GitHub #195):** Giao Hang Nhanh stores its delivered mapping under `delevered` but lowercases provider statuses as keys. Actual handler mapped synthetic `Delivered` to null with parameter stubs; real provider spelling and event dispatch remain unverified.

**CODE-141 (open; GitHub #194):** Giao Hang Nhanh's shipment creation and cancellation handlers do not check the order's shipping method. Actual handlers reached stubbed operations with two synthetic method values; encoded rates and real Joomla event registration and dispatch remain unverified.

**CODE-140 (open; GitHub #193):** Giao Hang Nhanh's shipment guard permits creation attempts with the wrong status and no tracking or with the configured status and existing tracking. Actual handler tested with isolated stubs; Joomla dispatch, provider and persistence remain unverified.

**CODE-139 (open; GitHub #192):** The actual USPS rate handler raised `TypeError` for object and null addresses with isolated helpers and synthetic configuration. Real database, provider and Joomla checkout remain unverified.

**CODE-138 (open; GitHub #191):** The actual FedEx rate handler returned no rates before provider lookup with a populated billing stub and synthetic configuration. Real database, provider and Joomla checkout remain unverified.

**CODE-137 (open; security hold):** Carrier diagnostic output requires authorized private review. Runtime exposure and exploitability remain unverified; no Issue created.

**CODE-136 (open; GitHub #190):** The shipping renderer reads an optional rate description without checking it. Actual self-pickup fallback and renderer emitted a warning with isolated stubs; multiple carrier outputs and default-shipping/PostNord shopper-group defaults are source-observed and actual checkout remains unverified.

**CODE-135 (open; GitHub #189):** The GLS shipping-address handler passes a string rate token to the array-based encrypt helper for a nonempty pickup selection. Actual methods raised `TypeError` with isolated plugin stubs; Joomla event dispatch and order persistence remain unverified.

**CODE-134 (open; GitHub #188):** GLS pickup lookup continues after simulated SOAP client initialization failure and the actual lookup raises `Error` with isolated stubs. Real provider and Joomla checkout remain unverified; separate from CODE-047's e-conomic integration.

**CODE-133 (open; GitHub #187):** Wrapping price and publication headings are sortable but absent from the model ordering allowlist. Actual model state with stubs falls back to ID; Joomla UI and database remain unverified.

**CODE-132 (open; GitHub #186):** Both shipping-box renderers omit the first entry after each priority change. Both actual renderers with isolated stubs returned IDs 1, 2, 4 for priorities 1, 1, 2, 2; equal-priority controls returned all IDs. Intended priority semantics and checkout remain unverified.

**CODE-131 (open; GitHub #185):** The location form omits rate-only fields read by shared save methods. Actual controller and model methods emitted missing-key warnings and PHP 8.4 deprecations with isolated input and table stubs; real Joomla request and persistence remain unverified.

**CODE-130 (open; GitHub #184):** The shipping-rate and pickup-location Delete toolbar targets a missing delete method, while selected checkboxes use `cid[]` and the existing remove handler reads `id`. Actual Joomla grid helper and controller class checked with stubs; real Joomla dispatch and deletion remain unverified.

**CODE-129 (open; security hold):** Shared deletion boundary requires authorized private review. An isolated shared-table fixture was run; database behavior and exploitability remain unverified. No Issue created.

**CODE-128 (open; GitHub #183):** Manufacturer email, publication and description headings are sortable but absent from the model allowlist. Actual model state with stubs falls back to ID; Joomla UI and database remain unverified.

**CODE-127 (open; GitHub #182):** Actual inherited copy and table helper for field groups, manufacturers, suppliers, templates and texts inferred `AdminController` in isolated controller-shaped fixtures and threw before storing. Joomla dispatch and database remain unverified.

**CODE-126 (open; GitHub #181):** The field-group publication heading is sortable but omitted from its model ordering allowlist. Actual model state with stubs maps publication ordering to name; Joomla UI and database are unverified.

**CODE-125 (open; GitHub #180):** The field-group selector sets model state before lazy initialization. Actual models with the installed Joomla state trait and isolated stubs replaced requested section 17 with null and limit 99 with 20. Actual AJAX, UI and database remain unverified.

**CODE-124 (open; GitHub #179):** The postal editor's country-change handler is entirely commented out; its actual body made no DOM or AJAX calls in an isolated VM. State options are generated for the form country at render time. Actual Joomla UI and persistence are unverified; separate from CODE-067's list filter.

**CODE-123 (open; GitHub #178):** The existing-record view suppresses the range endpoint but the actual save model reads it twice. An edit-shaped isolated fixture emitted two warnings and called the stubbed parent save once; real Joomla request and database behavior remain unverified. Separate from CODE-008 and CODE-089.

**CODE-122 (open; GitHub #177):** Actual shopper-group table assigned a logo filename and returned success with a failed upload stub and successful parent-store stub. Real filesystem, database and Joomla UI are unverified; separate from CODE-110's wrapping table.

**CODE-121 (open; GitHub #176):** Actual base-controller resolution with a Joomla-style factory stub could not find four state and shopper-group views due to their differing namespaces; a country control succeeded. Installed Joomla dispatch and upgrades are unverified.

**CODE-120 (open; GitHub #175):** Country prefix and flag sorting requests fall back to name in actual model state methods with stubs. Joomla UI and database remain unverified.

**CODE-119 (open; security hold):** Newsletter confirmation association and recipient selection require authorized private review. Runtime impact and exploitability are unverified; no Issue created.

**CODE-118 (open; GitHub #174):** Actual guest subscriber list renderer and name helper used a stubbed zero-ID billing record instead of the stored subscriber name. A further actual-helper fixture returned an unrelated synthetic name when a registered user's billing lookup failed and its fallback matched another `users_info_id`; two null results produced a blank name and two warnings. The subscription table also calls the helper when the submitted name is empty; normal save behavior is unverified. Real database and Joomla UI are unverified.

**CODE-117 (open; GitHub #173):** Actual answer-send controller reports success when the actual mail helper returns false for a stubbed missing template. Joomla and delivery are unverified; separate from CODE-034's save error.

**CODE-116 (open; GitHub #172):** Actual rating views and date helper with stubs omit the editor timestamp and display today's date for a zero timestamp. Administrator save, database and storefront remain unverified.

**CODE-115 (open; GitHub #171):** Question table validation replaces an existing timestamp with the current time in an isolated actual-method fixture; Joomla save, database and storefront are unverified.

**CODE-034 follow-up (open; GitHub #103):** Actual model and controller with a failing parent-save stub set success redirects for Save and Apply; Apply also warned about a missing `parent_id`. Joomla, database and mail were not tested.

**CODE-114 (open; GitHub #170):** Newsletter preview emits recipient fields that do not match the send controller's expected arrays. Actual template and controller were tested separately with isolated stubs; full Joomla submission and mail are unverified. Distinct from CODE-113 routing and CODE-112 progress.

**CODE-113 (open; GitHub #169):** Newsletter preview send toolbar names the singular controller while the send method is on the plural controller. Actual normalization was checked with stubs; full Joomla dispatch and real email are unverified.

**CODE-112 (open; GitHub #168):** Newsletter send progress indexes each one-record subscriber lookup by the global count. Actual controller with session and model stubs omitted details after the first and emitted warnings; real mail and Joomla are unverified.

**CODE-111 (open; GitHub #167):** The product back-image editor uses a non-inline layout whose thumbnail URL is uninitialized. Actual layout fixtures emitted an empty source and a warning; Joomla UI and image persistence are unverified.

**CODE-110 (open; GitHub #166):** Wrapping image save ignores a false upload result. The actual table method returned success and assigned the filename with failed and successful upload stubs; unsupported-extension and parent-failure controls were also tested. Filesystem, database and Joomla UI remain unverified.

**CODE-109 (open; GitHub #165):** An all-products inline action may target an already checked wrapper instead of the clicked wrapper. Current actual grid handler with synthetic DOM stubs retained prior IDs for both tasks; the historical separate model probe was not rerun. Joomla UI and database updates are unverified.

**CODE-108 (open; security hold):** Wrapping list search requires private review. Runtime and exploitability are unverified.

**CODE-107 (open; GitHub #164):** The wrapping renderer supplies its gross amount as the net hidden value. Actual renderer and selector were exercised separately with isolated stubs; storefront and checkout remain unverified.

**CODE-106 (open; security hold):** New product payment selection requires private review. Actual helper was exercised with isolated stubs; Joomla runtime and exploitability are unverified.

**CODE-105 (open; GitHub #163):** The free-shipping message helper skips postal bounds for alphanumeric destinations. Actual helper with query/rate stubs demonstrated the different predicate and message; database and checkout are unverified.

**CODE-104 (open; GitHub #162):** The cart shipping calculator generates consecutive SQL `AND` tokens for three destination fixtures using actual query generation with isolated stubs. SQLite rejected the queries and still reported a syntax error after removing only the duplicate conjunction; MySQL and Joomla remain unverified.

**CODE-103 (open; GitHub #161):** The shared shipping-rate editor uses numeric inputs for postal boundaries stored as text. A representative browser fixture did not retain an alphanumeric value; the actual Joomla editor, save/reload and checkout remain unverified.

**CODE-102 (open; GitHub #160):** The quantity-select helper requests a differently named file from the shipped layout; local Twig with a stub filter reports a syntax error in the shipped file, and stubbed replacement leaves the ordinary tag unchanged. Full redSHOP Twig loading, overrides and storefront remain unverified.

**CODE-101 (open; GitHub #159):** Actual related-product update functions with isolated stubs mislabelled comma-containing names and omitted the second label for a colon-containing first name. Normal, selected-ID and empty controls passed; Joomla UI and database remain unverified.

**CODE-100 (open; security hold):** Inventory reset authorization and request handling require private review; runtime and exploitability are unverified.

**CODE-099 (open; GitHub #158):** Inventory reset link omitted the stockroom identifier in an actual template fixture with a schema-shaped row. The legacy CSV view uses the same mismatched property: its actual method with stubs omitted a matching row and warned for an `id`-only stockroom, while an alias control included it. Joomla CSV dispatch, UI and database are unverified.

**CODE-098 (open; GitHub #157):** Inventory save ignores a rejected row while processing others and sets a success redirect. The actual controller and model were exercised with isolated stubs; Joomla UI and database are unverified.

**CODE-097 (open; GitHub #156):** An actual price-per-piece calculator fixture changed reported unit price with separate stubbed plus, minus and percentage options but left the calculated total unchanged. Database, tax and checkout unverified.

**CODE-096 (open; GitHub #155):** Calculator range lookup truncates area/volume/circumference measurements. Actual area and volume passed 1 for 1.5, circumference passed 1 for approximately 1.57, and Area Quantity passed 1.5 with isolated stubs; real database and checkout unverified.

**CODE-095 (open; GitHub #154):** Calculator measurement metadata contains product length instead of price per piece in three methods. Actual area, volume and circumference branches displayed 10 but returned 2 in isolated stubs; Joomla cart remains unverified.

**CODE-094 (open; GitHub #153):** Price-per-piece calculator rounds fractional piece counts when the decimal option is enabled. Actual calculator with isolated stubs returned 1.5 pieces for No and 2 for Yes; Joomla checkout and tax remain unverified.

**CODE-093 (open; security hold):** Attribute-property publication scope and request-local caching require private review; no runtime behavior or exploitability established.

**CODE-092 (open; GitHub #152):** Accessory deletion removes the editor row before its request completes; an isolated actual-JavaScript test left the row absent after simulated HTTP 500. The category editor also calls this function in source; its UI, Joomla and server remain unverified. Follow-up synchronized.

**CODE-091 (open; GitHub #151):** Attribute-set deletion uses a published-only property lookup to identify attributes before deleting the set. Actual methods exercised with stubs; SQL execution and Joomla remain unverified.

**CODE-090 (open; GitHub #150):** The actual template table returned success after a stubbed file writer returned false. Database and real filesystem behavior remain unverified.

**CODE-089 (open; GitHub #149):** The actual postal-code table duplicate query changes `0999` to `999` and `A1 2BC` to `0` with isolated stubs, although the installed column is text. MySQL and Joomla UI remain unverified; distinct from CODE-008 and CODE-067.

**CODE-088 (open; GitHub #148):** The actual state-list renderer labels integer `3` as three-letter but string `"3"` as two-letter with isolated stubs, whereas the address helper compares loosely. Database driver result types and Joomla UI remain unverified.

**CODE-087 (open; GitHub #147):** Category copy ignores a failed save and returns success; an isolated actual-method test with failing bind also reached a stubbed media-copy call with target zero. The category toolbar invokes `CategoryController::copy`, which selects its success message from the model's return. The earlier inherited-controller and selected-count attribution was incorrect. Actual Joomla controller and filesystem remain unverified. Distinct from CODE-086.

**CODE-086 (open; GitHub #146):** Category copy passes existing product-filter parameters to a save method that clears them and accesses missing form input. Actual methods in isolated stubs reached a deliberately failing bind with empty parameters and emitted warnings; database persistence and Joomla UI remain unverified.

**CODE-085 (open; GitHub #145):** The fallback gift-card detail template omits the customer-amount tag. The actual layout with isolated stubs rendered no amount input in fallback but did with a custom template containing the tag; Joomla and checkout remain unverified. Distinct from #112 and #113.

**CODE-084 (open; GitHub #144):** Product-price and order-total discount inline editing bind the edited field without the shopper-group association, but both table validations require that association. At current Core, each actual table rejected a valid inline threshold and discount amount with the missing-group error in isolated parent stubs and accepted each with a bound group; a zero discount was separately rejected. Joomla controllers, persisted associations and UI remain unverified.

**CODE-083 (open; GitHub #143):** Product Tab's AJAX add-to-cart layout calls `count()` on the detail-template result, which is an object or null. Actual Product Tab layout with isolated dependencies raised PHP 8.4 `TypeError` for both; actual Who Bought and Shopper Group Product layouts raised it for an object. Aesir Products has the same source pattern but was not executed. Joomla storefront remains unverified. Distinct from CODE-077's textual option handling.

**CODE-082 (open investigation; GitHub #142):** The actual exemption helper returned the same result for a stubbed approved user with both values of Apply VAT for Tax Exempt and did not read the setting. The option is exposed in Price configuration, but complete saved-configuration and tax-calculation paths remain unverified; no actual tax error is established.

**CODE-081 (open; GitHub #141):** `getAjaxDetailBox()` caches its selected template under one key regardless of product template. The actual helper with seeded records returned the first product's template for the second in both tested orders. With no configured default a missing match first also cached null for a later named match; disabled AJAX returned null. Joomla storefront, template files and database remain unverified.

**CODE-080 (open; GitHub #140):** Mail list name/subject search is not grouped before section and publication predicates. The actual model and Joomla 5.4.6's locked database query builder produced the ungrouped expression with isolated dependencies; SQL execution and Joomla UI remain unverified. A name match can bypass either filter under SQL operator precedence.

**CODE-079 (open; GitHub #139):** Joomla-user synchronization returns the number selected without checking storage return values; an isolated invocation of the actual method returned two for two false results. The view labels the count as added. A false result can also follow partial persistence; Joomla and database behavior remain unverified.

**CODE-078 (open; GitHub #138):** Who Bought's multi-category input is quoted as a single combined string in the query; actual module entry with database stubs captured the malformed list. SQL execution and Joomla are unverified. Distinct from CODE-038's lack of purchase-history correlation.

**CODE-077 (open; GitHub #137):** Product Tab manifest stores textual Yes/No options but the category helper compares them with zero and the layout uses truthiness. Actual helper/layout invoked with isolated stubs showed the wrong category branch and four queries for No tab options. Joomla form and storefront are unverified. Distinct from the module asset-packaging investigation CODE-039.

The authoritative ID-to-Issue mapping and sync status is in
`ISSUE-SYNC-REGISTER.csv`. Current created issues: CODE-012 #69, CODE-041 #70,
CODE-001 #71, CODE-007 #72, CODE-008 #73, CODE-010 #74, CODE-011 #75,
CODE-013 #76, CODE-015 #77, CODE-016 #78, CODE-017 #79, CODE-020 #80,
CODE-021 #81, CODE-022 #82, CODE-024 #83, CODE-030 #84, CODE-031 #85,
CODE-033 #86, CODE-035 #87, CODE-038 #88, CODE-039 #89, CODE-040 #90,
CODE-028 #91 and CODE-029 #92. These remain open review findings, not fixes.

**Status:** Consolidated working register for stages 1–13, generated from available local follow-up trackers and the stage 11/12 master files. No item has been marked resolved without evidence. This is not a list of confirmed software bugs.

Imported **310 task occurrences** from **23 source files**, grouped into **237 distinct text-normalized tasks**. Similar-but-not-identical tasks can still overlap. Source file names are retained for traceability.

### Controlled pause and code handoff

The current working register has 364 IDs: 358 OPEN and six DONE. See `WORK-PROGRESS.md` and `RESUME.md` for the controlled pause and resumption rules. Product and extension code findings and explicit security/compatibility investigations are cross-referenced by their existing IDs in `CORE-BUGS.md` and `CORE-BUGS.csv`; proposed fix workflow is in `CORE-FIX-INSTRUCTIONS.md`. These are not all confirmed defects. Broader acceptance questions remain in this register and the test plans. CODE-003 is the documentation renderer and remains outside the Core handoff. New code findings must be tracked in both handoff formats and this register/triage, without replacing historical evidence.

Prior Core audit follow-up, preserving its original IDs: **AUD-003-008**, **AUD-003-009**, **AUD-003-010**, **AUD-003-011**, **AUD-003-012**, **AUD-003-013**, **REF-DL-007** and **DIST-23** are open or partial in `redSHOP-rmh/docs/redshop-audit-findings.md:34-51,75-80,92`. The original audit includes additional locally fixed items with pending acceptance; do not reopen them as confirmed defects without current evidence. DIST-23 groups distinct Marketplace SDK, authentication and provider holds; see its detailed extension table rather than assuming old advisories still apply to current locks. CODE-045 and CODE-046 refine the already mentioned Flatpay risks under M-0109 and DIST-23; they do not assert provider-side exploitability.

**AUD-003-010 (GitHub #106):** Current release tooling generates and records a legacy transition document (`redGulp/tasks/release/documents.js:223-241`, `redGulp/tasks/release/publish.js:184-190`), but the inspected external adapter path publishes the changelog and current update document only (`publish.js:203-218`). Verify the approved legacy endpoint transition without making any publication or changing historical artifacts.

**AUD-003-013 (GitHub #108):** The software release publisher looks up an identity before insertion (`libraries/redshop/src/Subscription/SoftwareReleasePublisher.php:65-96`); the schema also enforces a unique index (`component/admin/sql/install/mysql/install.sql:486`). Verify concurrent same-content and conflicting requests in isolated database fixtures; no race has been reproduced.

### Local navigation review

For **M-0035** and **M-0044**, a local source scan of `manual/en-US/menu.md` and 156 chapter files found that all 372 Markdown destinations using the renderer's manual-root convention and all local HTML image references point to existing files. One HTML fragment differed in case from its target in `chapters/categories/redshop-categories.md`; the link now matches the existing `shippingRate` ID. The scan does not validate external URLs, image content, dynamically generated links or deployed browser behaviour. Screenshot currency and Joomla UI verification remain open.

### Installation and requirements source review

At Core commit `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, the root `composer.json:6-15` declares PHP `^8.3` and Joomla `^5.4 || ^6.0`, with a package source pinned to 5.4.6; `gulp-config.json.dist:12-13` separately supplies release example values PHP 8.2 and Joomla 5.4. `docs/codex-progress.md:43-44` notes that Joomla 6 and mixed Core/extension autoload acceptance are pending. These settings have different purposes, so the discrepancy is recorded for **M-0121**, not treated as an established package defect or resolved support matrix. Verify the actual release package, Composer scope, platform, database and Joomla 5/6 install/upgrade matrix.

For **M-0106**, **M-0107**, **M-0146** and **M-0182**, `redshop.xml:14-34` declares the installer script and database schemas; `install.php:68-76,475-479` invokes bundled library, module and plugin installation on install and update. `libraries/redshop/src/Install/Install.php:46-60` defines clean-install tasks; `component/admin/tmpl/install/default.php:119-145` defines wizard, demo-content and dashboard actions. The installation, upgrade and requirements articles now describe these current source paths and safe package/backup checks rather than presenting Joomla 2.5/3 and redSHOP 1.x as current workflows. Former upgrade fragment IDs remain as anchors. No clean install, upgrade, current UI, update server or extension compatibility was tested.

**Remaining acceptance:** on separately approved disposable Joomla 5 and Joomla 6 environments, record exact package/platform versions, verify clean install and all setup steps, upgrade a restored representative site through each supported version, inspect schemas and bundled extension state, exercise checkout with mocked providers, then restore and verify the backup. Check update-server/download-key behavior separately; do not infer it from ZIP installation.

## Master register

| ID | Status | Task / verification | Source tracker(s) |
|---|---|---|---|
| M-0001 | OPEN | 11 — High — Shipping rate calculation and provider integration runtime tests | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0002 | OPEN | 12 — High — Coupon/voucher usage limits and expiry behaviour not verified | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0003 | OPEN | 12 — High — Discount stacking and calculation order not verified | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0004 | OPEN | 12 — High — Gift card lifecycle and refund handling not verified | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0005 | OPEN | 12 — High — Promotion plugin awards and stock handling not verified | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0006 | OPEN | 12 — Medium — Original screenshots require replacement | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0007 | OPEN | 12 — Medium — XML form fields may differ from dynamic edit view | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0008 | OPEN | 1–11 — High — Joomla 6 regression checks outstanding | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0009 | OPEN | 1–11 — Medium — Screenshots not verified on current admin UI | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0010 | OPEN | 1–5 — High — Full original-to-current field and workflow audit incomplete | redshop_stage12_discounts/MASTER-ISSUES-AND-GAPS.md |
| M-0011 | OPEN | `cart.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage4/FOLLOW-UP-TRACKER.md |
| M-0012 | OPEN | `categories/overview-category.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0013 | OPEN | `categories/redshop-categories.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0014 | OPEN | `dashboard.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage5/FOLLOW-UP-TRACKER.md |
| M-0015 | OPEN | `feature-settings.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage4/FOLLOW-UP-TRACKER.md |
| M-0016 | OPEN | `general.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage3/FOLLOW-UP-TRACKER.md |
| M-0017 | OPEN | `global-configuration/about.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0018 | OPEN | `global-configuration/categories.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0019 | OPEN | `global-configuration/manufacturers.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0020 | OPEN | `global-configuration/newsletter.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0021 | OPEN | `global-configuration/start-here.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0022 | OPEN | `integration.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage5/FOLLOW-UP-TRACKER.md |
| M-0023 | OPEN | `orders.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage4/FOLLOW-UP-TRACKER.md |
| M-0024 | OPEN | `overview-global-configuration.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage3/FOLLOW-UP-TRACKER.md |
| M-0025 | OPEN | `price.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage3/FOLLOW-UP-TRACKER.md |
| M-0026 | OPEN | `product-management/overview-product-management.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0027 | OPEN | `product-management/products-redshop.md` — Verify exact admin navigation, field labels, behaviour and screenshot on test site; expand field-level instructions | redshop_004_phase6_8/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0028 | OPEN | `products.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage3/FOLLOW-UP-TRACKER.md |
| M-0029 | OPEN | `redshop-configuration-wizard.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage2/FOLLOW-UP-TRACKER.md |
| M-0030 | OPEN | `redshop-main-menu.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage2/FOLLOW-UP-TRACKER.md |
| M-0031 | OPEN | `redshop-navigation-panel.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage2/FOLLOW-UP-TRACKER.md |
| M-0032 | OPEN | `seo.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage5/FOLLOW-UP-TRACKER.md |
| M-0033 | OPEN | `user.md` — original-content field-by-field comparison, exact labels, live test, internal links, screenshots | redshop_stages2_to5_deep_revision/stage3/FOLLOW-UP-TRACKER.md |
| M-0034 | OPEN | all phases 1–3 — Capture and review screenshots; verify labels on Joomla 5.4 | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0035 | OPEN | all phases 1–3 — Check rendered documentation links and image paths in site generator | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0036 | OPEN | all six — Capture screenshots from redSHOP 5.0.6 test site; replace image placeholders | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0037 | OPEN | all six — Joomla 6 compatibility testing before claiming support | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0038 | OPEN | all six — Verify menu labels and frontend behavior on Joomla 5.4 | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0039 | OPEN | Audit original 2019 product article field-by-field to ensure no still-relevant advanced fields were omitted from the rewritten draft | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0040 | OPEN | Audit shipping-rate jQuery and Joomla.submitbutton for Joomla 6 | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0041 | OPEN | Capture 10 screenshots and validate all relative documentation links | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0042 | OPEN | Capture 11 screenshots and check article links | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0043 | OPEN | Capture 15 screenshots and verify relative links against actual docs tree | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0044 | OPEN | Capture 16 current screenshots and check docs relative paths | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0045 | OPEN | Capture all screenshot placeholders and verify rendered links | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0046 | OPEN | Capture and review three screenshots from `/tests/redshop6` | redshop_phase6_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0047 | OPEN | Capture and verify shipping screenshots and internal links | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0048 | OPEN | Capture eight screenshots | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0049 | OPEN | Capture seven screenshots | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0050 | OPEN | Capture seven screenshots and check mobile readability | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0051 | OPEN | Capture seven screenshots and verify article links | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0052 | OPEN | Capture three screenshots from `/tests/redshop6` and check labels | redshop_phase6_newsletter/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0053 | OPEN | cart.md — Confirm cart timeout unit and actual expiration behavior | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0054 | OPEN | cart.md — Document checkout variants, AJAX cart and payment/shipping interaction with examples | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0055 | OPEN | cart.md — Verify minimum order total calculation with VAT, discounts and shipping | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0056 | DONE | Category ordering — Check exact ordering choices and whether newest means creation or publishing date | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0057 | OPEN | Check all Product Information fields, validation, date/time handling and tax labels in the test UI | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0058 | OPEN | Check default newsletter selection, template output, sender and reply-to headers | redshop_phase6_newsletter/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0059 | OPEN | Check internal links, images and cross-references | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0060 | OPEN | Check order-list jQuery/custom JS for Joomla 6 compatibility | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0061 | OPEN | Check price editor quantity range validation, discount price constraints and decimal input | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0062 | OPEN | Check shipping VAT and mixed tax rates | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0063 | OPEN | Check stock-image listing search and filtering against current UI | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0064 | OPEN | Check user and shopper-group editor compatibility with Joomla 6 | stage13/users |
| M-0065 | DONE | Check whether empty module/plugin lists hide their entire tables and whether docs need a note | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0066 | OPEN | Compare all category listing columns, toolbar actions and check-in behaviour with redSHOP 5.0.6 | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0067 | OPEN | Compare current product list columns, toolbar and bulk category actions with the historical manual | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0068 | OPEN | Compare every original Shipping Methods field and action against current editor | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0069 | OPEN | Confirm `{product_stock_amount_image}` is supported by current template parser and test with in-stock/out-of-stock rules | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0070 | OPEN | Confirm availability of Joomla extension update channel and required download key | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0071 | OPEN | Confirm available Joomla category menu item types and labels | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0072 | OPEN | Confirm available Joomla manufacturer menu item types and labels | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0073 | OPEN | Confirm category-level accessory pricing precedence against product-specific accessory rules | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0074 | OPEN | Confirm check-in works after abandoned editing session | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0075 | OPEN | Confirm current manufacturer list toolbar, filters, columns and copy/delete/check-in behaviour | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0076 | OPEN | Confirm current Orders list columns and toolbar actions | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0077 | OPEN | Confirm custom Stock Option choices and comparison semantics | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0078 | OPEN | Confirm data protection and unsubscribe behaviour in subscriber management; document separately in communication chapter | redshop_phase6_newsletter/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0079 | OPEN | Confirm default status count and uniqueness of status codes | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0080 | OPEN | Confirm deletion behaviour for stockroom and stock image records | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0081 | OPEN | Confirm global-vs-record-specific override examples for each related section during later article reviews | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0082 | OPEN | Confirm historical plus-icon modal exists and is compatible with Joomla 5 | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0083 | OPEN | Confirm installed/published indicators accurately reflect Joomla extension state, including disabled plugins | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0084 | OPEN | Confirm manufacturer email notification trigger and delivery | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0085 | OPEN | Confirm manufacturer image upload and alt text behaviour | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0086 | OPEN | Confirm mapping of all three manufacturer product thumbnail dimension pairs to frontend layouts and image cache behaviour | redshop_phase6_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0087 | OPEN | Confirm print action and whether export is supported | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0088 | OPEN | Confirm product custom-field display and available editor tabs | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0089 | OPEN | Confirm redPRODUCTFINDER integration availability and UI | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0090 | OPEN | Confirm Save + Pay / Save without Email / Save & Close email semantics | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0091 | OPEN | Confirm Save / Save & Close / Save & New / Close in current supplier editor | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0092 | OPEN | Confirm visibility of dependent settings when newsletter is disabled and enabled | redshop_phase6_newsletter/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0093 | OPEN | Confirm whether Configuration Wizard, Install Demo Content and Cancel still appear | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0094 | OPEN | Confirm whether historical Custom Fields and Accessories tabs remain, have moved or were removed. Do not describe them as confirmed current UI | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0095 | OPEN | dashboard.md — Confirm current menu visibility list and behavior under restricted Joomla ACL | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0096 | OPEN | Discontinued products — Confirm storefront template handling of the discontinued-product message | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0097 | OPEN | feature-settings.md — Test review submission and wishlist behavior for guests and registered customers | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0098 | OPEN | feature-settings.md — Verify stock deduction, reservation and notification scenarios | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0099 | OPEN | feature-settings.md — Verify where inline editing works in administrator UI | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0100 | OPEN | general — Test statistics, product reservation and shipping-address settings | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0101 | OPEN | general — Verify all configuration tabs, general settings, upload-size units and image resizing | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0102 | OPEN | Identify supported manufacturer template tags and verify product-page manufacturer-name tag | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0103 | OPEN | Image configuration — Locate and verify lightbox, watermark, default image and out-of-stock image settings in the current configuration UI | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0104 | OPEN | Inspect actual category SEO XML fieldset and generated frontend metadata | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0105 | OPEN | Inspect current `medium` editor fields and supported media types; verify video and YouTube support | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0106 | OPEN | Inspect package manifest, installer scripts, database migrations and post-install screen | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0107 | OPEN | installation — Verify clean installation, bundled extensions and installer result screens | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0108 | OPEN | integration.md — Separate supported integrations from legacy UI sections; verify provider API compatibility | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0109 | OPEN | integration.md — Write dedicated setup guides for Billy, Flatpay, Bambora, PostNord and Relatel where applicable | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0110 | DONE | Located Product Order Search route and product, status and user filters in source; runtime verification remains in the order test plan | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md; order list/status/search source review |
| M-0111 | OPEN | Locate current product supplier field and verify supplier association storage | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0112 | OPEN | orders.md — Confirm order/invoice numbering and free-order invoice behavior | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0113 | OPEN | orders.md — Verify order email timing for successful, failed and delayed payments | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0114 | OPEN | Pagination overrides — Confirm which Joomla menu/category settings override the global category count | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0115 | OPEN | Perform field-by-field original-content audit (especially Add Order) | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0116 | OPEN | Perform field-by-field original-content audit and verify rendered links | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0117 | OPEN | Previous/Next navigation — Verify whether all legacy controls still appear in redSHOP 5.0.6 and whether the active frontend templates consume them | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0118 | OPEN | price — Verify VAT calculations, tax-exempt pricing, coupon stacking and discount emails | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0119 | OPEN | products — Verify download storage access, limits, product templates and catalogue features | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0120 | OPEN | Replace outdated user screenshots and verify links | stage13/users |
| M-0121 | OPEN | requirements — Confirm supported Joomla/PHP/database matrix and Joomla 6 upgrade test (GitHub #101) | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0122 | OPEN | Review `component/admin/tmpl/price/edit.php`: JavaScript validates `form.productprice`, but field is `product_price`; `form.discount_price` check may be reversed (GitHub #95) | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0123 | OPEN | Review `MediaModel::delete` and `MediumTable::doDelete` for deletion side effects, shared-file safety, and transaction consistency | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0124 | OPEN | Review Discount Calculator units, dimension handling and discount precedence | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0125 | OPEN | Review historical tutorial video URLs for continued availability before adding links | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0126 | OPEN | Review historical tutorial videos before linking publicly | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0127 | OPEN | Review historical video links before reuse | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0128 | OPEN | Review Joomla 6 compatibility of stockroom admin JavaScript | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0129 | OPEN | Review original Fleeq tutorial links before reuse | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0130 | OPEN | Review original pages for historical details not yet represented | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0131 | OPEN | Review original tutorial video links for accessibility and version relevance before considering reuse | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0132 | OPEN | Review original tutorial videos for relevance and availability | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0133 | OPEN | Review upload validation, MIME/extension checks, and file access permissions | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0134 | OPEN | Screenshots — Capture and check seven images; remove any legacy-only references that no longer apply | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0135 | OPEN | Security-test Order Tracker authorization | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0136 | OPEN | seo.md — Test Joomla SEF, category paths, multilingual routes and redirects | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0137 | OPEN | seo.md — Verify placeholder syntax and available tokens in each metadata field | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md, redshop004_phase4_5_revised/FOLLOW-UP-TRACKER.md |
| M-0138 | OPEN | Template precedence — Verify category-specific template override precedence | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0139 | OPEN | Test additional image publishing and media gallery output | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0140 | OPEN | Test attribute-set copy; source contains `task==product.ajaxDisplayAttributeSet` and may require a fix (GitHub #96) | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0141 | OPEN | Test attribute/subproperty price calculations and required selection | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0142 | OPEN | Test bulk status changes and customer notification flag | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0143 | OPEN | Test category editor fields, per-category template overrides and allowed-template selector tag | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0144 | OPEN | Test category image media record creation and association | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0145 | OPEN | Test category wrapping and shipping-rate restrictions, including mixed-category carts | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0146 | OPEN | Test clean install and upgrade on isolated redshop6 clone | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0147 | OPEN | Test confirmation workflow, email content, subscription state and confirmation links on redSHOP 5.0.6 | redshop_phase6_newsletter/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0148 | OPEN | Test copy operation and generated unique supplier name | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0149 | OPEN | Test date, order status and payment status filters | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0150 | OPEN | Test discount date handling, timezone and empty date semantics | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0151 | OPEN | Test downloadable-product access, limits and file storage; verify protection against direct file access | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0152 | OPEN | Test dynamic product rows, attributes, discounts and VAT | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0153 | OPEN | Test frontend Quote menu and quotation-to-order conversion | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0154 | OPEN | Test individual payment-method restrictions, including mixed-product carts | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0155 | OPEN | Test main product image and additional image workflow, including default media | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0156 | OPEN | Test manual order for existing customer | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0157 | OPEN | Test manufacturer and supplier email delivery using safe test accounts; confirm event/trigger and templates | redshop_phase6_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0158 | OPEN | Test manufacturer mass discounts and priority against product discounts | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0159 | OPEN | Test manufacturer media association and deletion restrictions | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0160 | OPEN | Test manufacturer-specific template override precedence | redshop_phase6_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0161 | OPEN | Test media type and media section filtering, including item-specific popup | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0162 | OPEN | Test new media upload and association with a product | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0163 | OPEN | Test new Product Filters tab, supported fields, frontend template integration and attribute selection | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0164 | OPEN | Test new-customer account creation and password security | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0165 | OPEN | Test overlapping shopper-group quantity ranges and rule precedence | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0166 | OPEN | Test preorder quantities and reset without affecting real orders | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0167 | OPEN | Test product, property and subproperty inventory save | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0168 | OPEN | Test product-to-manufacturer assignment and listing pagination | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0169 | OPEN | Test product/country and shopper-group rate scenarios | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0170 | OPEN | Test quick-price save task `saveprice` versus `productprice.saveprice` | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0171 | OPEN | Test reusing one file across multiple product records without overwriting an existing association | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0172 | OPEN | Test rollback from a real database migration | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0173 | OPEN | Test search by order ID, order number, name, email and phone | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0174 | OPEN | Test shopper-group category visibility and administrative access controls | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0175 | OPEN | Test status changes from list, editor and dashboard | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0176 | OPEN | Test subscriptions, renewals and serial-number delivery where configured | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0177 | OPEN | Test unique username/email, password security and error messages | stage13/users |
| M-0178 | OPEN | Test unpublished supplier behaviour on product page | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0179 | OPEN | Test weight, volume, dimension and postal-code boundaries | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0180 | OPEN | Text shortening — Test suffix behavior, zero/empty limits and multibyte characters in storefront templates | redshop_phase6_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0181 | OPEN | Trace newsletter test button submission (`task=apply`) through controller/model to verify whether and when a test message is actually sent | redshop_phase6_newsletter/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0182 | OPEN | updating — Verify update server, download-key UI, manual ZIP update and migration from legacy releases | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0183 | OPEN | user — Test registration methods, verification emails, portal restrictions and shopper group assignments | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0184 | OPEN | Verify `{supplier_name}` template tag is still processed by current product template engine | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0185 | OPEN | Verify About tab's four panels and visible labels on `/tests/redshop6` | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0186 | OPEN | Verify accounting integration field mapping | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0187 | OPEN | Verify active carrier plugins and provider API compatibility | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0188 | OPEN | Verify actual current redSHOP 5.0.6 supported Joomla/PHP/database versions against release metadata and tests | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0189 | OPEN | Verify actual dropdown choices for manufacturer ordering and manufacturer product ordering on redSHOP 5.0.6 | redshop_phase6_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0190 | OPEN | Verify batch size and pause settings are used by the actual newsletter sending process, including error and timeout handling | redshop_phase6_newsletter/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0191 | OPEN | Verify current CSV/XML import/export workflow, formats and category parent mapping | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0192 | OPEN | Verify current Product Price Management screen and search controls | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0193 | OPEN | Verify current Product Price Management workflow and shopper-group quantity rules | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0194 | OPEN | Verify current text-library integration and custom-field output | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0195 | OPEN | Verify deletion side effects and retention requirements | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0196 | OPEN | Verify exact Configuration entry point, tab names and ordering on redSHOP 5.0.6 | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0197 | OPEN | Verify exact Media navigation labels and available list toolbar actions | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0198 | OPEN | Verify exact New/Edit/Delete toolbar actions on price-rule listing | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0199 | OPEN | Verify frontend Orders menu, Reorder warning and one-step checkout | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0200 | OPEN | Verify historic category template tags and frontpage/product-category layouts | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0201 | OPEN | Verify historical Inventory **Export Data** CSV action and its columns; current listing explicitly shows print | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0202 | OPEN | Verify Joomla 6 support; do not claim it without test evidence | redshop_stage1_reaudit/FOLLOW-UP-TRACKER.md |
| M-0203 | OPEN | Verify manufacturer form fields, required template selection and default products-per-page on test site | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0204 | OPEN | Verify mass discount and product price discount fields, ordering and shopper-group rules | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0205 | OPEN | Verify mass discounts, product-price discounts and shopper-group precedence on test orders | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0206 | OPEN | Verify media manager category assignments and image cache behaviour | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0207 | OPEN | Verify minimum-stock threshold behaviour | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0208 | OPEN | Verify notification, shipping and payment plugin side effects | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0209 | OPEN | Verify parent/unpublished-child behaviour and category deletion/copy handling | redshop_phase7_categories/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0210 | OPEN | Verify PDF print and CSV/full CSV/GLS/GLS Business exports | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0211 | OPEN | Verify private and company account registration, edit and checkout flows | stage13/users |
| M-0212 | OPEN | Verify product download root isolation from public media paths | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0213 | OPEN | Verify product SEO fieldset, SEF URLs and generated metadata | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0214 | OPEN | Verify product vs category accessory precedence and related-product rendering | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0215 | OPEN | Verify property and subproperty image selection and storefront behaviour | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_media/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0216 | OPEN | Verify quotation Send email behaviour | redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0217 | OPEN | Verify rate model persistence and rule precedence | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0218 | OPEN | Verify relative Markdown links render correctly in the published documentation site | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0219 | OPEN | Verify SEO values in generated frontend metadata and routing | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0220 | OPEN | Verify server-information values on the running site; redact sensitive details in screenshots | redshop_phase6_final/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0221 | OPEN | Verify shared admin list layout columns and toolbar actions in Joomla 5 test installation | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0222 | OPEN | Verify shipping box form fields and matching algorithm | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0223 | OPEN | Verify shopper group price, VAT, catalog, quotation and shipping overrides | stage13/users |
| M-0224 | OPEN | Verify stock image template tags and frontend output | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0225 | OPEN | Verify stockroom delivery-time output on frontend | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0226 | OPEN | Verify Stockroom List Inventory, Copy, Publish, Unpublish and search controls | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0227 | OPEN | Verify stockroom list toolbar and actions on redshop6 | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0228 | OPEN | Verify stockroom totals shown in the inventory listing | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0229 | OPEN | Verify storefront unit prices, subtotal, tax and checkout for quantity boundary cases | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0230 | OPEN | Verify supplier deletion impact on product associations and database constraints | redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_supplier_products/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0231 | OPEN | Verify tax exemption approval and access control | stage13/users |
| M-0232 | OPEN | Verify the historical `redSHOP Stockroom Status notice for admin` plugin and whether minimum-stock notifications are still supported | redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0233 | OPEN | Verify title truncation and suffix behaviour in active frontend templates | redshop_phase6_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0234 | OPEN | Verify watermark application and required watermark image configuration | redshop_phase6_manufacturers/FOLLOW-UP-TRACKER-ADDITIONS.md |
| M-0235 | OPEN | Verify wrapping assignment, frontend display and price calculation | redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md |
| M-0236 | OPEN | wizard — Confirm wizard entry point, step navigation, field labels and save behavior | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |
| M-0237 | OPEN | wizard — Test all registration methods, terms and invoice-email settings | redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md |

## Stage 14 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| VAT-001 | High | OPEN | Verify VAT calculation base: billing vs shipping address and EU mode |
| VAT-002 | High | OPEN | Verify shopper-group condition on tax rates; absent from historical VAT-rate manual |
| VAT-003 | High | OPEN | Test tax-exempt and company VAT approval end-to-end |
| VAT-004 | High | OPEN | Check tax rounding with discounts, shipping and order totals |
| VAT-005 | High | OPEN | Verify currency conversion, precision and completed-order immutability |
| VAT-006 | Medium | OPEN | Replace screenshots for Currency, VAT Group and VAT Rate |
| VAT-007 | Medium | OPEN | Verify current toolbar, publishing and validation of tax rates |

### VAT source-review follow-up

Source reviewed at redSHOP Core `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`; no site configuration or data was changed.

- **VAT-001:** `C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/User.php:198-241` selects user information according to `CALCULATE_VAT_ON` and `VAT_BASED_ON`; `C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Tax.php:89-130` applies country/state, group, shopper-group and EU-mode conditions. Verify billing versus shipping addresses, guest/registered customers and all three modes in Joomla before claiming end-to-end behaviour.
- **VAT-002:** `C:/Github/redSHOP-rmh/component/admin/forms/taxrate.xml:28-38` defines the required multiple shopper-group field; `C:/Github/redSHOP-rmh/component/admin/src/Table/TaxrateTable.php:84-107` writes associations and `C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Tax.php:110-125` applies them to product rate lookup. The rewritten VAT-rate article documents these fields and the source lookup. Verify matching and nonmatching shopper groups with test orders before closing.
- **VAT-003–005:** Exemption approval, mixed rates, shipping/discount rounding, currencies and order immutability remain unverified end-to-end. Use isolated products, users and orders with no production payment/accounting side effects; record expected and actual totals at product, cart, checkout, order and invoice stages.
- **VAT-006–007:** Obsolete VAT group/rate/currency screenshots were removed with the rewritten procedures. Verify current UI, toolbar and validation before introducing replacements. `taxrate.xml:63-82` defines rate and EU fields; `TaxrateTable.php:46-63` rejects a negative rate. Currency name/code and conversion settings are defined in `component/admin/forms/currency.xml:4-24`, `component/admin/tmpl/configuration/default_price.php:23-94` and `component/admin/tmpl/configuration/default_settings.php:82-103`; see CODE-007 for an isolated conversion defect.
- The legacy fixed-total claim was removed. Current product tax code multiplies price by `tax_rate` (`C:/Github/redSHOP-rmh/libraries/redshop/src/Entity/Product.php:169-190`), and the rate field's language description gives `0.16` as 16% (`component/admin/language/en-GB/com_redshop.ini:4625-4626`). This does not establish behaviour for every tax path.

## Stage 15 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| COMM-001 | High | OPEN | Verify transactional mail section and order-status triggers |
| COMM-002 | High | OPEN | Confirm bulk email opt-in, unsubscribe and suppression behaviour |
| COMM-003 | High | OPEN | Audit newsletter send authorization, batching and duplicate-send prevention |
| COMM-004 | High | OPEN | Verify placeholder escaping and email header injection protections |
| COMM-005 | High | OPEN | Verify test-only recipient routing before sending from redshop6 |
| COMM-006 | Medium | OPEN | Confirm BCC handling and protection of subscriber data |
| COMM-007 | Medium | OPEN | Check send logs, delivery errors and retries |
| COMM-008 | Medium | OPEN | Replace outdated communication screenshots and correct displayed spelling |

## Stage 16 — new issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| IMEX-001 | High | OPEN | Audit import handlers and server-side MIME, extension, size and content validation |
| IMEX-002 | High | OPEN | Verify import authorization, CSRF, path traversal and temporary file cleanup |
| IMEX-003 | High | OPEN | Verify duplicate IDs, update versus insert and rollback |
| IMEX-004 | High | OPEN | Protect personal data in user, address and subscriber exports |
| IMEX-005 | High | OPEN | Test twelve historical data families and current schemas |
| IMEX-006 | Medium | OPEN | Test UTF-8, separators, dates, decimals and CSV formula injection |
| IMEX-007 | Medium | OPEN | Review legacy jQuery UI for Joomla 6 |
| IMEX-008 | Medium | OPEN | Test progress, timeouts and large files |
| IMEX-009 | Medium | OPEN | Verify server-side validation of export CSRF token |
| IMEX-010 | Medium | OPEN | Replace screenshots and verify output contents |

### Import/export source-review follow-up

The import and export articles now describe the current plugin-driven workflows and all twelve shared Core-manifest types plus order export, replacing obsolete screenshots and retaining their fragment IDs. At Core commit `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, the lists come from Joomla's `redshop_import` and `redshop_export` plugin groups (`C:/Github/redSHOP-rmh/component/admin/src/Model/ImportModel.php:28-31`, `C:/Github/redSHOP-rmh/component/admin/src/Model/ExportModel.php:28-31`; manifest `redshop.xml:106-182`). Individual installation, enabled state, supported formats and actual output remain untested.

- **IMEX-001/002/007:** The import template configures browser-side type and size checks and uses jQuery upload components (`C:/Github/redSHOP-rmh/component/admin/tmpl/import/default.php:16-25,126-149`). The upload controller calls AJAX validation and dispatches to import plugins (`C:/Github/redSHOP-rmh/component/admin/src/Controller/ImportController.php:33-44`). Neither observation establishes complete server-side file validation, authorization, CSRF, cleanup or Joomla 6 compatibility; inspect and test each relevant plugin and dispatch path.
- **IMEX-003–006/008–010:** Duplicate handling, atomicity, sensitive output, formula safety, batching, server token checks and current screenshots require isolated tests. The export template invokes plugin-specific AJAX steps (`C:/Github/redSHOP-rmh/component/admin/tmpl/export/default.php:66-76,88-96`); this alone does not establish server-side protection or successful exports.
- **IMEX-003/005:** Shared import code processes each row and reports individual outcomes (`libraries/redshop/src/Plugin/AbstractImportPlugin.php:260-309`). The category plugin requires `name` and uses `id` and `parent_id` (`plugins/redshop_import/category/category.php:24-55,112-136`). Product mapping can create missing manufacturers/suppliers and retrieve image URLs (`plugins/redshop_import/product/product.php:109-170`). Test each data type separately with disposable records.
- **IMEX-008:** Shared temporary paths can interfere when jobs of the same type overlap; see CODE-004. Order-export date-count behavior also needs specific review; see CODE-005.

## Stage 17 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| CUST-001 | High | DONE | Custom-fields guide rewritten against current types, sections and fields; useful checkbox, textarea, radio, single-select and legacy text-tag examples retained. Historic screenshots remain available in Git. |
| CUST-002 | High | OPEN | Audit custom-field storage, sanitization and frontend/checkout rendering |
| CUST-003 | High | OPEN | Verify template HTML output and conditional order/payment/shipping fields |
| CUST-004 | High | OPEN | Verify attribute-set associations, price changes and selection validation |
| CUST-005 | High | OPEN | Test country/state/ZIP relationships, range boundaries and shipping/tax impact |
| CUST-006 | Medium | DONE | Documented country phone prefix and flag code fields and their source-backed selector use; runtime verification remains in CUST-005/008. |
| CUST-007 | Medium | OPEN | Confirm template order-status, payment and shipping fields absent from old manual |
| CUST-008 | Medium | OPEN | Check Joomla 6 compatibility and replace customization screenshots |
| CUST-009 | Medium | DONE | Currency guidance is maintained in the VAT guide; the Customization entry links to it and retains its historic anchors. |
| CUST-010 | Medium | OPEN | Verify current field-group and custom-field access permissions |

**Template source review:** The current template form requires name and section and includes publication and raw editor fields; the proposed order-status, payment and shipping fields are commented out as unfinished (`C:/Github/redSHOP-rmh/component/admin/forms/template.xml:4-51`). Section is read-only on an existing record (`component/admin/src/Model/TemplateModel.php:48-62`). Template content is loaded from and written to files (`component/admin/src/Table/TemplateTable.php:68-79,145-171`); the reset operation writes section defaults (`component/admin/src/Model/ConfigurationModel.php:616-636`). CUST-003/007/008 remain open pending isolated Joomla UI, output and security tests; see the test plan.

**Country/state source review:** Country and state fields and duplicate checks are in `C:/Github/redSHOP-rmh/component/admin/forms/country.xml`, `component/admin/forms/state.xml`, and their respective `CountryTable.php` and `StateTable.php`. The prefix helper reads country prefix and flag code (`libraries/redshop/src/Helper/PhonePrefix.php:45-67`); tax lookup matches country/state codes (`libraries/redshop/src/Helper/Tax.php:89-121`). Actual selector, tax and shipping behavior remains open under CUST-005/008.

**Postal-code source review:** The editor supports city, country, optional state, and from/to fields (`C:/Github/redSHOP-rmh/component/admin/forms/zipcode.xml`). Numeric ranges are iterated in `component/admin/src/Model/ZipcodeModel.php:41-60`; the duplicate query casts codes to integer (`component/admin/src/Table/ZipcodeTable.php:47-57`). Check leading zeroes, alphanumeric values, range boundaries, partial failures and actual shipping behavior in isolation. See CODE-008.

**Attribute source review:** The set editor has a required name, publication and attribute editor (`C:/Github/redSHOP-rmh/component/admin/tmpl/attributeset/edit.php:95-155`). The product editor offers a set selector and copy option, but its AJAX URL contains `task==` (`component/admin/tmpl/product/edit_product_attribute.php:27-62`; existing M-0140). The product model has a distinct server-side copy path (`component/admin/src/Model/ProductModel.php:1337-1341,2054-2120`). CUST-004 and M-0140/0141 remain open for isolated UI, association, price and validation tests.

**Custom-field group source review:** The group form requires name and section and has a safehtml description and publication setting (`C:/Github/redSHOP-rmh/component/admin/forms/fieldgroup.xml:4-43`). The field form separately defines group, section and frontend/admin visibility (`component/admin/forms/field.xml:30-112`); `ExtraFields::listAllField` groups returned fields by group name (`libraries/redshop/src/Helper/ExtraFields.php:875-923`). Published-group handling, ACL, storage and output require further analysis and isolated tests under CUST-002/010; no access guarantee is implied by visibility settings.

**Custom-field source review:** The active type selector and plugin extension hook are in `C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Template.php:956-980`; the section selector is in `libraries/redshop/src/Form/Field/FieldsectionField.php`. `FieldTable.php:67-102,290-310` normalizes names and deletes associated data; `ExtraFields.php:347-440` selects and replaces tags with publication/frontend conditions. CUST-002/010 and M-0194 remain open for complete path analysis and isolated ACL, output and checkout tests.

**Additional CUST-002/010 evidence:** `ExtraFields::extraFieldSave` cleans text/textarea inputs, handles WYSIWYG differently and stores field values by field, item, section and email (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/ExtraFields.php:1451-1477,1621-1655`). The text display layout outputs its input directly, the textarea layout escapes it, and the select layout URL-decodes option output (`libraries/redshop/src/Layouts/Extrafields/Display/Text.php:20`, `Textarea.php:21`, `Select.php:20`). These observations do not prove an exploitable path: trace each caller and test with benign values. `FieldsModel::getFieldsBySection` filters field publication, but does not filter joined group publication (`component/admin/src/Model/FieldsModel.php:183-205`); verify each UI context. Field/group AJAX checks token and XMLHttpRequest header (`component/admin/src/Controller/FieldController.php:32-35`, `FieldgroupsController.php:34-36`, `libraries/redshop/src/Helper/Ajax.php:31-35`), which alone does not establish ACL enforcement.

**Product guide preliminary review (M-0027/0039/0151/0212):** Corrected the product type selector, separate not-for-sale price setting and outdated instruction to place paid downloads in the media gallery. The current editor exposes Product Files only for an existing product to identities permitted by `ProductFileAccess` (`C:/Github/redSHOP-rmh/component/admin/tmpl/product/edit.php:212-218`); type choices are extensible (`component/admin/src/View/Product/HtmlView.php:735-755`). The remainder of the product article still needs field-by-field modernization and the download flow needs isolated runtime tests.

**Discount source review (M-0124/0204/0205):** Mass discount form requires dates (`C:/Github/redSHOP-rmh/component/admin/forms/massdiscount.xml:37-55`), and its percentage calculation divides by 100 and writes product discount fields (`component/admin/src/Table/MassdiscountTable.php:299-317`); deletion also clears sale/discount fields (`:127-218`). Product price discount calculations also divide percentages by 100 (`libraries/redshop/src/Product/Price.php:50-56`). Corrected the old 0.12-for-12% advice, noted destructive side effects, and added current area-quantity and square-meter calculator options. Precedence and live calculation tests remain open.

**Product editor evidence (M-0088/0139/0154/0213/0214):** The current tab list is defined in `C:/Github/redSHOP-rmh/component/admin/src/View/Product/HtmlView.php:830-924`; stockroom and e-conomic tabs are conditional. The metadata editor hides its category-in-SEF selector and exposes a canonical URL field (`component/admin/tmpl/product/edit_product_meta_data.php:71-116`). Related-product controls include a fetch-child action (`component/admin/tmpl/product/edit_related.php:22-64`); actual metadata, relation, gallery and mixed-cart behavior require isolated runtime tests.

**Product Files source review (M-0151/0212):** The access check requires `core.manage` and `download.manage` or `core.admin` (`C:/Github/redSHOP-rmh/libraries/redshop/src/Download/ProductFileAccess.php:9-13`). Form metadata and policies are in `component/admin/forms/productfile.xml`; storage rejects roots within the public webroot and validates extensions and integrity (`libraries/redshop/src/Download/ProductFileStorage.php:10-27,30-82`). Uploads are initially published, and license/plan constraints are checked (`libraries/redshop/src/Download/ProductFileService.php:56-94`); subscription license controls appear in `component/admin/tmpl/product/edit_producttype.php:275-325`. Entitlements vary by purchase/subscription/license (`libraries/redshop/src/Download/ProductFileEntitlement.php:16-104`). These are source observations, not proof of end-to-end security; test exact configuration and legacy download paths separately.

**Product list navigation (M-0067):** Current search choices and category/manufacturer filters are in `C:/Github/redSHOP-rmh/component/admin/tmpl/products/default.php:103-180`. The article's duplicate `listingScreen` anchor was corrected while preserving the original product-list anchor; actual toolbar and filter behavior still requires a Joomla runtime test.

**Price listing source review (M-0061/0088):** `component/admin/tmpl/products/listing.php:43-82,104-174` defines separate base-price and discount-price saves, three search fields and client-side nonnegative/discount validation. The historical plus-icon and combined-save instructions do not match this view and were removed. Test server-side validation, ranges and decimal behavior separately in Joomla.

**Product editor follow-up (M-0027/0039/0140/0151):** `component/admin/tmpl/product/edit_general_data.php:370-465` includes main, additional and back images; `edit_product_images.php:20-85` contains back-thumbnail and preview controls. Attribute set selection and copy controls are separate (`edit_product_attribute.php:27-62`); the product tab list does not itself add a product-finder tab (`component/admin/src/View/Product/HtmlView.php:830-924`). Legacy serial CSV reads the first column (`component/admin/src/Model/ProductModel.php:1757-1784`). Actual serial assignment, plugin-added tabs, attribute copy and image display still need isolated verification.

**Category modernization (M-0013/0066/0071/0073/0104/0143/0191):** `component/admin/src/View/Categories/HtmlView.php:111-157` defines permission-gated list actions including tree rebuild; `component/admin/src/View/Category/HtmlView.php:109-150` defines editor tabs. Category fields and SEO are in `component/admin/forms/category.xml:1-258`; images are in `component/admin/tmpl/category/edit_information.php:37-106`, accessory fields in `component/admin/tmpl/category/edit_accessory.php:31-155`, and product filters in `component/admin/tmpl/category/edit_product_filter.php:32-65`. The module requirement is stated in `component/admin/language/en-GB/com_redshop.ini:5157`. Menu layouts are declared in `component/site/tmpl/category/{detail,default,categoryproduct}.xml` and named in `component/admin/language/en-GB/com_redshop.sys.ini:26-31`. The rewritten article retains original fragment IDs; runtime behavior, screenshots, accessory precedence, SEO output and actual import results remain open.

**Shipping methods (M-0001/0068):** `component/admin/forms/shippingmethod.xml` and `component/admin/src/View/Shippingmethod/HtmlView.php:43-116` define method fields, plugin configuration and capability-dependent rates/location buttons. `component/admin/tmpl/shippingrate/edit.php:20-45,58-126,160-581` defines distinct location/rate forms, rate conditions, excluded products, VAT and client checks; `component/admin/src/View/Shippingrates/HtmlView.php:68-93` defines actions. The standard plugin delegates filtering to the shipping helper and applies VAT (`plugins/redshop_shipping/default_shipping/src/Extension/DefaultShipping.php:63-84`). The rewritten guide describes configured controls without claiming runtime matching, provider or Joomla compatibility.

**Shipping boxes and pickup (M-0222/0001):** `component/admin/forms/shippingbox.xml:5-80` defines required name, dimensions and publication plus priority. `libraries/redshop/src/Helper/Shipping.php:1146-1183` selects published boxes in ascending priority and matches at least one cart dimension entry using OR, not a packing algorithm; see CODE-132 for tag rendering. `plugins/redshop_shipping/self_pickup/self_pickup.xml:23-45` declares location support and `plugins/redshop_shipping/self_pickup/src/Extension/SelfPickup.php:34-99` returns zero-rate locations or a fallback choice when none exist. `libraries/redshop/src/Tags/Sections/Shippingmethod.php:105-112,178-191` explicitly bypasses its state comparison for self pickup. End-to-end checkout filtering, packaging and provider behavior remain unverified.

**Wrappings (M-0235/0145):** `component/admin/forms/wrapper.xml:5-89` defines name, price, multiple products, category, image, all-products and published fields. `libraries/redshop/src/Tags/Sections/Product.php:1526-1547` resolves named wrapper templates, and `Tags/Sections/Wrapper.php:24-29,50-58,98-110` handles wrapper tags and product tax. The rewritten guide gives the named reference and test scenarios; actual association precedence, cart price, VAT and mixed-cart behavior require isolated runtime tests.

**Manufacturer guide (M-0072/0075):** Form and SEO fields are in `component/admin/forms/manufacturer.xml:1-160`, conditional category exclusion and custom fields in `component/admin/src/View/Manufacturer/HtmlView.php:75-122`, list ordering and duplication in `component/admin/src/View/Manufacturers/HtmlView.php:25-34`, and media copying in `component/admin/src/Model/ManufacturerModel.php:40-75`. Menu layouts are in `component/site/tmpl/manufacturers/{default,detail,products}.xml`, with English labels in `component/admin/language/en-GB/com_redshop.sys.ini:43-48`; the product tag is handled by `libraries/redshop/src/Tags/Sections/Product.php:591-592`. Verify actual UI, copy/delete, routes and metadata in isolation; CODE-006 remains open.

**Price rule guide (M-0061/0082/0122/0192/0193):** `component/admin/tmpl/products/listing.php:43-82,104-174` shows separate list saves without the historic plus icon. The separate quick view remains at `component/admin/tmpl/productprice/default.php:20-58`; its entry point and task routing require runtime verification. The product editor links saved products to `view=prices` (`component/admin/src/View/Product/HtmlView.php:368-381`); `component/admin/src/Model/PriceModel.php:112-125` requires both discount dates and validates order. The rule editor references nonexistent `form.productprice` while its input is `product_price` (`component/admin/tmpl/price/edit.php:24-39,72-78`), a concrete source-level submission defect already tracked as M-0122; no Core change was made.

**Supplier guide (M-0042/0074/0091/0111/0126/0148/0157/0178/0184/0221/0230):** The form and filter are `component/admin/forms/supplier.xml:4-46` and `filter_suppliers.xml:4-8`. The product selector is in `component/admin/tmpl/product/edit_general_data.php:584-595`, its query does not filter publication (`component/admin/src/Model/ProductModel.php:3208-3213`), and the product model assigns `supplier_id` (`:188`). `{supplier_name}` is replaced from that ID without an explicit publication check (`libraries/redshop/src/Tags/Sections/Product.php:595-601`). Shared copy sets the new record unpublished (`libraries/redshop/src/Model/FormModelRedshop.php:269-306`); supplier order emails are conditional (`libraries/redshop/src/Mail/Order.php:210-278`). Confirm actual UI, copy/delete, template behavior and mock email in an isolated installation. See CODE-009 for a distinct order-item assignment concern.

**Product media duplicate and overview (M-0026/0155/0162/0212):** Replaced the duplicate 2019 media walkthrough with current concise workflows and links to the source-reviewed canonical media article. Preserved all original fragment IDs and added the category guide to the product overview. The actual upload, associations, access and rendering still require the isolated tests already recorded under MEDIA-003–008 and M-0155/0162/0212.

**Product discount follow-up (M-0057/0124/0204/0205):** `component/admin/forms/discountproduct.xml:6-92` filters the threshold as integer, requires a shopper group and leaves dates optional; `component/admin/language/en-GB/com_redshop.ini:5002-5003` describes the threshold as order total, whereas `libraries/redshop/src/Helper/ProductPrice.php:545-635` compares it with a product-price argument and treats stored zero dates as open boundaries. Other calculation paths, saved blank-date representation and date boundaries need isolated tests; the manual no longer asserts blank dates always make a discount indefinite. Product discount date conversion is in `libraries/redshop/src/Model/Traits/HasDateTimeRange.php:26-53`.

**Product list and type follow-up (M-0067/0119/0151):** `component/admin/tmpl/products/default.php:140-193,205-290` provides current filters and columns, and `component/admin/src/View/Products/HtmlView.php:214-245` configures toolbar actions; template assignment is in `default.php:78-94`. File/subscription controls are in `component/admin/tmpl/product/edit_producttype.php:37-111,166-270`. Replaced the unsubstantiated file-security claim; verify download authorization and listing actions in isolation. See CODE-010 for search selection restoration.

**Product relations follow-up (M-0214):** The accessory selector and price-adjustment rows are in `component/admin/tmpl/product/edit_product_accessory.php:29-141`; related products use a searchable multiple selector (`component/admin/src/View/Product/HtmlView.php:415-426`) and child-fetch action (`component/admin/tmpl/product/edit_related.php:22-64`), not the old transfer buttons. Removed those historical instructions and storefront screenshots; verify pricing, saved associations and template output with disposable products.

**Stockroom guides (M-0063/0069/0077/0080/0087/0166/0167/0201/0207/0224–0228/0232):** Forms and filters are in `component/admin/forms/stockroom.xml`, `stockimage.xml`, `filter_stockrooms.xml` and `filter_stockimages.xml`; the stock-image view also sets `hasFilter=false` (`component/admin/src/View/Stockimages/HtmlView.php:38-43`). The optional status plugin checks stock at or below minimum (`plugins/redshop_product/stockroom_status/stockroom_status.php:41-60,130-149`). Inventory uses published stockrooms (`component/admin/src/Model/StockroomlistingModel.php:154-162`) and totals its current result page (`component/admin/tmpl/stockroomlisting/default.php:239-271`). Reset clears both preorder quantities (`StockroomlistingModel.php:291-305`). The toolbar exposes CSV and print (`component/admin/src/View/Stockroomlisting/HtmlView.php:28-40`); legacy CSV implementation and columns exist (`view.csv.php:20-120`, `StockroomlistingModel.php:55-68`), but Joomla routing/output remain untested. The image tag is processed in `libraries/redshop/src/Product/Stock.php:128-142`; its lookup has a separate scope concern in CODE-011. Reproduce in isolation and retain outstanding runtime tasks.
At Core `beacc470`, `component/admin/src/Model/StockroomModel.php:31-51` rejects a minimum stock amount at or below zero, a negative minimum delivery time, and minimum greater than maximum; the form's delivery unit default `1` does not match its `Days` or `Weeks` option values (`component/admin/forms/stockroom.xml:20-28`). The form behavior and saved result for an unselected unit require isolated Joomla verification.

**Discount guides (M-0003/0006/0007/0150/0158/0204/0205):** Rewrote mass, product-price and order-total discount guides from `component/admin/forms/{massdiscount,discountproduct,discount}.xml` and corresponding filters. Mass discount XML requires product selection (`massdiscount.xml:56-65`), but the table accepts a product, category or manufacturer (`component/admin/src/Table/MassdiscountTable.php:258-278`); verify actual form validation. The order discount helper selects from shopper-group rules with a subtotal argument (`libraries/redshop/src/Helper/Discount.php:33-104`), passed `product_subtotal` by `libraries/redshop/src/Helper/Cart.php:1264-1268`. Verify overlapping rules, dates, saved field values, rounding and full checkout separately.

**Coupon, voucher and gift-card guides (M-0002/0004):** Forms are `component/admin/forms/{coupon,voucher,giftcard}.xml`; voucher product selection is required in both XML and field markup (`libraries/redshop/src/Form/Field/VoucherproductField.php:87-96`). Discount switches and stacking configuration are in `component/admin/tmpl/configuration/default_discount.php:20-85`; gift-card list layout is `component/site/tmpl/giftcard/default.xml`. Gift-card mail creates a one-use coupon (`libraries/redshop/src/Mail/Giftcard.php:58-75`), but the coupon path rejects one remaining use; an isolated invocation reproduced that boundary (CODE-012). Verify entire purchase, delivery, redemption, expiration, cancellation, refund and usage lifecycle in an approved isolated Joomla installation.

**Gift-card mail follow-up:** CODE-050 (GitHub #112) tracks multiple issued codes with only the final code in the one message, and CODE-051 (GitHub #113) tracks customer-selected values rendered using the original configured value. Both were reproduced using the actual mail method with isolated service stubs; no Joomla, database or mail-provider runtime was tested.

**Voucher follow-up:** CODE-052 (GitHub #114) tracks a logged-in product-linked voucher lookup passing a null transaction result to `count()`. An isolated PHP mock raised `TypeError`; Joomla checkout and database behavior remain unverified. CODE-053 (GitHub #115) tracks percentage voucher amounts formatted as currency in the list view, verified with an isolated view mock; actual UI and locale behavior remain unverified.

**Product price discount follow-up:** CODE-054 (GitHub #116) tracks the list search state not being applied by its query. An isolated query mock confirmed identical predicates with and without a search term; Joomla UI and database behavior remain unverified.

**Order total discount follow-up:** CODE-055 (GitHub #117) tracks a search that targets only the name column although the edit form has no name field. An isolated query mock confirmed the predicate; Joomla UI, save and database behavior remain unverified.

**Category follow-up:** CODE-056 (GitHub #118) tracks bulk template assignment selecting an error message after the model executes the update and returns null. An isolated database stub confirmed the model result; Joomla UI and real database behavior remain unverified.

**Price rule follow-up:** CODE-057 (GitHub #119) tracked a lookup before initialization. At Core `2e2889680244db64b9e9f64da29608e02f543a70` the product ID is assigned before the query; the valid-product SQLite test with doubles passed. Missing/invalid product contexts, Joomla and MySQL remain unverified; the Issue stays open for maintainer assessment. This is separate from M-0122 (#95).

**Related CODE-010 evidence:** the product price list submits `c.category_name` for category search, while the install schema uses `name`. An isolated query mock confirmed the resulting predicate; Joomla and database execution remain unverified. Extend #74 rather than duplicate the category-search issue.

**Price range follow-up:** CODE-058 (GitHub #120) tracks price-rule validators accepting a new interval that encloses an existing one. Actual attribute-price table and endpoint helpers with SQLite and doubles also accepted an enclosing range; Joomla save and storefront precedence remain unverified.

**Price list save follow-up:** CODE-059 (GitHub #121) tracks both list-save actions invoking unscoped product-table updates twice. Isolated controller/database stubs confirmed execution count and query shape; real SQL performance and triggers remain unverified.

**Media follow-up:** CODE-060 is an acceptance investigation, not a confirmed bug. Two `media_data` IDs exist; an initial mock incorrectly assumed the second was hidden. An isolated browser fixture using bundled jQuery 3.4.1 hid only the first, leaving the YouTube field visible. Joomla browser behavior remains unverified; no Issue was created.

**Media reset follow-up:** CODE-061 (GitHub #122) records a Reset handler calling `getElementById` on an HTML form. The exact handler threw in an isolated browser fixture, leaving both filter values selected. Joomla list behavior remains unverified.

**Product-payment follow-up:** CODE-062 is held for private security review or a separately reviewed nonsensitive tracker. Checkout, payment providers and authorization remain unverified. M-0154 remains open for broader acceptance.

**Attribute editor follow-up:** CODE-063 (GitHub #123) tracks a subproperty deletion handler using removed jQuery `.size()`. The generated asset raised a TypeError after starting a stubbed request in a browser fixture; actual Joomla and persistence remain unverified.

**Attribute-set copy follow-up:** CODE-064 (GitHub #124) tracks omitted attribute and property settings in the set-list copy method; isolated table stubs captured the actual bind data. Source inspection additionally shows omitted subproperty publication. It is distinct from M-0140 (#96), the product editor's malformed selection request. Joomla database and storefront remain unverified.

**Attribute-set save follow-up:** CODE-065 (GitHub #125) tracks property tooltip and alert fields rendered in the editor but omitted from its controller's save array. The actual controller was exercised with isolated model stubs; database persistence remains unverified. This is separate from CODE-064's copy path.

**Attribute-set image save follow-up:** CODE-066 (GitHub #126) tracks the property form and set-save controller using different names for an existing image. An isolated controller/model probe observed a missing-key warning and null save input. Actual database and file behavior remain unverified.

**Postal-code list follow-up:** CODE-067 (GitHub #127) tracks country filtering through the optional state join, excluding entries without a matching state. The actual model predicate and an equivalent in-memory SQLite fixture were checked; Joomla and MySQL remain unverified.

**Currency validation follow-up:** CODE-068 (GitHub #128) tracks a duplicated table-prefix placeholder in the currency code uniqueness query. The actual validation was invoked with a database stub; SQL execution and Joomla save behavior remain unverified. It is separate from CODE-007's conversion defect.

**Tax-rate list follow-up:** CODE-069 (GitHub #129) tracks the group link using the rate ID instead of the group ID; the actual renderer was exercised with isolated stubs. CODE-070 (GitHub #130) tracks the state-name join omitting country; the actual query join and equivalent SQLite fixture were checked. Joomla routing and MySQL remain unverified.

**Order-list date follow-up:** CODE-071 (GitHub #131) tracks the inclusive next-midnight and fixed-24-hour end-date bound; actual model stubs captured UTC and daylight-saving transition cases. It is separate from CODE-005's export query. Joomla timezone and SQL remain unverified.

**Shipping-box ID search:** CODE-072 (GitHub #132) tracks a prefixed ID search cast to zero; an isolated invocation of the actual model query reproduced the predicate for `id:42`. Joomla and SQL remain unverified.

**Shipping method indicators:** CODE-073 (GitHub #133) tracks a location-only method incorrectly showing rate support due to renderer switch fallthrough; an isolated actual view test reproduced it. Joomla UI and checkout remain unverified.

**Shipping-rate copying:** CODE-074 (GitHub #134) tracks omitted dimensions, product exclusions and tax group in the copy bind. The actual model was invoked with isolated stubs; Joomla, SQL and checkout remain unverified.

**Customer shipping-address removal:** CODE-075 (GitHub #135) is a nonsensitive functionality tracker for the address link and controller using different selection inputs. The actual controller was exercised with isolated stubs. Joomla deletion and security review remain unverified.

**Review product link:** CODE-076 (GitHub #136) tracks the review-list product link invoking the rating edit task with a product ID. Isolated actual-view rendering confirmed the URL; Joomla routing remains unverified.

**Coupon review follow-up:** CODE-012 tracks the one-use/gift-card defect (GitHub #69); do not create a duplicate. CODE-041 (GitHub #70) and CODE-042 record source-confirmed control-flow/type defects, with customer impact and PHP/runtime behavior still to be tested. CODE-043 and CODE-044 are investigations, not confirmed end-to-end failures: the admin form XML declares multiple users, but the custom user selector explicitly configures a single selection and reads only the first stored value (`libraries/redshop/src/Form/Field/CouponuserField.php:46-83`); the install schema has a single integer `userid`. Checkout also performs an unguarded decrement after cart validation. Investigate UI submission, storage, authorization, surrounding transactions and concurrent checkout before concluding impact. At Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`, the CODE-012 and CODE-041 source conditions remain. The Coupons reference pass remains partial.

**Promotion guide (M-0005):** Base and plugin forms are `component/admin/forms/promotion.xml` and `plugins/redshop_promotion/promotion/forms/promotion.xml`. Plugin validation is at `promotion.php:72-112`, condition/application at `helpers/Helper.php:27-150` and `helpers/Step.php:26-110`. An isolated PHP mock found two distinct source defects in dates and award lookup, CODE-013 and CODE-014. Do not infer full checkout, stock or shipping behavior from these mocks.

**Order list/status/search guides (M-0060/0076/0079/0110/0142/0149/0173/0175/0195/0208/0210):** Filters are in `component/admin/forms/filter_orders.xml`; toolbar exports, PDF warning and bulk dialog in `component/admin/src/View/Orders/HtmlView.php:120-191`, with separate order/payment and notification fields in `component/admin/tmpl/orders/default.php:435-558,1511-1595`. `orderstatus.xml` requires name/code; deletion checks order references in `component/admin/src/Table/OrderstatusTable.php:104-125`. Its uniqueness query constructs a doubly prefixed table name; see CODE-015. Product Order Search is `view=opsearch` (`libraries/redshop/src/Menu/MenuLeftRedshop.php:403-407`), filtering by product ID, order-item status and user (`component/admin/src/Model/OpsearchModel.php:20-45`); `component/admin/tmpl/opsearch/default.php:18-61,88-111,166-177` displays order-item `mdate`. Verify actual status, notification, export and plugin behavior in an isolated Joomla installation.

**Quotations (M-0153/0216):** Search uses billing first/last name in `component/admin/src/Model/QuotationsModel.php:67-92`. Both controllers' Send paths call mail after saving; editing Ordered can call `storeOrder`, which initializes payment to Unpaid (`component/admin/src/Controller/QuotationController.php:110-150`, `component/admin/src/Model/QuotationModel.php:731-749`). Verify request, mail and conversion in an isolated shop. The export path has a view/data mismatch; see CODE-016.

**Add order and storefront navigation (M-0115/0135/0156/0199):** `component/admin/tmpl/addorder/default.php` contains the customer, product, address and order controls. `component/admin/src/Controller/AddorderController.php:57-135,210-239` validates products, checks stock when enabled, saves and optionally enters payment handling. `component/admin/src/Model/AddorderModel.php:828-833` distinguishes customer versus admin-only order mail using the submitted task. Orders and tracker menu layouts are `component/site/tmpl/orders/default.xml` and `component/site/tmpl/ordertracker/default.xml`; the order list query filters by user ID (`component/site/src/Model/OrdersModel.php:58-69`). Tracker authorization, Save + Pay and complete notification behavior require isolated tests. `ONESTEP_CHECKOUT_ENABLE` is used in checkout view and template.

**Shopper groups (M-0064/0174/0183/0223):** Current fields and choices are in `component/admin/forms/shoppergroup.xml`; the list's discount link passes `spgrpdis_filter` in `component/admin/src/View/Shoppergroups/HtmlView.php:42-52`. Form presence alone does not establish storefront authorization, calculation precedence or portal behavior. Test affected and unaffected users in isolated Joomla before relying on configuration.

**Customer guides (M-0064/0183/0211):** `component/admin/src/Model/UsersModel.php:26-67` defines name/username and group filtering. Customer sales sums order totals without status filtering (`libraries/redshop/src/Helper/User.php:68-90`). Admin list Delete requests Joomla-user deletion (`component/admin/src/View/Users/HtmlView.php:42-43`; `component/admin/src/Controller/UserController.php:128-151`). Account and billing fields are in `component/admin/tmpl/user/edit_user.php` and `edit_billing.php`; registration and account menu metadata are under `component/site/tmpl/registration/` and `account/`. The request filter has a field mismatch, CODE-017. Authorization, synchronization, deletion, mail and integration effects require isolated tests.

**Product information follow-up (M-0027/0039/0057/0067):** `component/admin/tmpl/product/edit_general_data.php:100-178,304-316,680-758` marks required fields, shows an on-sale hint instead of a toggle, and supplies minimum product price and conditional availability-date fields. Tags and custom list columns are present in `edit_general_data.php:320-331` and `component/admin/tmpl/products/default.php:240-244`; e-conomic/quantity controls appear in conditional `edit_economic_settings.php`. Field-by-field product review and Joomla runtime validation remain open, particularly dates, plugin-added tabs and screenshots.

**Product attribute-set request (M-0140):** `component/admin/tmpl/product/edit_product_attribute.php:55-64` requests `task==product.ajaxDisplayAttributeSet`; `URLSearchParams` parses the task value as `=product.ajaxDisplayAttributeSet`. Storefront and saved-copy behavior require isolated Joomla verification. Product attribute controls are in `src/assets/com_redshop/js/redshop.attribute-manipulation.js:20-170,259-320`; price operators are processed in `libraries/redshop/src/Helper/Product.php:3365-3390`. Duplicate historical discount walkthroughs in the product article were replaced with short summaries linking the current dedicated guides.

**Product calculator and toolbar (M-0039/0057):** `component/admin/tmpl/product/edit_calculator.php:200-280,400-500` includes decimal-piece selection, range unit/min/max/price and named extra options. The editor toolbar conditionally offers preview, prices and copy for existing products (`component/admin/src/View/Product/HtmlView.php:331-387`). The documentation now describes these controls without empty labels; actual calculation and UI must still be tested.

**Cart configuration (M-0011/0053/0054/0055):** Forms are `component/admin/tmpl/configuration/default_cart_settings.php`, `default_payment_ship_secure.php` and `default_cart_template_image_setting.php`. `libraries/redshop/src/Helper/Cart.php:2302-2343` removes expired reserved products only with reservation and stockroom enabled; timeout is minutes, and `libraries/redshop/src/Config/App.php:652` saves nonpositive values as 20. The cart model calls expiry on construction (`component/site/src/Model/CartModel.php:58-62`). AJAX template selection is `libraries/redshop/src/Helper/Template.php:251-289`; duration tooltip and JavaScript use milliseconds. The cart minimum has a template-dependent display and hardcoded product link, while the old JavaScript check is commented out; see CODE-018. Test actual checkout enforcement, expiry, provider, shipping and tax in isolation.

**Newsletter configuration (M-0020/0058/0092/0147/0181/0190):** The form's dependent settings use `showOn=newsletter_enable:1` (`component/admin/tmpl/configuration/default_newslettertab.php:40-99`); the selector loads published newsletters (`component/admin/src/Model/ConfigurationModel.php:326-337`). Bulk sends chunk selected arrays (`component/admin/src/Controller/NewslettersController.php:43-59`) and schedule browser requests using seconds converted to milliseconds (`component/admin/tmpl/newsletters/previewlog.php:38-39,68-77`); zero batch/pause values become one at save (`libraries/redshop/src/Config/App.php:656-665`). Confirmation state and test-message concerns are CODE-019/020. These paths need isolated UI, consent, mailer and interruption tests.

**Manufacturer configuration (M-0019/0084/0086/0157):** `component/admin/tmpl/configuration/default_manufacturer_setting.php` and `default_manufacturer_image_setting.php` define current controls. Manufacturer “newest” is `mn.id DESC` (`libraries/redshop/src/Helper/Utility.php:1193-1207`), and the list model also considers menu parameters and user sorting (`component/site/src/Model/ManufacturersModel.php:156-195`). The list name tag uses the configured character limit and suffix (`libraries/redshop/src/Tags/Sections/Manufacturer.php:148-162`). Manufacturer-product rendering declares the first thumbnail pair (`libraries/redshop/src/Tags/Sections/Manufacturerproduct.php:28-40`); mapping of pairs two and three remains unverified. Order confirmation skips notification in admin-only mode and skips gift cards (`libraries/redshop/src/Mail/Order.php:198-232`). Test UI, routes, actual mail and image caches in isolation.

**Category configuration (M-0018/0056):** The form offers category name ascending, `c.id DESC` for newest and `c.ordering ASC` (`component/admin/src/View/Configuration/HtmlView.php:1241-1265`); the category model reads the selected configuration (`component/site/src/Model/CategoryModel.php:618-626`). M-0056 is complete as a source-based determination of these choices, not a runtime test. Category form groups are in `component/admin/tmpl/configuration/default_cattab.php`; template, image and product-navigation output still need UI tests. Separate mismatches are CODE-021/022.

**Order configuration (M-0023/0112/0113):** The Order ID Reset helper truncates eight order, payment and download-related tables (`libraries/redshop/src/Helper/Order.php:187-200`); its confirmation warns about deleting orders (`component/admin/language/en-GB/com_redshop.ini:73`). Checkout mail timing is `component/site/src/Model/CheckoutModel.php:1311-1321`, while status and plugins have other paths. Number generation, free-order checks and formatting are `libraries/redshop/src/Helper/Order.php:592-669,703-731,2511-2547`. Reorder exclusion is applied in site and admin controllers. Isolated numbering, concurrency, mail and payment tests remain open; do not execute reset against existing data.

**Dashboard configuration (M-0014/0095):** `component/admin/tmpl/configuration/default_menuhide.php:15-65,73-95` constructs checkboxes from the sidebar and toggles children; `component/admin/src/Controller/ConfigurationController.php:115` saves them. Sidebar construction includes conditional stockroom and a plugin hook (`libraries/redshop/src/Menu/MenuLeftRedshop.php:47-79`), while `libraries/redshop/src/Menu/MenuRedshop.php:91-92,196-207` marks configured items disabled. Hiding is not an ACL; the dashboard separately checks `core.manage` (`component/admin/src/View/Redshop/HtmlView.php:93-95`), and statistics collection has a separate flag (`libraries/redshop/src/Helper/Statistic.php:55-61`). Test restricted users and direct routes in an isolated site.

**Configuration overview/About (M-0017/0021/0065/0083):** Current tabs include Design Style and Performance (`component/admin/src/View/Configuration/HtmlView.php:1615-1697`), unlike the historical fixed count. About uses `extension_loaded('mbstring')` and live server/DB values (`HtmlView.php:1562-1571`, `component/admin/tmpl/configuration/default_system_information.php`). Module rows query `element LIKE '%mod_redshop%'`; plugin rows query the extension folder (`component/admin/src/Model/ConfigurationModel.php:577-610`). Each corresponding table is inside a nonempty check (`default_redshop_modules.php:16`, `default_redshop_shipping.php:16`, `default_redshop_plugins.php:16`), so M-0065 is source-verified and documented, not runtime-verified. Joomla extension state and module-instance publication remain separate runtime tests.

**Feature settings (M-0015/0097/0098/0099):** Groups are defined in `component/admin/tmpl/configuration/default_featuretab.php`; review login is checked in `component/site/src/Controller/ProductratingController.php:57-63`. Inline editing is consulted in individual list views, for example `component/admin/src/View/Categories/HtmlView.php:52-56`. Import fields use bytes (`default_feature_import_export.php:15-36`); the import view and base plugin clamp chunks to at least 10 (`component/admin/tmpl/import/default.php:21-26`, `libraries/redshop/src/Plugin/AbstractImportPlugin.php:208-211`). Missing stock quantity becomes a large sentinel or zero depending on the setting (`libraries/redshop/src/Helper/Stockroom.php:439-445`). Verify guest/restricted-user, stock and import behavior in isolated Joomla.

**SEO settings (M-0032/0136/0137/0213/0219):** The form and displayed hints are `component/admin/tmpl/configuration/default_seo*.php`; context menu IDs fall back to request Itemid in `libraries/redshop/src/Helper/Router.php:233-264`. Product/category paths combine record and global metadata based on append/prepend/replace (`component/site/src/View/Product/HtmlView.php:154-217`, `component/site/src/View/Category/HtmlView.php:254-305`), while manufacturer metadata is combined differently and canonical output is layout-dependent (`component/site/src/View/Manufacturers/HtmlView.php:74-102,151-181,221-240`). CODE-023/024 cover specific discrepancies. Verify all metadata, routes and languages at runtime.

**Integrations (M-0022/0108/0109):** The current integration configuration renders `default_gls.php`, `default_clicktell.php`, `default_postdk.php` and `default_economic.php`. GLS ID appears in CSV export (`component/admin/src/Model/OrdersModel.php:365,506`), not analytics. Clickatell has credential-dependent legacy/REST paths (`libraries/redshop/src/Helper/Clickatell.php:93-195,213-276`). Automatic label generation checks status and shipping-method eligibility (`libraries/redshop/src/Helper/Order.php:1011-1048`) and takes sender/customer details from `redshop_integrations/postnord_shipment` (`Order.php:1243-1253,1335-1341`); the older Pacsoft fields remain in the form. Provider support, detailed standalone guides, shipping and delivery tests remain open. No external account or shipment was used.

**PostNord guide (M-0109):** `plugins/redshop_shipping/postnord_pickuppoint/postnord_pickuppoint.xml` defines pickup, map and label settings, while `plugins/redshop_integrations/postnord_shipment/postnord_shipment.xml` defines separate shipment API, sandbox and sender settings. `Order::generateParcelApi()` dispatches the shipment plugin; the pickup plugin lists configured rates in `src/Extension/PostnordPickuppoint.php:60-135`. The old PostDanmark URLs now point to the source-based guide. Real API compatibility, accessible checkout, delivery and label tests are outstanding; M-0109 remains open for other providers.

**Relatel guide (M-0109):** The manifest declares a System plugin and PHP 8.3+ (`plugins/redshop_integrations/relatel/relatel.xml:2-15`). Administrator Orders access, CSRF, monitor-edit permission and environment-token precedence are in `src/Extension/Relatel.php:23-50,64-86,136-153`; Danish/Swedish normalization is in `src/Service/Phone.php:8-35`. The token field is masked but plugin parameters are not encrypted; see the plugin README. Real Joomla installation, calls, permissions and provider compatibility remain untested.

**Billy guide (M-0109/0186):** `plugins/redshop_integrations/billy/billy.xml:27-125,128-301` declares booking, account, tax, email and payment settings; account and tax fields call the provider via `src/Field/AccountgroupField.php:30-38` and `SalestaxrulesetsField.php:30-38`. Invoice creation and cashbook conditions are in `src/Extension/Billy.php:856-937,1061-1076`; status handling also uses `libraries/redshop/src/Helper/Order.php:1497-1498`. Provider compatibility, tax mapping, booking and reconciliation require isolated accounting tests.

**Payment guides (M-0109):** Flatpay and Bambora manifest options and callback paths are documented with unresolved risks; no payment plugin was modified. Flatpay's pending/API-failure path and missing ownership/amount/currency and concurrency verification were already identified in `C:/Github/redSHOP-rmh/docs/codex-progress.md:26-29`. New Bambora and manifest findings are CODE-025–029. Do not infer provider compatibility or safe production behavior from the guides; review before activating new payment flows.

**General configuration (M-0016/0100):** The three source form groups are `component/admin/tmpl/configuration/default_settings.php`, `default_modules.php` and `default_general_layout_settings.php`. Country selection feeds `libraries/redshop/src/Helper/World.php:163-185`; registration redirect expands the shop-name tag (`component/site/src/Controller/RegistrationController.php:68-88`). The encoding option converts a product-property string to ISO-8859-1 in one path (`libraries/redshop/src/Helper/Product.php:4942-4959`), not global UTF-8 storage. Address detail affects the checkout selection label (`component/site/tmpl/checkout/default_address.php:141-147`). The media client compares size in KiB (`src/assets/com_redshop/js/redshop.media.js:604-610`), and the MIME-named field's tooltip describes extensions. Verify actual storage, upload validation, reservation and address behavior at runtime.

**User configuration (M-0033/0183/0211/0237):** `component/admin/tmpl/configuration/default_user.php` includes registration, shopper-group and checkout-required sections. Registration choices are built in `component/admin/src/View/Configuration/HtmlView.php:1005-1025`; guest and silent account preparation are in `libraries/redshop/src/Helper/Joomla.php:78-115`. `SHOW_EMAIL_VERIFICATION` renders a retype-email field (`libraries/redshop/src/Tags/Sections/Commonfield.php:712-747`), not an activation-email policy. Several billing fields are checked in `component/site/src/Controller/CheckoutController.php:248-271`. The reset-terms button is a no-op in the inspected code; see CODE-030. Test Joomla activation, direct submissions and actual portal restrictions independently.

**Price configuration (M-0025):** The current groups are `component/admin/tmpl/configuration/default_price.php`, `default_vat.php`, `default_images_giftcard.php`, `default_discount.php` and `default_discount_mail.php`. Shop-group price visibility is considered in `libraries/redshop/src/Helper/Utility.php:445-463`; a discount VAT calculation multiplies by the configured fraction (`libraries/redshop/src/Helper/Cart.php:910-913`). Scheduled discount mail checks Paid and status C (`libraries/redshop/src/Helper/Cron.php:85-101`) and has an expiry calculation discrepancy, CODE-031. Tax, stacking, email and delivery require isolated runtime verification.

At Core `beacc470`, the Price guide's additional defaults and options come from `component/admin/config/config.dist.php:163-169,249-259,360,512,538,616,654,716`, `component/admin/src/View/Configuration/HtmlView.php:492-518,671-676,1233-1241,1277-1303,1418-1446`, and `component/admin/tmpl/configuration/default.php:111-123`. The observed customer location and EU-rate paths are `libraries/redshop/src/Helper/User.php:197-252` and `libraries/redshop/src/Helper/Tax.php:60-128`; the VAT template text and company VAT-number section are in `libraries/redshop/src/Helper/Tax.php:36-45` and `libraries/redshop/src/Tags/Sections/Companybillingtemplate.php:132-143`. These are source observations, not end-to-end tax or form validation tests.
The currency selector uses codes as values (`component/admin/src/Model/ConfigurationModel.php:315-329`) and the change handler copies that value into the symbol field (`component/admin/tmpl/configuration/default_price.php:150-153`); browser behavior remains unverified.

**Product configuration (M-0028/0119):** `component/admin/tmpl/configuration/default_producttab.php:16-95` selects the product, accessory and related-product groups. Download and upload roots and cleanup appear in `default_download.php:78-145` and `default_upload.php:80-192`; product ordering selectors use distinct lists (`component/admin/src/View/Configuration/HtmlView.php:1170-1208`). The article replaces the old public-path advice and preserves its fragments. Verify actual file protection and cleanup, display, ordering, reminders and coupons in an isolated shop.

**Configuration wizard (M-0029/0093/0236/0237):** The installation page shows the wizard/demo buttons only outside updates (`component/admin/tmpl/install/default.php:119-136`). Steps are defined in `libraries/redshop/src/Helper/WizardStepHelper.php:43-58` and submitted settings are held in session until finish (`component/admin/src/Controller/WizardController.php:38-80,102-134`). The welcome path attempts to overwrite the active config from the distribution file (CODE-032); the revised guide warns against running it on a live shop. Verify routing, permissions, actual file operations and all steps only on a disposable installation.

**Dashboard and navigation (M-0030/0031):** `component/admin/tmpl/redshop/default.php:45-163` renders four cards, a sales chart and latest orders/customers, with Billy conditional on plugin enablement. `component/admin/src/View/Redshop/HtmlView.php:60-103` builds toolbar actions and checks access; `libraries/redshop/src/Menu/MenuLeftRedshop.php:48-80,276-900` builds conditional sidebar entries. The old grid and fixed 2016 menu descriptions were replaced with current groups and links. The card query does not match the template's expected aggregates (CODE-033); verify all report data and access in isolation.

**Newsletter and subscriber guides (M-0058/0078/0190, COMM-003):** Current forms are `component/admin/forms/newsletter.xml` and `newslettersubscription.xml`; list count and recipient selection filter published records (`component/admin/src/Model/NewslettersModel.php:119-161`). The public and account unsubscribe controllers call the removal helper (`component/site/src/Controller/NewsletterController.php:72-99`; `AccountController.php:288-298`; `libraries/redshop/src/Helper/Newsletter.php:217-255`), which scopes by current user/email and optionally default newsletter. Updated the guides and retained their fragments; consent, unsubscribe scope, mail content, authorization and interrupted/duplicate sends require isolated tests. CODE-019/020 remain open.

**Transactional mail (COMM-001/004/006/007):** The form defines required name, section and subject, conditional order-status selector, BCC, publication and HTML body (`component/admin/forms/mail.xml`). Published mail lookup is `libraries/redshop/src/Helper/Mail.php:39-64`; order-mail tags are shown in `libraries/redshop/src/Layouts/Admin/Templates/MailTemplateTag.php:45` and replaced through mail/order template paths. The old walkthrough now uses a disposable mail sink and preserves its fragments. Triggers, privacy, escaping, headers, errors and delivery remain unverified.

**Editor and navigation cleanup (COMM-008):** The Product Information view requests a Joomla editor for product descriptions (`component/admin/tmpl/product/edit_general_data.php:20,347-369`); XML forms include editor fields for mail, newsletters and templates (`component/admin/forms/{mail,newsletter,template}.xml`). Replaced obsolete third-party editor recommendations with workflow and preservation checks, and corrected communication navigation labels. Editor/plugin behavior and current screenshots require runtime verification.

**Joomla user synchronization and third-party media:** The current user list triggers `Install::synchronizeUser()` when `sync` is requested (`component/admin/src/View/Users/HtmlView.php:27-35`); its query selects Joomla users with no matching redSHOP user-info row and derives names from the first two space-separated parts (`libraries/redshop/src/Install/Install.php:91-126`). Replaced unsupported historical claims of third-party synchronization and obsolete media-extension recommendations. Test existing and missing users, name edge cases, privacy and extension compatibility on a disposable shop.

**Introductions and historical support terms:** Core Composer metadata declares `GPL-2.0-or-later` (`C:/Github/redSHOP-rmh/composer.json:2-8`), while extension and documentation licenses can differ. The manual loader requests Markdown under `manual/en-US/` (`C:/Github/redSHOP-documentation/assets/js/manual.js:1-4,33-36,66-69`). Replaced Joomla 3 and historical commercial-support claims, retaining introduction/subscription fragments. Current commercial terms, exact release licenses and deployed renderer still require independent confirmation.

**Customer questions and reviews (INPUT-001–008):** The current admin forms are `component/admin/forms/question.xml` and `rating.xml`; question user name/email and review email/company/images are hidden. Product question/answer loops are paired and nested (`libraries/redshop/src/Tags/Sections/Product.php:2095-2125`), correcting the historical incomplete example. Storefront handlers check Joomla tokens (`component/site/src/Controller/AskquestionController.php:42`, `ProductratingController.php:35`); review login, CAPTCHA, duplicate and initial publication paths are at `ProductratingController.php:59-156`. Runtime authorization, privacy, escaping, moderation, spam, images and notification tests remain open. Admin save error handling has a separate CODE-034 finding.

**Marketplace modules:** Search, cart, newsletter, price filtering, product compare and free-shipping promotion are classified Marketplace modules (`marketplace/classification.json:106-125,666-700`). Their current parameters are in their `modules/site/mod_redshop_*/` manifests. Search supports configurable field visibility and AJAX; cart reads current session state and has caching options; newsletter has separate subscribe/unsubscribe controls. The compare module checks `COMPARE_PRODUCTS`, price filter reads the selected range from request/user state, and the shipping promotion passes the configured rate ID to the free-shipping helper. Replaced old setup screenshots and documented consent, price, session and checkout verification. For CODE-035 the inspected Joomla 5.4 standard dispatcher supplies the module's `$app`; actual runtime and alternative dispatchers remain unverified.

Discount, currencies and login greeting are also Marketplace modules (`marketplace/classification.json:642-657`). The discount helper filters by publication, date and shopper group; currencies are selected in the module and the active currency is session-based; the greeting displays username or order-helper full name. The greeting template has no explicit output escaping (CODE-036). Checkout and rendered output require runtime verification.

Shopper-group category, product and logo modules are Marketplace extensions (`marketplace/classification.json:708-724`). Category menu filtering depends on Portal Shop; product results use shopper-group categories; logo uses a guest default or group portal logo. The category helper's unassigned cache key and cross-session effects require investigation (CODE-037); module visibility must not be presented as an authorization guarantee.

Product, Who Bought and Similar Tags module articles were compared with current manifests and PHP. Who Bought's selection has no order-history or current-product relationship (CODE-038); tags use `pid` and skip category/tags/user contexts. Validate selected modules and resulting links in Joomla.

Manufacturer, product tabs, Mega Menu, mass cart and Facebook module articles now describe current manifest options and isolated verification. `mod_redproducttab` references `js` files absent from its manifest (CODE-039); provider API and consent compatibility remain unverified.

**Product metadata follow-up:** Product metadata uses selectors for language and robot directives and an append-to-global setting (`component/admin/tmpl/product/edit_product_meta_data.php:25-34,142-175`). Corrected historical free-text directions; product robot selection may not load the saved value (CODE-040).

**Renderer follow-up (CODE-003):** `assets/js/manual.js:1-9,70-89` loads articles asynchronously and calls `pushState` for internal paths without explicit post-render fragment scrolling or a popstate handler. In a local browser, directory and `index.html` entry URLs both loaded Introduction, an in-page category anchor scrolled correctly, and a cross-article link loaded media. Browser Back changed the address but retained the media article; loading a category URL with a fragment rendered the article without scrolling to its target; an `index.html#anything` entry produced nested page content instead of the introduction. Source comparison shows the only local renderer change strips a trailing `index.html`; hash-only and back/forward logic was not added by that change. Cross-browser and deployed behavior remain unverified. Cross-article links added in this batch link to the page without a fragment; historic anchors remain. No further renderer code was changed.

## Stage 18 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| INPUT-001 | High | OPEN | Audit question and review frontend authorization and CSRF handling |
| INPUT-002 | High | OPEN | Verify output escaping and stored XSS prevention for questions, answers and reviews |
| INPUT-003 | High | OPEN | Verify customer email, phone and address are not exposed publicly |
| INPUT-004 | High | OPEN | Test moderation, publication state and notification workflows |
| INPUT-005 | High | OPEN | Test spam controls, duplicate reviews and rate limits |
| INPUT-006 | Medium | OPEN | Verify hidden user identity and email field handling in question form |
| INPUT-007 | Medium | OPEN | Verify review company, image and favoured fields and aggregate rating calculation |
| INPUT-008 | Medium | OPEN | Replace screenshots and test frontend display on Joomla 5/6 |

## Stage 19 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| ECON-001 | High | OPEN | Determine whether legacy e-conomic integration is functional and supported by current API |
| ECON-002 | High | OPEN | Audit authentication, credential storage, token refresh and permissions |
| ECON-003 | High | OPEN | Verify invoice draft/booking, numbering and duplicate posting prevention |
| ECON-004 | High | OPEN | Validate VAT, discounts, shipping, payments and account-group mappings |
| ECON-005 | High | OPEN | Verify product synchronization direction, identifiers and conflict handling |
| ECON-006 | High | OPEN | Test errors, retries, timeout, rate limiting and accounting reconciliation |
| ECON-007 | Medium | OPEN | Confirm availability and Joomla 6 compatibility of e-conomic integration plugin |
| ECON-008 | Medium | OPEN | Verify invoice reversal, refunds and credit-note handling |
| ECON-009 | Medium | OPEN | Replace sparse setup/sync manual with tested steps and screenshots |

### e-conomic source-review follow-up

At Core commit `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, the optional `economic/economic` plugin is present and classified as Marketplace (`C:/Github/redSHOP-rmh/marketplace/classification.json:774-778`). Its manifest defines separate e-conomic and Reviso account modes and authentication fields (`C:/Github/redSHOP-rmh/plugins/economic/economic/economic.xml:28-56`), and the connection code uses SOAP (`economic.php:137-188`). Source existence does not establish installation, provider support or Joomla compatibility.

- **ECON-001 / ECON-007:** Current provider API availability, actual authentication and Joomla 5/6 execution remain untested. The setup and synchronization articles now describe current source-defined options and isolated verification rather than presenting historical SOAP calls as a working integration.
- **ECON-002:** The token callback writes plugin parameters (`economic.php:112-128`); verify the complete Joomla dispatch, authorization, CSRF, credential storage, redaction and provider flow before conclusions. Do not record credentials or connect production accounts during review.
- **ECON-003–006 / ECON-008–009:** Invoice booking, tax mappings, product synchronization, retries, reconciliation and refunds require isolated provider-compatible testing. Source includes product update and product-group creation calls (`economic.php:1083,1154`), while `component/admin/tmpl/accountgroup/edit.php:28-145` defines account-mapping fields and `component/admin/tmpl/product/edit_economic_settings.php:27-34` exposes the product group selection. The rewritten guides describe these fields without claiming synchronization or provider support. The old SOAP examples were removed as current instructions.

## Stage 20 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| FAQ-001 | High | OPEN | Replace destructive VAT FAQ guidance with tested non-destructive setup |
| FAQ-002 | High | OPEN | Audit COD guidance to avoid misusing credit-card offline plugin |
| FAQ-003 | High | OPEN | Audit current PayPal integration and archive obsolete SSL notice |
| FAQ-004 | Medium | OPEN | Locate current AJAX cart templates and verify supported Joomla overrides |
| FAQ-005 | Medium | OPEN | Fix FAQ relative links and test generated documentation paths |
| FAQ-006 | Medium | OPEN | Preserve and revalidate original FAQ code snippets and screenshots |
| FAQ-007 | Medium | OPEN | Check Joomla 6 compatibility of all FAQ recommendations |

## FAQ follow-up — preservation and source review

The FAQ was rewritten against current source: VAT guidance is non-destructive, COD and PayPal describe optional plugins and outstanding defects, and AJAX cart guidance describes current template selection. No payment, tax or Core code was changed. FAQ findings remain OPEN wherever UI, browser, provider or Joomla runtime verification is still required.

| ID | Status | Source-review evidence and remaining verification |
|---|---|---|
| FAQ-001 | OPEN | Replaced the original instruction to delete all rates with a non-destructive review and testing workflow. Current tax calculation uses configured rates and exemption state in `C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Tax.php:59` and `C:/Github/redSHOP-rmh/libraries/redshop/src/Entity/Product.php:149`. CODE-082 investigates the effect of Apply VAT for Tax Exempt; legal configuration and product/cart/checkout/invoice results remain untested. |
| FAQ-002 | OPEN | `rs_payment_cod` is an optional Marketplace plugin; its manifest supplies fees, customer/ shopper-group and order-status configuration (`C:/Github/redSHOP-rmh/plugins/redshop_payment/rs_payment_cod/rs_payment_cod.xml:25-100`). Its nonmatching handler branch returns the misspelled `fasle` (`rs_payment_cod.php:28-31`); an isolated mock raised an undefined-constant error. The FAQ no longer recommends relabelling a credit-card plugin; actual checkout remains unverified. See CODE-001. |
| FAQ-003 | OPEN | The PayPal FAQ now describes the optional plugin and sandbox prerequisites without asserting production readiness. Its notification handler replaces its argument with `Input::getInt('request')` and indexes it as an array (`C:/Github/redSHOP-rmh/plugins/redshop_payment/rs_payment_paypal/rs_payment_paypal.php:43-55`); an isolated mock raised an array-offset error. Provider, TLS, authentication and real notification behaviour remain untested. See CODE-002. |
| FAQ-004 | OPEN | Current template files exist under `C:/Github/redSHOP-rmh/media/com_redshop/templates/ajax_cart_box/default.php` and `.../ajax_cart_detail_box/default.php`. `getAjaxDetailBox()` attempts named product-template selection or the configured default (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Template.php:251-283`), but CODE-081 records cross-product reuse within a request. `getTemplate()` reads published records and associated files (`:545-570`), with files rooted under `/media/com_redshop/templates` (`:627`). Supported Joomla overrides and storefront behaviour remain untested. |
| FAQ-005 | OPEN | The actual renderer resolves links from `manual/en-US/` (`C:/Github/redSHOP-documentation/assets/js/manual.js:1-4,66-69`) and passes clicked targets to that loader (`:91-99`). A local simulation found all four original `chapters/faq/...` links and none of the four candidate sibling links. The renderer now removes a trailing `index.html` before constructing content URLs; directory-root and explicit-index URL cases pass a local simulation. Browser and published-site routing remain untested; the original working links were retained. |
| FAQ-006 | OPEN | The old VAT snippet was removed when rewriting that FAQ; presentation is now explicitly distinguished from tax calculation. The AJAX article names tags from the current defaults and documents named/default selection (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Template.php:251-289`). Full rendered-output and storefront verification remains outstanding. |
| FAQ-007 | OPEN | No Joomla 5 or Joomla 6 runtime/UI compatibility test was performed; historical plugin recommendations remain subject to plugin-specific verification. |

### Separately tracked code findings

These are source/mock-test findings, not claims of a complete payment-plugin audit. No production code was changed.

| ID | Priority | Status | Finding |
|---|---|---|---|
| CODE-001 | Medium | OPEN | COD handler returns undefined constant `fasle` for an element other than `rs_payment_cod`; isolated invocation throws. Confirm the real event-dispatch path and correct the return value in a separately scoped code task. |
| CODE-002 | Medium | OPEN | PayPal notification handler reads `request` as an integer and then uses it as an array; isolated mock raises an array-offset error. Verify actual Joomla notification input and correct the handler in a separately scoped code task. GitHub #105. |
| CODE-003 | Medium | OPEN | Directory and `index.html` entries load locally after trailing-index normalization; local browser tests found broken history navigation, initial fragment scrolling and hash-only entry. Cross-browser and deployed routing remain unverified; any further renderer change requires approval. |
| CODE-004 | High | OPEN | Shared import upload deletes the existing type-specific temporary directory before creating a new one (`C:/Github/redSHOP-rmh/libraries/redshop/src/Plugin/AbstractImportPlugin.php:119-131`); export uses a type-specific shared filename (`C:/Github/redSHOP-rmh/libraries/redshop/src/Plugin/AbstractExportPlugin.php:147-150`). Concurrent jobs of the same type can interfere. Reproduce in a disposable isolated environment and review per-job isolation and cleanup; no Core change was made. GitHub #109 is a nonsensitive concurrency tracker, distinct from CSV field corruption #107; privacy and authorization review remains separate. |
| CODE-005 | Medium | OPEN | GitHub #111. At Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`, the order export excludes timestamps at the exact first and last seconds of selected dates due to strict query bounds (`plugins/redshop_export/order/order.php:72-90,159-168`). An isolated PHP query mock confirmed count/data predicates; SQL, timezone and multi-batch runtime remain unverified. The earlier claimed count/data midnight mismatch is not established. |
| CODE-006 | High | OPEN | The `medium.remove` action calls `MediumModel::delete` (`C:/Github/redSHOP-rmh/component/admin/src/Controller/MediumController.php:1048-1063`); for a manufacturer record its cleanup deletes all media rows with the same `section_id` without restricting `media_section` (`component/admin/src/Model/MediumModel.php:175-203`). This can remove unrelated records with matching IDs. Reproduce only with disposable data and separately review/fix the Core deletion path. GitHub #97. |
| CODE-007 | High | OPEN | `CurrencyLayer::convert` initializes its rate array only when the target is empty, then defaults missing currency rates to 1 (`C:/Github/redSHOP-rmh/libraries/redshop/src/Currency/CurrencyLayer.php:70-103`). An earlier isolated PHP mock with USD=1 and EUR=0.9 returned 100 for explicit USD→EUR conversion of 100 without requesting rates (expected 90). The Flatpay ledger passes an explicit payment currency through `CurrencyHelper::convert`; CurrencyLayer selection and absence of an event override are prerequisites. This caller was source-inspected only; payment and provider behavior remain unverified. #72 was updated with this qualified evidence. |
| CODE-008 | High | OPEN | `ZipcodeModel::save` ignores the return value of each `parent::save` and returns true after the loop (`C:/Github/redSHOP-rmh/component/admin/src/Model/ZipcodeModel.php:49-60`). An isolated PHP mock confirmed success was reported when the parent save failed. Review failure handling, partial range writes and an approved Core fix separately. |
| CODE-009 | Medium | OPEN | Two administrator order-item creation paths assign `supplier_id` from the product's `manufacturer_id` (`C:/Github/redSHOP-rmh/component/admin/src/Model/OrderModel.php:314`, `component/admin/src/Model/AddorderModel.php:360`), while quotation-to-order conversion assigns the product supplier (`component/admin/src/Model/QuotationModel.php:785`). These are source observations only; determine persisted values and downstream effects with disposable distinct IDs. Supplier confirmation email separately reads the current product supplier. GitHub #93. |
| CODE-010 | Medium | OPEN | Product-list category search option submits `c.name` but marks itself selected only for `c.category_name` (`C:/Github/redSHOP-rmh/component/admin/tmpl/products/default.php:152-157`). Check the displayed selection and subsequent search after submission in an isolated administrator; no runtime test or Core change was made. |
| CODE-011 | Medium | OPEN | `Stockroom::getStockAmountImage` accepts product/variant section and ID but its rule query joins product-stock rows without restricting either (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Stockroom.php:1109-1153`); product, comparison and bundle rendering call it. Actual helper with SQLite and query stubs returned product 2's stockroom rule for product 1; disabled-stockroom control returned no result. Joomla, supported databases and intended shared-rule semantics remain unverified. GitHub #75. |
| CODE-012 | High | OPEN | Coupon application rejects `amount_left <= 1` (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/CartDiscount.php:146-150`), while gift-card mail creates coupons with `amount_left = 1` (`libraries/redshop/src/Mail/Giftcard.php:58-75`). An isolated PHP mock confirmed one remaining use is rejected as exhausted and two proceeds to the next validation. Reproduce the full checkout and separately review a Core fix; no real code or payment was used. |
| CODE-013 | High | OPEN | Promotion date check uses `date('yy-m-d')` (`C:/Github/redSHOP-rmh/plugins/redshop_promotion/promotion/helpers/Helper.php:92-105`), duplicating the two-digit year. An isolated mock with both dates set to the current ISO date and a qualifying subtotal returned false. Reproduce in Joomla with time zones and review a plugin fix separately. |
| CODE-014 | High | OPEN | Promotion award helper calls `getProductById($promotion_id, $award_id, $amount)` (`C:/Github/redSHOP-rmh/plugins/redshop_promotion/promotion/helpers/Helper.php:203-225`); the function expects product ID, user ID and related flag (`libraries/redshop/src/Helper/Product.php:5974-5978`). An isolated mock confirmed lookup of promotion ID 901 and award line ID 7 with category from 901. Verify cart, stock and order effects and review a plugin fix separately. GitHub #94. |
| CODE-015 | High | OPEN | Order-status validation prefixes `#__` to an `_tbl` value that already includes it (`C:/Github/redSHOP-rmh/component/admin/src/Table/OrderstatusTable.php:48,77-82`). An isolated PHP mock captured `#__#__redshop_order_status` as the uniqueness-query table; status creation/edit may fail. Verify database error and uniqueness in isolated Joomla and review a Core fix separately. |
| CODE-016 | Medium | OPEN | Quotation export toolbar links to singular `view=quotation&layout=csv`, but `displayCsv()` belongs to plural `Quotations\HtmlView`; that handler calls `getItems()` without setting the model's `streamOutput=csv` state. The normal list query selects only `q.*`, while requested CSV fields include joined customer/item data. Inspect routing and reproduce export/selection/pagination in isolated Joomla before reviewing a Core fix (`C:/Github/redSHOP-rmh/component/admin/src/View/Quotations/HtmlView.php:34-39,72-99`; `component/admin/src/Model/QuotationsModel.php:47-75,105-112`). |
| CODE-017 | Medium | OPEN | Users-list filter is labelled tax-exempt requested but filters `uf.tax_exempt` and `tax_exempt_approved=0`, not `requesting_tax_exempt` (`C:/Github/redSHOP-rmh/component/admin/tmpl/users/default.php:79-81`; `component/admin/src/Model/UsersModel.php:43-46`; `component/admin/tmpl/user/edit_billing.php:355-396`). Reproduce with differing request/exemption/approval combinations and separately review a Core fix. |
| CODE-018 | High | OPEN | Minimum-order cart warning is conditional on the `{minimum_order_total}` template tag and injects checkout-blocking CSS plus a link hardcoded to product 3624 and ItemID 40 (`C:/Github/redSHOP-rmh/libraries/redshop/src/Tags/Sections/Cart.php:336-414`); the older JavaScript minimum check is commented out (`src/assets/com_redshop/js/redshop.common.js:2050-2057`). The inspected paths do not demonstrate server-side enforcement. Test direct checkout, alternate templates and absent product in an isolated shop; review a Core fix separately. |
| CODE-019 | High | OPEN | Newsletter subscription helper sets a pending `$data['published'] = 0` when confirmation is required, but inserts the literal `1` (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Newsletter.php:165-195`); bulk recipient selection filters published subscriptions (`component/admin/src/Model/NewslettersModel.php:148-161`). Test signup and recipient selection before and after confirmation in an isolated mail-sink environment; review a Core fix separately. GitHub #98. |
| CODE-020 | High | OPEN | Newsletter test-mail model reads `template_desc` although its query does not select it (`C:/Github/redSHOP-rmh/component/admin/src/Model/ConfigurationModel.php:389-400,503-510`); the configuration controller ignores the send return and displays a sent message (`component/admin/src/Controller/ConfigurationController.php:205-210`). Reproduce received content and mailer-failure behavior in isolation; review a Core fix separately. |
| CODE-021 | Medium | OPEN | The category configuration exposes separate long/short description limits and suffixes, but inspected long and short description tags both use the short settings (`component/admin/tmpl/configuration/default_category_suffix.php:15-48`; `libraries/redshop/src/Tags/Sections/Categorydetail.php:348-365`; `libraries/redshop/src/Tags/Sections/Categoryproduct.php:284-309`; `libraries/redshop/src/Layouts/Filter/Result.php:238-255,300-317`, rendered by `SearchController::findProducts`). Test active templates and review a Core fix separately. |
| CODE-022 | Medium | OPEN | The next-product image branch checks the previous image's existence before rendering the next image (`C:/Github/redSHOP-rmh/libraries/redshop/src/Tags/Sections/Product.php:1372-1385`). Test both images independently and together in an isolated shop; review a Core fix separately. |
| CODE-023 | Medium | OPEN | The SEO editor lists `{saving}` for titles and keywords (`C:/Github/redSHOP-rmh/component/admin/tmpl/configuration/default_seo.php:90,325`), but inspected product title/keyword replacement paths omit it while description handles it (`component/site/src/View/Product/HtmlView.php:154-185,283-309,369-400`). Test each field/page type and review hints or replacement separately. GitHub #99. |
| CODE-024 | Medium | OPEN | SEO menu alias inputs are updated from selected menu aliases on load and change (`component/admin/tmpl/configuration/default_seo_general.php:396-410`). Actual script with DOM stubs overwrote a distinct value and cleared synthetic empty/unmapped IDs; actual browser, save and routing remain untested. `Router::parse` reads the order-detail alias. Verify intended behavior in an isolated UI; review a Core fix separately. |
| CODE-025 | High | OPEN | Bambora's notification handler marks payment Paid when request fields are present without validating the supplied hash in that handler (`C:/Github/redSHOP-rmh/plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:165-181`); the controller accepts the returned status (`component/site/src/Controller/OrderController.php:238-290`). Review the full callback trust boundary and provider verification separately; no live request was made. |
| CODE-026 | High | OPEN | Bambora's HTTP client disables TLS peer verification (`C:/Github/redSHOP-rmh/plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:121-150`). Separately review all provider requests and certificate validation. |
| CODE-027 | High | OPEN | Bambora checkout assigns rather than compares the provider success code (`C:/Github/redSHOP-rmh/plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:97-105`), so the error branch may not be reached as intended. Verify with mocked success, error and malformed responses. |
| CODE-028 | Medium | OPEN | Flatpay live-key field uses `showon="test_mod:0"` while the mode field is `test_mode` (`C:/Github/redSHOP-rmh/plugins/redshop_payment/rs_payment_flatpay/rs_payment_flatpay.xml:38-61`). Verify field visibility and saved settings in Joomla. |
| CODE-029 | Medium | OPEN | Flatpay and Bambora currency selectors list `GPB` rather than `GBP` (`C:/Github/redSHOP-rmh/plugins/redshop_payment/rs_payment_flatpay/rs_payment_flatpay.xml`, `plugins/redshop_payment/rs_payment_bambora/rs_payment_bambora.xml`). Review provider currency support and migration before changing existing configuration. |
| CODE-030 | Medium | OPEN | The configuration reset-terms action calls `updateUserTermsCondition()` without an ID (`C:/Github/redSHOP-rmh/component/admin/src/Controller/ConfigurationController.php:576-580`), but the helper immediately returns for ID zero (`libraries/redshop/src/Helper/User.php:170-176`). Verify the UI in an isolated shop and review the intended bulk reset and authorization separately. |
| CODE-031 | Medium | OPEN | Purchase-discount and sample coupon expiries multiply configured days by `23 * 59 * 59` seconds instead of a full day (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Cron.php:100-101,210-218`, `libraries/redshop/src/Helper/Sample.php:239-240`). The second purchase-mail schedule uses the same multiplier (`Cron.php:222-246`), despite its label specifying days; first and third mail calculations use 24 hours. These paths are source-inspected only. Verify actual date handling, timezone, mail and existing coupons before reviewing a Core change. GitHub #85. |
| CODE-032 | High | OPEN | Rendering the wizard welcome page calls `copyTempFile()`, which attempts to copy `config.dist.php` over the active `config.php` and ignores the result (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/WizardTemplate.php:68,147-153`; `component/admin/src/Controller/WizardController.php:28-33`). The active configuration is loaded from that destination (`libraries/redshop/src/Helper/Config.php:95-97`). Verify both writable and protected-file cases on a disposable installation; do not rerun on a live shop. GitHub #110 tracks data integrity without authorization conclusions. |
| CODE-033 | High | OPEN | The dashboard template treats the first four values as sales, order count, member count and visitor count (`C:/Github/redSHOP-rmh/component/admin/tmpl/redshop/default.php:45-112`), while its query unions order IDs, user-info IDs and a visitor count and loads a column (`libraries/redshop/src/Helper/Statistic.php:26-48`). With representative data, verify incorrect labels, empty result handling and intended definitions in isolation before a Core fix. |
| CODE-034 | Medium | OPEN | Question model returns a non-empty error array when its parent save fails (`C:/Github/redSHOP-rmh/component/admin/src/Model/QuestionModel.php:84-85`), while the controller treats a truthy result as a saved question (`component/admin/src/Controller/QuestionController.php:65-72`). At historical revision `67dd75b6a0` the model returned false; closed #59 described a green error message, not the current false success. Reproduce failure reporting and send behavior on a disposable installation before a separate Core fix. GitHub #103. |
| CODE-035 | Medium | OPEN | Cart module uses `$app` without assigning it in its own file, but the inspected standard Joomla 5.4 dispatcher supplies and extracts `app`. The actual module passed nonzero and zero ItemID with equivalent-scope stubs. No missing-variable failure is established on that path; Joomla 6, real runtime and custom dispatchers remain unverified. #87 remains open pending human review. |
| CODE-036 | Medium | OPEN | Login greeting template outputs configured text and user-derived username/full name without explicit HTML escaping (`C:/Github/redSHOP-rmh/modules/site/mod_redshop_logingreeting/tmpl/default.php:19-23`). Verify upstream validation, escaping and impact with disposable accounts before a separately approved fix. |
| CODE-037 | High | OPEN | Shopper-group category helper uses `$key` for cache get/store without assigning it and reads authorized levels without using them (`C:/Github/redSHOP-rmh/modules/site/mod_redshop_shoppergroup_category/helper.php:36-40,153`). Verify cache controller semantics, group/session isolation and Joomla menu access filtering on an isolated installation; separately authorize any module fix. |
| CODE-038 | Medium | OPEN | Who Bought module selects published products, optional category and a limit but does not query orders or current product (`C:/Github/redSHOP-rmh/modules/site/mod_redshop_who_bought/mod_redshop_who_bought.php:33-60`); the template renders those rows. Verify intended semantics with sample orders before a separately approved module fix. |
| CODE-039 | Medium | OPEN | Product Tab loads scripts under `js/` (`modules/site/mod_redproducttab/mod_redproducttab.php:29-32`), but its manifest omits that folder. The actual Joomla 5.4 manifest parser with stub copy operations did not schedule `js`; Marketplace package validation checks declared entries. Inspect an actual ZIP and fresh/upgrade installs before a separately approved fix. |
| CODE-040 | High | OPEN | Product metadata selector passes `$detail->metarobot_info` instead of `$this->detail->metarobot_info` (`component/admin/tmpl/product/edit_product_meta_data.php:172-175`). Actual template and helper with a stub view selected INDEX,FOLLOW for NOINDEX,NOFOLLOW; the inspected Joomla 5.4 template loader does not assign local `$detail`. Reopen/save and storefront metadata on Joomla 5 and 6 remain untested; review a Core fix separately. |
| CODE-041 | Medium | OPEN | Coupon validation compares subtotal to raw `value` before checking coupon type (`libraries/redshop/src/Helper/CartDiscount.php:151-157,218-225`). Actual helper with stubs rejected a synthetic 20% coupon at subtotals 10 and 20 but accepted 21; fixed-value boundary controls passed. Joomla checkout remains untested. |
| CODE-042 | High | OPEN | Coupon user validation retrieves `SUM(coupon_value)` via `loadResult()` and then reads `$userData->userid` (`C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/CartDiscount.php:168-179`). The scalar/property mismatch is source-confirmed; test prior transaction, ownership and later control flow on PHP/Joomla before concluding runtime impact or separately fixing Core. |
| CODE-043 | Medium | OPEN | Coupon XML declares multiple users (`C:/Github/redSHOP-rmh/component/admin/forms/coupon.xml:61-71`), but its custom selector explicitly configures one selection and reads only the first stored value (`libraries/redshop/src/Form/Field/CouponuserField.php:46-83`). Install schema declares one integer `userid` and checkout compares it with a user ID. Investigate rendered UI, save/load and validation, including upgrades; end-to-end behavior is not established. |
| CODE-044 | High | OPEN | Checkout subtracts coupon usage by ID without a remaining-count predicate in that update (`C:/Github/redSHOP-rmh/component/site/src/Model/CheckoutModel.php:1395-1407`) after earlier cart validation (`libraries/redshop/src/Helper/CartDiscount.php:146-150`). Examine surrounding transaction/locking and reproduce simultaneous carts, retries and failure rollback on an isolated database; a race is not yet confirmed. |
| CODE-045 | High | OPEN | Current Flatpay source preserves legacy pending and generic failed lookups; the offline replay fixture passed for both. The classifier returned `no_payment` for synthetic unrecognized invoice states, and source inspection indicates the legacy callback then reaches its configured failure branch (`plugins/redshop_payment/rs_payment_flatpay/src/Extension/Flatpay.php:553-650`, `src/Helper/FlatpayOutcome.php:168-213`). The unrecognized full callback and provider behavior remain untested. GitHub #100. |
| CODE-046 | High | OPEN | Flatpay payment ownership, amount/currency verification and concurrent replay remain open (`plugins/redshop_payment/rs_payment_flatpay/src/Extension/Flatpay.php:325-340,394-400`; `docs/codex-progress.md:25-29`; DIST-23). Investigate full provider and Core paths; no end-to-end exploit or race is asserted. |
| CODE-047 | High | OPEN | The e-conomic connection path catches a SOAP client initialization failure but proceeds to invoke the missing client (`plugins/economic/economic/economic.php:153-184`). Actual method with HTTPS disabled raised an `Error` in both provider branches; successful connection and Joomla remain untested. GitHub #102. |
| CODE-048 | High | OPEN | The guest product-review path references the verification utility without a leading backslash (`component/site/src/Controller/ProductratingController.php:77-78`). Actual controller with stubs raised a class error for an allowed guest; denied-guest and authenticated controls passed. Joomla and delivery remain untested. GitHub #104. |
| CODE-049 | High | OPEN | The shared importer calls `addslashes()` on parsed values before writing CSV chunks (`libraries/redshop/src/Plugin/AbstractImportPlugin.php:192-235`). Actual splitter and PHP CSV reread changed synthetic apostrophe, double-quote and backslash examples; plain and comma controls passed. Full Joomla import remains untested. GitHub #107. |

## Stage 21 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| MEDIA-001 | High | OPEN | Audit media upload extension, MIME and content validation and allowed types |
| MEDIA-002 | High | OPEN | Verify file path traversal protection, storage permissions and public access |
| MEDIA-003 | High | OPEN | Check authorization and CSRF protection for create, update and delete actions |
| MEDIA-004 | High | OPEN | Verify safe handling of SVG, HTML-like content and filename collisions |
| MEDIA-005 | Medium | OPEN | Test product, category and manufacturer media associations |
| MEDIA-006 | Medium | OPEN | Check thumbnail generation, alt text and storefront output |
| MEDIA-007 | Medium | OPEN | Verify deletion, orphan cleanup and broken references |
| MEDIA-008 | Medium | OPEN | Preserve original media manual screenshots and procedures line by line |

### Media source-review follow-up

At Core commit `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, the default gallery client lists JPEG/PNG/GIF MIME types and size/dimension settings (`C:/Github/redSHOP-rmh/src/assets/com_redshop/js/redshop.media.js:65-82`); client defaults do not prove server-side enforcement. The media guide now describes current source-defined controls, associations and deletion risks instead of presenting the 2019 screenshots as current.

- **MEDIA-001 / M-0133:** `C:/Github/redSHOP-rmh/component/admin/src/Controller/MediaController.php:220-249` cleans the name and uploads to a temporary directory, then classifies extensions at `:255-315`. The shown action does not itself demonstrate an allowlist or content/MIME validation before the upload; inspect the full request/authorization stack and test actual response and file handling before concluding what protections apply.
- **MEDIA-002 / MEDIA-004:** The temporary destination uses `MEDIA_IMAGE_FS_PATH` and collision suffixes (`MediaController.php:230-249`; `C:/Github/redSHOP-rmh/libraries/redshop/src/Helper/Constants.php:115`). Verify filename sanitization, path containment, web-server execution/access rules, collisions and rejected/malformed files on an isolated environment; no exploit or public exposure was established by this inspection.
- **MEDIA-003:** No explicit token or ACL check appears inside the shown `ajaxUpload()` action. This is not proof that the full Joomla dispatch path lacks protection. Verify component-level and inherited authorization, CSRF and all create/update/delete paths on an isolated site; no runtime security tests have been performed.
- **MEDIA-005–008:** Product/category/manufacturer association, deletion, thumbnails and actual UI remain untested. The product editor exposes an additional-media dialog for saved products (`component/admin/tmpl/product/edit_general_data.php:390-410`), and the property model handles its first image specially (`component/admin/src/Model/MediumModel.php:68-112`). The rewritten article retains old fragment IDs. See CODE-006 for a distinct deletion-path concern.

## Stage 22 — newly identified issues

| ID | Priority | Status | Finding |
|---|---|---|---|
| CHANGE-001 | High | OPEN | Verify release version, Git tag, ZIP manifest and changelog consistency |
| CHANGE-002 | High | OPEN | Confirm current documentation is not presented as complete for versions 3.0.2–5.0.5 |
| CHANGE-003 | Medium | OPEN | Verify changelog links resolve correctly in published documentation |
| CHANGE-004 | Medium | OPEN | Preserve all 15 historical release articles verbatim during migration |
| CHANGE-005 | Medium | OPEN | Validate generated release documents and staging publication workflow |
| CHANGE-006 | Medium | OPEN | Review Joomla 6 compatibility statements and legacy API references in old release notes |

### Attribute-set toolbar source-review follow-up

- **CODE-214 / #259:** List toolbar delete and publication tasks differ from the available singular controller methods; the plural controller file declares a singular class. Actual source declarations were checked with isolated PHP parent stubs, and Joomla 5.4.6 form-controller ancestry was inspected. Actual Joomla dispatch and persisted states remain untested.

### Wizard model source-review follow-up

- **CODE-213 / #258:** The actual wizard model requires a legacy configuration-model file absent from the source manifest; an isolated PHP 8.4 load failed at the require. The wizard view requests that model. A packaged installation, Joomla autoloader and upgrade leftovers remain untested. See the Core handoff.

### Changelog source-review follow-up

- **CHANGE-001:** At Core commit `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`, `redshop.xml:10` and the first heading of `CHANGELOG.md:3` both say 5.0.9. Existing local ZIPs for 5.0.5–5.0.9 each contain a root manifest with their respective version and a changelog heading for that version. Local tags include 5.0.5, 5.0.7 and 5.0.8; 5.0.6 and 5.0.9 were not present locally. This is not a statement about remote tags or published artifacts, nor a SHA-256 or full content audit.
- **CHANGE-002–004:** The historical overview and menu link to 15 existing release articles through 3.0.2. The overview now identifies them as an incomplete historical archive and links to the Core source changelog without representing the development branch as a published release. All 15 historical files remain untouched. Local renderer navigation and preservation checks are recorded separately from the still-outstanding published browser check.
- **CHANGE-005–006:** No versioned release, staging publication, external system or Joomla 6 environment was exercised. Validate generated documents and Joomla compatibility only in appropriately authorized isolated environments; retain the historical release notes.
