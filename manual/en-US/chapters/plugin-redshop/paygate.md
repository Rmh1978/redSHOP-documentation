## PayGate payment plugin

The optional `paygate` redSHOP payment plugin is a legacy integration. The existence of its source and manifest does not prove compatibility with the current provider service or Joomla version. Confirm the exact package and provider requirements before adopting it.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest includes provider identification and protected key settings, success/failure order statuses, payment adjustments and customer eligibility.
2. Keep credentials in protected configuration; do not copy them into documentation, screenshots or logs. Confirm with the provider how to use an authorized test environment; the inspected manifest does not expose a test-mode switch.
3. Test success, pending, failure and repeated notifications with disposable orders, checking amounts, currencies, authentication and order/payment statuses separately. A receipt or browser return is not proof of verified payment.
4. Complete a compatibility and security review before a production decision. Do not use real card details for testing.

Provider behavior, callbacks and Joomla checkout have not been tested here.

### Plugin settings

- **PayGate ID and Encryption Key:** both start blank. The key field is defined as text; restrict configuration access and do not assume the field masks or encrypts the stored value.
- **Success and failure order statuses:** select published shop statuses. The manifest defaults are codes `C` and `P`; check their meanings and actual transitions.
- **Payment operand, price and discount type:** operand defaults to `-`, price to blank and type to Percentage; Total is the fixed-amount option. Independently verify the adjustment and rounding in checkout.
- **Private Person, Business and Shopper Group:** both customer-type switches default to Yes and the shopper-group field to `0`. Test eligible and ineligible customers and saved selections.
- **E-conomic payment conditions and layout IDs:** optional accounting mappings, initially blank. Verify them with the integration.

These are manifest defaults for a new configuration, not necessarily settings already saved in an existing shop. Reopen the plugin after saving and use only provider-authorized tests.
