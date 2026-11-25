## Feature settings

Open redSHOP Configuration and choose **Feature Settings**. Configure only features the shop uses, and test changes with disposable data and appropriately restricted accounts.

<h2 id="rating">Rating and reviews</h2>

Set the completion message, number of favoured reviews, review thumbnail width and height, and whether login is required to submit a review. The inspected controller checks the login setting. Test guest and registered submission, moderation, images and the active review templates; do not assume a hidden form prevents direct access.

The distributed configuration starts with a blank completion message, login required, two favoured reviews and a 200 x 200 review thumbnail. Existing saved settings can differ.

<h2 id="comparison">Product comparison</h2>

Enable comparison, then configure the maximum number of products, category or global comparison, default comparison template and thumbnail dimensions. In category mode the inspected product comparison view requests the category's comparison template. Test products from the same and different categories, the limit, template output and mobile layout. The login-required field above belongs to reviews, not this comparison group.

The distributed configuration starts with comparison disabled, category comparison, a limit of four and a 150 x 100 comparison thumbnail. The dependent settings are shown when comparison is enabled. Confirm the selected template exists in the installation.

<h2 id="inline-edit">Inline editing</h2>

Enable or disable inline editing for supported administrator list fields. The setting is consulted by, among others, category, coupon, voucher and discount list views; it does not imply that every field is editable inline. Check field permissions and locked records using a restricted account.

The distributed configuration starts with inline editing enabled.

<h2 id="wishlist">Wishlist</h2>

Enable the wishlist and choose whether login is required. The separate wishlist-list setting enables a list-based display; it is not a login requirement. Both controls are conditional on wishlist enablement in the form. Test guest and registered sessions, privacy and the active templates before using this feature.

The distributed configuration starts with wishlist disabled, login not required and the wishlist-list option enabled. These stored defaults do not activate the wishlist until its main switch is enabled.

<h2 id="import">Import/Export settings</h2>

Configure minimum and maximum import file size in **bytes**, allowed MIME types and extensions, and the maximum lines per split file. The inspected import view and import plugin use at least 10 lines per chunk even when a smaller value is entered. These controls do not replace server upload limits or permission checks. See [data import](chapters/import-export/data-import.md) and [data export](chapters/import-export/data-export.md); back up and test with non-sensitive data.

The form's fallback minimum is 1 byte; the distributed maximum is 2,000,000 bytes. Its default extension is `.csv` and its MIME list is `text/csv,application/vnd.ms-excel`. Confirm the values saved in your shop and the server's own upload limits.

<h2 id="stockroom">Stockroom</h2>

Enable stockroom, choose a default stockroom, and configure blank-as-infinite behavior, stock-image dimensions, out-of-stock imagery and low-stock notifications/threshold. The inspected quantity helper treats a missing quantity as a large sentinel when blank-as-infinite is enabled, otherwise as zero; do not use this option without testing actual availability and order behavior.

The distributed configuration starts with stockroom and blank-as-infinite disabled, out-of-stock imagery enabled and a 150 x 90 stock-image thumbnail. Its default stockroom ID is `1`; confirm the intended stockroom exists rather than assuming that ID refers to it. Most stockroom controls are shown when stockroom is enabled; saved settings can differ.

Test stock deductions, reservations, preorder, attribute stock and notifications with disposable products. See [stockroom](chapters/stockroom/overview-stockroom.md).
