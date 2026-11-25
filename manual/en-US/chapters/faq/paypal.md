## Using PayPal with redSHOP

The current source contains an optional PayPal payment plugin (`rs_payment_paypal`); it is not necessarily installed or enabled on a particular site. Its configuration includes merchant account, currency, sandbox/live mode, transaction action and order-status options.

**Do not assume the legacy plugin is ready for production.** Its notification handler has a known source-level error, and current provider verification, callback authentication, payment status handling and Joomla compatibility require separate review and sandbox testing.

The plugin manifest defaults its sandbox option to **Live**, not Sandbox. Explicitly select Sandbox and confirm the saved setting before an isolated test; do not infer test mode from an empty merchant account or an installation on a test site.

Select and verify the payment currency explicitly. The manifest's declared currency default is not one of its listed currencies, and the actual payment form passes the configured value through. New-form binding, conversion and provider behavior have not been verified.

For a new configuration, the inspected manifest also declares these defaults; saved settings can differ:

| Setting | Default and considerations |
| --- | --- |
| Merchant email / plugin description | Both start blank. Use only provider-authorized test details in an isolated shop. |
| Debug mode | Defaults to Yes. Review log access and retention before testing; never share sensitive transaction data. |
| Success / invalid order statuses | Default to codes `C` and `P` respectively. Their names depend on the shop's configured statuses; status alone does not establish payment. |
| Transaction action | Defaults to instant capture; authorization-only is also offered. Verify the provider behavior separately. |
| Automatic return | Defaults to No; the return URL starts blank. A return to the shop is not proof of payment. |
| Payment operand / price / discount type | Default to `-`, blank and Percentage; Total is the fixed-amount option. Verify any adjustment and final total independently. |
| Customer visibility | Private, business, guest and member options default to Yes. Review eligibility and shopper-group selections before enabling. |
| Extra fields / logo | Select payment extra fields if needed; the manifest supplies a bundled logo path. Check checkout display and accessibility. |

Before adopting any PayPal integration:

1. Verify the exact plugin version, current provider requirements and supported Joomla/PHP versions with the plugin distributor.
2. Use an isolated site and provider sandbox account. Configure test credentials only in the appropriate protected settings; never put credentials in documentation or logs.
3. Confirm server TLS and certificate trust using current provider and hosting documentation. Do not rely on the obsolete 2016 certificate-transition instructions.
4. Test successful, pending, failed and repeated notifications, amounts and currencies, and the distinction between an order status and a verified payment status. Check that callbacks cannot incorrectly mark an unpaid order as paid.
5. Review the results and unresolved plugin issues before enabling live payments. A browser return or an unverified notification is not proof of payment.
