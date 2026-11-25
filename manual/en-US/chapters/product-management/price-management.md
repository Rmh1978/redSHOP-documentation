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

**Known issues:** the price-rule model can construct its product lookup before setting the product ID, which may prevent the editor from opening. The submit script also references `productprice`, while its input is named `product_price`, so saving may fail in the browser. The current range check can accept a new range that encloses an existing rule; avoid overlapping ranges and verify any existing ones. Do not bypass validation or assume the rule saved; check the result and request separately reviewed Core fixes.

<h4 id="create-price-2">Create a price rule</h4>

1. Save a disposable product and open **Add Price**.
2. Select New, choose a shopper group, enter prices, quantity bounds and both discount dates.
3. Save, check any error, then reopen the rule to verify its values. If the editor fails, retain the evidence for the Core issue rather than changing data through an alternative unvalidated path.

<h4 id="work-redshop">Verify storefront pricing</h4>

Using disposable customer accounts and mock payments, compare product, cart, checkout and saved-order totals for matching and nonmatching shopper groups. Test below, at and above both quantity boundaries, overlapping rules, before/during/after discount dates, VAT and rounding. Calculate expected amounts independently; old screenshots and examples do not establish current behavior.
