## Billy accounting integration

The current source includes the optional `redshop_integrations/billy` plugin. It can communicate with Billy for accounting operations including customers, products, invoices and cashbook entries. Source availability does not establish provider API compatibility or safe accounting behavior for your installation.

### Prepare and configure

1. Confirm with the provider and extension distributor that your plugin, account, API and Joomla/PHP versions are supported. Obtain an authorized test account and a disposable copy of the shop. Agree on a test plan with the accounting administrator.
2. Install an approved package if needed and locate the Billy integration plugin in Joomla's plugin manager. Configure its access token only in the isolated environment. The account and tax selectors call the integration when rendering, so opening the configuration can make provider requests.
3. Review the invoice booking choice: direct, manual or on selected order statuses. Select statuses and verify the actual trigger before enabling automatic booking. Invoice creation, booking and cashbook operations have accounting consequences.
4. With the accountant, select the appropriate sales accounts and tax groups for taxable and non-taxable sales, the default bank account and fee account. Review the no-VAT identifier, cashbook option, attribute handling and country selection. Do not copy example account IDs into a different business.
5. Review the payment-specific terms and cashbook account settings, invoice-email subjects and bodies, reminder settings and any beta options. Do not enable reminders or scheduled actions without an approved recipient and process.

For a new configuration, the manifest defaults invoice booking to **Directly book** and **Use cashbook** to Yes. It defaults reminders and the overdue scheduled option to No. Existing saved settings may differ: check them before enabling the plugin or triggering an order. The status selector lists published redSHOP order statuses, with `S` as its manifest default; verify the selected status and booking mode together.

The payment settings provide separate terms and cashbook accounts for the supported payment categories. The email settings include separate invoice subjects and bodies; reminder settings include three subject/body pairs, overdue limit and fee fields. Review the actual text and accounting rules with the accountant rather than relying on the placeholder defaults.

For a new configuration, the inspected manifest also declares these defaults:

| Setting | Default and considerations |
| --- | --- |
| Access token and account/tax selectors | Empty; configure only with authorized credentials and accountant-approved mappings. The token field is a text field. |
| Attribute handling | Defaults to No; alternatives are to store attributes as products or store attributes and products in Billy. Verify resulting invoice lines. |
| Short Error Message / country | The error-message option defaults to Yes; country defaults to the customer's country rather than the shop's. Restrict access to error information. |
| Bank-transfer and EAN payment terms | Default to None; days and cashbook-account fields are empty. Other payment categories have separate cashbook-account selectors. |
| Invoice email subjects and bodies | Default to `Invoice` and `Invoice for your order` for the supplied categories. Review before sending. |
| Reminder limit and fees | Overdue limit defaults to `0`, fee fields are empty, and reminder text contains placeholders. Reminders and scheduled overdue processing default to No. |
| Beta EAN settings | The separate authentication token and EAN payment-method selector default to empty; EAN invoice booking and reminder email default to No. Confirm the provider workflow before enabling either option. |

Keep tokens, invoice details and customer data out of source control, screenshots and shared logs. Protect Joomla administrator and backup access.

### Cashbook on the order list

For a booked Billy invoice, the order list can show the amount already registered and offer **Register [amount] in Billy Cashbook** when verified payment funds are available and you have edit permission. The displayed availability is calculated locally; the registration also checks the invoice and its balance with Billy. An authorization alone is not a captured payment.

An unknown earlier amount, unresolved operation or conflicting payment records requires reconciliation before another registration. If a request's outcome is uncertain, check Billy with the accountant before retrying; an error or missing response does not prove that no entry was created. Available controls depend on the installed version and order state.

### Test before live use

Using disposable customers, products and orders, compare both systems after each action. Check account and tax mappings, domestic and international addresses, discounts and shipping, invoice draft and booking modes, payment-specific settings, cashbook entries, email, reminders, retries, duplicates, cancellation and reconciliation. Test failures and recovery without assuming an unsuccessful response means no remote change occurred.

The plugin has separate invoice creation, booking and cashbook calls. Those source paths are not proof that all payment and accounting scenarios are correct. Resolve discrepancies with the provider and accountant before authorizing production use.
