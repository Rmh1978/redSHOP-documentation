## Suppliers

Suppliers are separate from manufacturers. A product can refer to a supplier, whose name can be rendered by a product template. Use an isolated shop and disposable data to verify your installation before changing live records.

<h2 id="overview-1">Supplier list</h2>

Open **Products → Suppliers** in the redSHOP administrator. The supplier form supplies Name, Email, Published and Description columns; the list has a search filter and uses the shared redSHOP list actions. Exact available actions depend on permissions.

<h2 id="overview-2">Supplier details</h2>

- **Name:** required.
- **Email:** optional contact address, validated as an email when provided.
- **Published:** yes or no.
- **Description:** editor content filtered as safe HTML.

The supplier email setting under configuration's manufacturer settings controls whether order confirmation processing attempts to send to suppliers. Confirm recipients and content with safe test accounts before enabling it.

<h2 id="working-suppliers">Working with suppliers</h2>
<h4 id="setting">Product template</h4>

Add `{supplier_name}` to the relevant product template if the supplier name should appear. The product tag renderer retrieves the supplier associated with the product; a name is not displayed merely because a supplier exists. Test the actual assigned template and product page.

<h4 id="create">Create a supplier</h4>

1. Open the supplier list and choose New.
2. Enter a name, optionally add an email and description, choose a publication state and save.
3. Reopen the record to check the stored data.

<h4 id="add">Associate a product</h4>

Open a product and choose the supplier in **Additional Information**, then save the product. Preview the product with the intended template. The current supplier selector query does not filter on publication state; the supplier-name replacement also has no explicit published-state check. Do not rely on unpublishing a supplier to hide its name without verifying your installation.

<h4 id="publish">Publish</h4>

Select the supplier and use the list's Publish action where permitted. Verify the resulting state and product display.

<h4 id="unpublish">Unpublish</h4>

Select the supplier and use Unpublish where permitted. Verify the actual product display separately; publication state is not a substitute for testing the template.

<h4 id="copy">Copy</h4>

The supplier list enables the shared duplicate action. The shared model sets copies to unpublished; inspect the copied name and details and test uniqueness before publishing.

<h4 id="delete">Delete</h4>

Before deletion, back up data and identify products referencing the supplier. Deletion effects on associations and constraints are not verified; test with disposable records rather than assuming references are cleared.

<h4 id="checkin">Check-in</h4>

If a record is locked after an interrupted edit, use the authorized check-in action only after confirming nobody is editing it. Verify the result in the current administrator.
