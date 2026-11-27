## Product price management

redSHOP provides a product price list for base and discount prices, and a separate per-product price-rule editor for shopper groups and quantity ranges. Open **Products → Products Price** in the redSHOP administrator for the price view. Back up and test pricing changes on an isolated installation before using them in a live shop.

<h2 id="price-management">Product price list</h2>
<h4 id="overview-price">List and filters</h4>

The list displays product names, numbers, base prices and discount prices. Select product name or product number as the search field and enter a search term. A category search option is also displayed, but its current query refers to a category column absent from the installation schema and may fail; use the other search options. The Price and Discount Price column headings have **separate** save controls. These submit the list's price values; do not assume the row checkboxes limit the save to selected products. The view's client validation checks nonnegative prices and accepts a discount price of zero or less than the product price; verify decimals and saved values independently.

The current list-save implementation performs an unrestricted product-table update twice per action. Review the known issue and test its impact on an isolated copy before using this screen for bulk changes, especially on large catalogs.

<h4 id="overview-product">Shopper-group quick editor</h4>

A separate product-price view contains shopper group, quantity start/end and price columns with a save action. The current price list does not contain the historical plus-icon link. Whether and how a particular installation exposes this separate view must be checked in its actual interface.

<h4 id="create-price">Edit prices</h4>

Find the intended products, enter prices and use the appropriate column's save control. Reopen or refresh the list and confirm the stored results. Do not assume one save action updates both price columns.

<h2 id="detail-redshop">Per-product price rules</h2>
<h4 id="overview-price-2">Price rule list</h4>

For a saved product, the product editor provides **Add Price**, which opens its price-rule list. The list shows product, shopper group, quantity start/end, price and discount price, and has New, Edit, Delete and Close actions. Verify the product and shopper group before changing a rule.

<h4 id="overview-price-3">Rule details</h4>

The editor includes shopper group, product price, quantity start/end, discount price and discount start/end dates. New numeric price and quantity values initially use zero. Choose the group and enter the intended price and range; the current model requires both discount dates, checks that the start quantity does not exceed the end quantity and checks date order. Verify exact dates, time zone, overlap, price precedence and decimal handling in an isolated shop.

**Known issues:** the price-rule editor's script checks the `product_price` input, rejects an empty, non-numeric or zero price, and compares the product price with the discount price numerically before saving. The model reads the product ID from the request before looking up the product name (an unknown product gives an empty name). Earlier versions failed on both points; after upgrading from a version before Core commit `d06a4fac86` verify that the editor opens and saves. The range check still examines only whether a new range's start or end falls inside an existing rule (`PriceTable`), so a new range that encloses an existing rule can be accepted; avoid overlapping ranges and verify any existing ones. Do not assume the rule saved; check the result and request separately reviewed Core fixes.

The price-rule list keeps the product in the `product_id` URL parameter through edit, save and pagination, supports a page size and is sorted by rule ID (ascending by default). The page resets to the first page when the page size or product changes. Product names are escaped in the list.

<h4 id="create-price-2">Create a price rule</h4>

1. Save a disposable product and open **Add Price**.
2. Select New, choose a shopper group, enter prices, quantity bounds and both discount dates.
3. Save, check any error, then reopen the rule to verify its values. If the editor fails, retain the evidence for the Core issue rather than changing data through an alternative unvalidated path.

<h2 id="attribute-option-prices">Attribute option prices</h2>

The product editor provides **Add Price** controls on individual properties
and subproperties. These open a separate attribute-price list for that option,
not the per-product price-rule list above. Save the product and option first,
then verify the option shown in the list before adding a rule.

The list shows shopper groups, quantity bounds, price and discount price. Its
Add, Edit and Delete actions operate on the selected option's rules. The
editor offers shopper groups, price, quantity start/end, discount price and
discount start/end dates. Its client-side checks reject an empty, non-numeric
or zero price and require both dates; the model also requires both dates.
Reopen each saved rule and check its values.

Avoid overlapping quantity ranges for the same option and shopper group: the
inspected attribute-price overlap check tests the new range's endpoints, and
an isolated test accepted a range enclosing another. Full Joomla behavior
requires further testing.
The option-price lookup treats a `0–0` range as a default and an end quantity
of zero as open-ended. It applies a nonzero discount only when it is below the
rule price and the current time falls within both stored dates. Check ranges,
dates, group selection and price precedence on an isolated shop; multiple
matching rules need special care. The editor's quantity-order validation can
reject a positive start with an end of zero, despite the lookup's open-ended
case; do not assume that the editor can create every range the lookup handles.
The inspected overlap validation also does not distinguish property from
subproperty when their numeric IDs match, so an unrelated rule may block a
save. Investigate on an isolated shop before changing existing rules.

<h4 id="work-redshop">Verify storefront pricing</h4>

Using disposable customer accounts and mock payments, compare product, cart, checkout and saved-order totals for matching and nonmatching shopper groups. Test below, at and above both quantity boundaries, overlapping rules, before/during/after discount dates, VAT and rounding. Calculate expected amounts independently; old screenshots and examples do not establish current behavior.
