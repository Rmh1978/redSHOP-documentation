## redSHOP Products module

The optional `mod_redshop_products` site module displays a configurable selection of products. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, then choose a module type and product count.

### Selecting products

| Setting | Purpose and manifest default |
| --- | --- |
| Module Type | Newest (default), latest, most sold, random, on sale, on sale with date check, watched, specific products or category ordering. |
| Sort type watched | Ascending (default) or descending; available for watched products. |
| Specific products | Select products when using the specific-products mode. Other filters still apply. |
| Category | Select one or more categories. With no selected category, the inspected query requires a published category. |
| Get Category Id from URL? | Adds the current category from the URL or menu parameters to selected categories; defaults to No. |
| Include Subcategories | Includes subcategories of the selected categories; defaults to No. |
| Products display | Initial maximum count; defaults to 5. |
| Featured Product | Restrict to featured products; defaults to No. |
| Show Child Products | Include child products; defaults to Yes. |
| Select Stockroom | When stockrooms are enabled, restrict to products with positive quantity in the selected stockrooms. |

The inspected query selects published products and follows the shop's discontinued-product setting. On a product view it excludes the current product. Watched products depend on the visitor's watched list. The most-sold query sums order-item quantities without an order-status filter, so do not treat it as a financial report.

### Presentation and navigation

| Setting | Purpose and manifest default |
| --- | --- |
| Show product image / thumbnail width and height | Image display defaults to No; dimensions default to 100 by 100. |
| Show product price / Show VAT | Price defaults to No and VAT to Yes; shop-wide price and quotation settings also affect output. |
| Display Discount Price Layout | Show the discount-price presentation when applicable; defaults to Yes. |
| Show Short Description / Show Read More / Show Add To Cart | Each defaults to Yes. |
| Display Stockroom Status | Defaults to Yes. |
| Show Wishlist | Defaults to No. |
| Read more | Optional menu item for the separate read-more-products link. |
| Show loadmore button | Defaults to No; when enabled, the form exposes a count (default 5) and button text (default `Load more`). |
| Module Class Suffix / Alternative Layout | Styling and layout choices. |
| Caching / Cache Time | The manifest defaults to no caching and 900 seconds; global caching is also offered. Check session-dependent content and prices before enabling it. |

Saved settings may differ from manifest defaults. Available results and presentation depend on products, configuration, session and layout.

Test each selected mode with disposable products, including unpublished and discontinued products, different shopper groups, prices, taxes, load-more behavior and direct product links. Verify the storefront output and cart behavior before relying on the module.
