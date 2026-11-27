## redSHOP Shopper Group Product module

The optional `mod_redshop_shoppergroup_product` site module obtains products from categories associated with the visitor's shopper group. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), select a position and pages, and configure product count, image dimensions, price, VAT, description, read-more, add-to-cart and discount display options as needed.

For a new module, the manifest provides these defaults; saved values can differ:

| Setting | Purpose and default |
| --- | --- |
| Module Class Suffix | Optional styling suffix; empty by default. |
| Number of Products | Maximum displayed in the default layout; default 5. |
| Show Image / thumbnail width and height | Image defaults to No; dimensions default to 100 by 100. |
| Show Price / Show VAT | Price defaults to No and VAT to Yes; shop-wide price and quotation settings also affect output. |
| Show Short Description / Show Read More / Show Add To Cart | Each defaults to Yes. |
| Show Discount Price Layout | Defaults to Yes; applies when the layout displays a qualifying discounted price. |
| Alternative Layout | Select an installed alternative layout. |

Review these settings together before publishing; enabling a display option does not establish that the calculated price or checkout behavior is correct.

For discounted products, test both VAT settings: the inspected layout passes the VAT option to its regular-price helper but calculates the comparison discount price separately. Verify displayed values against the product page and cart for each shopper group.

The layout calls both price helpers even when its **Show Price** option is No. In an isolated test with a synthetic shared product and discount, the net-price helper returned a lower value after the regular-price helper ran. Check prices in other page elements as well; actual storefront and cart effects are unverified.

When images are enabled, the default layout passes thumbnail arguments in an order that differs from the image helper's signature. Verify images and links with distinct product IDs and dimensions on a disposable shop; the actual storefront result has not been tested.

The module is awaiting a private security review. Check its suitability and access behavior with your site maintainer before enabling it.

With AJAX cart enabled, the inspected layout calls `count()` on the detail-template result even when **Show Add To Cart** is No. An isolated PHP 8 test raised an error for a template object; test the module on a disposable shop before enabling this combination.

Create representative categories, products and shopper groups on a test shop. Check guest and logged-in users, group changes, empty groups, unpublished products, displayed prices and cart behavior. A filtered module listing is not a replacement for independently testing access to direct product and category URLs.
