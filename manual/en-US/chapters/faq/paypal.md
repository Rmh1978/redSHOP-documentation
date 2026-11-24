## Using PayPal with redSHOP

The current source contains an optional PayPal payment plugin (`rs_payment_paypal`); it is not necessarily installed or enabled on a particular site. Its configuration includes merchant account, currency, sandbox/live mode, transaction action and order-status options.

**Do not assume the legacy plugin is ready for production.** Its notification handler has a known source-level error, and current provider verification, callback authentication, payment status handling and Joomla compatibility require separate review and sandbox testing.

Before adopting any PayPal integration:

1. Verify the exact plugin version, current provider requirements and supported Joomla/PHP versions with the plugin distributor.
2. Use an isolated site and provider sandbox account. Configure test credentials only in the appropriate protected settings; never put credentials in documentation or logs.
3. Confirm server TLS and certificate trust using current provider and hosting documentation. Do not rely on the obsolete 2016 certificate-transition instructions.
4. Test successful, pending, failed and repeated notifications, amounts and currencies, and the distinction between an order status and a verified payment status. Check that callbacks cannot incorrectly mark an unpaid order as paid.
5. Review the results and unresolved plugin issues before enabling live payments. A browser return or an unverified notification is not proof of payment.
