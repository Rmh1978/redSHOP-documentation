## Shopper groups

Shopper groups configure shop-specific customer behavior. They are distinct from Joomla user groups and access levels; do not rely on catalog visibility alone to protect confidential data.

The inspected source has a view-resolution mismatch that can prevent the shopper-group list or editor from opening. If this occurs, contact your redSHOP maintainer and verify the installed version before changing groups.

<h2 id="overview-1">Shopper group management</h2>
<h4 id="shopper-groups-1">List</h4>

Open **Users → Shopper Groups** in redSHOP administration. The list includes group name, an Add Discount link and publication state. Search matches the group name; use the available ordering and pagination controls to navigate.

<h4 id="actions-shopper-1">Actions</h4>

Create, edit, publish, unpublish or delete groups according to permissions. Before changing or removing a group, review assigned customers, price rules, tax rates, discounts and integrations.

<h2 id="overview-2">Group details</h2>
<h4 id="shopper-groups-2">Fields</h4>

- **Name:** required; choose a recognizable group name.
- **Group type:** choose the parent group or the top level. **Customer type** offers Company or Private.
- **Portal:** defaults to No. The editor displays a generated portal link using the group ID and configured portal-login ItemID rather than an editable URL.
- **Categories and manufacturers:** select multiple entries where appropriate; verify the resulting catalog behavior for a test customer.
- **Default shipping and rate:** the switch defaults to No; check the rate and shipping configuration before enabling it.
- **Show price without VAT:** defaults to No. **Show price** and **Use as catalog** offer Global, Yes and No; check the interaction with global settings.
- **Quotation mode:** defaults to No. **Published** defaults to Yes for a new group.
- **Cart ItemID and Checkout ItemID:** enter the relevant Joomla menu item IDs when required by the shop's routing setup.
- **Logo:** the inspected upload path recognizes JPG, JPEG, GIF and PNG extensions. A failed upload can still appear to save, so keep a backup and verify the saved image before use.
- **Intro text and description:** enter the content needed for the group.

The actual effect of portal, product visibility, shipping and checkout settings depends on configuration and implementation; test them with representative users before relying on them.

<h4 id="actions-shopper-2">Save</h4>

Save and reopen the group to confirm its configuration. Assign a test customer and verify both that customer's behavior and an unaffected customer's behavior.

<h2 id="working">Working with groups</h2>
<h4 id="create">Create a group</h4>

Choose **New**, enter a distinct descriptive name and select only the options needed for the shop. Configure categories, manufacturers, prices and tax rules deliberately; changing a shopper group can affect checkout.

<h4 id="add">Add a discount</h4>

The list's **Add Discount** link opens the order-total discount editor with the group ID in the request. Review the selected group, threshold, dates and amount or percentage in the editor before saving. Test threshold boundaries, other discounts, tax and checkout with a disposable account; do not assume the old example total applies to every shop.

See [Order total discount](chapters/discounts/order-total-discount.md) for the current rule fields.
