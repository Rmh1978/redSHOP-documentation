## Order and invoice configuration

Open redSHOP Configuration and choose **Orders**. Test configuration changes on a disposable shop with mock payment methods and a mail sink. Order status and payment status are separate; an order email is not evidence that a payment succeeded.

<h2 id="order">Order settings</h2>

- **Order ID Reset is destructive.** The current action truncates the orders, order items, order addresses, status log, attributes, payment, product-download and download-log tables. It is not a harmless numbering adjustment. Do not use it on a live shop or on a test environment containing data you need; restore from a verified backup if recovery is required.
- The reset screen's success alert alone does not confirm that the operation succeeded: the current callback can display it even when the request fails. Do not repeat this destructive action based on the alert; have a maintainer verify the actual state and logs.
- **Send Order Email:** choose before payment, after payment with an earlier administrator email, or after payment. The inspected checkout path checks payment status and, for the middle option, may send an administrator-only message before payment. Status changes and payment plugins may invoke other mail paths; verify each enabled method and delayed, failed and successful payments.
- **Enable Invoice Email / Send Invoice Mail to:** select whether invoice mail is enabled and its recipients: none, administrator, customer or both. The recipient control is shown when invoice mail is enabled. Invoice mail uses the configured mail templates and may attach a PDF when a PDF plugin is available. The inspected order-mail path requests invoice mail for paid orders; test actual triggers and delivery.
- **Send mail to customer in order:** the form exposes this setting. Verify its effect in the paths and templates your shop uses.
- **Exclude products from reorder:** select products to omit from reorders. Test storefront and administrator reorder flows and totals with disposable orders.

In the distributed configuration, order mail is set to before payment,
customer mail is enabled, invoice email and invoice numbering for free orders
are disabled, the invoice recipient choice is None, and no products are
excluded from reorder. Existing saved settings may differ; inspect mail,
recipient and numbering settings before use.

<h2 id="invoice">Numbering</h2>

The form has a current/first invoice number value, an **Order Number Template**, an **Invoice Number Template**, and a switch for invoice numbers on free orders. Review accounting requirements and existing numbers with the responsible accountant before changing them; back up the shop and do not reset orders to configure numbering.

For technical troubleshooting, the form stores the Order Number Template as `invoice_number_template` and the Invoice Number Template as `real_invoice_number_template`. Follow the displayed labels when configuring them; do not assume the similarly named internal keys mean the same thing.

The inspected parser replaces runs of two to six identical `#`, `X` or `x` characters with a zero-padded number. For example, `INV-####` formats the number 23 as `INV-0023`. Test the exact chosen format and integration before use.

The distributed configuration uses `##` for both order and invoice number templates and leaves the first invoice number blank. These values are not a recommendation for an existing accounting sequence.

In the inspected invoice-generation path, a free order (`order_total <= 0`) is skipped when the free-order switch is off. Initial numbering also depends on confirmed order status and Paid payment status; refund/cancellation paths can behave differently. The configured first-number value participates in both invoice and ordinary order-number calculations, while the e-conomic path has separate behavior. Do not assume changing this value simply sets the next invoice number or renumbers historical records.

Verify paid, unpaid, free, refunded and cancelled orders, number uniqueness, concurrent creation, PDF output and your accounting integration on an isolated copy before applying changes.
