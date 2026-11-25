## Order total discounts

Order total discounts use a threshold, shopper group and date period. In the redSHOP administrator, open **Discount → Order total discounts**. Test with disposable accounts and mock payments before enabling a live rule.

<h2 id="overview-1">Discount list</h2>
<h4 id="field-1">Fields and filters</h4>

The list shows the threshold, condition, discount type and amount, dates, shopper groups and publication state. Use the shopper-group, type and publication filters and the available sortable column headings.

The installed schema uses numeric date fields, but an isolated test of the list renderer failed on numeric date values. Actual saved records and Joomla list behavior remain unverified. Investigate any list failure on an isolated copy rather than editing live database records.

Search checks the rule's stored name, but the current edit form does not provide a name field. Search may therefore not help find rules created through that form; use the other filters.

When inline editing is enabled and you have permission to edit, the list offers inline changes to the threshold and discount amount. These changes may fail shopper-group validation; use the complete editor and reopen the rule to verify its settings.

<h4 id="action-1">Actions</h4>

Create a rule with **New**, or open an existing row to edit it. Select rows to publish, unpublish or delete them as permitted. Back up and verify effects before changing active rules.

<h2 id="overview-2">Discount details</h2>
<h4 id="field-2">Fields</h4>

- **Total amount:** required threshold, initially `0`, filtered as an integer. It must be greater than zero.
- **Condition:** **Lower**, **Equal** or **Higher**; the default is **Lower**. The inspected cart helper compares the product subtotal with the threshold, with equality separate from lower and higher.
- **Type:** **Total** for a fixed discount, or **Percentage**; the default is **Total**.
- **Discount amount:** required and initially `0.0`; enter a value greater than zero. A fixed amount cannot exceed the threshold; a percentage cannot exceed 100.
- **Start and end dates:** required by the current form and initially blank. The end must be later than the start. Check the saved period and time zone before enabling the rule.
- **Shopper group:** select at least one group; multiple groups may be selected.
- **Published:** defaults to **Yes**. Set it to **No** while preparing a rule that must not yet apply.

The inspected cart helper selects a published shopper-group rule using the product subtotal and condition. Other totals, tax, shipping, stacking and multiple-rule precedence must be verified in the actual checkout; do not assume the displayed order total is the comparison basis in every path.

<h4 id="action-2">Save</h4>

Save and reopen the rule to verify dates, groups and publication state.

<h2 id="working">Set up and verify</h2>
<h4 id="create-1">Shopper group</h4>

Create or choose a disposable shopper group for the test. Confirm the configured customer actually belongs to it.

<h4 id="create-2">Customer</h4>

Use test accounts for both matching and nonmatching groups; avoid personal or production data.

<h4 id="create-3">Discount</h4>

For example, enter a threshold of `100`, choose **Higher**, select **Percentage** and enter `10`. Choose a valid period and the disposable group, then save the rule unpublished. In the inspected selection path, a product subtotal of `120` meets the condition, while `100` does not. Calculate the expected discount independently and verify the full checkout, including shipping, existing product discounts and tax, before enabling the rule.

<h2 id="how-to">Storefront test</h2>
<h4 id="create-4">Catalog access</h4>

Use an existing test catalog or configure an appropriate Joomla/redSHOP menu item for the disposable products.

<h4 id="user-order">Customer cart</h4>

Test subtotal values below, equal to and above the threshold, matching and nonmatching groups, date boundaries and overlapping discounts.

<h4 id="checkout">Checkout</h4>

Using an offline or mocked payment, compare product subtotal, discount, shipping, VAT and final total in cart, checkout and saved order. Repeat for the checkout layout actually used by the shop.
