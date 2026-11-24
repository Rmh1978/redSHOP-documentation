## Product configuration

Open redSHOP Configuration and choose **Product**. Its subtabs contain Product, Accessory Product and Related Products settings. The effects of display options depend on the active templates and extensions; test changes on an isolated shop.

<h2 id="products">Products</h2>

<h4 id="general">General</h4>

The General group contains **Default Category** and **Show Discontinued Products**. Select the intended behavior and check product lists and product pages, including discontinued items.

<h4 id="unit">Unit settings</h4>

Choose the default volume and weight units and the number of unit decimals. Use consistent units when entering product dimensions, weights, shipping boxes and rate ranges; check the resulting shipping calculations rather than assuming old values are converted.

<h4 id="download">Download and upload</h4>

The Download group contains global download count and period fields and the product-download root. The current configuration screen suggests a `redshop-private/product-downloads` directory beside the Joomla root when no root is configured and warns about an existing root inside the site. Check access and migration before changing an existing path; changing a setting does not necessarily move existing files.

The separate Upload group configures the product-upload root, displays directory statistics and offers an age-based cleanup. Cleanup deletes files: verify retention requirements and back up the directory before using it. These paths are not interchangeable with the protected Product Files storage configured in component options.

For the current protected Product Files workflow, permission and storage requirements, see the Product Types section in [Products](chapters/product-management/products-redshop.md). Product media is not protected download storage. Test download authorization, direct access, limits and expiry for both protected and any legacy downloads.

<h4 id="wrapping">Wrapping management</h4>

Set wrapper thumbnail width and height and the wrapper auto-scroll option. Create wrapping choices separately and test selection on the active product template.

<h4 id="catalog">Catalog management</h4>

Set catalog reminder delays, discount duration and percentage, catalog days and the reminder-mail switch. Configure the relevant mail templates and scheduler and test the actual request, delivery, coupon and reminder timing using disposable addresses and a mail sink.

<h4 id="samples">Samples</h4>

The colour-sample group provides three reminder settings, coupon duration and discount percentage; sample days is conditional on the reminder-mail configuration. Configure the relevant templates and test the complete lifecycle. In the inspected sample coupon path, a configured day is calculated as `23 * 59 * 59` seconds, not 24 hours; verify actual expiry before use.

<h4 id="product-template">Product template</h4>

Select the default product template and product ordering, and configure the out-of-stock ordering and attribute-data options. Sorting choices come from the current selector and need not match older screenshots. Product-specific templates, category configuration and template tags can affect what customers see; verify the active setup.

<h4 id="image">Image settings</h4>

Configure lightbox options for product, detail and additional images; dimensions for the three main and three additional image sizes; watermark switches; hover and preview dimensions; attribute scroller dimensions and counts; and the pre-order image. The form also includes an asterisk-position setting.

Assign suitable product and attribute images, then check the active templates, responsive layout and generated images. The presence of a configuration field does not guarantee that a custom template uses it.

<h2 id="accessory-products">Accessory products</h2>

<h4 id="accessory-settings">Accessory product settings</h4>

Configure whether accessories appear as individual cart products, the accessory lightbox, default ordering, and character limits and suffixes for accessory descriptions and titles. Choose ordering from the current selector rather than a historical list. Assign accessories in the [product editor](chapters/product-management/products-redshop.md), and test cart quantities and prices as well as display.

<h4 id="accessory-image">Accessory product image settings</h4>

Set the width and height for each of the three accessory thumbnail sizes. Check which sizes the active template uses.

<h2 id="related-products">Related products</h2>

<h4 id="related-settings">Related product settings</h4>

Configure two-way relations, child-product dropdown output, whether a parent can be purchased when it has children, and the default related-product ordering. Description, short-description and title fields each have maximum-length and suffix settings.

Assign relations in the product editor and test both directions, child selection and cart behavior; the active template determines the presentation.

<h4 id="related-image">Related product image settings</h4>

Set the width and height of the three related-product thumbnail sizes and test them in the active template.
