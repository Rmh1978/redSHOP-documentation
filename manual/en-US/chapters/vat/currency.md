## Currency

Currency records define the names and codes available to redSHOP. Configuring a currency name or display symbol does not by itself establish an exchange rate or guarantee correct conversion.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Review currencies

Open **Currencies** in redSHOP administration. The list shows name, code and ID; search by name or code or select a sortable column heading. Open a name to edit it; name and code can also be edited in the list when inline editing is enabled and permitted. Use **New** to add a currency or select records and choose **Delete**, subject to your permissions. Before adding or deleting a currency, check the configured shop currency and the codes required by payment and accounting integrations.

The currency table refuses deletion when the record's code equals the configured shop currency code. This check is not a general check of payment, accounting or historical-order dependencies; review those separately before deleting another currency.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create"></a>
### Add a currency

1. Select **New** in the currency list.
2. Enter the currency name and code and save. Both fields are required and start empty. The duplicate-code validation currently constructs an incorrect table identifier, so saving may fail; verify the result and any errors before proceeding.
3. Find the saved entry in the list and verify it against the relevant provider's supported currencies.

<a id="use-currency"></a>
### Configure shop pricing

In redSHOP's price configuration, review the shop currency, currency symbol and position, decimal and thousands separators, displayed price decimals and calculation rounding precision. Save only after evaluating the effect on pricing, taxes, payment methods, integrations and reporting. Changing the symbol alone is a presentation change, not a currency conversion.

The general configuration includes a **Currency Libraries** choice, including European Central Bank and Currency Layer options; Currency Layer has a separate access-key field. Provider availability, credentials, rate freshness and supported currencies must be checked for the exact installation. Keep access keys out of logs and screenshots.

**Conversion requires particular care:** a source-level defect in the current Currency Layer implementation can return the unchanged amount when an explicit target currency is supplied. Do not rely on that conversion path for payments or accounting until the defect has been resolved and verified.

Before any currency change, back up the shop and rehearse it on an isolated copy. Independently calculate representative conversions and test product, cart, checkout, tax, shipping, discounts and payment totals, including unavailable or stale rates and rounding. Check what happens to existing orders and invoices; do not assume past amounts are immutable or automatically converted.
