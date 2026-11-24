## Templates

redSHOP templates control content for specific sections such as product pages, the cart and checkout. They are separate from the Joomla site template. The selected redSHOP section and its supported tags determine which information can appear.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find and manage templates

Open **Templates** under redSHOP customization. Search and filter the list by section or publication state. Published templates can be selected by the redSHOP code that uses their section; changing publication or deleting a record may affect pages or messages that depend on it.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a>
### Create or edit a template

1. Select **New**, enter a name and choose the intended section. Both are required. The section is read-only when editing an existing template.
2. Set its publication state and edit its description in the editor. Existing templates load their content from the associated file. The editor displays section-specific hints when a section is available; confirm individual tags in the actual section before relying on them.
3. Save and assign the appropriate published template in the relevant redSHOP configuration or record. Selection and precedence depend on the feature.
4. On an isolated copy, test the rendered output and all relevant states, including escaping, links, messages, customer data and responsive display. A tag shown in an editor hint is not proof that every page or integration processes it.

Template records are stored in the database, while their content is written beneath `media/com_redshop/templates/<section>/` as a PHP-named file. Back up **both** the database and these files before editing, deleting, upgrading or restoring. Check the saved content and file permissions after changes. Treat template editing as a privileged operation: the editor accepts raw content, so only trusted administrators should be able to edit it.

The current form has order-status, payment-method and shipping-method fields commented out as unfinished; do not rely on them as active template conditions. Actual rendered HTML and Joomla 5/6 behavior require runtime verification.

<a id="working"></a>
### Changing an order message

Order messages are configured separately in [Mails](chapters/communication/mails.md). Before changing one, back it up and test with a disposable order and safe recipient on an isolated installation. Verify the selected message, substituted values and delivery; do not use real customer details for a test.

The reset-template operation can replace the content of existing template files with section defaults. Do not run it without a verified backup and an explicit restoration plan.
