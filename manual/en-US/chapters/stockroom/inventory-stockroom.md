## Inventory for all stockrooms

The inventory view lists quantities per published stockroom. Back up stock data and use disposable products and mock orders when testing inventory changes.

<h2 id="listingScreen">Inventory list</h2>
<h4 id="field">Filters and quantities</h4>

Search by product name or number, filter by category, and select product, property or subproperty inventory. Each published stockroom has separate quantity and preorder-stock columns. A preorder column also displays already ordered preorder quantity when present.

The totals shown are calculated from the rows in the current result page, not necessarily every matching product across all pages. Confirm totals independently before using them for reconciliation.

<h4 id="action">Saving, resetting and output</h4>

Edit the quantity or preorder quantity and use a save control in a stockroom column heading. Reopen the view and verify each saved value. A product editor can also expose stockroom quantities when configured.

**Reset** is not a harmless display reset: the current model sets both preorder stock and already ordered preorder quantity to zero for the selected stockroom and item. Do not use it on live orders without understanding the impact and taking a backup.

The toolbar provides **Print Data** and an **Export Data** link. Source includes a CSV view and column definitions, but actual CSV routing, output, filters and permissions have not been verified on Joomla 5/6. Test export with non-sensitive disposable inventory before relying on it; do not assume it exports all pages.
