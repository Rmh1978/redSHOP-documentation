## States

States or regions belong to a [country](chapters/customization/countries.md). Their codes are used by address-related features, so verify existing records before creating or modifying them.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find a state

Open **States** under redSHOP customization. Search the list or filter it by country. Before editing or deleting a record, back up the shop and consider references in addresses, tax and shipping.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a>
### Add or edit a state

1. Select **New** or open an existing record, then select its country.
2. Enter the required state name, three-letter code and two-letter code. The state form limits the codes to three and two characters respectively, and the table checks each code for duplicates within the country.
3. Choose whether the two- or three-letter abbreviation is displayed, save and find the result in the list.
4. Test the selection and dependent address, tax and shipping behavior using disposable records on an isolated copy.

<a id="how-to"></a>
### Where states are used

<a id="zipcodes"></a>
- **Postal codes:** [postal-code records](chapters/customization/zip-code.md) can include a state alongside their country.

<a id="vat"></a>
- **Tax:** check country and state matching in the [tax-rate guide](chapters/vat/vat-rate.md) and independently verify expected amounts.

<a id="shipping"></a>
- **Shipping:** destination and state matching depend on the configured shipping method; test both matching and non-matching destinations.

<a id="user"></a>
- **Customer addresses:** verify country-dependent state selection for billing and shipping, including existing addresses after edits.

The current tax lookup uses country and state codes; changing a code is not just a label change. Do not assume that related records or historical orders are automatically updated.
