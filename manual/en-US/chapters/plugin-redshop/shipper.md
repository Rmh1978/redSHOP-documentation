## redSHOP Shipper plugin

The optional `shipper` redSHOP shipping plugin lists configured shipping rates. [Install and enable the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop, then open redSHOP **Shipping Methods**, select Shipper and configure the relevant [shipping rates](chapters/shipping/shipping-methods.md). Each returned choice uses its configured rate name and value. The rate helper adds shipping VAT only when the rate and customer qualify; verify the resulting checkout amount for your tax settings.

The plugin manifest's **Allow create pacsoft label** option defaults to No for a new configuration; an existing saved value can differ. Enabling it does not by itself establish that a label service or shipping provider is configured or working.

The shared shipping renderer can emit a PHP warning because Shipper's rate output does not include a description. If this appears at checkout, contact your maintainer.

Test customer eligibility, addresses, rate boundaries, VAT, checkout and stored order details using disposable data. Verify any external label or fulfillment integration separately using authorized test facilities; no provider, shipment or Joomla checkout was tested here.
