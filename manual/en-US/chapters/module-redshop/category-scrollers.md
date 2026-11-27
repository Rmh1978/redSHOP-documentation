## Category scrollers

Two optional site modules have similar names but different purposes:

- `mod_redcategoryscroller` (Main Category Scroller) displays categories.
- `mod_redshop_category_scroller` displays products, optionally filtered by the current request ID.

[Install and configure the appropriate module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and test with disposable catalog data before publishing. Both are separate from the [Category menu](chapters/module-redshop/category-menu.md).

### Main Category Scroller

The inspected helper selects published categories whose parent ID is not zero; it does not apply the hierarchy it retrieves to this query. The module therefore should not be assumed to limit its list to the current category.

The default layout calls `count()` on a category menu lookup that returns an ID or no value. In an isolated PHP 8.4 layout test, both cases produced an error for a nonempty list. Actual Joomla rendering is unverified; test the installed module before relying on it.

Separately, when no full category media is available and the configured default image file exists, an isolated helper test failed while generating the fallback thumbnail. Check categories with and without images on a test shop; real image processing remains unverified.

For a new module, the manifest provides these settings; saved values can differ:

| Setting | Purpose and default |
| --- | --- |
| Pre-Text / Number of Category | Optional text, empty by default; maximum query rows defaults to 5. |
| Thumb Image Width / Height / Width of display box | Manifest defaults are 100 pixels each. The helper also uses global category thumbnail settings; check actual image output. |
| Order / Show Category Name | Random order and Yes by default. Newest and Oldest are also offered. |
| Scroll Height / Width / Behavior / Direction | Defaults are 125 by 150 pixels, Scroll and Up. |
| Scroll Amount / Delay / Align | Delay defaults to 80 and alignment to Left. Scroll Amount declares `scroll` as its default although the offered values are 1–5; select one explicitly. |
| Space and line separators | Space defaults to `&nbsp;` repeated 5 times; line separator defaults to a break repeated twice. Verify the effect for the chosen direction. |
| Override CSS / text and background | Override defaults to No; text alignment, weight, size and color default to Left, Normal, 10 pixels and black; background defaults to transparent. |
| Module Class Suffix / Menu Class Suffix | Optional styling settings, empty by default. Verify their effect in the installed template. |

The default layout uses a moving marquee. Check links, images, keyboard access and motion behavior on the intended template; a category list is not an access-control boundary.

### Category product scroller

The inspected product query selects published products. When the request has a nonzero `id`, it filters products using that value as a category ID, without first checking the view. Assign the module to intended category pages and check results on other pages; when no ID is supplied, the query does not add a category filter.

| Setting | Purpose and manifest default |
| --- | --- |
| Pre-Text / Number of Products | Optional text defaults to empty; product limit defaults to 5. |
| Product order | Random by default; Newest, Oldest and Mostsold are also offered. The inspected Mostsold query sums order-item quantities without filtering order status. |
| Show Product Name / Price / Image / Readmore / Add To Cart | All default to Yes. Price and cart output are also affected by shop and product settings. |
| Product Thumb Image width / height | Default 100 by 100 pixels. |
| Scroller width / height | Manifest defaults are 800 by 200 pixels. Check actual layout behavior with the template. |
| Product Title Max Chars / End Suffix | Defaults are 10 and `...`. |
| Show Discount price layout | Defaults to Yes; compare displayed prices with product and cart totals. |
| Module Class Suffix / Menu Class Suffix | Empty by default; verify styling in the installed layout. |

The category selector in the inspected manifest is commented out; do not assume there is a configurable default category. Check product selection, prices, image sizes, purchase controls and links on an isolated Joomla shop. Actual form binding, scrolling, route and checkout behavior on Joomla 5 and 6 have not been verified.
