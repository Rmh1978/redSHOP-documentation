## redSHOP Multi Currencies module

The optional `mod_redshop_currencies` site module lets visitors select from configured product currencies. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), choose its position and pages, and select the currencies in its options.

| Setting | Purpose and manifest default |
| --- | --- |
| Pre-text | Optional text or HTML above the selector; empty by default. |
| The currencies to display | Select one or more currencies offered to visitors. If none are selected, the inspected helper returns an empty list and the default layout omits the form. |
| Enable Cache | Defaults to No. Check session isolation before enabling it. |
| Module Class Suffix / Menu Class Suffix | Optional styling settings; both default to empty. Verify their effect with your template. |

The default layout offers a currency selector and a Change Currency button when the list is not empty. Saved settings can differ from manifest defaults.

The active product currency is stored in the redSHOP session and falls back to the configured default. Configure and verify currency rates separately; do not assume the module updates them. On an isolated shop, compare product, cart, tax, shipping and checkout totals in each currency, test separate sessions and verify what currency the payment provider actually accepts. Do not assume changing display currency changes the settlement currency.
