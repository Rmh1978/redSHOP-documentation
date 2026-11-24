## Installing redSHOP

Install redSHOP as a Joomla extension package. Choose an approved package intended for your Joomla, PHP and database versions; the source repository and a release ZIP are not interchangeable. See [Minimum requirements](chapters/getting-started-general/redshop-minimum-requirements.md) before starting.

### Before installation

1. Use a Joomla administrator account authorized to install extensions.
2. Obtain the redSHOP Core ZIP from the release channel provided by your distributor. Verify its version and integrity against the release information.
3. Check that the exact Joomla, PHP and database combination is supported by that package and by any payment, shipping and other extensions you plan to use.
4. Take a restorable backup of the site files and database. For an existing site, rehearse the installation on an isolated copy with real payment, email and accounting integrations disabled or safely mocked.

### Install the package

1. In Joomla administration, open the extension installer.
2. Select **Upload Package File**, choose the redSHOP ZIP and start installation.
3. Allow the installation and redSHOP's subsequent setup steps to finish. Review the individual results and Joomla's messages or logs; do not assume that a success banner alone confirms every step succeeded.
4. Open redSHOP in the administrator area and check the installed version, configuration and bundled extensions. Install and configure any separately distributed extensions only after checking their compatibility.

The current Core manifest defines database installation and update schemas. Its installer also processes bundled libraries, modules and plugins. The clean-install setup includes synchronizing Joomla users, preparing template data and handling configuration. These operations can change the database or files; installation is not just copying code.

### First configuration

On a new installation, the current installation screen provides **Configuration Wizard**, **Install Demo Content** and **Dashboard** actions. The wizard guides you through general, terms, user and price settings; review and save those values for your shop. See [Configuration Wizard](chapters/getting-started-general/redshop-configuration-wizard.md).

Demo content adds sample data. Use it only when appropriate for the site, preferably on a disposable installation, and do not assume sample content can be removed without consequences. The dashboard opens redSHOP without choosing either action.

Before opening a shop to customers, configure and test catalog, tax, shipping, payments, customer communications, access permissions and backups. Test external integrations with their approved test facilities rather than real transactions.

### If installation fails

Record the package and environment versions and the first error from Joomla or the server logs. Check package integrity, supported platform versions, database access and writable directories. Correct the underlying issue and restore the backup where appropriate; do not repeatedly run migrations or insert demo data without understanding the previous result. Remove credentials and personal information before sharing logs.

For an existing redSHOP installation, also follow [Updating redSHOP](chapters/getting-started-general/updating-redshop.md). Clean installation and upgrade behavior, including the exact screen presentation, must be verified for the specific package and Joomla environment.
