## Product filters for a category

The **redSHOP - Product filters module for category frontpage** lets shoppers narrow products in a category by the options enabled on that category. It is separate from the [Price Filtering module](chapters/module-redshop/price-filtering.md).

### Set up

1. Install the compatible `mod_redshop_category_product_filters` package if necessary. Create a site module in Joomla, choose its position and assign it to the relevant category menu items. The module's basic options include a **Module Class Suffix**, empty by default, for template styling.
2. In [Categories](chapters/categories/redshop-categories.md), open the intended category and enable **Product Filters**. Choose the available product attributes and enable category, manufacturer, price or supported product custom-field filters as needed. The master and individual switches default to No for a new category.
3. Save the category and publish the module on an isolated copy. The module checks for a redSHOP category view and category ID with filtering enabled; it returns without rendering when its product list is empty. A manufacturer filter is not shown when the request already selects a manufacturer.

The storefront offers matching filter groups and **Filter** and **Reset** controls. Options depend on the category's products, attributes, custom fields and configuration. Select representative products and verify that the displayed options and resulting category list agree, including the selected manufacturer and subcategories.

The current default layout can fail to render manufacturer, category, custom-field or attribute choices on an initial visit when no selection arrays are present. Do not rely on the module until this behavior has been corrected and tested. Check the first visit, filtering, reset, pagination, price range, multiple module instances, keyboard and mobile behavior on an isolated shop. The source includes legacy client-side dependencies; compatibility with the actual template and Joomla installation is not established by the settings alone.
