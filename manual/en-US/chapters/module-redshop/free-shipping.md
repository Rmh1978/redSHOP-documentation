## redSHOP Promoting Free Shipping module

The optional `mod_redshop_promote_free_shipping` site module displays information about a configured shipping rate. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), choose its position and pages, then set the shipping rate ID and condition text in its options. The module passes the rate ID to redSHOP's free-shipping rate helper.

Use a real rate configured in your test shop rather than assuming an example ID applies to your installation. Check the message with an empty cart and carts below and above the threshold, with different addresses, taxes, discounts and shipping methods. Checkout's actual shipping calculation is authoritative; a promotional message alone does not establish that an order qualifies for free shipping.
