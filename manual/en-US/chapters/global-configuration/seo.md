## SEO configuration

Open redSHOP Configuration and choose **SEO**. Before changing routes on a live shop, back up configuration and plan redirects. Test Joomla SEF settings, published menu items, multilingual routes and canonical URLs on an isolated copy.

<h2 id="general">General</h2>

The form provides product-number and ID/name SEF options, category and category-tree inclusion, automatic metadata and an SEO language field. Test generated URLs and language output with your actual Joomla menus; entering a language value alone is not proof that multilingual routing is configured.

The form also exposes default menu-item and alias fields for account, billing/shipping addresses, cart, checkout, gift card, manufacturers, order detail, orders, quotation, registration and wishlist. Select appropriate published frontend menu items and verify each route and access rules. The inspected form updates alias fields from the selected menu on load and change, so do not assume a manually entered different alias will survive reopening and saving.

<h2 id="category">Category</h2>

Set global title, heading, description and keyword patterns. Category-specific metadata and its append/prepend/replace setting affect the result. For example, `{categoryname} | {shopname}` is a title pattern supported by the inspected category title path.

<h2 id="products">Products</h2>

Set global product title, heading, description and keyword patterns. Product-specific metadata can append to, prepend to or replace generated values in the inspected paths. Verify rendered HTML and Open Graph output for products with and without metadata.

<h2 id="manufacturer">Manufacturer</h2>

Configure title, heading, description, keyword and canonical patterns. The inspected manufacturer view combines some record values with global patterns rather than universally replacing them. Its canonical pattern supports `{manufacturerproductslink}` on the manufacturer detail path. Test manufacturer detail and product layouts before indexing.

<h2 id="tags">Available SEO tags</h2>

The editor lists suggested tags by field, but replacement differs by page type and metadata field. A listed tag is not necessarily implemented everywhere: for example, the inspected product title and keyword paths do not replace `{saving}`, although the description path does. Use context-appropriate tags and inspect the resulting page source for unreplaced placeholders.

<h4 id="tags1">Page titles</h4>

The editor lists `{productname}`, `{manufacturer}`, `{parentcategoryloop}`, `{categoryname}`, `{saleprice}`, `{saving}`, `{shopname}`, `{productsku}`, `{categoryshortdesc}` and `{productshortdesc}`.

<h4 id="tags2">Headings</h4>

The editor lists `{productname}`, `{manufacturer}`, `{categoryname}`, `{productsku}`, `{categoryshortdesc}` and `{productshortdesc}`.

<h4 id="tags3">Descriptions</h4>

The editor lists `{productname}`, `{manufacturer}`, `{categoryname}`, `{saleprice}`, `{saving}`, `{shopname}`, `{productsku}`, `{categoryshortdesc}`, `{productshortdesc}`, `{categorydesc}` and `{productdesc}`.

<h4 id="tags4">Keywords</h4>

The editor lists `{productname}`, `{manufacturer}`, `{categoryname}`, `{saleprice}`, `{saving}`, `{shopname}`, `{productsku}`, `{categoryshortdesc}` and `{productshortdesc}`.

Use the lists as hints, not a guarantee of replacement in every context. Test category, product and manufacturer pages separately with automatic metadata on and off, record-specific settings, special characters, missing values, multiple languages and pagination.
