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

The current list supports search by product name, number, name and number, category or attribute SKU, as well as category, manufacturer and sort filters. When searching by category, verify the displayed search-field selection after submission: the current template compares a different value when restoring it. Verify bulk actions and their effects on a disposable copy before changing many products.

<ul>
<li><b>Product Name - </b>the name of the product, as it will appear on the front-end

<li><b>Product Number - </b>a space to put a unique identifier for this product, such as model number or an SKU 

<li><b>Price - </b>the price currently stored for this product, displayed with the currency symbol of the store currency set in the global configuration screen 

<li><b>Media - </b>open product media management. Product images and public media are separate from protected Product Files downloads.

<li><b>Wrapping Management - </b>the product wrapping listing icon with the number of wrapping options currently assigned to the product; click on it to open up a lightbox where you can add, edit and remove wrapping options on the fly 

<li><b>Number of Views - </b>the number of times that this product has been viewed from the front-end 

<li><b>Category - </b>a list of the categories that the product is currently assigned to 

<li><b>Manufacturer - </b>the name of the manufacturer that the product is currently assigned to 

<li><b>Customer reviews - </b>the list includes a reviews control; verify its behavior and permissions on your installation.

<li><b>Published - </b>sets whether the product is displayed on the front-end; clicking on the green tick or the red cross will switch between states immediately

<li><b>ID and custom columns - </b>the list includes a product ID and can include configured additional-field columns.
</ul>

<hr>

<h4 id="actions">Actions:</h4>

<ul>
<li><b>New - </b>appears when adding a new product record, click on this to add the new product details to the product catalog 

<li><b>Edit - </b>edit item when want change product items 

<li><b>Copy - </b>copy 1 or more items has selected. Some information of product items has copy will same with has selected before and name items will increase follow times copy 

<li><b>Delete - </b>delete 1 or more items has selected. Items has deleted will remove list items product 

<li><b>Publish - </b>it change status from unpublish to publish for items product is working

<li><b>Unpublish - </b>it change status from publish to unpublish for items product not working

<li><b>Assign New Category - </b>lets you easily assign multiple products to one or more categories in batch; click on the check boxes next to the names of the products you want to assign and then click on the assign new category button. The selected products will appear on the following screen where you can select the category (or multiple categories while holding down the control key on the keyboard) and click on the "assign new category" button to update the assignment, or click back if you have changed your mind 

<li><b>Remove Category - </b>similar in function and method to the assigned new category button, this feature lets you remove category assignments in batch. 
</ul>

The list also provides a template-assignment selector for selected products. Confirm the selected products and intended template before applying a bulk operation.

<hr>

<!-- Product Price View screen -->
<h2 id="viewScreen">Product Price View screen</h2>

Product Price Management provides a list for editing product prices and discount prices. The two column headings have separate save controls; check the resulting values after saving.

<ul>
<li><b>Product Name - </b>the name of the product 

<li><b>Product Number - </b>the model number, string or code that identifies this product 

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

<h4 id="informationTab">Product Information tab</h4>

<ul>
<li><b>Product Name - </b>the name of the product, as it will appear on the front-end 

<li><b>Product Number - </b>a space to put a unique identifier for this product, such as model number or an SKU 

<li><b>Product Category - </b>the category of product, in product can have more 1 items category

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
All products in redSHOP are assigned as the "product" product type by default, and as such do not require any additional information

<b>File</b>
<ul>
<li><b>Downloadable Product - </b>the file-type editor exposes this setting. Verify the configured download workflow and access controls independently; this setting alone does not establish file security.

<li><b>Infinite limit for download - </b>sets whether the customer will be able to download this file an unlimited number of times, and if they're not, the setting below sets the maximum number of times that they will be able to download the file. (Available options: Yes, No) 

<li><b>Maximal number of downloads - </b>the maximum number of times that a customer will be able to download the file (dependent obviously on the setting above) 

<li><b>Download Period in Days - </b>the number of days that the customer has to be able to download the file before the link to it expires 

<li><b>Download the last day before - </b>the time (hours: minutes) that the download link will expire on the last day specified by the download period. 

<li><b>Upload CSV file - </b>uploads serial numbers for the legacy file workflow. The current model reads the first CSV column of each non-empty row; use disposable values to verify assignment and recovery before relying on it.
</ul>

For an existing product, authorized administrators can open <b>Product Files</b> from the product editor to manage supported software downloads. This is a separate workflow with private storage and purchase, subscription or license policies; it should not be assumed to replace every legacy download type. Do not treat the public product image/media gallery as protected download storage. Test file authorization, direct URL access, limits and expiry on an isolated installation before offering a download.

