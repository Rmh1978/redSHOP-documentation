## redSHOP Product Tab module

The optional `mod_redproducttab` site module provides configurable product tabs. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, then choose the new, latest, sold and special-product tabs, categories, product count, row count, images, price and cart controls.

The module source references bundled Bootstrap and jQuery scripts, but the inspected module manifest does not list its `js` directory. Verify the actual installation package and test tab interaction, browser console, styling, keyboard use and compatibility with the Joomla template on an isolated site before use.

The manifest's Yes/No options use text values, while the inspected layout treats the value `no` as true and the category helper compares it with zero. Consequently, saved No selections may not disable tabs or select the configured categories as intended. Check each option and resulting products before relying on the module; this issue is tracked in CODE-077. Joomla form and storefront behavior still require verification.

| Setting | Purpose and configuration notes |
| --- | --- |
| Module Class Suffix | Optional styling suffix; manifest default is empty. |
| Product Thumb Width / Height | Thumbnail dimensions; manifest defaults are 100 by 100. |
| Show Newest / Latest / Most Sold / Special Products | Intended tab switches. The manifest declares numeric defaults but `yes`/`no` option values; verify saved choices because of the behavior described above. |
| Adjust To Category / Category | Intended to select the current category or configured categories; verify both paths before relying on the result. |
| Number of products to display | Maximum query rows per tab. The manifest does not declare a default; the helper's fallback is 1 when the parameter is absent. |
| Number of products per row | The form offers 1, 2, 3, 4 and 6; its declared default of 0 is not among those choices. Choose a value explicitly. |
| Show product image / price / Read More / Add To Cart | Intended presentation switches; check their saved behavior because their options also use `yes`/`no`. |
| Alternative Layout | Select an installed alternative if available; check its behavior independently. |

The inspected most-sold query sums order-item quantities without filtering order status. Do not treat this tab as a financial report.

When AJAX cart and the module's add-to-cart output are enabled, the inspected layout also calls `count()` on a detail-template object or null, which raises an error on PHP 8. Test the module on an isolated shop before enabling this combination.
