## Newsletter subscribers

Open **Components → redSHOP → Communication → Newsletter Subscribers**. Subscriber records contain personal data; restrict administrator access, follow the shop's consent and retention policies, and use disposable addresses for testing.

<h2 id="overview-1">Subscriber list</h2>
<h4 id="field-1">Fields</h4>

The list is based on the subscription form and includes the user, newsletter, subscription date and publication state. Displayed dates are converted from UTC to the Joomla timezone in the inspected view.

<h4 id="action-1">Actions</h4>

Use the available list toolbar to create, edit, publish, unpublish or delete records according to your permissions. Unpublishing or deleting is a data change; verify the consequences and retention policy before acting.

<h2 id="overview-2">Subscription details</h2>
<h4 id="field-2">Fields</h4>

The form provides a required user selector, newsletter selector, date, email and published switch. A manually published entry is not itself proof of consent. The list count and inspected recipient query consider published subscriptions.

<h4 id="action-2">Actions</h4>

Save or Save & Close persists changes; Cancel returns without saving the current form edits. Test duplicate and guest-email handling before using manual records.

<h2 id="working">Consent and unsubscribe</h2>

The storefront includes newsletter and account unsubscribe paths. The inspected removal helper deletes matching subscription records by email and, when configured, default newsletter; logged-in requests additionally use the current user's ID/email. Verify which subscriptions are affected, guest and logged-in behavior, cancellation messages and subsequent recipient selection on a disposable shop.

The inspected signup path can insert a published subscription even when confirmation is enabled. Do **not** rely on the confirmation switch alone to enforce consent. Investigate and correct this separately before sending real newsletters.

<h4 id="create">Create a subscription</h4>

1. Confirm that the customer has given the required consent and that the intended newsletter exists.
2. Select **New**, choose the user and newsletter, and review email, date and publication state.
3. Save, then verify the record and consent evidence independently. Use a mail sink and test accounts when rehearsing.
