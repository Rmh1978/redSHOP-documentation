## Feature settings

Open redSHOP Configuration and choose **Feature Settings**. Configure only features the shop uses, and test changes with disposable data and appropriately restricted accounts.

<h2 id="rating">Rating and reviews</h2>

Set the completion message, number of favoured reviews, review thumbnail width and height, and whether login is required to submit a review. The inspected controller checks the login setting. Test guest and registered submission, moderation, images and the active review templates; do not assume a hidden form prevents direct access.

<h2 id="comparison">Product comparison</h2>

Enable comparison, then configure the maximum number of products, category or global comparison, default comparison template and thumbnail dimensions. In category mode the inspected product comparison view requests the category's comparison template. Test products from the same and different categories, the limit, template output and mobile layout. The login-required field above belongs to reviews, not this comparison group.

<h2 id="inline-edit">Inline editing</h2>

Enable or disable inline editing for supported administrator list fields. The setting is consulted by, among others, category, coupon, voucher and discount list views; it does not imply that every field is editable inline. Check field permissions and locked records using a restricted account.

<h2 id="wishlist">Wishlist</h2>

Enable the wishlist and choose whether login is required. The separate wishlist-list setting enables a list-based display; it is not a login requirement. Both controls are conditional on wishlist enablement in the form. Test guest and registered sessions, privacy and the active templates before using this feature.

<h2 id="import">Import/Export settings</h2>

Configure minimum and maximum import file size in **bytes**, allowed MIME types and extensions, and the maximum lines per split file. The inspected import view and import plugin use at least 10 lines per chunk even when a smaller value is entered. These controls do not replace server upload limits or permission checks. See [data import](chapters/import-export/data-import.md) and [data export](chapters/import-export/data-export.md); back up and test with non-sensitive data.

<h2 id="stockroom">Stockroom</h2>

Enable stockroom, choose a default stockroom, and configure blank-as-infinite behavior, stock-image dimensions, out-of-stock imagery and low-stock notifications/threshold. The inspected quantity helper treats a missing quantity as a large sentinel when blank-as-infinite is enabled, otherwise as zero; do not use this option without testing actual availability and order behavior.

Test stock deductions, reservations, preorder, attribute stock and notifications with disposable products. See [stockroom](chapters/stockroom/overview-stockroom.md).
