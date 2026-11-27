## redSHOP Category module

The optional `mod_redshop_categories` site module offers category navigation in several display styles. It is separate from the [Shopper Group Category menu](chapters/module-redshop/shoppergroup-category.md). [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and use disposable categories to evaluate the selected style before publishing.

The inspected source has known problems in both the default link list and tree styles. Category links may be missing. Tree styles also depend on a directory variable that the module does not define; in an isolated test without that variable dTree failed to load. Actual Joomla rendering is unverified. Select a sorting option explicitly and verify the full menu on an isolated shop; do not assume that changing the sort choice resolves the other problems.

For a new module, the manifest declares these settings; existing saved values may differ:

| Setting | Purpose and configuration |
| --- | --- |
| Menu Class Suffix / Module Class Suffix | Optional styling suffixes; both default to empty. Verify their effect with the chosen style and template. |
| Pre-text / Post-text | Optional text around the listing; both default to empty. |
| Show the number of Products in Categories? | Intended to display product counts; defaults to Yes. Check counts against the actual catalog. |
| Filter By ShopperGroup | Intended to filter categories by shopper group; defaults to No. Menu visibility is not an access control. |
| Show category based on current category | Intended to base the selection on the current category; defaults to No. |
| Parent Category / Excluded Categories | Choose a parent and optionally select categories to exclude. Verify the resulting hierarchy and exclusions for the chosen display style. |
| Category display type | Link List is the default; TigraTree, JSCook, TransMenu and dTree are also offered. Their assets and behavior depend on the installed package and site template. |
| Category sorting type | Offers name ascending or descending, newest, and default order. The declared default is not an offered choice, so select one explicitly and verify it. |
| JSCook Type / Style / Orientation / Tree Style | Settings for the JSCook style; manifest defaults are Menu, `ThemeOffice`, Horizontal and `ThemeXP` respectively. |
| Label of the dTree Root | Root label for dTree; defaults to `Shop`. |

Use the [category guide](chapters/categories/redshop-categories.md) to create and publish a small parent/child hierarchy. Check the selected style's links, sort order, counts, exclusions, keyboard use and mobile presentation. Test separate shopper groups and direct category and product URLs independently; a hidden menu entry does not prevent direct access. Actual Joomla 5/6 storefront behavior remains unverified.
