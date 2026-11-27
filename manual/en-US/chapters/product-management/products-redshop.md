## Working with Products in redSHOP
redSHOP supports a product catalog including physical products, digital downloads and subscriptions. Available functionality depends on configuration and installed plugins.

Open the product list from redSHOP's Product Management navigation.

<hr>

### In this article

<ul>
<li><a href="#listingScreen">Overview of product listing screens</a>
    <ul>
    <li><a href="#productListingScreen">Products Listing screen</a>
    <li><a href="#actions">Actions</a>
    </ul>

<li><a href="#viewScreen">Product price View screen</a>
<li><a href="#detailsScreen">Overview of Product Details screen</a>
    <ul>
    <li><a href="#informationTab">Product Information tab</a>
        <ul>
        <li><a href="#productTypes">Product Types</a>
        </ul>
    <li><a href="#fieldTab">Custom Fields tab</a>
    <li><a href="#imagesTab">Other Images tab</a>
    <li><a href="#attributesTab">Product Attributes tab</a>
    <li><a href="#productTab">Accessory/Related Product tab </a>
    <li><a href="#seoTab">SEO tab</a>
    <li><a href="#stockroomTab">Stockroom tab</a>
    <li><a href="#discountCalculator">Discount Calculator tab</a>
    <li><a href="#settingsTab">Economic Settings tab</a>
    <li><a href="#paymentMethods">Payment Methods tab</a>
    </ul>

<li><a href="#massDiscount">Mass Discount Product</a>
    <ul>
    <li><a href="#addDiscount">Add Mass Discount details</a>
    </ul>
<li><a href="#priceDiscount">Product price discount</a>
    <ul>
    <li><a href="#priceDiscountListing">Product Price Discount Listing screen</a>
    <li><a href="#discountDetails">Add Product Price Discount details</a>
    </ul>
</ul>

<hr>

Sign in to the Joomla administrator, open redSHOP and select Product Management. Available actions depend on permissions and configuration.
<hr>

<!-- Overview of Product Listing screens -->
<h2 id="listingScreen">Overview of Product Listing screens</h2>

<h4 id="productListingScreen">Products Listing screen</h4>

The current list supports search by product name, number, name and number, category or attribute SKU. Open the filter controls to select the search field, category, manufacturer or sort option; the manufacturer filter includes an undefined-manufacturer choice. Use **Clear** to reset the search and filters. When searching by category, verify the displayed search-field selection after submission: the current template compares a different value when restoring it.

Select a sortable column heading to change the order. When a category is selected, the list also exposes category-specific ordering; drag handles are active when the ordering column is sorted ascending. Verify bulk actions and their effects on a disposable copy before changing many products.

<ul>
<li><b>Product Name - </b>the product name; open it to edit the product.

<li><b>Product Number - </b>the product's identifier, such as a model number or SKU.

<li><b>Price - </b>the price currently stored for this product, displayed with the currency symbol of the store currency set in the global configuration screen 

<li><b>Media - </b>open product media management. Product images and public media are separate from protected Product Files downloads.

<li><b>Wrapping Management - </b>the wrapping control and count of assigned options. Open it to manage the product's wrapping associations.

<li><b>Number of Views - </b>the number of times that this product has been viewed from the front-end 

<li><b>Category - </b>a list of the categories that the product is currently assigned to 

<li><b>Manufacturer - </b>the assigned manufacturer.

<li><b>Customer reviews - </b>the list includes a reviews control; verify its behavior and permissions on your installation.

<li><b>Published - </b>shows the publication state and provides an inline state control. Storefront visibility also depends on access and configuration.

<li><b>ID and custom columns - </b>the list includes a product ID and can include configured additional-field columns.
</ul>

<hr>

<h4 id="actions">Actions:</h4>

<ul>
<li><b>New - </b>open the editor for a new product.

<li><b>Edit - </b>open the selected product for editing.

<li><b>Copy - </b>copy selected products. The copy operation carries over product data and creates copies unpublished; review their names, product numbers, associations, prices and media before publishing.

