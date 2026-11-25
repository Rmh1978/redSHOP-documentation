## Mail templates

Open **Components → redSHOP → Communication → Mails** to manage transactional mail templates. Back up the current template before editing and use an isolated shop and mail sink for tests.

<h2 id="overview-1">Mail list</h2>
<h4 id="field-1">Fields</h4>

The list includes name, section, subject and publication state. The inspected template lookup filters for published records and may also filter by ID, section and additional conditions.

Search matches the name or subject; separate section and publication filters are available. When search is combined with either filter, a name match can appear outside the selected section or publication state. Check each result before acting on it. Use sortable headings and pagination to navigate. Name and subject are available for inline editing where enabled.

<h4 id="action-1">Actions</h4>

Use the available list filters and toolbar to create, edit, publish, unpublish or delete templates. Deletion is a data change; retain a backup and test the effect on each workflow.

<h2 id="overview-2">Template details</h2>
<h4 id="field-2">Fields</h4>

- **Name:** required; use a recognizable administrative name.
- **Mail section:** required; choose the workflow for which the template is intended. Available sections include order, registration, newsletter confirmation and question mail; installed integrations can add options.
- **Order status:** shown for the order-status section. Choose the status whose change should use this template; the inspected status-mail lookup also checks the selected status.
- **BCC:** optional. Several inspected mail handlers split multiple addresses on commas; verify the intended section and recipients with a mail sink.
- **Subject:** required; enter the message subject.
- **Published:** new templates default to Yes. The inspected template lookup only returns published records.
- **Body:** edit the HTML message. Keep the markup and links appropriate for email clients.

The editor includes a section-specific hints panel. Changing a template does not by itself configure when an email is sent.

Tags are section-specific. For example, the order mail tag list includes `{order_id_lbl}`, `{order_id}`, `{order_number_lbl}` and `{order_number}`; verify rendered content in the intended mail path rather than assuming every tag works in every section. Restrict who may edit HTML and BCC addresses.

<h4 id="action-2">Actions</h4>

Save retains edits; Save & Close returns to the list. Cancel leaves without saving current edits.

<h2 id="working">Test an order email</h2>

1. On a disposable shop, open the relevant published order-mail template and save a backup of its body and settings.
2. Edit the content and appropriate tags, and configure the intended order/email settings.
3. Place a mock order with a test address and mail sink. Inspect the received subject, HTML, tags, BCC and delivery status, including order-status changes.

Verify transactional triggers, recipient privacy, escaping and failure handling separately; do not infer successful delivery from a UI message alone.
