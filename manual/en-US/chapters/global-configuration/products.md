## Product configuration

Open redSHOP Configuration and choose **Product**. Its subtabs contain Product, Accessory Product and Related Products settings. The effects of display options depend on the active templates and extensions; test changes on an isolated shop.

<h2 id="products">Products</h2>

<h4 id="general">General</h4>

The General group contains **Default Category** and **Show Discontinued Products**. Select the intended behavior and check product lists and product pages, including discontinued items.

<h4 id="unit">Unit settings</h4>

Choose the default volume and weight units and the number of unit decimals. Use consistent units when entering product dimensions, weights, shipping boxes and rate ranges; check the resulting shipping calculations rather than assuming old values are converted.

The distributed configuration uses `cm`, `gram` and zero unit decimals. Existing saved settings may differ.

<h4 id="download">Download and upload</h4>

The Download group contains global download count and period fields and the product-download root. The distributed settings specify five downloads and 30 days; existing shop settings may differ. The current configuration screen suggests a `redshop-private/product-downloads` directory beside the Joomla root when no root is configured and warns about an existing root inside the site. Check access and migration before changing an existing path; changing a setting does not necessarily move existing files.

The separate Upload group configures the product-upload root, displays directory statistics and offers an age-based cleanup. Cleanup deletes files: verify retention requirements and back up the directory before using it. These paths are not interchangeable with the protected Product Files storage configured in component options.

For the current protected Product Files workflow, permission and storage requirements, see the Product Types section in [Products](chapters/product-management/products-redshop.md). Product media is not protected download storage. Test download authorization, direct access, limits and expiry for both protected and any legacy downloads.

<h4 id="wrapping">Wrapping management</h4>

Set wrapper thumbnail width and height and the wrapper auto-scroll option. Distributed values are 50 × 50 for the thumbnail and No for auto-scroll. Create wrapping choices separately and test selection on the active product template.

<h4 id="catalog">Catalog management</h4>

Set the first and second catalog reminder delays, discount duration in days, discount percentage and reminder-mail switch. The distributed values are 3 and 5 for the reminders, 23 days for duration and 10 for percentage. A catalog-days field is present in the template inside a `hidden` container; do not assume it is available in the interface. Configure the relevant mail templates and scheduler and test the actual request, delivery, coupon and reminder timing using disposable addresses and a mail sink.

<h4 id="samples">Samples</h4>

The colour-sample group provides three reminder settings, coupon duration in days and discount percentage. Distributed values are 1, 2 and 3 for the reminders, 4 days for duration and 5 for percentage; existing settings may differ. A sample-days field is present in the template inside a `hidden` container, so do not assume it is available in the interface.

The first reminder currently calculates its setting in minutes even though the
field describes days. In the inspected sample coupon path, a configured day is
also calculated as `23 * 59 * 59` seconds, not 24 hours. Test reminder timing
and coupon expiry with a mail sink before using this workflow.

<h4 id="product-template">Product template</h4>

Select the default product template and product ordering, and configure the out-of-stock ordering and attribute-data options. Sorting choices come from the current selector and need not match older screenshots. Product-specific templates, category configuration and template tags can affect what customers see; verify the active setup.

The distributed configuration references product template ID `9`, orders products by name ascending and enables display of out-of-stock attribute data. Verify that the template exists and check the saved options in the actual shop.

<h4 id="image">Image settings</h4>

Configure lightbox options for product, detail and additional images; dimensions for the three main and three additional image sizes; watermark switches; hover and preview dimensions; attribute scroller dimensions and counts; and the pre-order image. The form also includes an asterisk-position setting.

For a new configuration, the distributed settings enable the detail lightbox but
disable the product and additional-image lightboxes and all three product
watermarks. Main image sizes are 200 × 200, 0 × 0 and 0 × 0; additional image
sizes are 80 × 80, 0 × 0 and 0 × 0. Product and category preview dimensions are
both 100 × 100. Product and additional hover images are disabled, with
respective dimensions of 200 × 300 and 0 × 0. Attribute scroller thumbnails
are 50 × 50, with three attribute and three subattribute thumbnails; the
pre-order image is initially blank. Existing settings may differ.

Assign suitable product and attribute images, then check the active templates, responsive layout and generated images. The presence of a configuration field does not guarantee that a custom template uses it.

<h2 id="accessory-products">Accessory products</h2>

<h4 id="accessory-settings">Accessory product settings</h4>

Configure whether accessories appear as individual cart products, the accessory lightbox, default ordering, and character limits and suffixes for accessory descriptions and titles. In the distributed configuration, individual cart products and the lightbox are disabled; the default ordering is product ID ascending. The selector also offers accessory ID, accessory price and manual ordering in both directions. Assign accessories in the [product editor](chapters/product-management/products-redshop.md), and test cart quantities and prices as well as display.

<h4 id="accessory-image">Accessory product image settings</h4>

Set the width and height for each of the three accessory thumbnail sizes. Distributed dimensions are 32 × 32 for the first size and 0 × 0 for the second and third. Check which sizes the active template uses.

<h2 id="related-products">Related products</h2>

<h4 id="related-settings">Related product settings</h4>

Configure two-way relations, child-product dropdown output, whether a parent can be purchased when it has children, and the default related-product ordering. The child dropdown offers product name or product number; product name is the distributed choice. Two-way relations and parent purchase with children are disabled in the distributed configuration, and related products default to name ascending. Description, short-description and title fields each have maximum-length and suffix settings.

Assign relations in the product editor and test both directions, child selection and cart behavior; the active template determines the presentation.

<h4 id="related-image">Related product image settings</h4>

Set the width and height of the three related-product thumbnail sizes. Distributed dimensions are 150 × 100 for the first size and 0 × 0 for the second and third. Test them in the active template.
