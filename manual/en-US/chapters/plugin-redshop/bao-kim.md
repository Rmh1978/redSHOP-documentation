## Bao Kim payment plugin

The optional `baokim` redSHOP payment plugin is a legacy provider integration. Confirm the exact package, current provider requirements and Joomla compatibility before considering it for use.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest includes provider account settings, test mode and success/failure order statuses. Test mode defaults to Yes in the manifest; explicitly confirm the saved setting and provider test environment.
2. Keep credentials in protected configuration, not documentation, screenshots or logs. Review status mappings and the payment method selected at checkout.
3. Use authorized provider test facilities and disposable orders to check success, pending, failure and repeated notifications, amounts, currency and payment status. A redirect or receipt does not establish that payment was verified.
4. Review callback authentication, failure handling and the full checkout before a production decision.

### Plugin settings

The **Extra** section supplies the provider account email, API key and secret key, all initially blank, plus the test-mode switch, initially Yes in the manifest. The key fields are defined as text; restrict administrator access and do not assume the values are masked or encrypted.

The **Advanced** section selects success and failure order statuses. Their manifest defaults are codes `C` and `P`; check the shop's actual status definitions. The success selector lists published statuses, while the failure selector's query does not apply that filter. Verify saved values and actual transitions with the provider's authorized test facilities.

The inspected checkout handler requires the shop currency code `VND` and an order total of at least 10,000 before it sends the checkout request. This is a source-level condition, not confirmation of current provider requirements; verify the behavior on an isolated shop.

These are manifest defaults for a new configuration, not necessarily settings already saved in an existing shop.

Provider compatibility, callbacks and Joomla checkout have not been tested here.
