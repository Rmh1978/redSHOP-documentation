## Shipping boxes

Shipping boxes describe package dimensions for supported checkout templates and shipping workflows. Open **Shipping Boxes** in redSHOP administration.

<h2 id="overview-1">Box list</h2>
<h4 id="field-1">Columns</h4>

The list includes the name, length, width, height, priority, publication state and ID.

Search by name, sort using the available headings and use pagination to navigate results. The `id:` search currently does not find the requested box reliably; use its name instead.

When inline editing is enabled, users with edit permission can edit the name, dimensions and priority inline unless the record is checked out by another user. Press Enter to submit an inline change or Escape to cancel it. Check the saved values after editing; the list's default ordering is by ID.

<h4 id="action-1">Actions</h4>

Use the available list actions to create, edit, publish, unpublish or delete records. Back up before bulk changes and verify permissions.

<h2 id="overview-2">Box details</h2>
<h4 id="field-2">Fields</h4>

Name, length, width, height and publication state are required by the form; priority is also available. The name, dimensions and priority fields start blank in the form, while new records default to Published. All three dimensions must be greater than zero. Enter dimensions consistently with the shop's configured product measurement units and save. Give priority an explicit value and compare overlapping boxes in checkout rather than relying on an empty value's saved representation.

<h4 id="action-2">Saving</h4>

Save and reopen a record to verify the stored values; cancel or close to discard pending edits.

<h2 id="working">Using boxes</h2>
<h4 id="create">Create and test a box</h4>

1. Select **New**, enter a name and dimensions, set priority and publication, then save.
2. With disposable products, test checkout using a compatible template and shipping method. Compare exact dimensions, items just above and below each boundary, multiple products and priorities.
3. Confirm the displayed selection and shipping price; do not assume the dimensions alone prove that all items physically fit.

The current helper selects published boxes ordered by ascending priority. It calculates three candidate cart dimensions from product lengths, widths, heights and quantities, then accepts a box that meets all three dimensions of at least one candidate. Gift cards are skipped in this calculation. This is an estimate, not a guarantee of physical packing or individual-item rotation; exact storefront and carrier behavior still depends on the active template and shipping method.

The inspected checkout shipping view requires a shipping address before rendering box choices. The box renderers select the first matching box when none is selected and do not necessarily display every matching box when priorities differ. They also hide the box control unless more than one box and more than one shipping method are available, and at least one method is Bring, UPS or USPSv4. Check the available choices in the shop's checkout and contact your maintainer if expected boxes are missing.

Selected-box lookup has a known error that can interrupt carrier rate calculation. UPS, FedEx and USPSv4 use selected-box dimensions when an ID is supplied; Bring does so when its **Use Shipping Box** option is enabled. Test each configured carrier in an isolated shop.

The cart shipping estimator is separate from checkout box selection and has known problems with dimensions and volume. Test dimension-restricted rates in the cart and checkout separately before relying on an estimate.

See [shipping methods](chapters/shipping/shipping-methods.md) for rate and destination testing.