<b>Product Files workflow:</b>
<ol>
<li>Save the product first. An administrator needs redSHOP management access and either download-management or administrator permission to open this area.</li>
<li>Open <b>Product Files</b> and provide a title, version, file and access policy. Description, changelog, subscription plan and expected SHA-256 are available where applicable. A license policy requires licensing to be enabled; a purchase policy cannot specify a plan.</li>
<li>The upload validates file type, content, size and optional checksum. Supported extensions include ZIP, EXE, MSI, DMG, TAR, GZ, DEB, RPM and PKG. The component options contain the private storage path and maximum upload size. Storage must resolve outside the public webroot.</li>
<li><b>Uploads are published immediately.</b> Prepare and verify the file and policy before uploading. The file list provides publish/unpublish controls; upload a new version instead of replacing an existing binary.</li>
<li>Test with disposable customer accounts and paid/mock orders: purchase, subscription and license policies have different entitlement checks, so a published file alone does not grant everyone access.</li>
</ol>

<b>Subscription</b>

<ul>
<li><b>Add - </b>click this to add a new subscription level 

<li><b>Subscription Period - </b>set the number of days, months or years that the subscription will last (Days, Months, Years) 

<li><b>Subscription Price - </b>sets the prices will be charged for the subscription 

<li><b>Delete - </b>removes the subscription level

<li><b>Subscription Renewal Mail: - </b>sets the number of days before the subscription period ends that the customer should be sent subscription renewal reminder mail
</ul>

The subscription editor also exposes software-license settings: enable licensing, select a software type, set a maximum installation count, an entitlement key and grace period, and choose active-license download and manual-approval options. Test issuance, approval, activation, expiry and downloads independently before using them commercially.

<ul>

<li><b>Parent product - </b>a space where you can indicate the main product that this product is a variation of; type in the first few letters of the product name and choose the relevant product from the drop-down panel that will appear 

<li><b>Product Category - </b>displays and sets the categories that this product is currently assigned to; click the category name to group the product into that category, or hold down the control key on the keyboard and click on multiple names to group it into multiple categories 

<li><b>Published - </b>sets whether the product will be displayed on the front-end (Available options: Yes, No) 

<li><b>Product on sale - </b>the current editor displays a sale-state hint when both discount dates exist; it does not expose a separate on-sale switch in Product Information. Discount operations can update the stored sale flag. Verify sale output and date boundaries.

<li><b>Special Product - </b>sets whether this product should get special attention, or mark it as the more commonly known "featured product"; products that have been marked as special will appear where ever featured products are displayed, such as in several redSHOP display modules (Available options: Yes, No) 

<li><b>Product Discontinued - </b>sets whether the product has been marked as discontinued or the purchase time has expired; discontinued products can still be displayed on the front-end, but customers will not be able to purchase them or add them to the cart (Available options: Yes, No) 

<li><b>Product not for sale - </b>enables a separate show-price setting in the editor. Verify price display and add-to-cart behavior in the active template and configuration rather than assuming the price is always hidden.

<li><b>Product Pre-Order - </b>sets whether the product can be pre-ordered even though it is currently out of stock; by default this is set to "globally", which checks whether the product pre-order feature has been enabled in the global configuration screen and if it is then enabled this feature for this product, but you can set the pre-order facility for this product individually by selecting "yes" or disable the pre-order facility for this product by selecting "no", the individual settings overriding the global ones. (Select: Globally, Yes, No) 

<li><b>Product availability date - </b>the date control appears when pre-orders are enabled globally. Test its effect and date boundaries.

<li><b>Minimum product price - </b>the additional-information section has a nonnegative minimum-price field, distinct from minimum quantity. Its tooltip describes a minimum before adding to cart; verify its calculation in the cart.

<li><b>Joomla tags - </b>assign Joomla tags independently of redSHOP product template tags.

<li><b>Software type - </b>the product editor provides a software-type selector; subscriptions expose their software/license controls in the type-specific section. Test its effect on licensing and downloads independently.

<li><b>Preview - </b>the editor offers a preview for an existing product. Check published state, access and the active template when verifying storefront output.

