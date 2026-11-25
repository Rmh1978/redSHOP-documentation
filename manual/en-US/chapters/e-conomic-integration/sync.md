## Product synchronization

The optional e-conomic plugin contains product and product-group lookup and storage operations, and redSHOP's integration helper dispatches product and group operations. The product editor provides an e-conomic account-group selection. The implementation uses SOAP; the existence of these calls does not establish that the current provider accepts them or that every product change synchronizes successfully.

### Test a product mapping

1. Confirm the plugin and provider compatibility and prepare the isolated setup described in [e-conomic Integration](chapters/global-configuration/e-conomic-integration.md).
2. Configure a test [account group](chapters/e-conomic-integration/account-group.md) and select the intended group on a disposable product. Record its test identifier and expected accounting group.
3. Exercise product creation and an update in the test shop. Inspect the product and product group in the accounting test account, and compare identifiers, name, price, tax, unit and group.
4. Test an existing product, a missing group, attributes if enabled, and a controlled failure/retry. Verify whether records are created, updated or duplicated and reconcile both systems.
5. Investigate errors without sharing credentials or personal data. Do not retry blindly or enable production synchronization until the behavior and accounting consequences have been verified.

Do not use the historical SOAP operation URLs as a current API contract. Provider compatibility, direction of synchronization, conflicts, retries and invoice handling remain subject to testing for the exact plugin and provider account.

If connection initialization fails, stop and investigate rather than assuming a retry is safe: CODE-047 tracks an error after failed SOAP client creation. No real provider or accounting operation was performed during this source review.
