## Product attribute list

Open **Products → Attribute List** in redSHOP administration to find
individual product attributes. This is separate from
[Attribute Sets](chapters/customization/attribute.md), which group reusable
attributes.

### Find an attribute

The list displays publication state, attribute name, product, display type and
ID. Search by attribute name or use `id:` followed by the attribute ID. The
filter form offers product and publication choices; verify the results when
using the product filter, as the inspected input and model state names differ.
Sort by the available headings or use pagination. The model's initial order is
attribute ID ascending, subject to saved list state. The status heading requests
an ordering field that the model does not accept, so check the resulting order
rather than relying on that heading.

The toolbar offers **New**, **Delete**, **Publish** and **Unpublish**, subject
to permissions. Open a name to edit it. Back up the shop before changing
existing options, and test changes with disposable products.

### Attribute details

Select a product, display type (**Dropdown list** or **Radio button**) and
attribute name; these fields are required by the form. The form also offers
**Attribute Required**, **Allow Multiple Property Select**, **Hide Attribute
Price** and **Published**. The first three default to No and the publication
control defaults to Yes.

Save and reopen the entry, then verify its publication state and customer
choices on an isolated shop. The editor's publication field and stored
attribute publication column have different names in the inspected source;
do not assume that changing the editor control persisted without checking.
Attribute properties and their prices require further configuration; see
the [product guide](chapters/product-management/products-redshop.md) and
[attribute set guide](chapters/customization/attribute.md).
