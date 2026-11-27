## 2Checkout payment plugin

The optional `rs_payment_2checkout` plugin is a legacy payment integration. Its source and manifest are not evidence that the current provider service, callback protocol or Joomla version is supported. Confirm compatibility with the extension distributor and provider before adoption.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest offers test mode, seller ID, a secret-word field, order statuses, payment adjustments and customer eligibility. Test mode defaults to Yes in the manifest; explicitly confirm the saved setting and provider test environment.
2. Keep provider credentials in protected configuration, not documentation, screenshots or logs. Review customer types, shopper groups, amounts, currency and status mappings.
3. Use only provider-authorized test facilities and disposable orders. Test successful, pending, failed and repeated notifications, amounts, currencies and order/payment statuses. A return page or receipt is not proof of a verified payment.
4. Review callback authentication, failure handling and the full checkout before any production decision. Do not use real card details for testing.

### Plugin options

The basic fields include an adjustment operand and amount, a total/percentage selector, test mode, seller ID, secret word and success/failure order statuses. The manifest defaults the operand to `-`, the amount to empty and the adjustment type to Percentage; check the resulting total rather than assuming an empty value applies a fee or discount. The status defaults are codes `C` and `P`; select appropriate statuses for the shop and verify the actual transitions.

Advanced options include customer-type switches, shopper groups and payment extra fields. The manifest defaults both private and business customer switches to Yes and the shopper-group field to `0`. The seller ID and secret word start blank. The current manifest does not offer local e-conomic fields; review the central [e-conomic settings](chapters/e-conomic-integration/setup.md) and any preserved legacy values instead. Existing saved settings and group handling can differ. The secret-word field is defined as text, so restrict access to the plugin configuration and do not assume the field masks or encrypts its value.

The provider, callback verification and Joomla checkout have not been tested here.
