## Manufacturer configuration

Open redSHOP Configuration and choose **Manufacturers**. These settings provide defaults for manufacturer pages; individual records, menu parameters and templates can also affect the storefront. See [manufacturer management](chapters/product-management/redshop-manufacturers.md) for creating and assigning records.

<h2 id="settings">Manufacturer settings</h2>

- **Default Manufacturer Template:** select a Manufacturer Products template. Test the chosen template and any manufacturer-specific or menu settings with a published manufacturer and assigned products.
- **Default Sorting of Manufacturers:** choose alphabetically, newest or ordering. In the inspected ordering choices, *newest* means descending manufacturer ID, not a comparison of publication dates. Menu parameters and a visitor's active sort selection can affect the result.
- **Default Sorting of Products in Manufacturer View:** choose the initial product ordering from the available options. Check the actual product order and any menu-specific settings on the storefront, including paginated results.
- **Max. Characters for Manufacturer Title / Manufacturer Title Suffix:** configure truncation and its suffix, such as `...`. The manufacturer list tag uses these values for the linked name; test your active templates and multibyte names.
- **Enable Manufacturer Email / Enable Supplier Email:** allow the corresponding order-confirmation mail paths to notify contacts associated with ordered products. These are separate settings and require appropriate product associations and email addresses. The inspected path skips gift-card items and stops before these messages in admin-only mode. Test the exact triggers, contents and recipients in an isolated shop; do not assume every payment or status change sends a message.

<h2 id="image-settings">Image settings</h2>

Set watermark options separately for the manufacturer image and thumbnail. Enter width and height for the manufacturer thumbnail and each of the three manufacturer-product thumbnail size pairs. The inspected manufacturer-product tag uses the first pair; verify which templates use the other sizes, cached images and watermark behavior before rolling changes out.

After saving, review list and product pages on desktop and mobile, including images, alternative text and long names. Use disposable products and a mail sink when testing notification settings.
