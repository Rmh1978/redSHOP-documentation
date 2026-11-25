## Giao Hang Nhanh shipping plugin

The optional `giaohangnhanh` redSHOP shipping plugin integrates with a delivery provider. Confirm the exact package, current provider API and Joomla compatibility before use. Its manifest also declares database installation and uninstall scripts.

1. Back up files and database and [install the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest includes database installation and uninstall scripts; review the data implications before removing it.
2. In the plugin settings enter the provider API key, API secret, client ID, password and service URL supplied for your approved environment. These fields are empty by default in the manifest. The key and secret use text fields; the password uses a password field. Neither field type guarantees encrypted storage, so restrict administrator and backup access and keep credentials out of documentation and logs.
3. Choose a pickup hub, city and origin district, and enter the postcode. The hub and city selectors use the **saved** provider settings to request options, so opening the configuration can contact the configured service; verify the endpoint and obtain authorization first. Do not assume the provider still supports these legacy requests.
4. In the extra settings select the redSHOP status intended to initiate shipment creation and map the provider's ready-to-pick, picking, storing, delivering, delivered, return, returned, cancel and lost-package states to redSHOP order statuses. The manifest marks these status fields as required. Check the caution below before enabling operation.
5. Configure the relevant [shipping method](chapters/shipping/shipping-methods.md), destinations and rates. Use only provider-authorized test facilities and disposable addresses and orders. Test rates, address selection, order status transitions, shipment creation, tracking, cancellation and failure handling without creating real shipments.

**Shipment operation caution:** The current plugin's status and tracking guard can attempt shipment creation at a different order status when tracking is empty, or again at the configured creation status when tracking already exists. Its creation and cancellation handlers do not check the order's selected shipping method. Whether the cancellation handler receives a particular order event depends on the installed event dispatch and remains unverified. Do not rely on these settings alone to prevent unintended or repeated requests; resolve this with your integrator and verify provider records before enabling automated operation.

The delivered-status setting also uses a misspelled internal key. If the provider returns `Delivered`, the mapping path does not select that setting. Confirm actual provider statuses and review the integration before relying on automatic status updates.

When no configured rate is available, the dynamic fee request currently adds product weight once per cart row without multiplying by quantity. Review multi-unit rates with your integrator and provider before relying on them.

The source contains shipment and status operations, but provider behavior, Joomla checkout and safe test-mode operation have not been verified. Do not rely on an order receipt as proof of delivery or booking.
