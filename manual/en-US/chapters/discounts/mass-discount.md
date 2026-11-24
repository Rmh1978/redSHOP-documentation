## Mass discounts

Mass discounts update discount-related fields on selected products. **Back up and test before saving, editing or deleting:** the current implementation can also change product sale flags and discount dates, and deleting a mass discount can clear product discount data. Overlap and precedence need testing in your shop.

<h2 id="overview-1">Mass discount list</h2>
<h4 id="fields">List fields and filters</h4>

The list includes the discount name, type, amount and dates; search and type filters are defined in the current form.

<h4 id="actions">Actions</h4>

Open an existing record or create a new one. Check permissions and confirm the affected products before editing or deleting.

<h2 id="overview-2">Discount details</h2>
<h4 id="discounts-detail">Fields</h4>

Name, type, amount, start date and end date are required. Type is a fixed total or percentage; enter **12** for 12%. The model requires a positive amount and at least one product, category or manufacturer and rejects reversed dates.

The XML form marks the product selector required even though the model permits category-only or manufacturer-only selection. Check the actual editor's validation before relying on either workflow. Categories and manufacturers can also be selected.

<h4 id="mass-discounts-detail">Save</h4>

Save and reopen the rule, then inspect the affected products' sale flag, discount price and dates. A successful form save alone does not establish storefront or checkout behavior.

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
