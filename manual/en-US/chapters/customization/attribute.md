## Attribute sets

An attribute set groups product attributes and their options for use with products. Review and test changes carefully: attributes can affect customer selections, prices and stock-related data.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find a set

Open **Attribute Sets** in redSHOP customization. Review the set name and publication state before changing it. The product editor's set selector is populated from published sets.

<a id="overview-2"></a><a id="attribute-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create-1"></a>
### Create or edit a set

1. Select **New**, enter the required set name and choose its publication state.
2. Add attributes and their options. The editor and model include fields such as description, order, required selection, multiple selection, price visibility and display type; properties can contain prices, images and subproperties. Which controls appear and how they behave must be verified for the installed version.
3. Save, reopen the set and verify the saved entries and ordering. Use a disposable product to validate selections and calculate expected prices independently.

<a id="attribute-3"></a><a id="field-3"></a><a id="button-3"></a><a id="action-3"></a><a id="how-to"></a>
### Use a set on a product

In the product editor's **Product Attributes** area, select a published attribute set. A separate option requests copying attributes from the selected set; copying and referencing are different operations. The product save code includes a copy path, but the current selection handler contains a malformed task URL, so the interactive copy/preview workflow must be tested on an isolated installation before relying on it.

After saving, reopen the product and inspect the resulting attributes and options. Check required and multiple selections, default options, price adjustments, stock, cart and checkout. Do not assume a later set edit will update copied product attributes.

<a id="create-2"></a>
### Add product-specific attributes

The same product editor also has an action to add an attribute directly. Test product-specific attributes separately from set-based attributes, including deletion and the effect on existing carts and orders.

Back up before bulk editing or deleting sets. Deletion code also handles associated attribute and image records; verify effects using disposable data rather than deleting records to troubleshoot a live shop.
