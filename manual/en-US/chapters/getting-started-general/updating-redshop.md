## Updating redSHOP

An update can change files, bundled extensions, configuration and database schema. Do not assume it only replaces code or that an old major-version migration procedure applies to a current release.

<a id="update15"></a>
### Prepare an update

1. Record the installed redSHOP, Joomla, PHP and database versions, the active theme and overrides, and installed payment, shipping and other extensions.
2. Read the release notes for the exact target package. Verify the supported upgrade path and compatibility of the package and each required extension; see [Minimum requirements](chapters/getting-started-general/redshop-minimum-requirements.md).
3. Back up the entire site, including files and database, and verify that the backup can be restored.
4. Restore a copy to an isolated environment. Disable or mock live payment, shipping, accounting and customer-message integrations, and rehearse the update and restoration there.

<a id="update25to3"></a>
### Update and verify

1. Obtain the approved target Core package and verify its version and integrity against its release information.
2. Sign in to Joomla administration with an account authorized to install extensions. Use Joomla's extension installer to upload the package, following any package-specific release instructions.
3. Wait for redSHOP's update steps to finish and inspect individual messages and logs. A displayed success message is not a substitute for checking each step and the subsequent shop behavior.
4. Confirm the installed version and review the configuration, required extensions and any template overrides. Test catalog, cart, tax, shipping, checkout and administrator workflows using disposable data and safe provider test facilities.
5. If any step fails or verification does not match expectations, investigate the first error and use the tested backup and recovery plan. Do not rerun database migrations blindly.

The current Core manifest uses Joomla's upgrade mechanism and declares MySQL update schemas; the installer also processes bundled libraries, modules and plugins on update. This source behavior does not prove that every historical redSHOP or Joomla version has a direct upgrade path. In particular, the former Joomla 2.5/3 and redSHOP 1.x instructions are not a current migration recipe: use the documented path for each intermediate release and test it separately.

The inspected installer also runs a required-plugin enablement step during updates, and its postflight performs schema and Marketplace reconciliation. Review the resulting extension states and installer messages rather than assuming every plugin state remains unchanged. Version-specific migration checks can stop an update; investigate their reported error before retrying.

The exact Joomla 5 and Joomla 6 upgrade paths and package compatibility must be established for the versions being deployed. Do not apply a rehearsed plan to production until its results and rollback have been reviewed.