<li><b>Price - </b>the price currently assigned to this product, relative to the main currency that has been selected in the global configuration screen for the online store (note: this price can be displayed in a different currency using redSHOP's currency conversion module) 

<li><b>Discount Price - </b>the promotional discount price currently assigned to this product, relative to the main currency that has been selected in the global configuration screen (note: this price can be displayed in a different currency using redSHOP's currency conversion module) 

<li><b>Discount Start Date - </b>sets the start of the product's discount period. Verify blank dates and boundary behavior with a test product rather than assuming a discount is indefinite.

<li><b>Discount End Date - </b>sets the end of the product's discount period. Verify date, time zone and boundary behavior in the storefront and cart.

<li><b>VAT/Tax group - </b>sets the VAT/tax group profile which will be used when calculating the taxes for this product based on the tax rate set for the country tax will be collected in; set this to "select" to leave the product without a tax group assignment, otherwise select from the available profiles in the drop-down menu. More information is available in the localization section 

<li><b>Product Volume - </b>a space to enter the total volume for the product, useful when calculating shipping and determining the appropriate shipment container if any shipping boxes have been created 

<li><b>Product Length - </b>a space to enter the length of the product 

<li><b>Width - </b>a space to enter the width of the product 

<li><b>Height - </b>a space to enter the height of the product 

<li><b>Diameter - </b>for products that have a round dimension to them, such as plates or tubes, you can enter the diameter here 

<li><b>Manufacturer - </b>sets the manufacturer that this product has been assigned to, useful for branding and for displaying products groups together by manufacturer; set it to "select" to leave the product unassigned, or select a manufacturer from the drop-down menu 

<li><b>Supplier - </b>selects the product's supplier independently of its manufacturer. See [suppliers](chapters/product-management/supplier-product.md) for template display and publication caveats.

<li><b>Weight - </b>a space to enter the total weight of the product, relative to the units of weight and displayed according to the number of decimal places set in the global configuration screen; the product weight can be factored into the cost of shipping

<li><b>Product Template - </b>sets the product template that will be used when displaying the product page to the customers on the front-end, and based on the template tags that appear in the selected template what details will appear on the page. To add custom fields to a product, simply add their respective custom field template tags into the selected template; redSHOP will detect those fields in the selected template and displayed them in the custom fields tab for you to configure accordingly 

<li><b>Minimum quantity per order - </b>sets the minimum quantity that a customer can order for this product 

<li><b>Maximum quantity per order - </b>sets the maximum quantity that a customer can order for this product 

<li><b>e-conomic settings and default product quantities - </b>these controls are in the conditional Economic Settings tab described below, not the general information section.

<li><b>Short Description - </b>a space to store a brief description of the product; you can insert text, links, HTML and calls for plug-ins or modules 

<li><b>Full Description - </b>a space to store a more elaborate description of product; you can insert text, links, HTML and calls for plug-ins or modules
</ul>

<hr>

<h4 id="fieldTab">Custom Fields tab</h4>
Use the Fields tab for applicable product custom fields. Configure the field's section and publication, and include the appropriate tag in the active product template for storefront output. See [custom fields](chapters/customization/custom.md); test visibility and output for the field type and template in use.

<img src="./manual/en-US/chapters/product-management/img/img10.png" class="example"/><br><br>

Video for Custom Field tab in Product: <a href="https://redshop.fleeq.io/l/4fhndyn3fh-t41ts8la8g">Click here</a>

<hr>

<h4 id="imagesTab">Other Images tab</h4>

Product Information provides main and back-image controls. Save the product to use its additional-media dialog and gallery. The separate Product Images tab provides back-thumbnail, preview and preview-back-image controls. Test storefront output and image sizes with the active template and configuration. See [media management](chapters/media/working-medias.md) for associations and deletion precautions.

<hr>

<h4 id="attributesTab">Product Attributes tab</h4>

Select an attribute set and decide whether to copy it, or add product-specific attributes. Selecting a set and copying it are distinct operations. The set-selection request currently contains an extra `=` in its task parameter; preview or copying may fail. Inspect the saved product and test the behavior in isolation. See [Attribute sets](chapters/customization/attribute.md).

An attribute has a name, description, order, dropdown/radio display, required, multi-selection, hide-price and published controls. Add properties (options) with names, order, price/operator, virtual product number, extra field, tooltip, alert, image and default-selection settings. A property can have nested subproperties with their own name, number, order, price/operator, publication and default selection; the nested group has title, required, multiselect and display controls.

Price operators include `+`, `-`, `=`, `*` and `/`. Test each operator and resulting price with the actual template, tax and quantity settings; multiplication by 1.15 is a factor, not an instruction to enter a percentage. Existing options may offer image, stock and price-management controls. Verify changes after saving and reopen before relying on them for orders.

<hr>

<h4 id="productTab">Accessory/Related Product tab </h4>

Assign accessory products and their price adjustments. Display and selection depend on the active product template; verify the saved associations and resulting cart prices.

<ul>
<li><b>Product Source - </b>search for and select a product to add as an accessory.

<li><b>Product Name - </b>the name of the product

<li><b>Normal Price - </b>the normal price currently assigned to this product

<li><b>sign (+/-) - </b>sets whether an amount should be added or removed from the normal price to result in the promotional price 

<li><b>Amount added - </b>the value of the amount that should be added to or removed from the normal price 

<li><b>Order - </b>the order in which you would like the accessories displayed on the product page 

<li><b>Delete - </b>removes the accessory product assignment
</ul>

<hr>

<h4>Related Product</h4>

<ul>
<li><b>Related Product - </b>use the searchable multiple-selection control to select related products. Save and reopen the product to verify the associations.

<li><b>Add Child Product as Related Product - </b>the editor provides an action to fetch child products into the related-products selection. Verify saved relations and storefront rendering on an isolated copy.
</ul>

<hr>

<h4>redPRODUCTFINDER Association</h4>
Product finder integration depends on the installed extension and compatibility; it is not included in the current Core product tab list. Consult the extension's own documentation and verify any integration on an isolated installation.

<hr>

<h4 id="seoTab">SEO tab</h4>

<img src="./manual/en-US/chapters/product-management/img/img24.png" class="example"/>

<ul>
<li><b>Append to Global SEO - </b>select how the product metadata combines with global settings. Verify the resulting page metadata in the storefront.

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

<h4 id="discountCalculator">Discount Calculator tab</h4>

<img src="./manual/en-US/chapters/product-management/img/img25.png" class="example"/>

<ul>
<li><b>Use Discount Calculator - </b>(Available options: Yes, No)

<li><b>Discount Calculator Method - </b>Volume, Area, Area Quantity or Circumference.

<li><b>Calculation based on - </b>(Select: Range, Price per Piece)

<li><b>Unit - </b>Millimeter, centimeter, meter or square meter; the editor limits available units according to the method.

<li><b>Allow decimal piece - </b>controls whether decimal piece quantities are allowed.

<li><b>Ranges - </b>add or remove rows with a unit, minimum, maximum and price.

<li><b>Extra options - </b>add or remove named options with a plus, minus or percentage operator and price.
</ul>

The current editor also exposes minimum dimension settings and a maximum print-width setting. Verify units, boundaries and resulting prices in product, cart and checkout before using the calculator for live sales.

<hr>

<h4 id="settingsTab">Economic Settings tab</h4>

<img src="./manual/en-US/chapters/product-management/img/img26.png" class="example"/>

<ul>
<li><b>e-conomic Account Group - </b>when you are using the e-conomic accounting integration and have set up a product group profile, you can use this option to assign this product to a specific group

<li><b>Default product quantities: - </b>while the customer can decide on a specific quantity of product to the cart, you can use this field to present quantity steps to make it easier for your customers to select specific quantities; simply enter the quantity values separated by commas, such as "1,5,10,20,50", make sure the {addtocart_quantity_selectbox} tag has been used in the template for your add to cart button, and your customers can pick these quantities from a drop-down menu
</ul>

<h4>Actions:</h4>

<ul>
<li><b>Add Price - </b>for an existing product, opens its shopper-group and quantity price rules.

<li><b>Apply - </b>saves any changes made and refreshes the page

<li><b>Save - </b>saves any changes made and redirects to the listing screen

<li><b>Save &amp; New / Save as Copy - </b>the toolbar also offers creation of a new product or a copy; availability depends on whether the product already exists.

<li><b>Cancel - </b>returns to the listing screen without saving any changes
</ul>

<hr>

<h4 id="paymentMethods">Payment Methods tab</h4>

When individual payment methods are enabled for a product, select the intended methods and test both single-product and mixed-product carts using offline or mocked payments.

Video for Payment product in redSHOP: <a href="https://redshop.fleeq.io/l/9c7miev279-ue2zk0ria3">Click here</a>

<img src="./manual/en-US/chapters/product-management/img/img27.png" class="example"/>

<ul>
<li><b>Use Individual Payment Method - </b>enable or disable the product-specific selection.
<li><b>Select Payment Method - </b>choose the methods when product-specific selection is enabled.
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
