## redSHOP Product Tab module

The optional `mod_redproducttab` site module provides configurable product tabs. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, then choose the new, latest, sold and special-product tabs, categories, product count, row count, images, price and cart controls.

The module source references bundled Bootstrap and jQuery scripts, but the inspected module manifest does not list its `js` directory. A fresh Joomla 5.4 installation may therefore lack these scripts. Verify the actual installation package and test tab interaction, browser console, styling, keyboard use and compatibility with the Joomla template on an isolated site before use.

The manifest's Yes/No options use text values, while the inspected layout treats the value `no` as true and the category helper compares it with zero. Consequently, saved No selections may not disable tabs or select the configured categories as intended. Check each option and resulting products before relying on the module; this issue is tracked in CODE-077. Joomla form and storefront behavior still require verification.

With category adjustment enabled, the inspected helper also uses the request's `id` as a category ID outside category pages. On product or other pages this can filter by an unrelated category; check the resulting products on each assigned page. This behavior was reproduced with synthetic request values, not an installed Joomla site.

| Setting | Purpose and configuration notes |
| --- | --- |
| Module Class Suffix | Optional styling suffix; manifest default is empty. |
| Product Thumb Width / Height | Thumbnail dimensions; manifest defaults are 100 by 100. |
| Show Newest / Latest / Most Sold / Special Products | Intended tab switches. The manifest declares numeric defaults but `yes`/`no` option values; verify saved choices because of the behavior described above. |
| Adjust To Category / Category | Intended to select the current category or configured categories; verify both paths before relying on the result. |
| Number of products to display | Maximum query rows per tab. The manifest does not declare a default; the helper's fallback is 1 when the parameter is absent. |
| Number of products per row | The form offers 1, 2, 3, 4 and 6; its declared default of 0 is not among those choices. Choose a value explicitly. In an isolated test, the layout raised a division-by-zero error for a zero value with one product; Joomla form binding remains unverified. |
| Show product image / price / Read More / Add To Cart | Intended presentation switches; check their saved behavior because their options also use `yes`/`no`. |
| Alternative Layout | Select an installed alternative if available; check its behavior independently. |

The inspected default layout also displays each product's short description when `show_desc` is enabled. The module entry defaults this parameter to `1`, but the inspected manifest does not expose a corresponding control. Check the installed layout and saved parameters if descriptions appear unexpectedly.

The inspected Newest query orders by publication date, while Latest orders by product ID; the Special query filters featured products and orders by publication date. The most-sold query sums order-item quantities without filtering order status. Do not treat this tab as a financial report.

The default layout also passes the image helper's product and dimension arguments in a different order from its declared signature. If images are enabled, check the image, size and link for several test products; actual installed rendering is unverified.

For an on-sale product with a lower calculated price, the default layout reads a discount-layout variable that is not set by the inspected module entry or parent layout. In an isolated test without an inherited value, PHP warned and the layout showed the discounted price only; actual Joomla rendering and error handling remain unverified. Check discounted products as well as regular prices on an isolated site.

The inspected price branch is also gated by the product's not-for-sale flag, catalog mode, global **Show Price**, and quotation-price settings. It uses both the product price and net-price helpers, then formats the chosen amount; compare it with the product page and cart for relevant shopper groups, tax and currency settings.

For shopper-group product discounts, compare module prices with the product page and cart. In isolated tests with a shared product and no separate price record, repeated price-helper calls applied a synthetic discount again; calling the net-price helper after the first calculation also produced a lower result. Actual discount selection, module rendering and checkout totals remain unverified.

When AJAX cart and the module's add-to-cart output are enabled, the inspected layout also calls `count()` on a detail-template object or null, which raises an error on PHP 8. Test the module on an isolated shop before enabling this combination.

The shared cart renderer can suppress the control for products marked not for sale, expired products, restricted tax-exempt users or when **Show Price** is disabled. Stock, preorder and catalog settings also affect the resulting control. Check a representative in-stock product and products with attributes or accessories in the storefront; the module switch alone does not guarantee a purchase button.

When the same product appears more than once, test each add-to-cart control separately. The inspected shared renderer does not pass its module ID to the tag renderer, so module-specific form identifiers may collide. Actual browser and Joomla behavior has not been verified.
