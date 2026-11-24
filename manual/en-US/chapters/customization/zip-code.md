## Postal codes and cities

The postal-code list associates a city and country with a postal code and an optional state. The list can be searched and filtered by country. These records are distinct from a shipping method's own destination and rate rules.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Before changing records

Back up the shop and verify the relevant [country](chapters/customization/countries.md) and [state](chapters/customization/states.md). Check how the installed shipping method uses addresses and postal codes; do not assume that creating a city record automatically creates or restricts a shipping rate.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a><a id="create"></a>
### Create a record

1. Open **Zipcodes/Cities** in redSHOP customization and select **New**.
2. Enter the required city, country and **From** postal code; select a state when applicable. **To** is optional.
3. If entering a numeric range, test a small range on an isolated copy first. The current save model iterates from **From** through **To** inclusively and attempts to save individual records; it rejects a descending range and skips duplicates with a warning. Omitting **To** uses the starting value.
4. Save and inspect the resulting records and warnings. Do not rely on the success message alone: an isolated source-level test shows that the model can report success when an individual save fails. Back up before any bulk operation and verify each intended record.

The range logic increments values and the duplicate check casts the postal code to an integer. Test leading zeroes, alphanumeric codes, duplicate handling, large ranges and partial failures in an isolated installation before using them; their safe behavior is not established by this guide.

<a id="use"></a>
### Check addresses and shipping

Test a disposable address inside and outside each intended destination, including boundary values, against the actual installed shipping method. Compare available methods and charges with the configured provider/rate rules. If the results are incorrect, investigate the relevant method and address configuration rather than assuming this list controls all shipping plugins.
