## ePay v2 payment plugin

The source contains the legacy `rs_payment_epayv2` plugin. Confirm the exact installed package, current provider availability and protocol, and Joomla compatibility before considering it for use.

[Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. Its manifest includes merchant and payment-window settings, callback options, status mappings and capture settings. Debug mode is not proof of a provider test environment; confirm the provider's authorized test facilities separately. Keep credentials in protected configuration, not documentation or logs.

Use disposable orders to test success, pending, failure, repeated notifications, callback authentication, amounts, currencies and capture. Check order and payment status separately; a receipt or browser return is not proof of payment. Provider, callbacks and Joomla checkout have not been tested here.

### Plugin settings

- **Merchant and payment window:** the merchant ID is required and initially blank; window ID defaults to `1`, language to Danish, window state to Overlay and receipt choice to the shop's own receipt. Payment group, receipt email and tracker fields start blank. Verify these against the provider account.
- **Capture and notifications:** instant capture and callback are disabled in the manifest; debug mode is enabled. Refund is enabled in the advanced defaults. These defaults are not a recommendation: check the provider's current requirements and the shop's status, capture and refund workflow before enabling the method.
- **MD5 options:** the key starts blank and the mode defaults to Disabled, with alternatives for the accept path or both paths. The key field is defined as text. Restrict configuration access; do not assume the field masks or encrypts the value, or that a legacy setting provides sufficient current callback security.
- **Payment types:** choose the methods supported by the provider. The manifest's new-record default includes a code that the inspected selector does not offer; verify the selected methods after saving rather than relying on that default.
- **Order statuses:** success, failure and capture selectors list published statuses and default to codes `C`, `P` and `S` respectively. Verify their meaning and the actual transitions in your shop.
- **Payment adjustment and eligibility:** operand defaults to `-`, price to blank and type to Percentage; Total is the fixed-amount option. Private-person and business visibility default to Yes; shopper group defaults to `0`. Test eligible and ineligible customers and compare totals independently.
- **Accounting:** e-conomic payment conditions and layout identifiers start blank. Verify any mappings with the integration.

These are manifest defaults for a new configuration, not necessarily settings already saved in an existing shop. Reopen and verify the actual configuration on an isolated installation.
