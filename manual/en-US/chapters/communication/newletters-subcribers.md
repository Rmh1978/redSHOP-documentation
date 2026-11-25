## Newsletter subscribers

Open **Components → redSHOP → Communication → Newsletter Subscribers**. Subscriber records contain personal data; restrict administrator access, follow the shop's consent and retention policies, and use disposable addresses for testing.

<h2 id="overview-1">Subscriber list</h2>
<h4 id="field-1">Fields</h4>

The list includes the user, newsletter, subscription date and publication state. Open the user name to edit the subscription. Email is searchable but is not a displayed list column. Displayed dates are converted from UTC to the Joomla timezone in the inspected view.

For guest subscriptions, the displayed user name can be misleading. Verify the email and subscription details before editing or deleting a record.

Search matches the stored subscription name or email. Use the available sortable headings and pagination to navigate the records.

<h4 id="action-1">Actions</h4>

Depending on permissions, the list toolbar offers New, Delete, Publish, Unpublish and Check-in. Select existing rows for the relevant actions. Unpublishing or deleting is a data change; verify the consequences and retention policy before acting.

<h2 id="overview-2">Subscription details</h2>
<h4 id="field-2">Fields</h4>

- **Select User:** required. Search for the intended user; selecting a result attempts to fill the email field.
- **Select Newsletter:** choose the newsletter for the subscription. The selector loads newsletter records without a publication filter, so check the intended record.
- **Subscription Date:** choose the date for the record.
- **Email:** verify the recipient address. The save validation rejects an empty or invalid email address.
- **Published:** new entries default to Published. A manually published entry is not itself proof of consent. The list count and inspected recipient query consider published subscriptions.

<h4 id="action-2">Actions</h4>

Save or Save & Close persists changes; Cancel returns without saving the current form edits. Test duplicate and guest-email handling before using manual records.

<h2 id="working">Consent and unsubscribe</h2>

The storefront includes newsletter and account unsubscribe paths. The inspected removal helper deletes matching subscription records by email and, when configured, default newsletter; logged-in requests additionally use the current user's ID/email. Verify which subscriptions are affected, guest and logged-in behavior, cancellation messages and subsequent recipient selection on a disposable shop.

The inspected signup path can insert a published subscription even when confirmation is enabled. Do **not** rely on the confirmation switch alone to enforce consent. Investigate and correct this separately before sending real newsletters.

<h4 id="create">Create a subscription</h4>

1. Confirm that the customer has given the required consent and that the intended newsletter exists.
2. Select **New**, choose the user and newsletter, and review email, date and publication state.
3. Save, then verify the record and consent evidence independently. Use a mail sink and test accounts when rehearsing.
