## Paymill payment plugin

The optional `rs_payment_paymill` plugin is a legacy integration. Confirm the exact package, current provider availability and protocol, and Joomla compatibility before considering it for use.

[Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest includes environment, provider keys, success/failure/capture statuses, payment adjustments and customer eligibility. Its environment defaults to Sandbox; explicitly verify the saved setting and provider test facilities. Keep credentials in protected configuration, not documentation or logs.

### Plugin options

Basic options include an adjustment operand and amount, a total/percentage selector, environment, public and private keys, and success, failure and capture order statuses. The manifest defaults the operand to `-`, the amount to empty and the adjustment type to Percentage. Its status defaults are codes `C`, `P` and `S` respectively; confirm that suitable statuses exist and test actual transitions. The key fields are defined as text; restrict access to the plugin configuration and do not assume the fields mask or encrypt their values.

Advanced options include private and business customer switches, shopper groups and e-conomic payment terms and layout. The manifest defaults both customer switches to Yes, shopper group to `0`, terms to `2` and layout to blank; both provider key fields start blank. Confirm saved values, customer eligibility and accounting mappings for the installed shop.

Test successful, pending, failed and repeated notifications, amounts, currency, capture and order/payment status using disposable orders and provider-authorized tests. A return page or receipt is not proof of payment. Provider, callbacks and Joomla checkout have not been tested here; do not use real card details for testing.
