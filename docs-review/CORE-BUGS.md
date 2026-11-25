# redSHOP Core and extension findings — Codex handoff

Baseline Core commit: `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`. This is a risk-prioritized handoff, not proof of exploitability or Joomla runtime compatibility. All items are OPEN. See `CORE-BUGS.csv` for structured fields, the master for original evidence and `CORE-FIX-INSTRUCTIONS.md` for execution rules. P0 denotes potential critical impact, not an assertion of a confirmed exploit.

Scope includes Core, optional Marketplace extensions and explicit security/compatibility investigations. Documentation-renderer CODE-003 belongs to the documentation repository and is excluded from Core counts. Existing broader test-only review points remain in the master and triage; they are not converted into asserted defects. Archive scan covered 41 archives/375 text files; archived duplicates retain the current master ID.

All referenced source excerpts are short context around the cited line, not standalone proof; compare full control flow and the current revision. For inherited audit entries, the anchor is the original audit, not a verified implementation location; locate the relevant class/method during investigation. Class/method otherwise is a best-effort nearest declaration and must be checked, especially in templates and XML. The source anchor was read at the baseline revision; historic mock results are reported from the review, not rerun here. DIST-23 groups the eight named provider/dependency holds in its original audit table; CODE-046 specifically tracks its Flatpay ownership and replay subset. Audit entries already fixed locally are not marked as new open defects; their remaining acceptance is retained in the original audit.

## CODE-199 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level payment eligibility configuration investigation only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-198 — PayPal currency default is not an available choice

- **Priority / status:** P2 / OPEN; GitHub #244.
- **Source / context:** The PayPal manifest's currency field defaults to `0`, which is not an offered currency (`plugins/redshop_payment/rs_payment_paypal/rs_payment_paypal.xml:57-76`). The payment form reads the parameter and emits it as the currency code (`rs_payment_paypal/extra_info.php:21,77`). Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated fixture the actual payment form emitted synthetic `0` and `DKK` currency values unchanged. No request or payment was made. Joomla's new-form binding and saved value, conversion behavior and PayPal's response are unverified.
- **Expected / tests:** Choose an intentional valid currency or explicit supported shop-currency behavior; preserve existing settings. Test absent, invalid and valid selections in Joomla 5 and 6 with authorized provider mocks and sandbox only.
- **Distinct from CODE-002:** That finding concerns notification handling, not the outgoing currency selection.
- **Documentation:** `faq/paypal.md`.

## CODE-197 — Category link-list helper reads a missing category ID

- **Priority / status:** P2 / OPEN; GitHub #243.
- **Source / context:** `modules/site/mod_redshop_categories/helper.php:145-155,199-212,267-272` selects the category ID as `id` but builds the tree using `cid`. The module's default link-list path calls this helper (`mod_redshop_categories.php:34,67-68`). Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual helper with query/database stubs selected `id`; two synthetic records exposing `id` but no `cid` produced missing-property warnings and collapsed to one array entry when warnings were collected. Real database results, Joomla error handling and storefront output are unverified.
- **Expected / tests:** Use the selected category ID consistently; test empty, single and multiple categories, parent-child relationships and sorting with real supported database drivers and isolated Joomla 5 and 6.
- **Distinct from CODE-194 / #241 and CODE-195 / #242:** This is the default link-list's category result mapping; the earlier findings concern sort defaults and a separate dTree query.
- **Documentation:** `module-redshop/category-menu.md`.

## CODE-196 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level shopper-group product module investigation only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-195 — Category dTree query references an undefined table alias

- **Priority / status:** P2 / OPEN; GitHub #242.
- **Source / context:** `modules/site/mod_redshop_categories/dtree.php:72-80` queries the category table without an alias but filters `c.published`. The module entry selects this file for the dTree menu at `mod_redshop_categories.php:73-75`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a valid synthetic sort, the actual layout generated a query rejected by in-memory SQLite because `c.published` has no matching table alias. Only the table prefix was replaced for the fixture. MySQL, Joomla loading and storefront behavior are unverified.
- **Expected / tests:** Bind the publication filter to the selected category table and test published and unpublished categories with supported database drivers. Verify dTree loading and rendering on isolated Joomla 5 and 6.
- **Distinct from CODE-194 / #241 and CODE-153 / #206:** Invalid sort defaults and the missing query alias are independent; selecting a valid sort avoids the warning but does not bind the alias. The Xmap issue concerns a separate plugin and query.
- **Documentation:** `module-redshop/category-menu.md`.

## CODE-194 — Category module sort default leaves tree ordering undefined

- **Priority / status:** P2 / OPEN; GitHub #241.
- **Source / context:** `modules/site/mod_redshop_categories/mod_redshop_categories.xml:115-124` declares sort default `links` although only four other values are offered. `dtree.php:53-75` assigns the sort expression only for those options and then uses it. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual dTree layout with synthetic `links` raised an undefined-variable warning under warnings-as-exceptions before the database stub received a query. With synthetic `catnameasc`, the stub captured a query with an ordering expression; it was not executed or validated. Form binding, saved settings, Joomla warning handling and storefront are unverified.
- **Expected / tests:** Select a valid default and handle missing or invalid values explicitly across menu styles; separately validate complete queries. Test fresh and existing modules and all sort choices on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/category-menu.md`.

## CODE-193 — Facebook Like and Share default is not an available choice

- **Priority / status:** P3 / OPEN; GitHub #240.
- **Source / context:** `modules/site/mod_redweb_facebook_plugins/mod_redweb_facebook_plugins.xml:58-65` sets Like and Share to default `0` while its options are `false` and `true`. `layouts/facebook/like.php:16-20` emits the parameter as a provider attribute. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual Like layout emitted the synthetic values `0`, `false` and `true` unchanged. The manifest default does not match an offered option. Joomla form binding, saved defaults, provider interpretation and storefront behavior are unverified.
- **Expected / tests:** Align the default with an offered option after confirming provider requirements and preserve existing settings. Test fresh and existing modules and both choices on isolated Joomla 5 and 6 with authorized provider facilities.
- **Documentation:** `module-redshop/facebook-plugins.md`.

## CODE-192 — Cart module output default is not an available choice

- **Priority / status:** P3 / OPEN; GitHub #239.
- **Source / context:** `modules/site/mod_redshop_cart/mod_redshop_cart.xml:29-34` sets the output default to `1`, while its options are `simple` and `extended`. `libraries/redshop/src/Layouts/Cart/Cart.php:25-37` selects the simple branch only for `simple`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual layout with synthetic data selected the extended branch for `1`, the simple branch for `simple` and the extended branch for `extended`. Joomla form binding, saved new-module defaults and storefront behavior are unverified. The manifest default does not identify a selectable output option.
- **Expected / tests:** Align the manifest default with an intended option and preserve saved module settings. Test fresh and existing modules, form binding and both layout branches on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/cart-module.md`.

## CODE-191 — Free-shipping message can use a disabled shipping method

- **Priority / status:** P2 / OPEN; GitHub #238.
- **Source / context:** `libraries/redshop/src/Shipping/Rate.php:257-264,348-375` joins extensions for ordering but does not filter extension enablement before selecting a free rate. The module calls this helper. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual helper returned the free-shipping message for a synthetic zero-price rate belonging to a disabled synthetic extension using an in-memory SQLite database and Joomla/query-builder stubs. Real MySQL, enabled-plugin discovery, Joomla and checkout are unverified. A promotional message may advertise a rate unavailable at checkout.
- **Expected / tests:** Verify actual extension eligibility and align the message with available shipping methods while preserving rate and threshold behavior. Test enabled, disabled and absent extensions, explicit and blank rate IDs, other eligibility filters and multiple rates with supported MySQL and isolated Joomla 5 and 6. Distinct from #163, which concerns postal filtering.
- **Documentation:** `module-redshop/free-shipping.md`.

## CODE-190 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level investigation in newsletter module rendering only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-189 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level investigation in gift-card deletion only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-188 — Gift-card image replacement ignores upload failure

- **Priority / status:** P2 / OPEN; GitHub #237.
- **Source / context:** `component/admin/src/Table/GiftcardTable.php:75-103` deletes the old image before uploading a replacement, ignores `File::upload`'s return and stores the new filename before calling parent store. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual store method returned true, assigned the new filename and invoked deletion of the old filename with synthetic file and parent-store stubs when upload returned false. No actual file, database or Joomla request was changed or tested. A failed replacement can lose the previous image and leave a missing image reference; filesystem and database failure behavior is unverified.
- **Expected / tests:** Detect upload failure and preserve the previous image until a replacement is safely stored. Test both image fields, successful and failed upload, storage failure and rollback with disposable files on isolated Joomla 5 and 6. Distinct from shopper-group logo #177 and wrapping image #166, which use separate table methods.
- **Documentation:** `discounts/gift-cards.md`.

## CODE-187 — ePay payment-type default contains an unavailable option

- **Priority / status:** P3 / OPEN; GitHub #236; investigation.
- **Source / context:** The manifest defaults `paymenttype` to `1,3,4,5` (`plugins/redshop_payment/rs_payment_epayv2/rs_payment_epayv2.xml:131-135`), while `fields/paymenttype.php:46-67` defines no option with value `5`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual field options with synthetic Joomla and asset stubs included `1`, `3` and `4`, but not `5`. New-form binding, saved values and provider behavior are unverified. A default value cannot be selected as one of the rendered choices.
- **Expected / tests:** Confirm the intended supported payment types and align the manifest and selector. Test fresh and existing saved values, option rendering and provider requests with authorized test facilities on isolated Joomla 5 and 6.
- **Documentation:** `plugin-redshop/epay.md`.

## CODE-186 — Order reset displays success for failed HTTP responses

- **Priority / status:** P2 / OPEN; GitHub #235.
- **Source / context:** The order configuration template's request completion callback displays the success message on ready state 4 without inspecting the HTTP status (`component/admin/tmpl/configuration/default_ordertab.php:17-52`). Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Executing the actual script with synthetic HTTP 200, 403 and 500 responses displayed the same success alert for all three. No actual request, order reset, database or Joomla runtime was used. An administrator may believe a failed operation succeeded.
- **Expected / tests:** Check the response and report failures explicitly. Test successful and rejected requests, server errors, network errors and unexpected responses with mocked requests; verify independently using disposable data in isolated Joomla 5 and 6.
- **Documentation:** `global-configuration/orders.md`.

## CODE-185 — Tax-rate save can ignore an earlier shopper-group insert failure

- **Priority / status:** P2 / OPEN; GitHub #234.
- **Source / context:** `component/admin/src/Table/TaxrateTable.php:78-107` stores the rate, removes existing group associations on edit, then inserts submitted groups in a loop and returns only the final execution result. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual table store with synthetic input and database/parent stubs returned true when the first of two association inserts returned false and the second returned true. Database driver failure behavior, transactions, actual persistence and Joomla are unverified. A missing group association can affect tax-rate matching.
- **Expected / tests:** Detect each failed write and preserve consistent rate and group associations, with explicit failure reporting. Test early and final failure, exceptions and replacement rollback with actual supported database drivers and isolated Joomla 5 and 6.
- **Documentation:** `vat/vat-rate.md`.

## CODE-184 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level investigation in tax-rate deletion only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-183 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level investigation in wrapping record deletion only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-182 — Wizard save reads an absent VAT removal flag on other steps

- **Priority / status:** P2 / OPEN; GitHub #233; distinct from #232's company text, #231's VAT tasks and #110's configuration copy.
- **Source / context:** The VAT page supplies `vatremove` (`component/admin/tmpl/wizard/price_vat.php:128-129`), but the user step does not (`component/admin/tmpl/wizard/user.php:18-38`). `WizardController.php:69-87` merges submitted fields with the session and reads `VATREMOVE` without checking whether the key exists. `WizardConfig::getInitialConfig` loads configuration values, and the distributed configuration does not define this flag. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual wizard `save()` with synthetic user-step input and session, with warnings converted to exceptions, raised an undefined-key warning before redirect. The session was already updated. Actual Joomla error handling, navigation and config persistence are unverified.
- **Expected / tests:** Treat an absent flag as no removal and validate removal requests separately. Test a new wizard session across all steps, navigation in both directions and VAT removal on isolated Joomla 5 and 6.
- **Documentation:** `getting-started-general/redshop-configuration-wizard.md`.

## CODE-181 — Wizard saves company registration introduction under the wrong key

- **Priority / status:** P2 / OPEN; GitHub #232; distinct from #231's VAT tasks and #110's configuration copy.
- **Source / context:** The company field is named `registration_comp_introtext` but reads `REGISTRATION_COMPANY_INTROTEXT` in `component/admin/tmpl/wizard/user_registration.php:89-113`. `WizardController.php:69-77` uppercases submitted keys and merges them into the wizard session; `WizardController.php:111-119` passes that session to configuration save. Normal configuration maps the field to the company key in `libraries/redshop/src/Config/App.php:395`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual wizard `save()` with synthetic session and input stubs left the canonical company text unchanged and stored the new text as `REGISTRATION_COMP_INTROTEXT`. The wizard may retain the old company introduction after Finish; actual file saving, display and Joomla remain unverified.
- **Expected / tests:** Map the submitted company field to the canonical configuration key without changing unrelated settings. Test step navigation, save and Finish with distinct private/company text and verify file contents and registration presentation on isolated Joomla 5 and 6.
- **Documentation:** `getting-started-general/redshop-configuration-wizard.md`.

## CODE-180 — Wizard VAT rate controls use legacy or misspelled task names

- **Priority / status:** P2 / OPEN; GitHub #231; investigation.
- **Source / context:** `component/admin/tmpl/wizard/price_vat.php:95-123` generates `tax_rate.add` and `tag_rate.edit`; `WizardController.php:87-90` redirects removal to `tax_detail.removefromwizard`. Current tax controllers are `TaxrateController` and `TaxratesController`, and the inspected source contains no matching wizard-removal controller. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual VAT layout with a synthetic rate rendered the add and edit task names and a remove control. These names do not match the current controller names, but Joomla dispatch, any custom routing and remove execution were not tested. Rate controls may fail or navigate unexpectedly.
- **Expected / tests:** Verify Joomla dispatch and wire the controls to current rate-management routes and an authorized removal path with proper confirmation. Test add, edit and remove separately, including failures, saved rate groups and wizard session state on isolated Joomla 5 and 6.
- **Documentation:** `getting-started-general/redshop-configuration-wizard.md`.

## CODE-179 — Refining cached search suggestions can dereference a missing product number

- **Priority / status:** P2 / OPEN; GitHub #230; distinct from #229's missing initialization.
- **Source / context:** `src/assets/com_redshop/js/redshop.search.js:43-46,170-185,252-301` caches suggestions and calls `value_number.substr` when the name does not begin with the refined input. The AJAX query selects product ID, name and category but no `value_number` (`component/site/src/Model/SearchModel.php:1010-1016`); its search condition supports substring matches (`SearchModel.php:547-575`). Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated Node VM, actual `setSuggestions` and `getSuggestions` received a synthetic `Big red chair` result without a product number for `re`; refining the input to `red` raised a TypeError. The missing default initializer is tracked separately in CODE-178. Real AJAX, browser, module overrides and Joomla remain unverified.
- **Expected / tests:** Safely handle optional product numbers and keep client-side filtering consistent with server substring matching, or request fresh results. Test name-prefix and substring matches with and without product numbers and cache on/off in isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/search.md`.

## CODE-178 — Default search module lacks AJAX suggestion initialization

- **Priority / status:** P2 / OPEN; GitHub #229; distinct from #227's custom-field rendering.
- **Source / context:** `modules/site/mod_redshop_search/mod_redshop_search.php:19-20,55-60,112-140` loads the module search script and, when AJAX is enabled, the component search script and a `makeUrl()` change handler. `src/assets/com_redshop/js/redshop.search.js` defines `_b.AutoSuggest` but the inspected module scripts and default layout do not initialize it or define `makeUrl`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Loading both actual source scripts in a Node VM with a synthetic keyword element left its key handlers unset and `makeUrl` undefined, while `_b.AutoSuggest` was defined. Without another script or override providing initialization, suggestions may not start and changing search selectors may raise an error. Real asset loading, browser, overrides and Joomla remain unverified.
- **Expected / tests:** Initialize AJAX suggestions and update the URL for the active module and controls; ensure script registration and multiple modules work without global collisions. Test loaded assets, typing, selector changes and submitted searches with AJAX on and off in isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/search.md`.

## CODE-177 — Accessory price lookup has no multiplication or division branch

- **Priority / status:** P1 / OPEN; GitHub #228.
- **Source / context:** The product editor accepts `+`, `-`, `=`, `*` and `/` (`component/admin/tmpl/product/edit.php:155-163` and `edit_product_accessory.php:109-116`), and `ProductModel.php:1490-1508` stores the operator. `libraries/redshop/src/Helper/Accessory.php:124-137` generates a price CASE with only `+`, `-` and `=`; `libraries/redshop/src/Product/Accessory.php:38-41` converts an empty accessory price to zero. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual helper's generated CASE, adapted only for SQLite syntax, returned NULL for synthetic `*` and `/` rows and expected nonnull values for `+`, `-` and `=`. Passing NULL to the actual price helper yielded zero with VAT disabled. Product, cart and checkout paths use the lookup, but real MySQL, Joomla and checkout effects were not tested.
- **Expected / tests:** Define consistent supported accessory operators across editor, persistence and pricing; handle division by zero explicitly. Test all operators, sale/base price, zero divisor, VAT, cart and order totals with real MySQL and disposable products on isolated Joomla 5 and 6.
- **Documentation:** `product-management/products-redshop.md`.

## CODE-176 — Search module default layout does not render custom-field selectors

- **Priority / status:** P2 / OPEN; GitHub #227; distinct from #226's category exclusion query.
- **Source / context:** `modules/site/mod_redshop_search/helper.php:74-104` builds field data, but `mod_redshop_search.php:145-161` does not pass it in the Twig context. `tmpl/default.html.twig:40-57` also requires the data to be empty before iterating it. The options are declared in `mod_redshop_search.xml:152-167`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual default Twig layout rendered no custom-field selector with synthetic populated field data and Show Custom Field set to Yes; an empty input also rendered none. Customers cannot use these selectors in the tested default layout. Actual database records, Joomla module rendering, overrides and submitted search remain unverified.
- **Expected / tests:** Pass the selected fields to the layout and render usable controls when populated, checking the data shape and selected values as well as output escaping. Test multiple selected and empty fields with the actual helper and default layout, then verify filters and results on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/search.md`.

## CODE-175 — Investigate search category exclusion for products in multiple categories

- **Priority / status:** P2 / OPEN; GitHub #226; investigation.
- **Source / context:** `component/site/src/Model/SearchModel.php:261-266,1012-1016,1089-1095` filters joined category rows with `NOT IN`, including AJAX search. The module supplies `excludeCategories` in `modules/site/mod_redshop_search/tmpl/default.html.twig:93-94`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** An in-memory SQLite equivalent of the join/predicate retained a synthetic product linked to both excluded and nonexcluded categories, while omitting one linked only to the excluded category. Intended semantics, real MySQL queries and Joomla UI are unverified. Category exclusion is not access control.
- **Expected / tests:** Confirm whether exclusion should be product-wide and align normal and AJAX paths as appropriate. Test single, mixed, multiple excluded and missing categories with real query and disposable products on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/search.md`.

## CODE-174 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level investigation in the price-filter module only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-173 — Price filter slider uses selected range as its available bounds

- **Priority / status:** P2 / OPEN; GitHub #225.
- **Source / context:** `modules/site/mod_redshop_pricefilter/mod_redshop_pricefilter.php:17-43` reads the configured range and current range from request/user state; `tmpl/default.php:43-52` initializes slider minimum and maximum from that current range. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual layout with Joomla stubs and a synthetic current range of 100–200 emitted 100–200 as both slider limits and selected values. A customer may be unable to widen a request-supplied or restored range; real browser and state behavior remain unverified.
- **Expected / tests:** Separate configured full limits from the selected range, validating bounds. Test default and narrowed values, stale state and browser behavior using disposable products on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/price-filtering.md`.

## CODE-172 — Promotion removal can duplicate one cart item and exclude another

- **Priority / status:** P1 / OPEN; GitHub #224, distinct from #223, #222, #94 and #76.
- **Source / context:** `plugins/redshop_promotion/promotion/helpers/Helper.php:249-257` copies only the next item into a removed promotion's slot; `Step.php:118-138` reduces the cart count afterward. `libraries/redshop/src/Helper/Cart.php:62-100` contains count-bounded cart processing. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual promotion removal on a synthetic cart `[product 10, award, product 20, product 30]` left effective count-bounded products `[10, 20, 20]`, with product 30 beyond the count. Cart persistence and discount recalculation were stubbed. Real checkout and order behavior are unverified.
- **Expected / tests:** Preserve all unrelated cart items and their order when removing awards. Test first, middle, last and consecutive awards with multiple later products and actual recalculation/persistence on isolated Joomla 5 and 6. Distinct from CODE-171's warning and CODE-170's shipping restoration.
- **Documentation:** `discounts/promotions.md`.

## CODE-171 — Promotion removal reads an unset final cart item

- **Priority / status:** P2 / OPEN; GitHub #223, distinct from #222.
- **Source / context:** `plugins/redshop_promotion/promotion/helpers/Step.php:118-138` loops over matching items; `Helper.php:236-257` unsets the last item when removing it, after which the while condition reads the same index again. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual removal with a synthetic two-item cart emitted an undefined-array-key warning for the last item; with warnings converted to exceptions the method aborted before stubbed cart persistence. Joomla warning handling and real checkout remain unverified.
- **Expected / tests:** Avoid dereferencing an unset index. Test first, middle, last, only and consecutive matching awards with warnings converted to exceptions, and disposable carts on isolated Joomla 5 and 6. This is separate from CODE-170's shipping restoration logic.
- **Documentation:** `discounts/promotions.md`.

## CODE-170 — Removing a promotion can undo another promotion's free shipping

- **Priority / status:** P2 / OPEN; GitHub #222.
- **Source / context:** `plugins/redshop_promotion/promotion/helpers/Step.php:100-110,118-153` saves shipping when applying free shipping but restores shared saved fields when removing any promotion. `Helper.php:171-191` defines the backup and free-shipping mutations. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual shipping apply and promotion removal methods with a synthetic two-promotion cart restored original shipping when removing a non-free-shipping promotion, leaving the free-shipping award in the cart. Discount recalculation and cart persistence were stubbed. Actual cart, routing and checkout are unverified.
- **Expected / tests:** Establish shipping behavior for overlapping promotions, vouchers and nonpromotion free shipping; test both removal orders and repeated changes with actual recalculation on isolated Joomla 5 and 6.
- **Documentation:** `discounts/promotions.md`.

## CODE-168 — Private security investigation

- **Priority / status:** P1 / OPEN; security hold pending an authorized private reporting channel.
- **Evidence:** Source-level investigation in the product-price helper only; runtime exposure and exploitability remain unverified. Sensitive details are intentionally not included here.

## CODE-169 — Deleting a mass discount clears product discount fields without checking overlap

- **Priority / status:** P2 / OPEN; GitHub #221.
- **Source / context:** `component/admin/src/Table/MassdiscountTable.php:132-219` resolves selected products directly and through categories/manufacturers, then resets product sale, discount price and date fields without checking overlapping rules or previous product state. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual deletion with a synthetic selected product and database/parent stubs generated an unconditional reset for that product. Removing one rule may erase discount settings needed by another rule or independently configured. Real database, overlap semantics and storefront are unverified.
- **Expected / tests:** Define ownership and overlap semantics and preserve unrelated discounts. Test direct, category and manufacturer selections, multiple rules, pre-existing product settings and failures using disposable records on isolated Joomla 5 and 6.
- **Documentation:** `discounts/mass-discount.md`.

## CODE-167 — Negative newsletter batch size causes send controller failure

- **Priority / status:** P2 / OPEN; GitHub #220. Distinct from #168 progress indexing, #169 routing and #170 recipient fields.
- **Source / context:** `component/admin/tmpl/configuration/default_newslettertab.php:81-89` defines a number field without a minimum; `libraries/redshop/src/Config/App.php:656-665` replaces zero but does not normalize a negative batch size; `component/admin/src/Controller/NewslettersController.php:41-59` passes the configured value to `array_chunk`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual controller with input and session stubs queued a positive batch but raised `ValueError` for a synthetic negative size before queueing; no email was sent. Invalid configuration may prevent bulk send. Actual Joomla routing and configuration save were not tested.
- **Expected / tests:** Validate positive integer sizes and surface errors for invalid existing values. Test negative, zero, noninteger and positive sizes on configuration and controller paths; use only a mail sink on isolated Joomla 5 and 6.
- **Documentation:** `global-configuration/newsletter.md`, `communication/newletters.md`.

## CODE-166 — Order total discount list cannot render numeric date values

- **Priority / status:** P2 / OPEN; GitHub #219.
- **Source / context:** `component/admin/sql/install/mysql/install.sql:560-571` defines numeric start/end fields, while `component/admin/src/Model/DiscountsModel.php:64-73` selects `d.*`. `component/admin/forms/discount.xml:52-69` defines both list columns and `libraries/redshop/src/View/AbstractViewListRedshop.php:224-252` builds columns from that form. `component/admin/src/View/Discounts/HtmlView.php:98-109` parses them as `Y-m-d H:i:s` and calls `setTimezone()` without checking the parse. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual renderer with Joomla/config stubs raised an `Error` for synthetic numeric start and end values; formatted strings rendered. Numeric stored values may prevent the order-total discount list rendering. Actual stored rows, SQL driver and Joomla UI are unverified.
- **Expected / tests:** Align list formatting with verified storage and timezone semantics. Test numeric, zero, null, malformed and valid values and query-to-render integration; verify disposable records on isolated Joomla 5 and 6.
- **Documentation:** `discounts/order-total-discount.md`.

## CODE-165 — Coupon and voucher saves reject a start date without an end date

- **Priority / status:** P2 / OPEN; GitHub #218.
- **Source / context:** `component/admin/forms/coupon.xml:38-53` and `component/admin/forms/voucher.xml:39-53` do not require both dates. `libraries/redshop/src/Model/Traits/HasDateTimeRange.php:25-51` converts a nonempty start date to a timestamp; `component/admin/src/Model/CouponModel.php:38-51` and `VoucherModel.php:37-51` compare it with an empty end date. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual coupon and voucher save methods with a stubbed parent rejected synthetic start-only input while accepting end-only, both-empty and ordered dates in PHP 8.4. No database or Joomla form was used, and persistence or checkout behavior was not verified. Administrators may be unable to save an open-ended range with a start date.
- **Expected / tests:** Compare the boundaries only when both exist, with explicit open-ended semantics. Test blank, start-only, end-only, ordered and reversed dates, timezone boundaries, persistence and redemption on isolated Joomla 5 and 6.
- **Documentation:** `discounts/coupon.md`, `discounts/voucher.md`.

## CODE-164 — Coupon list date renderer fails for nullable dates

- **Priority / status:** P2 / OPEN; GitHub #217.
- **Source / context:** `component/admin/sql/install/mysql/install.sql:200-206,2916-2922` permits null coupon and voucher start and end dates; `component/admin/src/View/Coupons/HtmlView.php:71-80` and `component/admin/src/View/Vouchers/HtmlView.php:61-70` handle only the zero-date string before calling `setTimezone()` on the date parser result. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Each actual renderer with isolated Joomla/config stubs raised an `Error` for a synthetic null start date; it returned a blank for the zero-date string and formatted a valid date. A schema-valid null date may prevent either list rendering. Actual stored rows, Joomla UI and save behavior for blank dates are unverified.
- **Expected / tests:** Handle null, blank and invalid dates safely while preserving time-zone formatting and existing zero-date display. Test both lists' start and end dates independently, malformed and valid dates, and actual list rendering on isolated Joomla 5 and 6.
- **Documentation:** `discounts/coupon.md`, `discounts/voucher.md`.

## CODE-163 — Investigate unpublished stockrooms in delivery-time lookup

- **Priority / status:** P2 / OPEN investigation; GitHub #216.
- **Source / context:** `libraries/redshop/src/Helper/Product.php:1672-1730` selects stockroom delivery times with positive stock but no publication predicate. The inventory stockroom list filters publication in `component/admin/src/Model/StockroomListingModel.php:151-162`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an in-memory SQLite fixture with the actual helper and a query-builder stub, a product stocked in an unpublished 1–2 day stockroom and a published 3–4 day stockroom returned `1-2 days`. The intended publication semantics for delivery estimates, real MySQL query, stock selection, templates and storefront remain unverified.
- **Expected / tests:** Confirm whether unpublished stockrooms should contribute to delivery estimates and apply a consistent policy. Test published and unpublished stockrooms, equal times, zero stock, variants and no matching stock on isolated Joomla 5 and 6. This is separate from CODE-162 / #215's Weeks conversion.
- **Documentation:** `stockroom/stockroom-management.md`.

## CODE-162 — Investigate stockroom delivery times displayed in weeks

- **Priority / status:** P2 / OPEN investigation; GitHub #215.
- **Source / context:** `component/admin/forms/stockroom.xml:20-40` offers Days or Weeks alongside minimum and maximum inputs. `component/admin/src/Model/StockroomModel.php:31-51` checks the range but does not convert it before calling the parent save. `libraries/redshop/src/Helper/Product.php:1672-1747` divides both values by seven and casts to integers in the Weeks branch. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual helper with synthetic database rows displayed `0-0 weeks` for values 1–2, `1-2 weeks` for 7–14 and `1-2 weeks` for 8–15; Days 1–2 displayed `1-2 days`. Intended storage/input unit and rounding policy require confirmation. Real persistence, stock selection, templates and storefront were not tested.
- **Expected / tests:** Clarify input versus display units and avoid misleading delivery ranges; preserve existing stored-data compatibility. Test Days and Weeks, nonmultiples of seven, small values, multiple stockrooms and variants with disposable products on isolated Joomla 5 and 6. This is separate from CODE-161 / #214's unmatched form default.
- **Documentation:** `stockroom/stockroom-management.md`.

## CODE-161 — Stockroom delivery unit default matches neither option

- **Priority / status:** P2 / OPEN; GitHub #214.
- **Source / context:** `component/admin/forms/stockroom.xml:20-28` sets default `1` for the delivery-unit radio while its values are `Days` and `Weeks`. `libraries/redshop/src/Helper/Product.php:1729-1739` treats `Days` specially and uses the weeks branch for every other value. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The bundled Joomla switcher layout, invoked in isolation with the XML's default and options plus asset stubs, rendered both radios unchecked. A stockroom form using that default may not communicate a unit selection; the real new-record binding, persistence and storefront are unverified. If an unexpected value reaches the product helper, source selects the weeks branch.
- **Expected / tests:** Choose a valid default and validate or explicitly handle unknown units without silently changing existing stockrooms. Test new and existing records, both units, missing/invalid unit, saving and rendered delivery times on isolated Joomla 5 and 6.
- **Documentation:** `stockroom/stockroom-management.md`.

## CODE-160 — Investigate fractional VAT input step validation

- **Priority / status:** P2 / OPEN investigation; GitHub #213.
- **Source / context:** `component/admin/tmpl/configuration/default_vat.php:59-62` renders the VAT-after-discount field as a number input without `step`; the tooltip at `component/admin/language/en-GB/com_redshop.ini:926` gives `0.16` as the example, and `component/admin/config/config.dist.php:616` supplies `0.000`. `component/admin/tmpl/configuration/default.php:49-125` calls `form.submit()` after its own checks. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated Chrome data page reproducing the field's type and initial value, setting its value to `0.16` produced `stepMismatch = true` and `checkValidity() = false`. This may cause invalid-state indications or affect validation paths. The actual Joomla form, toolbar save, other browsers and saved values have not been tested; the source's direct `form.submit()` means a blocked save must not be assumed.
- **Expected / tests:** Allow appropriate fractional VAT values in the form without changing calculation or stored semantics. Test zero, fractional and whole values from different initial values, native validity, keyboard and toolbar save, and persistence on isolated Joomla 5 and 6.
- **Documentation:** `global-configuration/price.md`.

## CODE-159 — First sample reminder treats configured days as minutes

- **Priority / status:** P2 / OPEN; GitHub #212. Actual helper method tested on PHP 8.4 with mail and database stubs.
- **Source / context:** `component/admin/tmpl/configuration/default_color_sample.php:15-22` exposes the first reminder setting; `component/admin/language/en-GB/com_redshop.ini:890-891` describes days. `libraries/redshop/src/Helper/Sample.php:76-85` multiplies the configured value by 60 seconds; the second reminder uses days at `:150-155`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a synthetic setting of 1 and unsent sample request, the actual first-reminder method did not call the mail stub at 59 seconds but did at 60 seconds. A scheduled invocation can therefore send much earlier than the configured day. The scheduler, database, Joomla and mail delivery were not tested.
- **Expected / tests:** Interpret the setting in its documented day unit, with explicit boundary and timezone handling. Test zero, one and several days, already-sent requests, mail failures and scheduling on isolated Joomla 5 and 6. This is separate from CODE-031 / #85, which concerns sample and purchase coupon expiry duration.
- **Documentation:** `global-configuration/products.md`.

## CODE-158 — Category product filters assume selected input arrays exist

- **Priority / status:** P1 / OPEN; GitHub #211. Actual module layout exercised with synthetic choices and empty input on PHP 8.4.
- **Source / context:** `modules/site/mod_redshop_category_product_filters/mod_redshop_category_product_filters.php:40-46` reads `filterform` from GET with an empty-array fallback. `tmpl/default.php:23-55,77-82,119-124` passes missing manufacturer, category, custom-field or attribute selections to `in_array()`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With each of four synthetic manufacturer, category, custom-field or attribute choices and empty input, the actual layout emitted missing-key warnings and raised `TypeError`. An initial category filter display may fail. Actual Joomla routing, database and storefront remain unverified.
- **Expected / tests:** Treat absent selections as empty arrays and validate input shape without changing selected filters. Test initial request, selected and unselected options, custom fields and attributes, and isolated Joomla 5 and 6.
- **Documentation:** `categories/redshop-categories.md`.

## CODE-157 — Filter category loop counts a shopper-group portal object

- **Priority / status:** P1 / OPEN; GitHub #210. Actual filter layout category loop exercised with synthetic category and portal stubs on PHP 8.4.
- **Source / context:** `libraries/redshop/src/Helper/ShopperGroup.php:329-336` returns the first portal object or false; `libraries/redshop/src/Layouts/Filter/Result.php:140-152` passes that result to `count()`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual layout raised `TypeError` for both a synthetic object and false when the category loop contained a category. Filtering output may fail when this template branch is used. Real category selection, filtering, database and Joomla remain unverified.
- **Expected / tests:** Check the returned portal object or false directly and preserve category access logic. Test portal present and absent, access settings, empty and populated category loops and Joomla 5 and 6. This is separate from CODE-152 / #205, which concerns a different nullable product-menu helper later in the layout.
- **Documentation:** No specific affected customer guide confirmed.

## CODE-156 — Import progress counts physical lines rather than CSV records

- **Priority / status:** P2 / OPEN; GitHub #209. Actual `countLines()` exercised with a disposable multiline CSV on PHP 8.4.
- **Source / context:** `libraries/redshop/src/Plugin/AbstractImportPlugin.php:157-175,200-218` counts physical lines but splits parsed CSV records; `component/admin/tmpl/import/default.php:111-117,199-230` estimates progress chunks from that line count. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual counter reported 13 lines for a header and one multiline record, while `fgetcsv` read two records. With a 10-row batch size the UI formula estimates two chunks although the splitter would create one from that record. Progress and the displayed count may mislead. The splitter, browser and database were not run in this fixture.
- **Expected / tests:** Derive the progress count from parsed records or actual chunk count and handle empty and multiline CSV consistently. Test quoted newlines, blanks, chunk boundaries and reported progress on isolated Joomla 5 and 6. This is separate from CODE-049 / #107, which concerns altered field values during splitting.
- **Documentation:** `import-export/data-import.md`.

## CODE-155 — Facebook video layout emits malformed closing tags

- **Priority / status:** P2 / OPEN; GitHub #208. Actual video layout rendered with parameter stubs and parsed with PHP libxml on PHP 8.4.
- **Source / context:** `modules/site/mod_redweb_facebook_plugins/layouts/facebook/video.php:14-20` emits `</ blockquote>` and `</ div>` instead of closing tags. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In the isolated libxml HTML parser a following paragraph became a descendant of the unclosed blockquote. Markup can affect subsequent page structure and video embedding; real browser, Facebook SDK and Joomla behavior remain unverified.
- **Expected / tests:** Emit valid closing tags while preserving the provider markup and configuration. Test generated DOM and following sibling content with a real browser and an authorized provider test application on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/facebook-plugins.md`.

