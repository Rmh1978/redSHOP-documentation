## General configuration

Open redSHOP Configuration and choose **General**. Back up configuration and test changes in an isolated shop, especially country, tax, inventory and upload settings.

<h2 id="store">Store settings</h2>

- **Shop Name** and **Shop Country** identify the shop; country can affect tax and integration behavior.
- **Default Shipping Country** and the retail country selection configure separate values. The country helper uses the selected retail country codes to build its country list. Verify address forms, shipping availability and tax calculations for allowed and disallowed destinations; do not rely on a UI list as the only enforcement.
- **Date Format** selects the displayed format. Test date entry, order records and time-zone boundaries rather than assuming it changes the database storage format.
- **Welcome Message** supports `{shopname}` in the inspected registration redirect. The destination can also depend on a menu item's registration redirect.
- **Administrator Email** is used by notification paths. Verify recipients with an isolated mail sink.
- **Use Multibyte Encoding** is an application option, not a global switch for database UTF-8. One inspected product-property path converts text from UTF-8 to ISO-8859-1 when enabled; test your language content before changing it.
- **Currency Libraries** selects the rate source; the Currency Layer key field appears for that provider. Keep keys private and validate actual conversion and rate retrieval before relying on them. See [Currencies](chapters/vat/currency.md).

The distributed configuration uses `Webshop` as the shop name, `DNK` for both
shop and default shipping country, `Y-m-d` for the date format and a blank
administrator email. Review these values for your shop; saved settings can
differ.

<h2 id="modules">Modules and features</h2>

- **Enable Statistics** controls collection in the inspected statistics helper; it is separate from hiding a dashboard menu.
- **Enable Customer Tagging** controls the tagging feature. Test the active account and product templates.
- **Enable Address Detail in Shipping** adds the street address to a shipping-address selection label in the inspected checkout template.
- **Enable Product Reserve** and **Cart Reservation Message** influence reservation and the message when stock is unavailable. Reservation also depends on stockroom, quantities and cart expiry; it is not limited to the last item. Test competing carts, timeout, checkout and release of stock. See [Cart configuration](chapters/global-configuration/cart.md).

The distributed configuration enables statistics and product reservation, but disables street addresses in shipping-address selection labels. Saved settings can differ; reservation still depends on stockroom and the other conditions above.

<h2 id="general">General layout settings</h2>

The form offers redSHOP style loading, allowed media types, image quality, maximum width and height, image processing method and maximum upload size. The inspected media browser compares file size in kilobytes (`file.size / 1024`) with the configured upload maximum; other upload paths and PHP/server limits can differ. The allowed-type field is named for MIME types in source even though the interface tooltip describes extensions: check the actual upload field and server validation before changing it.

The image processing selector offers non-proportional resize, proportional
resize, and proportional resize with crop. The distributed configuration
selects proportional resize, sets image quality to `70`, maximum dimensions to
2048 x 2048, and redSHOP style loading to No. The form falls back to `2048`
for the upload-size field when no value is configured; verify the saved value
and server limits.

Test representative JPEG/PNG files, resizing and cropping, allowed and rejected types, files around the size limit and restricted-user uploads. Do not treat client-side checks as a security boundary. See [Media](chapters/media/working-medias.md).
