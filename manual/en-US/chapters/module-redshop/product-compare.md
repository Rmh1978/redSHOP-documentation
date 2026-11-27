## redSHOP Product Compare module

The optional `mod_redshop_productcompare` site module shows products in the comparison list and links to the comparison view. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and enable the redSHOP Compare Products setting. The module manifest offers a class suffix; product comparison controls also depend on the product template.

The class suffix is the module's only basic manifest option and defaults to empty; comparison behavior is configured through redSHOP and the active templates rather than a separate module product selector.

In redSHOP comparison settings, check **Max. No. of Products to Compare**, **Comparison can be done** (category or global), and the comparison template. The distributed configuration defaults to comparison disabled, a limit of four and category mode; saved shop settings can differ. The product template must include the comparison controls.

When a product is present, the default layout counts a menu lookup result that can be an object or null. Both caused an error in an isolated PHP 8 test; verify the installed storefront before using the module for populated comparison lists.

The inspected module removal request uses a different product parameter name from the comparison controller. The shared comparison action also uses a different category parameter name. Actual Joomla request handling and session behavior have not been verified; check both addition and removal with products from different categories.

Separately, an isolated test of the comparison helper found that removal
without a category did not remove the intended product, while removal with
the matching category did. Actual Joomla session and client behavior remain
unverified.

On a test shop, add several products to comparison, check their links and comparison view, remove one, and test the empty state. Test separate customer sessions and access restrictions as well as keyboard and mobile behavior. The current module code shows an empty-list message when comparison is disabled.
