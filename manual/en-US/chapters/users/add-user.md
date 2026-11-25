## Add or edit a customer

Use **Users → Add User**, or open an existing customer in the redSHOP user list. Work with authorized personal data and avoid recording passwords in documentation or messages.

<h2 id="overview">Customer details</h2>
<h4 id="general">Account information</h4>

The editor includes username, new password and confirmation, email, shopper group, Joomla group, block-user and receive-system-email controls. CC email is shown when the Billy integration is enabled. Some account controls are hidden for the configured silent-user mode. Password fields accept a new password; they do not display the existing password. Shopper groups affect shop behavior; Joomla groups govern Joomla permissions. Assign only the access needed.

<h4 id="billing">Billing and shipping information</h4>

Choose private or company customer and supply the relevant name, address, postal code, city, country, state and phone. Company and shop configuration can expose company name, VAT and EAN numbers, invoice block, minimum-order bypass, tax exemption, request and approval fields. Extra fields depend on the shop's configuration. Review tax decisions with the appropriate tax adviser; a field value alone does not establish legal entitlement.

The form marks first name, last name, address, postal code, city and phone as required. Company name is shown for company customers. Country and state visibility depends on configuration, and the state control can be hidden when no states are available. The tax-exemption controls depend on the shop's tax-exemption setting.

<h4 id="actions">Actions</h4>

Apply saves and keeps the editor open; Save returns to the list. Existing records also offer Place Order. Saving may invoke enabled integrations; verify effects in an isolated shop.

Existing customers can have a Shipping Information tab for adding or editing addresses; an Order Information tab is shown when orders exist. The shipping-address Delete link currently may report that no item was selected instead of removing the address. Verify the result before attempting further changes.

<h2 id="working">Create a customer in administration</h2>
<h4 id="private-1">Private customer</h4>

Enter account and billing information, choose the appropriate shopper and Joomla groups, select the private customer type and save. Reopen to check the persisted values.

<h4 id="company">Company customer</h4>

Select company type, enter the applicable business and billing information, and review tax and invoice settings before saving. Verify the resulting checkout and integration behavior with a disposable business account.

<h2 id="create">Storefront registration</h2>

The component provides a Joomla Registration menu layout. Registration availability, fields, activation and notification depend on Joomla and shop settings; test the complete flow with a disposable address and safe mail transport rather than assuming immediate login.

<h4 id="private-2">Private registration</h4>

Test required fields, activation and the assigned shopper group for a private customer.

<h4 id="business">Business registration</h4>

Test company-specific fields, VAT request and approval, activation and checkout for a business customer.

<h2 id="account">Storefront account</h2>

The Joomla Account menu layout includes login and logout redirection options. Test access with separate accounts and guests.

<h2 id="edit">Edit account information</h2>

Customers can use the configured account interface to review and update their own information. Verify validation and authorization with separate users.

<h2 id="add">Shipping addresses and account deletion</h2>

The account interface can offer address management. Test adding, editing and removing a shipping address and ensure another user cannot modify it. Account deletion has privacy, retention and order-history consequences; verify the current configured action in isolation and follow the shop's retention policy.
