## Inventory for all stockrooms

The inventory view lists quantities per published stockroom. Back up stock data and use disposable products and mock orders when testing inventory changes.

<h2 id="listingScreen">Inventory list</h2>
<h4 id="field">Filters and quantities</h4>

Search by product name or number, filter by category, and select product, property or subproperty inventory. Each published stockroom has separate quantity and preorder-stock columns. A preorder column also displays already ordered preorder quantity when present.

The list shows a row number, product SKU and name, and, for property or subproperty inventory, the corresponding number and name. The product links open the product editor. The SKU and name headings offer sorting in the product view. Property and subproperty inventory is ordered by product and attribute hierarchy instead.

The search matches the beginning of the selected product name or number. **Reset** beside the search clears the keyword and category and returns the selectors to product-name search and product inventory.

The totals shown are calculated from the rows in the current result page, not necessarily every matching product across all pages. Confirm totals independently before using them for reconciliation.

<h4 id="action">Saving, resetting and output</h4>

Edit the quantity or preorder quantity and use a save control in a stockroom column heading. The form submits the displayed rows and stockrooms, not just the column whose save control was selected. Reopen the view and verify each saved value. A product editor can also expose stockroom quantities when configured.

If **Use blank as infinite** is enabled, saving a blank quantity can remove an existing stockroom quantity record rather than store zero. Check the configuration and the intended result before clearing a value. The model also rejects a nonblank preorder stock value below an existing nonblank ordered preorder quantity.

A save can show a success message even if a row was rejected with a warning and other rows were processed. Check warnings and reopen the inventory to confirm every intended value before continuing.

The preorder **Reset** is not a harmless display reset: the current model is intended to set both preorder stock and already ordered preorder quantity to zero for the selected stockroom and item. The inventory link may omit the stockroom identifier, so do not assume the intended row was reset; verify the result. Do not use it on live orders without understanding the impact and taking a backup.

The toolbar provides **Print Data** and an **Export Data** link. Source includes a CSV view and column definitions, but actual CSV routing, output, filters and permissions have not been verified on Joomla 5/6. Test export with non-sensitive disposable inventory before relying on it; do not assume it exports all pages.
