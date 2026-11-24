## VAT/Tax Group

A tax group groups rates used for products. The current rate lookup uses the product's tax group when one is set, otherwise the configured default group. A group must be published for that lookup to match it.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Review groups

Open **VAT/Tax Group** in redSHOP administration to inspect existing groups before creating or changing one. A group has a name and a published state; the list also provides access to its rates. Avoid deleting groups or rates without understanding their use by products and existing shop configuration.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create"></a>
### Create a group and assign rates

1. In **VAT/Tax Group**, select **New**.
2. Enter a meaningful group name, choose its published state and save.
3. Add applicable rates for the group using [VAT/Tax Rate](chapters/vat/vat-rate.md). Each rate also needs the appropriate shopper groups.
4. Review the default VAT group in redSHOP configuration and the tax group on relevant products. Test the actual rate selection for representative customers and locations.

Tax obligations depend on the shop, customer and jurisdiction. Confirm the settings with a qualified tax adviser and test on an isolated copy before applying changes to a live shop.
