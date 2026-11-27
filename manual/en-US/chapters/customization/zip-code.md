## Postal codes and cities

The postal-code list associates a city and country with a postal code and an optional state. These records are distinct from a shipping method's own destination and rate rules.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Before changing records

Open **Zipcodes/Cities** in redSHOP customization. The list shows city, country, state, postal code and ID. Search by city or country name, or enter the full postal code. You can also filter by country and sort using the column headings. The current country filter can omit records with no matching state; clear it and search again before concluding that a record is missing. Use **New** to add records or select records and choose **Delete**, subject to your permissions.
The list model defaults to ID ascending; saved list state can change the order.

Back up the shop and verify the relevant [country](chapters/customization/countries.md) and [state](chapters/customization/states.md). Check how the installed shipping method uses addresses and postal codes; do not assume that creating a city record automatically creates or restricts a shipping rate.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create"></a>
### Create a record

1. Open **Zipcodes/Cities** in redSHOP customization and select **New**.
2. Enter the required city, country and **From** postal code; select a state when applicable. **To** is optional. State choices are built when the form loads, and the current country-change handler does not refresh them. Check that the selected state belongs to the intended country; if the appropriate choice is unavailable, contact your maintainer.
3. If entering a numeric range, test a small range on an isolated copy first. The current save model iterates from **From** through **To** inclusively and attempts to save individual records; it rejects a descending range and skips duplicates with a warning. Omitting **To** uses the starting value.
4. Save and inspect the resulting records and warnings. Do not rely on the success message alone: an isolated source-level test shows that the model can report success when an individual save fails. Back up before any bulk operation and verify each intended record.

The range logic increments values and the duplicate check casts the postal code to an integer. For example, an isolated check queried `999` for `0999` and `0` for `A1 2BC`, rather than the entered text. Verify duplicate and distinct records, leading zeroes, alphanumeric codes, large ranges and partial failures on an isolated installation before use; actual database behavior is not established by this check.

### Edit a record

Open the city or postal-code link in the list and update the required city, country and postal code and, if applicable, the state. The range end is not shown when editing an existing record. Check the saved record after making changes; the current save path can emit warnings when that omitted field is missing.

<a id="use"></a>
### Check addresses and shipping

Test a disposable address inside and outside each intended destination, including boundary values, against the actual installed shipping method. Compare available methods and charges with the configured provider/rate rules. If the results are incorrect, investigate the relevant method and address configuration rather than assuming this list controls all shipping plugins.
