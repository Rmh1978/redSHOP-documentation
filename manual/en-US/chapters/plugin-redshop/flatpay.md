## Flatpay payment plugin

The current source includes the optional `redshop_payment/rs_payment_flatpay` plugin. Availability, provider compatibility and the installed version depend on the shop. Do not treat the presence of the plugin or a checkout redirect as proof that a payment was completed.

### Configuration

In an isolated test shop, install an approved package and inspect the plugin settings in Joomla's plugin manager. The manifest includes test/live mode, separate private keys, payment-method choices, currency, callback setting, and configured order statuses for payment success, failure and capture. Use only provider-issued test credentials and restrict access to configuration and backups. Never share keys or payment data.

For a new configuration, the manifest defaults test mode to No, payment methods to `card`, currency to DKK, callback to Disabled and refund to Yes. The success, failure and capture status defaults are codes `C`, `P` and `RD`. Existing saved values can differ; verify the mode and status meanings in your shop before any test or activation.

The form also provides description, logo and extra-information fields and switches for private-person and business customers. Multiple capture statuses can be selected: when an order changes to one of them, the plugin captures the authorized payment. Check their effect with the active checkout template and reconcile captures with the provider.

The **Advanced** tab also contains these ledger-related settings:

| Setting | Default | Purpose |
|---|---|---|
| Refund When Cancel or Return Order | Yes | Refunds or cancels the payment when the order is cancelled or returned. |
| Allow multiple payments per order | No | Lets the customer pay a missing balance when an order that already has verified coverage receives a higher total. Existing payments are unaffected. |
| Monitor unfinished payments | No | A Joomla Scheduler task checks attempts that were not completed at the provider and sets the order to the "payment not confirmed" status, which sends the status mail with the payment link. |
| Waiting time before order status change (minutes) | 15 | Runs from the creation of each attempt, regardless of how often the Scheduler runs. Shown only when monitoring is enabled. |
| Payment window lifetime | Provider default (three months) | 15 minutes, 30 minutes, 1 hour, 2 hours or 24 hours; after this time a new payment can no longer be started in the window. A payment started in time may still complete. |
| Product ID for card surcharge | 3623 | Product used for the order line of a card surcharge when surcharging is enabled at the provider. The default is a specific product ID that probably does not exist in your shop; set or verify it. |

The order status for unconfirmed payment (default `P`) is the status whose mail template is used by the order page's **Send payment link** action; see [Order payments](../orders/order-payments.md).

<h3 id="flatpay-webhook">Webhook</h3>

The plugin has separate webhook secrets for test and live mode, each with an optional "previous" secret accepted while the provider rotates secrets. Configure the provider's webhook to POST JSON to `/api/index.php/v1/redshop/webhooks/frisbii` on your site. The endpoint responds 503 when the plugin or the active environment's secret is missing, 401 for an invalid signature (HMAC-SHA256 of timestamp and webhook ID), 400/411/413/415 for malformed requests (JSON only, at most 16 KB), 200 for ignored events and 202 when an `invoice_*` event is queued. Events are queued and processed afterwards, not within the request. The secrets are stored in the plugin parameters; restrict access to configuration and backups.

The current manifest's live-key visibility condition uses a different field name (`test_mod`) from the mode setting (`test_mode`), so verify how the field appears and saves in your installed Joomla version rather than assuming it is visible. Verify payment method availability and currency with the provider; the options displayed in the manifest are not a guarantee of provider support.

The currency list contains `GPB`, not `GBP`. Do not assume it represents a working British-pound option; verify currency support and resolve the known configuration issue before use.

### Verify before use

Flatpay is currently the only redSHOP payment plugin whose attempts, verified coverage and remaining balance are recorded in the payment ledger, and the only one for which the order page offers capture, refund, void, refresh and reconcile actions. Orders and administrator actions are described in [Order payments](../orders/order-payments.md).

The webhook and callback can change payment and order statuses. The payment architecture hardening in Core (signature check, queue, reconciliation and logging) has been reviewed in source only; replay, concurrent notifications, provider outages and live capture have not been verified in a running shop.

Use provider-approved test transactions to verify success, rejection, pending state, timeout, customer return, callbacks, webhook replay, simultaneous notifications, manual order-status changes, capture, partial capture, refund and cancellation. Compare the provider transaction with the redSHOP payment ledger, payment status and order status. Do not enable a new production payment flow until this verification is complete.
