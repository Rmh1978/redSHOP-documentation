## GLS Business shipping plugin

The optional `default_shipping_glsbusiness` plugin lists configured GLS Business shipping rates. Check the exact package and current provider requirements before using it.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md). Under **Select Extra fields**, choose the shipping gateway fields to request at checkout; the shipping template must include `{shipping_extrafields}` to display them. **Allow create pacsoft label** defaults to No for a new configuration; existing saved values can differ.
2. Configure the appropriate [shipping rates](chapters/shipping/shipping-methods.md), including destinations, customer eligibility and VAT as required, and enable the shipping method.
3. Check eligible addresses, rate boundaries, VAT, checkout and the stored order using disposable data. The shipping VAT lookup can compare a state code to the wrong field, so verify the calculated shipping VAT against the expected amount for each applicable destination before relying on it.

To export orders, select them in the order list and choose **Export GLS Business** from the export menu. The inspected export filters by stored GLS Business shipping method. Verify the resulting order scope with disposable data before relying on the selection. It includes the configured GLS customer ID and non-empty, frontend-visible shipping gateway extra-field values stored for each order. Confirm that the resulting file meets your provider's current import requirements.

The export also includes customer contact details and order notes. Store and transfer it securely, and remove temporary copies according to your shop's data-retention policy.

The Pacsoft label option is separate from the GLS Business export. Automatic label creation also depends on the global Pacsoft integration, automatic-label setting and configured order status. Verify label and provider behavior using approved test facilities; an order receipt does not establish that a shipment was booked.

The shared shipping renderer can emit a PHP warning because the inspected GLS Business rate output does not include a description. If this appears at checkout, contact your maintainer.

The plugin returns no GLS Business choices when its rate lookup returns an empty list. Include a no-matching-rate address in your tests. No provider, label, shipment or Joomla checkout was tested here.
