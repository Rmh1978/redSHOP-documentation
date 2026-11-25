## Wrappings

Wrappings allow a shop to offer optional product packaging. Open **Wrappings** in redSHOP administration to manage the available records.

<h2 id="overview-1">Wrapping list</h2>
<h4 id="field-1">Columns</h4>

The list includes the wrapping name, image, price, use-for-all-products setting and publication state. Open a name to edit the record.

Search by wrapping name and use sortable headings and pagination to navigate. The all-products indicator can be changed from the list; it is separate from publication. Before changing an individual indicator, clear any selected rows: otherwise a previously selected wrapping may be changed instead. Reopen or refresh the list and check the intended record.

The price and publication headings currently fall back to ID ordering instead of sorting by those values. Use the name or ID ordering to locate records.

<h4 id="action-1">Actions</h4>

Depending on permissions, the toolbar offers **New**, **Delete**, **Publish**, **Unpublish** and **Check-in**. Select rows for actions that operate on existing records; open a name to edit it. Check-in releases a record locked for editing. Back up before deletion or bulk changes and verify the effect on existing product associations.

<h2 id="overview-2">Wrapping details</h2>
<h4 id="field-2">Fields</h4>

- **Wrapping Name:** required name shown for the option.
- **Wrapping Price:** amount for the wrapping. Check the displayed price and tax with the shop's product and template settings.
- **Product Name:** select one or more products to associate with this wrapping.
- **Category Name:** select a category to make the wrapping available to matching products.
- **Wrapping Image:** optionally upload an image with a lowercase `.jpg`, `.jpeg`, `.gif` or `.png` extension. The editor displays an existing image when available. An upload failure may not prevent the record from being saved, so reopen it and check that the new image is actually available.
- **Use for all products:** defaults to Yes for a new record. Choose No when the option should apply only to the selected products or category.
- **Published:** defaults to Yes for a new record. An unpublished wrapping is not eligible in the inspected product renderer.

For the inspected product renderer, a published wrapping is eligible when it is assigned to the product, matches one of its categories, **or** is enabled for all products. Product and category selections are alternatives, not an additional restriction on an all-products wrapping.

<h4 id="action-2">Saving</h4>

Use **Save** to save and close, **Save & New** to save and start another record, or **Save** without closing when the apply action is available. Reopen the record to check the stored settings. Cancel or close to leave without saving pending edits.

<h2 id="working">Using wrappings</h2>
<h4 id="create">Create a wrapping</h4>

1. Select **New**, provide a name and price, and choose an image if needed.
2. Select the intended products or category, or enable use for all products. Set the publication state and save.
3. Check associations on a disposable product before using the option in a live shop.

<h4 id="show">Show wrapping on the storefront</h4>

The product renderer supports a named wrapper template reference, for example `{wrapper_template:My wrapping template}`, where the name matches an existing wrapper template. Wrapper templates support `{wrapper_dropdown}`, `{wrapper_image}`, `{wrapper_price}` and `{wrapper_add_checkbox}`. Back up templates before editing and verify the rendered control with the actual product template. See [template management](chapters/customization/template.md).

<h4 id="how-to">Test a wrapping</h4>

Using disposable products and a mocked or offline payment, choose a wrapping on the product page and check the cart, checkout and saved order. Compare matching and nonmatching products, quantities, mixed carts, price and VAT, including the result without a wrapping. Do not rely on an old example price or assume all templates expose the control.

When wrapping is selected, the displayed product price without VAT may include VAT on the wrapping. Verify both tax-inclusive and tax-exclusive displays and compare them separately with checkout.
