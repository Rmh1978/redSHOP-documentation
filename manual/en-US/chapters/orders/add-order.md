## Add an order

An authorized administrator can start a manual order from **Orders → New**. Test this workflow with disposable customers, products, isolated payments and safe mail delivery before using it operationally.

<h2 id="overview-1">Order management</h2>
<h4 id="field-1">Order list</h4>

The order list shows the customer, order and payment statuses, amounts and date. Order and payment statuses are distinct; neither an order nor a chosen payment method proves receipt of payment.

<h4 id="action-1">Actions</h4>

Use New to start an order. Printing, status changes, exports and deletion are also available on the list; review notifications, data protection and downstream effects before acting.

<h2 id="overview-2">New order details</h2>
<h4 id="field-2">Customer and order fields</h4>

Select an existing customer or enter customer and billing information, including country and state where applicable. Shipping can be the billing address or a separate address. The form also has account and tax-related fields, and a billing-as-sender choice for shipping.

After applying customer information, add products, quantities and notes. Review prices, tax, discounts, shipping, total, payment method and the separate order and payment statuses. When stockroom use is enabled, the controller checks stock and can adjust quantities or omit unavailable lines; verify the saved order.

Each product row provides a product selector, note, price excluding tax, tax, price including tax, quantity and line total. Use **Add Product** for another row or the remove control to discard one. The order details also include a customer comment and requisition number. The form initially selects Unpaid for payment status; confirm both status choices before saving.

The discount controls accept a fixed amount and a separate percentage; both start at zero. Use their update controls and independently check the displayed subtotal, tax, shipping and total before saving. Changing a displayed value does not verify the amount collected by a payment provider.

<h4 id="action-2">Save actions</h4>

The order toolbar appears after billing information has been applied. Save creates the order and invokes order mail; **Save without sending order mail** uses the admin-only mail path, not necessarily a complete suppression of all notifications. **Save + Pay** saves and invokes the selected payment method's payment-information path; its behavior depends on the plugin and is not proof of payment. The plugin's answer is accepted as Paid, Partial Paid or Unpaid only when it reports one of those statuses; otherwise the order is stored as Unpaid and a warning is shown (see [Order payments](order-payments.md)). The e-conomic payment-terms and design-layout values are no longer copied from the payment plugin into administrator-created orders. Confirm recipient and side effects with a safe mail transport and test provider.

<h2 id="order-management">Order workflows</h2>
<h4 id="create-order-1">Existing customer</h4>

Choose the customer, check billing and shipping details, apply the user, add products and choose shipping and payment. Review totals and statuses before saving, then inspect the resulting order and any messages.

<h4 id="create-order-2">New customer</h4>

Enter the required customer information and decide whether to create an account. Follow the form's account and address validation, apply the customer, then complete the order. Treat credentials and personal information securely; verify account creation and notifications in isolation.

<h4 id="create-order-3">Storefront checkout</h4>

Provide customers with appropriate product/category and cart navigation. A customer selects products, reviews the cart and completes the configured checkout, address, shipping and payment steps. Exact screens depend on templates, settings and plugins. Verify the provider's final result rather than treating a return to the shop as payment confirmation.

<h4 id="show-order-1">Customer order list</h4>

The Joomla Orders menu layout accepts an order-list template. Its query filters by the current user ID. Test access, order details and reorder behavior with separate accounts; reordering can affect the current cart.

<h4 id="show-order-2">Order tracker</h4>

A Joomla Order Tracker menu layout is available. Verify access control and privacy using separate accounts and guest sessions before exposing it; do not assume an order ID alone is an adequate authorization mechanism.

<h4 id="setting">One-step checkout</h4>

The Cart settings include **One step checkout**. The storefront selects a different checkout path when enabled. Test both settings, including guest and registered addresses, payment, shipping, terms and final order creation, before changing a live shop.
