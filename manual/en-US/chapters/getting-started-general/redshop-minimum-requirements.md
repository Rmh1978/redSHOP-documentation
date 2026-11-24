## redSHOP Minimum Requirements

redSHOP runs as a Joomla extension. The supported environment depends on the exact redSHOP package, Joomla release and installed extensions. Check the package's release metadata and the requirements for that Joomla version before installation or upgrade; test the complete combination on an isolated site.

### Current development source

The current Core development `composer.json` declares PHP `^8.3` and Joomla `^5.4 || ^6.0`. Its Joomla package repository is pinned to 5.4.6. The example Core release configuration separately lists PHP 8.2 and Joomla 5.4; these declarations have different roles and are not, on their own, a tested compatibility matrix for every distributed package.

Joomla 6 requires PHP 8.3 or later. A compatible Joomla release also has its own database, web-server and PHP extension requirements. Check those requirements together with the actual redSHOP package and every required plugin or module. A Composer constraint or an example configuration is not evidence that a particular Joomla 5 or Joomla 6 installation or upgrade has passed acceptance testing.

### Before deployment

- Verify the exact package version, its release notes and the supported upgrade path.
- Check PHP, database and web-server versions and required PHP extensions for the selected Joomla and redSHOP packages.
- Check compatibility of payment, shipping, theme, template overrides and other extensions independently.
- Back up files and database, test restoration, and rehearse installation or upgrade on an isolated copy.
- Check server permissions and security settings; configure URL rewriting according to the web server and Joomla documentation if friendly URLs are used.

See [Installing redSHOP](chapters/getting-started-general/installing-redshop.md) and [Updating redSHOP](chapters/getting-started-general/updating-redshop.md). Legacy PHP 5/7, Joomla 2.5/3 and old MySQL minimums are not current deployment guidance.
