## PostNord pickup points and shipment labels

The current source contains two separate plugins: `redshop_shipping/postnord_pickuppoint` for shipping rates and pickup-point selection, and `redshop_integrations/postnord_shipment` for shipment and label requests. Installing one does not configure the other. The older PostDanmark screenshots and setup are not instructions for these plugins.

Provider compatibility and checkout have not been verified here. Confirm support for the exact plugin, Joomla/PHP and provider API versions before use; obtain approved test credentials and use a disposable shop and orders. Keep credentials and customer data out of shared logs.

### Configure pickup-point shipping

1. Install the approved pickup-point extension if it is not already present, and enable it in Joomla's plugin manager.
2. Its settings include the PostNord API key, whether to use a map, a Google Maps key, a default postal code and whether Pacsoft label creation is allowed. For a new configuration, the manifest defaults **Use map** and **Allow create pacsoft label** to Yes; the key and default postal-code fields start empty. The keys are text fields: restrict administrator access and do not assume they are masked or encrypted. Existing saved settings may differ. Check current provider and map-key requirements; the form alone does not establish that the services work.
3. Configure an appropriate redSHOP shipping method and rates, including applicable destinations, prices, VAT and delivery type. See [Shipping Methods](chapters/shipping/shipping-methods.md).
4. On an isolated storefront, test the applicable checkout template, address and rate combinations. Select a pickup point, complete a disposable order and inspect the saved pickup information. Test a missing postcode, no results and service errors, as well as mobile and keyboard operation.

### Configure shipment labels

1. Separately install and enable the approved PostNord shipment integration plugin. Its form requires the API key, customer number and sender address, postal code, city, contact, phone and email; these fields have blank manifest defaults. The key is a text field, so do not assume it is masked or encrypted. The sandbox switch defaults to Disabled for a new configuration; verify the saved value before testing.
2. Review [Integration configuration](chapters/global-configuration/integration.md), including manual versus automatic label generation and the selected order status. Check that the selected shipping method permits label creation. The current label path reads the sender and customer data from the shipment plugin rather than relying solely on older Pacsoft form fields.
3. Use a provider-approved sandbox and disposable order to check the resulting recipient, sender, weight, service, pickup point and product detail before attempting a label. A label request can create an external shipment: do not run it against a live account without approval.
4. Verify the returned label and tracking number, failed requests, duplicate attempts, status transitions and any tracking email or SMS options. Reconcile results with the provider before enabling automatic generation.

The plugin has a sandbox setting, but its presence is not proof that a particular provider account supports the test endpoint. Resolve provider and environment prerequisites before enabling production use.
