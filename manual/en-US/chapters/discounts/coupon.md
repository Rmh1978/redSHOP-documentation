## Coupons

Coupons provide a code-based discount. Before offering them to customers, test the current checkout with disposable codes and mock orders. A known coupon-count issue can reject a coupon with one use remaining.

<h2 id="overview-1">Coupon list</h2>
<h4 id="coupon-1">Fields</h4>

The list includes code, type, value, dates, effect, amount left and publication state.

<h4 id="actions-1">Actions</h4>

Create, edit, publish, unpublish and delete coupons as permitted. Back up before changing active codes.

<h2 id="overview-2">Coupon details</h2>
<h4 id="coupon-2">Fields</h4>

Code and value are required; type is fixed total or percentage. The form provides optional start/end dates, global or user-specific effect, user selection for user-specific coupons, subtotal, free shipping, amount left and published state. Test user restrictions, time zones, shipping and stacking with your actual configuration.

<h4 id="actions-2">Save</h4>

Save and reopen the coupon to verify its values and selected users.

<h2 id="working">Working with coupons</h2>
<h4 id="configuration">Configuration</h4>

The Discount configuration includes a general discount switch, coupon and voucher switches, discount type and an option governing already-discounted products. Check the settings and active checkout template together.

<h4 id="create">Create</h4>

Create a disposable code, choose type, value, effect, date range and usage count, then save. Do not reuse a real customer code for testing.

<h4 id="apply">Apply in the cart</h4>

Enter the code in the active cart or checkout and compare the applied discount, shipping and totals with independently calculated expectations. Test invalid, unpublished, expired and user-specific codes, counts 0, 1 and 2, repeated use and discounted products.

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
