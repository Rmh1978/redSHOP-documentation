## Install and configure a module or plugin

1. Check that the exact extension package is compatible with your redSHOP, Joomla and PHP versions and obtain it from a trusted source. Modules and plugins may be separately distributed rather than bundled with Core. Check whether the extension is already installed and confirm its module or plugin identity before installing an update. For a plugin, check its group and element; for a module, check its element and whether it is a site or administrator module. A similar display name alone does not establish that a package updates the same extension.
2. Back up files and database, verify restoration and install the package using Joomla's extension installer on an isolated copy first.
3. For a module, create or edit a site module instance, configure its position, menu assignment, access and options, then publish it. For a plugin, find its installed entry in Joomla's plugin manager, configure its options and enable it when ready.
4. Test with appropriate frontend and administrator accounts. Payment, shipping, newsletter and accounting integrations need their own provider and security checks; installing or enabling an extension alone does not establish that it is ready for production.

Do not install demo data, publish changes or use live payment credentials as part of a rehearsal. See [Installing redSHOP](chapters/getting-started-general/installing-redshop.md).
