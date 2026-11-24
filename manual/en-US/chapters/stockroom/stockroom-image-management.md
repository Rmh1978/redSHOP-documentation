## Stockroom image management

Stock amount images associate a stockroom, quantity condition and image with a tooltip. Test the rules on an isolated shop before using them to communicate availability to customers.

<h2 id="listingScreen">Stock image list</h2>
<h4 id="field">Fields</h4>

The editor requires a tooltip, stockroom, stock option and quantity. Options include higher than, equal and lower than; the quantity input has a minimum of 1 in the current form. An image can be selected through the media control. Verify which controls and filters appear in the installed administrator.

<h4 id="action">Actions</h4>

Use the permitted New, Edit and Delete actions to manage records. Back up files and data before deleting media and verify the effects with disposable records.

<h2 id="workingStockImage">Working with stock images</h2>
<h4 id="createItems">Create a rule</h4>

Select New, enter the tooltip, stockroom, comparison, threshold and image, then save and reopen the rule. Test equality and values above and below the threshold, including zero and overlapping rules; do not assume a zero threshold can be entered through this form.

<h4 id="productDetail">Display in a product template</h4>

The product stock renderer recognizes `{product_stock_amount_image}` and uses the first matching stock-image result. Stockroom functionality must be enabled. Add the tag to the active product template, then verify the image and tooltip with test products and quantities.

The current image lookup joins stockrooms to product-stock records but does not explicitly filter those records by the requested product or variant. A rule for another stockroom may therefore be returned; verify with products in distinct stockrooms and do not rely on these images as the sole stock or purchase control until this is reviewed.
