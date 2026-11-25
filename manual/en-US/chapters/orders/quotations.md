## Quotations

Quotations let a shop discuss a proposed purchase before it becomes an order. Open **Quotations** under Orders in redSHOP administration. Test the full workflow with disposable data and a safe mail transport before using it with customers.

<h2 id="overview-1">Quotation list</h2>

The list displays ID, number, customer, status, total and date. Ordered quotations also show an order ID. Open the ID or number to view a quotation; sortable headings and pagination controls help navigate the list.

<h4 id="filters">Filters</h4>

The search query matches the billing first or last name; it is not an ID or quotation-number search. A separate status filter offers Requested, Replied, Accepted, Rejected and Ordered. Reset clears the search and status selection.

<h4 id="actions">Actions</h4>

The toolbar offers New, Export Data, Edit and Delete. **Export requires verification:** the toolbar links to the singular quotation view, whereas the CSV handler is in the plural quotations view; the handler also requests ordinary list items without enabling the model's CSV query. Do not rely on the export for a complete backup until this is reviewed and tested. Protect any customer data in exported files.

<h2 id="create-quotation-backend">Create a quotation in administration</h2>

Choose **New**, select an existing customer or enter the necessary account and billing information, then add products and review quantities, prices, tax and discounts before saving. Applying or sending can create a customer account when no existing billing record is selected; use only authorized customer data.

<h2 id="overview-2">Quotation details</h2>
<h4 id="quotation-information">Quotation information</h4>

The editor shows date, number, IP address, shop and customer notes, and status. The shop note is editable; the customer note is displayed for reference. Status and order creation are not the same as verified payment.

<h4 id="account-information">Account information</h4>

Review the customer's contact and billing details and any applicable extra fields. Account and tax-exemption fields depend on the customer.

<h4 id="quotation-details">Quotation items and totals</h4>

Review the item names, prices excluding and including tax, quantities, totals, discounts and tax. Existing item rows provide editable prices excluding tax and quantities, plus a remove control. The editor provides a fixed discount including VAT and a special percentage discount. When one saved discount is positive and the other is zero, the zero-valued control is read-only. Check calculations for the applicable tax and customer settings.

<h4 id="add-product">Add product and send</h4>

Select a product, enter a positive quantity and review the calculated price, then add it to the quotation. The editor prompts for confirmation if the total is zero. **Send** saves and attempts to send the quotation email; it is not a silent save. Use Apply or Save when mail is not intended. Verify delivery, template, recipient and mail configuration using a safe transport.

Changing an existing quotation to **Ordered** invokes order creation when no order is already associated. Inspect the resulting order, totals, stock, status and payment separately; the inspected creation path initially sets payment to Unpaid. Conversion and duplicate-prevention behavior still require runtime testing.

<h2 id="create-quotation-frontend">Customer quotation requests</h2>

redSHOP supplies a Joomla quotation menu layout and a quotation-request template; the cart can use a separate quotation-cart template when quotation mode is configured. Configure the relevant templates and menu, then test request, customer access, notification and conversion end to end. Presentation and availability depend on shop configuration and template tags; do not assume the historical screenshots match the current storefront.
