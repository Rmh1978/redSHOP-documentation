## Money Booker payment plugin

The optional `rs_payment_moneybooker` plugin is a legacy payment integration. Confirm the exact package, current provider requirements and Joomla compatibility before considering it for use; historical screenshots are not a current provider setup guide.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest includes provider account settings, language, success/failure order statuses, payment adjustments and customer eligibility. It does not expose a test-mode switch.
2. Keep account credentials in protected configuration, not documentation, screenshots or logs. Confirm an authorized provider test environment and review shopper groups, amounts, currencies and status mappings.
3. Test success, pending, failure and repeated notifications using disposable orders. Verify callback authentication and order/payment statuses separately; an order receipt is not proof of payment.
4. Complete a compatibility and security review before a production decision. Do not use real card details for testing.

Provider compatibility, callbacks and Joomla checkout have not been tested here.

### Plugin settings

- **Pay-to email and password:** both are required and start blank. The password field uses a password input; do not assume that this alone encrypts stored credentials.
- **Language:** English is the manifest default; choose another offered language only after confirming provider support.
- **Success and failure order statuses:** select existing status records. The manifest defaults are codes `C` and `P`; check their meanings and the actual order and payment transitions.
- **Payment operand, price and discount type:** operand defaults to `-`, price to blank and type to Percentage; Total is the fixed-amount option. Independently verify the adjustment and rounding in checkout.
- **Private Person, Business, payment extra fields and Shopper Group:** both customer-type switches default to Yes and the shopper-group field to `0`. Configure and test visibility for matching and nonmatching customers.
- **E-conomic payment terms and layout IDs:** optional accounting mappings, initially blank. Verify them with the integration.

The manifest also supplies hidden credit-card and refund values; these are not ordinary configuration controls. These defaults describe a new configuration, not necessarily settings already saved in an existing shop. Reopen the plugin and verify its saved values.