<li><b>Delete - </b>remove selected products. Check dependencies and back up before deleting.

<li><b>Publish - </b>publish selected products.

<li><b>Unpublish - </b>unpublish selected products.

<li><b>Assign New Category - </b>select products, open the category assignment screen and choose one or more categories. Review the selection before applying it.

<li><b>Remove Category - </b>remove category assignments from selected products in a separate batch operation.
</ul>

The list also provides a template-assignment selector for selected products. Confirm the selected products and intended template before applying a bulk operation.

<hr>

<!-- Product Price View screen -->
<h2 id="viewScreen">Product Price View screen</h2>

Product Price Management provides a list for editing product prices and discount prices. The two column headings have separate save controls; check the resulting values after saving.

<ul>
<li><b>Product Name - </b>the product name.

<li><b>Product Number - </b>the product identifier.

<li><b>Price - </b>edit the displayed base prices and use the save control in the Price heading.

<li><b>Discount Price - </b>edit displayed discount prices and use the separate save control in the Discount Price heading. Client-side validation requires a nonnegative amount that is either zero or less than the product price; verify saved prices and decimal handling independently.

</ul>

<hr>

<h4>Filters</h4>

<ul>
<li><b>Search box and field - </b>choose product name, category or product number, enter a search term and submit.
</ul>

<hr>

<!-- Overview of Product Details screen -->
<h2 id="detailsScreen">Overview of Product Details screen</h2>

The editor includes Product Information, custom fields, images, attributes, accessories/related products, metadata, Discount Calculator and payment methods. The stockroom tab depends on the stockroom configuration; e-conomic settings depend on integration configuration. Plugins may add tabs. Reopen a saved product to confirm available controls.

The remaining screenshots are historical examples; the current administrator
interface and available controls may differ.

For a new product, provide a name, product number, category and product template. The editor checks product-number uniqueness and requires a discount price below the base price when both are entered; a nonzero maximum order quantity must not be less than the minimum. Discount end dates cannot precede start dates. The new-record defaults include base price and minimum quantity zero and **Published** Yes, so review publication before saving an unfinished product.

In the current English administrator language file, Product Number is labelled **SKU** and Product Template is labelled **Product Layout**. Labels may differ with the installed translation.

<h4 id="informationTab">Product Information tab</h4>

<ul>
<li><b>Product Name - </b>enter the name displayed for the product. The editor limits it to 250 characters.

<li><b>Product Number - </b>enter a unique identifier, such as a model number or SKU. The editor limits it to 250 characters.

<li><b>Product Category - </b>select one or more product categories.

<li><b>Product Template - </b>selects the product template. The editor marks product name, number, category and template as required; verify validation on the installed version.

<li><b>Product Type - </b>The current selector includes Product, File and Subscription. Installed product-type plugins can add choices:
    <ul>
    <li><b>Product - </b>the ordinary product type; configure shipping and availability for the intended product.
    <li><b>Plugin-defined types - </b>depend on the installed and enabled product-type plugin; verify its own configuration and compatibility.
    <li><b>File - </b>configures the product as a downloadable or digital good that can be set to be bought before the customer has access to it 
    <li><b>Subscription - </b>configures the product as a subscription service with a subscription period and price
    </ul>
</ul>

<hr>

<h4 id="productTypes">Product Types</h4>
The default Product type does not require the File or Subscription settings described below.

<b>File</b>

The type-specific tab is based on the product's current type. After changing the type, review the refreshed editor and reopen the saved product before configuring its type-specific settings.

For an existing product with **Downloadable Product** enabled, the editor treats its type as File. When converting such a product to another type, review that setting and confirm the type and type-specific controls after saving.

<ul>
<li><b>Downloadable Product - </b>the file-type editor exposes this setting. Verify the configured download workflow and access controls independently; this setting alone does not establish file security.

<li><b>Infinite limit for download - </b>choose Yes or No. For a new product it defaults to No. When Yes is selected, the form hides the download-count, period and final-day time controls; choose No to edit them.

