## Working with media in redSHOP

Media records associate files or other media with products, categories, manufacturers and other redSHOP sections. The available controls and file types depend on the section and installed version. Test uploads, display and access on an isolated site with non-sensitive sample files before using them on a live shop.

<a id="listingScreen"></a><a id="field1"></a><a id="action1"></a>
### Find media

Open **Media** in redSHOP administration. The current list provides media-type and media-section filters and shows the media name, type, associated item, section and alternative text. Use the item-specific media dialog when working from a product; it limits the context to that product.

<a id="mediasScreen"></a><a id="field2"></a><a id="action2"></a><a id="withRedshop"></a><a id="mediaItems"></a>
### Add or edit a media record

1. In the media list, select **New**, or open an existing record for editing.
2. Select or upload the appropriate file, or enter the media-specific information offered by the form. Review the media type, section, associated item, alternative text and published state.
3. Save and inspect the resulting record and its associated item. Give images meaningful alternative text; do not rely solely on an automatically generated value.
4. Preview the storefront where applicable and check the image, thumbnail, alternative text and layout.

The current image upload control has client-side type and size settings, but these do not prove server-side validation. Limits, accepted content and public accessibility can differ between upload paths and installations. Upload only trusted files, verify file permissions and access rules, and do not place confidential documents in a publicly accessible media area.

<a id="mediaProduct"></a><a id="uploadMediaProduct"></a><a id="addMediaProduct"></a><a id="useMediaProduct"></a>
### Product images and additional media

1. Open a product in **Product Management**. The product editor provides a main image control.
2. Save the product first. For an existing product, select **Add additional images** to open its media dialog.
3. Add or edit a media record in that product context. The dialog also provides a **Default Media** action for product, property and subproperty media.
4. Save, return to the product and preview it. Confirm the intended main image and additional gallery images appear correctly for the active product template.

For a new property image, the current model attempts to set the first image as primary only when that property has no other images and no main image. Verify the result rather than assuming this behavior applies to every media section.

<a id="mediaCategory"></a><a id="mediaManufacturers"></a>
### Categories and manufacturers

Category and manufacturer editors have their own image controls; media records can also be associated with these sections. After saving, check the association and frontend output using the active template. Do not assume that deleting one record is equivalent to removing only its displayed image.

### Deletion and recovery

Back up files and database before removing media, and check whether a file is shared or referenced elsewhere. Different deletion paths have different effects; in particular, the current `medium.remove` path contains a manufacturer-section cleanup that needs separate review. Avoid deleting manufacturer media through that path until it has been verified or corrected. Inspect records and files after any approved removal; database rollback does not necessarily restore deleted files.

Media permissions, upload validation, thumbnail generation, shared-file deletion and Joomla 5/6 behavior remain subject to testing for the installed version.
