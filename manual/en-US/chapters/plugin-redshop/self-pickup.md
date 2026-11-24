## Self Pickup

The Self Pickup shipping plugin offers pickup rather than a carrier delivery. Enable the installed plugin and open it under redSHOP **Shipping Methods**. Its configuration includes the Pacsoft-label option and a **Shipping Location** action.

1. Open Shipping Location and create a pickup location with a name, description, location information and applicable country/state selections.
2. Save and reopen the location. Test with disposable products and customer addresses, including different countries and states.
3. Select pickup at checkout with a mocked or offline payment and inspect the order's shipping method and location. Verify the customer-facing instructions and operational pickup process separately.

The current plugin returns zero shipping cost and zero shipping VAT for its pickup choices. If no locations exist, it supplies a default pickup choice named for the shipping method; verify whether this behavior suits the shop before enabling it. The plugin attaches the configured country and state to location choices, but actual checkout filtering must be verified for the installed checkout and template.

See [Shipping Methods](chapters/shipping/shipping-methods.md) for general configuration and test precautions.
