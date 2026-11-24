## Stockroom management

Stockrooms define locations used for stock and delivery information. Enable stockroom functionality in redSHOP configuration as appropriate and test on an isolated shop before editing live quantities.

<h2 id="listingScreen">Stockroom list</h2>
<h4 id="field">Fields</h4>

The editor contains a required name, minimum stock amount, delivery-time unit (days or weeks), minimum and maximum delivery times, show-on-stock-list and published options, plus a description. The minimum stock amount and description are hidden from the list by the form definition; open the record to edit them.

The optional `redshop_product` Stockroom Status plugin can check ordered products and their variants against a stockroom's minimum and prepare an administrator email. Its source compares the stock amount **at or below** the minimum. Install/enable and configure the plugin, a suitable template and administrator email; verify event dispatch, recipients and threshold boundaries using safe test accounts. The stockroom field alone does not guarantee a notification.

<h4 id="action">Actions</h4>

The list has a search field and a listing action for [inventory](chapters/stockroom/inventory-stockroom.md), alongside shared record-management actions subject to permissions. Check copy, publication and deletion on disposable records; do not assume deletion preserves inventory associations.

<h2 id="workingStock">Working with stockrooms</h2>
<h4 id="createItems">Create a stockroom</h4>

1. Open **Stockroom → Stockroom List** and select New.
2. Enter the name, delivery values and minimum stock; choose publication and stock-list visibility.
3. Save, reopen the record and check the values. Add stock through inventory or an existing product's stockroom controls.
4. Verify storefront delivery information, actual stock calculations and notification behavior on an isolated installation.
