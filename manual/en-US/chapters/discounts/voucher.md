## Vouchers

Vouchers are code-based discounts with product associations. In Joomla administration, open **Components → redSHOP → Discount → Vouchers**. Test with disposable products and mock orders before offering them to customers. The current voucher lookup can fail for a logged-in customer with a product-linked voucher; verify the intended checkout flow before advertising a code.

<h2 id="overview-1">Voucher list</h2>
<h4 id="field-1">Fields</h4>

The list includes code, amount, type, dates, free shipping, publication and amount left. Search by code or enter `id:` followed by the numeric ID. Filter by type or free-shipping setting and sort using the available column headings; the default is ID ascending.

The list formats amounts as currency even for Percentage vouchers. Open the record and check **Type** and **Amount** together rather than interpreting the list amount as a fixed discount.

The installed schema permits empty (`NULL`) dates, but an isolated test of the list renderer failed on a null date. Actual saved records and Joomla list behavior have not been verified. Investigate a list failure on an isolated copy rather than editing live database records.

When inline editing is enabled and your account can edit an unlocked record, the list offers inline changes to the code, amount and amount left. Open the code to edit all fields.

<h4 id="action-1">Actions</h4>

Create, edit, publish, unpublish, check in and delete records as permitted. Select records before bulk actions; check in a locked voucher only after confirming nobody is editing it. Back up before changing active vouchers.

<h2 id="overview-2">Voucher details</h2>
<h4 id="field-2">Fields</h4>

| Field | Purpose and default |
|---|---|
| **Code** | Required code entered by the customer. Choose a unique code: the save check compares it against both vouchers and coupons. |
| **Amount** | Discount value, default `0.00`. Its meaning depends on Type. Check the calculated cart and order totals before offering a code. |
| **Type** | **Total** (default) or **Percentage**. For example, enter `10` for 10%, not `0.10`. |
| **Start date**, **End date** | Validity boundaries. The save path rejects a start later than the end, but can also reject a start date with an empty end date. The inspected lookup accepts the start and end instants inclusively; verify the configured time zone and actual behavior in an isolated shop. |
| **Free shipping** | **No** by default. **Yes** sets the cart free-shipping flag when the voucher is applied; verify the available shipping methods. |
| **Published** | **Published** by default. Unpublish an unfinished voucher. |
| **Amount left** | Remaining usage quantity, initially `0`. The inspected lookup requires a value greater than zero. Set a suitable positive count and verify how product quantities and completed orders affect it. |
| **Products** | Required multiple product selector. Select the eligible products; do not assume an empty selection applies to every product. |

<h4 id="action-2">Save</h4>

Use **Save**, **Save & Close** or **Save & New**, as available. **Cancel/Close** leaves the editor without saving current changes. Reopen the voucher to check dates, quantities and selected products.

<h2 id="working">Working with vouchers</h2>
<h4 id="create">Create</h4>

In **Configuration → Price**, enable discounts and vouchers, and review the combination settings. For a disposable example, create a code `TESTVOUCHER`, choose **Percentage**, enter `10`, select the intended test products and a positive **Amount left**, then save and reopen it. The cart template must provide a discount-code control.

<h4 id="how-to">Use in the storefront</h4>

Add an eligible test product to the cart and submit the code through the available discount-code control. For an eligible product subtotal of 100, a 10% discount would be 10 before other adjustments; compare the actual cart and order totals with your independently calculated expectations. Product quantities, other discounts, tax and shipping can change the result.

<h4 id="checkout">Checkout</h4>

Use an offline or mocked payment and inspect the saved order and voucher usage. Test invalid, unpublished and expired codes and repeated redemption; actual behavior and Joomla compatibility are not established by the form alone.
