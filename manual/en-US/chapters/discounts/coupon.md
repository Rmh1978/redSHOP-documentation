## Coupons

Coupons provide a code-based discount. In the Joomla administrator, open **Components → redSHOP → Discount → Coupons**. Before offering a coupon to customers, test checkout with disposable codes and mock orders. A known coupon-count issue can reject a coupon with one use remaining.

<h2 id="overview-1">Coupon list</h2>
<h4 id="coupon-1">Fields</h4>

The list shows the coupon code, type, value, start and end dates, effect, amount left and publication state. Search by code, or use the type and effect filters. Column headings support sorting; the default is ID ascending.

When inline editing is enabled and your account can edit an unlocked record, the list offers inline changes to the code, value and amount left. Publication can also be changed from the list when you have edit permission. Open the code to edit the complete record.

The list's date display may fail if a coupon has a null start or end date.
If the list fails, ask your maintainer to investigate the affected records
and take a backup before changing data; do not make direct database edits as a
workaround.

<h4 id="actions-1">Actions</h4>

Depending on your permissions, use **New**, **Delete**, **Publish**, **Unpublish** and **Check-in**. Select records before applying a bulk action. Check in a locked coupon only after confirming nobody is editing it; back up before deleting active codes.

<h2 id="overview-2">Coupon details</h2>
<h4 id="coupon-2">Fields</h4>

| Field | Purpose and default |
|---|---|
| **Coupon Code** | Required code entered by the customer. Choose a unique code: the save check compares it against both coupons and vouchers. |
| **Type** | **Total** (default) is a fixed discount; **Percentage** calculates a percentage of the eligible subtotal. |
| **Value** | Required discount amount or percentage, according to Type. The form displays `0.0` by default, but the table validation rejects an empty or zero value. Enter a positive value: the inspected cart path rejects a negative calculated discount. For example, enter `10` for 10%, not `0.10`. Verify currency and rounding in your shop. |
| **Start date**, **End date** | Validity boundaries using the configured date format and time zone. The inspected save path rejects a start later than the end, but can also reject a start date with an empty end date. Test your intended range and actual redemption in an isolated shop. |
| **Effect** | **Global** (default) or **User specific**. The latter requires a logged-in customer in the inspected checkout path. |
| **User** | Shown for User specific coupons. Select the intended customer. The custom selector is configured for a single selection; saving and redemption still require verification in your installation. Do not assume the restriction is enforced correctly. |
| **Subtotal** | Defaults to `0.0`. The cart discount calculation removes a coupon when the product subtotal is below this value. Verify the threshold and tax treatment with your own cart. |
| **Free shipping** | **No** by default. **Yes** sets the cart's free-shipping flag when the coupon is applied; verify the available shipping methods and final total. |
| **Amount left** | The remaining-use count, initially `0`. The current checkout path rejects counts of `1` as well as `0`; see the warning below. |
| **Published** | **Yes** by default. Unpublished codes should not be offered; verify rejection in the storefront. |
| **Unused Amount** | A read-only value shown for User specific coupons. It reads a transaction value; do not assume it is a complete balance or per-user total without verification. |

The current source rejects a coupon when its raw value is greater than or equal to the product subtotal excluding VAT, before calculating a percentage discount. This can reject some percentage coupons unexpectedly. Test representative subtotals before offering a code.

<h4 id="actions-2">Save</h4>

Use **Save** to save without leaving, **Save & Close** to return to the list, or **Save & New** to start another record. **Cancel/Close** leaves the editor without saving the current changes. Available actions depend on permissions. Reopen the coupon to verify its values and selected user.

<h2 id="working">Working with coupons</h2>
<h4 id="configuration">Configuration</h4>

In **Configuration → Price**, enable discounts and **Enable Coupons**. The discount type, voucher setting and option for already-discounted products affect combinations. The active cart template also needs to expose the code entry. Check these settings together before advertising a promotion.

<h4 id="create">Create</h4>

For example, create a disposable **Global** coupon called `TEST10`, choose **Percentage**, enter `10` as the value, and set a suitable date range. Set **Amount left** to `2`, then save and reopen the record. This is a test value, not a promise of two usable redemptions: the current checkout path rejects the code when its count reaches `1`. Do not reuse a real customer code or offer a promotion until checkout has been verified.

<h4 id="apply">Apply in the cart</h4>

Add a disposable product to the cart, enter the code in the available coupon field and submit it. For a simple eligible product subtotal of 100, a 10% discount would be 10 before other adjustments; compare the displayed cart, checkout and order totals with your independently calculated expectations. Tax, other discounts and shipping can change the final amount. Test invalid, unpublished, expired and user-specific codes, counts 0, 1 and 2, repeated use and discounted products with mock payments.

**Known issue:** the inspected coupon-application path rejects `amount_left` of 1 as already used. Gift-card mail also creates a coupon with `amount_left` 1. Do not sell or promise redeemable gift cards or single-use coupons based on this path until the separately tracked Core issue is fixed and verified.

<h4 id="unpublish">Unpublish</h4>

Unpublish a disposable code and verify that the cart rejects it.

<h4 id="publish">Publish</h4>

Publish only after validating the code and its conditions.

<h4 id="checkin">Check-in</h4>

Check in a locked record only after confirming nobody is editing it.

<h4 id="edit">Edit</h4>

Review the effects on existing recipients before changing an active code; retest after saving.

<h4 id="delete">Delete</h4>

Back up and check order and recipient implications before deleting a code. Verify behavior using disposable records.
