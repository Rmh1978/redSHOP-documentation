## User configuration

Open redSHOP Configuration and choose **User**. Test registration, checkout and permissions with disposable private and company customers before changing a live shop.

<h2 id="registration">Registration</h2>

- **Registration Method** offers account creation, no account creation, optional creation and silent creation. The optional mode also has a default for the create-account checkbox. In the inspected helper, the no-account and unselected optional paths return a guest identity; silent mode prepares a Joomla account with a generated password. Do not assume silent creation happens only after an order is completed.
- **Email verification** controls a retype-email field in templates that include the relevant tag. It is not the Joomla account-activation email setting. Check Joomla Users configuration separately and test actual account activation and mail delivery.
- **New customer preselected**, allowed customer types and default customer type affect registration presentation. The configuration also provides private and company introduction text, but the inspected default registration layout renders translation keys rather than directly reading those values. Check both customer types, translations and the active template; actual Joomla behavior remains unverified.
- Select the Joomla terms article and review the show-terms option. The screen also offers **Reset for all users**, but the currently inspected handler calls a helper without a user ID and the helper returns without updating records. Do not rely on this button to reset acceptance; verify the installed version and obtain an approved process before changing consent records.
- **My Page welcome text** controls account-page introduction content. Test the menu item, translations and display.

The distributed configuration selects optional account creation with its
checkbox initially unchecked, allows both private and company registration,
and leaves the default customer type at the selection placeholder. It
preselects returning rather than new customer and disables both the
retype-email field and the show-terms option. Review saved settings and the
selected article before accepting real registrations; the distributed
article ID is not a guarantee of suitable terms.

<h2 id="shopper-groups">Shopper groups</h2>

The form provides portal mode, portal login/logout menu destinations, default portal name and logo, defaults for private, company and unregistered shoppers, and a source group for new shopper-group values.

The portal login/logout destinations, name and logo controls are shown when portal mode is enabled. Select the intended shopper groups by name rather than assuming distributed IDs correspond to the same groups on an existing shop.

Portal mode is disabled in the distributed configuration; the default group
IDs are `1` for private and unregistered shoppers and `2` for company
shoppers. Confirm the corresponding records before using them.

Choose published, appropriate groups and verify assignment, prices, VAT, shipping and catalog visibility for guests and each account type. Portal and shopper-group display settings are not a substitute for Joomla ACL. Test direct URLs and restricted accounts before relying on access restrictions. See [Shopper Groups](chapters/users/shopper-groups.md).

### Checkout required fields

The same User tab contains separate required-field switches for postal code, EAN number, address, country, billing phone, shipping phone and shipping email. The inspected checkout controller validates several billing fields; enforcement can differ by field and template. Test private/company, billing/shipping and direct submissions, including missing and invalid values, on an isolated shop.

The distributed configuration enables the postal-code, EAN, address, country
and billing-phone switches. Inspect the saved shipping-phone and
shipping-email switches separately; they are not specified in the inspected
distributed configuration.
