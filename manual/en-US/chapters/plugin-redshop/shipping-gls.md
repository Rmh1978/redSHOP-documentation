## GLS Business shipping plugin

The optional `default_shipping_glsbusiness` plugin lists configured GLS Business shipping rates. Check the exact package and current provider requirements before using it.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop. The manifest offers a multiple selection of shipping extra fields and **Allow create pacsoft label**, which defaults to No for a new configuration. Existing saved values can differ.
2. Configure the appropriate [shipping rates](chapters/shipping/shipping-methods.md), including destinations, customer eligibility and VAT as required, and enable the shipping method.
3. Test eligible and ineligible addresses, rate boundaries, VAT, checkout and the stored order using disposable data. Verify label and provider behavior separately using approved test facilities; do not assume an order receipt means a shipment was booked.

The shared shipping renderer can emit a PHP warning because the inspected GLS Business rate output does not include a description. If this appears at checkout, contact your maintainer.

No provider, label, shipment or Joomla checkout was tested here.
