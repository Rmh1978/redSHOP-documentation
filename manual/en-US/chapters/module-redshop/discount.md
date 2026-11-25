## redSHOP Discount module

The optional `mod_redshop_discount` site module displays configured discounts. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and configure the relevant redSHOP discounts and shopper groups.

The module's basic **Module Class Suffix** is empty by default and can be used for styling. The advanced **Alternative Layout** selects an installed layout. The discounts themselves are configured in redSHOP, not selected in this module.

The inspected helper selects published [order total discounts](chapters/discounts/order-total-discount.md) whose start and end dates include the current time and whose shopper-group association matches the visitor. It uses inclusive start and end comparisons and orders results by threshold, lowest first. A rule without a matching group association is not included. The default layout shows the condition and discount, formatting percentage and fixed-value discounts differently.

For example, a published rule for the visitor's group with condition **Higher**, threshold `100` and discount `10%` can appear as `X > 100` and `10%` during its configured period. This display describes the rule; it does not check the visitor's current cart before listing it.

Test with disposable accounts from different shopper groups, before and during the date window, and check cart totals separately: a displayed promotion does not itself establish that a discount will be applied. Check boundary times and presentation against the shop's settings.
