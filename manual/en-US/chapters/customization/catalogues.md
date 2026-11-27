## Catalogues

Catalogue records provide choices for the catalogue request form. In redSHOP
administration, open **Customization → Catalogues**. A catalogue here is
separate from the product catalogue and from sample requests.

### Catalogue list

The list includes the catalogue name, media, publication state and ID. Search
by name; the list query also accepts an `id:` prefix followed by an ID. The
default order is ID ascending. Open a name to edit it; inline name editing,
publication controls and toolbar actions depend on permissions and settings.
Use **New**, **Delete**, **Publish**, **Unpublish** and **Check-in** where
available. Before deleting, check existing requests and media associations.

The **Media** column shows a count and opens the catalogue media manager.
Attach and publish the intended files there after saving the catalogue.
Check the file names, access and contents before distributing them.

### Create or edit

1. Select **New**, enter the required **Catalogue Name** and review
   **Published**, which defaults to Yes for a new record.
2. Save, reopen the list and use **Media** to manage files. The edit form does
   not present Media as a normal editable field.
3. Use a disposable catalogue and authorized test address to verify the
   request form, its mail template and attachments on an isolated copy.

The source selects published catalogue records for the request form and
published associated media for attachments. The catalogue template controls
the form; for example, `{catalog_select}`, `{name}`, `{email_address}` and
`{submit_button_catalog}` provide the corresponding controls. Back up
templates before editing and verify the whole request workflow.

**Known limitation:** the current catalogue-mail path may fail before sending.
A saved request or a success message is not proof of delivery. Do not rely on
automatic catalogue delivery until the issue is resolved and tested; confirm
delivery separately without exposing customer information.

Catalogue request list actions may not dispatch or receive the selected
records as intended. Verify any block or delete operation on an isolated copy
and review the affected requests before proceeding.
