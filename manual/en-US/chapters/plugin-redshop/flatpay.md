## Flatpay payment plugin

The current source includes the optional `redshop_payment/rs_payment_flatpay` plugin. Availability, provider compatibility and the installed version depend on the shop. Do not treat the presence of the plugin or a checkout redirect as proof that a payment was completed.

### Configuration

In an isolated test shop, install an approved package and inspect the plugin settings in Joomla's plugin manager. The manifest includes test/live mode, separate private keys, payment-method choices, currency, callback setting, and configured order statuses for payment success, failure and capture. Use only provider-issued test credentials and restrict access to configuration and backups. Never share keys or payment data.

For a new configuration, the manifest defaults test mode to No, payment methods to `card`, currency to DKK, callback to Disabled and refund to Yes. The success, failure and capture status defaults are codes `C`, `P` and `RD`. Existing saved values can differ; verify the mode and status meanings in your shop before any test or activation.

The form also provides description, logo and extra-information fields and switches for private-person and business customers. Multiple capture statuses can be selected. Check their effect with the active checkout template and reconcile captures with the provider.

The current manifest's live-key visibility condition uses a different field name from the mode setting, so verify how the field appears and saves in your installed Joomla version rather than assuming it is visible. Verify payment method availability and currency with the provider; the options displayed in the manifest are not a guarantee of provider support.

The currency list contains `GPB`, not `GBP`. Do not assume it represents a working British-pound option; verify currency support and resolve the known configuration issue before use.

### Verify before use

The inspected callback can set payment and order statuses in response to provider information. Payment verification, failure handling and repeated or concurrent notifications require further authorized security and compatibility review before production use.

Use provider-approved test transactions to verify success, rejection, pending state, timeout, customer return, callbacks, replay, simultaneous notifications, manual order-status changes, capture, refund and cancellation. Compare the provider transaction with both redSHOP payment status and order status. Do not enable a new production payment flow until the outstanding verification and security review are complete.
