## Order total discounts

Order total discounts use a threshold, shopper group and date period. Test with disposable accounts and mock payments before enabling a live rule.

<h2 id="overview-1">Discount list</h2>
<h4 id="field-1">Fields and filters</h4>

The current form defines a threshold, condition, discount type and amount, dates, shopper groups and publication state. The list supports search and shopper-group, type and publication filters.

<h4 id="action-1">Actions</h4>

Create, edit, publish, unpublish or delete rules as permitted. Back up and verify effects before changing active rules.

<h2 id="overview-2">Discount details</h2>
<h4 id="field-2">Fields</h4>

- **Total amount:** condition threshold, filtered as an integer by the form.
- **Condition:** lower, equal or higher.
- **Type and discount amount:** fixed total or percentage and its value.
- **Start and end dates:** required in the current form.
- **Shopper group:** required multiple selection.
- **Published:** whether the rule is enabled.

The inspected cart helper selects a published shopper-group rule using the product subtotal and condition. Other totals, tax, shipping, stacking and multiple-rule precedence must be verified in the actual checkout; do not assume the displayed order total is the comparison basis in every path.

<h4 id="action-2">Save</h4>

Save and reopen the rule to verify dates, groups and publication state.

<h2 id="working">Set up and verify</h2>
<h4 id="create-1">Shopper group</h4>

Create or choose a disposable shopper group for the test. Confirm the configured customer actually belongs to it.

<h4 id="create-2">Customer</h4>

Use test accounts for both matching and nonmatching groups; avoid personal or production data.

<h4 id="create-3">Discount</h4>

Create a rule with a known threshold and period, select the test group and save. Independently calculate expected totals.

<h2 id="how-to">Storefront test</h2>
<h4 id="create-4">Catalog access</h4>

Use an existing test catalog or configure an appropriate Joomla/redSHOP menu item for the disposable products.

<h4 id="user-order">Customer cart</h4>

Test subtotal values below, equal to and above the threshold, matching and nonmatching groups, date boundaries and overlapping discounts.

<h4 id="checkout">Checkout</h4>

Using an offline or mocked payment, compare product subtotal, discount, shipping, VAT and final total in cart, checkout and saved order. Repeat for the checkout layout actually used by the shop.
