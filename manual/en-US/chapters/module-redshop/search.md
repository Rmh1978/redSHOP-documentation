## redSHOP Search module

The optional site module `mod_redshop_search` provides product search controls. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign a position and menu pages, and publish it on a test shop.

### Module options

These are manifest defaults for a new configuration; saved settings can differ.

| Option | Use |
|---|---|
| **Template**, **Products per page**, **ItemID** | Choose the search template and result-page size. An explicit ItemID overrides the router-selected menu item in the inspected module. The manifest default template ID is `0`; the per-page and ItemID fields start empty. Verify the available template and menu selections in your shop. |
| **AJAX search**, **Number of search results** | AJAX defaults to No and the result-count field to 10. The inspected default module lacks suggestion initialization and refers to a missing selector-change function; suggestions may not work unless the installation supplies a correction. Cached suggestions can also fail when a customer refines a substring match without a product number. Test incremental typing and submitted results before enabling it. |
| **Default search type** | Choose the initial field combination, including product name, number, description or virtual product number. The manifest default is empty; check the saved selection. |
| **Search by category name / product field data** | Category-name search defaults to No; product-field-data search defaults to Yes. These settings are separate from showing a custom-field control. |
| **Show search type, keyword, category and manufacturer** | Control the corresponding form elements; each defaults to Yes. Product-search and keyword titles also default to Yes. |
| **Standard search text** | Optional initial keyword; the manifest default is empty. |
| **Show custom field / product fields** | The control defaults to hidden. In the current default layout, configured custom-field selectors are not rendered; check whether your installed layout has been corrected before relying on them. This is separate from keyword search in product-field data. |
| **Exclude categories** | Select categories to exclude and verify the result set; do not treat this as access control. The inspected search predicates filter category associations, so a product assigned to both excluded and other categories may still appear. The intended policy and actual Joomla results need verification. |
| **Module class suffix / alternative layout** | Adjust presentation for the active Joomla template and check responsive output. The suffix starts empty. |

Test ordinary and AJAX search, category/manufacturer filters, custom fields, excluded and unpublished products, access restrictions, pagination and routes using representative disposable products. An exclusion or hidden control is not a substitute for access control. Actual output and available controls depend on the selected template and module options.