<li><b>Maximal number of downloads - </b>set the download count limit when infinite downloads are disabled.

<li><b>Download Period in Days - </b>set the allowed download period when infinite downloads are disabled.

<li><b>Download the last day before - </b>set the time in hours and minutes for expiry on the last day of the download period.

<li><b>Upload CSV file - </b>uploads serial numbers for the legacy file workflow. The current model reads the first CSV column of each non-empty row; use disposable values to verify assignment and recovery before relying on it.
</ul>

Existing serial numbers are listed with a used indicator and an individual delete action. Deleting a serial is a separate action; check its use and back up the relevant data first.

For an existing product, authorized administrators can open <b>Product Files</b> from the product editor to manage supported software downloads. This is a separate workflow with private storage and purchase, subscription or license policies; it should not be assumed to replace every legacy download type. Do not treat the public product image/media gallery as protected download storage. Test file authorization, direct URL access, limits and expiry on an isolated installation before offering a download.

<b>Product Files workflow:</b>
<ol>
<li>Save the product first. An administrator needs redSHOP management access and either download-management or administrator permission to open this area.</li>
<li>Open <b>Product Files</b> and provide a title, version, file and access policy. Description, changelog, subscription plan and expected SHA-256 are available where applicable. A license policy requires licensing to be enabled; a purchase policy cannot specify a plan.</li>
<li>The upload validates file type, content, size and optional checksum. Supported extensions include ZIP, EXE, MSI, DMG, TAR, GZ, DEB, RPM and PKG. The component options contain the private storage path and maximum upload size. Storage must resolve outside the public webroot.</li>
<li><b>Uploads are published immediately.</b> Prepare and verify the file and policy before uploading. The file list provides publish/unpublish controls; upload a new version instead of replacing an existing binary.</li>
<li>Test with disposable customer accounts and paid/mock orders: purchase, subscription and license policies have different entitlement checks, so a published file alone does not grant everyone access.</li>
</ol>

In the Product Files screen, search by product name, SKU or ID; the list is limited to 100 results. Without a search, it shows software products and products with existing files. The version must start with a letter or digit and use at most 64 letters, digits, dots, underscores, plus or minus signs. Subscription plan choices come from the selected product; verify the intended policy and plan before uploading.

<b>Subscription</b>

<ul>
<li><b>Add - </b>add a subscription level.

<li><b>Subscription Period - </b>enter a duration and select days, months or years.

<li><b>Subscription Price - </b>enter the price for that level.

<li><b>Delete - </b>remove the subscription row.

<li><b>Subscription Renewal Mail: - </b>sets the number of days before the subscription period ends for the renewal reminder. The form displays one day if no saved setting is available; verify reminder delivery and configuration.
</ul>

Each subscription period must be a positive whole number. Prices must be nonnegative and are rounded to four decimal places by the inspected validator. Saving removes plans omitted from the submitted rows; take particular care when changing the product type, and review existing subscriptions and back up before changing established plans. The renewal reminder is validated as a nonnegative whole number; the editor's field is limited to two characters.

The subscription editor also exposes software-license settings: enable licensing, select a software type, set a maximum installation count, an entitlement key and grace period, and choose active-license download and manual-approval options. The form allows 1–100,000 installations and 0–3,650 grace days; it displays defaults of one installation and zero grace days when values are absent. Test issuance, approval, activation, expiry and downloads independently before using them commercially.

<ul>

<li><b>Parent product - </b>search for and select the parent when this product is a variation.

<li><b>Product Category - </b>select the categories to which the product belongs.

<li><b>Published - </b>sets whether the product is published. New products default to Yes; choose No while preparing an unfinished product. Storefront visibility also depends on access and configuration.

<li><b>Product on sale - </b>the current editor displays a sale-state hint when both discount dates exist; it does not expose a separate on-sale switch in Product Information. Discount operations can update the stored sale flag. Verify sale output and date boundaries.

