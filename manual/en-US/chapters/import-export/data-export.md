## Data Export

The redSHOP administrator export screen uses enabled `redshop_export` plugins to produce CSV files. The available data types and options depend on the plugins installed and enabled on the site.

<a id="overview-1"></a>
### Before exporting

Exports can contain customer, address, subscriber and order information. Export only what you are authorized to use; restrict file access, transfer and retention. Treat CSV data as untrusted when opening it in spreadsheet software, which may interpret cells as formulas.

Use an isolated site and disposable data to verify column names, filtering, encoding and special characters before relying on an export for migration or reconciliation. An export is not a complete site backup, and its columns do not guarantee a lossless re-import.

<a id="working"></a>
### Export a file

1. In redSHOP administration, open **Import/Export** and the **Data Export** screen.
2. Select an export type. The screen loads any options supplied by that plugin; if no type is available, check the installed and enabled export plugins.
3. Set the separator (comma by default) and any type-specific filters. The order plugin's date filter excludes records at exactly midnight on the start date and 23:59:59 on the end date. Verify the output and date boundaries on disposable data before relying on it.
4. Select **Start Export**, wait for the process and download to finish, and inspect any messages.
5. Verify the file's headers, record count, filtering and contents before use. Store the file securely. Avoid simultaneous exports of the same type because they use a shared temporary filename.

The inspected export screen requests records in batches of 100 and starts the download when processing finishes. The shared export helper deletes its temporary file after sending it; retain your downloaded copy in an approved location and verify it independently.

For order exports, the current processing code repeats the full batch for each input row. An isolated test of two input rows produced four output rows; the full Joomla export has not been tested. Compare individual order-item IDs and counts with the source data before using the file for reconciliation or migration.

### Product export options

The product exporter offers separate **Extra Fields** and **Attributes Data**
choices; both initially select No. Enable the relevant choice when those
additional columns are needed and verify the resulting headers and values.
Stockroom columns are added for available stockrooms independently of those
choices.

The category and manufacturer controls allow multiple selections. Leaving a
control empty adds no filter for that control; when both have selections, the
query applies both filters. Check the exported products and their associated
categories before using the file, especially when products belong to more than
one category.

Category exports include image-name columns, not the image files themselves.
Back up media files separately and verify category image references after a
migration. When a category has no main image, the inspected exporter can
repeat missing-image lookups and skip the separate thumbnail fallback. Check
warnings and the exported image columns before using the file.

### Export types in the Core manifest

The manifest lists the following types. The actual list on a site depends on installed and enabled plugins:

| Type | Check in the exported data |
|---|---|
| <a id="attributes"></a>Attributes, properties and sub-properties | Product and attribute associations and values. The product selector permits multiple products; no selection adds no product filter. |
| <a id="categories"></a>Categories | IDs, `parent_id`, names and hierarchy; the category export omits the root category and orders records by level. |
| <a id="custom-fields"></a>Custom fields | Field definitions, option values and selected field-data rows. The field-data query joins product records, so do not assume it exports every value from every section. |
| <a id="manufacturers"></a>Manufacturers | Names, identifiers, grouped product IDs and image reference; verify product associations and back up image files separately. |
| <a id="newsletter"></a>Newsletter subscribers | Subscription IDs, names, email, newsletter and date. The selected columns do not establish consent or publication state; verify these separately. |
| <a id="products"></a>Products | Product details and selected category/manufacturer filters, if offered. |
| <a id="stockroom"></a>Product stockroom data | Product number and name, stockroom name, quantity, preorder stock and ordered preorder. The query reads product-stockroom associations; do not assume it lists products without one. |
| <a id="related"></a>Related products | `related_sku` and `product_sku` identify the related product and its owning product by product number. Verify both sides before importing. |
| <a id="shipping"></a>Shipping addresses | Shipping-type address records and customer associations, including personal information. |
| <a id="shopper-1"></a>Shopper-group attribute prices | Property and sub-property price rows, including section, product, shopper group, quantity range and discount dates. Verify associations and prices before use. |
| <a id="shopper-2"></a>Shopper-group product prices | Product number, group, quantity ranges, price and discount dates. The query excludes products with an empty product number. |
| <a id="users"></a>Users | Billing-type user records and personal information. The query requires a Joomla user-group association and groups by user ID, so do not assume every customer is included. The password column is emitted empty, not as a password backup. |
| Orders | The current order exporter includes order-item, status, address and total fields; review its date-filtered record count and contents carefully. |

See [Data Import](chapters/import-export/data-import.md) for the corresponding import workflow. The current manifest lists an order export but not a matching order import plugin.
