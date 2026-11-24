## Wrappings

Wrappings allow a shop to offer optional product packaging. Open **Wrappings** in redSHOP administration to manage the available records.

<h2 id="overview-1">Wrapping list</h2>
<h4 id="field-1">Columns</h4>

The list includes the wrapping name, image, price, use-for-all-products setting and publication state. Open a name to edit the record.

<h4 id="action-1">Actions</h4>

Use the available actions to create, edit, publish, unpublish or delete wrappings. Back up before bulk changes and verify the effect on existing product associations.

<h2 id="overview-2">Wrapping details</h2>
<h4 id="field-2">Fields</h4>

Enter the required name and choose the price, image, products, category, use-for-all-products setting and publication state. Product selection supports multiple products. Verify the effect of category and all-products settings with both matching and nonmatching products.

<h4 id="action-2">Saving</h4>

Save and reopen the record to check the stored settings. Cancel or close to leave without saving pending edits.

<h2 id="working">Using wrappings</h2>
<h4 id="create">Create a wrapping</h4>

1. Select **New**, provide a name and price, and choose an image if needed.
2. Select the intended products or category, or enable use for all products. Set the publication state and save.
3. Check associations on a disposable product before using the option in a live shop.

<h4 id="show">Show wrapping on the storefront</h4>

The product renderer supports a named wrapper template reference, for example `{wrapper_template:My wrapping template}`, where the name matches an existing wrapper template. Wrapper templates support `{wrapper_dropdown}`, `{wrapper_image}`, `{wrapper_price}` and `{wrapper_add_checkbox}`. Back up templates before editing and verify the rendered control with the actual product template. See [template management](chapters/customization/template.md).

<h4 id="how-to">Test a wrapping</h4>

Using disposable products and a mocked or offline payment, choose a wrapping on the product page and check the cart, checkout and saved order. Compare matching and nonmatching products, quantities, mixed carts, price and VAT, including the result without a wrapping. Do not rely on an old example price or assume all templates expose the control.
