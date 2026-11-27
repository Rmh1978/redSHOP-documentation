## redSHOP Minicart module

The optional `mod_redshop_minicart` site module shows a cart quantity and opens a cart panel. It is separate from the [Cart module](chapters/module-redshop/cart-module.md). [Install and configure it](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and test the installed module and template on an isolated shop.

The manifest offers **Show with Shipping**, **Show with Discount**, **Show with VAT** and **Show shipping line**, all defaulting to No. The inspected default layout does not use these settings: with the same synthetic populated cart, an isolated layout test rendered the same output whether all four were on or off. Do not rely on these options without testing your installed module.

The inspected panel displays product quantities and prices excluding VAT, a subtotal excluding VAT, removal controls and links to the cart when products are present. Its anchor displays a separate cart-module total, which is calculated using a published Cart module's settings rather than the Minicart instance's settings. Compare the anchor, panel, cart and checkout totals with your actual shipping, discounts and VAT; the isolated layout test did not exercise cart recalculation.

The default layout also displays a minimum-order warning when the calculated difference is positive. Advanced options include an alternative layout and module class suffix. Caching defaults to No Caching and cache time to 900 seconds; saved settings can differ. Keep caching disabled unless separate customer-session behavior is verified.

Test empty and populated carts, removal, product options, the cart links and minimum order message. Check separate sessions, multiple Minicart instances, keyboard operation and mobile layout before enabling it. Joomla storefront, cart recalculation and checkout behavior remain unverified.
