## redSHOP Price Filtering module

The optional `mod_redshop_pricefilter` site module provides a price-range control and product display. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and menu pages, and choose the range and relevant categories.

### Module options

These are manifest defaults for a new configuration; saved settings can differ.

| Option | Use |
|---|---|
| **Minimum / maximum slider range** | Set the offered price range; defaults are 0 and 5000. The current range is read from the request and Joomla user state, so check the active selection when testing. |
| **Category** | Select one or more relevant categories. Do not assume an empty selection enforces access restrictions. |
| **Number of products** | Set the product count; the manifest default is 5. |
| **Show image / thumbnail width and height** | Image defaults to Yes and dimensions to 100 by 100. Check images and layout at the intended module position. |
| **Show price / discount price layout** | Both default to Yes. Verify the prices for the relevant customer and currency. |
| **Show read more / add to cart** | Both default to No. If enabled, verify links and purchasing behavior in the active template. |
| **Module class suffix** | Optional styling hook for the active template; empty by default. |

The product list includes prices at both selected range boundaries and displays at most the configured number of matching products. Candidates are ordered by their stored product price before the customer-specific range check, so the displayed order is not necessarily sorted by the calculated price. The default result layout does not provide pagination controls.

Use disposable products to test category selection, price-range boundaries, result limits, shopper groups, currencies, VAT, discounts and add-to-cart behavior. Confirm the results and prices match the configured shop before enabling the module for customers.

The product list compares the range against a price calculated for the current user, while the discount-price display is calculated separately. Test discounted products near both range boundaries; do not assume the displayed discount price is always the value used for filtering.

The result layout calls the regular-price helper before the net-price helper. In an isolated test with a shared synthetic product and no separate price record, the second helper applied a preseeded discount again. Actual filter results, checkout and storefront pricing remain unverified; compare them using disposable products.

The current layout uses the selected range as the slider's limits. In an isolated layout test, a selected range of 100–200 produced a slider limited to 100–200, so a customer may be unable to widen a restored or request-supplied range. Actual browser and Joomla state behavior remain unverified.
