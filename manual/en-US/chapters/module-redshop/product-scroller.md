## redSHOP Product Scroller

The optional `mod_redproductscroller` Marketplace module displays products in a moving list. [Install the module](chapters/module-redshop/install-module-plugin.md), create an instance, and assign its position and menu pages. Test the exact package on an isolated shop before using it.

| Option | Purpose and manifest default |
| --- | --- |
| Pre-Text | Text above the scroller; empty by default. In the inspected source it is output only when **Override CSS** is Yes. |
| Category | Select categories to include. Verify selected and child categories: the inspected query construction does not reliably combine multiple IDs. |
| Number of Products | Maximum requested; default 5. The inspected module passes SQL text rather than a number to the query limit; verify the actual result count on the installed database. |
| Product Thumb Width / Height; Width of display box | Defaults are 100, 100 and 100. |
| Order | Random by default; Newest and Oldest order by product publication date in the inspected query. |
| Show Product Name / Show Add-To-Cart Link / Show Prices | Each defaults to Yes. Global catalog, price and quotation settings also affect price and cart output. |
| Display Discount Price Layout | The declared default `1` does not match the offered Yes/No text values. The inspected price branch treats either nonempty text value as true; check both saved settings with discounted products. |
| Scroll Height / Width | Each defaults to `100%`; verify sizing in the actual template. |
| Scroll Behavior / Direction | Defaults are Scroll and Up; Slide, Alternate and other directions are available. |
| Scroll speed / delay | Defaults are 2 and 80. Check motion and readability for your visitors. |
| Scroll Align | Defaults to Left. |
| Scroll SpaceChar / Times | Defaults are a nonbreaking space and 5; the inspected rendering path does not use these values. |
| Scroll LineChar / Times | Defaults are a line break and 2, used between vertical items. |
| Override CSS and text/background settings | Override defaults to No. Text alignment, weight, size, text color and background default to Left, Normal, 10, black and transparent; actual template and browser styling may differ. |
| Module Class Suffix / Menu Class Suffix | Both default to empty; verify the installed module and template styling. |

The inspected module emits a diagnostic error message while selecting products, even on its ordinary query path. Check messages on a disposable shop. Its moving display uses legacy marquee markup; check keyboard access, motion preferences and browser behavior before enabling it.

For discounted products, compare prices with the product page and cart. An isolated test of the shared price helpers showed a synthetic discount applied again when the helpers ran in the order used here; actual scroller output and checkout totals remain unverified. If a product appears elsewhere on the page, test each add-to-cart control independently because shared form identifiers may collide.

Use disposable categories and products to test one and multiple selected categories, child categories, result count, sort order, prices, links and add-to-cart. The query and helpers have only been inspected or exercised with stubs; installed Joomla 5.4/6, database and browser behavior have not been verified.
