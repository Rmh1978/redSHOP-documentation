## Plugin for redSHOP

Some extensions are included with Core; others may be separately distributed. Check the exact package, Joomla/redSHOP compatibility and provider requirements before installation. Payment, shipping and accounting integrations require isolated end-to-end testing and must not be assumed production-ready from their presence in source.

In redSHOP administration, **Configuration → redSHOP Configuration plugin** opens a plugin list with search and status, folder, element and access filters. Its **Plugin redshop** selection uses a marker in stored extension metadata rather than a complete inventory of all redSHOP-related plugins; use **All** or Joomla's plugin manager when looking for an installed integration that does not appear. Verify the group and element before editing or enabling it. The list's edit link opens Joomla's plugin editor, where settings depend on the individual extension.

Choose the relevant plugin guide. This list is not a complete catalogue of plugins in the source or Marketplace:

- [Products in Joomla content](chapters/plugin-redshop/product-content.md)
- [Product search integrations](chapters/plugin-redshop/product-search-integrations.md)
- [redSHOP - Bank Transfer Payment](chapters/plugin-redshop/bank-transfer.md)
- [PayGate Payment Plugin](chapters/plugin-redshop/paygate.md)
- [2checkout payment Plugin](chapters/plugin-redshop/2checkout.md)
- [redSHOP Shipping GLS Business](chapters/plugin-redshop/shipping-gls.md)
- [System - redSHOP - Product Image Zoom](chapters/plugin-redshop/system.md)
- [redSHOP - Money Booker payments](chapters/plugin-redshop/money-booker.md)
- [redSHOP Shipper](chapters/plugin-redshop/shipper.md)
- [GLS - Update Shipping User Information](chapters/plugin-redshop/gls-update.md)
- [redSHOP Giao Hang Nhanh](chapters/plugin-redshop/redshop-giao.md)
- [Ahamove shipping](chapters/plugin-redshop/ahamove.md)
- [EAN Transfer Payment](chapters/plugin-redshop/ean-transfer.md)
- [Bao kim](chapters/plugin-redshop/bao-kim.md)
- [Default GLS Plugin](chapters/plugin-redshop/gls-plugin.md)
- [PostNord pickup points and shipment labels](chapters/plugin-redshop/post-danmark-plugin.md)
- [Relatel Live Caller ID](chapters/plugin-redshop/relatel.md)
- [Billy accounting integration](chapters/plugin-redshop/billy.md)
- [Flatpay payment plugin](chapters/plugin-redshop/flatpay.md)
- [PayPal integrations](chapters/faq/paypal.md)
- [Bambora payment plugin](chapters/plugin-redshop/bambora.md)
- [Paymill Payment Plugin](chapters/plugin-redshop/paymill.md)
- [E-Pay new payment](chapters/plugin-redshop/epay.md)
- [GiroPay](chapters/plugin-redshop/giropay.md)
- [Self Pickup](chapters/plugin-redshop/self-pickup.md)

## Prepare an integration

1. Back up the shop and install the compatible extension package on an isolated copy. Configure and enable its Joomla plugin only when ready for testing.
2. Review plugin-specific settings and any related redSHOP payment, shipping or accounting configuration. Keep credentials out of screenshots and logs.
3. Use a provider sandbox or mocks and disposable records to test success, failure and resulting statuses. Check totals, notifications and downstream records independently.
4. Confirm current provider support and security requirements before enabling the integration for live use.