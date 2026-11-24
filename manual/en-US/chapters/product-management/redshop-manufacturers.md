## Working with redSHOP manufacturers

Manufacturers represent the companies or people associated with products. Open **Manufacturers** in redSHOP administration to manage records and assign them to products.

<h2 id="listing-screen">Manufacturer list</h2>

The list includes name, image, description, email and publication state, with ordering and duplicate support. The manufacturer description is not its website URL.

<h4 id="actions">Actions</h4>

Use the available actions to create, edit, copy, publish, unpublish or delete records. Check-in releases abandoned editing locks. Copying can copy associated media; back up and verify associations before bulk operations.

<h4 id="details-tab">Details</h4>

Name and manufacturer template are required. The form also includes image and alternative text, email, website URL, products per page, publication state and description. Email and URL have form validation. A category-exclusion control depends on the corresponding enabled integration. Manufacturer-section custom fields are available in the Fields tab.

<h4 id="seo-tab">Metadata</h4>

Set page title, heading, SEF URL, keywords, description, language and robots settings as needed. Check rendered metadata and routes on the actual storefront; template and global settings can affect the result.

<h4 id="actions-new">Saving</h4>

Save and reopen a manufacturer to verify its settings. Cancel or close discards pending changes; available toolbar actions depend on permissions.

<h2 id="manufacturer-redshop">Using manufacturers</h2>
<h4 id="create-manufacturer">Create a manufacturer</h4>

Select **New**, enter the name and select a manufacturer template. Add the desired image, contact details, description and metadata, then save. Check the image association and storefront with a disposable record.

<h4 id="assigning-product">Assign products</h4>

Open a product in Product Management, select its manufacturer in Product Information and save. Check the saved product and storefront. See [products](chapters/product-management/products-redshop.md).

<h4 id="mass-discount">Mass discount</h4>

Mass discounts can select manufacturers. Start and end dates are required; `12` as a percentage amount means 12%. Saving or deleting a mass discount can change product discount fields, so back up and test overlapping rules and resulting cart totals on an isolated copy.

<h4 id="access-seo">Access and SEO</h4>

Restrict administrative access through the applicable Joomla and redSHOP permissions. Verify a restricted account cannot edit records. Review the rendered page title, metadata, canonical behavior and multilingual routes with your site's actual menu and SEO configuration.

<h4 id="templates-tags">Templates, custom fields and media</h4>

The form offers manufacturer detail and manufacturer products templates. Manufacturer-section custom fields can be configured separately. Back up templates before changing them and test their tags and output; see [templates](chapters/customization/template.md) and [custom fields](chapters/customization/custom.md).

Manufacturer images are managed via their media association. Review [media management](chapters/media/working-medias.md) before deletion: the current manufacturer cleanup path needs separate review, so do not assume removing media only affects the displayed image.

<h4 id="manufacturer-frontend">Show manufacturers on the storefront</h4>

The current Joomla menu metadata provides **Manufacturers**, **Manufacturer Details** and **Products From Selected Manufacturer** layouts. The list layout includes manufacturer count and ordering; detail and product layouts offer manufacturer, product count and product ordering settings. Create an appropriate menu item and test publication, pagination, links and template output.

<h2 id="display">Display the manufacturer name on a product</h2>

The product renderer supports `{manufacturer_name}`. Add the tag to the product template assigned to a test product, save and preview the page. Verify the result for products both with and without a manufacturer before changing a live template.
