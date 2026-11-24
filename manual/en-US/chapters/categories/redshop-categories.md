## Working with redSHOP categories

Categories organize products into a hierarchy and provide category-specific templates, images and metadata. Sign in to the Joomla administrator, open redSHOP and select **Categories**. The actions available depend on your permissions.

### In this article

- [Category list](#listingScreen)
- [Category editor](#detailsScreen)
- [Create and use categories](#withRedshop)
- [Products and discounts](#productsDiscounts)
- [Access and SEO](#accessSeo)
- [Wrapping and shipping](#packagingRates)
- [Import and export](#categoryData)
- [Templates and tags](#templatesTags)
- [Display categories on the storefront](#categoryFrontend)

<h2 id="listingScreen">Category list</h2>

<h4 id="field1">Columns</h4>

The list displays categories as a nested tree, with their name, description, publication state and product count. Ordering is available for the hierarchy. Open a category name to edit it; a checked-out item may be locked by another administrator.

<h4 id="action1">Actions</h4>

Depending on permission, the toolbar offers New, Copy, Delete, Publish, Unpublish, Check-in and **Rebuild Category Tree**. Rebuilding changes the tree structure: back up first and use it only when needed. Copying or deleting categories can affect associations and storefront navigation; test the outcome on an isolated copy before making bulk changes. Check-in is intended to release abandoned editing locks, not interrupt another administrator's work.

<h2 id="detailsScreen">Category editor</h2>

The current editor has Category Information, Metadata, Fields, Accessory Product and Product Filters tabs; plugins can add tabs. Images appear in the information view, rather than a separate image tab.

<h4 id="informationTab">Category information</h4>

- **Name** and **category template** are required. Select the parent or the root for a top-level category.
- **Published** controls the category's publication state. Check both parent and child visibility in the actual storefront before relying on it.
- **Products per page** is required and accepts zero or more. Check menu and configuration overrides for your layout.
- Select additional templates if you want to offer alternative category layouts, and a comparison template when using product comparison.
- Enter short and full descriptions as appropriate. The editor also displays created/modified information.

<h4 id="imagesTab">Category images</h4>

The information view provides main and back-image controls. The storefront output depends on the active template. See [media management](chapters/media/working-medias.md) for associations and deletion precautions.

<h4 id="seoTab">Metadata</h4>

The editor provides page title, heading, SEF URL, canonical URL, keywords, description, language and robots settings, plus an append/prepend/replace choice for global SEO. Test generated metadata and URLs with the actual menu, language and SEO configuration; entering a value does not itself verify the resulting route or canonical URL.

<h4 id="fieldsTab">Custom fields</h4>

Create published category-section custom fields and include their `{rs_...}` tags in the selected category template. The editor looks for these tags in the template when building the field controls. See [custom fields](chapters/customization/custom.md); test template output and permissions before entering sensitive information.

<h4 id="accessoriesTab">Accessory products</h4>

<h4 id="field2">Accessory fields</h4>

Search for a product to associate it as a category accessory. The table shows its name, normal price, price operator and added value, ordering and delete action. Verify the resulting product-page selection and cart price, particularly when the same accessory is also configured on an individual product; precedence has not been runtime-verified.

<h4 id="action2">Saving</h4>

Use Apply to save and remain in the editor, Save to save and close, Save &amp; New to save and start another category, or Cancel/Close to leave without saving pending edits. Available actions depend on permissions.

### Product Filters

Enable the category filter and select product attributes or enable category, manufacturer, price and supported custom-field filters as needed. The editor states that the `mod_redshop_category_product_filters` module must be installed, enabled and assigned to the menu item for the category. Save and test the module on the intended storefront menu and layout.

<h2 id="withRedshop">Create and use categories</h2>

<h4 id="createItems">Create a category</h4>

1. Choose **New** in Categories, enter a name and select its parent, category template and products-per-page setting.
2. Set publication, descriptions and images. Add metadata and filters where needed.
3. Save, reopen the record and check the hierarchy and storefront using a test category.

<h2 id="productsDiscounts">Products and discounts</h2>

<h4 id="createProductCategory">Assign products</h4>

Open a product in Product Management and select one or more categories in Product Information. Save and confirm the associations and storefront. Bulk category assignment and removal are available from the product list. See [products](chapters/product-management/products-redshop.md).

<h4 id="massDiscount">Mass discount</h4>

Mass discounts can select categories, products and manufacturers. Start and end dates are required; a percentage amount of `12` means 12%. Saving or deleting a mass discount can change product discount fields. Back up and test overlapping rules and prices in an isolated shop first.

<h4 id="productPriceDiscount">Product price discount</h4>

Product price discounts include category and shopper-group selections, a condition and fixed or percentage amount. Verify matching and nonmatching shopper groups, date boundaries and discount precedence with independently calculated test carts.

<h2 id="accessSeo">Access and SEO</h2>

Use Joomla and redSHOP permissions to restrict administrative access. Shopper-group visibility and category availability are separate from administrative authorization; verify both direct URLs and navigation with representative accounts. Configure category metadata as described above, then inspect the rendered page, canonical URL and multilingual routes.

<h2 id="packagingRates">Wrapping and shipping</h2>

<h4 id="shippingWrapping">Wrapping</h4>

Wrapping configuration may associate options with categories or all products. Verify availability, price and tax with a test cart, including products from multiple categories.

<h4 id="shippingRate">Shipping rates</h4>

Configure rates through the installed shipping method and its supported options. Category restrictions and rate selection depend on that method; test matching and nonmatching categories, mixed carts, destination and tax without using a live carrier transaction.

<h2 id="categoryData">Importing and exporting category data</h2>

Import and export are plugin-driven. Enabled handlers determine available types and formats; do not assume an old migration tool or CSV/XML option is installed. Back up first and use disposable records to verify parent mapping and update behavior.

<h4 id="export1">Export</h4>

Open [Data Export](chapters/import-export/data-export.md), select the available category handler and inspect the resulting file before reuse. Treat exports as potentially sensitive.

<h4 id="import1">Import</h4>

Follow [Data Import](chapters/import-export/data-import.md), use a file compatible with the installed category importer and test parent references, updates and error recovery on an isolated copy.

<h2 id="templatesTags">Templates and tags</h2>

The category editor selects the primary category template, optional alternative templates and a comparison template. `{template_selector_category}` can be used in a category template to offer alternative layouts; check the selected templates in the storefront. Category custom fields use their own `{rs_...}` tags. Back up template content and see [template management](chapters/customization/template.md) before editing or resetting it.

<h2 id="categoryFrontend">Display categories on the storefront</h2>

Create a Joomla menu item with a redSHOP category layout, then verify access, pagination and display with the active templates. The available English menu labels in the current source are **Category Detailed**, **Frontpage category** and **Subcategories**.

<h4 id="categoryDetailed">Category Detailed</h4>

Choose **Category Detailed** and select a category. The menu settings also include manufacturer, product ordering and maximum products. Test the final page and its menu-specific settings.

<h4 id="frontpageCategory">Frontpage category</h4>

Choose **Frontpage category** for the category overview; the layout also offers a manufacturer selection. The **Subcategories** layout selects a category and includes category/product limits and product ordering. Verify the intended menu item and category visibility on the storefront.
