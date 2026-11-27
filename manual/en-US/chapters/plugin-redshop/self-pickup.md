## Self Pickup

The Self Pickup shipping plugin offers pickup rather than a carrier delivery. Enable the installed plugin and open it under redSHOP **Shipping Methods**. Its configuration includes the Pacsoft-label option and a **Shipping Location** action. The label option defaults to No in the manifest for a new configuration; saved settings can differ and do not establish that a label service is working.

1. Open Shipping Location and create a pickup location with a name, description, location information and applicable country/state selections.
2. Save and reopen the location. Test with disposable products and customer addresses, including different countries and states.
3. Select pickup at checkout with a mocked or offline payment and inspect the order's shipping method and location. Verify the customer-facing instructions and operational pickup process separately.

The current plugin returns zero shipping cost and zero shipping VAT for its pickup choices. If no locations exist, it supplies a default pickup choice named for the shipping method; the standard renderer can emit a warning when that fallback has no description. Verify checkout behavior and whether the fallback suits the shop before enabling it. Although the plugin attaches the configured country and state to location choices, the standard shipping-method renderer explicitly bypasses its state comparison for Self Pickup. Do not rely on these selections alone to restrict pickup choices by customer address; verify the installed checkout and template.

Also test orders that qualify for free shipping. In the inspected order-save path, that condition leaves the shipping-method value empty rather than reading the submitted choice; confirm whether the pickup location is retained in your checkout.

The editor's client-side validation requires a location name; its name and description inputs have a 250-character limit, and country and state allow multiple selections. Location information uses the configured text editor. The shared save code can produce PHP warnings for fields not shown on this form; if a warning occurs, ask your maintainer to investigate and verify the saved record.

The location list's Delete toolbar currently has a task and selection mismatch. Verify whether the intended record was removed and contact your maintainer if it was not.

See [Shipping Methods](chapters/shipping/shipping-methods.md) for general configuration and test precautions.
