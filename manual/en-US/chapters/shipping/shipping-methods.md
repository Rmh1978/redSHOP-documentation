## Shipping methods and rates

Shipping methods are provided by installed redSHOP shipping plugins. Their configuration and checkout behavior differ: not every method uses the shared rate or location editor. Configure and test each method on an isolated shop before offering it to customers.

### In this article

- [Shipping methods](#overview)
- [Method configuration](#overview-1)
- [Rate list](#overview-2)
- [Rate details](#overview-3)
- [Test a method](#working)

<h2 id="overview">Shipping methods</h2>

Open redSHOP administration and select **Shipping Methods**. The list identifies each plugin, its version, enabled state and whether it declares support for rates or locations. Availability depends on installed and enabled plugins; do not assume the standard method is appropriate for every carrier.

The list can incorrectly show rate support for a location-only method. Check the method's own configuration and available editor actions rather than relying solely on that indicator.

<h2 id="overview-1">Method configuration</h2>

<h4 id="field-1">Fields</h4>

Open a method to review its name, shipping class, published state and plugin-specific settings. For example, the standard shipping plugin defines Pacsoft-label and shipping extra-field options. Consult the specific plugin's documentation and avoid entering real provider credentials on a shared test system.

<h4 id="action-1">Actions</h4>

Save changes or close the editor. A **Shipping Rates** or **Shipping Location** action is shown when the method declares the corresponding capability; use it to manage records belonging to that method.

<h2 id="overview-2">Rate list</h2>

<h4 id="field-2">Fields</h4>

The rate list contains the method's records, including names, rate values, priorities and IDs. A location-enabled plugin can instead use the location workflow.

Open a name to edit it, or select rows for toolbar actions. Use the available sortable headings and pagination to navigate the records; this list does not provide a separate search filter. Location lists show the location name and ID rather than rate value and priority.

<h4 id="action-2">Actions</h4>

The toolbar provides New, Edit, Delete and Close. Copy is provided for rate-capable methods. Back up before deleting or making bulk changes, and verify copies before using them.

The current Delete toolbar has a task and selection mismatch and may not remove the selected rate or location. Do not rely on the action without verifying the result; contact your maintainer if removal is needed.

Copied rates do not retain all fields, including dimension limits, excluded products and the shipping tax group. Review and restore the intended settings before using a copy.

<h2 id="overview-3">Rate details</h2>

<h4 id="field-3">Fields</h4>

The shared rate editor provides:

- Name and description.
- Start and end values for weight, volume, length, width, height, order total and postal code.
- Country and state selections, included products and categories, excluded products and shopper groups.
- Shipping rate, priority and the customer type to which it applies.
- Shipping VAT group and Add VAT, carrier code, and, where offered, delivery type and e-conomic display number.
- An Extra Field tab for available shipping custom fields.

Location records use a different form with name, description, location information, country and state. Plugin configuration and active integrations affect which options are available.

Country, state and shopper-group controls support multiple selections. Customer type offers Both, Company only and Private. The VAT-group selector lists published tax groups, and Add VAT is unchecked for a new rate. Delivery type is shown for the standard shipping class; verify the settings after selecting the method and saving.

For the shared rate selector, weight, volume and order-total comparisons include the entered boundaries. An end value of zero makes that respective comparison unrestricted. Dimension checks are made for the relevant product volumes; a pair of zero boundaries for a dimension leaves that dimension unrestricted. Do not assume every shipping plugin uses these rules.

Use the product and category selections to limit a rate where appropriate, and check excluded products separately. A priority is used when ordering candidate rates; overlapping rules and individual plugins can affect the final choice. Set the rate value and VAT options for the intended charge, then verify both the shipping amount and tax at checkout.

The editor checks that a name is supplied and uses client-side comparisons for order-total and postal-code boundaries. The save model also compares those two pairs, but these checks do not establish validation of every range or the meaning of every empty value. Use the store's configured units and test exact boundaries, decimal amounts and representative postal codes, including leading zeroes, before relying on a rate.

The shared rate editor uses numeric postal-code boundary fields, so it cannot reliably represent alphanumeric boundaries. Check the method's own options and verify suitable destinations in an isolated shop before offering a rate for those areas.

<h4 id="action-3">Actions</h4>

Save or apply the changes, or cancel/close without saving pending edits. Reopen the record to check selections and values.

<h2 id="working">Test a shipping method</h2>

Use disposable customers, products and addresses with mocked payments and provider services. Check the shipping choice, price, VAT and final order totals. Test matching and nonmatching conditions, boundaries, mixed carts and a destination with no matching rate. Never infer the chosen rate or tax from an old screenshot.

Some shipping choices can produce a PHP warning when their plugin supplies no rate description. If this appears during checkout, contact your maintainer and verify the affected method.

The FedEx plugin can return no rates when billing information is present. Verify availability with disposable customer data and contact your maintainer before relying on this method.

The USPS plugin can encounter an error while checking the shipping address before requesting rates. Verify checkout with a disposable address and involve your maintainer before offering it.

<h4 id="create-1">Product and country example</h4>

For a rate-capable method, create a named rate, select a test product and destination country, set the relevant ranges and price, then save. Compare checkout for the selected product and country with a different product and destination. Test category and excluded-product rules separately rather than assuming a mixed cart follows a single-product result.

<h4 id="create-2">Shopper-group example</h4>

Assign a test rate to a shopper group, save it and compare checkout for a disposable member and a nonmember. Also test a guest when supported. Verify group defaults, overlapping rates and VAT independently.

See [postal codes](chapters/customization/zip-code.md), [categories](chapters/categories/redshop-categories.md) and [VAT rates](chapters/vat/vat-rate.md) for related configuration and limitations.
