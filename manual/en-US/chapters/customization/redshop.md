## redSHOP custom fields

Custom fields add section-specific information to products, addresses and other redSHOP contexts. Their availability, storage and output depend on the chosen section, field type and template. Use disposable data to test a new field before using it on a live shop.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find fields

Open **Custom Fields** in redSHOP customization. The list identifies each field by title, name, type, section, group, publication and ID. Search by title, enter `id:` followed by the record ID, or filter by type, section and group. The ordering control is shown after selecting a section. Open a title to edit it; inline title editing is available when enabled and permitted.

Use **New**, or select records for **Delete**, **Publish** or **Unpublish**, subject to your permissions. Selecting a section also exposes the group-assignment action for selected fields; choosing no group removes their existing group association. Back up the database before deleting or changing existing fields: deleting a field also removes its associated stored field data.

In the group-assignment dialog, **Clear group** is the default choice when groups are listed. Select the intended group explicitly before applying the action, and reopen the affected fields to verify their assignments.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a>
### Create a field

1. Select **New**, choose a type and section, then enter a title and unique name. The table replaces spaces in the name with underscores and adds `rs_` if the prefix is missing; it checks the resulting name across fields, not just the selected section. Use the actual saved name when referring to it.
2. Choose a [field group](chapters/customization/custom.md) for the same section if needed. The refreshed selector returns at most 99 groups for the selected section, ordered by ID. Verify the saved assignment, and contact your maintainer if the intended group is unavailable. Configure publication, required state, frontend and administrator visibility and any section-specific product-list, checkout, search or product selection settings that apply. The form defaults to Published, Required and visible in both frontend and administrator. Product-list display and search default to No, and checkout display defaults to Yes where offered.
3. Configure the type-specific options, save and reopen the field. For example, option-based types have option rows, while a text area has rows and columns. The editor checks option values for spaces for certain selection types.
4. Enter a test value in the appropriate product, address or other editor. Save and reopen it; then test its output in the relevant template and, where applicable, cart and checkout.

When using the product selection, test both a selected and an unselected disposable product. The inspected field query applies the saved product IDs only when it receives an item ID and the database has the products column; other rendering paths can differ.

### Input presentation and options

- **Class** supplies a CSS class to supported field renderers. **Description** is a separate field description.
- For a text field, **Max Length** limits characters in the input and **Size** controls the input's displayed width. For a text area, **Columns** and **Rows** control its displayed dimensions. Their effect depends on the renderer and browser; do not treat display dimensions as a storage or authorization limit.
- For supported option-based types, enter each option's name and value in the values table. The editor warns that changing an existing option value can affect historical selections. Back up the shop and review existing product, order or other saved values before changing or deleting options.

<a id="type"></a><a id="field-addition"></a>
### Field types

The current Core type selector includes text, text area, checkbox, radio buttons, single and multiple select, country, WYSIWYG, media, documents, image, date picker, image with link, conditional selection, Joomla related articles and language string replacement. System plugins can add options. The editor marks the media type as deprecated. Not every type is necessarily usable in every section; the editor specifically prevents WYSIWYG, media and documents for gift-card user fields.

The former **Text Tag Content** option is not in the current Core type selector. Do not create a new field based on the old screenshots without checking the installed extensions and current options.

<a id="section"></a>
### Sections

The selector includes product, category, customer and company billing and shipping addresses, sample, manufacturer, shipping, product and gift-card user fields, product-finder date picker, quotation, payment gateway, shipping gateway and order. The selected section determines the context; it does not guarantee that a particular template or plugin renders the field.

### Examples

<a id="working-with-checkbox"></a><a id="show-with-checkbox"></a>
- **Checkbox:** define its option rows, select a product section and enter a test selection on a disposable product. Check the saved selection and rendered value.

<a id="working-with-text-area"></a><a id="show-with-text-area"></a>
- **Text area:** set rows and columns, enter a short test value, save and check line breaks and escaped output.

<a id="working-with-radio-button"></a><a id="show-with-radio-button"></a>
- **Radio buttons:** define options, select one test value and verify required and empty-selection behavior.

<a id="working-with-single-select"></a><a id="show-with-single-select"></a>
- **Single select:** define options and verify the saved and displayed choice, including the empty/default case.

<a id="working-with-text-tag-content"></a><a id="show-with-text-tag-content"></a>
- **Legacy Text Tag Content:** inspect existing fields and their actual type before migrating; its historic editor option is not listed by the current Core selector.

<a id="show"></a>
### Display in a template

For template paths that process custom-field tags, a field saved as `rs_example` can be referenced as `{rs_example}` and its label as `{rs_example_lbl}`. Category product-tag contexts may use `{producttag:rs_example}` instead. Check the actual template hints and renderer for the relevant section rather than assuming these tags work everywhere. Test missing values, unpublished fields and frontend visibility as well as populated values.

The frontend/admin visibility settings are not an authorization guarantee. Do not store sensitive information until permissions, storage, output escaping and retention have been verified for that path. Test upload types and validation separately before enabling them.