<li><b>Special Product - </b>mark the product as special or featured. It defaults to No for a new product. Whether it appears in a featured display depends on the active module or template.

<li><b>Product Discontinued - </b>marks the product as discontinued or expired; it defaults to No for a new product. The inspected add-to-cart renderer substitutes the configured expiry text for discontinued products, and the bulk-add path checks this state. Verify storefront display, existing carts and checkout independently; do not treat the display setting alone as an access-control guarantee.

<li><b>Product not for sale - </b>defaults to No for a new product. Selecting Yes reveals a separate show-price setting in the editor. Verify price display and add-to-cart behavior in the active template and configuration rather than assuming the price is always hidden.

<li><b>Product Pre-Order - </b>choose Globally to follow the shop setting, or Yes or No for the product-specific setting. A new product defaults to Globally. Stockroom and preorder configuration also affect the workflow.

<li><b>Product availability date - </b>the date control appears when pre-orders are enabled globally. Test its effect and date boundaries.

<li><b>Minimum product price - </b>the additional-information section has a nonnegative minimum-price field, distinct from minimum quantity. Its tooltip describes a minimum before adding to cart; verify its calculation in the cart.

<li><b>Joomla tags - </b>assign Joomla tags independently of redSHOP product template tags.

<li><b>Software type - </b>the product editor provides a software-type selector; subscriptions expose their software/license controls in the type-specific section. Test its effect on licensing and downloads independently.

<li><b>Preview - </b>the editor offers a preview for an existing product. Check published state, access and the active template when verifying storefront output.

<li><b>Price - </b>enter the base price in the shop's main currency. Currency display and conversion depend on the shop configuration.

<li><b>Discount Price - </b>enter the promotional price in the main currency and check the applicable dates.

<li><b>Discount Start Date - </b>sets the start of the product's discount period. Verify blank dates and boundary behavior with a test product rather than assuming a discount is indefinite.

<li><b>Discount End Date - </b>sets the end of the product's discount period. Verify date, time zone and boundary behavior in the storefront and cart.

<li><b>VAT/Tax group - </b>choose the applicable tax group, or leave it unassigned. Verify destination, tax rates and checkout totals with the shop's tax configuration.

<li><b>Product Volume - </b>enter the product volume used by applicable shipping calculations. The editor displays the configured volume unit cubed.

<li><b>Product Length - </b>enter the product length in the unit shown by the editor.

<li><b>Width - </b>enter the product width.

<li><b>Height - </b>enter the product height.

<li><b>Diameter - </b>enter the diameter where applicable. The field tooltip describes its use in the discount calculator; verify the selected calculation method and units.

<li><b>Manufacturer - </b>select a manufacturer or leave the product unassigned.

<li><b>Supplier - </b>selects the product's supplier independently of its manufacturer. See [suppliers](chapters/product-management/supplier-product.md) for template display and publication caveats.

<li><b>Weight - </b>enter the product weight in the configured unit. Applicable shipping methods can use it when selecting a rate.

<li><b>Product Template - </b>selects the template used for the storefront product page. Configure product custom fields separately; add the appropriate field tags to the template for storefront output. The Fields tab also depends on an available product template and the applicable fields, not just tags in the template.

<li><b>Minimum quantity per order - </b>set the minimum quantity per order. The new-product value is zero; the editor accepts nonnegative values.

<li><b>Maximum quantity per order - </b>set the maximum quantity per order. The editor displays zero initially and uses it for no maximum in its minimum/maximum validation.

<li><b>e-conomic settings and default product quantities - </b>these controls are in the conditional Economic Settings tab described below, not the general information section.

<li><b>Short Description - </b>enter a concise product description.

<li><b>Full Description - </b>enter the detailed product description.
</ul>

<hr>

<h4 id="fieldTab">Custom Fields tab</h4>
Use the Fields tab for applicable product custom fields. Select an available product template, configure the field's section and publication, and include the appropriate tag in the active product template for storefront output. See [custom fields](chapters/customization/custom.md); test visibility and output for the field type and template in use.

