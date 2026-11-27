## redSHOP Related Products module

The optional `mod_redshop_related_products` site module displays products related to a product. [Install and configure it](chapters/module-redshop/install-module-plugin.md), assign a position and pages, and create related-product associations in the product editor.

The inspected entry reads the request parameter `pid` to select the product; if it is absent or empty, it passes an empty list to the layout. In an isolated test, `id=42` did not trigger a related-product lookup, while `pid=42` did. Check actual output on your product routes before relying on it; Joomla request normalization and routing were not tested.

For a new module, the manifest provides these settings; saved values can differ:

| Setting | Purpose and default |
| --- | --- |
| Module Class Suffix / Alternative Layout | Optional presentation settings. The suffix defaults to empty. |
| Show Image / thumbnail width and height | Image defaults to No; dimensions default to 100 by 100. The inspected layout passes image-helper arguments in a different order from its signature; check images and links for several products. |
| Show Price / Show VAT | Price defaults to No and VAT to Yes. Product and shop settings also affect price display. |
| Show Short Description / Read More / Add To Cart | Each defaults to Yes. Check the actual product and cart behavior. |
| Show Discount Price Layout / Stockroom Status | Both default to Yes; compare displayed prices and stock messages with the product page and cart. |
| Select Stockroom | Intended to select stockrooms. With stockrooms enabled and a selection, an isolated module inclusion without an inherited query failed before rendering. Actual Joomla include scope and filtering remain unverified; test before using this option. |
| Show Wishlist | Defaults to No; wishlist output also depends on the shop's feature settings. |

Test a product with and without related items, the relevant routes, image sizes, price and stock, and add-to-cart behavior using disposable products. Check direct access and separate customer sessions as well. Actual Joomla 5/6 storefront, database and checkout behavior have not been verified.
