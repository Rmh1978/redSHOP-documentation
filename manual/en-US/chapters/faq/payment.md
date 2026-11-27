## Is there a payment method for Cash on Delivery?

The current source includes an optional **redSHOP - Cash on Delivery** payment plugin (`rs_payment_cod`). Its availability depends on the package and whether it is installed, enabled and configured on the site. It is an offline payment method, not proof that money has been received.

Before offering it:

1. Check that Cash on Delivery is available in your delivery regions and compatible with the shipping workflow.
2. On an isolated site, install or enable the approved plugin package and configure the payment price or discount, eligible customer types and shopper groups, and the intended order status. The manifest defaults both private-person and business eligibility to Yes; review them explicitly. Review customer-facing wording and any extra information.
3. Test an order from checkout through fulfillment with disposable data. Verify the selected payment method, fees, order status and payment status separately, as well as administrator notifications and permissions.
4. Record payment as received only after it has actually been confirmed, using an authorized administrator workflow.

For a new plugin configuration, the inspected manifest declares these defaults; saved values can differ:

| Setting | Default and considerations |
| --- | --- |
| Payment fee or discount / Payment adjustment amount / Adjustment amount type | Operand `-`, blank amount and Percentage. Total is the fixed-amount alternative. Verify charges, discounts and final totals with disposable orders. |
| Show for private / business customers | Both default to Yes; choose the eligible customer types. |
| Order status after successful payment | Defaults to status code `C`; its meaning depends on your configured statuses and does not prove receipt of money. |
| Available to shopper groups | Multiple groups can be selected. Review and test the saved selection for matching and nonmatching customers. |
| Enter Extra Info / Select Extra Field | Extra information starts with placeholder text; replace or clear it with approved instructions. Multiple payment extra fields can be selected. |

The current COD manifest does not expose e-conomic payment conditions or layout IDs. Review the central integration settings and optional payment-method overrides in [Set up the e-conomic integration](chapters/e-conomic-integration/setup.md) instead; preserved settings from an older installation can still affect the resolved values.

The plugin's nonmatching payment-handler branch has a known source-level error, so compatibility with other payment methods and the full checkout flow must be tested before relying on it. Do not relabel a credit-card plugin as COD.

Payment eligibility configuration also awaits a private security review. Verify shopper-group restrictions with your site maintainer before enabling this payment method.
