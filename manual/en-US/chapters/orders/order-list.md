## Order list

Open **Orders** in redSHOP administration to find orders and review their details. Order status and payment status are separate; an order status does not by itself prove a payment was received.

<h2 id="listing-screen">Order management</h2>

The current list displays order, customer, date, status, payment and totals information. Available integrations and controls vary with configuration and permissions. Treat customer information and exports as sensitive.

<h4 id="filters">Filters</h4>

Search by order ID (the form default), order number, full name, email or phone. **All** searches these values and referral code, not every order field. The filter form also provides from/to dates, order status and payment status. Test boundaries and selected filters in an isolated installation.

The end-date filter currently includes the following midnight and uses a fixed 24-hour interval, which can be incorrect on daylight-saving transition days. Verify boundary orders separately when reviewing results.

<h4 id="actions">Actions</h4>

The toolbar provides a new-order link, multiple-order print, bulk status dialog, export options and deletion. The individual-order status dialog has separate order/payment status and notification controls. Review selections and notification settings before saving; test plugin, email and accounting effects with disposable orders.

Exports include basic, full, GLS and GLS Business options. The toolbar requires selections for some options but not full export; do not assume all exports contain only selected orders. Verify output and permissions with non-sensitive test data. PDF printing requires an available PDF plugin.

Before deleting an order, review retention obligations, associated records, payment, stock and accounting effects; take a backup. Never mark an online payment Paid without verified provider evidence. An authorized administrator can record verified offline payments according to the shop's procedures.
