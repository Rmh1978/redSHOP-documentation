## Bambora payment plugin

The current source includes an optional `redshop_payment/rs_payment_bambora` plugin. Its manifest exposes access token, merchant number, secret token, currency, callback, configured success/failure order statuses, capture statuses and refund settings. Source presence does not establish support by the provider or security for a particular installation.

For a new configuration the form requires the access token, merchant number and secret token. Its manifest defaults to DKK, callback Disabled and refund Yes; existing saved values may differ. The success, failure and capture status defaults are codes `C`, `P` and `RD` respectively: confirm their meaning and availability in your shop before using them.

The success and capture selectors query published statuses, while the failure selector's query does not filter by publication. Check the saved failure status and its actual transition separately.

The token fields are defined as text, so restrict access to the plugin configuration and do not assume the fields mask or encrypt their values.

The form also offers a customer-facing description, logo and extra information, plus private-person and business switches. Review their presentation and availability in your checkout template. Capture can be associated with multiple order statuses; choosing a status is not proof that capture succeeded.

The currency list contains `GPB`, not `GBP`. Do not assume it represents a working British-pound option; verify currency support with the provider and resolve the known configuration issue before use.

**Review required before production use:** source-level payment and security concerns require a separate authorized review; live behavior has not been verified. Do not enable a new production flow until that review and compatibility testing are complete. Do not change a running shop's settings without an approved incident and migration plan.

Use only a disposable shop and provider-approved test credentials to check configuration, payment verification, failed and ambiguous responses, callbacks, order/payment status, duplicate notifications, capture and refunds after the issues have been addressed. Compare each result with the provider, and keep credentials and transaction details out of shared logs.
