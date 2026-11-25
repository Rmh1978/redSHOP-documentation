## Order statuses

Order statuses describe order processing; payment status is a separate field. Changing a status does not itself prove payment, shipment or a successful provider operation. Side effects depend on the action, configuration and installed plugins.

<h2 id="overviewManagement">Order status list</h2>
<h4 id="fields1">Fields</h4>

The list has status name, code, published state and ID. Search by status name or use the ordering controls. Open a name to edit it; name and code can also be edited in the list when inline editing is enabled and permitted. Installed status records and codes can differ between shops; do not assume a fixed number.

<h4 id="actions1">Actions</h4>

Create, edit, publish, unpublish and delete as permitted. Before changing existing codes or removing statuses, back up and review references in orders, integrations and payment plugins. The table's deletion check attempts to prevent removal of a status referenced by an order, but other dependencies and actual behavior still require verification.

<h2 id="overviewDetails">Status details</h2>
<h4 id="fields2">Fields</h4>

Name, code and published state are required; a new status defaults to Published. The table attempts to check code uniqueness. **Known issue:** its lookup constructs a doubly prefixed table name; creating or editing a status may fail. Do not bypass validation; request a separately reviewed Core fix and verify in an isolated shop.

<h4 id="actions2">Save</h4>

After the issue is addressed, save and reopen the status and verify its name, code and publication state.

<h2 id="createOrder">Create a status</h2>

Choose a meaningful, unique code that does not conflict with existing workflows. Test status transitions and integrations before introducing it to live orders.

<h2 id="changeOrder1">Change from the order list</h2>

Use the individual or bulk status controls, checking the selected orders, order status, payment status and notification choice separately. Test emails and plugin effects with disposable orders.

<h2 id="changeOrder2">Change in an order</h2>

Open the order, review its current status and history, choose the intended status and notification option, then check the saved result and log. Preserve administrator decisions and verify payments independently.

<h2 id="changeOrder3">Dashboard changes</h2>

If a dashboard control is available in your configuration, test its status, notification and permission behavior in isolation before using it.
