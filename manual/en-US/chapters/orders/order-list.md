## Order list

Open **Orders** in redSHOP administration to find orders and review their details. Order status and payment status are separate; an order status does not by itself prove a payment was received.

<h2 id="listing-screen">Order management</h2>

The current list displays order, customer, date, status, payment and totals information. Available integrations and controls vary with configuration and permissions. Treat customer information and exports as sensitive.

In the payment column, the payment method and stored payment status (Paid, Unpaid, Partial paid or Cancelled) are shown first. A second line can show payment coverage, such as Fully captured, Fully authorized, Partially covered, Awaiting payment, Authorization expired, Refunded or Reconciliation required. Verified missing or surplus amounts are shown when available. Green indicates full authorization or capture; red indicates reconciliation, excess capture, expired authorization or an unverified payment.

An older Paid order without verified ledger evidence can show **Paid (not verified in the payment ledger)** in blue; this is not proof of capture. Other orders without ledger evidence may also show a coverage status. If the ledger cannot be read, the list displays a warning and coverage lines may be unavailable. Compare the stored status with the [payment overview](chapters/orders/order-payments.md), and investigate uncertain payments with the provider before shipping or refunding.

Depending on the installed integrations, the row can also show e-conomic or Billy invoice controls and status, a PacSoft tracking link, a customer-note indicator and a per-order SMS dialog. Invoice booking and SMS send data to external services; use test data until you have verified the integration.

<h4 id="filters">Filters</h4>

Search by order ID (the form default), order number, full name, email or phone. **All** searches these values and referral code, not every order field. The filter form also provides from/to dates (format `dd-mm-yyyy`), order status, payment status and **Payment coverage**. Test boundaries and selected filters in an isolated installation.

The search removes spaces from the entered text. For names it also removes spaces from the joined first and last names, but it does not normalize spaces in stored phone numbers or order numbers. If an exact-looking search misses an order, try a distinctive part without spaces or search by order ID.

**Payment coverage** filters use only the local payment ledger (`#__redshop_payment_transactions`); they never contact a payment provider. Orders without ledger rows, such as orders created before the ledger existed or paid offline, match none of these options:

| Option | Matches orders that have |
|---|---|
| Missing payment coverage | At least one ledger row, are not cancelled (status `X`), and whose verified coverage is below the order total in the shop currency's minor units. Verified rows are authorized, settled, partially refunded or reconciling, minus refunds. |
| Awaiting payment | A ledger attempt in `creating` or `pending` status. |
| Authorized, not captured | A ledger attempt in `authorized` status. |
| Authorization expired | An expired attempt and no verified row. |
| Reconciliation required | An `unknown`, `reconciling` or `review_required` attempt. |

The filter conditions are a SQL approximation of the coverage service. The status shown in each row is always calculated by that service, so a filtered row can show a different status in rare combinations, for example when several attempts exist. Compare both before acting.

The end-date filter currently includes the following midnight and uses a fixed 24-hour interval, which can be incorrect on daylight-saving transition days. Verify boundary orders separately when reviewing results.

<h4 id="actions">Actions</h4>

The toolbar provides a new-order link, multiple-order print, bulk status dialog, export options and deletion. The individual-order status dialog has separate order/payment status and notification controls. Review selections and notification settings before saving; test plugin, email and accounting effects with disposable orders.

Exports include basic, full, GLS and GLS Business options. The toolbar requires selections for some options but not full export; do not assume all exports contain only selected orders. Verify output and permissions with non-sensitive test data. PDF printing requires an available PDF plugin.

Before deleting an order, review retention obligations, associated records, payment, stock and accounting effects; take a backup. Never mark an online payment Paid without verified provider evidence. An authorized administrator can record verified offline payments according to the shop's procedures.
