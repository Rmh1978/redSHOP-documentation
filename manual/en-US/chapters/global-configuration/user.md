## User configuration

Open redSHOP Configuration and choose **User**. Test registration, checkout and permissions with disposable private and company customers before changing a live shop.

<h2 id="registration">Registration</h2>

- **Registration Method** offers account creation, no account creation, optional creation and silent creation. The optional mode also has a default for the create-account checkbox. In the inspected helper, the no-account and unselected optional paths return a guest identity; silent mode prepares a Joomla account with a generated password. Do not assume silent creation happens only after an order is completed.
- **Email verification** controls a retype-email field in templates that include the relevant tag. It is not the Joomla account-activation email setting. Check Joomla Users configuration separately and test actual account activation and mail delivery.
- **New customer preselected**, allowed customer types, default customer type and private/company introduction text affect registration presentation. Check both customer types and the active template.
- Select the Joomla terms article and review the show-terms option. The screen also offers **Reset for all users**, but the currently inspected handler calls a helper without a user ID and the helper returns without updating records. Do not rely on this button to reset acceptance; verify the installed version and obtain an approved process before changing consent records.
- **My Page welcome text** controls account-page introduction content. Test the menu item, translations and display.

<h2 id="shopper-groups">Shopper groups</h2>

The form provides portal mode, portal login/logout menu destinations, default portal name and logo, defaults for private, company and unregistered shoppers, and a source group for new shopper-group values.

Choose published, appropriate groups and verify assignment, prices, VAT, shipping and catalog visibility for guests and each account type. Portal and shopper-group display settings are not a substitute for Joomla ACL. Test direct URLs and restricted accounts before relying on access restrictions. See [Shopper Groups](chapters/users/shopper-groups.md).

### Checkout required fields

The same User tab contains separate required-field switches for postal code, EAN number, address, country, billing phone, shipping phone and shipping email. The inspected checkout controller validates several billing fields; enforcement can differ by field and template. Test private/company, billing/shipping and direct submissions, including missing and invalid values, on an isolated shop.