## CODE-154 — Shopper-group logo image has no text alternative

- **Priority / status:** P2 / OPEN; GitHub #207. Actual module layout exercised with synthetic guest and logged-in identities, a synthetic file path and image helper on PHP 8.4.
- **Source / context:** `modules/site/mod_redshop_shoppergrouplogo/tmpl/default.php:16-49` selects a guest or shopper-group logo and outputs an `img` without an `alt` attribute. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Both synthetic identity paths emitted an image without `alt`. Assistive technology is not given an explicit text alternative or a decorative-image indication. Screen readers, actual logo files and Joomla storefront remain unverified.
- **Expected / tests:** Determine whether the logo conveys information or is decorative; provide an appropriate escaped alternative or an empty alt accordingly. Test guest, group, missing-logo and alternate-layout cases and verify with assistive technology on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/shoppergroup.md`.

## CODE-153 — Xmap category query references an undefined alias

- **Priority / status:** P1 / OPEN; GitHub #206. Actual Xmap method exercised with a query-builder stub and an in-memory SQLite database on PHP 8.4.
- **Source / context:** `plugins/xmap/com_redshop/com_redshop.php:117-121,141-153` selects the category table as `a` but filters on `b.parent_id` without joining `b`; `component/admin/sql/install/mysql/install.sql:123-150` defines `parent_id` on the category table. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Calling the actual protected category-tree method with products disabled generated a query rejected by SQLite because `b.parent_id` does not exist. Category sitemap traversal may fail before products are considered. MySQL, Joomla, installed Xmap and actual event dispatch were not tested.
- **Expected / tests:** Use the correct category parent reference and preserve hierarchy and ordering. Exercise root and nested categories with and without products in the supported database and isolated Joomla 5 and 6. Separately address CODE-152 / #205, which concerns nullable menu results later in product traversal.
- **Documentation:** No dedicated Xmap guide identified.

## CODE-152 — Product menu lookups are counted as arrays

- **Priority / status:** P1 / OPEN; GitHub #205. Actual Product Compare layout exercised with synthetic comparison and menu stubs on PHP 8.4.
- **Source / context:** `libraries/redshop/src/Helper/Product.php:1761-1819` returns a menu item or null. `modules/site/mod_redshop_productcompare/tmpl/default.php:38-44` calls `count()` on the result. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual comparison layout raised `TypeError` for both object and null synthetic menu results after a product was selected. Real Joomla session, menu and storefront remain unverified.
- **Accessory follow-up:** The actual non-AJAX failed accessory-add workflow also raised `TypeError` for synthetic object and null menu results with isolated cart, input and application stubs. Real cart processing, redirects and Joomla remain unverified.
- **Xmap follow-up:** Both actual protected Xmap category-product and product-tree paths raised the same error for synthetic object and null menu results using database and Xmap stubs. Their queries were not executed against a real database; installed Xmap and Joomla dispatch remain unverified. A separate earlier category query error is tracked as CODE-153 / #206.
- **Filter follow-up:** The actual filter result layout raised the same error for synthetic object and null menu results with category, template, product and Joomla stubs. Real filtering, database and storefront remain unverified.
- **Datafeed follow-up:** The unchanged `doExecute` method extracted from `plugins/redshop_product/wss_datafeed/cli/com_redshop/wss_datafeed.php:37-122` raised the same error for synthetic object and null menu results with product and helper stubs. The CLI bootstrap and full application were deliberately not run; real feed output, database and extension installation remain unverified.
- **Expected / tests:** Check the nullable item directly and preserve the router fallback. Test populated and missing menu items and each affected workflow with isolated dependencies; verify supported Joomla 5 and 6 paths.
- **Documentation:** `module-redshop/product-compare.md`.

## CODE-151 — Mega Menu reads a different category key than it checks

- **Priority / status:** P2 / OPEN; GitHub #204. Actual helper exercised with synthetic menu and category stubs on PHP 8.4.
- **Source / context:** `modules/site/mod_redshop_megamenu/helper.php:44-49` checks `query['id']` but reads `query['catid']`; its generated redSHOP category links use `id` at `helper.php:75-88`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** An id-only synthetic category menu item produced a missing-`catid` warning and null `category_id` in the actual helper. Real Joomla menu query data, hierarchy and routing remain unverified; category children may not be associated as intended.
- **Expected / tests:** Confirm the real menu query contract and use the correct category key with safe handling of missing keys. Test id-only, catid-only, both and non-category menu items, nested categories and distinct module instances on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/mega-menu.md`.

## CODE-150 — Investigate cart discount line when discount is excluded

- **Priority / status:** P2 / OPEN; GitHub #203. Actual cart module calculator and PHP layout exercised separately with synthetic data and stubs on PHP 8.4.
- **Source / context:** `libraries/redshop/src/Cart/Module.php:44-59` excludes discounts from its module total when `show_with_discount` is false. `modules/site/mod_redshop_cart/mod_redshop_cart.php:21,75` passes the setting to `libraries/redshop/src/Layouts/Cart/Cart.php:128-145`, which checks only that it is set. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In separate isolated calls, a zero setting left a synthetic subtotal of 100 unchanged despite a coupon discount of 10, while the actual layout displayed a synthetic positive discount line with the same setting. Real cart field relationships, calculation sequencing and Joomla storefront remain unverified; the presentation may suggest a discount was included when it was not.
- **Expected / tests:** Establish intended semantics and make the displayed line and total unambiguous. Test both settings, all discount types, VAT, shipping and multiple module instances; verify real cart state in isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/cart-module.md`.

## CODE-149 — Cart module empty-cart button setting is misspelled in Twig

- **Priority / status:** P2 / OPEN; GitHub #202. Actual Twig template tested with the locally installed Twig and synthetic inputs.
- **Source / context:** `modules/site/mod_redshop_cart/mod_redshop_cart.php:25-29,86` passes `showEmptyBtn`; `tmpl/default.html.twig:5` checks `showEmptBtn`. The manifest's empty-cart button setting defaults to Yes. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With default non-strict Twig and synthetic data, the actual template omitted the checkout button for count zero even when `showEmptyBtn` was 1; count one displayed it. The installed Joomla rendering environment and custom layouts were not tested.
- **Expected / tests:** Honor the saved setting while preserving the populated-cart link. Test empty and populated carts, both setting values, Twig strictness and alternate layouts in isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/cart-module.md`.

## CODE-148 — Mega Menu descending sort is ignored

- **Priority / status:** P2 / OPEN; GitHub #201. Actual sort helper exercised with synthetic category names on PHP 8.4.
- **Source / context:** `modules/site/mod_redshop_megamenu/mod_redshop_megamenu.xml:64-73` offers ascending and descending; `mod_redshop_megamenu.php:23` passes the choice to the helper. `helper.php:353-370` calls `array_reverse` without using the returned array. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual helper returned names `A, Z` for descending input `Z, A`. The same method recurses into children; child ordering and Joomla storefront are not tested.
- **Ordering option follow-up:** The comparator has branches for name and ID but none for the manifest's `ordering` option. With synthetic entries in ordering 2 then 1, the actual helper retained that sequence for ascending Ordering. Real query ordering and Joomla presentation remain unverified.
- **Expected / tests:** Apply the descending choice to the sorted list, preserving existing options and hierarchy. Test name and ID in both directions, child lists and empty results; separately verify the Ordering option and actual Joomla 5 and 6 menu.
- **Documentation:** `module-redshop/mega-menu.md`.

## CODE-147 — Mass-cart silently skips unknown product numbers

- **Priority / status:** P2 / OPEN; GitHub #200. Actual cart helper exercised with synthetic database and cart stubs on PHP 8.4.
- **Source / context:** `libraries/redshop/src/Helper/Cart.php:1590-1639` trims each line and skips unmatched products without a message, while unpublished, not-for-sale and expired products produce messages. `libraries/redshop/src/Workflow/Cart.php:179-204` invokes the helper then redirects to the cart. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In the actual helper, synthetic input containing two known numbers, an unknown number and an unpublished product called the cart stub for the known numbers, silently skipped the unknown and emitted one error for the unpublished product. The same submitted quantity reached both known calls. Actual database, cart addition, UI and redirect remain unverified; shoppers may not notice an omitted item.
- **Expected / tests:** Report unrecognized numbers clearly without preventing valid entries unless the desired policy says otherwise. Test empty lines, duplicates, unknown and ineligible products and partial success; verify messages and cart contents on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/redmasscart.md`.

## CODE-146 — Manufacturer scroller divides by a zero setting

- **Priority / status:** P2 / OPEN; GitHub #199. Actual default layout exercised with isolated service stubs on PHP 8.4.
- **Source / context:** `modules/site/mod_redmanufacturer/mod_redmanufacturer.xml:53-58` defines `ScrollBehavior` as a text field; `mod_redmanufacturer.php:29` reads it and `tmpl/default.php:19` divides the width by it. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Passing the string `0` to the actual default layout raised `DivisionByZeroError`; a value of `1` rendered normally in the same fixture. Whether the Joomla form saves zero and how an installed storefront handles the exception remain unverified.
- **Related module:** `modules/site/mod_redshop_who_bought/mod_redshop_who_bought.xml` defines a numeric products-per-scroll setting with no explicit minimum; `tmpl/default.php:29` also divides by it. Its actual default layout raised `DivisionByZeroError` for synthetic string `0` with isolated stubs. The real form and storefront remain unverified.
- **Expected / tests:** Validate a positive numeric setting and handle already-saved invalid values safely. Test zero, empty and nonnumeric values, normal positive values and saved configuration upgrades; verify the form and storefront on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/manufacturer-scroller.md`; `module-redshop/who-bought.md`.

## CODE-145 — Manufacturer scroller image is not linked

