## Is there a payment method for Cash on Delivery?

The current source includes an optional **redSHOP - Cash on Delivery** payment plugin (`rs_payment_cod`). Its availability depends on the package and whether it is installed, enabled and configured on the site. It is an offline payment method, not proof that money has been received.

Before offering it:

1. Check that Cash on Delivery is available in your delivery regions and compatible with the shipping workflow.
2. On an isolated site, install or enable the approved plugin package and configure the payment price or discount, eligible customer types and shopper groups, and the intended order status. Review customer-facing wording and any extra information.
3. Test an order from checkout through fulfillment with disposable data. Verify the selected payment method, fees, order status and payment status separately, as well as administrator notifications and permissions.
4. Record payment as received only after it has actually been confirmed, using an authorized administrator workflow.

The plugin's nonmatching payment-handler branch has a known source-level error, so compatibility with other payment methods and the full checkout flow must be tested before relying on it. Do not relabel a credit-card plugin as COD.
