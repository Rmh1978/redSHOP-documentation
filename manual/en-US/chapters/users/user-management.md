## User management

Open **Users → Users** in redSHOP administration to find customer records and manage their shop information. Joomla account permissions and redSHOP shopper groups have different purposes.

<h2 id="overview">Customer list</h2>
<h4 id="fields">Fields and filters</h4>

The list includes customer name, private/company type, username, shopper group and customer sales. The sales helper sums order totals for the billing information ID without filtering payment or order status; it is not a paid-revenue report.

Search matches username or combined first and last name, ignoring spaces. Shopper group and tax-exemption-request filters are also available. **Known limitation:** the request filter's query checks the tax-exempt and approval fields rather than the separate request field, so do not use it as a definitive list of requests until corrected and tested.

<h4 id="actions">Actions</h4>

Use New or the customer link to create or edit a record. The list's Delete action requests deletion of the associated Joomla user as well as redSHOP data; review access, retained orders, privacy and legal requirements, and back up before deleting. User synchronization is a separate action and may modify records; test it in isolation first.

The current deletion model skips Joomla accounts with `core.admin` authorization but then proceeds to delete the selected redSHOP information records. Do not assume that preserving an administrator's Joomla account also preserves its redSHOP customer information.

See [Add User](chapters/users/add-user.md) for the account and address fields.
