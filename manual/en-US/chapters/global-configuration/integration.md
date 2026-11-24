## Integration configuration

Open redSHOP Configuration and choose **Integration**. The current form groups GLS, Clickatell, PostNord/Pacsoft and e-conomic controls. These settings are not evidence that an external provider still supports a particular account or API. Verify the installed extension version and provider requirements in an isolated environment before enabling any service.

<h2 id="gls">GLS</h2>

**GLS Customer ID** is used in the inspected GLS order CSV export paths; it is not a Google Analytics property ID. Test both GLS export formats with non-sensitive sample orders and the receiving carrier's import specification.

<h2 id="clickatell">Clickatell</h2>

The form provides an enable switch, username, password, API ID/key, order status, sender ID, country prefix and custom message. The SMS helper checks the enabled setting, obtains the billing phone and prefix, and can use configured status and SMS templates. The helper chooses a legacy or REST send path according to the supplied credentials.

Confirm the supported provider API and credential type before configuring it. Use an approved test account and a phone number you control; check message content, country prefix, status triggers, delivery and failures. Automatic and manual order-screen SMS actions are distinct, and one selected status is not a guarantee that every order change sends exactly one message. Avoid exposing credentials, phone numbers or messages in shared screenshots and logs.

<h2 id="pacsoft">PostNord / Pacsoft</h2>

The form retains labels for **Integration With Pacsoft**, customer ID, password, sender address and postal code. It also offers manual or status-triggered label generation, a status selector, product-detail inclusion, tracking email and SMS options.

The current inspected automatic label path checks the integration setting, the selected order status, shipping-method eligibility and whether a label already exists. The shipment payload obtains the customer number and webshop sender details from the separate `redshop_integrations/postnord_shipment` plugin, then dispatches its shipment event. Do not assume the older Pacsoft fields alone configure this path. Some notification options depend on the shipment service type.

Install and configure an approved compatible integration and shipping method; see [PostNord pickup points and shipment labels](chapters/plugin-redshop/post-danmark-plugin.md). Verify the provider's current API requirements, and use only a disposable test order and test credentials. Confirm label creation, address and weight data, tracking, retries and failure handling before using automatic generation. Generating a label may create an external shipment.

<h2 id="e-conomic">e-conomic</h2>

The form includes integration enablement, invoice booking mode and optional order status, invoice-number choice, default account group, attribute-as-product handling and error-message detail. Booking and synchronization may have accounting consequences. The optional e-conomic plugin has its own account configuration; see [e-conomic Integration](chapters/global-configuration/e-conomic-integration.md) for setup and isolated verification.

Confirm provider support before enabling it. The form warns that finalizing drafts outside redSHOP can cause invoice-number mismatches. Test with disposable accounting data, not a production account.