- **Priority / status:** P2 / OPEN; GitHub #198. Actual default layout exercised with synthetic manufacturer data and isolated service stubs on PHP 8.4.
- **Source / context:** `modules/site/mod_redmanufacturer/mod_redmanufacturer.xml` calls `PageLink` Image Link and offers manufacturer detail or products. `modules/site/mod_redmanufacturer/tmpl/default.php:72-94` constructs the route but renders the image without an anchor; the separate name link is conditional. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual default layout rendered an unlinked image and a linked name when both name options were enabled. The manifest defaults hide the name and its link, leaving the image-only display without a manufacturer link. Joomla rendering and alternative layouts were not tested.
- **Expected / tests:** Confirm the intended image-link behavior and apply the chosen destination without disrupting the optional name link. Test detail and products routes, both name settings, image visibility and alternate layouts in isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/manufacturer-scroller.md`.

## CODE-144 — Similar Tags module counts a nullable helper result

- **Priority / status:** P2 / OPEN; GitHub #197. Actual module entry and helper were exercised with isolated input and module-cache stubs on PHP 8.4.
- **Source / context:** `modules/site/mod_redshop_tags_similar/helper.php:37-40,56-58` returns null for excluded routes or no matching tags. `modules/site/mod_redshop_tags_similar/mod_redshop_tags_similar.php:20-25` calls `count()` on the module-cache result. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a cache stub forwarding the actual helper result, category, tags and users routes each raised `TypeError` in the actual module entry; a stubbed empty array returned normally. The fixture did not run Joomla's actual module cache or a storefront; the effect depends on its handling of null and the module assignment.
- **Joomla source follow-up:** In Joomla [5.4.0](https://github.com/joomla/joomla-cms/blob/5.4.0/libraries/src/Helper/ModuleHelper.php#L566) and [6.0.0](https://github.com/joomla/joomla-cms/blob/6.0.0/libraries/src/Helper/ModuleHelper.php#L566), `moduleCache` returns the callback-cache result; `CallbackController::get` forwards the callback result when caching is disabled and stores/returns it when enabled ([5.4.0](https://github.com/joomla/joomla-cms/blob/5.4.0/libraries/src/Cache/Controller/CallbackController.php#L41), [6.0.0](https://github.com/joomla/joomla-cms/blob/6.0.0/libraries/src/Cache/Controller/CallbackController.php#L41)). This is source inspection of those tagged versions, not an installed Joomla runtime test.
- **Expected / tests:** Normalize or handle absent helper results without breaking populated results or cache behavior. Test excluded routes, missing tags, empty and populated results with and without caching and verify on isolated Joomla 5 and 6.
- **Documentation:** `module-redshop/similar.md`.

## CODE-143 — Giao Hang Nhanh fee request ignores cart quantities in weight

- **Priority / status:** P2 / OPEN; GitHub #196. Actual dynamic-rate handler tested with isolated cart, product and provider stubs; no real checkout or provider request was made.
- **Source / context:** `plugins/redshop_shipping/giaohangnhanh/giaohangnhanh.php:90-120` sums product weight once per cart row without using its `quantity`. `libraries/redshop/src/Helper/Cart.php:112,622` uses the cart row quantity. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In the dynamic-rate path, one cart row with a synthetic product weight of 2 supplied weight 2 to the stubbed fee calculation for both quantities 1 and 3. The plugin also sums weight once per order-item row for creation at `giaohangnhanh.php:522-529`, by source inspection only. Provider units, packing rules, actual requests and checkout remain unverified; rates or bookings may use understated weight.
- **Expected / tests:** Include item quantities in weight calculation according to provider and product-unit rules, and assess dimensions and order creation separately. Test quantities, multiple rows, variants, zero/missing weight and provider failures; verify actual checkout and shipment payloads with mocked provider on Joomla 5 and 6.
- **Documentation:** `plugin-redshop/redshop-giao.md`.

## CODE-142 — Giao Hang Nhanh delivered-status mapping uses a misspelled key

- **Priority / status:** P2 / OPEN; GitHub #195. Actual pre-store handler tested with a synthetic provider response and parameter stubs; the provider's real status spelling and event dispatch remain unverified.
- **Source / context:** The form defines the delivered mapping as `delevered` in `plugins/redshop_shipping/giaohangnhanh/giaohangnhanh.xml:120-125`, while `plugins/redshop_shipping/giaohangnhanh/giaohangnhanh.php:754-758,768-771` lowercases the provider's `CurrentStatus` and uses it directly as a parameter key. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In the actual pre-store handler with isolated stubs, synthetic `Delivered` mapped to null despite a configured `delevered` value; synthetic `Picking` and `Delevered` mapped to their supplied values. If the provider returns `Delivered`, its configured delivered status is missed; real responses, dispatch and persistence are unverified.
- **Expected / tests:** Verify actual provider status values and support the delivered mapping without losing existing saved `delevered` settings. Test both spellings, other statuses, missing responses, logging and the real isolated event path using mocked provider responses.
- **Documentation:** `plugin-redshop/redshop-giao.md`.

## CODE-141 — Giao Hang Nhanh shipment handler does not check the selected carrier

- **Priority / status:** P1 / OPEN; GitHub #194. Actual handler tested with isolated synthetic order and service stubs; no external request or real order was made.
- **Source / context:** `libraries/redshop/src/Helper/Order.php:266-283` imports shipping plugins and triggers `onSendOrderShipping` on an order-status path. `plugins/redshop_shipping/giaohangnhanh/giaohangnhanh.php:311-351` does not inspect the order's `ship_method_id` before attempting creation. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With matching status, paid synthetic orders, valid stubbed district and service data, and two different synthetic shipping-method field values, the actual handler called the stubbed shipment creation method for both. The values were not real encoded rate tokens. Orders using another method could reach this path when other conditions are met; actual dispatcher registration, rate data, provider behavior and persistence remain unverified.
- **Cancellation follow-up:** `giaohangnhanh.php:824-842` also calls cancellation without checking the order's shipping method. The actual handler invoked a stubbed cancellation for status `X` and synthetic tracking with either of two synthetic method values. The shared status event exists at `libraries/redshop/src/Helper/Order.php:266-274`; whether this shipping plugin is registered for that particular event in a real dispatch remains unverified. No provider request was made.
- **Expected / tests:** Check the selected shipping method using the supported rate representation before creating a shipment. Preserve legitimate Giao Hang Nhanh orders and explicitly handle missing or malformed rates. Test other carriers, Giao Hang Nhanh, missing data and both order-event paths with a mocked provider and isolated Joomla 5/6.
- **Documentation:** `plugin-redshop/redshop-giao.md`.

## CODE-140 — Giao Hang Nhanh shipment guard permits unexpected creation attempts

- **Priority / status:** P1 / OPEN; GitHub #193. The actual handler was exercised with isolated entity, provider and database stubs; no external request or real order was made.
- **Source / context:** `plugins/redshop_shipping/giaohangnhanh/giaohangnhanh.php:311-351` returns only when both the status differs from the configured creation status and a tracking number exists. The manifest's `order_status_to_create` field describes creation at the selected status. `libraries/redshop/src/Helper/Order.php:275-283,1918-1925` triggers the event on order updates. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With paid synthetic orders and valid stubbed service data, the actual handler called the stubbed creation method for a different status with no tracking number and for the configured status with an existing tracking number. Matching status with no tracking also called it; a different status with tracking did not. Unexpected or repeated external shipment requests may result when the remaining preconditions hold. Real dispatch, provider behavior and persistence remain unverified.
- **Expected / tests:** Confirm the intended order status and tracking policy; prevent unintended or repeated requests while preserving payment and shipping-method rules. Exercise all four status/tracking combinations, failure and retry paths, and an isolated Joomla 5/6 event flow with a mocked provider.
- **Documentation:** `plugin-redshop/redshop-giao.md`.

## CODE-139 — USPS rate handler counts a nullable address object

- **Priority / status:** P2 / OPEN; GitHub #192. The actual USPS handler was exercised with isolated helper and synthetic configuration stubs; no provider, database or Joomla checkout was used.
- **Source / context:** `libraries/redshop/src/Helper/Shipping.php:287-310` returns an address object or null. `plugins/redshop_shipping/uspsv4/uspsv4.php:242-265` calls `count()` on that result. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated fixture the actual handler raised PHP `TypeError` for both a populated object and null before reaching the provider. Actual checkout dispatch and impact are unverified.
- **Expected / tests:** Check the address type or presence without counting it, and handle missing addresses explicitly. Test object and null results, successful and failed provider responses, and a real isolated checkout on Joomla 5 and 6.
- **Documentation:** `shipping/shipping-methods.md`.

## CODE-138 — FedEx rate handler exits when billing information exists

- **Priority / status:** P2 / OPEN; GitHub #191. The actual handler was exercised with synthetic configuration and isolated address, billing and dimension helpers; no provider, database or Joomla checkout was used.
- **Source / context:** `plugins/redshop_shipping/fedex/fedex.php:144-172` loads shipping and billing information, then returns an empty rate list when the billing object is nonempty. The subsequent provider path uses billing fields. `libraries/redshop/src/Helper/User.php:348-397` can return a populated billing object. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a populated synthetic billing object and valid box dimensions, the actual handler returned an empty list before reaching provider lookup. Actual database results, service compatibility and checkout are unverified; available FedEx choices may be missing.
- **Expected / tests:** Establish intended billing prerequisites and handle populated and missing billing records correctly. Test both branches, valid and missing dimensions, provider failure and checkout on isolated Joomla 5 and 6 with approved mocked services.
- **Documentation:** `shipping/shipping-methods.md`.

## CODE-137 — Carrier diagnostic output requires private review

- **Priority / status:** P1 / OPEN; security hold. Source-level investigation only; runtime exposure and exploitability are unverified.
- **Source / context:** `plugins/redshop_shipping/ups/ups.php`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Expected / tests:** Review diagnostic access and data handling through an authorized private channel. Use synthetic data and an approved isolated environment only. No ordinary Issue has been created.
- **Documentation:** Applicable carrier integration guidance.

## CODE-136 — Shipping renderer reads an optional rate description unconditionally

- **Priority / status:** P3 / OPEN; GitHub #190. The actual self-pickup fallback and shipping renderer were exercised with isolated helpers and layout; Joomla checkout is unverified.
- **Source / context:** `libraries/redshop/src/Tags/Sections/Shippingmethod.php:211-231` reads `$rate->description` without checking it. The no-location fallback in `plugins/redshop_shipping/self_pickup/src/Extension/SelfPickup.php:66-90` does not set that property; the GLS, GLS Business and Shipper rate constructors also omit it in `plugins/redshop_shipping/default_shipping_gls/default_shipping_gls.php:296-333`, `plugins/redshop_shipping/default_shipping_glsbusiness/default_shipping_glsbusiness.php:50-81` and `plugins/redshop_shipping/shipper/shipper.php:80-86`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual fallback and renderer emitted an undefined-property warning with isolated helper, plugin-base and layout stubs. The GLS, GLS Business and Shipper cases are source-observed only. The fixture did not run a real checkout; user-visible effects depend on PHP and Joomla error handling.
- **Additional source observations:** The rate objects in `plugins/redshop_shipping/bring/bring.php:312-337`, `uspsv4/uspsv4.php:637-643`, `ups/ups.php:560-566`, `fedex/fedex.php:319-325`, `ahamove/ahamove.php:227-233` and `giaohangnhanh/giaohangnhanh.php:69-76,144-149` also omit `description`. These provider paths were not executed.
- **Shopper-group defaults:** The default-shipping and PostNord pickup plugins also omit the property for their shopper-group default rates in `plugins/redshop_shipping/default_shipping/src/Extension/DefaultShipping.php:42-65` and `plugins/redshop_shipping/postnord_pickuppoint/src/Extension/PostnordPickuppoint.php:70-94`. These branches are source-observed only.
- **Expected / tests:** Treat absent optional descriptions consistently and preserve valid descriptions. Test self-pickup with and without locations, GLS, GLS Business, Shipper and other plugins, including actual checkout rendering on isolated Joomla 5 and 6.
- **Documentation:** `plugin-redshop/self-pickup.md`, `plugin-redshop/gls-plugin.md`, `plugin-redshop/shipping-gls.md`, `plugin-redshop/shipper.md`, `plugin-redshop/post-danmark-plugin.md`.

## CODE-135 — GLS shipping-address handler encrypts an already encoded rate string

- **Priority / status:** P1 / OPEN; GitHub #189. The actual GLS handler and rate helper were tested with a representative string and isolated plugin base; no Joomla checkout, provider or database was used.
- **Source / context:** `component/site/src/Model/CheckoutModel.php:501,526,1242` assigns the pickup selection and shipping-rate token to the order object and triggers the shipping-store event. When `shop_id` is nonempty, `plugins/redshop_shipping/default_shipping_gls/default_shipping_gls.php:365-374` passes `ship_method_id` to `Rate::encrypt`; `libraries/redshop/src/Shipping/Rate.php:32-40` expects an array and calls `implode`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Calling the actual handler with a nonempty pickup selection and string rate token raised a PHP `TypeError` in the actual rate helper before address binding. The fixture did not dispatch an event or save an order. If this handler receives such an order during checkout, shipping-address storage may be interrupted; dispatch and effects on other pickup methods remain unverified.
- **Expected / tests:** Decode and validate the shipping token before comparing the method, and preserve behavior for unrelated plugins and empty selections. Exercise GLS and non-GLS pickup selections, malformed tokens, order persistence and failure handling on isolated Joomla 5 and 6 with mocked integrations.
- **Documentation:** `plugin-redshop/gls-plugin.md`, `plugin-redshop/gls-update.md`.

## CODE-134 — GLS pickup lookup continues after SOAP client initialization fails

- **Priority / status:** P2 / OPEN; GitHub #188. The actual lookup method was tested after simulated client-initialization failure; real SOAP, provider and Joomla checkout are unverified.
- **Source / context:** `plugins/redshop_shipping/default_shipping_gls/default_shipping_gls.php:145-155` catches connection initialization exceptions and sets an error flag. The lookup at `:168-198` checks the flag before initialization but continues to call the client immediately afterward; its catch handles `Exception`, not PHP `Error`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated fixture the actual lookup raised `Error` when an overridden initialization simulated failure and left the client unset. No network request was made. A provider connection failure may interrupt the location flow rather than returning a controlled failure; actual checkout behavior remains unverified.
- **Expected / tests:** Stop lookup and surface a controlled error after initialization failure. Test connection failure, successful lookup, provider exceptions and repeated calls without live requests, then verify on isolated Joomla 5 and 6 with authorized provider test facilities.
- **Documentation:** `plugin-redshop/gls-plugin.md`.

## CODE-133 — Wrapping price and publication headings fall back to ID sorting

- **Priority / status:** P3 / OPEN; GitHub #187. Actual wrapper and shared model state methods were tested with isolated stubs; the Joomla UI and database ordering remain unverified.
- **Source / context:** `component/admin/forms/wrapper.xml:20-27,70-78` marks price and published sortable, but `component/admin/src/Model/WrappersModel.php:32-42` omits both from its filter allowlist. The shared list model validates ordering at `libraries/redshop/src/Model/ListModelRedshop.php:569-579`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Actual model state methods with isolated application and model dependencies mapped price and published ordering to `w.id`; name remained name. Administrators may be unable to sort using the advertised headings. No database or browser was tested.
- **Expected / tests:** Align the wrapper allowlist with the displayed sortable fields or remove unsupported sort controls. Test price, publication, name, ID, unknown fields and both directions, including isolated Joomla 5 and 6 list behavior.
- **Documentation:** `shipping/wrappings.md`.

## CODE-132 — Shipping-box renderer omits the first box after each priority change

- **Priority / status:** P2 / OPEN; GitHub #186. The actual shipping-box tag renderer was exercised with isolated helper and layout stubs; intended priority semantics and actual checkout remain unverified.
- **Source / context:** `libraries/redshop/src/Helper/Shipping.php:1146-1183` orders matching published boxes by ascending priority. `libraries/redshop/src/Tags/Sections/Shippingbox.php:45-70` renders the first result and each later result only when its priority equals the immediately preceding result. A legacy renderer repeats this comparison in `libraries/redshop/src/Shipping/Tag.php:538-558`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With ordered priorities 1, 2, 2, the actual tag renderer rendered the first and third entries but omitted the second. Inputs 1, 1, 2 rendered the first two; 1, 2, 3 rendered only the first. The fixture supplied box rows and stubbed layout output; it did not test the actual query, UI, checkout or carrier.
- **Expected / tests:** Establish the intended behavior for distinct and tied priorities, then apply it consistently. Test singleton, distinct, repeated and unsorted priorities, posted selection and visibility with real templates and carrier methods on isolated Joomla 5 and 6.
- **Documentation:** `shipping/shipping-boxs.md`.

## CODE-131 — Pickup location save reads fields omitted by the location editor

- **Priority / status:** P3 / OPEN; GitHub #185. Actual controller and model save methods were exercised with isolated input and table stubs; a real Joomla request and database save are unverified.
- **Source / context:** The location branch of `component/admin/tmpl/shippingrate/edit.php:52-128` omits rate-only product and range fields. The shared `ShippingrateController::save` reads the missing product fields at `component/admin/src/Controller/ShippingrateController.php:57-63`; `ShippingrateModel::store` reads the missing order-total and postal ranges at `component/admin/src/Model/ShippingrateModel.php:111-116`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a representative location submission and isolated dependencies, the actual methods emitted undefined-key warnings for both product fields and four range fields, and PHP 8.4 deprecations for passing null to `explode`. The fixture's table stub reported success; no real persistence, user-visible warning, or save failure was established. Error handling and future PHP compatibility require verification.
- **Expected / tests:** Handle fields absent from location submissions explicitly without changing rate validation. Test create and edit with selected and empty country/state values, warnings enabled, and actual persistence on isolated Joomla 5 and 6; test ordinary rate saves as a regression.
- **Documentation:** `plugin-redshop/self-pickup.md`.

## CODE-130 — Shipping-rate and pickup-location Delete toolbar has mismatched task and selection

- **Priority / status:** P2 / OPEN; GitHub #184; the actual Joomla grid helper and shipping-rate controller class were checked with isolated dependencies; real Joomla dispatch and deletion are unverified.
- **Source / context:** `component/admin/src/View/Shippingrates/HtmlView.php:76-78` sends `shippingrate.delete`, but `ShippingrateController` defines `remove`, not `delete`, and registers no delete alias. `component/admin/tmpl/shippingrates/default.php:87-88` renders Joomla's default grid selection as `cid[]`, while the remove handler reads `id`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The installed Joomla grid helper emitted `cid[]` in an isolated fixture; the actual shipping-rate controller has `remove` but no `delete` method when checked against a base-controller stub. The checked Joomla base controller has no delete method. Selecting a rate or pickup location and using Delete may not reach the intended handler or pass the selected record. No actual UI, dispatch, deletion or database was tested.
- **Expected / tests:** Align the toolbar task and selected-ID contract while retaining authorization and CSRF protections. Test no selection, one and several selected records and unrelated records on isolated Joomla 5 and 6.
- **Documentation:** `shipping/shipping-methods.md`, `plugin-redshop/self-pickup.md`.

## CODE-129 — Shared deletion boundary requires private review

- **Priority / status:** P1 / OPEN; security hold. An isolated shared-table fixture was run; actual Joomla, database behavior and exploitability are unverified.
- **Source / context:** `libraries/redshop/src/Table/TableRedshop.php`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Expected / tests:** Review deletion scope and authorization through an authorized private channel; test only with disposable records in an approved isolated environment. No public Issue has been created.
- **Documentation:** Applicable administrator deletion workflows.

## CODE-128 — Manufacturer email, publication and description headings fall back to ID sorting

- **Priority / status:** P3 / OPEN; GitHub #183; actual manufacturer and shared list model state methods were tested with isolated stubs; Joomla UI and database ordering are unverified.
- **Source / context:** `component/admin/forms/manufacturer.xml:49-57,75-96` marks email, published and description sortable, but `component/admin/src/Model/ManufacturersModel.php:33-51` omits them from the ordering allowlist. The shared list layout renders the requested sort controls. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated model fixture the three requested headings fell back to `m.id`; name ordering remained unchanged as a control. Administrators may be unable to sort by the advertised columns. This is a different model and fields from CODE-120 and CODE-126.
- **Expected / tests:** Allow validated ordering for the advertised fields or remove the unsupported controls. Test both directions, allowed and unknown fields and actual list behavior on isolated Joomla 5 and 6.
- **Documentation:** `product-management/redshop-manufacturers.md`.

## CODE-127 — Shared copy infers a controller instead of the source table

- **Priority / status:** P2 / OPEN; GitHub #182; actual copy and table-inference methods for all five configured models were exercised with isolated table, controller and factory stubs; real Joomla dispatch and database are unverified.
- **Source / context:** `libraries/redshop/src/Model/FormModelRedshop.php:269-309,353-358` copies a record and asks `TableHelper::getTable` for an empty table name while generating a unique name. `libraries/redshop/src/Helper/TableHelper.php:172-217` skips the generic form model in its backtrace and can infer the calling `AdminControllerRedshop` as `AdminController`. Field groups, manufacturers, suppliers, text records and templates configure unique copy names and inherit this copy method. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual inherited copy and table helper requested `AdminController` in fixtures for field groups, manufacturers, suppliers, text records and templates, each with a controller-shaped caller; the stub MVC factory rejected that table and each copy threw before storing. The controller catches the exception and enqueues a warning. A real request, database and installed extensions were not tested.
- **Expected / tests:** Resolve the actual source table explicitly while retaining unique-name generation and unpublished copies. Test all affected model types, collisions, successful and partial batch copies, associations and failure handling on isolated Joomla 5 and 6.
- **Documentation:** `customization/custom.md`, `customization/template.md`, `product-management/redshop-manufacturers.md`, `product-management/supplier-product.md`.

## CODE-126 — Field-group publication heading falls back to name sorting

- **Priority / status:** P3 / OPEN; GitHub #181; actual field-group and shared list model state methods were tested with isolated stubs; actual Joomla UI and database ordering are unverified.
- **Source / context:** `component/admin/forms/fieldgroup.xml:33-41` declares the publication field sortable, and the shared list layout renders a sort control. `component/admin/src/Model/FieldgroupsModel.php:35-42` omits `published` from its ordering allowlist. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated model fixture the requested `published` ordering fell back to `name`; `name` remained unchanged as a control. Administrators may be unable to sort groups by publication status. This affects a different model and field from CODE-120's country headings.
- **Expected / tests:** Allow validated publication ordering or remove the unsupported sort control; test ascending and descending publication, name, ID and unknown fields and verify the list on isolated Joomla 5 and 6.
- **Documentation:** `customization/custom.md`.

## CODE-125 — Field-group selector state is overwritten before loading options

- **Priority / status:** P2 / OPEN; GitHub #180; actual list-model state methods and the installed Joomla state trait were exercised with isolated stubs; actual AJAX, UI and database are unverified.
- **Source / context:** `component/admin/src/Controller/FieldgroupsController.php:38-47` sets a section and limit before `getItems`; `libraries/redshop/src/Form/Field/FieldsgroupsField.php:45-48` similarly sets the limit for the initial selector. `FieldgroupsModel::populateState` reads `filter_section` and its shared parent populates list limits on the first `getState`. The controller receives `section` instead. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated model fixture using the installed Joomla lazy-state trait and a default list limit of 20, requested section 17 became null and requested limit 99 became 20 at first `getState`. The selector may list groups from another section or omit groups, depending on saved list state and pagination. Actual response, selection and persistence are unverified.
- **Expected / tests:** Initialize and then set explicit section and limit or otherwise isolate option-query state; show the correct section's selectable groups and preserve existing assignments. Test default and persisted list states, multiple sections, pagination and existing selections on isolated Joomla 5 and 6.
- **Documentation:** `customization/custom.md`, `customization/redshop.md`.

## CODE-124 — Postal-code editor does not refresh states after changing country

- **Priority / status:** P2 / OPEN; GitHub #179; the actual country-change handler was executed in an isolated JavaScript VM; actual Joomla UI and database persistence are unverified.
- **Source / context:** `component/admin/forms/zipcode.xml:19-43` invokes `getState2Code` on country changes. Its body in `component/admin/tmpl/zipcode/edit.php:19-39` is entirely commented out. `libraries/redshop/src/Form/Field/Rstate2codeField.php:42-52` builds state options from the form's country at render time. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** Calling the actual handler in an isolated VM made no DOM or AJAX calls. Changing country cannot refresh the state choices through that handler, potentially leaving missing or mismatched options. The actual browser form, saved associations and any external customizations were not tested. This differs from CODE-067's list filtering.
- **Expected / tests:** Refresh state choices for the selected country, clear invalid previous selections and preserve valid optional selections. Test new and existing records, countries with and without states and rapid changes on isolated Joomla 5 and 6.
- **Documentation:** `customization/zip-code.md`.

## CODE-123 — Editing a postal code reads an omitted range endpoint

- **Priority / status:** P3 / OPEN; GitHub #178; the actual model was exercised with isolated table and parent-save stubs; a real Joomla request and database save are unverified.
- **Source / context:** `component/admin/src/View/Zipcode/HtmlView.php:39-43` suppresses `zipcodeto` for an existing ID; `libraries/redshop/src/View/AbstractViewFormRedshop.php:182-186` skips suppressed fields. The shared form controller filters submitted data before saving, while `component/admin/src/Model/ZipcodeModel.php:40-45` reads the missing key twice. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** An edit-shaped array without `zipcodeto` produced two undefined-array-key warnings and one successful stubbed parent save. Warning visibility and whether an error handler interrupts saving depend on the environment. This is separate from CODE-008's ignored parent-save failure and CODE-089's duplicate lookup.
- **Expected / tests:** Treat an omitted endpoint as a single-code edit without warnings; preserve new-range validation and duplicate handling. Test missing and empty endpoints and existing/new records; verify actual edit and save on isolated Joomla 5 and 6 with warning reporting enabled.
- **Documentation:** `customization/zip-code.md`.

## CODE-122 — Shopper-group logo upload failure is ignored when saving

- **Priority / status:** P2 / OPEN; GitHub #177; the actual shopper-group table was tested with isolated upload and parent-store stubs; filesystem, database and Joomla UI are unverified.
- **Source / context:** `component/admin/src/Table/ShoppergroupTable.php:45-53,59-91` calls `storeImage`, ignores the upload return, assigns the filename and then invokes parent store. It also deletes an existing logo before replacement when a matching file exists. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With the upload stub returning false and parent store stub returning true, the actual table returned success and assigned the requested logo filename. A group can reference a logo that was not uploaded; replacement may also endanger the previous file. No real file, database or Joomla request was changed or tested. This is separate code from CODE-110 / #166's wrapping image handling.
- **Expected / tests:** Surface upload failures and preserve existing files until a replacement is safely stored. Test accepted and unsupported formats, success, failure and database failure with temporary files and isolated Joomla 5 and 6.
- **Documentation:** `users/shopper-groups.md`.

## CODE-121 — State and shopper-group administrator views use a mismatched namespace

- **Priority / status:** P1 / OPEN; GitHub #176; the actual base controller and four actual view classes were exercised with an isolated Joomla-style factory stub; installed Joomla dispatch and upgrade state are unverified.
- **Source / context:** `component/admin/services/provider.php:36` configures `Redshop\Component` as MVC namespace. `libraries/redshop/src/Controller/BaseControllerRedshop.php:190-220` resolves modern views under `Redshop\Component\Administrator\View`. The actual state and shopper-group list and detail classes instead declare `Redshop\Component\Redshop\Administrator\View` (`component/admin/src/View/State/HtmlView.php:10`, `States/HtmlView.php:10`, `Shoppergroup/HtmlView.php:11`, `Shoppergroups/HtmlView.php:11`). Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With no legacy view files and a factory stub following the configured Joomla namespace, the actual controller returned view-not-found errors for all four views; an actual Country view succeeded as a control. State and shopper-group management may be unavailable. Actual Joomla routing, installed upgrades and any external overrides were not tested.
- **Expected / tests:** Align all four view namespaces with the registered MVC namespace and preserve their list and form behavior. Test list and create/edit view resolution, models, permissions and templates on isolated Joomla 5 and 6, including a clean installation and an upgrade.
- **Documentation:** `customization/states.md`, `users/shopper-groups.md`.

## CODE-120 — Country prefix and flag headings fall back to name sorting

- **Priority / status:** P3 / OPEN; GitHub #175; actual country and shared list model state methods tested with isolated application and base-model stubs; Joomla UI and database unverified.
- **Source / context:** `component/admin/forms/country.xml:53-75` marks phone prefix and flag code sortable, and `libraries/redshop/src/Layouts/Admin/View/List.php:231-243` renders sortable headings. `component/admin/src/Model/CountriesModel.php:34-47` omits both fields from the allowlist. `libraries/redshop/src/Model/ListModelRedshop.php:573-579` falls back to the default ordering when an unlisted heading is requested. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated fixture using the actual models, requesting `phone_prefix` or `country_flag_code` set the ordering to `country_name`; a `country_name` request stayed intact. The UI offers headings that do not order by their displayed values. Joomla request handling and database sorting were not tested.
- **Expected / tests:** Allow these known sortable fields or stop advertising unsupported sorting. Test both columns and the existing headings in each direction on isolated Joomla 5 and 6.
- **Documentation:** `customization/countries.md`.

## CODE-119 — Newsletter confirmation association requires private review

- **Priority / status:** P1 / OPEN; security hold; source-level investigation only.
- **Source / context:** `libraries/redshop/src/Helper/Newsletter.php`; `libraries/redshop/src/Mail/Newsletter.php`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Investigation:** Review confirmation association and recipient selection through an authorized private security process. Actual runtime behavior, impact and exploitability are not established.
- **Tests / direction:** Privately verify confirmation behavior with disposable subscribers and a mail sink, then determine whether a separate nonsensitive functionality tracker is appropriate. No actual Joomla runtime, database or mail was used.
- **Documentation:** `communication/newletters-subcribers.md`.

## CODE-118 — Guest subscriber list name can come from an unrelated billing record

- **Priority / status:** P2 / OPEN; GitHub #174; the actual list renderer and name helper were exercised with isolated query and database stubs; real database, Joomla UI and delivery are unverified.
- **Source / context:** The guest signup controller passes its form data to `Newsletter::subscribe` (`component/site/src/Controller/NewsletterController.php:47-52`); `libraries/redshop/src/Helper/Newsletter.php:127-175` uses the current guest's zero user ID and stores the submitted name and email. `component/admin/src/View/Newslettersubscriptions/HtmlView.php:36-48` displays the result of `NewsletterSubscription::getUserFullName($row->user_id)` rather than the stored subscription name. `libraries/redshop/src/Entity/NewsletterSubscription.php:36-62` first queries billing information by that user ID. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a guest subscriber ID of zero and a stubbed billing row for a different guest, the actual helper queried `user_id = 0` and the actual list displayed the stubbed billing name instead of the subscription's name. Other guest billing rows can also have zero user ID; actual database selection, missing-row handling and the Joomla UI remain unverified. Administrators may see a misleading subscriber name.
- **Expected / tests:** Resolve guest subscriptions without associating arbitrary zero-ID billing records; preserve the stored name where an identified user is unavailable. Test multiple guests, registered users, missing billing records and selection/editing on isolated Joomla 5 and 6.
- **Documentation:** `communication/newletters-subcribers.md`.

## CODE-117 — Answer send reports success when no email is sent

- **Priority / status:** P2 / OPEN; GitHub #173; the actual send controller and mail helper were exercised with an isolated missing-template stub; Joomla, SMTP and delivery are unverified.
- **Source / context:** `component/admin/src/Controller/QuestionController.php:157-167` ignores the return from `AskQuestion::sendMail` for each selected answer and always sets the sent message. `libraries/redshop/src/Mail/AskQuestion.php:34-41` returns false when the mail template is missing, and lines 103-114 return the mail operation's result. The editor's Send button submits the selected answers (`component/admin/tmpl/question/edit.php:29-35,123-169`). Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a missing-template stub, the actual mail helper returned false and the actual controller still reported `COM_REDSHOP_ANSWER_MAIL_SENT`. An administrator can believe an answer was sent when it was not. No actual mail, Joomla request or delivery was tested. This differs from CODE-034 / #103, which concerns saving a question.
- **Expected / tests:** Report failed or partially failed sends accurately without retrying already sent messages unexpectedly. Test successful, failed and mixed selections and a missing template; verify messages and receipt using a mail sink on isolated Joomla 5 and 6.
- **Documentation:** `customer-input/questions.md`.

## CODE-116 — Zero review timestamps display the current date

- **Priority / status:** P2 / OPEN; GitHub #172; the actual rating views and date helper were exercised with isolated stubs; administrator save, database and storefront remain unverified.
- **Source / context:** `component/admin/src/View/Rating/HtmlView.php:32-35` suppresses the editor's `time` field. `component/admin/src/Controller/RatingController.php:43-174` does not itself assign a review timestamp; `RatingModel` and `RatingTable` add no timestamp logic. The install schema `component/admin/sql/install/mysql/install.sql:1673-1681` declares `time` with default zero. `component/admin/src/View/Ratings/HtmlView.php:40-41` and `libraries/redshop/src/Tags/Sections/Review.php:210` and `Reviews.php:178` format it through `libraries/redshop/src/Helper/Datetime.php:66-75`, which substitutes the current time for zero. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual editor view omitted the timestamp field; the actual list renderer displayed today's date for a zero timestamp and retained the date for a positive timestamp, using an isolated config stub. Consequently, records with zero time appear newly dated each day. Whether a normal administrator-created review actually persists zero depends on the Joomla save path, database and event handlers and has not been tested.
- **Expected / tests:** Preserve an accurate creation date when creating reviews and represent unknown dates without inventing a current date. Test zero and positive values and admin creation/editing, including hooks and existing records; verify saved and storefront dates on isolated Joomla 5 and 6.
- **Documentation:** `customer-input/rating-review.md`.

## CODE-115 — Question validation overwrites an existing question date

- **Priority / status:** P2 / OPEN; GitHub #171; actual table validation tested with an isolated parent stub; Joomla save, database and storefront unverified.
- **Source / context:** `component/admin/src/Table/QuestionTable.php:36-46` replaces `question_date` when it is set or empty, covering both existing and missing values. `libraries/redshop/src/Table/Traits/HasAutoEvents.php:505-515` invokes table `doCheck`; `libraries/redshop/src/Tags/Sections/Product.php:2105-2108,2118-2122` uses the timestamp for question and answer dates. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With an existing timestamp and successful parent-validation stub, actual `doCheck` replaced it with the current time. A later save may change the displayed original question or answer date. No database save, Joomla or storefront was tested.
- **Expected / tests:** Initialize missing dates without changing existing timestamps on edits. Test new and existing questions and answers, plus failed validation and storefront tags on isolated Joomla 5 and 6.
- **Documentation:** `customer-input/questions.md`.

## CODE-114 — Newsletter preview fields do not match the bulk-send request

- **Priority / status:** P1 / OPEN; GitHub #170; actual preview and controller exercised separately with isolated stubs; full Joomla form submission and mail delivery unverified.
- **Source / context:** `component/admin/tmpl/newsletters/preview.php:64-126` renders recipient checkboxes using the default `grid.id` name. Joomla 5.4.0 and 6.0.0 `Grid::id` default to `cid[]` ([Joomla 5.4.0](https://github.com/joomla/joomla-cms/blob/5.4.0/libraries/src/HTML/Helpers/Grid.php), [Joomla 6.0.0](https://github.com/joomla/joomla-cms/blob/6.0.0/libraries/src/HTML/Helpers/Grid.php)). `component/admin/src/Controller/NewslettersController.php:41-59` reads `id`, `userid` and `username` arrays. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an actual preview-template fixture with a Joomla-grid stub matching that default, a selected recipient was represented by `cid[]` and no `id[]`, `userid[]` or `username[]` fields were emitted. Calling the actual send controller with that simulated submission queued `[0]` for each array. No real email, browser submission or Joomla dispatch was used. This is separate from CODE-113's controller routing and CODE-112's progress indexing.
- **Expected / tests:** Supply and validate the selected recipient identities and required associated data consistently. Test one and multiple selected records, filters, empty selection and chunk boundaries; verify a complete send with disposable subscribers and a mail sink on isolated Joomla 5 and 6.
- **Documentation:** `communication/newletters.md`.

## CODE-113 — Newsletter preview send action targets the wrong controller

- **Priority / status:** P1 / OPEN; GitHub #169; actual task normalization tested with isolated stubs; full Joomla toolbar and dispatch unverified.
- **Source / context:** `component/admin/src/View/Newsletters/HtmlView.php:184-190` assigns `newsletter.sendNewsletter` to the preview toolbar. `component/admin/src/Dispatcher/Dispatcher.php:121-157` normalizes this to the singular controller, while the send method is declared in `component/admin/src/Controller/NewslettersController.php:41-60`, not `NewsletterController`. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The actual normalization method returned controller `newsletter` and task `sendNewsletter` in isolated stubs. The singular controller has no such declared method; the plural controller does. The preview action may fail to start a bulk send. Joomla dispatch, inherited framework behavior and real email were not tested.
- **Expected / tests:** Route the preview action to the correct controller without changing the subscriber selection or chunking contract. Exercise toolbar task dispatch and sending with a mail sink on isolated Joomla 5 and 6; check permissions and CSRF separately.
- **Documentation:** `communication/newletters.md`.

## CODE-112 — Newsletter send progress indexes single-recipient results by global count

- **Priority / status:** P2 / OPEN; GitHub #168; actual controller tested with isolated session, model and mail stubs; Joomla and real delivery unverified.
- **Source / context:** `component/admin/src/Controller/NewslettersController.php:77-130` indexes each returned subscriber by `$incNo - 1`; `component/admin/src/Model/NewslettersModel.php:619-631` looks up a single subscription ID. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** In an isolated controller fixture with recipient chunks `[1,2]` and `[3]`, each lookup returned one stub record. The first progress row displayed its address; rows two and three omitted their names and addresses and emitted undefined-index warnings. The sender was stubbed and no mail was sent. Warning handling and resulting progress or retry behavior in Joomla are unverified.
- **Expected / tests:** Show the matching recipient and send result for every row and chunk. Exercise one and multiple recipients, chunk boundaries, missing records, warnings-as-errors and failure reporting using a mail sink on isolated Joomla 5 and 6.
- **Documentation:** `communication/newletters.md`.

## CODE-111 — Product back-image editor renders an empty thumbnail URL

- **Priority / status:** P2 / OPEN; GitHub #167; actual layout rendered with isolated image and configuration stubs; Joomla UI and image persistence unverified.
- **Source / context:** `component/admin/tmpl/product/edit_general_data.php:453-462` uses `Admin.Image` without the inline option. `libraries/redshop/src/Layouts/Admin/Image.php:30-53,87-110` assigns `$thumbUrl` only in the inline branch but uses it in the non-inline branch when an image exists. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a stub-resolved existing file, the actual non-inline layout emitted an empty image `src` and an undefined-variable warning. An inline fixture emitted the stub thumbnail URL without warnings. The editor may not show the saved back image; real Joomla, browser rendering and saved media were not tested.
- **Expected / tests:** Resolve the thumbnail in both layout branches, including missing images, inline controls and other consumers. Verify the product back-image editor and storefront separately on isolated Joomla 5 and 6.
- **Documentation:** `product-management/products-redshop.md`.

## CODE-110 — Wrapping image upload failure is ignored when saving

- **Priority / status:** P2 / OPEN; GitHub #166; actual table method tested with isolated stubs; filesystem, database and Joomla UI unverified.
- **Source / context:** `component/admin/src/Table/WrapperTable.php:65-125` calls `File::upload` without checking its return and then assigns the filename before calling the parent store. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a `sample.png` upload, a false-returning upload stub and a successful parent-store stub, the actual method returned true and assigned `sample.png`. A saved wrapping may reference an image that was not uploaded. No real upload, database or Joomla request was tested.
- **Expected / tests:** Report failed uploads rather than storing a success-shaped result; preserve any previous image, and test successful uploads, rejected extensions, replacement and database failure. Verify with disposable records on isolated Joomla 5 and 6.
- **Documentation:** `shipping/wrappings.md`.

## CODE-109 — Wrapping all-products toggle can change a previously selected row

- **Priority / status:** P2 / OPEN; GitHub #165; isolated actual grid script and model exercised separately; Joomla UI and database unverified.
- **Source / context:** `src/assets/com_redshop/js/redshop.grid.js:16-40` submits checked row IDs plus the clicked row ID; `libraries/redshop/src/Layouts/Admin/View/List.php:302` renders the row checkboxes; `component/admin/src/View/Wrappers/HtmlView.php:48-49` supplies the inline action; `component/admin/src/Model/WrappersModel.php:191-205` converts the comma-joined IDs to a single integer. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With row 11 already checked and the action clicked on row 22, the actual grid script with DOM stubs submitted IDs 11 and 22; the actual model with a query stub generated `id = '11'`. The previously selected wrapper can be changed instead of the clicked wrapper. No browser form submission or database update was tested.
- **Expected / tests:** Inline actions should target only the clicked row regardless of existing selections. Test both directions, multiple preselected rows and existing bulk actions; verify persisted results on isolated Joomla 5 and 6.
- **Documentation:** `shipping/wrappings.md`.

## CODE-108 — Wrapping list search requires private review

- **Priority / status:** P1 / OPEN; security hold; source-level investigation only; runtime and exploitability unverified.
- **Source / context:** `component/admin/src/Model/WrappersModel.php`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Next step:** Privately review search handling and applicable protections in an authorized isolated environment with disposable records.
- **Documentation:** `shipping/wrappings.md`.

## CODE-107 — Wrapper selector stores VAT-inclusive amount in its net-price input

- **Priority / status:** P2 / OPEN; GitHub #164; actual renderer and selector tested separately with isolated stubs; Joomla storefront and checkout unverified.
- **Source / context:** `libraries/redshop/src/Tags/Sections/Wrapper.php:102-110,201-230` sets `w_price_withoutvat` to the gross amount; `src/assets/com_redshop/js/redshop.attribute.js:966-977,1638-1663` reads and applies that input. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** With a wrapper price of 10 and stubbed VAT of 2, the actual renderer emitted 12 for both gross and net hidden fields. The actual JavaScript selector separately propagated the supplied 12 as the net value with DOM and integration stubs. A template containing `{without_vat}` produced 10 for both in the renderer fixture. A displayed product price without VAT may include wrapping VAT; tax integration, real browser rendering and checkout were not tested.
- **Expected / tests:** Preserve distinct net and gross values, zero-tax behavior, template variants and quantity handling. Verify product display and checkout independently with disposable products on Joomla 5/6.
- **Documentation:** `shipping/wrappings.md`.

## CODE-106 — New product payment selection requires private review

- **Priority / status:** P2 / OPEN; security hold; actual helper exercised with isolated stubs; Joomla runtime and exploitability unverified.
- **Source / context:** `libraries/redshop/src/Helper/Payment.php`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Next step:** Privately review product-specific payment selection with disposable records and mocked or offline methods. Do not publish sensitive details or infer checkout behavior from the isolated helper.
- **Documentation:** `product-management/products-redshop.md`.

## CODE-105 — Free-shipping message skips postal filtering for alphanumeric destinations

- **Priority / status:** P2 / OPEN; GitHub #163; actual helper with isolated query/rate stubs; database and Joomla unverified.
- **Source / context:** `libraries/redshop/src/Shipping/Rate.php:235-377` filters postal bounds only for numeric destinations, while `libraries/redshop/src/Helper/Shipping.php:771-856` adds a SQL postal predicate for ASCII letters, digits and spaces too. The promotional module calls the first helper. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** An isolated invocation captured a postal predicate for `9999` but none for `SW1A 1AA`. With a stub returning a free rate when that predicate was absent, the helper returned the in-use message. This demonstrates the helper's decision with simulated database results, not actual database selection or checkout. A message may describe a rate that is not eligible for the destination.
- **Expected / tests:** Compare message eligibility with actual rate selection for numeric, letter-bearing, unrestricted and empty boundaries, with country normalization and shopper groups. Use real database fixtures and disposable Joomla 5/6 checkouts; distinguish promotional text from final shipping calculation.
- **Documentation:** `module-redshop/free-shipping.md`.

## CODE-104 — Cart shipping calculator builds a query with duplicate AND

- **Priority / status:** P2 / OPEN; GitHub #162; isolated actual query generation and SQLite syntax check; MySQL and Joomla unverified.
- **Source / context:** `libraries/redshop/src/Shipping/Rate.php:501-548`, called by `libraries/redshop/src/Cart/Ajax.php:99-103` and the shipping calculator template; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** The unconditional `AND` after the shipping-plugin predicate is followed by a country clause beginning with `AND`, or by the next unconditional `AND` when country is absent. The actual method with isolated dependencies generated consecutive `AND` tokens for empty, numeric and alphanumeric destination fixtures; an in-memory SQLite parser rejected all three. No real MySQL or Joomla checkout was tested. The calculator in templates using this path may not update the displayed shipping and total.
- **Additional syntax check:** After removing only the first duplicate conjunction in the captured query, SQLite still reported a syntax error near `ORDER` for all three fixtures, consistent with the unclosed order-total predicate. This is not a MySQL execution or a Core change.
- **Expected / tests:** Build valid SQL and preserve address, cart, dimension and product filtering and the response contract. Execute complete query scenarios against supported MySQL, and verify calculator and checkout separately with disposable carts on isolated Joomla 5/6.
- **Documentation:** `global-configuration/cart.md`.

## CODE-103 — Shipping rate editor uses numeric inputs for textual postal boundaries

- **Priority / status:** P2 / OPEN; GitHub #161; source and representative browser fixture checked; Joomla UI and database unverified.
- **Source / context:** `component/admin/tmpl/shippingrate/edit.php:374-391` uses `type="number"` for both boundaries, while `component/admin/sql/install/mysql/install.sql:2108-2109` defines `VARCHAR` columns. `libraries/redshop/src/Helper/Shipping.php:771-856` includes ASCII letters in postal SQL filtering. Revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual / impact:** An isolated browser number-input fixture initialized with `SW1A 1AA` returned an empty value. The shared editor cannot reliably represent alphanumeric boundaries; saving an existing value needs separate Joomla verification.
- **Expected / tests:** Allow supported postal strings with clearly defined range semantics. Test alphanumeric and numeric values, leading zeroes, unrestricted rates, saved existing values, country normalization and matching/nonmatching rates in isolated Joomla 5/6. The representative fixture was not the actual Joomla editor or checkout.
- **Documentation:** `shipping/shipping-methods.md`.

## CODE-006 — Manufacturer media cleanup in medium.remove can delete unrelated sections sharing its section ID; reproduce in isolation

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-006` / component / media.
- **Source / context:** `component/admin/src/Model/MediumModel.php:197`; `MediumModel::delete`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Controller/MediumController.php:1048-1063; redSHOP-rmh/component/admin/src/Model/MediumModel.php:175-203
- **Excerpt:** `$db->getQuery(true) ->delete($db->quoteName('#__redshop_media')) ->where('section_id IN (' . (int) $mediadata->section_id . ')')`
- **Problem / actual:** Manufacturer media cleanup in medium.remove can delete unrelated sections sharing its section ID; reproduce in isolation Manufacturer media cleanup in medium.remove can delete unrelated sections sharing its section ID; reproduce in isolation
- **Expected:** Restrict manufacturer cleanup to its intended section and review shared-file deletion and transaction boundaries.
- **Proposed direction:** Restrict manufacturer cleanup to its intended section and review shared-file deletion and transaction boundaries.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Create matching IDs across sections and verify only intended records/files change and failures roll back.
- **Manual tests:** Test removal and restoration only with disposable media and a verified backup.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** media/working-medias.md (under `manual/en-US/chapters/`).

