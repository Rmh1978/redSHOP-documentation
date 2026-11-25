## Attribute sets

An attribute set groups product attributes and their options for use with products. Review and test changes carefully: attributes can affect customer selections, prices and stock-related data.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find a set

Open **Attribute Sets** in redSHOP customization. The list shows the set name, publication state and ID; select a sortable column heading to change the order, or open a name to edit the set. Select rows for **Copy**, **Delete**, **Publish** or **Unpublish**, or choose **New**. The product editor's set selector is populated from published sets.

Copying a set currently may not preserve every attribute, property and subproperty setting, including publication, display and selection controls. Reopen the copy and compare its attributes and options with the original before using it.

<a id="overview-2"></a><a id="attribute-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create-1"></a>
### Create or edit a set

1. Select **New**, enter the required set name and choose its publication state. A new set defaults to Published Yes; choose No while preparing an unfinished set.
2. Select **New Attribute**. Enter its required name and optional description and order. Choose dropdown or radio display, required or multiple selection, price visibility and publication as appropriate.
3. Add properties for the available options. Each property can have an operator and price, order, number, extra field, tooltip, alert, image and default-selection setting. Add subproperties when an option needs another level of choices; configure that group's title, display, required and multiple-selection settings.
4. Save, or use **Apply** to save while continuing to edit. Reopen the set and verify the saved entries and ordering. Use a disposable product to validate selections and calculate expected prices independently.

The set editor currently does not pass property tooltip and alert text through its save path, and its property image input does not match the save path. Reopen the set and verify these values and images; do not rely on them without testing.

For example, create a **Size** attribute with **Small** and **Large** properties, then choose whether a size is required and whether its price is adjusted. Test the resulting choices with the product's actual template and cart settings.

<a id="attribute-3"></a><a id="field-3"></a><a id="button-3"></a><a id="action-3"></a><a id="how-to"></a>
### Use a set on a product

In the product editor's **Product Attributes** area, select a published attribute set. A separate option requests copying attributes from the selected set; copying and referencing are different operations. The product save code includes a copy path, but the current selection handler contains a malformed task URL, so the interactive copy/preview workflow must be tested on an isolated installation before relying on it.

After saving, reopen the product and inspect the resulting attributes and options. Check required and multiple selections, default options, price adjustments, stock, cart and checkout. Do not assume a later set edit will update copied product attributes.

<a id="create-2"></a>
### Add product-specific attributes

The same product editor also has an action to add an attribute directly. Test product-specific attributes separately from set-based attributes, including deletion and the effect on existing carts and orders. Deleting an existing attribute or option sends a separate request; Cancel does not necessarily undo it. A subproperty may remain visible after a deletion request, so reopen the record and verify its saved state before retrying.

Back up before bulk editing or deleting sets. Deletion code also handles associated attribute and image records; verify effects using disposable data rather than deleting records to troubleshoot a live shop.

The inspected deletion path identifies attributes through published properties before deleting the set. Attributes without a published property may be left behind; test cleanup on an isolated copy and do not assume all associated data is removed.
