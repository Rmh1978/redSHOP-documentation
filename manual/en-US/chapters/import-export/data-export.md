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

### Export types in the Core manifest

The manifest lists the following types. The actual list on a site depends on installed and enabled plugins:

| Type | Check in the exported data |
|---|---|
| <a id="attributes"></a>Attributes, properties and sub-properties | Product and attribute associations and values. |
| <a id="categories"></a>Categories | IDs, `parent_id`, names and hierarchy; the category export omits the root category and orders records by level. |
| <a id="custom-fields"></a>Custom fields | Field configuration and associations. |
| <a id="manufacturers"></a>Manufacturers | Names and identifiers. |
| <a id="newsletter"></a>Newsletter subscribers | Subscription data and personal information. |
| <a id="products"></a>Products | Product details and selected category/manufacturer filters, if offered. |
| <a id="stockroom"></a>Product stockroom data | Product, stockroom and quantity values. |
| <a id="related"></a>Related products | Both sides of the relationship. |
| <a id="shipping"></a>Shipping addresses | Customer associations and personal information. |
| <a id="shopper-1"></a>Shopper-group attribute prices | Product, attribute, group and price. |
| <a id="shopper-2"></a>Shopper-group product prices | Product, group, quantity ranges and price. |
| <a id="users"></a>Users | Account identifiers and personal information. |
| Orders | The current order exporter includes order-item, status, address and total fields; review its date-filtered record count and contents carefully. |

See [Data Import](chapters/import-export/data-import.md) for the corresponding import workflow. The current manifest lists an order export but not a matching order import plugin.
