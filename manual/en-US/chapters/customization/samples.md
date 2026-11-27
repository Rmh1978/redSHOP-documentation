## Samples

Use **Customization → Samples** in redSHOP administration to manage sample
records and their colour or image choices. This feature is separate from
installing demonstration sample data.

### Sample list

The list includes the sample name, publication state and ID. Search by name;
the list query also accepts `id:` followed by an ID. The default order is ID
ascending. Open a name to edit it. Inline name editing and toolbar actions
depend on permissions and settings. Available actions include **New**,
**Delete**, **Publish**, **Unpublish** and **Check-in**.

### Create or edit

1. Select **New**, enter the required **Sample Name** and review **Published**.
   The form defaults to Yes for a new record.
2. In the colour section, enter a colour code or select an image and use the
   add control. Review the displayed rows; the delete control removes a row
   from the editor. Save and reopen the sample to check the choices.
3. Use disposable records to test the sample request form and its template on
   an isolated copy before offering it to customers.

**Known limitation:** saving a sample recreates its colour rows, so existing
request references can become invalid. Saving without the colour inputs can
remove the choices. Avoid editing established samples or using inline editing
until the issue is resolved and verified; back up and review existing requests
before changes.

The standard sample template and request-detail code also use older sample
field names. Names, choices or request details may not appear correctly on a
current installation. Verify the complete workflow before accepting requests.

For sample requests, do not assume that a bulk block or delete operation
affected every selected request. The list actions may not dispatch or receive
the selected records as intended. Verify the result on an isolated copy and
review the records before proceeding.

Sample reminders and their discount settings are separate configuration
options. Their timing and retries have known limitations; do not enable
automated messages without an approved process and isolated mail testing.
