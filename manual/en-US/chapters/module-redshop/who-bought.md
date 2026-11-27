## redSHOP Who Bought module

The optional `mod_redshop_who_bought` module is labelled “Customers Who Bought This Item Also Bought”. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), choose its position and pages, and configure categories, count, slider, images, names, prices and add-to-cart controls.

**Important:** the inspected module query selects published products and optionally categories; it does not query purchase history or relate products to the current item. Do not present the resulting list as verified co-purchase recommendations. Test category selection, prices, access and the slider on a disposable shop before enabling it.

The query also uses the global **Show discontinued products** setting to decide whether to include expired products. It specifies no result ordering, so do not depend on a particular product sequence. The default layout formats the product's stored price rather than obtaining the net-price result used by some other product layouts. It only prints that price when the stored value is nonzero and the shop's price and quotation settings allow it, even if **Show product price** is enabled. Compare it with the product page and cart for the relevant customer and currency.

For a new module, the manifest provides these defaults; saved values can differ:

| Setting | Purpose and default |
| --- | --- |
| Module Class Suffix | Optional styling suffix; empty by default. |
| Category | Select categories to filter the list. Although multiple selections are offered, the inspected query quotes their combined IDs as one value rather than separate values (CODE-078). Verify results before relying on multi-category filtering. |
| Number of products to display | Maximum query rows; default 5. |
| Number of products showing on each scroll | Default 2. Use a positive value: the default layout divides by this setting and a zero value causes an error in an isolated test. |
| Slider Width | Defaults to 440 pixels. |
| Thumbnail width / height | Both default to 100 pixels. |
| Show product image / add to cart / product name / product price | Each defaults to Yes. |
| Product Title Linkable | Defaults to Yes; controls the name link when the name is shown. |

With AJAX cart enabled, the inspected layout calls `count()` on the detail-template result. An isolated PHP 8 test raised an error for a template object; test the module on a disposable shop before enabling this combination.
