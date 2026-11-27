## Ahamove shipping plugin

The optional `redshop_shipping/ahamove` plugin integrates shipping estimates and order requests with Ahamove. Confirm the exact package, Joomla/PHP compatibility and current provider API requirements before use. Source availability does not establish that the integration works with a current provider account.

### Configure

1. Back up files and database and [install the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated copy. The package declares database installation and uninstall scripts. Its uninstall script deletes the Ahamove order-reference and delivery-schedule field definitions; review dependencies and retain a backup before removal.
2. In **Account Credentials**, configure the provider API key and Google map API key. Both fields are text fields with blank manifest defaults; do not assume encrypted storage. **API Environment** defaults to **Sandbox** for a new configuration, but saved settings may differ. Confirm that your provider account and endpoint are authorized for testing.
3. Under **Requester Contact**, add the store contacts, phone numbers, addresses, coordinates, location bounds and states. The manifest requires an address, coordinates, center point and radius; the radius is in metres. Enter store coordinates as latitude and longitude separated by a comma. The state defaults to `SG` in a new entry. The source selects the first requester whose state exactly matches the customer's state; configure the matching entries and check saved values and coverage.
4. Configure the [shipping method and rates](chapters/shipping/shipping-methods.md). The plugin can request a provider estimate for a geocoded customer address; otherwise it can use configured rates. Provider estimates carry zero shipping VAT in the inspected rate result, while configured rates use the shared shipping VAT lookup. That lookup has a state-field mismatch; independently verify the charge and tax for each applicable destination.

### Verify before use

Use approved test facilities and disposable addresses, products and orders. The checkout address autocomplete is configured for Vietnam and uses the matching requester's location bounds; the existing-address flow can ask the customer to confirm an address on a map. These source paths are not a guarantee of current map or checkout compatibility. Check both provider estimates and configured rates, matching and nonmatching store states, address selection, the saved order and final totals. The cart-item remark path can use an incorrect product key and emit a warning when estimating shipping; involve your maintainer if this affects checkout.

The source contains an order-shipping handler that can request shipment creation for an Ahamove order when the order status code is `C`, payment status is `Paid` and no provider order is found. Event delivery, provider behavior and duplicate handling are unverified. A shipment request may have external consequences: do not exercise it against a live account without approval, and reconcile with the provider before retrying.

The order-item preparation path can also fail before sending a shipment request. Verify the complete booking workflow with your maintainer and provider; an order receipt is not proof that a shipment was created.

No Joomla checkout, provider request, shipment, database installation or uninstall was tested. Keep credentials, customer addresses and provider responses out of shared logs and screenshots.
