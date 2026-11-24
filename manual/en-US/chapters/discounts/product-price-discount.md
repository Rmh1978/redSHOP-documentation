## Product price discounts

Product price discounts are separate from mass discounts and per-product shopper-group price rules. Test calculations and overlapping rules on an isolated shop before enabling them.

<h2 id="overview-1">Discount list</h2>
<h4 id="product-price-1">Fields and filters</h4>

The list offers search and filters for shopper group, type and publication state. Fields include threshold, condition, discount type and amount, dates and publication state.

<h4 id="actions-1">Actions</h4>

Create, edit, publish, unpublish or delete rules as permitted. Back up before changing active discounts.

<h2 id="overview-2">Discount details</h2>
<h4 id="product-price-2">Fields</h4>

- **Total amount:** condition threshold, filtered as an integer by the form. Although the label describes an order total, one product-price helper compares this value against the product price; verify the calculation path.
- **Condition:** lower, equal or higher than the threshold.
- **Type and discount amount:** fixed total or percentage; the inspected product-price calculation divides percentage values by 100.
- **Start and end dates:** optional in this form. Test blank dates, saved values, time zones and boundaries.
- **Categories:** optional selection.
- **Shopper group:** required multiple selection.
- **Published:** whether the rule is enabled.

<h4 id="actions-2">Save</h4>

Save and reopen the rule to check values and associations. Do not assume an empty category selection or overlapping rules have identical behavior in every calculation path.

<h2 id="working">Test a discount</h2>
<h4 id="create">Create</h4>

Choose a disposable shopper group, product and threshold; enter the rule and save. Independently calculate expected results.

<h4 id="check-1">Administrator</h4>

Verify the saved rule and use a disposable order with mock payment to check the price. Do not use a real payment to validate a discount.

<h4 id="check-2">Storefront</h4>

Test matching and nonmatching shopper groups and categories, values below/equal/above the threshold, date boundaries and overlapping discounts. Compare product, cart, checkout and saved-order totals, tax and rounding.
