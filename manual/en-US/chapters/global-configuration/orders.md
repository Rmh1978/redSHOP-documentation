## Order and invoice configuration

Open redSHOP Configuration and choose **Orders**. Test configuration changes on a disposable shop with mock payment methods and a mail sink. Order status and payment status are separate; an order email is not evidence that a payment succeeded.

<h2 id="order">Order settings</h2>

- **Order ID Reset is destructive.** The current action truncates the orders, order items, order addresses, status log, attributes, payment, product-download and download-log tables. It is not a harmless numbering adjustment. Do not use it on a live shop or on a test environment containing data you need; restore from a verified backup if recovery is required.
- **Send Order Email:** choose before payment, after payment with an earlier administrator email, or after payment. The inspected checkout path checks payment status and, for the middle option, may send an administrator-only message before payment. Status changes and payment plugins may invoke other mail paths; verify each enabled method and delayed, failed and successful payments.
- **Enable Invoice Email / Send Invoice Mail to:** select whether invoice mail is enabled and its recipients: none, administrator, customer or both. Invoice mail uses the configured mail templates and may attach a PDF when a PDF plugin is available. The inspected order-mail path requests invoice mail for paid orders; test actual triggers and delivery.
- **Send mail to customer in order:** the form exposes this setting. Verify its effect in the paths and templates your shop uses.
- **Exclude products from reorder:** select products to omit from reorders. Test storefront and administrator reorder flows and totals with disposable orders.

<h2 id="invoice">Numbering</h2>

The form has a current/first invoice number value, an **Order Number Template**, an **Invoice Number Template**, and a switch for invoice numbers on free orders. Review accounting requirements and existing numbers with the responsible accountant before changing them; back up the shop and do not reset orders to configure numbering.

The inspected parser replaces runs of two to six identical `#`, `X` or `x` characters with a zero-padded number. For example, `INV-####` formats the number 23 as `INV-0023`. Test the exact chosen format and integration before use.

In the inspected invoice-generation path, a free order (`order_total <= 0`) is skipped when the free-order switch is off. Initial numbering also depends on confirmed order status and Paid payment status; refund/cancellation paths can behave differently. The configured first-number value participates in both invoice and ordinary order-number calculations, while the e-conomic path has separate behavior. Do not assume changing this value simply sets the next invoice number or renumbers historical records.

Verify paid, unpaid, free, refunded and cancelled orders, number uniqueness, concurrent creation, PDF output and your accounting integration on an isolated copy before applying changes.
