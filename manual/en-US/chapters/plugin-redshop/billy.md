## Billy accounting integration

The current source includes the optional `redshop_integrations/billy` plugin. It can communicate with Billy for accounting operations including customers, products, invoices and cashbook entries. Source availability does not establish provider API compatibility or safe accounting behavior for your installation.

### Prepare and configure

1. Confirm with the provider and extension distributor that your plugin, account, API and Joomla/PHP versions are supported. Obtain an authorized test account and a disposable copy of the shop. Agree on a test plan with the accounting administrator.
2. Install an approved package if needed and locate the Billy integration plugin in Joomla's plugin manager. Configure its access token only in the isolated environment. The account and tax selectors call the integration when rendering, so opening the configuration can make provider requests.
3. Review the invoice booking choice: direct, manual or on selected order statuses. Select statuses and verify the actual trigger before enabling automatic booking. Invoice creation, booking and cashbook operations have accounting consequences.
4. With the accountant, select the appropriate sales accounts and tax groups for taxable and non-taxable sales, the default bank account and fee account. Review the no-VAT identifier, cashbook option, attribute handling and country selection. Do not copy example account IDs into a different business.
5. Review the payment-specific terms and cashbook account settings, invoice-email subjects and bodies, reminder settings and any beta options. Do not enable reminders or scheduled actions without an approved recipient and process.

Keep tokens, invoice details and customer data out of source control, screenshots and shared logs. Protect Joomla administrator and backup access.

### Test before live use

Using disposable customers, products and orders, compare both systems after each action. Check account and tax mappings, domestic and international addresses, discounts and shipping, invoice draft and booking modes, payment-specific settings, cashbook entries, email, reminders, retries, duplicates, cancellation and reconciliation. Test failures and recovery without assuming an unsuccessful response means no remote change occurred.

The plugin has separate invoice creation and booking calls; a cashbook path checks the order payment status and configured cashbook setting. Those source paths are not proof that all payment and accounting scenarios are correct. Resolve discrepancies with the provider and accountant before authorizing production use.