## AUD-003-009 — Investigate parallel publication and unsafe storage or path conditions

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `AUD-003-009` / docs / security.
- **Source / context:** `docs/redshop-audit-findings.md:76`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:76
- **Excerpt:** `| AUD-003-009 | High | Storage | Parallel publication and unsafe storage/path conditions need stronger guarantees. | Open | | AUD-003-010 | High | Update delivery | Legacy transition Update XML is generated but not included in the publication workflow. | Open | | AUD-003-011 | High | Licensing | Subscription and license revoke/reactivate operations`
- **Problem / actual:** Investigate parallel publication and unsafe storage or path conditions Source anchor or existing review question only; actual failure is not established.
- **Expected:** Reassess publication locking and path boundaries with current storage and authorization code before changes.
- **Proposed direction:** Reassess publication locking and path boundaries with current storage and authorization code before changes.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** getting-started-general/updating-redshop.md (under `manual/en-US/chapters/`).

## DIST-23 — Revalidate partially addressed Marketplace SDK advisories and provider/authentication holds across listed integrations

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `DIST-23` / docs / security.
- **Source / context:** `docs/redshop-audit-findings.md:34`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:34-51; redSHOP-rmh/docs/codex-progress.md:35-44
- **Excerpt:** `| DIST-23 | Review2.0 | redSHOP / Marketplace Composer integrations | Security advisories, abandoned SDKs and source/lock API mismatches can ship (P0/P1) | PARTIAL; schema-v2 publication holds retained | Four targeted lock updates and five runtime changes. See integration evidence below. | Local PHP and mock evidence is recorded below. Provider and`
- **Problem / actual:** Revalidate partially addressed Marketplace SDK advisories and provider/authentication holds across listed integrations Source anchor or existing review question only; actual failure is not established.
- **Expected:** Revalidate each named extension and dependency against current locks and holds; follow the source audit table rather than assuming old advisories persist.
- **Proposed direction:** Revalidate each named extension and dependency against current locks and holds; follow the source audit table rather than assuming old advisories persist.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/flatpay.md (under `manual/en-US/chapters/`).

## CODE-032 — Wizard welcome attempts to overwrite active configuration with distributed defaults and ignores copy result

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Security/data/payment risk; full impact or exploitability unverified.
- **Original review / component:** `CODE-032` / libraries / install.
- **Source / context:** `libraries/redshop/src/Helper/WizardTemplate.php:152`; `WizardTemplate::renderLayout`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Helper/WizardTemplate.php:68,147-149; component/admin/src/Controller/WizardController.php:28-33; libraries/redshop/src/Helper/Config.php:65-96
- **Excerpt:** `if ($copyTempFile) { $this->controller->copyTempFile(); }`
- **Problem / actual:** Wizard welcome attempts to overwrite active configuration with distributed defaults and ignores copy result Wizard welcome attempts to overwrite active configuration with distributed defaults and ignores copy result
- **Expected:** Prevent welcome-page rendering from overwriting live configuration and explicitly handle setup/copy errors.
- **Proposed direction:** Prevent welcome-page rendering from overwriting live configuration and explicitly handle setup/copy errors.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test existing, missing and protected configuration with copy failure and verify byte-for-byte preservation.
- **Manual tests:** Use only disposable installations with a verified backup.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** getting-started-general/redshop-configuration-wizard.md (under `manual/en-US/chapters/`).

