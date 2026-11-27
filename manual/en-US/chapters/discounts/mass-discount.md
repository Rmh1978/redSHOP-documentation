## Mass discounts

Mass discounts update discount-related fields on selected products. In Joomla administration, open **Components → redSHOP → Discount → Mass Discount**. **Back up and test before saving, editing or deleting:** the current implementation can also change product sale flags and discount dates. Its delete path resets the sale flag, discount price and discount dates for products it resolves from the rule's product, category and manufacturer selections; it does not first establish that another rule still needs those values. Overlap and precedence need testing in your shop.

<h2 id="overview-1">Mass discount list</h2>
<h4 id="fields">List fields and filters</h4>

The list includes the discount name, type, amount, dates and selected products, categories and manufacturers. Search by name or filter by type; sort using the available column headings. The default order is ID ascending.

When inline editing is enabled and your account can edit an unlocked record, the name and amount can be edited in the list. An amount change can affect products: review the selection and back up first.

<h4 id="actions">Actions</h4>

Create, edit, check in and delete records as permitted. Select records before bulk actions; check in a locked record only after confirming nobody is editing it. This list has no publish/unpublish control. Confirm the affected products before editing or deleting.

<h2 id="overview-2">Discount details</h2>
<h4 id="discounts-detail">Fields</h4>

| Field | Purpose and default |
|---|---|
| **Name** | Required name identifying the mass discount. |
| **Type** | Required **Total** (fixed amount, the default) or **Percentage**. |
| **Amount** | Required positive amount. For a percentage, enter `12` for 12%, not `0.12`. The product's existing price is used to calculate the discounted price. |
| **Start date**, **End date** | Both are required. The save check rejects a start later than the end. Verify time-zone and boundary behavior before use. |
| **Products** | Multiple product selection. The form marks this required, although the table validation accepts another targeting selection instead. Verify the actual editor before relying on a category-only or manufacturer-only rule. |
| **Categories** | Optional multiple category selection. Check which products, including subcategories, are affected. |
| **Manufacturers** | Optional multiple manufacturer selection. Check the resulting product selection and overlap with other rules. |

At least one product, category or manufacturer is required by the table validation. For example, on a disposable product priced at 100, a 12% rule calculates a discounted price of 88 before other pricing adjustments; verify the result in your own cart.

The table's positive-amount check does not cap a percentage at 100 or a fixed discount at the product price. Avoid values that would produce a negative discounted price, and verify every affected product.

<h4 id="mass-discounts-detail">Save</h4>

Use **Save**, **Save & Close** or **Save & New**, as available. **Cancel/Close** leaves the editor without saving current changes. Reopen the rule, then inspect the affected products' sale flag, discount price and dates. A successful form save alone does not establish storefront or checkout behavior.

<h2 id="working">Working with mass discounts</h2>
<h4 id="create-1">Combined selection</h4>

In an isolated shop, select disposable products, categories and manufacturers, set the amount and period and save. Determine which products changed, especially where selections overlap.

<h4 id="create-2">Selected products</h4>

Select the intended products and verify their resulting product-level discount fields.

<h4 id="create-3">Manufacturers</h4>

Test manufacturer targeting with the actual form and inspect all affected products. The form's required product selector may prevent a manufacturer-only save.

<h4 id="create-4">Categories</h4>

Test category targeting and subcategory behavior using disposable products. The form's required product selector may prevent a category-only save.

Compare expected prices in the product page, cart, checkout and saved order before, during and after the date range. Include overlapping promotions, shopper groups, tax and rounding. Do not delete the rule as a test on live data.
