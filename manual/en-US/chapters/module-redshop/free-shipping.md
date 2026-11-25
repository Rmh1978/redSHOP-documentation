## redSHOP Promoting Free Shipping module

The optional `mod_redshop_promote_free_shipping` site module displays information about a configured shipping rate. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), choose its position and pages, then set the shipping rate ID and condition text in its options. The module passes the rate ID to redSHOP's free-shipping rate helper.

Both module options are initially blank. The condition text is displayed alongside the helper's message; write it to match the configured rate and verify it after rate changes. Find the rate ID in the [shipping rate list](chapters/shipping/shipping-methods.md#overview-2). If the ID is blank, the helper does not restrict its lookup to a specific rate; enter the intended ID when the message must refer to that rate.

With an empty cart the helper returns a no-products message. For a selected zero-price rate, it compares the product subtotal with the rate's order-total boundaries: below the minimum it reports the remaining amount; within the range it reports free shipping; above a nonzero maximum it reports no available free rate. The helper also considers some address and customer restrictions, but this message is not a substitute for checkout eligibility.

Use a real rate configured in your test shop rather than assuming an example ID applies to your installation. Check the message with an empty cart and carts below and above the threshold, with different addresses, taxes, discounts and shipping methods. Checkout's actual shipping calculation is authoritative; a promotional message alone does not establish that an order qualifies for free shipping.

Take particular care with alphanumeric postal codes: the message helper does not apply the rate's postal boundaries in the same way for those destinations. Check the final shipping option and price rather than relying on the message.

The message can also be based on a rate belonging to a disabled shipping plugin. Verify that the intended method is enabled and actually available at checkout before using the message in a campaign.