If no product template is found, the inspected editor does not render this section. When a template exists but no field output is available, it displays an informational hint; installed integrations may also provide fields. Save and reopen the product after configuration changes before checking the tab and storefront.

<img src="./manual/en-US/chapters/product-management/img/img10.png" class="example" alt="Historical example of product custom fields"/><br><br>

Video for Custom Field tab in Product: <a href="https://redshop.fleeq.io/l/4fhndyn3fh-t41ts8la8g">Click here</a>

<hr>

<h4 id="imagesTab">Other Images tab</h4>

Product Information provides main and back-image controls. Save the product to use its additional-media dialog and gallery. The separate Product Images tab provides back-thumbnail, preview and preview-back-image controls. Test storefront output and image sizes with the active template and configuration. See [media management](chapters/media/working-medias.md) for associations and deletion precautions.

On the **Product Images** tab, choose files for **Product Back Thumb Image**, **Product Preview Image** and **Product Preview Back Image** as needed. Each control shows a preview when its saved image is found and offers a removal control for an existing image. Save the product and check the intended display with the active template.

The existing back image may not appear in its editor preview even when an image is recorded. Reopen the product and check the stored media and storefront separately before replacing it.

<hr>

<h4 id="attributesTab">Product Attributes tab</h4>

Select an attribute set and decide whether to copy it, or add product-specific attributes. Selecting a set and copying it are distinct operations. The set-selection request currently contains an extra `=` in its task parameter; preview or copying may fail. Inspect the saved product and test the behavior in isolation. See [Attribute sets](chapters/customization/attribute.md).

An attribute has a name, description, order, dropdown/radio display, required, multi-selection, hide-price and published controls. Add properties (options) with names, order, price/operator, virtual product number, extra field, tooltip, alert, image and default-selection settings. A property can have nested subproperties with their own name, number, order, price/operator, publication and default selection; the nested group has title, required, multiselect and display controls.

