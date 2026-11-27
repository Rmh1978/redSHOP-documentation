## redSHOP Mega Menu

The optional `mod_redshop_megamenu` site module renders category navigation. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), choose its position and pages, and configure the menu, end level, category and ordering.

For a new module, the manifest provides these options; saved settings can differ:

| Setting | Purpose and default |
| --- | --- |
| Menu type | Select the Joomla menu used for top-level items. |
| End level | Limit menu depth; defaults to All. |
| Choose category | Select the redSHOP category whose subcategories are used. |
| Ordering | Name (default), Ordering or ID. The inspected sort helper has no Ordering comparison; check that mode on your site. |
| Destination | Ascending (default) or descending. The inspected helper does not apply its reversed result; a descending name sort returned ascending names in an isolated test. |
| Alternative Layout / Module Class Suffix | Select an installed layout and optional styling. |
| Caching / Cache Time | Defaults are No Caching and 900 seconds; global caching is also offered. |

Select the intended menu and category and verify the resulting hierarchy; the helper combines menu items and redSHOP categories. In the inspected helper, an empty category list causes it to return no menu items, even if the selected Joomla menu has entries. Verify the selected category and its available category list when the module is empty.

If multiple Mega Menu instances appear on the same page, test them together. In an isolated helper test, two instances using the same category but different Joomla menus both returned the first menu's items. The installed Joomla rendering has not been verified.

The manifest's module class suffix and the parameter read for the inner menu list use different names. Check both the module wrapper and the menu list in the rendered page before relying on a custom styling selector; Joomla module chrome and saved settings have not been tested.

The inspected helper checks one category key but reads another from menu data. With an `id`-only synthetic menu item it did not retain the category ID; verify real category submenus and links on your installation.

Test nested categories, routes, access levels, keyboard navigation and small-screen behavior with the active template. Menu visibility is not an authorization boundary: check direct category and product URLs independently. Leave module caching disabled until the results have been verified across visitor sessions.
