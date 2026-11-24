## redSHOP Cart module

The optional site module `mod_redshop_cart` displays the current cart. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign a position and menu pages, and publish it on a test shop.

The manifest offers simple/extended output, shipping, discount and VAT display controls, a shipping line, an empty-cart checkout button and custom button text. It also exposes a caching option; leave caching disabled unless session isolation has been verified.

Test empty and populated carts, quantity changes, discounts, VAT, shipping and the checkout link across separate customer sessions and relevant menu routes. Styling is template-dependent. The inspected module references an `$app` variable without assigning it in the module file on one cart-menu path; verify that path on an isolated Joomla installation before relying on it.
