## Flatpay payment plugin

The current source includes the optional `redshop_payment/rs_payment_flatpay` plugin. Availability, provider compatibility and the installed version depend on the shop. Do not treat the presence of the plugin or a checkout redirect as proof that a payment was completed.

### Configuration

In an isolated test shop, install an approved package and inspect the plugin settings in Joomla's plugin manager. The manifest includes test/live mode, separate private keys, payment-method choices, currency, callback setting, and configured order statuses for payment success, failure and capture. Use only provider-issued test credentials and restrict access to configuration and backups. Never share keys or payment data.

The current manifest's live-key visibility condition uses a different field name from the mode setting, so verify how the field appears and saves in your installed Joomla version rather than assuming it is visible. Verify payment method availability and currency with the provider; the options displayed in the manifest are not a guarantee of provider support.

### Verify before use

The inspected callback retrieves an invoice from the provider, treats authorized or settled invoice states as paid, and uses the configured success status; a previously paid order follows a replay branch. Other responses enter its failure path, including API failure or an unknown state. Payment ownership, amount/currency checks, concurrent callbacks and the distinction between authorization and settlement require further review.

Use provider-approved test transactions to verify success, rejection, pending state, timeout, customer return, callbacks, replay, simultaneous notifications, manual order-status changes, capture, refund and cancellation. Compare the provider transaction with both redSHOP payment status and order status. Do not enable a new production payment flow until the outstanding verification and security review are complete.
