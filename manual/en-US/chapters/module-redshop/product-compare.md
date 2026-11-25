## redSHOP Product Compare module

The optional `mod_redshop_productcompare` site module shows products in the comparison list and links to the comparison view. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and enable the redSHOP Compare Products setting. The module manifest offers a class suffix; product comparison controls also depend on the product template.

The class suffix is the module's only basic manifest option and defaults to empty; comparison behavior is configured through redSHOP and the active templates rather than a separate module product selector.

When a product is present, the default layout counts a menu lookup result that can be an object or null. Both caused an error in an isolated PHP 8 test; verify the installed storefront before using the module for populated comparison lists.

On a test shop, add several products to comparison, check their links and comparison view, remove one, and test the empty state. Test separate customer sessions and access restrictions as well as keyboard and mobile behavior. The current module code shows an empty-list message when comparison is disabled.
