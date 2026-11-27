## redSHOP Newsletter module

The optional `mod_redshop_newsletter` site module displays name/email fields and Subscribe and Unsubscribe controls. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), select its position and menu assignment, and optionally choose a redirection menu item.

For a logged-in user the form initially uses the account name and email. The module's browser validation asks for both values for either action. The redirection menu option is initially blank; select and test it if a specific destination is needed. The inspected controller falls back to the newsletter thank-you view if the selected menu item cannot be found. The other basic option is an optional module class suffix for template styling, also blank by default.

The module is separate from checkout. Configure Joomla mail and [newsletter settings](chapters/global-configuration/newsletter.md), then exercise both actions with disposable addresses and a mail sink. Test guest and logged-in users, redirects, privacy and subsequent recipient selection.

The inspected signup path can publish a subscriber before confirmation. Do not rely on the confirmation switch alone for consent or send to real subscribers until the defect and consent workflow are independently resolved. The module also requires an authorized security review before use. See [Newsletter subscribers](chapters/communication/newletters-subcribers.md).
