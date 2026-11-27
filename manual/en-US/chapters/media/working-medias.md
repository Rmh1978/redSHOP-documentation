## Working with media in redSHOP

Media records associate files or other media with products, categories, manufacturers and other redSHOP sections. The available controls and file types depend on the section and installed version. Test uploads, display and access on an isolated site with non-sensitive sample files before using them on a live shop.

<a id="listingScreen"></a><a id="field1"></a><a id="action1"></a>
### Find media

Open **Media** in redSHOP administration. Filter by **Media Type** and **Media Section**; changing a filter submits the list. The filters include images, video, documents, downloads and YouTube, and sections such as products, categories, properties and manufacturers. Select the neutral **Select** option in each filter to clear it: the current **Reset** button may not clear the filters.

The list shows a media name or image preview, type, associated item, section, alternative text, published state and ID. Select a sortable column heading to change the order. Use the row edit button or select records for toolbar actions. Use the item-specific media dialog when working from a product; it limits the context to that product.

<a id="mediasScreen"></a><a id="field2"></a><a id="action2"></a><a id="withRedshop"></a><a id="mediaItems"></a>
### Add or edit a media record

1. In the media list, select **New**, or open an existing record for editing.
2. Choose **Media Type**: image, video, document or YouTube. The product-specific dialog also offers download. A manufacturer context uses image; a catalog context uses document.
3. For file media, choose a file from the computer or use the media bank. New records offer a ZIP bulk-upload choice, initially **No**, and can offer multiple file rows. A product context also offers a download-folder picker. The available controls depend on the context.
4. Choose the **Media Section** and its **Section Name** (the associated product, category or other item). In an existing item-specific dialog, the section and item are supplied by that context rather than freely changed.
5. Enter descriptive **Alternative Text** and review **Published**, which defaults to Yes for a new record. For images, a blank alternative text may be filled from the file or associated item's name; check it rather than relying on an automatic value.
6. Save and inspect the resulting record and its associated item. Preview the storefront where applicable and check the image, thumbnail, alternative text and layout.

The current image upload control has client-side type and size settings, but these do not prove server-side validation. Limits, accepted content and public accessibility can differ between upload paths and installations. Upload only trusted files, verify file permissions and access rules, and do not place confidential documents in a publicly accessible media area.

<a id="mediaProduct"></a><a id="uploadMediaProduct"></a><a id="addMediaProduct"></a><a id="useMediaProduct"></a>
### Product images and additional media

1. Open a product in **Product Management**. The product editor provides a main image control.
2. Save the product first. For an existing product, select **Add additional images** to open its media dialog.
3. Add or edit a media record in that product context. Select an image record and use **Default Media** to designate the primary image for a product, property or subproperty. Other media types cannot be set as the default. The dialog also shows primary media, ordering and published state.
4. Save, return to the product and preview it. Confirm the intended main image and additional gallery images appear correctly for the active product template.

For a new property image, the current model attempts to set the first image as primary only when that property has no other images and no main image. Verify the result rather than assuming this behavior applies to every media section.

<a id="mediaCategory"></a><a id="mediaManufacturers"></a>
### Categories and manufacturers

Category and manufacturer editors have their own image controls; media records can also be associated with these sections. After saving, check the association and frontend output using the active template. Do not assume that deleting one record is equivalent to removing only its displayed image.

### Deletion and recovery

Back up files and database before removing media, and check whether a file is shared or referenced elsewhere. Different deletion paths have different effects; in particular, the current `medium.remove` path contains a manufacturer-section cleanup that needs separate review. Avoid deleting manufacturer media through that path until it has been verified or corrected. Inspect records and files after any approved removal; database rollback does not necessarily restore deleted files.

Media permissions, upload validation, thumbnail generation, shared-file deletion and Joomla 5/6 behavior remain subject to testing for the installed version.
