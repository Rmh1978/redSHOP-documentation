## Bambora payment plugin

The current source includes an optional `redshop_payment/rs_payment_bambora` plugin. Its manifest exposes access token, merchant number, secret token, currency, callback, configured success/failure order statuses, capture statuses and refund settings. Source presence does not establish support by the provider or security for a particular installation.

**Review required before production use:** the inspected callback treats the presence of certain request fields as success without validating the supplied hash in that handler, and the HTTP client disables TLS peer verification. The checkout response branch also assigns the success code instead of comparing it. These are source-level findings, not completed live tests; arrange a separate security and compatibility review before enabling a new production flow. Do not change a running shop's settings without an approved incident and migration plan.

Use only a disposable shop and provider-approved test credentials to check configuration, payment verification, failed and ambiguous responses, callbacks, order/payment status, duplicate notifications, capture and refunds after the issues have been addressed. Compare each result with the provider, and keep credentials and transaction details out of shared logs.
