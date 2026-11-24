## Data Import

The redSHOP administrator import screen uses enabled `redshop_import` plugins to import CSV data. Available choices depend on which plugins are installed and enabled. A missing-plugin warning links to Joomla's plugin manager and extension installer.

<a id="overview-1"></a>
### Before importing

Imports can create or update records and associated data. Back up the database and files, verify restoration, and first test with disposable data on an isolated copy. Do not assume the whole operation is atomic: the shared importer processes rows in chunks and reports individual row results. If a batch fails, inspect the resulting records before retrying or restoring the backup.

Prepare a CSV with a header row and a consistent column count, separator and character encoding. The format and required fields depend on the selected plugin; an export of the same data type can help identify columns, but is not a guarantee of a lossless round trip. Test IDs, relationships, empty fields, dates, decimal values and special characters for the exact plugin and version before using real data.

<a id="working"></a>
### Import a file

1. In redSHOP administration, open **Import/Export** and the **Data Import** screen.
2. Select the import type. The screen loads any settings provided by that plugin.
3. Set the separator and character encoding to match the CSV. The current screen defaults to a comma and UTF-8. Review the displayed file type and size limits and any type-specific options.
4. Choose **Upload file** and select the CSV. Wait for the upload and processing steps to finish; inspect the per-row messages, not just the progress bar.
5. Check the created or changed records and relationships in redSHOP. If the result is incomplete or unexpected, stop and investigate before retrying. Do not run simultaneous imports of the same type: their temporary files can interfere.

The type and size checks displayed by the browser do not establish server-side validation. Only import files from trusted sources. Some product image fields can cause the server to retrieve URLs; review those fields before importing and do not supply untrusted URLs.

### Import types in the Core manifest

The current Core manifest lists the following plugin types; presence in the package does not prove that a particular site's plugin is enabled or working.

| Type | Preparation and verification |
|---|---|
| <a id="attributes"></a>Attributes, properties and sub-properties | Verify product and attribute relationships, selections and prices after import. |
| <a id="categories"></a>Categories | The category importer requires `name` and recognizes `id` and `parent_id`; validate the parent hierarchy and target IDs on the destination site. It also recognizes some older category column names. |
| <a id="custom-fields"></a>Custom fields | Verify field type, configuration and associations. |
| <a id="manufacturers"></a>Manufacturers | Verify names and product associations. |
| <a id="newsletter"></a>Newsletter subscribers | Use authorized data only; verify newsletter association and subscription/consent state. |
| <a id="products"></a>Products | Verify product IDs, prices, categories and images. A product import may create a manufacturer or supplier when the supplied name does not match an existing record. |
| <a id="stockroom"></a>Product stockroom data | Verify product, stockroom and quantity associations. |
| <a id="related"></a>Related products | Verify both product references and the resulting relationships. |
| <a id="shipping"></a>Shipping addresses | Handle personal information securely and verify the intended customer association. |
| <a id="shopper-1"></a>Shopper-group attribute prices | Verify the product, attribute, shopper group and price. |
| <a id="shopper-2"></a>Shopper-group product prices | Verify product, shopper group, quantity ranges and prices. |
| <a id="users"></a>Users | Use authorized test data first; verify the Joomla/redSHOP account association and protect personal information. |

For the related output workflow, see [Data Export](chapters/import-export/data-export.md). Individual import behavior, full file validation and compatibility require testing for the installed plugin and environment.
