## Joomla users and redSHOP customers

Joomla accounts and redSHOP customer/address records have different roles. Shopper groups are not Joomla permission groups. See [User management](chapters/users/user-management.md) and [User configuration](chapters/global-configuration/user.md).

The redSHOP user list provides a synchronization action. The inspected synchronization selects Joomla users without any matching redSHOP user-info record and attempts to create shop records for them. It derives first and last names from the first two space-separated parts of the Joomla name and uses the configured default customer type. It does not establish a continuous two-way synchronization with another extension or update every existing redSHOP record.

Synchronization changes customer data. Before running it, back up the database, review privacy and access requirements, and rehearse on an isolated copy with representative names, existing records and restricted accounts. Verify results and any errors before using the records.

Social-login, membership and account extensions are independently maintained. Their presence does not prove that customer details, shopper groups, orders or consent are synchronized. Verify the exact extension's Joomla and redSHOP compatibility, data mapping, authentication and deletion behavior separately before deployment.
