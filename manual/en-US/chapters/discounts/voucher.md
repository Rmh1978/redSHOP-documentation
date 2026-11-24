## Vouchers

Vouchers are code-based discounts with product associations. Test with disposable products and mock orders before offering them to customers.

<h2 id="overview-1">Voucher list</h2>
<h4 id="field-1">Fields</h4>

The list includes code, amount, type, dates, free shipping, publication and amount left.

<h4 id="action-1">Actions</h4>

Create, edit, publish, unpublish and delete records as permitted. Back up before changing active vouchers.

<h2 id="overview-2">Voucher details</h2>
<h4 id="field-2">Fields</h4>

Code is required; amount is a floating-point value and type is Total or Percentage. The form also provides optional start/end dates, free shipping, publication, amount left and a **required** multiple product selector. Do not assume an empty product selection applies to every product: the current editor requires a selection.

<h4 id="action-2">Save</h4>

Save and reopen the voucher to check dates, quantities and selected products.

<h2 id="working">Working with vouchers</h2>
<h4 id="create">Create</h4>

Enable the relevant Discount configuration switches, create a disposable voucher, select products and verify its saved settings.

<h4 id="how-to">Use in the storefront</h4>

Apply the test code using the voucher control provided by the active cart or checkout. Test matching and nonmatching products, quantities, usage counts, expiration, free shipping and stacking. Check the result with independently calculated totals.

<h4 id="checkout">Checkout</h4>

Use an offline or mocked payment and inspect the saved order and voucher usage. Test invalid, unpublished and expired codes and repeated redemption; actual behavior and Joomla compatibility are not established by the form alone.
