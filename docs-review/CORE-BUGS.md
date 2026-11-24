# redSHOP Core and extension findings — Codex handoff

Baseline Core commit: `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`. This is a risk-prioritized handoff, not proof of exploitability or Joomla runtime compatibility. All items are OPEN. See `CORE-BUGS.csv` for structured fields, the master for original evidence and `CORE-FIX-INSTRUCTIONS.md` for execution rules. P0 denotes potential critical impact, not an assertion of a confirmed exploit.

Scope includes Core, optional Marketplace extensions and explicit security/compatibility investigations. Documentation-renderer CODE-003 belongs to the documentation repository and is excluded from Core counts. Existing broader test-only review points remain in the master and triage; they are not converted into asserted defects. Archive scan covered 41 archives/375 text files; archived duplicates retain the current master ID.

All referenced source excerpts are short context around the cited line, not standalone proof; compare full control flow and the current revision. For inherited audit entries, the anchor is the original audit, not a verified implementation location; locate the relevant class/method during investigation. Class/method otherwise is a best-effort nearest declaration and must be checked, especially in templates and XML. The source anchor was read at the baseline revision; historic mock results are reported from the review, not rerun here. DIST-23 groups the eight named provider/dependency holds in its original audit table; CODE-046 specifically tracks its Flatpay ownership and replay subset. Audit entries already fixed locally are not marked as new open defects; their remaining acceptance is retained in the original audit.

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

- **Priority / severity / status:** P1 / major potential impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `AUD-003-010` / docs / compat.
- **Source / context:** `docs/redshop-audit-findings.md:77`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:77
- **Excerpt:** `| AUD-003-010 | High | Update delivery | Legacy transition Update XML is generated but not included in the publication workflow. | Open | | AUD-003-011 | High | Licensing | Subscription and license revoke/reactivate operations are not one atomic state transition. | Open | | AUD-003-012 | Medium | API | Rate-limit buckets can be multiplied with atta`
- **Problem / actual:** Investigate integration of legacy transition Update XML with publication workflow Source anchor or existing review question only; actual failure is not established.
- **Expected:** Inspect the legacy update-XML transition and publication contract without publishing or altering historical releases.
- **Proposed direction:** Inspect the legacy update-XML transition and publication contract without publishing or altering historical releases.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
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

## CODE-005 — Order export count and data queries use inconsistent to-date boundaries; verify multi-batch effects

- **Priority / severity / status:** P1 / major potential impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-005` / plugins / import.
- **Source / context:** `plugins/redshop_export/order/order.php:80`; `PlgRedshop_ExportOrder::getTotal`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/plugins/redshop_export/order/order.php:70-90,159-168
- **Excerpt:** `->clear('group') ->select('COUNT(DISTINCT oi.order_item_id)'); `
- **Problem / actual:** Order export count and data queries use inconsistent to-date boundaries; verify multi-batch effects Order export count and data queries use inconsistent to-date boundaries; verify multi-batch effects
- **Expected:** Use consistent inclusive final-day boundaries for export count and data selection.
- **Proposed direction:** Use consistent inclusive final-day boundaries for export count and data selection.
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

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Source-level defect or mismatch; runtime impact unverified.
- **Original review / component:** `CODE-034` / component / admin.
- **Source / context:** `component/admin/src/Model/QuestionModel.php:84`; `QuestionModel::save`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/component/admin/src/Model/QuestionModel.php:79-81; component/admin/src/Controller/QuestionController.php:65-72
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

- **Priority / severity / status:** P2 / moderate or unverified impact / OPEN; Investigation only; no end-to-end defect confirmed.
- **Original review / component:** `AUD-003-013` / docs / compat.
- **Source / context:** `docs/redshop-audit-findings.md:80`; `Original audit record; affected class/method and code location require investigation`; baseline `2f193132a218de96f5ccbe6b6074cbf0acadbcfd`.
- **Original evidence references:** redSHOP-rmh/docs/redshop-audit-findings.md:80
- **Excerpt:** `| AUD-003-013 | Medium | Releases | Concurrent release registration can race before uniqueness is resolved cleanly. | Open | | AUD-003-014 | Medium | Downloads | Protected downloads need a streaming response path suitable for large packages. | Fixed locally; large-package UAT pending | | LIC-003-001 | High | API | JSON bodies can be overwritten by `
- **Problem / actual:** Investigate concurrent release registration and uniqueness handling Source anchor or existing review question only; actual failure is not established.
- **Expected:** Verify release registration uniqueness and concurrent retry behavior against current database constraints.
- **Proposed direction:** Verify release registration uniqueness and concurrent retry behavior against current database constraints.
- **Impact / regression risks:** Potential customer/administrator impact depends on investigation; do not present as a proven defect. Preserve existing configuration, data, extension identity and unrelated behavior; review group-specific tests.
- **Automated tests:** Run focused tests on both supported Joomla versions and relevant PHP versions, including upgrade paths.
- **Manual tests:** Use isolated Joomla sites and record exact platform and package versions.
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

