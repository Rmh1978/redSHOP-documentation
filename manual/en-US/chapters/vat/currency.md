## Currency

Currency records define the names and codes available to redSHOP. Configuring a currency name or display symbol does not by itself establish an exchange rate or guarantee correct conversion.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Review currencies

Open **Currencies** in redSHOP administration. The list can be searched by name or code. Before adding a currency, check whether its code already exists and verify the code required by your payment and accounting integrations.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create"></a>
### Add a currency

1. Select **New** in the currency list.
2. Enter the currency name and code and save. Both fields are required; the current table validation checks for a duplicate code.
3. Find the saved entry in the list and verify it against the relevant provider's supported currencies.

<a id="use-currency"></a>
### Configure shop pricing

In redSHOP's price configuration, review the shop currency, currency symbol and position, decimal and thousands separators, displayed price decimals and calculation rounding precision. Save only after evaluating the effect on pricing, taxes, payment methods, integrations and reporting. Changing the symbol alone is a presentation change, not a currency conversion.

The general configuration includes a **Currency Libraries** choice, including European Central Bank and Currency Layer options; Currency Layer has a separate access-key field. Provider availability, credentials, rate freshness and supported currencies must be checked for the exact installation. Keep access keys out of logs and screenshots.

**Conversion requires particular care:** a source-level defect in the current Currency Layer implementation can return the unchanged amount when an explicit target currency is supplied. Do not rely on that conversion path for payments or accounting until the defect has been resolved and verified.

Before any currency change, back up the shop and rehearse it on an isolated copy. Independently calculate representative conversions and test product, cart, checkout, tax, shipping, discounts and payment totals, including unavailable or stale rates and rounding. Check what happens to existing orders and invoices; do not assume past amounts are immutable or automatically converted.
