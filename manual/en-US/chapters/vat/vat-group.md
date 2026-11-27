## VAT/Tax Group

A tax group groups rates used for products. The current rate lookup uses the product's tax group when one is set, otherwise the configured default group. A group must be published for that lookup to match it.

Shipping rates can specify a separate tax group, or use the configured default. Shipping VAT is calculated through a separate lookup, so verify it independently of product VAT; see [Shipping Methods](chapters/shipping/shipping-methods.md).

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Review groups

Open **VAT/Tax Group** in redSHOP administration to inspect existing groups before creating or changing one. The list shows name, publication state, ID and a linked count of rates. Search by name, or use `id:` followed by the group ID. Open the name to edit it; inline name editing is available when enabled and permitted. Use **New**, or select records for **Delete**, **Publish** or **Unpublish**, subject to your permissions. Avoid deleting groups or rates without understanding their use by products and existing shop configuration.

Use the name, publication or ID headings to sort and pagination to move through results. The model defaults to ID ascending unless a saved list selection applies. The table's deletion check refuses a group that has associated rates. This check does not establish that deleting a group without rates is safe for products or the default configuration; review those references and back up first.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create"></a>
### Create a group and assign rates

1. In **VAT/Tax Group**, select **New**.
2. Enter the required group name, choose its published state and save. The current English label is **VAT / Tax Group Name**. New groups default to Published. Reopen the group to verify the result.
3. Add applicable rates for the group using [VAT/Tax Rate](chapters/vat/vat-rate.md). Each rate also needs the appropriate shopper groups.
4. Review the default VAT group in redSHOP configuration and the tax group on relevant products. Test the actual rate selection for representative customers and locations.

Tax obligations depend on the shop, customer and jurisdiction. Confirm the settings with a qualified tax adviser and test on an isolated copy before applying changes to a live shop.
