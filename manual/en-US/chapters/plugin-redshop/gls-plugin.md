## Default GLS shipping plugin

The optional `default_shipping_gls` plugin provides shipping rates and a GLS pickup-location integration. Its source references a historical provider service; verify the exact package and current GLS service requirements before relying on it.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest offers shipping extra fields, a location-count setting defaulting to 10 and an **Allow create pacsoft label** option defaulting to No.
2. Configure appropriate [shipping rates](chapters/shipping/shipping-methods.md) and enable the shipping method. The plugin's language description instructs adding `{gls_shipping_location}` to the shipping-method template for its location control. Preserve the existing template before editing.
3. With provider-authorized test facilities and disposable addresses, check available locations, selection, shipping address, rates, VAT and the completed order. Verify service compatibility and actual label behavior separately; enabling an option alone does not establish that labels work.

The extra-field setting allows multiple shipping fields. **Amount** controls how many pickup shops the plugin requests; its supplied default is 10. The location control includes a postal code, pickup-shop selection and mobile number. Check their behavior and any provider limits in the installed checkout.

If the pickup service cannot be reached, location lookup may stop with an error instead of recovering cleanly. Verify an alternative shipping method and contact your maintainer if this affects checkout.

The GLS shipping-address handler can also fail when a pickup selection is saved. Verify the complete order flow on an isolated shop before offering this method, and involve your maintainer if the order cannot be completed.

No GLS service, labels, checkout or Joomla UI was tested here. Avoid real customer addresses and live shipments in a rehearsal.
