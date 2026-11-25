## Countries

Country records supply codes used by redSHOP addresses and other features. Review the installed records before adding or changing one; do not assume that every destination is present or enabled in every configuration.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find a country

Open **Countries** under redSHOP customization. The list includes the country name, three- and two-letter codes, description, SMS prefix, flag code and ID. Search by name, or enter `id:` followed by the record ID to find a specific entry. The default order is name ascending, subject to saved list state. Select a sortable heading to change the order; the prefix and flag headings currently fall back to name ordering. The name opens the editor; eligible text fields can also be edited in the list when inline editing is enabled and you have permission.

Use **New** to add a country or select records and choose **Delete**. Before editing or deleting a record, back up the shop and assess its use in existing addresses, tax rates, shipping and integrations.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a>
### Add or edit a country

1. Select **New** or open an existing record.
2. Enter the required name, three-letter code and two-letter code; these start blank for a new record. The table validation checks each country code for duplicates. Use codes consistent with your payment, shipping and accounting integrations.
3. Optionally enter the description, **Sms prefix** and **Joomla flag code**; these start empty for a new record. The phone-prefix selector adds `+` before the saved prefix, so check the displayed value if a prefix already contains that character. It can also use the flag code. Actual display and supported flags depend on the installation.
4. Save, search for the record and verify its values. Test changes with disposable addresses before using them for real transactions.

<a id="how-to"></a>
### Where countries are used

<a id="zipcodes"></a>
- **Postal codes:** a [postal-code record](chapters/customization/zip-code.md) selects a country and can select a state.

<a id="vat"></a>
- **Tax:** [tax rates](chapters/vat/vat-rate.md) can be associated with a country and state. Independently test the chosen rate and totals for representative addresses.

<a id="shipping"></a>
- **Shipping:** destination support and rate matching depend on the installed shipping method. Test applicable and non-applicable destinations using a safe test configuration.

<a id="user"></a>
- **Customer addresses:** verify billing and shipping country and state selections, including existing addresses after a code change.

Do not assume changes cascade to existing orders, integrations or historical records. Verify their behavior on a backed-up isolated installation before applying changes.

The inspected phone-prefix selector falls back to the configured shop country when no selection is supplied. The separate language selector matches country and flag information against installed Joomla languages; a country record alone does not install a language. Verify both controls in the actual forms where they are used.
