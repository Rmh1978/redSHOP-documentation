## Stockroom image management

Stock amount images associate a stockroom, quantity condition and image with a tooltip. Test the rules on an isolated shop before using them to communicate availability to customers.

<h2 id="listingScreen">Stock image list</h2>
<h4 id="field">Fields</h4>

The list displays the tooltip, stockroom, comparison, quantity and image. The editor requires a tooltip, stockroom, stock option and quantity. Options include higher than, equal and lower than; the quantity input has a minimum of 1 in the current form. An image can be selected through the media control.

The stockroom selector includes records regardless of publication state. The list does not show the search filter defined in the form, so use the displayed rows and pagination to find a rule.

<h4 id="action">Actions</h4>

Use the permitted New, Edit and Delete actions to manage records. Deleting a record also attempts to remove its associated media and image folder. Back up files and data before deletion and verify the effects with disposable records.

<h2 id="workingStockImage">Working with stock images</h2>
<h4 id="createItems">Create a rule</h4>

Select New, enter the tooltip, stockroom, comparison, threshold and image, then save and reopen the rule. Test equality and values above and below the threshold, including zero and overlapping rules; do not assume a zero threshold can be entered through this form.

In a synthetic failure test, the image filename update reported a table error but the store still returned success. The full Joomla save has not been verified for this failure; reopen the rule and check the saved image rather than relying only on a success message.

<h4 id="productDetail">Display in a product template</h4>

The product stock renderer recognizes `{product_stock_amount_image}` and uses the first matching stock-image result. Stockroom functionality must be enabled. Add the tag to the active product template, then verify the image and tooltip with test products and quantities.

The lookup tries an equal rule first, then a higher-than rule, then a lower-than rule. When several rules could apply, test their combined result rather than assuming a particular image will be selected.

The inspected product renderer can use preorder stock when the quantity after reservations is zero and preordering is allowed. Test the image with reservations and preorder settings as well as ordinary stock quantities.

The current image lookup joins stockrooms to product-stock records but does not explicitly filter those records by the requested product or variant. A rule for another stockroom may therefore be returned; verify with products in distinct stockrooms and do not rely on these images as the sole stock or purchase control until this is reviewed.
