## Stockroom management

Stockrooms define locations used for stock and delivery information. Enable stockroom functionality in redSHOP configuration as appropriate and test on an isolated shop before editing live quantities.

<h2 id="listingScreen">Stockroom list</h2>
<h4 id="field">Fields</h4>

The list shows each stockroom's name, delivery unit and range, stock-list visibility and published state. Search matches text within the name. The name heading is sortable; the list defaults to ID order.

The editor contains a required name, minimum stock amount, delivery-time unit (days or weeks), minimum and maximum delivery times, show-on-stock-list and published options, plus a description. The minimum stock amount and description are hidden from the list by the form definition; open the record to edit them.

Minimum and maximum delivery times default to zero; new stockrooms default to Published and Show on stock list. The configured delivery-unit default does not match either available option, so explicitly select Days or Weeks before saving and verify the saved value.

The inspected save model rejects a minimum stock amount of zero or less,
negative minimum delivery time, and a minimum delivery time greater than the
maximum. Enter a positive minimum stock amount and non-negative delivery
values with the minimum no greater than the maximum. Check the saved record
and any validation messages in your installed version.

Delivery output in Weeks mode is under investigation: the inspected product
helper divides the saved values by seven and discards fractions. Verify the
displayed range for representative values and templates on an isolated shop
before relying on it for customer delivery estimates.

The inspected product delivery lookup can also use an unpublished stockroom
that still has stock associations. Verify displayed estimates after
unpublishing a stockroom; publication alone may not exclude its delivery
values from that lookup.

The optional `redshop_product` Stockroom Status plugin can check ordered products and their variants against a stockroom's minimum and prepare an administrator email. Its source compares the stock amount **at or below** the minimum. Install/enable and configure the plugin, a suitable template and administrator email; verify event dispatch, recipients and threshold boundaries using safe test accounts. The stockroom field alone does not guarantee a notification.

<h4 id="action">Actions</h4>

Search matches the stockroom name. Use the listing action for [inventory](chapters/stockroom/inventory-stockroom.md) and shared record-management actions subject to permissions. Deleting a stockroom also deletes its product and product-attribute stockroom associations; back up and review the consequences before deleting.

<h2 id="workingStock">Working with stockrooms</h2>
<h4 id="createItems">Create a stockroom</h4>

1. Open **Stockroom → Stockroom List** and select New.
2. Enter the name, delivery values and minimum stock; choose publication and stock-list visibility.
3. Save, reopen the record and check the values. Add stock through inventory or an existing product's stockroom controls.
4. Verify storefront delivery information, actual stock calculations and notification behavior on an isolated installation.
