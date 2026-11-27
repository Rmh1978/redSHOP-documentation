## GiroPay payment plugin

The optional `rs_payment_giropay` plugin is a legacy integration. Confirm the exact package, current provider availability and protocol, and Joomla compatibility before considering it for use.

[Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest includes provider account settings, success/failure/capture statuses, payment adjustments and customer eligibility; it does not expose a test-mode switch. Keep credentials in protected configuration and confirm an authorized provider test environment.

With disposable orders, test successful, pending, failed and repeated notifications, amounts, currency and capture behavior. Review callback authentication and order/payment statuses separately; an order receipt is not proof of payment. Provider, callbacks and Joomla checkout have not been tested here.

### Plugin settings

- **Merchant, Project and Source IDs:** provider account identifiers, initially blank. Confirm the values with the provider.
- **Secret Password:** initially blank and defined as a text field. Restrict configuration access; do not assume the field masks or encrypts it.
- **Success, failure and capture statuses:** select published shop statuses. The manifest defaults to codes `C`, `P` and `S`; verify their meanings and actual transitions.
- **Payment operand, price and discount type:** the operand defaults to `-`, price to blank and type to Percentage; Total is the fixed-amount option. Independently check the resulting adjustment and rounding.
- **Private Person, Business and Shopper Group:** both customer-type switches default to Yes and the shopper-group field to `0`. Test eligible and ineligible customers and saved selections.
- **Accounting:** the current manifest has no local e-conomic fields. Review the central [e-conomic settings](chapters/e-conomic-integration/setup.md) and any preserved legacy values.

These are manifest defaults for a new configuration, not necessarily settings already saved in an existing shop. Reopen the plugin after saving and use only provider-authorized tests.