## CODE-025 — Bambora callback treats request field presence as Paid without validating hash in handler

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Security/data/payment risk; full impact or exploitability unverified.
- **Original review / component:** `CODE-025` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:179`; `Bambora::onNotifyPaymentrs_payment_bambora`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:165-181; component/site/src/Controller/OrderController.php:238-290
- **Excerpt:** `if (isset($request['paymenttype']) && isset($request['hash'])) { $values->order_status_code         = $verify_status; $values->order_payment_status_code = 'Paid';`
- **Problem / actual:** Bambora callback treats request field presence as Paid without validating hash in handler Bambora callback treats request field presence as Paid without validating hash in handler
- **Expected:** Trace the full callback boundary and require trusted provider-side verification before Paid; preserve configured order statuses and idempotence.
- **Proposed direction:** Trace the full callback boundary and require trusted provider-side verification before Paid; preserve configured order statuses and idempotence.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/bambora.md (under `manual/en-US/chapters/`).

## CODE-026 — Bambora HTTP client disables TLS peer verification

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Security/data/payment risk; full impact or exploitability unverified.
- **Original review / component:** `CODE-026` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:150`; `Bambora::sendRequestToBambora`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:121-150
- **Excerpt:** `curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);  $result = curl_exec($curl);`
- **Problem / actual:** Bambora HTTP client disables TLS peer verification Bambora HTTP client disables TLS peer verification
- **Expected:** Enable TLS peer and hostname verification with a valid trust store; do not disable certificate checks.
- **Proposed direction:** Enable TLS peer and hostname verification with a valid trust store; do not disable certificate checks.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/bambora.md (under `manual/en-US/chapters/`).

## CODE-027 — Bambora checkout assigns success code rather than comparing provider response

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-027` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:100`; `Bambora::onPrePayment`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_payment/rs_payment_bambora/src/Extension/Bambora.php:97-105
- **Excerpt:** `if ($responseCode = self::BAMBORA_SUCCESS) { $this->app->redirect($result->url); `
- **Problem / actual:** Bambora checkout assigns success code rather than comparing provider response Bambora checkout assigns success code rather than comparing provider response
- **Expected:** Compare the provider response code rather than assigning it and validate malformed/error responses.
- **Proposed direction:** Compare the provider response code rather than assigning it and validate malformed/error responses.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/bambora.md (under `manual/en-US/chapters/`).

## CODE-046 — Investigate Flatpay invoice ownership amount currency and concurrent replay checks before marking paid

- **Priority / severity / status:** P0 / critical potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CODE-046` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_flatpay/src/Extension/Flatpay.php:325`; `Flatpay::onNotifyPaymentrs_payment_flatpay`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_payment/rs_payment_flatpay/src/Extension/Flatpay.php:325-340,394-400; redSHOP-rmh/docs/codex-progress.md:25-29; redSHOP-rmh/docs/redshop-audit-findings.md:40
- **Excerpt:** `$data['invoiceHandle'] = $orderId; $invoiceData           = $this->client->getInvoice($data); `
- **Problem / actual:** Investigate Flatpay invoice ownership amount currency and concurrent replay checks before marking paid Source anchor or existing review question only; actual failure is not established.
- **Expected:** Trace invoice handle, order ownership, amount, currency and atomic replay paths against the current provider contract before changing status behavior.
- **Proposed direction:** Trace invoice handle, order ownership, amount, currency and atomic replay paths against the current provider contract before changing status behavior.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/flatpay.md (under `manual/en-US/chapters/`).

## CODE-008 — Postal-code save reports success despite parent save failure in isolated mock; range writes may be partial

- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-008` / component / admin.
- **Source / context:** `component/admin/src/Model/ZipcodeModel.php:49`; `ZipcodeModel::save`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Model/ZipcodeModel.php:41-60; isolated PHP mock
- **Excerpt:** `for ($i = $data['zipcode']; $i <= $data['zipcodeto']; $i++) { $data['zipcode'] = is_numeric($data['zipcode']) ? $i : $data['zipcode']; `
- **Problem / actual:** Postal-code save reports success despite parent save failure in isolated mock; range writes may be partial Postal-code save reports success despite parent save failure in isolated mock; range writes may be partial
- **Expected:** Propagate parent save failures and decide/test atomic range-save behavior.
- **Proposed direction:** Propagate parent save failures and decide/test atomic range-save behavior.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise successful and failed saves, existing values, filters and relevant permission boundaries.
- **Manual tests:** Verify the administrator UI on isolated Joomla 5 and 6.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customization/zip-code.md (under `manual/en-US/chapters/`).

## M-0140 — Test attribute-set copy; source contains `task==product.ajaxDisplayAttributeSet`, whose task value locally parses with a leading =; review fix separately

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `M-0140` / component / catalog.
- **Source / context:** `component/admin/tmpl/product/edit_product_attribute.php:61`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_product_management/FOLLOW-UP-TRACKER-ADDITIONS.md; local Node URL parsing
- **Excerpt:** `url: 'index.php?option=com_redshop&task==product.ajaxDisplayAttributeSet', type: 'POST', dataType: 'json',`
- **Problem / actual:** Test attribute-set copy; source contains `task==product.ajaxDisplayAttributeSet`, whose task value locally parses with a leading =; review fix separately Test attribute-set copy; source contains `task==product.ajaxDisplayAttributeSet`, whose task value locally parses with a leading =; review fix separately
- **Expected:** Correct the extra equals sign in the attribute-set request and verify select versus copy behavior.
- **Proposed direction:** Correct the extra equals sign in the attribute-set request and verify select versus copy behavior.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test current and missing selections, distinct records, related pages and client/server behavior.
- **Manual tests:** Use disposable products and verify storefront output in isolation.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customization/attribute.md; product-management/products-redshop.md (under `manual/en-US/chapters/`).

## CODE-043 — Investigate multi-user coupon form versus single integer storage and checkout user comparison

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CODE-043` / component / coupon.
- **Source / context:** `component/admin/forms/coupon.xml:61`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/forms/coupon.xml:61-71; component/admin/sql/install/mysql/install.sql:208; libraries/redshop/src/Helper/CartDiscount.php:132 and 181-187
- **Additional source context:** Although the XML declares `multiple="true"`, `libraries/redshop/src/Form/Field/CouponuserField.php:46-83` passes `multiple => false` to the custom selector and resolves only the first stored value. This narrows the original hypothesis; actual rendered UI, submission and access enforcement remain unverified. Keep the security hold pending authorized review.
- **Excerpt:** `default="0" table-sortable="1" table-width="5%">`
- **Problem / actual:** Investigate multi-user coupon form versus single integer storage and checkout user comparison Source anchor or existing review question only; actual failure is not established.
- **Expected:** Determine the intended multi-user model and safely align form, storage and validation with upgrade compatibility.
- **Proposed direction:** Determine the intended multi-user model and safely align form, storage and validation with upgrade compatibility.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Cover count 0/1/2, gift-card coupon, percent/fixed subtotal boundaries, users with/without prior transactions, overlapping checkouts and rollback.
- **Manual tests:** Use disposable codes and database with mock payments; never issue real gift cards.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** discounts/coupon.md (under `manual/en-US/chapters/`).

## CODE-044 — Investigate concurrent coupon redemption and rollback around unguarded checkout decrement

- **Priority / severity / status:** P1 / major potential impact / OPEN; Security/data/payment risk; full impact or exploitability unverified.
- **Original review / component:** `CODE-044` / component / coupon.
- **Source / context:** `component/site/src/Model/CheckoutModel.php:1401`; `CheckoutModel::coupon`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/site/src/Model/CheckoutModel.php:1395-1407; libraries/redshop/src/Helper/CartDiscount.php:146-150
- **Excerpt:** `// Reduce amount_left by the used coupon volume $query = $db->getQuery(true) ->update($db->quoteName('#__redshop_coupons'))`
- **Problem / actual:** Investigate concurrent coupon redemption and rollback around unguarded checkout decrement Investigate concurrent coupon redemption and rollback around unguarded checkout decrement
- **Expected:** Inspect locking and transaction scope; if required reserve/decrement conditionally with rollback and idempotent retry.
- **Proposed direction:** Inspect locking and transaction scope; if required reserve/decrement conditionally with rollback and idempotent retry.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Cover count 0/1/2, gift-card coupon, percent/fixed subtotal boundaries, users with/without prior transactions, overlapping checkouts and rollback.
- **Manual tests:** Use disposable codes and database with mock payments; never issue real gift cards.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** discounts/coupon.md (under `manual/en-US/chapters/`).

## ECON-004 — Validate VAT, discounts, shipping, payments and account-group mappings

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-004` / component / integration.
- **Source / context:** `component/admin/tmpl/accountgroup/edit.php:28`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `</legend> <table class="admintable table"> <tr>`
- **Problem / actual:** Validate VAT, discounts, shipping, payments and account-group mappings Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Proposed direction:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Mock authentication, provider success/error, duplicate, retry and reconciliation behavior.
- **Manual tests:** Use only authorized test-provider accounts and disposable data; no real bookings.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/account-group.md (under `manual/en-US/chapters/`).

## CODE-020 — Test newsletter reads an unselected template field and controller ignores mailer result

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-020` / component / newsletter.
- **Source / context:** `component/admin/src/Model/ConfigurationModel.php:389`; `ConfigurationModel::newsletterEntry`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Model/ConfigurationModel.php:389-400,503-510; component/admin/src/Controller/ConfigurationController.php:205-210
- **Excerpt:** `// Getting newsletter content $newsbody = $this->getnewsletter_content($newsletterId); `
- **Problem / actual:** Test newsletter reads an unselected template field and controller ignores mailer result Test newsletter reads an unselected template field and controller ignores mailer result
- **Expected:** Select the required template field and propagate the real mail-send result to the controller.
- **Proposed direction:** Select the required template field and propagate the real mail-send result to the controller.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test confirmation on/off, recipient selection before/after confirmation, mail failures and retries with a mail sink.
- **Manual tests:** Use disposable addresses and no live mail provider.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/newsletter.md (under `manual/en-US/chapters/`).

## CODE-015 — Order-status uniqueness query adds a second table prefix; isolated mock captured #__#__redshop_order_status

- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-015` / component / orders.
- **Source / context:** `component/admin/src/Table/OrderstatusTable.php:77`; `OrderstatusTable::doCheck`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Table/OrderstatusTable.php:48,77-82; isolated PHP mock
- **Excerpt:** `// Check status code. $db    = \Redshop\Component\Libraries\Helper\Joomla::createDatabase(); $query = $db->getQuery(true)`
- **Problem / actual:** Order-status uniqueness query adds a second table prefix; isolated mock captured #__#__redshop_order_status Order-status uniqueness query adds a second table prefix; isolated mock captured #__#__redshop_order_status
- **Expected:** Use the already-prefixed table name for the order-status uniqueness query.
- **Proposed direction:** Use the already-prefixed table name for the order-status uniqueness query.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise distinct IDs, filtered and paginated exports, duplicate checks and failure propagation as applicable.
- **Manual tests:** Use disposable orders and a mail sink on an isolated shop.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** orders/order-status-list.md (under `manual/en-US/chapters/`).

## M-0122 — Price rule submit script dereferences missing `form.productprice` instead of `product_price`; reproduce in Joomla and review Core fix; discount comparison also needs runtime checks

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `M-0122` / component / pricing.
- **Source / context:** `component/admin/tmpl/price/edit.php:34`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop_stage8_consolidated/CONSOLIDATED-FOLLOW-UP-TRACKER.md, redshop_stage8_price_management/FOLLOW-UP-TRACKER-ADDITIONS.md; price rule source review in master
- **Excerpt:** `if (form.productprice.value == "" || isNaN(form.productprice.value) || form.productprice.value == 0) { alert("<?php echo Text::_('COM_REDSHOP_PRODUCT_PRICE_INVALID', true); ?>"); form.productprice.focus();`
- **Problem / actual:** Price rule submit script dereferences missing `form.productprice` instead of `product_price`; reproduce in Joomla and review Core fix; discount comparison also needs runtime checks Price rule submit script dereferences missing `form.productprice` instead of `product_price`; reproduce in Joomla and review Core fix; discount comparison also needs runtime checks
- **Expected:** Correct the product-price input reference and independently verify the discount comparison.
- **Proposed direction:** Correct the product-price input reference and independently verify the discount comparison.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test different currencies or price fields, boundary values, provider failures and persisted cart/order totals.
- **Manual tests:** Compare independent calculations in an isolated shop without real transactions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** product-management/price-management.md (under `manual/en-US/chapters/`).

## COMM-003 — Audit newsletter send authorization, batching and duplicate-send prevention

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `COMM-003` / component / security.
- **Source / context:** `component/admin/src/Model/NewslettersModel.php:148`; `NewslettersModel::listAllSubscribers`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `->select($db->quoteName(array('uf.firstname', 'uf.lastname', 'u.username'))) ->select('ns.*') ->from($db->quoteName('#__redshop_newsletter_subscription', 'ns'))`
- **Problem / actual:** Audit newsletter send authorization, batching and duplicate-send prevention Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** communication/newletters.md (under `manual/en-US/chapters/`).

## IMEX-001 — Browser type/size checks and plugin dispatch located; server-side validation per handler remains open

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `IMEX-001` / component / security.
- **Source / context:** `component/admin/tmpl/import/default.php:16`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Import/export source-review follow-up in master; redSHOP-rmh/component/admin/tmpl/import/default.php:16-25,126-149
- **Excerpt:** `\Redshop\Component\Libraries\Html\RedshopJquery::ui();  HTMLHelper::script('com_redshop/jquery.iframe-transport.min.js', ['version' => 'auto', 'relative' => true]);`
- **Problem / actual:** Browser type/size checks and plugin dispatch located; server-side validation per handler remains open Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-import.md (under `manual/en-US/chapters/`).

## CODE-077 — Product Tab textual No options are interpreted as enabled

- **Priority / status:** P2 / OPEN; GitHub #137; isolated actual source with stubs; Joomla form and storefront unverified.
- **Source:** `modules/site/mod_redproducttab/mod_redproducttab.xml:44-94`, `helper.php:34-54` and `tmpl/default.php:32-72`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual:** Textual `no` is truthy in the tab layout and does not compare equal to zero in the category helper on current PHP. With selected categories 22 and 23 an isolated helper invocation returned request category 7; four No tab values still triggered four queries in the actual layout using database stubs.
- **Expected / direction:** Honor saved Yes/No choices while preserving legacy numeric settings; check each switch and category path, including image, price and cart display.
- **Impact:** Administrators may see tabs or products they intended to disable or filter; real Joomla form saving, SQL and storefront behavior are not verified.
- **Tests:** Exercise text and legacy numeric values with selected and current categories; verify on disposable Joomla 5/6 installations and products.
- **Documentation:** `module-redshop/product-tab.md`. Distinct from CODE-039's missing script directory.

## CODE-078 — Who Bought module quotes multiple selected category IDs as one value

- **Priority / status:** P2 / OPEN; GitHub #138; isolated actual module entry and query stub; Joomla and SQL execution unverified.
- **Source:** `modules/site/mod_redshop_who_bought/mod_redshop_who_bought.xml:28-34` and `mod_redshop_who_bought.php:15-20,48-53`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual:** The module joins selected IDs before quoting them. With IDs 22 and 23 the actual entry generated `pc.category_id IN ('22,23')` under a quote stub instead of separate list elements.
- **Expected / direction:** Validate and bind each selected ID individually, preserving empty and single selection and publication filters.
- **Impact / tests:** Multiple-category results may be incorrect; actual database behavior remains unverified. Test empty, single and multiple category selections against supported databases and disposable products in Joomla 5/6.
- **Documentation:** `module-redshop/who-bought.md`. Distinct from CODE-038, which concerns absent purchase-history correlation.

## CODE-102 — Add-to-cart quantity select tag is not replaced by its renderer

- **Priority / status:** P1 / OPEN; GitHub #160; actual replacement method and base string replacer tested with isolated layout stub; full storefront unverified.
- **Source / context:** `libraries/redshop/src/Tags/Sections/Addtocart.php:498-513,713-741`; `libraries/redshop/src/Tags/AbstractTagsReplacer.php:174-180`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The branch looks for `{addtocart_quantity_selectbox}` but stores its replacement under `{'addtocart_quantity_selectbox'}`. The actual replacement method left the ordinary tag unchanged with an isolated layout stub; the quoted spelling was replaced.
- **Additional source evidence:** Before replacement the actual layout helper requests `tags.addtocart.addtocart_quantity_selectbox`; the shipped file is named `quantity_selectbox.html.twig`. A second isolated fixture confirmed the requested Twig path with the Twig renderer stubbed. Overrides and actual Twig error behavior remain unverified; the missing layout may prevent reaching the replacement defect.
- **Shipped-layout check:** The locally installed Twig parser, with a stub `redconfig` filter, reported a syntax error at line 5 of the shipped `quantity_selectbox.html.twig`. This is not a full redSHOP Twig environment or storefront test.
- **Expected / direction:** Replace the documented ordinary tag with the quantity selector, while testing any existing templates and other quantity-tag precedence.
- **Impact / tests:** Templates using this renderer may lack the expected quantity selector. Test ordinary and other quantity tags and product/global quantity choices in the full rendering chain on isolated Joomla 5/6 installations. No real storefront, cart or checkout was tested; other product-property paths have separate handling.
- **Documentation:** `product-management/products-redshop.md`.

## CODE-101 — Child-product names containing delimiters are mislabelled in related selection

- **Priority / status:** P2 / OPEN; GitHub #159; actual parser exercised with isolated Select2 stubs; Joomla UI and database unverified.
- **Source / context:** `component/admin/src/Controller/ProductController.php:996-1005`; `component/admin/tmpl/product/edit_related.php:48-88`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The child-product response joins IDs and names with commas and separates the lists with a colon; the editor splits on those delimiters without escaping names. Given IDs 1 and 2 and names `Red, Large` and `Blue`, the actual selection-update function assigned labels `Red` and ` Large` respectively in an isolated fixture.
- **Expected / direction:** Transfer ID/name pairs with a structured encoding that preserves punctuation, keeping legacy behavior and errors explicit.
- **Impact / tests:** Misleading labels can confuse an administrator choosing related products. The fixture did not test persistence or a Joomla browser. Test commas, colons, empty results, existing selections and non-ASCII names using disposable products in Joomla 5/6.
- **Documentation:** `product-management/products-redshop.md`.

## CODE-100 — Inventory reset request handling requires private review

- **Priority / status:** P2 / OPEN; security hold; source-level investigation only.
- **Source / context:** `component/admin/src/Controller/StockroomListingController.php`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Investigation:** Review inventory reset authorization and request handling through an authorized private security process. Runtime behavior, impact and exploitability are not established.
- **Tests / direction:** Privately verify authorization and request protections in an isolated installation with disposable records. No actual Joomla runtime or database was used.
- **Documentation:** `stockroom/inventory-stockroom.md`.

## CODE-099 — Inventory reset link omits the stockroom identifier

- **Priority / status:** P2 / OPEN; GitHub #158; actual template exercised with isolated dependencies; Joomla UI and database unverified.
- **Source / context:** `component/admin/tmpl/stockroomlisting/default.php:206-231`; `component/admin/src/Model/StockroomListingModel.php:151-162`; `component/admin/sql/install/mysql/install.sql:2245-2263`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The reset link reads `stockroom_id` from the stockroom object while the installed stockroom table supplies `id`. With a schema-shaped object the actual template emitted an empty stockroom identifier and a missing-property warning. Installed upgrade schemas and Joomla behavior remain unverified.
- **Expected / direction:** Use the stockroom identifier consistently and verify the intended row is affected.
- **Impact / tests:** The reset may fail to affect the intended stockroom. Verify product, property and subproperty rows and distinct stockrooms using an isolated installation and disposable records. No real reset, database or Joomla UI was used.
- **Documentation:** `stockroom/inventory-stockroom.md`. Separate from CODE-098's save-result reporting.

## CODE-098 — Inventory save reports success after rejecting a row

- **Priority / status:** P2 / OPEN; GitHub #157; actual controller and model exercised with isolated dependencies; Joomla UI and database unverified.
- **Source / context:** `component/admin/src/Controller/StockroomListingController.php:24-48`; `component/admin/src/Model/StockroomListingModel.php:185-221`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The model queues a warning and returns false when a nonblank preorder stock is below the ordered preorder quantity. The controller ignores the return, continues saving other rows and always sets a success redirect. In an isolated two-row fixture the first row was rejected, the second reached the database stub, and both warning and success messages were produced.
- **Expected / direction:** Report failed or partial saves accurately while preserving the specific warning; successful model paths currently may return null, so define a consistent result contract rather than treating null as failure.
- **Impact / tests:** Administrators may mistake a partial save for complete success. Test rejected and successful rows, multiple rows, blank-as-infinite behavior and database errors; verify persistence and messages on isolated Joomla 5/6 installations. No real database, stock change or Joomla UI was used.
- **Documentation:** `stockroom/inventory-stockroom.md`.

## CODE-097 — Calculator extra option does not change price-per-piece total

- **Priority / status:** P1 / OPEN; actual calculator exercised with isolated dependencies; Joomla checkout and tax unverified.
- **Source / context:** `libraries/redshop/src/Promotion/Discount/Calculation.php:409-458,493-500`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** In price-per-piece mode, extra options modify `areaPrice` after the total was calculated, but the returned price uses the earlier total. With 1.5 pieces, base unit price 10 and a stubbed `+5` option, the actual calculator returned unit price 15 while the calculated price remained 15, the same as without the option.
- **Expected / direction:** Apply selected option adjustments consistently to the calculated price, with defined semantics for each operator.
- **Impact / tests:** Selected option charges may be omitted from calculator prices. Test plus, minus and percentage options, multiple pieces, tax and checkout on an isolated shop. The option lookup was stubbed; no database, Joomla cart or payment was tested.
- **Documentation:** `product-management/products-redshop.md`. Distinct from CODE-094 rounding, CODE-095 metadata and CODE-096 range selection.

## CODE-096 — Calculator truncates fractional measurements before range lookup

- **Priority / status:** P1 / OPEN; actual calculator exercised with isolated dependencies; real range query and checkout unverified.
- **Source / context:** `libraries/redshop/src/Promotion/Discount/Calculation.php:375-388`; `libraries/redshop/src/Promotion/Discount.php:31-46`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** In range mode, area, volume and circumference cast the calculated measurement to integer before the range lookup, while Area Quantity retains a float. Actual calculator calls with isolated stubs passed `1` for an area/volume measurement of `1.5`, but `1.5` for Area Quantity. The lookup helper supports floating-point input.
- **Expected / direction:** Preserve precision appropriate to each method when selecting a range, with explicit boundary and compatibility tests.
- **Impact / tests:** A fractional measurement may select an incorrect range or fail to find a price. Test fractional and integral measurements around range boundaries for all methods using an isolated database, then independently verify price and tax in checkout. No real query, Joomla cart or payment was tested.
- **Documentation:** `product-management/products-redshop.md`. Distinct from CODE-094's piece rounding and CODE-095's output metadata.

## CODE-095 — Calculator structured price-per-piece value contains product length

- **Priority / status:** P2 / OPEN; actual calculator and measurement helper exercised with isolated dependencies; Joomla cart and database unverified.
- **Source / context:** `libraries/redshop/src/Promotion/Discount/Calculation.php:97-101,124-128,175-179`; `libraries/redshop/src/Workflow/Cart/Add.php:442-445,530-532`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** For volume, area and circumference the measurement helper puts product length in structured `calcPricePerPiece`, while its HTML uses the calculated price. An isolated area fixture returned displayed price 10 but structured value 2. Cart code stores and compares the structured values.
- **Expected / direction:** Store the calculated per-piece price in the structured output and verify cart matching and existing cart compatibility.
- **Impact / tests:** Calculator metadata can disagree with the displayed value and may affect consumers comparing it. Actual cart behavior and financial impact remain unverified. Test each affected method and price-per-piece scenario, including cart matching; no database or Joomla checkout was tested.
- **Documentation:** `product-management/products-redshop.md`. Distinct from CODE-094's rounding semantics.

## CODE-094 — Discount calculator rounds pieces when decimal pieces are allowed

- **Priority / status:** P1 / OPEN; actual calculator exercised with isolated dependencies; Joomla checkout and tax unverified.
- **Source / context:** `libraries/redshop/src/Promotion/Discount/Calculation.php:385-410`; `component/admin/src/View/Product/HtmlView.php:546-550`; `libraries/redshop/src/Html/RedshopSelect.php:79-88`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** In price-per-piece mode, the calculator rounds the piece count up when `allow_decimal_piece` is enabled. With an area ratio of 1.5 and a unit price of 10, the actual calculator returned 1.5 pieces and price 15 for No, but 2 pieces and price 20 for Yes, using isolated stubs.
- **Expected / direction:** Align the rounding behavior with the setting's displayed meaning and verify existing configurations before changing their semantics.
- **Impact / tests:** Calculated prices may differ from the administrator's intended decimal setting. Test exact and fractional quantities, both choices and relevant methods, tax and checkout with disposable products. No database, Joomla storefront, cart or payment was tested.
- **Documentation:** `product-management/products-redshop.md`.

## CODE-093 — Attribute-property publication scope requires private review

- **Priority / status:** P2 / OPEN; security hold; source-level investigation only.
- **Source / context:** `libraries/redshop/src/Helper/ProductAttribute.php:317-325`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Investigation:** Review request-local attribute-property caching and publication scope through an authorized private security process. Exploitability, actual runtime behavior and impact are not established.
- **Tests / direction:** Privately verify publication boundaries and both call orders with disposable records, then determine whether a separate nonsensitive functionality tracker is appropriate. No actual Joomla runtime or database was used.
- **Documentation:** `customization/attribute.md`.

## CODE-092 — Accessory row disappears before deletion succeeds

- **Priority / status:** P2 / OPEN; actual JavaScript functions exercised with isolated DOM and request stubs; Joomla UI and server unverified.
- **Source / context:** `src/assets/com_redshop/js/redshop.fields.js:157-164,192-207`; `component/admin/tmpl/product/edit_product_accessory.php:123-126`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The editor removes an existing accessory row before its separate deletion request completes and does not restore it or show an error on failure. In an isolated Node fixture, the actual functions removed the row and it remained absent after a simulated HTTP 500.
- **Expected / direction:** Keep or restore the existing row and report a failed deletion; remove it only when success is confirmed.
- **Impact / tests:** Administrators may believe an accessory association was removed even if the request failed. Test success, failure, cancellation and unsaved rows in an isolated Joomla 5 and 6 product editor; no request, database or browser was used.
- **Documentation:** `product-management/products-redshop.md`. Separate from CODE-063's stale subproperty display.

## CODE-091 — Attribute-set deletion can leave attributes behind

- **Priority / status:** P2 / OPEN; actual deletion method and property query exercised with isolated dependencies; SQL execution and Joomla UI unverified.
- **Source / context:** `component/admin/src/Model/AttributesetModel.php:80-110`; `libraries/redshop/src/Helper/ProductAttribute.php:317-325,390-415`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** Deletion obtains properties with the default published-only filter and deletes attribute rows only for returned properties, then deletes the set. The actual methods with stubs generated `ap.property_published = 1`, deleted the returned attribute and its properties, and then deleted the set. Attributes with no published property are not selected by this path.
- **Expected / direction:** Clean up all associated attributes and their dependent records regardless of property publication, safely handling images and failed operations.
- **Impact / tests:** Deleting a set may leave attribute and property data without the set. Verify published and unpublished properties, attributes without properties, dependent subproperties, images and failure handling on an isolated database. No SQL or filesystem operation was performed.
- **Documentation:** `customization/attribute.md`. Distinct from CODE-063's stale subproperty display and CODE-064's copy behavior.

## CODE-090 — Template store ignores a false file-write result

- **Priority / status:** P1 / OPEN; actual table method exercised with isolated dependencies; Joomla filesystem and database unverified.
- **Source / context:** `component/admin/src/Table/TemplateTable.php:126-170`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** After the parent store succeeds, the table calls `File::write` without checking its return. With a stubbed successful parent store and file writer returning false, the actual method returned true after attempting to write the supplied content.
- **Expected / direction:** Surface write failures and handle database/file consistency explicitly, including new records and exceptions.
- **Impact / tests:** If the filesystem API returns false, administrators may be told a template saved when content did not reach its file, potentially leaving database metadata and file content inconsistent. Verify false returns and exceptions, existing/new records, permissions and recovery using isolated Joomla 5 and 6 installations. No real database or file write was performed.
- **Documentation:** `customization/template.md`.

## CODE-089 — Postal-code duplicate check changes the code before querying

- **Priority / status:** P2 / OPEN; actual table method exercised with isolated dependencies; MySQL and Joomla UI unverified.
- **Source / context:** `component/admin/src/Table/ZipcodeTable.php:47-60`; `component/admin/forms/zipcode.xml:46-61`; `component/admin/sql/install/mysql/install.sql:2838-2846`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The form accepts text and the installed table stores a `VARCHAR`, but the duplicate query casts the entered code to an integer. The actual table method with stubbed database produced `zipcode = '999'` for `0999` and `zipcode = '0'` for `A1 2BC`; `1234` remained `1234`.
- **Expected / direction:** Duplicate validation should query the intended postal-code text, with explicitly tested normalization and country scope.
- **Impact / tests:** The lookup can check a different code and may miss a duplicate or reject another code. Verify leading zeroes, alphanumeric codes, same-code and different-code cases, and country separation against supported databases on isolated Joomla 5 and 6 installations. No actual database or UI was tested.
- **Documentation:** `customization/zip-code.md`. Separate from CODE-008's failed-save reporting and CODE-067's list filter.

## CODE-088 — State list treats string three-letter selection as two-letter

- **Priority / status:** P2 / OPEN; actual list renderer exercised with isolated dependencies; Joomla database value types and UI unverified.
- **Source / context:** `component/admin/src/View/States/HtmlView.php:48-62`; `component/admin/forms/state.xml:47-59`; `libraries/redshop/src/Helper/World.php:550-560`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The state list uses strict comparison with integer `3`, while the runtime helper compares the same value loosely. Actual renderer stubs produced the three-letter label for integer `3` but the two-letter label for string `"3"`.
- **Expected / direction:** Interpret valid database representations consistently in the list and address helper, preserving the two-letter selection.
- **Impact / tests:** If a supported database driver supplies `"3"` as a string, the list may misrepresent the saved display choice. Verify actual driver result types, both values and real address rendering on Joomla 5 and 6; no database or UI was tested.
- **Documentation:** `customization/states.md`.

## CODE-087 — Category copy reports success after a failed save

- **Priority / status:** P2 / OPEN; actual copy and save methods exercised with isolated dependencies; Joomla controller, filesystem and database unverified.
- **Source / context:** `component/admin/src/Model/CategoryModel.php:125-176,242-260`; `libraries/redshop/src/Controller/AdminControllerRedshop.php:407-420`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** `copy()` ignores a false `saveCategory()` result, continues to media copying with the unchanged zero ID and returns true. The inherited controller reports the selected count without checking the model result. With the actual methods and a deliberately failing bind stub, copy returned true and called a stubbed media-copy method with target ID zero.
- **Expected / direction:** Stop and report failed copies without attempting media work for an unsaved category; propagate failures and accurate counts through the controller.
- **Impact / tests:** Administrators may be told a copy succeeded when it did not; partial batch and media effects need investigation. Test successful, failed and mixed batches and media associations on an authorized isolated shop. The actual controller, media operations and database were not run.
- **Documentation:** `categories/redshop-categories.md`. Created as #147; distinct from #146's product-filter payload issue.

## CODE-086 — Category copy clears product filter configuration

- **Priority / status:** P2 / OPEN; actual copy and save methods exercised with isolated dependencies; Joomla UI and database unverified.
- **Source / context:** `component/admin/src/Model/CategoryModel.php:125-150,199-212`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** `copy()` supplies the original `product_filter_params` but not `product_filter`. `saveCategory()` clears the parameters and reads the absent nested `enable` value. An isolated invocation of both actual methods reached the bind stub with an empty filter value and emitted two PHP warnings. The stub deliberately failed bind, so database persistence was not tested.
- **Expected / direction:** Preserve the original filter configuration on copy without disrupting normal editor saves; avoid accessing missing input.
- **Impact / tests:** A copied category may lose its product-filter settings or encounter warnings. Test copying enabled and disabled filters, all suboptions and normal editor saves on Joomla 5 and 6; verify actual persistence and storefront behavior.
- **Documentation:** `categories/redshop-categories.md`. Created as #146; existing #118 concerns bulk template assignment, not copying.

## CODE-085 — Gift-card fallback detail template omits customer amount input

- **Priority / status:** P2 / OPEN; actual layout exercised with isolated dependencies; Joomla storefront and checkout unverified.
- **Source / context:** `component/site/tmpl/giftcard/default.php:26-34,112-139`; `component/admin/forms/giftcard.xml:15-24`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** When no detail template is selected, the fallback markup omits `{customer_amount}`. Even with Customer Amount enabled, the generated input is substituted only where the tag exists. Actual layout with isolated stubs produced no amount input for the fallback; a template containing that tag produced the input.
- **Expected / direction:** Provide the customer-amount control and label in the fallback when applicable, while preserving fixed-amount gift cards and existing custom templates.
- **Impact / tests:** A customer cannot enter an amount through the fallback detail layout. Test fallback and custom templates, both setting values, amount validation and actual cart behavior in authorized Joomla 5 and 6 shops. No checkout or payment was tested.
- **Documentation:** `discounts/gift-cards.md`. Created as #145; separate from #112's quantity mail issue and #113's email-value mismatch.

## CODE-084 — Inline product-price discount editing fails shopper-group validation

- **Priority / status:** P2 / OPEN; actual table validation exercised with isolated parent stubs; Joomla administration unverified.
- **Source / context:** `component/admin/forms/discountproduct.xml:6-17,37-47,77-83`; `libraries/redshop/src/Layouts/Inline/Text.php:27-29`; `src/assets/com_redshop/js/redshop.inline.js:20-42`; `libraries/redshop/src/Controller/AdminControllerRedshop.php:367-389`; `component/admin/src/Table/DiscountproductTable.php:161-173,225-230`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Problem / actual:** The list inline inputs submit edited fields but not the shopper-group association. The inherited controller binds those fields and calls table validation before setting inline mode. The table requires its `shopperGroups` option, populated only when `shopper_group` is bound. Actual table validation with a valid loaded-rule equivalent rejected both the inline threshold and discount amount; including a shopper group in each fixture passed.
- **Expected / direction:** Validate inline edits using the existing associations without losing or replacing them, while retaining full-form shopper-group requirements.
- **Impact / tests:** Inline threshold or discount changes may fail; use the complete editor and reopen the rule. Test both inline fields, valid and invalid amounts, unchanged groups and full-form saves in Joomla 5 and 6. The controller, database, browser and Joomla UI were not executed.
- **Documentation:** `discounts/product-price-discount.md`. GitHub title/path searches found no matching existing issue; created as #144 and reconciled.
- **Additional affected list:** `DiscountsController` uses the same inherited inline handler and `component/admin/src/Table/DiscountTable.php:161-173,225-230` repeats the same group-option validation. The actual order-discount table with isolated parent stubs rejected each inline field without a group and accepted each with one; the Joomla UI and database were not run. See `discounts/order-total-discount.md`.

## CODE-083 — Product Tab AJAX add-to-cart layout counts an object or null

- **Priority / severity / status:** P1 / major potential impact / OPEN; actual layout exercised with isolated dependencies on PHP 8.4; Joomla storefront unverified.
- **Original review / component:** `CODE-083` / module / products.
- **Source / context:** `modules/site/mod_redproducttab/tmpl/default_tab.php:119-138`; module product layout; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`. The detail helper returns a nullable object (`libraries/redshop/src/Helper/Template.php:243-251,280-295`).
- **Problem / actual:** With AJAX and add-to-cart enabled, the actual layout called `count()` on the helper result. Isolated stubs returning either a template object or null caused PHP 8.4 `TypeError` in both cases.
- **Expected / proposed direction:** Handle the helper's nullable object contract without counting it, preserving the missing-template fallback.
- **Impact / regression risks:** Affected module rendering may interrupt the page; actual Joomla storefront behavior remains unverified. Preserve add-to-cart behavior and product fields.
- **Automated tests:** Render the actual layout with AJAX enabled and both object and null results, plus AJAX disabled.
- **Manual tests:** Use an authorized isolated Joomla shop with disposable products and verify module rendering and add-to-cart with and without AJAX.
- **Joomla 5/6:** PHP 8.4 isolated layout tested; Joomla 5 and 6 storefronts unverified.
- **Documentation:** module-redshop/product-tab.md (under `manual/en-US/chapters/`).
- **Deduplication:** Distinct from CODE-077/#137, which concerns textual switch values and category selection; this is a separate PHP type error.
- **Additional affected layouts:** `modules/site/mod_redshop_who_bought/tmpl/default.php:80-84` and `modules/site/mod_redshop_shoppergroup_product/tmpl/default.php:58-62` also raised the same TypeError with an object result in actual-layout isolated stubs. `modules/site/mod_redshop_aesir_products/tmpl/default.php:193-197` has the same source pattern but was not executed. These branches are reached with AJAX cart enabled; verify all four layouts and nullable results.

## CODE-082 — Investigate whether Apply VAT for Tax Exempt setting affects tax calculation

- **Priority / severity / status:** P1 / major potential impact / OPEN; investigation only. Complete tax calculation and persisted configuration unverified.
- **Original review / component:** `CODE-082` / library / tax; discovered while revisiting `FAQ-001`.
- **Source / context:** `component/admin/tmpl/configuration/default_price.php:130-136`, `component/admin/language/en-GB/com_redshop.ini:1203`, and `libraries/redshop/src/Helper/Cart.php:934-969`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`. `CartShipping::getDefault` consumes the helper result at `libraries/redshop/src/Helper/CartShipping.php:151-160`.
- **Problem / actual:** The option is presented as controlling VAT for exempt customers. The actual exemption helper returned false for a stubbed approved user with either option value and did not read the setting. Static search found the setting in configuration and editor paths, not in this helper. The complete tax calculation and persistence were not tested.
- **Expected / proposed direction:** Establish the intended behavior and trace the saved setting through product, cart, shipping, order and invoice paths before changing anything.
- **Impact / regression risks:** Administrators may assume a tax option affects calculations without evidence that it does; actual financial impact remains unverified. Preserve exemption approval, rates and historical orders.
- **Automated tests:** Exercise both option values with approved, pending and nonexempt users across product and shipping calculations using controlled rates.
- **Manual tests:** Use an authorized isolated Joomla shop with disposable customers and independently calculated expected tax totals; do not change production settings.
- **Joomla 5/6:** Not verified on Joomla 5 or 6.
- **Documentation:** faq/how-do-2.md (under `manual/en-US/chapters/`).

## CODE-081 — AJAX detail template selection is cached across different product templates

- **Priority / severity / status:** P2 / moderate impact / OPEN; actual helper exercised with isolated configuration and seeded template records; Joomla storefront and database unverified.
- **Original review / component:** `CODE-081` / library / frontend; discovered while revisiting `FAQ-004`.
- **Source / context:** `libraries/redshop/src/Helper/Template.php:251-295`; `Template::getAjaxDetailBox`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`. Multi-product consumers include `component/site/tmpl/search/default.php:570-579` and `libraries/redshop/src/Tags/Sections/Categoryproduct.php:427-440`.
- **Problem / actual:** The selected detail template is cached under one static key without the product-template identity. Calling the actual helper for seeded products 11 and 12 returned alpha twice; reversing the order returned beta twice. The fixture seeded the existing helper cache to avoid a database or filesystem.
- **Expected / proposed direction:** Resolve each product's named or configured detail template independently; key the result appropriately or reuse only the list of available templates.
- **Impact / regression risks:** Multi-product output inspecting the detail template may use another product's fields or content. Actual storefront rendering remains unverified. Preserve named selection, default selection, empty results and existing template records.
- **Automated tests:** Exercise distinct product templates in both orders and repeated products, plus default and missing-template cases within one request.
- **Manual tests:** On an authorized isolated Joomla shop compare disposable products using distinct detail templates in product lists and add-to-cart flows.
- **Joomla 5/6:** Not verified on Joomla 5 or 6.
- **Documentation:** faq/how-do-1.md (under `manual/en-US/chapters/`).

## CODE-080 — Mail list search does not group name and subject before section and publication filters

- **Priority / severity / status:** P2 / moderate impact / OPEN; actual model and Joomla 5.4.6 locked database query builder exercised with isolated dependencies; SQL execution and Joomla UI unverified.
- **Original review / component:** `CODE-080` / component / administration.
- **Source / context:** `component/admin/src/Model/MailsModel.php:58-79`; `MailsModel::getListQuery`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Original evidence references:** Joomla 5.4.6 `composer.lock` pins `joomla/database` 3.4.3, source revision `6a8aedaea444cd78912153c4d8361eb06ba2a9cd`. Its `DatabaseQuery::where` and `QueryElement::__toString` join conditions without inserting grouping.
- **Problem / actual:** An isolated invocation of the actual model and locked query builder generated `name LIKE ... OR subject LIKE ... AND section = ... AND published = ...`. SQL precedence permits a matching name to bypass the section and publication conditions. No database or live Joomla installation was used.
- **Expected / proposed direction:** Group the search alternatives so both are constrained by the selected section and publication state.
- **Impact / regression risks:** Administrators may see and act on unexpected results; preserve unfiltered searches, subject matches, sorting and pagination.
- **Automated tests:** Exercise name-only and subject-only matches with each filter separately and together, including nonmatching sections and states.
- **Manual tests:** On an authorized isolated Joomla shop use disposable mail templates and compare search results under both filters.
- **Joomla 5/6:** Builder from Joomla 5.4.6 was tested in isolation; full Joomla 5/6 UI and SQL execution remain unverified.
- **Documentation:** communication/mails.md (under `manual/en-US/chapters/`).

## CODE-079 — User synchronization reports selected users as added even when storage fails

- **Priority / status:** P2 / OPEN; GitHub #139; isolated actual synchronization method with storage and database stubs; Joomla and database unverified.
- **Source:** `libraries/redshop/src/Install/Install.php:91-126`, `libraries/redshop/src/Helper/User.php:534-542,567-571` and `component/admin/tmpl/users/default_user_sync.php:26-33`; revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Actual:** The method ignores each storage return and returns the number selected. With two mock users and two false storage returns, the actual method returned two; the view labels this number as added. A false return can also occur after partial persistence.
- **Expected / direction:** Report actual outcomes and failures clearly while preserving existing error handling and accounting for partial persistence.
- **Tests:** Exercise no users, successes, failures and partially persisted results with stubs, then verify on an authorized isolated Joomla shop with disposable users.
- **Documentation:** `getting-started-general/sync-redshop.md`. Separate from any authorization or security review.

## CODE-050 — Gift-card quantity creates multiple codes but mails only the last code

- **GitHub:** Rmh1978/redSHOP-rmh#112.
- **Priority / status:** P1 / OPEN. An isolated PHP mock invoked `Giftcard::sendMail` at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `libraries/redshop/src/Mail/Giftcard.php:45-78,86-175` generates a code per unit but builds and sends one message after the loop. With a mocked quantity of two, two coupon records were stored and the single message contained only the second code.
- **Impact and direction:** A recipient may miss purchased codes. Preserve recipient, retry and one-unit behavior while ensuring every issued code is delivered. Test one and multiple units, failures and retries.
- **Limits:** Joomla checkout, actual database, provider and mail delivery were not tested. Use disposable data and mocked payments/mail in an authorized isolated shop.
- **Documentation:** `discounts/gift-cards.md`.

## CODE-051 — Gift-card email value can differ from customer-selected coupon value

- **GitHub:** Rmh1978/redSHOP-rmh#113.
- **Priority / status:** P1 / OPEN. An isolated PHP mock invoked `Giftcard::sendMail` at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `libraries/redshop/src/Mail/Giftcard.php:50-70,86-120` formats the configured value before substituting the customer-selected amount. A mocked configured value of 10 and selected amount of 35 yielded a coupon value of 35 but an email value of 10.
- **Impact and direction:** Recipients may see a misleading value. Resolve the final value before formatting, preserving fixed-value cards and currency behavior; test both subject and body.
- **Limits:** Joomla checkout, actual database, provider and mail delivery were not tested. Use disposable data and mocked payments/mail in an authorized isolated shop.
- **Documentation:** `discounts/gift-cards.md`.

## CODE-052 — Logged-in product-linked voucher lookup can throw when no transaction exists

- **GitHub:** Rmh1978/redSHOP-rmh#114.
- **Priority / status:** P1 / OPEN. An isolated PHP mock invoked `Voucher::getVoucherData` at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `libraries/redshop/src/Promotion/Voucher.php:40-90,133-164` passes a transaction query's object-or-null result to `count()`. With an authenticated mock user, a linked voucher and no prior transaction, the actual method raised `TypeError`.
- **Impact and direction:** A customer may be unable to apply a voucher. Handle the result's actual type and preserve product, date, publication and balance checks. Cover guest and logged-in users, transaction results and linked/unlinked vouchers.
- **Limits:** No Joomla checkout or real database was tested; use disposable vouchers and mocked payments in an authorized isolated shop.
- **Documentation:** `discounts/voucher.md`.

## CODE-053 — Voucher list formats percentage amounts as currency

- **GitHub:** Rmh1978/redSHOP-rmh#115.
- **Priority / status:** P2 / OPEN. An isolated PHP mock invoked the actual list-view renderer at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/View/Vouchers/HtmlView.php:48-56` sends the amount to the currency formatter without checking the type. The mock confirmed this for a Percentage voucher of 10; the form declares both Total and Percentage.
- **Impact and direction:** Administrators may misread the value. Format percentage rows as percentages while preserving fixed-amount formatting, inline editing and permissions.
- **Limits:** Joomla UI and locale formatting were not tested. Verify both types and inline/non-inline modes in an authorized isolated environment.
- **Documentation:** `discounts/voucher.md`.

## CODE-054 — Product price discount search does not filter the list query

- **Priority / status:** P2 / OPEN / GitHub #116. An isolated PHP mock invoked the actual list-query method at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/forms/filter_discountproducts.xml:4-8` provides search; `component/admin/src/Model/DiscountproductsModel.php:63-103` never applies the stored search state. The mock produced identical predicates with and without a search value.
- **Impact and direction:** The search control cannot narrow the list through this query. Agree on meaningful searchable fields and implement them, or remove the control; preserve the other filters.
- **Limits:** Joomla UI and real database behavior were not tested. Verify matching/nonmatching values and combinations with other filters in an authorized isolated site.
- **Documentation:** `discounts/product-price-discount.md`.

## CODE-055 — Order total discount search targets a name absent from its form

- **Priority / status:** P2 / OPEN / GitHub #117. An isolated PHP mock invoked the actual list-query method at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/DiscountsModel.php:85-89` searches `d.name`, while `component/admin/forms/discount.xml` has no name input. The mock confirmed the name-only predicate.
- **Impact and direction:** The current edit form cannot set the field the search uses. Align searchable fields and the form while preserving existing records. This is distinct from CODE-054, where a different list ignores search state completely.
- **Limits:** Joomla UI, saving and real database behavior were not tested. Test records with and without names and combinations with other filters.
- **Documentation:** `discounts/order-total-discount.md`.

## CODE-056 — Category bulk template assignment reports failure after successful update

- **Priority / status:** P2 / OPEN / GitHub #118. An isolated PHP database stub invoked the actual model at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/CategoriesModel.php:68-90` executes an update but returns null; `component/admin/src/Controller/CategoriesController.php:43-49` selects the failure message for a falsy result. The mock confirmed execution followed by a null result.
- **Impact and direction:** A successful update can be accompanied by an error message. Propagate a meaningful execution result, preserve the selected scope and report actual failures.
- **Limits:** Joomla UI and real database behavior were not tested. Test success, empty selection, database errors and persisted templates on an authorized isolated site.
- **Documentation:** `categories/redshop-categories.md`.

## CODE-057 — Price rule model queries a product before setting its product ID

- **Priority / status:** P1 / OPEN / GitHub #119. The actual constructor was invoked with isolated request and database stubs at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/PriceModel.php:24-50` leaves `_prodid` null before constructing a product lookup; lines 89-105 also use it for new-rule context. The constructor mock captured a query ending in `product_id =` without a value.
- **Impact and direction:** The editor may fail before the form is displayed. Resolve and validate product context before querying, and handle missing products explicitly. This is separate from the form submission defect M-0122 (#95).
- **Limits:** Joomla UI and real database execution were not tested. Test new and existing rules, valid and missing products, and product association in an authorized isolated site.
- **Documentation:** `product-management/price-management.md`.

## CODE-058 — Price rule validation misses ranges enclosing an existing range

- **Priority / status:** P1 / OPEN / GitHub #120. The actual table check was invoked with an isolated database stub at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Table/PriceTable.php:59-85` checks whether either new endpoint falls within an existing range. With a stubbed existing range of 5–10, the check accepted 1–15 but rejected 6–8.
- **Impact and direction:** Overlapping rules may produce ambiguous prices. Implement complete interval overlap validation while explicitly defining zero-boundary semantics and allowing self-edit.
- **Limits:** Joomla save, real SQL and storefront precedence were not tested. Test disjoint, touching, partial, equal and enclosing ranges, self-edit and special zero cases on an authorized isolated site.
- **Documentation:** `product-management/price-management.md`.

## CODE-059 — Product price list executes unscoped updates twice per save

- **Priority / status:** P1 / OPEN / GitHub #121. Actual controller and model methods were invoked with isolated request and database stubs at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Controller/ProductsController.php:190-230` calls each save method twice; `component/admin/src/Model/ProductsModel.php:487-523,544-577` builds CASE updates without a WHERE clause. The mock recorded four unscoped executions for one base-price and one discount-price save.
- **Impact and direction:** This may cause unnecessary full-table work and database side effects. Execute once, scope to intended IDs and propagate the result.
- **Limits:** No real SQL, performance or trigger behavior was tested. Verify execution count and untouched rows in an authorized isolated database.
- **Documentation:** `product-management/price-management.md`.

## CODE-060 — Media editor duplicate IDs require browser acceptance testing

- **Priority / status:** P2 / OPEN, acceptance investigation; no confirmed customer-facing defect. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/tmpl/medium/edit.php:97-125` uses an ID selector for `media_data`, which appears twice at lines 306 and 593; the YouTube wrapper is in the second element. An earlier visibility stub incorrectly assumed the second element was hidden. A browser fixture using the repository's bundled jQuery 3.4.1 hid only the first element and kept the YouTube field visible. The earlier bug claim is retracted.
- **Limits:** The fixture did not run Joomla or establish its loaded jQuery version. Verify initial YouTube edits, switching types and saving on an authorized isolated site before asserting a defect.
- **Documentation:** `media/working-medias.md`, `product-management/medias-redshop.md`.

## CODE-061 — Media list reset calls a nonexistent form method (GitHub #122)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/tmpl/media/default.php:106-125` calls `this.form.getElementById` in the Reset button. An isolated browser DOM fixture executing that exact handler raised a `TypeError` and left both selected values unchanged.
- **Impact and direction:** Reset cannot reliably clear the type and section filters. Use supported DOM lookup and submit the reset values; preserve the other filter workflows.
- **Limits:** The fixture did not run Joomla or test server-side list state. Verify in Joomla 5 and 6 on an authorized isolated site.
- **Documentation:** `media/working-medias.md`, `product-management/medias-redshop.md`.

## CODE-062 — Common payment selection may ignore later cart products

- **Priority / status:** P1 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `libraries/redshop/src/Helper/Payment.php:340-418` calculates a common selection from product restrictions. In an isolated test of the actual helper with database stubs, a three-product cart returned a method absent from the third product's selection.
- **Impact and direction:** The available choices may not reflect every product's settings. Calculate the common set over all products and test no-common-method and unrestricted-product cases.
- **Limits:** No Joomla checkout, provider, payment or authorization behavior was tested. Hold detailed synchronization pending authorized private security review; a nonsensitive tracker requires separate review.
- **Documentation:** `product-management/products-redshop.md`; related acceptance investigation M-0154.

## CODE-063 — Subproperty deletion leaves the row visible with jQuery 3 (GitHub #123)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `src/assets/com_redshop/js/redshop.attribute-manipulation.js:174-187` starts the deletion request and then calls jQuery's removed `.size()` method. The generated asset in an isolated browser using bundled jQuery 3.4.1 started a stubbed request, threw a TypeError and left the row visible.
- **Impact and direction:** The editor can show stale data after requesting deletion. Use supported selection APIs and handle the server result before updating the display; preserve both product and attribute-set editors.
- **Limits:** No request was sent and no Joomla runtime or real deletion was tested. Verify success and failure on an authorized isolated site.
- **Documentation:** `product-management/products-redshop.md`, `customization/attribute.md`.

## CODE-064 — Attribute-set copy omits attribute description publication and display type (GitHub #124)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/AttributesetModel.php:678-930` builds new attribute data without description, publication or display type; property data also omit required and multiple selection, display type, publication, tooltip and alert settings. Isolated tests captured both table binds and confirmed those keys were absent. Source inspection also shows `subattribute_published` missing from the subproperty bind; `SubattributepropertyTable` defaults it to 1.
- **Impact and direction:** A copied set may differ from its source in descriptions, visibility, selection controls or messages. Preserve attribute, property and subproperty values.
- **Limits:** No Joomla database or storefront was tested. Verify persisted values and output with disposable sets on Joomla 5 and 6.
- **Documentation:** `customization/attribute.md`. This is distinct from M-0140 (#96), which concerns the product editor's set-selection request.

## CODE-065 — Attribute-set save omits property tooltip and alert fields (GitHub #125)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `libraries/redshop/src/Layouts/Product/ProductProperty.php:155-168,194-207` renders the two property fields. `component/admin/src/Controller/AttributesetController.php:119-138` does not pass them to `store_pro`. An isolated invocation of the actual controller with submitted values and a model stub captured both keys missing.
- **Impact and direction:** New or changed property messages may not be saved in the attribute-set editor. Pass the fields through and verify database persistence. The product editor has a separate save path.
- **Limits:** No Joomla runtime or real database was tested; check new and existing disposable properties on Joomla 5 and 6.
- **Documentation:** `customization/attribute.md`. This is distinct from CODE-064 (#124), which concerns copying an existing set.

## CODE-066 — Attribute-set property save reads a different image field from the form (GitHub #126)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `libraries/redshop/src/Layouts/Product/ProductProperty.php:113-114` submits `property_image`; `component/admin/src/Controller/AttributesetController.php:126` reads `image`. An isolated invocation of the actual controller with the rendered name recorded an undefined-key warning and passed null to the model.
- **Impact and direction:** Existing property-image handling may be unreliable when saving a set. Align the names and verify unchanged and uploaded images.
- **Limits:** No Joomla runtime, database or actual image operation was tested; null persistence depends on the table and database behavior.
- **Documentation:** `customization/attribute.md`. Separate from CODE-065's omitted message fields and CODE-064's copy path.

## CODE-067 — Postal-code country filter hides entries without a matching state (GitHub #127)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/ZipcodesModel.php:119-156` left-joins state but filters on its country ID; `component/admin/forms/zipcode.xml` makes state optional. The actual model's predicate was captured with a database stub, then applied to equivalent SQLite left joins: filtering returned only the state-associated one of two same-country rows.
- **Impact and direction:** A postal-code entry can disappear from the list when its country is selected. Filter on the joined country or zipcode country instead and retain optional-state records.
- **Limits:** No Joomla runtime or real MySQL database was tested; check records with and without states on an authorized isolated shop.
- **Documentation:** `customization/zip-code.md`.

## CODE-068 — Currency validation constructs a doubly prefixed table identifier (GitHub #128)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Table/CurrencyTable.php:68-110` prepends `#__` to its already-prefixed table name in duplicate-code validation. An isolated invocation of the actual validation recorded `#__#__redshop_currency` passed to the database stub. `libraries/redshop/src/Table/AbstractTable.php:67-88` passes the existing table name to the Joomla table constructor.
- **Impact and direction:** Creation or editing may fail in duplicate-code validation. Use the existing table name once and verify unique and duplicate cases.
- **Limits:** No SQL or Joomla runtime was tested; check prefix replacement and persisted results on an authorized isolated installation.
- **Documentation:** `vat/currency.md`, `customization/currency.md`. Distinct from CODE-007 (#72), which concerns currency conversion.

## CODE-069 — Tax-rate list group link uses the rate ID instead of the group ID (GitHub #129)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/View/Taxrates/HtmlView.php:48-62` uses the rate row's ID in the group edit link. An isolated invocation of the actual renderer used rate ID 42 for a row associated with group ID 7.
- **Impact and direction:** The link may open an unrelated group or fail. Use the group ID and verify the edit route.
- **Limits:** No Joomla routing or database was tested; use disposable groups with different IDs on an authorized isolated shop.
- **Documentation:** `vat/vat-rate.md`.

## CODE-070 — Tax-rate list state lookup ignores the country when joining codes (GitHub #130)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/TaxratesModel.php:73-91,138` joins states by three-letter code without country and groups by rate ID; `StateTable` checks duplicate codes within a country, not globally. A stub captured the actual join and an equivalent SQLite fixture matched two countries' states to one rate.
- **Impact and direction:** The list may show an ambiguous or incorrect state name. Scope the join to the country while preserving optional locations.
- **Limits:** No Joomla runtime or real MySQL was tested; this finding concerns list display, not a proven tax-calculation defect.
- **Documentation:** `vat/vat-rate.md`.

## CODE-071 — Order-list end-date filter includes next midnight and miscalculates daylight-saving days (GitHub #131)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/OrdersModel.php:135-148` adds 86,400 seconds to the end date and uses `<=`. The actual model with isolated stubs generated an inclusive next-midnight bound in UTC and bounds one hour late/early on the 2025 spring/autumn transitions with `Europe/Copenhagen`.
- **Impact and direction:** Results can include the next day's first instant or use the wrong day boundary at daylight-saving changes. Compute an exclusive next local calendar midnight in the intended timezone.
- **Limits:** No Joomla runtime or real SQL was tested; configured timezone semantics remain to be verified. This is separate from CODE-005 (#111), which concerns order export date bounds.
- **Documentation:** `orders/order-list.md`.

## CODE-072 — Shipping-box ID search casts the prefix rather than the ID (GitHub #132)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/ShippingBoxesModel.php:63-65` detects the `id:` prefix but casts the entire search string to integer. An isolated invocation of the actual query method with `id:42` captured `shipping_box_id = 0`.
- **Impact and direction:** The intended box cannot be found by its prefixed ID. Extract and validate the numeric suffix before comparison; retain name search and other list behavior.
- **Limits:** No Joomla UI or real SQL was tested.
- **Documentation:** `shipping/shipping-boxs.md`.

## CODE-073 — Location-only shipping method displays rate-support indicator (GitHub #133)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/View/Shippingmethods/HtmlView.php:65-73` falls through from the rate-support case into location support when rate support is false. An isolated invocation of the actual renderer shows a rate check for `is_shipper=0` and `shipper_location=1`; `plugins/redshop_shipping/self_pickup/self_pickup.xml:25-42` declares those values.
- **Impact and direction:** The method list can mislead administrators about rate capability. Render the rate and location indicators independently.
- **Limits:** No Joomla UI or installed plugin settings were tested; this is a list-display defect, not evidence that checkout or rate creation works.
- **Documentation:** `shipping/shipping-methods.md`.

## CODE-074 — Shipping-rate copies omit restrictions and tax settings (GitHub #134)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/Model/ShippingrateModel.php:206-247` builds the copied row without dimension ranges, excluded products or the shipping tax group, among other fields. An isolated actual copy invocation captured the bound values and confirmed these omissions.
- **Impact and direction:** Copied rates can have different applicability or tax settings. Preserve relevant saved rate fields and any associated custom-field data when copying, after checking intended semantics.
- **Limits:** No Joomla UI, actual SQL, checkout or tax calculation was tested.
- **Documentation:** `shipping/shipping-methods.md`.

## CODE-075 — Administrator shipping-address Delete link does not supply selected ID (GitHub #135)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/tmpl/user/edit_shipping.php:61-62` builds the address Delete link with `id[]`; `component/admin/src/Controller/UserController.php:143-151` reads `cid` and rejects an empty selection. An isolated invocation of the actual controller with the link's input shape produced the no-selection exception.
- **Impact and direction:** The administrator cannot reliably remove an address from this list. Align the selected-ID contract while preserving the existing user and address deletion safeguards.
- **Limits:** No Joomla runtime, address deletion or authorization test was performed. This nonsensitive functionality tracker does not conclude the separate security review.
- **Documentation:** `users/add-user.md`.

## CODE-076 — Review-list product link invokes the rating editor with product ID (GitHub #136)

- **Priority / status:** P2 / OPEN. Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Evidence:** `component/admin/src/View/Ratings/HtmlView.php:60-65` builds the product-name link using `rating.edit` and the product ID. The inherited `FormControllerRedshop::edit` resolves the controller's model and uses the supplied ID as its record ID. An isolated invocation of the actual list renderer captured this link.
- **Impact and direction:** The link does not consistently identify the intended product editor and can instead target a review ID. Use the product-edit route and product ID.
- **Limits:** No Joomla router, actual editor or database was tested.
- **Documentation:** `customer-input/rating-review.md`.

## IMEX-002 — AJAX validation call located; complete authorization, CSRF, path handling and cleanup remain unverified

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `IMEX-002` / component / security.
- **Source / context:** `component/admin/src/Controller/ImportController.php:33`; `ImportController (verify enclosing method)`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Import/export source-review follow-up in master; redSHOP-rmh/component/admin/src/Controller/ImportController.php:33-44
- **Excerpt:** `*/ public function uploadFile() {`
- **Problem / actual:** AJAX validation call located; complete authorization, CSRF, path handling and cleanup remain unverified Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-import.md (under `manual/en-US/chapters/`).

## IMEX-004 — Protect personal data in user, address and subscriber exports

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `IMEX-004` / component / security.
- **Source / context:** `component/admin/tmpl/export/default.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `<?php  /**`
- **Problem / actual:** Protect personal data in user, address and subscriber exports Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-export.md (under `manual/en-US/chapters/`).

## IMEX-009 — Verify server-side validation of export CSRF token

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `IMEX-009` / component / security.
- **Source / context:** `component/admin/tmpl/export/default.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `<?php  /**`
- **Problem / actual:** Verify server-side validation of export CSRF token Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-export.md (under `manual/en-US/chapters/`).

## INPUT-001 — Audit question and review frontend authorization and CSRF handling

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `INPUT-001` / component / security.
- **Source / context:** `component/site/src/Controller/AskquestionController.php:42`; `AskquestionController::submit`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `Session::checkToken() or die(Text::_('JINVALID_TOKEN'));  /** @var \Joomla\CMS\Application\CMSApplication $app */`
- **Problem / actual:** Audit question and review frontend authorization and CSRF handling Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customer-input/questions.md; customer-input/rating-review.md (under `manual/en-US/chapters/`).

## INPUT-002 — Verify output escaping and stored XSS prevention for questions, answers and reviews

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `INPUT-002` / component / security.
- **Source / context:** `component/site/src/Controller/ProductratingController.php:35`; `ProductratingController::submit`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `\Joomla\CMS\Session\Session::checkToken() or jexit(Text::_('JINVALID_TOKEN'));  $app   = Factory::getApplication();`
- **Problem / actual:** Verify output escaping and stored XSS prevention for questions, answers and reviews Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customer-input/rating-review.md (under `manual/en-US/chapters/`).

## INPUT-003 — Verify customer email, phone and address are not exposed publicly

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `INPUT-003` / component / security.
- **Source / context:** `component/admin/forms/rating.xml:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `<?xml version="1.0" encoding="utf-8"?> <form> <fieldset name="details">`
- **Problem / actual:** Verify customer email, phone and address are not exposed publicly Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customer-input/rating-review.md (under `manual/en-US/chapters/`).

## INPUT-005 — Test spam controls, duplicate reviews and rate limits

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `INPUT-005` / component / security.
- **Source / context:** `component/site/src/Controller/ProductratingController.php:59`; `ProductratingController::submit`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `if (!$user->id && \Redshop\Component\Libraries\Helper\Redshop::getConfig()->get('RATING_REVIEW_LOGIN_REQUIRED')) { $app->enqueueMessage(Text::_('COM_REDSHOP_ALERTNOTAUTH_REVIEW'), 'warning'); $this->setRedirect(\Redshop\Component\Libraries\IO\Route::_($link));`
- **Problem / actual:** Test spam controls, duplicate reviews and rate limits Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customer-input/rating-review.md (under `manual/en-US/chapters/`).

## M-0135 — Security-test Order Tracker authorization

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `M-0135` / component / security.
- **Source / context:** `component/site/src/Controller/OrderController.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md
- **Excerpt:** `<?php /** * @package     RedSHOP.Frontend`
- **Problem / actual:** Security-test Order Tracker authorization Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** orders/order-list.md (under `manual/en-US/chapters/`).

## MEDIA-001 — Media upload action and client defaults inspected; validate server allowlist, MIME and content across the complete request path

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `MEDIA-001` / component / security.
- **Source / context:** `component/admin/src/Controller/MediaController.php:220`; `MediaController::ajaxUpload`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Media source-review follow-up; redSHOP-rmh/component/admin/src/Controller/MediaController.php:220-315
- **Excerpt:** `public function ajaxUpload() { $app  = Factory::getApplication();`
- **Problem / actual:** Media upload action and client defaults inspected; validate server allowlist, MIME and content across the complete request path Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** media/working-medias.md (under `manual/en-US/chapters/`).

## MEDIA-002 — Temporary image upload path and name cleaning inspected; path containment, permissions and web access remain untested

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `MEDIA-002` / component / security.
- **Source / context:** `component/admin/src/Controller/MediaController.php:230`; `MediaController::ajaxUpload`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Media source-review follow-up; redSHOP-rmh/component/admin/src/Controller/MediaController.php:230-249
- **Excerpt:** `$filename = \Redshop\Component\Libraries\Helper\Media::cleanFileName($file['name']); $filename = preg_replace('/^\d+_/', '', $filename); `
- **Problem / actual:** Temporary image upload path and name cleaning inspected; path containment, permissions and web access remain untested Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** media/working-medias.md (under `manual/en-US/chapters/`).

## MEDIA-003 — No explicit token/ACL check inside ajaxUpload; full Joomla dispatch, inherited authorization and create/update/delete paths remain unverified

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `MEDIA-003` / component / security.
- **Source / context:** `component/admin/src/Controller/MediaController.php:220`; `MediaController::ajaxUpload`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Media source-review follow-up; redSHOP-rmh/component/admin/src/Controller/MediaController.php:220-249
- **Excerpt:** `public function ajaxUpload() { $app  = Factory::getApplication();`
- **Problem / actual:** No explicit token/ACL check inside ajaxUpload; full Joomla dispatch, inherited authorization and create/update/delete paths remain unverified Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** media/working-medias.md (under `manual/en-US/chapters/`).

## MEDIA-004 — Temporary filename collision suffixing inspected; SVG/HTML-like content and collision behaviour remain untested

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `MEDIA-004` / component / security.
- **Source / context:** `component/admin/src/Controller/MediaController.php:230`; `MediaController::ajaxUpload`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Media source-review follow-up; redSHOP-rmh/component/admin/src/Controller/MediaController.php:230-249
- **Excerpt:** `$filename = \Redshop\Component\Libraries\Helper\Media::cleanFileName($file['name']); $filename = preg_replace('/^\d+_/', '', $filename); `
- **Problem / actual:** Temporary filename collision suffixing inspected; SVG/HTML-like content and collision behaviour remain untested Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** media/working-medias.md (under `manual/en-US/chapters/`).

## CODE-040 — Product metadata robot selector uses local detail rather than view detail and may reset saved directives

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CODE-040` / component / seo.
- **Source / context:** `component/admin/tmpl/product/edit_product_meta_data.php:172`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/tmpl/product/edit_product_meta_data.php:172-175; component/admin/src/View/Product/HtmlView.php:813
- **Excerpt:** `<?php echo \Redshop\Component\Libraries\Helper\MetaRobotInfoHelper::renderSelect( 'metarobot_info', (string) ($detail->metarobot_info ?? '')`
- **Problem / actual:** Product metadata robot selector uses local detail rather than view detail and may reset saved directives Source anchor or existing review question only; actual failure is not established.
- **Expected:** Read the saved product detail in the robot selector after verifying actual template scope.
- **Proposed direction:** Read the saved product detail in the robot selector after verifying actual template scope.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test non-default saved values, reopening, unrelated save, global overrides and rendered metadata.
- **Manual tests:** Use disposable products/site and do not alter production indexing.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** product-management/products-redshop.md (under `manual/en-US/chapters/`).

## AUD-003-010 — Investigate integration of legacy transition Update XML with publication workflow

- **Priority / severity / status:** P1 / major potential impact / OPEN; source-level publication-path discrepancy; live update behavior unverified.
- **Original review / component:** `AUD-003-010` / release tooling / compat.
- **Source / context:** `redGulp/tasks/release/documents.js:223-241`; `redGulp/tasks/release/publish.js:184-218`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:94.
- **Excerpt:** The workflow records a generated transition document, but the inspected external adapter path passes only the changelog and current update document.
- **Problem / actual:** The generated legacy transition document is not passed to the external publisher; deployed routing and live behavior are unverified.
- **Expected:** Verify the approved legacy transition contract and implement any needed delivery without mutating historical releases.
- **Proposed direction:** Inspect the legacy update-XML transition and publication contract without publishing or altering historical releases.
- **Impact / regression risks:** Sites using historical update endpoints may miss updates. Preserve review gates, immutable artifacts, destinations and publication ordering.
- **Automated tests:** Use isolated fixtures and mock adapters to test current and legacy paths and failure recovery.
- **Manual tests:** Use an authorized isolated environment; do not publish or alter historical releases.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** getting-started-general/updating-redshop.md (under `manual/en-US/chapters/`).

## AUD-003-008 — Investigate incomplete refund and cancellation integration with subscription and license revocation

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `AUD-003-008` / docs / payments.
- **Source / context:** `docs/redshop-audit-findings.md:75`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:75,95-98
- **Excerpt:** `| AUD-003-008 | High | Lifecycle | Refund and order-cancellation transitions are not fully connected to subscription and license revocation. | Open | | AUD-003-009 | High | Storage | Parallel publication and unsafe storage/path conditions need stronger guarantees. | Open | | AUD-003-010 | High | Update delivery | Legacy transition Update XML is gen`
- **Problem / actual:** Investigate incomplete refund and cancellation integration with subscription and license revocation Source anchor or existing review question only; actual failure is not established.
- **Expected:** Trace refund and cancellation transitions through subscriptions and licenses, preserving existing customer entitlements and historical records.
- **Proposed direction:** Trace refund and cancellation transitions through subscriptions and licenses, preserving existing customer entitlements and historical records.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** orders/order-list.md (under `manual/en-US/chapters/`).

## AUD-003-011 — Investigate atomic subscription and license revoke/reactivate transitions

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `AUD-003-011` / docs / security.
- **Source / context:** `docs/redshop-audit-findings.md:78`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:78
- **Excerpt:** `| AUD-003-011 | High | Licensing | Subscription and license revoke/reactivate operations are not one atomic state transition. | Open | | AUD-003-012 | Medium | API | Rate-limit buckets can be multiplied with attacker-controlled identifiers. | Open | | AUD-003-013 | Medium | Releases | Concurrent release registration can race before uniqueness is re`
- **Problem / actual:** Investigate atomic subscription and license revoke/reactivate transitions Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify subscription and license changes are transactional or design a recoverable equivalent preserving existing state.
- **Proposed direction:** Verify subscription and license changes are transactional or design a recoverable equivalent preserving existing state.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** orders/order-list.md (under `manual/en-US/chapters/`).

## AUD-003-012 — Investigate rate-limit buckets multiplied by attacker-controlled identifiers

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `AUD-003-012` / docs / security.
- **Source / context:** `docs/redshop-audit-findings.md:79`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:79
- **Excerpt:** `| AUD-003-012 | Medium | API | Rate-limit buckets can be multiplied with attacker-controlled identifiers. | Open | | AUD-003-013 | Medium | Releases | Concurrent release registration can race before uniqueness is resolved cleanly. | Open | | AUD-003-014 | Medium | Downloads | Protected downloads need a streaming response path suitable for large pac`
- **Problem / actual:** Investigate rate-limit buckets multiplied by attacker-controlled identifiers Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify actual rate-limit bucket keys and bound attacker-controlled cardinality without locking out valid clients.
- **Proposed direction:** Verify actual rate-limit bucket keys and bound attacker-controlled cardinality without locking out valid clients.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** getting-started-general/introduction-to-redshop.md (under `manual/en-US/chapters/`).

## REF-DL-007 — Review legacy product download path public-root exposure and owner/integrity policy

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `REF-DL-007` / docs / security.
- **Source / context:** `docs/redshop-audit-findings.md:92`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:92
- **Excerpt:** `| REF-DL-007 | High | Legacy media delivery | The older Product controller/token download path can use a public 'PRODUCT_DOWNLOAD_ROOT' and lacks the new immutable hash/owner-policy model. | Open; retained for historical URL compatibility, new software files use the independent private manager |  The refactoring implementation and acceptance matrix`
- **Problem / actual:** Review legacy product download path public-root exposure and owner/integrity policy Source anchor or existing review question only; actual failure is not established.
- **Expected:** Inspect the legacy token download path and define a backward-compatible private-root and ownership policy.
- **Proposed direction:** Inspect the legacy token download path and define a backward-compatible private-root and ownership policy.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** product-management/products-redshop.md (under `manual/en-US/chapters/`).

## CODE-018 — Minimum-order warning is tag-dependent and links hardcoded product/menu; old JS validation is commented out; server enforcement unverified

- **Priority / severity / status:** P1 / major potential impact / OPEN; Security/data/payment risk; full impact or exploitability unverified.
- **Original review / component:** `CODE-018` / libraries / checkout.
- **Source / context:** `libraries/redshop/src/Tags/Sections/Cart.php:336`; `Cart::replace`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Tags/Sections/Cart.php:336-414; src/assets/com_redshop/js/redshop.common.js:2050-2057
- **Excerpt:** `if (strstr($this->template, "{minimum_order_total}")) { if ( Redshop::getConfig()->get('MINIMUM_ORDER_TOTAL') > 0`
- **Problem / actual:** Minimum-order warning is tag-dependent and links hardcoded product/menu; old JS validation is commented out; server enforcement unverified Minimum-order warning is tag-dependent and links hardcoded product/menu; old JS validation is commented out; server enforcement unverified
- **Expected:** Verify server enforcement; if absent, enforce configured minimum in checkout independent of template and remove hardcoded route.
- **Proposed direction:** Verify server enforcement; if absent, enforce configured minimum in checkout independent of template and remove hardcoded route.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test below/equal/above thresholds, absent tags, direct requests and guest/bypass users.
- **Manual tests:** Use mock payments and isolated disposable orders.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/cart.md (under `manual/en-US/chapters/`).

## CODE-012 — Coupon application rejects one remaining use; gift-card mail creates a one-use coupon; isolated PHP mock confirms the count boundary

- **Current source review:** At Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`, `libraries/redshop/src/Helper/CartDiscount.php:146-150` still rejects counts of one and `libraries/redshop/src/Mail/Giftcard.php:64-74` still creates a coupon with count one. The historical mock was not rerun in this checkpoint; full Joomla redemption remains unverified. GitHub Issue: https://github.com/Rmh1978/redSHOP-rmh/issues/69.
- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-012` / libraries / coupon.
- **Source / context:** `libraries/redshop/src/Helper/CartDiscount.php:146`; `CartDiscount::applyCoupon`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Helper/CartDiscount.php:146-150; Mail/Giftcard.php:58-75; isolated PHP mock
- **Excerpt:** `if ($coupon->amount_left <= 1) { // Check if there are coupons left $app->enqueueMessage(Text::_('COM_REDSHOP_DISCOUNT_CODE_ALL_COUPONS_USED'), 'error');`
- **Problem / actual:** Coupon application rejects one remaining use; gift-card mail creates a one-use coupon; isolated PHP mock confirms the count boundary Coupon application rejects one remaining use; gift-card mail creates a one-use coupon; isolated PHP mock confirms the count boundary
- **Expected:** Correct the one-remaining-use boundary and verify gift-card creation and redemption together without altering existing balances.
- **Proposed direction:** Correct the one-remaining-use boundary and verify gift-card creation and redemption together without altering existing balances.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Cover count 0/1/2, gift-card coupon, percent/fixed subtotal boundaries, users with/without prior transactions, overlapping checkouts and rollback.
- **Manual tests:** Use disposable codes and database with mock payments; never issue real gift cards.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** discounts/coupon.md; discounts/gift-cards.md (under `manual/en-US/chapters/`).

## CODE-031 — Purchase-discount and sample coupon duration uses 23*59*59 seconds per configured day

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-031` / libraries / coupon.
- **Source / context:** `libraries/redshop/src/Helper/Cron.php:101`; `Cron::sendMailAfterPurchaseOrder`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Helper/Cron.php:100-101,210-218; libraries/redshop/src/Helper/Sample.php:239-240
- **Excerpt:** `$endDate      = $startDate + (\Redshop\Component\Libraries\Helper\Redshop::getConfig()->get('DISCOUPON_DURATION') * 23 * 59 * 59); $validEndDate = \Redshop\Component\Libraries\Helper\Datetime::convertDateFormat($endDate); `
- **Problem / actual:** Purchase-discount and sample coupon duration uses 23*59*59 seconds per configured day Purchase-discount and sample coupon duration uses 23*59*59 seconds per configured day
- **Expected:** Correct configured day-to-expiry arithmetic and examine existing timestamps and timezone behavior without silently rewriting them.
- **Proposed direction:** Correct configured day-to-expiry arithmetic and examine existing timestamps and timezone behavior without silently rewriting them.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Cover count 0/1/2, gift-card coupon, percent/fixed subtotal boundaries, users with/without prior transactions, overlapping checkouts and rollback.
- **Manual tests:** Use disposable codes and database with mock payments; never issue real gift cards.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/price.md; discounts/coupon.md (under `manual/en-US/chapters/`).

## CODE-041 — Source-confirmed raw percentage value is compared directly to monetary subtotal before percentage calculation; reproduce impact

- **Current source review:** At Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`, `libraries/redshop/src/Helper/CartDiscount.php:153` compares the raw value with the VAT-exclusive product subtotal before the percentage calculation at line 224. Full Joomla runtime impact remains unverified. GitHub Issue: https://github.com/Rmh1978/redSHOP-rmh/issues/70.
- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-041` / libraries / coupon.
- **Source / context:** `libraries/redshop/src/Helper/CartDiscount.php:151`; `CartDiscount::applyCoupon`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Helper/CartDiscount.php:151-157 and 218-225
- **Excerpt:** `}  if ($cart['product_subtotal_excl_vat'] <= $coupon->value) {`
- **Problem / actual:** Source-confirmed raw percentage value is compared directly to monetary subtotal before percentage calculation; reproduce impact Source-confirmed raw percentage value is compared directly to monetary subtotal before percentage calculation; reproduce impact
- **Expected:** Do not compare raw percentage points as currency; validate the calculated monetary discount.
- **Proposed direction:** Do not compare raw percentage points as currency; validate the calculated monetary discount.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Cover count 0/1/2, gift-card coupon, percent/fixed subtotal boundaries, users with/without prior transactions, overlapping checkouts and rollback.
- **Manual tests:** Use disposable codes and database with mock payments; never issue real gift cards.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** discounts/coupon.md (under `manual/en-US/chapters/`).

## CODE-042 — Source-confirmed aggregate loadResult scalar is accessed as an object in user-specific coupon validation; verify runtime effects

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-042` / libraries / coupon.
- **Source / context:** `libraries/redshop/src/Helper/CartDiscount.php:168`; `CartDiscount::applyCoupon`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Helper/CartDiscount.php:168-179
- **Excerpt:** `$query = $db->getQuery(true) ->select('SUM(' . $db->quoteName('coupon_value') . ') AS usertotal') ->from($db->quoteName('#__redshop_coupons_transaction'))`
- **Problem / actual:** Source-confirmed aggregate loadResult scalar is accessed as an object in user-specific coupon validation; verify runtime effects Source-confirmed aggregate loadResult scalar is accessed as an object in user-specific coupon validation; verify runtime effects
- **Expected:** Correct scalar aggregate/ownership handling and examine subsequent flow without weakening user restrictions.
- **Proposed direction:** Correct scalar aggregate/ownership handling and examine subsequent flow without weakening user restrictions.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Cover count 0/1/2, gift-card coupon, percent/fixed subtotal boundaries, users with/without prior transactions, overlapping checkouts and rollback.
- **Manual tests:** Use disposable codes and database with mock payments; never issue real gift cards.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** discounts/coupon.md (under `manual/en-US/chapters/`).

## CODE-004 — Same-type import/export jobs share temporary paths and may interfere; reproduce in isolation

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CODE-004` / libraries / import.
- **Source / context:** `libraries/redshop/src/Plugin/AbstractImportPlugin.php:119`; `AbstractImportPlugin::onUploadFile`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Plugin/AbstractImportPlugin.php:119-131; AbstractExportPlugin.php:147-150
- **Excerpt:** `$this->folder = md5(time());  if (Folder::exists($this->getPath())) {`
- **Problem / actual:** Same-type import/export jobs share temporary paths and may interfere; reproduce in isolation Source anchor or existing review question only; actual failure is not established.
- **Expected:** Allocate distinct job paths and safe cleanup for overlapping imports and exports after verifying existing consumers.
- **Proposed direction:** Allocate distinct job paths and safe cleanup for overlapping imports and exports after verifying existing consumers.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test overlapping jobs, final-day multi-batch boundaries, malformed data, cleanup and interruption.
- **Manual tests:** Use isolated files and disposable records; do not import customer data.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-import.md; import-export/data-export.md (under `manual/en-US/chapters/`).

## IMEX-003 — Shared importer processes rows individually; duplicate IDs, update versus insert and rollback remain untested

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `IMEX-003` / libraries / import.
- **Source / context:** `libraries/redshop/src/Plugin/AbstractImportPlugin.php:260`; `AbstractImportPlugin::importing`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Import/export source-review follow-up in master; redSHOP-rmh/libraries/redshop/src/Plugin/AbstractImportPlugin.php:260-309
- **Excerpt:** ` if (empty($files)) { Folder::delete($this->getPath() . '/' . $this->folder);`
- **Problem / actual:** Shared importer processes rows individually; duplicate IDs, update versus insert and rollback remain untested Source anchor or existing review question only; actual failure is not established.
- **Expected:** Isolate each job and reconcile filtering/counts without changing existing import/export formats.
- **Proposed direction:** Isolate each job and reconcile filtering/counts without changing existing import/export formats.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test overlapping jobs, final-day multi-batch boundaries, malformed data, cleanup and interruption.
- **Manual tests:** Use isolated files and disposable records; do not import customer data.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-import.md (under `manual/en-US/chapters/`).

## CODE-019 — Confirmation subscription path prepares pending state but inserts published=1; bulk recipients filter published records

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-019` / libraries / newsletter.
- **Source / context:** `libraries/redshop/src/Helper/Newsletter.php:165`; `Newsletter::subscribe`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Helper/Newsletter.php:165-195; component/admin/src/Model/NewslettersModel.php:148-161
- **Excerpt:** `$data['date']          = time(); $data['newsletter_id'] = $newsletter; $data['published']     = 1;`
- **Problem / actual:** Confirmation subscription path prepares pending state but inserts published=1; bulk recipients filter published records Confirmation subscription path prepares pending state but inserts published=1; bulk recipients filter published records
- **Expected:** Persist the intended pending confirmation state and ensure recipient selection respects confirmation.
- **Proposed direction:** Persist the intended pending confirmation state and ensure recipient selection respects confirmation.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test confirmation on/off, recipient selection before/after confirmation, mail failures and retries with a mail sink.
- **Manual tests:** Use disposable addresses and no live mail provider.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/newsletter.md; communication/newletters-subcribers.md (under `manual/en-US/chapters/`).

## CODE-007 — Currency Layer explicit-target conversion returns unchanged amount without loading rates in isolated mock

- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-007` / libraries / pricing.
- **Source / context:** `libraries/redshop/src/Currency/CurrencyLayer.php:82`; `CurrencyLayer::convert`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Currency/CurrencyLayer.php:70-103; isolated PHP mock
- **Excerpt:** `if (!$targetCurrency) { $targetCurrency = \Redshop\Component\Libraries\Entity\Currency::getInstance((int) $session->get('product_currency'))->get('code'); `
- **Problem / actual:** Currency Layer explicit-target conversion returns unchanged amount without loading rates in isolated mock Currency Layer explicit-target conversion returns unchanged amount without loading rates in isolated mock
- **Expected:** Load/validate conversion rates for explicit target currencies and surface unavailable rates instead of using an incorrect identity rate.
- **Proposed direction:** Load/validate conversion rates for explicit target currencies and surface unavailable rates instead of using an incorrect identity rate.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test different currencies or price fields, boundary values, provider failures and persisted cart/order totals.
- **Manual tests:** Compare independent calculations in an isolated shop without real transactions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** vat/currency.md (under `manual/en-US/chapters/`).

## COMM-004 — Verify placeholder escaping and email header injection protections

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `COMM-004` / libraries / security.
- **Source / context:** `libraries/redshop/src/Helper/Mail.php:39`; `Mail::getTemplate`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `public static function getTemplate($templateId = 0, $section = '', $extraCond = '') { \Redshop\Component\Libraries\Helper\LanguageHelper::getLanguage()->load('com_redshop', JPATH_SITE);`
- **Problem / actual:** Verify placeholder escaping and email header injection protections Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** communication/mails.md (under `manual/en-US/chapters/`).

## CUST-002 — Custom field guide updated; complete storage, sanitization and frontend/checkout audit and isolated tests

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CUST-002` / libraries / security.
- **Source / context:** `libraries/redshop/src/Helper/ExtraFields.php:1451`; `ExtraFields::extraFieldSave`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Table/FieldTable.php; libraries/redshop/src/Helper/ExtraFields.php
- **Excerpt:** `$db    = \Redshop\Component\Libraries\Helper\Joomla::createDatabase(); $query = $db->getQuery(true); `
- **Problem / actual:** Custom field guide updated; complete storage, sanitization and frontend/checkout audit and isolated tests Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customization/redshop.md (under `manual/en-US/chapters/`).

## CUST-010 — Field-group guide updated; verify field/group access and output permissions on an isolated installation

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CUST-010` / libraries / security.
- **Source / context:** `libraries/redshop/src/Helper/ExtraFields.php:875`; `ExtraFields::listAllField`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/forms/fieldgroup.xml; libraries/redshop/src/Helper/ExtraFields.php:875-923
- **Excerpt:** `public static function listAllField( $fieldSection = '', $sectionId = 0,`
- **Problem / actual:** Field-group guide updated; verify field/group access and output permissions on an isolated installation Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customization/custom.md (under `manual/en-US/chapters/`).

## CODE-036 — Login greeting outputs configured text and user-derived names without explicit HTML escaping; upstream handling requires verification

- **Priority / severity / status:** P1 / major potential impact / OPEN; Security/data/payment risk; full impact or exploitability unverified.
- **Original review / component:** `CODE-036` / modules / security.
- **Source / context:** `modules/site/mod_redshop_logingreeting/tmpl/default.php:19`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/modules/site/mod_redshop_logingreeting/tmpl/default.php:19-23
- **Excerpt:** `<?php else: ?> <div class="loginname"> <?php echo $maintext . ' ' . \Redshop\Component\Libraries\Helper\Order::getUserFullname($user->id); ?>`
- **Problem / actual:** Login greeting outputs configured text and user-derived names without explicit HTML escaping; upstream handling requires verification Login greeting outputs configured text and user-derived names without explicit HTML escaping; upstream handling requires verification
- **Expected:** Trace trusted/untrusted inputs and escape output at the HTML boundary if not already protected.
- **Proposed direction:** Trace trusted/untrusted inputs and escape output at the HTML boundary if not already protected.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** module-redshop/login-greeting.md (under `manual/en-US/chapters/`).

## CODE-037 — Shopper-group menu helper has an unassigned cache key and unused authorized levels; verify cross-user isolation and menu access

- **Priority / severity / status:** P1 / major potential impact / OPEN; Security/data/payment risk; full impact or exploitability unverified.
- **Original review / component:** `CODE-037` / modules / security.
- **Source / context:** `modules/site/mod_redshop_shoppergroup_category/helper.php:36`; `RedmodMenuHelper::getList`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/modules/site/mod_redshop_shoppergroup_category/helper.php:36-40 and 153
- **Excerpt:** `$levels = $user->getAuthorisedViewLevels(); asort($levels); $cache = Factory::getContainer()->get(CacheControllerFactoryInterface::class)->createCacheController('mod_menu', '');`
- **Problem / actual:** Shopper-group menu helper has an unassigned cache key and unused authorized levels; verify cross-user isolation and menu access Shopper-group menu helper has an unassigned cache key and unused authorized levels; verify cross-user isolation and menu access
- **Expected:** Verify cache semantics and use a correctly scoped key and menu-access checks if the risk is reproduced.
- **Proposed direction:** Verify cache semantics and use a correctly scoped key and menu-access checks if the risk is reproduced.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** module-redshop/shoppergroup-category.md (under `manual/en-US/chapters/`).

## CODE-005 — Order export excludes the exact first and last seconds of selected dates

- **GitHub:** Rmh1978/redSHOP-rmh#111.
- **Correction at Core `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`:** `getTotal()` calls `getQuery()`, which sets `$this->toDate` to the end-of-day value before `getTotal()` uses that same property again. The previously asserted midnight-versus-end-of-day mismatch is therefore not established by this source. Keep the final-day and multi-batch behavior as an open isolated-test question; do not create an Issue asserting the original mismatch.
- **New boundary evidence:** `getQuery()` uses strict `>` at the starting midnight and strict `<` at 23:59:59 on the ending date. A network-free PHP mock invoked the actual query methods and checked both count and data predicates: the exact first and last seconds are excluded while adjacent seconds pass. This does not verify Joomla, SQL execution, batching or timezone configuration.
- **Priority / severity / status:** P1 / major potential impact / OPEN; source behavior confirmed in isolated query mock.
- **Original review / component:** `CODE-005` / plugins / import.
- **Source / context:** `plugins/redshop_export/order/order.php:80`; `PlgRedshop_ExportOrder::getTotal`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_export/order/order.php:70-90,159-168
- **Excerpt:** `->clear('group') ->select('COUNT(DISTINCT oi.order_item_id)'); `
- **Problem / actual:** The exact first and last seconds of selected dates fail the strict date comparisons. The earlier conclusion that the count adds a different midnight bound overlooked the mutated end-date property.
- **Expected:** Use consistent inclusive final-day boundaries for export count and data selection.
- **Proposed direction:** Use consistent inclusive-start and exclusive-next-day bounds for export count and data selection; preserve timezone handling.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test overlapping jobs, final-day multi-batch boundaries, malformed data, cleanup and interruption.
- **Manual tests:** Use isolated files and disposable records; do not import customer data.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-export.md (under `manual/en-US/chapters/`).

## ECON-003 — Verify invoice draft/booking, numbering and duplicate posting prevention

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-003` / plugins / integration.
- **Source / context:** `plugins/economic/economic/economic.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `<?php /** * @package     RedSHOP`
- **Problem / actual:** Verify invoice draft/booking, numbering and duplicate posting prevention Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Proposed direction:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Mock authentication, provider success/error, duplicate, retry and reconciliation behavior.
- **Manual tests:** Use only authorized test-provider accounts and disposable data; no real bookings.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/sync.md (under `manual/en-US/chapters/`).

## ECON-005 — Product and account-group configuration documented; synchronization direction, identifiers and conflicts remain untested

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-005` / plugins / integration.
- **Source / context:** `plugins/economic/economic/economic.php:1083`; `PlgEconomicEconomic::storeProduct`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** e-conomic source-review follow-up in master; redSHOP-rmh/plugins/economic/economic/economic.php:1083,1154
- **Excerpt:** `return $this->client->Product_UpdateFromData(array('data' => $prdinfo))->Product_UpdateFromDataResult; } `
- **Problem / actual:** Product and account-group configuration documented; synchronization direction, identifiers and conflicts remain untested Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Proposed direction:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Mock authentication, provider success/error, duplicate, retry and reconciliation behavior.
- **Manual tests:** Use only authorized test-provider accounts and disposable data; no real bookings.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/sync.md (under `manual/en-US/chapters/`).

## ECON-006 — Test errors, retries, timeout, rate limiting and accounting reconciliation

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-006` / plugins / integration.
- **Source / context:** `plugins/economic/economic/economic.php:137`; `PlgEconomicEconomic::onEconomicConnect`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `public function onEconomicConnect() { // Check whether plugin has been unpublished`
- **Problem / actual:** Test errors, retries, timeout, rate limiting and accounting reconciliation Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Proposed direction:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Mock authentication, provider success/error, duplicate, retry and reconciliation behavior.
- **Manual tests:** Use only authorized test-provider accounts and disposable data; no real bookings.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/sync.md (under `manual/en-US/chapters/`).

## ECON-008 — Verify invoice reversal, refunds and credit-note handling

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-008` / plugins / integration.
- **Source / context:** `plugins/economic/economic/economic.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `<?php /** * @package     RedSHOP`
- **Problem / actual:** Verify invoice reversal, refunds and credit-note handling Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Proposed direction:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Mock authentication, provider success/error, duplicate, retry and reconciliation behavior.
- **Manual tests:** Use only authorized test-provider accounts and disposable data; no real bookings.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/sync.md (under `manual/en-US/chapters/`).

## CODE-001 — COD handler returns undefined constant `fasle` for a nonmatching plugin element; isolated invocation throws

- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-001` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_cod/rs_payment_cod.php:31`; `PlgRedshop_PaymentRs_Payment_Cod::onPrePayment`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** FAQ source review; redSHOP-rmh/plugins/redshop_payment/rs_payment_cod/rs_payment_cod.php:28-31; confirm actual event dispatch
- **Excerpt:** `return fasle; } `
- **Problem / actual:** COD handler returns undefined constant `fasle` for a nonmatching plugin element; isolated invocation throws COD handler returns undefined constant `fasle` for a nonmatching plugin element; isolated invocation throws
- **Expected:** Return the correct nonmatching-handler result instead of an undefined constant; preserve multi-plugin event dispatch.
- **Proposed direction:** Return the correct nonmatching-handler result instead of an undefined constant; preserve multi-plugin event dispatch.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** faq/payment.md (under `manual/en-US/chapters/`).

## CODE-002 — PayPal notification handler reads request with getInt then indexes it as an array; isolated mock raises array-offset error

- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-002` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_paypal/rs_payment_paypal.php:49`; `plgRedshop_paymentrs_payment_paypal::onNotifyPaymentrs_payment_paypal`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** FAQ source review; redSHOP-rmh/plugins/redshop_payment/rs_payment_paypal/rs_payment_paypal.php:49-55; verify actual Joomla request flow
- **Excerpt:** `$request         = \Redshop\Component\Libraries\IO\Input::getInt('request'); $verify_status   = $this->params->get('verify_status', ''); $invalid_status  = $this->params->get('invalid_status', '');`
- **Problem / actual:** PayPal notification handler reads request with getInt then indexes it as an array; isolated mock raises array-offset error PayPal notification handler reads request with getInt then indexes it as an array; isolated mock raises array-offset error
- **Expected:** Preserve or correctly obtain validated notification input as an array; separately verify provider authentication and status transitions.
- **Proposed direction:** Preserve or correctly obtain validated notification input as an array; separately verify provider authentication and status transitions.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** faq/paypal.md (under `manual/en-US/chapters/`).

## CODE-029 — Flatpay and Bambora currency selectors contain GPB rather than GBP

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-029` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_flatpay/rs_payment_flatpay.xml:100`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_payment/rs_payment_flatpay/rs_payment_flatpay.xml; plugins/redshop_payment/rs_payment_bambora/rs_payment_bambora.xml
- **Excerpt:** `<option value="GPB">GPB</option> <option value="USD">USD</option> </field>`
- **Problem / actual:** Flatpay and Bambora currency selectors contain GPB rather than GBP Flatpay and Bambora currency selectors contain GPB rather than GBP
- **Expected:** Correct GBP in both manifests with an explicit compatibility migration for existing GPB values.
- **Proposed direction:** Correct GBP in both manifests with an explicit compatibility migration for existing GPB values.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/flatpay.md; plugin-redshop/bambora.md (under `manual/en-US/chapters/`).

## CODE-045 — Flatpay sends unsuccessful provider lookups and unknown or pending states through the configured failure branch

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-045` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_flatpay/src/Extension/Flatpay.php:397`; `Flatpay::onNotifyPaymentrs_payment_flatpay`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_payment/rs_payment_flatpay/src/Extension/Flatpay.php:394-400,464-489; redSHOP-rmh/docs/codex-progress.md:25-29
- **Excerpt:** `$invoicePaid = ($invoiceData['status'] ?? '') === 'success' && in_array($invoiceData['body']['state'] ?? '', ['authorized', 'settled'], true); `
- **Problem / actual:** Flatpay sends unsuccessful provider lookups and unknown or pending states through the configured failure branch Flatpay sends unsuccessful provider lookups and unknown or pending states through the configured failure branch
- **Expected:** Treat pending, unknown and failed lookups as indeterminate; only a verified refusal may apply the configured failure status, preserving replay and manual changes.
- **Proposed direction:** Treat pending, unknown and failed lookups as indeterminate; only a verified refusal may apply the configured failure status, preserving replay and manual changes.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/flatpay.md (under `manual/en-US/chapters/`).

## CODE-013 — Promotion date check duplicates the two-digit year; isolated mock rejects a qualifying same-day promotion

- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-013` / plugins / promotion.
- **Source / context:** `plugins/redshop_promotion/promotion/helpers/Helper.php:94`; `Helper::checkValidTimePromotion`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_promotion/promotion/helpers/Helper.php:92-105; isolated PHP mock
- **Excerpt:** `$today = date('yy-m-d');  $isGreaterThanOrEqualFromDate = true;`
- **Problem / actual:** Promotion date check duplicates the two-digit year; isolated mock rejects a qualifying same-day promotion Promotion date check duplicates the two-digit year; isolated mock rejects a qualifying same-day promotion
- **Expected:** Correct the promotion date format and establish inclusive boundaries and timezone semantics.
- **Proposed direction:** Correct the promotion date format and establish inclusive boundaries and timezone semantics.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test date boundaries and time zones; use distinct promotion/product IDs and assert award, stock and order effects.
- **Manual tests:** Run disposable products and mock orders only.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** discounts/promotions.md (under `manual/en-US/chapters/`).

## CODE-014 — Promotion award helper looks up promotion ID as product ID and passes award ID as user ID; isolated mock shows wrong category source

- **Priority / severity / status:** P1 / major potential impact / OPEN; Confirmed in isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-014` / plugins / promotion.
- **Source / context:** `plugins/redshop_promotion/promotion/helpers/Helper.php:205`; `Helper::prepareProductAward`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_promotion/promotion/helpers/Helper.php:203-225; libraries/redshop/src/Helper/Product.php:5974-5978; isolated PHP mock
- **Excerpt:** `$product = \Redshop\Component\Libraries\Helper\Product::getProductById($promotion_id, $award_id, $amount);  return [`
- **Problem / actual:** Promotion award helper looks up promotion ID as product ID and passes award ID as user ID; isolated mock shows wrong category source Promotion award helper looks up promotion ID as product ID and passes award ID as user ID; isolated mock shows wrong category source
- **Expected:** Pass the actual award product ID and correct arguments when looking up the award.
- **Proposed direction:** Pass the actual award product ID and correct arguments when looking up the award.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test date boundaries and time zones; use distinct promotion/product IDs and assert award, stock and order effects.
- **Manual tests:** Run disposable products and mock orders only.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** discounts/promotions.md (under `manual/en-US/chapters/`).

## ECON-002 — Token callback and plugin parameter storage inspected; full dispatch, authorization, CSRF, storage and redaction remain unverified

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-002` / plugins / security.
- **Source / context:** `plugins/economic/economic/economic.php:112`; `PlgEconomicEconomic::onAjaxEconomicStoreAgreementToken`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** e-conomic source-review follow-up in master; redSHOP-rmh/plugins/economic/economic/economic.php:112-128
- **Excerpt:** `public function onAjaxEconomicStoreAgreementToken() { $app    = Factory::getApplication();`
- **Problem / actual:** Token callback and plugin parameter storage inspected; full dispatch, authorization, CSRF, storage and redaction remain unverified Source anchor or existing review question only; actual failure is not established.
- **Expected:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Proposed direction:** First trace the complete authorization, validation, output and cache boundaries; fix only a reproduced gap with least privilege.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Add targeted tests for authorized/unauthorized, tokenless, malformed, cross-user and escaping cases relevant to this path.
- **Manual tests:** Use benign values and disposable accounts in a separately authorized isolated environment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/setup.md (under `manual/en-US/chapters/`).

## CODE-010 — Product category-search option submits c.name but checks c.category_name when restoring selection; verify display and subsequent search

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-010` / component / admin.
- **Source / context:** `component/admin/tmpl/products/default.php:152`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Product list source review; redSHOP-rmh/component/admin/tmpl/products/default.php:152-157
- **Excerpt:** `} ?>> <?php echo Text::_("COM_REDSHOP_CATEGORY") ?> </option>`
- **Problem / actual:** Product category-search option submits c.name but checks c.category_name when restoring selection; verify display and subsequent search Product category-search option submits c.name but checks c.category_name when restoring selection; verify display and subsequent search
- **Expected:** Use the same value for category-search submission and restored selection.
- **Proposed direction:** Use the same value for category-search submission and restored selection.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise successful and failed saves, existing values, filters and relevant permission boundaries.
- **Manual tests:** Verify the administrator UI on isolated Joomla 5 and 6.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** product-management/products-redshop.md (under `manual/en-US/chapters/`).

**Related price-list evidence at `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`:** `component/admin/tmpl/products/listing.php:79-85` submits `c.category_name`; `ProductsModel::_buildQuery` uses that value in the search predicate, while `component/admin/sql/install/mysql/install.sql:123-145` defines `c.name`, not `c.category_name`. An isolated PHP query mock confirmed the generated predicate. Actual SQL execution and Joomla UI remain unverified. Extend GitHub #74 to cover both views rather than creating a duplicate.

## CODE-017 — Users-list tax-exempt-requested filter checks exemption and approval instead of request field

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-017` / component / admin.
- **Source / context:** `component/admin/src/Model/UsersModel.php:43`; `UsersModel::_buildQuery`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/tmpl/users/default.php:79-81; component/admin/src/Model/UsersModel.php:43-46; component/admin/tmpl/user/edit_billing.php:355-396
- **Excerpt:** `}  if ($tax_exempt_request_filter != 'select') {`
- **Problem / actual:** Users-list tax-exempt-requested filter checks exemption and approval instead of request field Users-list tax-exempt-requested filter checks exemption and approval instead of request field
- **Expected:** Filter on the intended tax-exemption-request field without changing existing exemption state.
- **Proposed direction:** Filter on the intended tax-exemption-request field without changing existing exemption state.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise successful and failed saves, existing values, filters and relevant permission boundaries.
- **Manual tests:** Verify the administrator UI on isolated Joomla 5 and 6.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** users/user-management.md (under `manual/en-US/chapters/`).

## CODE-030 — Reset-terms controller passes no user ID but helper returns for ID zero

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-030` / component / admin.
- **Source / context:** `component/admin/src/Controller/ConfigurationController.php:576`; `ConfigurationController::resetTermsCondition`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Controller/ConfigurationController.php:576-580; libraries/redshop/src/Helper/User.php:170-176
- **Excerpt:** `public function resetTermsCondition() { \Redshop\Component\Libraries\Helper\User::updateUserTermsCondition();`
- **Problem / actual:** Reset-terms controller passes no user ID but helper returns for ID zero Reset-terms controller passes no user ID but helper returns for ID zero
- **Expected:** Define and implement authorized terms reset behavior without silently changing existing acceptance records.
- **Proposed direction:** Define and implement authorized terms reset behavior without silently changing existing acceptance records.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise successful and failed saves, existing values, filters and relevant permission boundaries.
- **Manual tests:** Verify the administrator UI on isolated Joomla 5 and 6.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/user.md (under `manual/en-US/chapters/`).

## CODE-034 — Question model failure returns a truthy error array that controller reports as saved

- **Current verification:** At revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`, the actual model and controller with a false-returning parent-save stub set the success redirect for both Save and Apply. Apply also emitted a missing `parent_id` warning. No database, Joomla UI or mail was tested. GitHub #103.
- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-034` / component / admin.
- **Source / context:** `component/admin/src/Model/QuestionModel.php:84`; `QuestionModel::save`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Model/QuestionModel.php:84-85; component/admin/src/Controller/QuestionController.php:65-72. Historical revision `67dd75b6a0` returned false on failure; closed #59 reported a green error message, not a false success message.
- **Excerpt:** `if (!parent::save($data)) { return ['error' => true]; }`
- **Problem / actual:** Question model failure returns a truthy error array that controller reports as saved Question model failure returns a truthy error array that controller reports as saved
- **Expected:** Return a consistent failure result and ensure the controller does not report or send after a failed save.
- **Proposed direction:** Return a consistent failure result and ensure the controller does not report or send after a failed save.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise successful and failed saves, existing values, filters and relevant permission boundaries.
- **Manual tests:** Verify the administrator UI on isolated Joomla 5 and 6.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customer-input/questions.md (under `manual/en-US/chapters/`).

## INPUT-004 — Test moderation, publication state and notification workflows

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `INPUT-004` / component / admin.
- **Source / context:** `component/site/src/Controller/ProductratingController.php:59`; `ProductratingController::submit`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `if (!$user->id && \Redshop\Component\Libraries\Helper\Redshop::getConfig()->get('RATING_REVIEW_LOGIN_REQUIRED')) { $app->enqueueMessage(Text::_('COM_REDSHOP_ALERTNOTAUTH_REVIEW'), 'warning'); $this->setRedirect(\Redshop\Component\Libraries\IO\Route::_($link));`
- **Problem / actual:** Test moderation, publication state and notification workflows Source anchor or existing review question only; actual failure is not established.
- **Expected:** Correct the identified field, mapping or error path while preserving existing admin data and permissions.
- **Proposed direction:** Correct the identified field, mapping or error path while preserving existing admin data and permissions.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise successful and failed saves, existing values, filters and relevant permission boundaries.
- **Manual tests:** Verify the administrator UI on isolated Joomla 5 and 6.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** customer-input/rating-review.md (under `manual/en-US/chapters/`).

## IMEX-007 — Legacy jQuery upload components found; Joomla 6 operation remains untested

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `IMEX-007` / component / compat.
- **Source / context:** `component/admin/tmpl/import/default.php:16`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Import/export source-review follow-up in master; redSHOP-rmh/component/admin/tmpl/import/default.php:16-19
- **Excerpt:** `\Redshop\Component\Libraries\Html\RedshopJquery::ui();  HTMLHelper::script('com_redshop/jquery.iframe-transport.min.js', ['version' => 'auto', 'relative' => true]);`
- **Problem / actual:** Legacy jQuery upload components found; Joomla 6 operation remains untested Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Proposed direction:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-import.md (under `manual/en-US/chapters/`).

## M-0040 — Audit shipping-rate jQuery and Joomla.submitbutton for Joomla 6

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `M-0040` / component / compat.
- **Source / context:** `component/admin/tmpl/shippingrate/edit.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md
- **Excerpt:** `<?php /** * @package     RedSHOP.Backend`
- **Problem / actual:** Audit shipping-rate jQuery and Joomla.submitbutton for Joomla 6 Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Proposed direction:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** shipping/shipping-methods.md (under `manual/en-US/chapters/`).

## M-0060 — Check order-list jQuery/custom JS for Joomla 6 compatibility

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `M-0060` / component / compat.
- **Source / context:** `component/admin/tmpl/orders/default.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop_stage10_orders/FOLLOW-UP-TRACKER-ADDITIONS.md
- **Excerpt:** `<?php  /**`
- **Problem / actual:** Check order-list jQuery/custom JS for Joomla 6 compatibility Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Proposed direction:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** orders/order-list.md (under `manual/en-US/chapters/`).

## M-0128 — Review Joomla 6 compatibility of stockroom admin JavaScript

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `M-0128` / component / compat.
- **Source / context:** `component/admin/tmpl/stockroomlisting/default.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop_stage9_stockroom/FOLLOW-UP-TRACKER-ADDITIONS.md
- **Excerpt:** `<?php  /**`
- **Problem / actual:** Review Joomla 6 compatibility of stockroom admin JavaScript Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Proposed direction:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** stockroom/inventory-stockroom.md (under `manual/en-US/chapters/`).

## IMEX-006 — Test UTF-8, separators, dates, decimals and CSV formula injection

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `IMEX-006` / component / import.
- **Source / context:** `component/admin/tmpl/export/default.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stage section in master register
- **Excerpt:** `<?php  /**`
- **Problem / actual:** Test UTF-8, separators, dates, decimals and CSV formula injection Source anchor or existing review question only; actual failure is not established.
- **Expected:** Isolate each job and reconcile filtering/counts without changing existing import/export formats.
- **Proposed direction:** Isolate each job and reconcile filtering/counts without changing existing import/export formats.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test overlapping jobs, final-day multi-batch boundaries, malformed data, cleanup and interruption.
- **Manual tests:** Use isolated files and disposable records; do not import customer data.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** import-export/data-export.md (under `manual/en-US/chapters/`).

## CODE-009 — Two administrator order-item paths assign supplier_id from manufacturer_id; determine affected workflows and downstream use with distinct disposable IDs

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-009` / component / orders.
- **Source / context:** `component/admin/src/Model/OrderModel.php:314`; `OrderModel::neworderitem`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Supplier source review; redSHOP-rmh/component/admin/src/Model/OrderModel.php:314; component/admin/src/Model/AddorderModel.php:360
- **Excerpt:** `$orderitemdata->supplier_id                 = $product->manufacturer_id; $orderitemdata->product_id                  = $productId; $orderitemdata->order_item_sku              = $product->product_number;`
- **Problem / actual:** Two administrator order-item paths assign supplier_id from manufacturer_id; determine affected workflows and downstream use with distinct disposable IDs Two administrator order-item paths assign supplier_id from manufacturer_id; determine affected workflows and downstream use with distinct disposable IDs
- **Expected:** Use the product supplier ID in both order-item creation paths after verifying downstream consumers.
- **Proposed direction:** Use the product supplier ID in both order-item creation paths after verifying downstream consumers.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise distinct IDs, filtered and paginated exports, duplicate checks and failure propagation as applicable.
- **Manual tests:** Use disposable orders and a mail sink on an isolated shop.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** product-management/supplier-product.md (under `manual/en-US/chapters/`).

## CODE-016 — Quotation export route points to singular view; plural CSV handler does not enable its joined CSV model query

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-016` / component / orders.
- **Source / context:** `component/admin/src/View/Quotations/HtmlView.php:72`; `HtmlView::displayCsv`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/View/Quotations/HtmlView.php:34-39,72-99; component/admin/src/Model/QuotationsModel.php:47-75,105-112
- **Excerpt:** `{ /** @var \Redshop\Component\Administrator\Model\QuotationsModel $model */ $model = \Redshop\Component\Libraries\Helper\ModelHelper::getModel('Quotations');`
- **Problem / actual:** Quotation export route points to singular view; plural CSV handler does not enable its joined CSV model query Quotation export route points to singular view; plural CSV handler does not enable its joined CSV model query
- **Expected:** Align export route, selected rows, CSV model state and columns after confirming intended behavior.
- **Proposed direction:** Align export route, selected rows, CSV model state and columns after confirming intended behavior.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise distinct IDs, filtered and paginated exports, duplicate checks and failure propagation as applicable.
- **Manual tests:** Use disposable orders and a mail sink on an isolated shop.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** orders/quotations.md (under `manual/en-US/chapters/`).

## CODE-023 — SEO hints list saving in titles and keywords but inspected product paths only replace it in description

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-023` / component / seo.
- **Source / context:** `component/admin/tmpl/configuration/default_seo.php:90`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/tmpl/configuration/default_seo.php:90,325; component/site/src/View/Product/HtmlView.php:154-185,283-309,369-400
- **Excerpt:** `<span class="redshop_tags">{saving}</span> </td> <td>`
- **Problem / actual:** SEO hints list saving in titles and keywords but inspected product paths only replace it in description SEO hints list saving in titles and keywords but inspected product paths only replace it in description
- **Expected:** Align the advertised saving tag with supported metadata replacement or correct the hint after deciding intended support.
- **Proposed direction:** Align the advertised saving tag with supported metadata replacement or correct the hint after deciding intended support.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test non-default saved values, reopening, unrelated save, global overrides and rendered metadata.
- **Manual tests:** Use disposable products/site and do not alter production indexing.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/seo.md (under `manual/en-US/chapters/`).

## CODE-024 — SEO menu alias inputs are overwritten from selected menu aliases on form load/change

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-024` / component / seo.
- **Source / context:** `component/admin/tmpl/configuration/default_seo_general.php:396`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/tmpl/configuration/default_seo_general.php:396-410
- **Excerpt:** `function bindSelect(select) { const aliasFieldName = select.getAttribute('data-alias-field'); if (!aliasFieldName) return;`
- **Problem / actual:** SEO menu alias inputs are overwritten from selected menu aliases on form load/change SEO menu alias inputs are overwritten from selected menu aliases on form load/change
- **Expected:** Preserve explicit aliases on load and change unless a user intentionally selects replacement.
- **Proposed direction:** Preserve explicit aliases on load and change unless a user intentionally selects replacement.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test non-default saved values, reopening, unrelated save, global overrides and rendered metadata.
- **Manual tests:** Use disposable products/site and do not alter production indexing.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/seo.md (under `manual/en-US/chapters/`).

## M-0121 — Root Composer declares PHP ^8.3 and Joomla ^5.4 || ^6.0; release example says PHP 8.2/Joomla 5.4; package matrix and Joomla 6 upgrade remain unverified

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `M-0121` / composer.json / compat.
- **Source / context:** `composer.json:6`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop004_phase1_3_revised/FOLLOW-UP-TRACKER.md; installation and requirements source review in master
- **Excerpt:** `"require": { "php": "^8.3", "phpmd/phpmd": "^2.6",`
- **Problem / actual:** Root Composer declares PHP ^8.3 and Joomla ^5.4 || ^6.0; release example says PHP 8.2/Joomla 5.4; package matrix and Joomla 6 upgrade remain unverified Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Proposed direction:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** getting-started-general/redshop-minimum-requirements.md (under `manual/en-US/chapters/`).

## AUD-003-013 — Investigate concurrent release registration and uniqueness handling

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; source-level concurrency investigation; database runtime behavior unverified.
- **Original review / component:** `AUD-003-013` / library / releases.
- **Source / context:** `libraries/redshop/src/Subscription/SoftwareReleasePublisher.php:65-96`; `SoftwareReleaseRepository.php:81-98`; `component/admin/sql/install/mysql/install.sql:486`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:97.
- **Excerpt:** The publisher looks up a release identity before inserting it; the schema has a unique index.
- **Problem / actual:** Concurrent requests may both find no existing release before one encounters a unique-key conflict; actual database behavior under concurrency has not been tested.
- **Expected:** Verify release registration uniqueness and concurrent retry behavior against current database constraints.
- **Proposed direction:** Verify release registration uniqueness and concurrent retry behavior against current database constraints.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test simultaneous same-content and different-content registrations using isolated database fixtures.
- **Manual tests:** Use an authorized isolated environment; do not publish or alter historical releases.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** getting-started-general/updating-redshop.md (under `manual/en-US/chapters/`).

## CODE-033 — Dashboard expects four aggregates but receives order IDs and user-info IDs unioned with a visitor count

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-033` / libraries / admin.
- **Source / context:** `libraries/redshop/src/Helper/Statistic.php:26`; `Statistic::getStatisticDashboard`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/tmpl/redshop/default.php:45-112; libraries/redshop/src/Helper/Statistic.php:26-48
- **Excerpt:** `public static function getStatisticDashboard() { $db = \Redshop\Component\Libraries\Helper\Joomla::createDatabase();`
- **Problem / actual:** Dashboard expects four aggregates but receives order IDs and user-info IDs unioned with a visitor count Dashboard expects four aggregates but receives order IDs and user-info IDs unioned with a visitor count
- **Expected:** Return four correctly defined dashboard aggregates and handle empty datasets.
- **Proposed direction:** Return four correctly defined dashboard aggregates and handle empty datasets.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Exercise successful and failed saves, existing values, filters and relevant permission boundaries.
- **Manual tests:** Verify the administrator UI on isolated Joomla 5 and 6.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** getting-started-general/redshop-main-menu.md (under `manual/en-US/chapters/`).

## CODE-021 — Category long-description tags use short-description limit and suffix in inspected paths

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-021` / libraries / catalog.
- **Source / context:** `libraries/redshop/src/Tags/Sections/Categorydetail.php:348`; `Categorydetail::replaceCategoryDetail`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/tmpl/configuration/default_category_suffix.php:15-48; libraries/redshop/src/Tags/Sections/Categorydetail.php:348-365; libraries/redshop/src/Tags/Sections/Categoryproduct.php:284-309
- **Excerpt:** `if (strpos($template, '{category_main_description}') !== false) { $mainCatDesc = \Redshop\Component\Libraries\Helper\Utility::maxChars( $this->maincat->description,`
- **Problem / actual:** Category long-description tags use short-description limit and suffix in inspected paths Category long-description tags use short-description limit and suffix in inspected paths
- **Expected:** Use the matching long/short limits and suffixes in each description path.
- **Proposed direction:** Use the matching long/short limits and suffixes in each description path.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test current and missing selections, distinct records, related pages and client/server behavior.
- **Manual tests:** Use disposable products and verify storefront output in isolation.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/categories.md (under `manual/en-US/chapters/`).

## CODE-022 — Next-product image branch checks previous image before rendering next image

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-022` / libraries / catalog.
- **Source / context:** `libraries/redshop/src/Tags/Sections/Product.php:1372`; `Product::replaceNavigationNextPrev`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/libraries/redshop/src/Tags/Sections/Product.php:1372-1385
- **Excerpt:** `} elseif ((int) \Redshop\Component\Libraries\Helper\Redshop::getConfig()->get('DEFAULT_LINK_FIND') === 1) { $contentNextButton = \Redshop\Component\Libraries\Helper\Redshop::getConfig()->get('CUSTOM_NEXT_LINK_FIND'); } elseif (`
- **Problem / actual:** Next-product image branch checks previous image before rendering next image Next-product image branch checks previous image before rendering next image
- **Expected:** Check the next image rather than the previous image when displaying next-product navigation.
- **Proposed direction:** Check the next image rather than the previous image when displaying next-product navigation.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test current and missing selections, distinct records, related pages and client/server behavior.
- **Manual tests:** Use disposable products and verify storefront output in isolation.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** global-configuration/categories.md (under `manual/en-US/chapters/`).

## CODE-011 — Stock image lookup does not restrict joined stock rows by requested product or variant; verify image selection across distinct stockrooms

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CODE-011` / libraries / stock.
- **Source / context:** `libraries/redshop/src/Helper/Stockroom.php:1110`; `Stockroom::getStockAmountImage`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** Stockroom source review; redSHOP-rmh/libraries/redshop/src/Helper/Stockroom.php:1110-1152; Product/Stock.php:128-140
- **Excerpt:** `{ $list = []; `
- **Problem / actual:** Stock image lookup does not restrict joined stock rows by requested product or variant; verify image selection across distinct stockrooms Source anchor or existing review question only; actual failure is not established.
- **Expected:** Scope stock-image rules to the actual requested product or variant after reproducing selection.
- **Proposed direction:** Scope stock-image rules to the actual requested product or variant after reproducing selection.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test distinct products and stockrooms, equal/zero thresholds and missing images.
- **Manual tests:** Use disposable inventory and compare storefront output.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** stockroom/stockroom-image-management.md (under `manual/en-US/chapters/`).

## CODE-035 — Cart module uses app variable without a local assignment when a cart ItemID exists; include scope requires verification

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `CODE-035` / modules / module.
- **Source / context:** `modules/site/mod_redshop_cart/mod_redshop_cart.php:47`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/modules/site/mod_redshop_cart/mod_redshop_cart.php:35-47
- **Excerpt:** `$menu = $app->getMenu(); $item = $menu->getItem($itemId); `
- **Problem / actual:** Cart module uses app variable without a local assignment when a cart ItemID exists; include scope requires verification Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify module include scope and initialize the application locally if the missing variable is reproduced.
- **Proposed direction:** Verify module include scope and initialize the application locally if the missing variable is reproduced.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test package contents, installed module, configured modes, routes and user sessions as applicable.
- **Manual tests:** Install on disposable Joomla 5 and 6 sites; verify actual package before changing it.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** module-redshop/cart-module.md (under `manual/en-US/chapters/`).

## CODE-038 — Who Bought module selects products without querying orders or linking to the current product

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-038` / modules / module.
- **Source / context:** `modules/site/mod_redshop_who_bought/mod_redshop_who_bought.php:33`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/modules/site/mod_redshop_who_bought/mod_redshop_who_bought.php:33-60; tmpl/default.php:51-52
- **Excerpt:** ` $db    = \Redshop\Component\Libraries\Helper\Joomla::createDatabase(); $query = $db->getQuery(true)`
- **Problem / actual:** Who Bought module selects products without querying orders or linking to the current product Who Bought module selects products without querying orders or linking to the current product
- **Expected:** Either implement the intended co-purchase selection or accurately rename/redefine the module after product decision.
- **Proposed direction:** Either implement the intended co-purchase selection or accurately rename/redefine the module after product decision.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test package contents, installed module, configured modes, routes and user sessions as applicable.
- **Manual tests:** Install on disposable Joomla 5 and 6 sites; verify actual package before changing it.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** module-redshop/who-bought.md (under `manual/en-US/chapters/`).

## CODE-039 — Product Tab loads scripts in a js directory not listed by its manifest; package/install behavior requires verification

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-039` / modules / module.
- **Source / context:** `modules/site/mod_redproducttab/mod_redproducttab.xml:12`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/modules/site/mod_redproducttab/mod_redproducttab.php:33-36; mod_redproducttab.xml:12-16
- **Excerpt:** `<description>MOD_REDPRODUCTTAB_DESC</description> <files> <filename module="mod_redproducttab">mod_redproducttab.php</filename>`
- **Problem / actual:** Product Tab loads scripts in a js directory not listed by its manifest; package/install behavior requires verification Product Tab loads scripts in a js directory not listed by its manifest; package/install behavior requires verification
- **Expected:** Verify installed ZIP; include required assets or migrate to supported asset registration without changing extension identity.
- **Proposed direction:** Verify installed ZIP; include required assets or migrate to supported asset registration without changing extension identity.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Test package contents, installed module, configured modes, routes and user sessions as applicable.
- **Manual tests:** Install on disposable Joomla 5 and 6 sites; verify actual package before changing it.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** module-redshop/product-tab.md (under `manual/en-US/chapters/`).

## ECON-007 — Optional Marketplace plugin exists in source; installation and Joomla 6 compatibility remain unverified

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-007` / plugins / compat.
- **Source / context:** `plugins/economic/economic/economic.php:1`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** e-conomic source-review follow-up in master; redSHOP-rmh/marketplace/classification.json:774
- **Excerpt:** `<?php /** * @package     RedSHOP`
- **Problem / actual:** Optional Marketplace plugin exists in source; installation and Joomla 6 compatibility remain unverified Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Proposed direction:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/setup.md (under `manual/en-US/chapters/`).

## M-0187 — Verify active carrier plugins and provider API compatibility

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `M-0187` / plugins / compat.
- **Source / context:** `plugins/redshop_shipping/default_shipping/src/Extension/DefaultShipping.php:63`; `DefaultShipping::onListRates`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redshop_stage11_shipping/MASTER-ISSUES-AND-GAPS.md
- **Excerpt:** `$shippingrate[$rate]->rate  = $shopper_shipping; $rate++; }`
- **Problem / actual:** Verify active carrier plugins and provider API compatibility Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Proposed direction:** Verify the actual installed Joomla 5/6 behavior before changing legacy assets or API usage.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** shipping/shipping-methods.md (under `manual/en-US/chapters/`).

## ECON-001 — Setup and synchronization rewritten from plugin and config source; installed state and provider support remain unverified

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `ECON-001` / plugins / integration.
- **Source / context:** `plugins/economic/economic/economic.php:137`; `PlgEconomicEconomic::onEconomicConnect`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** e-conomic source-review follow-up in master; redSHOP-rmh/plugins/economic/economic/economic.php
- **Excerpt:** `public function onEconomicConnect() { // Check whether plugin has been unpublished`
- **Problem / actual:** Setup and synchronization rewritten from plugin and config source; installed state and provider support remain unverified Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Proposed direction:** Verify provider contract and prevent duplicate or incorrect accounting effects before proposing changes.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Mock authentication, provider success/error, duplicate, retry and reconciliation behavior.
- **Manual tests:** Use only authorized test-provider accounts and disposable data; no real bookings.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** e-conomic-integration/setup.md (under `manual/en-US/chapters/`).

## CODE-028 — Flatpay live-key showon refers to test_mod rather than test_mode

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-028` / plugins / payments.
- **Source / context:** `plugins/redshop_payment/rs_payment_flatpay/rs_payment_flatpay.xml:38`; `Template/form or top-level code; verify`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_payment/rs_payment_flatpay/rs_payment_flatpay.xml:38-61
- **Excerpt:** `<field name="test_mode" type="radio" layout="joomla.form.field.radio.switcher"`
- **Problem / actual:** Flatpay live-key showon refers to test_mod rather than test_mode Flatpay live-key showon refers to test_mod rather than test_mode
- **Expected:** Correct the visibility dependency while preserving stored Flatpay test/live configuration.
- **Proposed direction:** Correct the visibility dependency while preserving stored Flatpay test/live configuration.
- **Impact / regression risks:** May affect the documented workflow; exact scope and customer impact require end-to-end verification. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Use provider mocks for success, failure, unknown, forged and repeated callbacks, amounts/currencies, offline checkout and configured statuses.
- **Manual tests:** Run only an authorized sandbox on disposable orders; no live payment.
- **Joomla 5/6:** Not verified on Joomla 5 or 6; test applicable supported combinations.
- **Documentation:** plugin-redshop/flatpay.md (under `manual/en-US/chapters/`).

## CODE-047 — e-conomic connection continues with a null client after SOAP initialization fails

- **Priority / severity / status:** P1 / major potential impact / OPEN; confirmed in an isolated mock; full Joomla and provider behavior unverified.
- **Original review / component:** `CODE-047` / plugins / integration; discovered while reviewing `ECON-006`.
- **Source / context:** `plugins/economic/economic/economic.php:153-184`; `PlgEconomicEconomic::onEconomicConnect`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Original evidence references:** e-conomic source-review follow-up; isolated PHP test with HTTP/HTTPS wrappers disabled and Joomla dependencies stubbed.
- **Excerpt:** SOAP client initialization catches an exception, then the method calls a connection method on `$this->client`.
- **Problem / actual:** After client initialization fails, the method continues and calls a method on a null client. An isolated PHP test observed an uncaught `Error` on the e-conomic branch.
- **Expected:** Stop connection initialization and report the existing failure without invoking the missing client.
- **Proposed direction:** Handle failed client creation explicitly and preserve existing diagnostics without exposing sensitive data.
- **Impact / regression risks:** A failed provider setup can interrupt plugin initialization; the actual scope in Joomla and the other provider branch remains unverified. Preserve successful connections and existing configuration.
- **Automated tests:** Stub client creation failure and successful connections for both provider branches; verify no connection attempt follows initialization failure.
- **Manual tests:** Use an authorized isolated environment and mock provider only; do not make real accounting changes.
- **Joomla 5/6:** Not verified on Joomla 5 or 6.
- **Documentation:** e-conomic-integration/setup.md (under `manual/en-US/chapters/`).

## CODE-048 — Guest product review submission resolves the utility class in the wrong namespace

- **Priority / severity / status:** P1 / major potential impact / OPEN; confirmed in an isolated mock; full Joomla behavior unverified.
- **Original review / component:** `CODE-048` / component / frontend; discovered while reviewing `INPUT-004/005`.
- **Source / context:** `component/site/src/Controller/ProductratingController.php:77-78`; `ProductratingController::submit`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Original evidence references:** customer-input source review; isolated PHP test with Joomla and model stubs.
- **Excerpt:** `Redshop\Component\Libraries\Helper\Utility::checkCaptcha(...)` is referenced without a leading backslash inside the controller namespace.
- **Problem / actual:** When a guest reaches the review check, PHP resolves the utility relative to the controller namespace. An isolated mock observed a class-not-found `Error`.
- **Expected:** Resolve the existing utility class correctly and preserve the intended guest verification.
- **Proposed direction:** Correct the class reference and verify both guest and authenticated submission paths.
- **Impact / regression risks:** Guest reviews may fail when they are enabled; full frontend behavior remains unverified. Preserve verification and duplicate-review behavior.
- **Automated tests:** Exercise guest and authenticated review submissions with valid and invalid verification results using isolated stubs.
- **Manual tests:** Use an isolated Joomla installation and disposable reviews.
- **Joomla 5/6:** Not verified on Joomla 5 or 6.
- **Documentation:** customer-input/rating-review.md (under `manual/en-US/chapters/`).

## CODE-049 — Import CSV splitting adds backslashes to apostrophes in field values

- **Priority / severity / status:** P1 / major potential impact / OPEN; confirmed in an isolated fixture; full Joomla behavior unverified.
- **Original review / component:** `CODE-049` / library / import; discovered while reviewing `IMEX-003`.
- **Source / context:** `libraries/redshop/src/Plugin/AbstractImportPlugin.php:192-235`; `AbstractImportPlugin::splitFiles`; current revision `beacc4704dc24b9dc8f3b638324a9e8a6f96a06e`.
- **Original evidence references:** import source review; isolated PHP fixture using disposable CSV input and filesystem stubs.
- **Excerpt:** Each parsed field is passed to `addslashes()` before a quoted CSV row is written.
- **Problem / actual:** Splitting a field containing an apostrophe inserts a backslash; rereading the resulting chunk yields a changed value. The isolated fixture invoked the current splitter and checked its generated CSV.
- **Expected:** Preserve field values exactly when splitting and rereading CSV files.
- **Proposed direction:** Use a CSV writer compatible with the reader and verify delimiter, enclosure and escape handling.
- **Impact / regression risks:** Imported product or customer fields can be changed unexpectedly; end-to-end effects are unverified. Preserve supported separators, encodings and existing plugin contracts.
- **Automated tests:** Round-trip apostrophes, quotes, backslashes, separators, multiline values and non-ASCII text through splitting and reading.
- **Manual tests:** Use disposable CSV data on an isolated Joomla installation; do not use customer data.
- **Joomla 5/6:** Not verified on Joomla 5 or 6.
- **Documentation:** import-export/data-import.md (under `manual/en-US/chapters/`).

