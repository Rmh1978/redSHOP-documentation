## redSHOP Featured Product module

The optional `mod_redfeaturedproduct` site module displays featured products in a scroller. [Install and configure it](chapters/module-redshop/install-module-plugin.md), assign a position and pages, and test the exact package on an isolated shop.

The inspected helper selects published products marked as featured. The global **Show discontinued products** setting also affects whether expired products are included. If no products are returned, the default layout displays a no-featured-products message.

For a new module, the manifest provides these options; saved settings can differ:

| Setting | Purpose and default |
| --- | --- |
| Pre-Text / Number of Products | Optional text is empty by default; the product limit defaults to 5. |
| Product order | Random by default; Newest and Oldest sort by publication date in the inspected query. |
| Show Product Name / Add To Cart / Prices / VAT Price | Each defaults to Yes. The product and global price, catalog and quotation settings also affect the output. |
| Product Thumb Width / Height | Both default to 100 pixels. |
| Scroller Width / Height | Defaults are 700 by 200 pixels. |
| Show Discount price layout | Defaults to Yes. Compare discounted and regular prices with the product page and cart. |
| Alternative Layout / Module Class Suffix / Menu Class Suffix | Choose an installed layout and optional styling; verify their effect with your template. |

Use disposable featured products to test order, publication and expiry, links, images, discounts, VAT and add-to-cart behavior. Check keyboard interaction, motion and mobile presentation. The inspected module uses legacy carousel scripts; package installation, database queries, browser behavior and Joomla 5/6 compatibility have not been verified by this source review.
