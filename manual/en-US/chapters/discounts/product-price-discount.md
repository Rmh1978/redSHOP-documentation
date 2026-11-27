## Product price discounts

Product price discounts are separate from mass discounts and per-product shopper-group price rules. In the redSHOP administrator, open **Discount → Product price discounts**. Test calculations and overlapping rules on an isolated shop before enabling them.

<h2 id="overview-1">Discount list</h2>
<h4 id="product-price-1">Fields and filters</h4>

The list shows the threshold, condition, type, discount amount, dates and publication state. Filter by shopper group, type or publication state, and sort using the available column headings. The default order is ID ascending. The search box currently does not filter this list; use the other filters instead.

If inline editing is enabled and you have permission to edit, the list offers inline changes to the threshold and discount amount. These changes may fail shopper-group validation; use the complete editor and reopen the rule to verify its settings.

<h4 id="actions-1">Actions</h4>

Create a rule with **New**, or use the edit button on an existing row. Select rows to publish, unpublish or delete them as permitted. Back up before changing active discounts.

<h2 id="overview-2">Discount details</h2>
<h4 id="product-price-2">Fields</h4>

- **Total amount:** required threshold, initially `0`, filtered as an integer. It must be greater than zero. Although the field description refers to an order total, one product-price helper compares it against the product price; verify the applicable calculation path.
- **Condition:** choose **Lower**, **Equal** or **Higher**. The default is **Lower**. For the inspected product-price helper, these compare the product price with the threshold; equality is separate from lower and higher.
- **Type:** choose **Total** for a fixed discount or **Percentage**. The default is **Total**.
- **Discount amount:** required and initially `0.0`; enter a value greater than zero. Validation also requires it not to exceed the threshold, including for a percentage; a percentage cannot exceed 100.
- **Start and end dates:** optional and initially blank. When both are set, the start cannot be later than the end. In the inspected price lookup, a stored zero means no boundary and nonzero boundaries are inclusive. Check saved values, time zone and boundary behavior before relying on a schedule.
- **Category:** optional multiple selection. In the inspected lookup, when the product has category IDs, a rule with no stored category IDs is also eligible; the result still depends on the other conditions. Verify the saved selection and categories in your shop.
- **Shopper group:** select at least one group; multiple groups may be selected.
- **Published:** defaults to **Yes**. Set it to **No** while preparing a rule that must not yet apply.

<h4 id="actions-2">Save</h4>

Save and reopen the rule to check values and associations. Do not assume an empty category selection or overlapping rules have identical behavior in every calculation path.

<h2 id="working">Test a discount</h2>
<h4 id="create">Create</h4>

For a simple example, select a disposable shopper group, enter a threshold of `100`, choose **Higher**, select **Percentage**, and enter `10`. Leave the dates blank and choose a suitable category if needed. In the inspected product-price path, a product price of `120` meets the condition, while `100` does not; a 10% reduction of `120` is `12` before any other applicable calculations. Save the rule unpublished until its behavior has been checked.

<h4 id="check-1">Administrator</h4>

Verify the saved rule and use a disposable order with mock payment to check the price. Do not use a real payment to validate a discount.

<h4 id="check-2">Storefront</h4>

Test matching and nonmatching shopper groups and categories, values below/equal/above the threshold, date boundaries and overlapping discounts. Compare product, cart, checkout and saved-order totals, tax and rounding.
