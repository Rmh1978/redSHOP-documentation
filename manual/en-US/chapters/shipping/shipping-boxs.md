## Shipping boxes

Shipping boxes describe package dimensions for supported checkout templates and shipping workflows. Open **Shipping Boxes** in redSHOP administration.

<h2 id="overview-1">Box list</h2>
<h4 id="field-1">Columns</h4>

The list includes the name, length, width, height, priority, publication state and ID.

<h4 id="action-1">Actions</h4>

Use the available list actions to create, edit, publish, unpublish or delete records. Back up before bulk changes and verify permissions.

<h2 id="overview-2">Box details</h2>
<h4 id="field-2">Fields</h4>

Name, length, width, height and publication state are required by the form; priority is also available. Enter dimensions consistently with the shop's configured product measurement units and save.

<h4 id="action-2">Saving</h4>

Save and reopen a record to verify the stored values; cancel or close to discard pending edits.

<h2 id="working">Using boxes</h2>
<h4 id="create">Create and test a box</h4>

1. Select **New**, enter a name and dimensions, set priority and publication, then save.
2. With disposable products, test checkout using a compatible template and shipping method. Compare exact dimensions, items just above and below each boundary, multiple products and priorities.
3. Confirm the displayed selection and shipping price; do not assume the dimensions alone prove that all items physically fit.

The current helper selects published boxes ordered by ascending priority. For a cart with dimensional entries, its query accepts a box matching the length, width and height of at least one entry; this is not a packing or rotation guarantee. Exact storefront and carrier behavior still depends on the active template and shipping method.

See [shipping methods](chapters/shipping/shipping-methods.md) for rate and destination testing.
