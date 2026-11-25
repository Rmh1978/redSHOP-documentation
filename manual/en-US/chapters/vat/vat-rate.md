## VAT/Tax Rate

Tax rates are associated with a [VAT/Tax Group](chapters/vat/vat-group.md), locations and shopper groups. Determine the legally applicable rules before configuring them. Back up the shop and test changes with representative disposable customers and products on an isolated copy.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a><a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a>
### Rate fields

Open **VAT/Tax Rate** to view the name, group, shopper groups, country, state, rate and ID. Search by rate name or enter `id:` followed by its ID; filters include country, tax group and EU setting. Open a name to edit it, or use **New** or select records for **Delete**, subject to permission. The displayed rate is formatted as a percentage.

The group link in a rate row currently uses the rate ID rather than the group ID. Open the intended group from the group list instead and verify its name before making changes. The list can also show an ambiguous state name when different countries use the same state code; inspect the rate itself and verify the intended country and state.

| Field | Purpose |
|---|---|
| Name | Required; identifies the rate in administration. |
| Group | Required; associates the rate with a tax group. |
| Shopper Group | Select one or more shopper groups to which the rate applies. This is a required multi-select in the current form. |
| Country and State | Scope the rate to a location where applicable; either can be left empty. Review overlap with location-specific rates. |
| Amount | Enter a decimal rate: for example, `0.16` represents 16%. Do not enter `16` for 16% or assume the field represents a fixed currency amount. The table rejects negative rates. |
| EU Country | Marks the rate for the EU-based calculation mode; the new-record form defaults to No. Verify the correct setting for your tax rules. |

<a id="working"></a><a id="create-1"></a><a id="create-2"></a>
### Configure a rate

1. Review the existing groups and rates. Create or select an appropriate published tax group.
2. Open **VAT/Tax Rate**, select **New** and enter a name, group, shopper groups, country/state, decimal amount and EU setting appropriate to your tax rules.
3. Save the rate. Reopen it and check its group and shopper-group associations, including existing rates that may also match. If an association write fails, the current save path can report success when a later association succeeds; investigate missing associations rather than assuming the save was complete.
4. Assign the appropriate tax group to products or configure the default group. Do not delete all existing rates as a shortcut to disabling tax.

<a id="config"></a>
### How the current lookup selects a rate

The product-rate lookup uses a product-specific tax group when present, otherwise the configured default group. It filters by the group's published state, shopper group and country/state, including rates with an empty country or state. In EU mode it also filters on the rate's **EU Country** flag. The implementation orders matching rates by amount and selects one; overlapping rates therefore need particular care.

The customer location comes from the configured calculation mode and customer/session information, with configured country/state defaults used in relevant paths. Shipping-versus-billing selection, guest behavior, exemption approval and the complete checkout result must be tested for the site's configuration; changing a label does not change calculation.

<a id="checkout-1"></a><a id="checkout-2"></a>
### Verify the outcome

For each applicable tax group and shopper group, test guest and registered customers, relevant billing/shipping locations, and both matching and non-matching states. Compare product, cart, checkout, administrator order and invoice amounts against independently calculated expectations. Include tax-exempt customers, discounts, shipping, rounding and mixed rates where applicable. Use mocked payment and notification providers; do not make real transactions as a test.

As a simple arithmetic example, a net price of `100.00` at `0.10` has `10.00` tax and a `110.00` gross amount before other charges or discounts. Actual display and rounding depend on the shop's settings and transaction path.
