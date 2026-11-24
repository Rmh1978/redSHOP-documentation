## redSHOP Multi Currencies module

The optional `mod_redshop_currencies` site module lets visitors select from configured product currencies. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), choose its position and pages, and select the currencies in its options. If no currencies are selected, the inspected helper returns an empty list. Optional introductory text and style settings are also available.

The active product currency is stored in the redSHOP session and falls back to the configured default. Configure and verify currency rates separately; do not assume the module updates them. On an isolated shop, compare product, cart, tax, shipping and checkout totals in each currency, test separate sessions and verify what currency the payment provider actually accepts. Do not assume changing display currency changes the settlement currency.
