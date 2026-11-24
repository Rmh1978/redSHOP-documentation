## Shopper groups

Shopper groups configure shop-specific customer behavior. They are distinct from Joomla user groups and access levels; do not rely on catalog visibility alone to protect confidential data.

<h2 id="overview-1">Shopper group management</h2>
<h4 id="shopper-groups-1">List</h4>

Open **Users → Shopper Groups** in redSHOP administration. The list includes group name, an Add Discount link and publication state; search is available.

<h4 id="actions-shopper-1">Actions</h4>

Create, edit, publish, unpublish or delete groups according to permissions. Before changing or removing a group, review assigned customers, price rules, tax rates, discounts and integrations.

<h2 id="overview-2">Group details</h2>
<h4 id="shopper-groups-2">Fields</h4>

The name is required. The form includes a parent group, customer type, portal, categories, manufacturers and a portal URL. It also provides default shipping and rate, display price without tax, show-price and catalog-mode overrides, quotation mode and publication. Show-price and catalog-mode choices are Global, Yes and No; test each against the global settings.

Separate fields hold cart and checkout Joomla menu ItemIDs, a logo upload, intro text and description. The actual effect of portal, product visibility, shipping and checkout settings depends on configuration and implementation; test them with representative users before relying on them.

<h4 id="actions-shopper-2">Save</h4>

Save and reopen the group to confirm its configuration. Assign a test customer and verify both that customer's behavior and an unaffected customer's behavior.

<h2 id="working">Working with groups</h2>
<h4 id="create">Create a group</h4>

Choose **New**, enter a distinct descriptive name and select only the options needed for the shop. Configure categories, manufacturers, prices and tax rules deliberately; changing a shopper group can affect checkout.

<h4 id="add">Add a discount</h4>

The list's **Add Discount** link opens the order-total discount editor with the group ID in the request. Review the selected group, threshold, dates and amount or percentage in the editor before saving. Test threshold boundaries, other discounts, tax and checkout with a disposable account; do not assume the old example total applies to every shop.

See [Order total discount](chapters/discounts/order-total-discount.md) for the current rule fields.
