## redSHOP Cart module

The optional site module `mod_redshop_cart` displays the current cart. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign a position and menu pages, and publish it on a test shop.

The manifest offers simple/extended output, shipping, discount and VAT display controls, a shipping line, an empty-cart checkout button and custom button text. It also exposes a caching option; leave caching disabled unless session isolation has been verified.

Choose Simple or Extended explicitly: the manifest's output default does not match either choice. The shipping, discount, VAT and shipping-line switches default to No; the empty-cart checkout button defaults to Yes. The manifest defaults caching to No caching. Check the displayed totals against checkout after changing any option.

The custom button text starts blank; the module then uses its translated checkout label. Advanced options include an alternative layout and module class suffix. Cache time defaults to 900 seconds, but caching itself defaults to No caching. Saved module settings can differ from these manifest defaults.

In the default template, an isolated Twig test found that the empty-cart button setting is not read under the name supplied by the module. The button was absent for an empty cart even when enabled; verify the installed layout before relying on it.

The discount line and total also need checking together: in isolated source tests a discount line appeared with the discount option disabled while the module calculator excluded a synthetic discount from its total. Verify the actual cart and checkout totals on your installation.

If you publish more than one cart module, test each one with its own settings. The inspected total calculator and cart refresh read parameters from a published cart-module record without selecting the displayed instance; their behavior with differently configured instances has not been verified in Joomla.

Test empty and populated carts, quantity changes, discounts, VAT, shipping and the checkout link across separate customer sessions and relevant menu routes. Styling is template-dependent.
