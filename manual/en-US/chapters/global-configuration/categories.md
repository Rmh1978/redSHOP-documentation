## Category configuration

Open redSHOP Configuration and choose **Categories**. Settings provide defaults; category records, menu parameters and templates affect the resulting storefront. See [category management](chapters/categories/redshop-categories.md) for individual categories.

<h2 id="main-category">Main category settings</h2>

- **Default Category Sorting:** choose category name ascending, newest or ordering. The inspected *newest* option sorts by descending category ID, not publication date.
- **No. of Categories per page:** set the default limit. Menu options and template tags can change how limits apply; verify pagination with more categories than the selected limit.
- **Discontinued product message:** set the message used for discontinued products and test it with the relevant product and template.
- **Front Page Category Page Introtext:** enter introductory content. The front-page category renderer replaces `{category_frontpage_introtext}` when present in its template.

The distributed configuration starts with category ordering by its ordering field, a limit of eight categories and empty discontinued-product and intro text. Existing saved settings can differ.

<h2 id="next">Next/Previous</h2>

Set the return-to-category prefix and choose default, custom text or image links for previous/next navigation. Enter the matching prefix/suffix, custom text or image files. In the inspected product renderer, these links navigate between products, rather than being general pagination controls. Test both directions with keyboard and screen-reader access: the next-image path currently checks the previous-image file before rendering the next image.

<h2 id="category">Category suffixes</h2>

The form offers maximum lengths and suffixes for category description, short description and title, plus product title, description and short description in category view. For example, a title limit can be paired with `...`. Output depends on the active tags and templates; test long text, HTML and multibyte characters.

The distributed category description, short-description and title limits and
the product title and description limits are zero, with blank suffixes. The
product short-description limit and suffix are blank. Saved settings may differ.

In the inspected category-detail, category-product and search filter-result paths, both the long and short category description tags use the **short description** length and suffix settings. Verify actual output before relying on the separate long-description controls.

<h2 id="template">Templates</h2>

Choose the default **Category** template and the **Frontpage Category** template for the main category list. Individual categories and menu layouts may select different templates. Back up templates and verify tags, category hierarchy and pagination; see [templates](chapters/customization/template.md).

The distributed configuration references category template ID `5` and frontpage category template ID `22`. These IDs are not a guarantee that the matching templates exist in an existing installation; check the selected templates after setup or migration.

<h2 id="image">Image settings</h2>

Configure category lightbox, image and thumbnail watermark options, and the three category-thumbnail and three category-product-thumbnail width/height pairs. Verify the tags used by each template and test cached and newly generated images.

The distributed settings disable the category lightbox and both category
watermarks. Category thumbnail sizes are 141 × 141, 0 × 0 and 0 × 0; category
product thumbnail sizes are 150 × 100, 0 × 0 and 0 × 0. Existing settings may
differ.

<h2 id="default">Default images</h2>

The form includes uploads for default category and product images, watermark, out-of-stock image and product-detail lightbox close image. Select the appropriate image, save and inspect the resulting storefront. Uploading a watermark does not itself enable watermarking for an image type. Back up existing images before removal and verify accessible image alternatives.