Price operators include `+`, `-`, `=`, `*` and `/`. Test each operator and resulting price with the actual template, tax and quantity settings; multiplication by 1.15 is a factor, not an instruction to enter a percentage. Existing options may offer image, stock and price-management controls. See [attribute option prices](chapters/product-management/price-management.md#attribute-option-prices) for their separate rules and limitations. Verify changes after saving and reopen before relying on them for orders.

Deleting an existing attribute, property or subproperty sends a separate deletion request; do not assume Cancel will undo it. In the current editor a subproperty may remain visible after a deletion request, so reopen the record and check the saved result before retrying.

<hr>

<h4 id="productTab">Accessory/Related Product tab </h4>

Assign accessory products and their price adjustments. Display and selection depend on the active product template; verify the saved associations and resulting cart prices.

<ul>
<li><b>Product Source - </b>search for and select a product to add as an accessory.

<li><b>Product Name - </b>the name of the product

<li><b>Normal Price - </b>the normal price currently assigned to this product

<li><b>Operator - </b>the editor accepts `+`, `-`, `=`, `*` and `/` for the accessory price adjustment, but the inspected accessory lookup calculates only `+`, `-` and `=`. Avoid relying on multiplication or division until corrected; check accessory prices and totals in the active template and cart.

<li><b>Amount added - </b>the value of the amount that should be added to or removed from the normal price 

<li><b>Order - </b>the order in which you would like the accessories displayed on the product page 

<li><b>Delete - </b>for an existing accessory, confirmation starts a separate deletion request and removes the row before its result is known. Cancel does not necessarily undo it. Reopen the product and verify the association, especially if the request fails.
</ul>

<hr>

<h4>Related Product</h4>

<ul>
<li><b>Related Product - </b>use the searchable multiple-selection control to select related products. Save and reopen the product to verify the associations.

<li><b>Add Child Product as Related Product - </b>the editor provides an action to fetch child products into the related-products selection. Names containing commas or colons can be displayed incorrectly in the fetched selection. Verify product identities and saved relations by reopening the product, and check storefront rendering on an isolated copy.
</ul>

<hr>

<h4>redPRODUCTFINDER Association</h4>
Product finder integration depends on the installed extension and compatibility; it is not included in the current Core product tab list. Consult the extension's own documentation and verify any integration on an isolated installation.

<hr>

<h4 id="seoTab">SEO tab</h4>

<ul>
<li><b>Append to Global SEO - </b>choose append, prepend or replace to control how product metadata combines with global settings. Verify the resulting page metadata in the storefront.

<li><b>SEO Page Title - </b>the title of the product page, as it will be displayed in search engine results and in the browser's title bar or tab

<li><b>SEO Page Heading - </b>the main heading for this product page

<li><b>SEF Url - </b>the search engine friendly URL that will be used instead of the standard Joomla! URL that is generated for this product page 

<li><b>Canonical URL - </b>the editor includes a canonical URL field and indicates when the canonical product plugin is not enabled. The category-in-SEF selector is present in the source but hidden; do not assume it is available in the current UI.

<li><b>SEO Keywords - </b>a space to insert the meta-keywords that are related to this product page 

<li><b>SEO Page Description - </b>the product page's meta description.

<li><b>Meta Language Setting - </b>choose from the language dropdown. Verify the rendered metadata for the active language rather than entering a comma-separated list.

<li><b>SEO Robot Info - </b>choose index/follow directives. The inspected template passes an unassigned local variable instead of the product detail to the selector; reopening and saving may select the default rather than the stored value. Test and inspect stored and rendered metadata on a disposable shop before changing production products.
</ul>

<hr>

<h4 id="stockroomTab">Stockroom tab</h4>

When stockroom functionality is enabled, this tab lists one row per stockroom:

- **Stockroom name:** identifies the location.
- **Stockroom quantity:** enter the product quantity for that location.
- **Minimum delivery time:** shows the stockroom's configured value in days or weeks; change the setting in stockroom management rather than this row.
- **Preorder stockroom quantity:** enter the preorder quantity for that location.
- **Already ordered preorder quantity:** shows the count recorded for the product and stockroom; it is not editable in this row.

Enter nonnegative quantities and save the product. Variant properties and subproperties have separate stockroom controls and their own save action.

The row's **Reset** action resets both preorder stock and already-ordered preorder counts for that product and stockroom. It navigates away from the editor, so save other changes first. Check the existing counts and affected orders before using it. See [Stockroom management](chapters/stockroom/stockroom-management.md).

<hr>

<h4 id="discountCalculator">Discount Calculator tab</h4>

<ul>
<li><b>Use Discount Calculator - </b>enable or disable the calculator; it is disabled by default for a new product.

<li><b>Discount Calculator Method - </b>Volume, Area, Area Quantity or Circumference.

<li><b>Calculation based on - </b>(Select: Range, Price per Piece)

<li><b>Unit - </b>choose a unit for each range. Area Quantity uses square metres; the other methods offer millimetres, centimetres or metres.

<li><b>Allow decimal piece - </b>the current price-per-piece calculation rounds fractional piece counts up when Yes is selected, while No leaves them fractional in an isolated source-level test. Verify both the piece count and resulting price on an isolated shop before relying on this setting.

<li><b>Ranges - </b>add or remove rows with a unit, minimum, maximum and price.

<li><b>Extra options - </b>add or remove named options with a plus, minus or percentage operator and price. An isolated price-per-piece calculation changed its reported unit price for a selected extra option but did not change its calculated total; independently test option charges in cart and checkout.
</ul>

Set optional minimum quantity, width, height and length with a title and description for each message. Dimension minimums use millimetres, centimetres or metres; quantity has no unit. Zero disables the corresponding minimum. The separate maximum print-width alert is in centimetres and is shown when both width and height exceed it; zero disables that alert. Message text may also be a `COM_` or `PLG_` language key.

Verify which dimensions apply to the selected method, as well as units, boundaries and resulting prices in product, cart and checkout before using the calculator for live sales.

In an isolated source-level test, fractional area and volume measurements were truncated before range selection; do not assume fractional boundaries choose the intended price range without testing them.

The inspected measurement helper can also return structured price-per-piece information that differs from its displayed value. Test cart behavior with disposable products; actual checkout effects are not established.

<hr>

<h4 id="settingsTab">Economic Settings tab</h4>

<img src="./manual/en-US/chapters/product-management/img/img26.png" class="example" alt="Historical example of product e-conomic settings"/>

<ul>
<li><b>e-conomic Account Group - </b>when you are using the e-conomic accounting integration and have set up a product group profile, you can use this option to assign this product to a specific group

<li><b>Default product quantities: - </b>enter comma-separated choices such as `1,5,10,20,50` for the `{addtocart_quantity_selectbox}` template tag. If the product value is empty, the inspected renderer uses the global default quantity choices. It removes duplicate values and sorts the choices; if the same template also contains the ordinary quantity or increase/decrease tag, that tag takes precedence in this renderer. The inspected renderer requests a differently named layout from the shipped file, and its replacement method leaves the ordinary tag unchanged in an isolated test. Check the active template and selector before relying on it.
</ul>

<h4>Actions:</h4>

<ul>
<li><b>Add Price - </b>for an existing product, opens its shopper-group and quantity price rules.

<li><b>Apply - </b>saves any changes made and refreshes the page

<li><b>Save - </b>saves any changes made and redirects to the listing screen

<li><b>Save &amp; New / Save as Copy - </b>the toolbar also offers creation of a new product or a copy; availability depends on whether the product already exists.

<li><b>Cancel - </b>returns to the listing screen without saving pending form edits. Separate actions already requested, such as deleting an existing attribute or accessory or resetting preorder stock, are not necessarily undone.
</ul>

<hr>

<h4 id="paymentMethods">Payment Methods tab</h4>

When individual payment methods are enabled for a product, review and select the intended methods before saving, including for a new product. Test both single-product and mixed-product carts using offline or mocked payments. In the current implementation, mixed-cart choices may not reflect every product's selection; verify the offered methods before relying on this restriction.

Video for Payment product in redSHOP: <a href="https://redshop.fleeq.io/l/9c7miev279-ue2zk0ria3">Click here</a>

<img src="./manual/en-US/chapters/product-management/img/img27.png" class="example" alt="Historical example of product payment method selection"/>

<ul>
<li><b>Use Individual Payment Method - </b>enable or disable the product-specific selection. The method list is shown when this option is enabled.
<li><b>Select Payment Method - </b>choose one or more available installed methods when product-specific selection is enabled. Reopen the product and check the saved selection; configure and enable the required payment plugins separately.
</ul>

<hr>

<!-- Mass Discount Product -->
<h2 id="massDiscount">Mass discounts</h2>

Mass discounts change selected products' discount fields. Saving or deleting a rule can update sale flags, prices and dates, so back up and test overlaps before changing live products.

<h4 id="addDiscount">Create a mass discount</h4>

Set a name, type, positive amount, required start and end dates, and targets. Enter 12 for 12%. The form marks products required, although the model also accepts categories or manufacturers; verify the actual form before relying on category-only or manufacturer-only targeting. Save, reopen and inspect every affected product. See [Mass discounts](chapters/discounts/mass-discount.md) for the full workflow and testing precautions.

<h2 id="priceDiscount">Product price discounts</h2>
<h4 id="priceDiscountListing">Discount list</h4>

Product price discounts are separate from mass discounts and shopper-group product prices. The list includes threshold, condition, amount, dates and publication, with search and filtering.

<h4 id="discountDetails">Create a product price discount</h4>

Select the required shopper group, threshold, condition, discount type and amount; categories and dates are optional. The form filters the threshold as an integer, and a product-price helper compares it to product price even though its label describes an order total. Test all applicable calculation paths and date boundaries. See [Product price discounts](chapters/discounts/product-price-discount.md).
