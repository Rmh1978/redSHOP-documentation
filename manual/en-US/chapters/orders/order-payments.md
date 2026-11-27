## Order payments and the payment ledger

The order detail page of recent redSHOP versions includes a **Payment overview** and a **Payment transactions** table. They are calculated from the payment ledger, a local table (`#__redshop_payment_transactions`) that records each payment attempt and the amounts the payment provider has verified. The overview is calculated centrally; the page never adds up ledger rows itself.

The shared ledger is used by **Flatpay**, **PayPal Credit Card**, **Stripe** and **Mollie iDEAL** on their implemented payment paths. This does not mean every gateway supports every action or that an older payment has verified ledger amounts. The available order-page actions depend on the saved gateway, payment state and the *Edit* permission for redSHOP.

<h2 id="payment-overview">Payment overview</h2>

The overview shows the current order total and these amounts in the order's currency:

| Row | Meaning |
|---|---|
| Authorized, not captured | Money reserved at the provider but not yet taken. |
| Captured | Money taken from the customer. |
| Refunded | Money returned. |
| Net captured | Captured minus refunded. |
| Total payment coverage | Valid authorization plus net captured amount. |
| Missing payment coverage | Order total minus coverage; shown in red when above zero. |
| Surplus payment coverage | Shown only when coverage exceeds the order total. |
| In progress | Number of payment attempts and operations that are not finished. |
| Pending payment amount | Balance reserved by active payment attempts, when present. |
| Amount requiring review | Amount associated with an unresolved provider outcome, when present. |

The badge next to the heading shows the status: Fully captured, Fully authorized and Paid (not verified in the ledger) are green; Partially covered and Awaiting payment are yellow; Reconciliation required, Captured above the order total, Authorization expired and Payment not verified are red; other states are grey.

When the order was marked Paid before ledger evidence was available, or a payment or operation has an unknown result, the overview identifies unverified amounts. Legacy Paid coverage is an assumption, not a verified capture. If the ledger cannot be read, the page displays a warning and financial actions are unavailable. Investigate unknown outcomes with the provider before attempting another payment or money movement; payment-link eligibility differs by gateway.

<h2 id="payment-transactions">Payment transactions</h2>

Each row is one payment attempt with the provider and handle, the provider transaction ID, status, amount, authorized, captured and refunded amounts, and the created, last-verified and (for open attempts) expiry times. The kind is one of Original payment, Supplementary payment, Earlier payment (imported), Marked paid outside the gateway, or Payment attempt. An unresolved operation displays its type, status and provider operation ID when available. An available reason is shown beside the attempt; unknown reason codes show a generic pointer to the payment log.

<h2 id="payment-actions">Payment actions</h2>

The payment action forms use POST with a security token. The page asks for confirmation on capture, refund, void and reconciliation controls. Those actions are logged when the gateway returns an action result; status refresh is not written to order history. Early validation failures may not create a history entry. Use a provider test mode first.

- **Capture** takes an eligible authorization for a specific attempt. **Capture all authorizations** is an order-level Flatpay action and is hidden while an operation is unresolved. The amount is decided by the ledger, not typed by the administrator. Flatpay supports reduced capture; PayPal Credit Card requests a full authorization capture, so do not assume a reduced capture is available after lowering an order total.
- **Cancel authorization** (void) releases an authorized amount.
- **Refund** returns captured money. The amount field is pre-filled with the refundable amount. Leave it empty to refund the whole captured amount; an entered amount is used exactly, must be positive and must not have more decimals than the currency, otherwise the refund is rejected and nothing is sent.
- **Update gateway status** asks the provider for the current state of an attempt and does not add an order-history entry.
- **Reconcile unresolved operation** checks an unknown operation where the
  installed gateway and operation support reconciliation. It is not available
  or guaranteed to resolve every unknown result. Check the provider first and
  follow the gateway's instructions if the result remains unresolved.
- **Retry capture** (Flatpay only) is a separate button that retries the capture when the order's status is one of the plugin's configured capture statuses.

Flatpay and PayPal Credit Card support the individual capture, refund, void and reconciliation actions on eligible attempts; only Flatpay exposes order-level capture and reconciliation controls. Stripe and Mollie iDEAL use the ledger for their implemented paths but do not expose these order-page actions through the same capability gates. Investigate an unresolved attempt with the provider rather than retrying a money-moving operation; the available reconciliation action depends on the installed version and operation.

<h2 id="payment-link">Payment link</h2>

When the order is eligible and you have edit permission, **Send payment link for <amount>** appears; **Copy payment link** is also available when a link was generated. Eligibility depends on the gateway and payment state, not just an outstanding balance. The link identifies the order with its encryption key; the amount and gateway are calculated on the server from the order's saved payment method, and opening the link does not start a payment: the customer must confirm on the checkout page. Treat the link as a secret, because it gives access to the order's payment page.

The send action uses the plugin's existing "payment not confirmed" status mail without changing the order status. Configure that status and create its order status mail template containing `{order_payment_url}` or `{payment_link}`; check mail settings if sending fails. A link is unavailable for a cancelled order, a zero total, a missing order key or a catalogue. Flatpay calculates remaining coverage and blocks unresolved coverage; additional payments after coverage require the plugin's *Allow multiple payments per order* option, disabled by default. Gateways without remaining-balance support use the saved Unpaid status and their full-order link path instead; do not assume a link charges only an outstanding balance for those gateways.

<h2 id="order-total-changes">Changing an order total</h2>

Saving an order with a different total never captures, refunds or cancels anything. For ledger-backed orders the history receives an entry that states the old and new totals and the verified coverage, together with the amount that is now missing or in surplus. Resolve the difference with the actions above.

<h2 id="payment-save-pay">Administrator "Save + Pay"</h2>

When an order is created by an administrator with **Save + Pay**, the selected payment plugin's response is accepted only if it reports a payment status of Paid, Partial Paid or Unpaid (Partial Paid only for gateways that support remaining balances). Any other response is stored as Unpaid, a warning is shown and the event is logged. The order is no longer marked Paid merely because the plugin answered *Success*.

<h2 id="payment-verify">Source basis and limits</h2>

Based on selected source paths at Core `ff72aba693`: `OrderController::paymentAction` and `retryFlatpayCapture`, `PaymentCoverage`, `PaymentLink`, `PaymentCapabilities`, gateway ledger implementations and the order edit template. This is a partial source review, not a complete payment audit. Joomla, provider and mail behavior were not tested in a runtime; verify actions with disposable orders and provider test accounts before use. GitHub `develop` and the local `origin/develop` tracking reference contain a later PayPal change that is not checked out.
