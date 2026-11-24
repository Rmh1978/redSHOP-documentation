## Newsletter configuration

Open redSHOP Configuration and choose Newsletter. Configure and test this feature in an isolated shop with a mail sink or addresses you control before using real subscribers.

<h2 id="newsletter">Newsletter</h2>

- **Enable Newsletter:** enables the feature; the configuration form conditionally displays the following settings when enabled. Confirm the storefront signup and account experience for the templates you use.
- **Newsletter Confirmation:** controls confirmation-mail behavior. Do **not** assume this setting prevents unconfirmed subscriptions from becoming active: the inspected subscription helper inserts `published = 1` even when it prepares a pending state. Confirm consent, delivery and recipient selection in isolation and arrange an appropriate fix before relying on confirmation for bulk mail.
- **Newsletter sender name / Mail From:** enter a recognizable sender and an address authorized by your mail provider. Check actual From and Reply-To headers; confirmation and cancellation mail use Joomla's sender configuration in the inspected code.
- **Default Newsletter:** select a published newsletter from the list. This selection is also used for subscriptions; verify the newsletter's content and associated template.
- **No. of Mails in Batch:** sets how many selected recipients the bulk-send controller groups per batch.
- **Pause Between Batches:** delay in seconds between browser requests in the bulk-send log. On configuration save, zero for either batch size or pause becomes one. Choose a positive batch size and pause that suit your provider, then test interruption, failures and duplicate prevention; the settings do not guarantee delivery or prevent spam classification.

Before any real mailing, verify lawful consent, recipient selection, unsubscribe and suppression behavior, sender authentication and access to subscriber data. A successful test message is not proof of those controls.

<h2 id="test">Test mail</h2>

Choose a published default newsletter, enter an address you control and use **Send**. The button submits **Apply**, which can save other pending configuration changes before attempting the test message. The inspected test path also creates a tracking record and replaces the unsubscribe link with a placeholder; it is not a full subscription or unsubscribe test.

The test-message source reads template content that its query does not select, and the controller does not check the mailer's return value before showing its success message. Verify the received subject, body, images and headers in a mail sink; do not infer delivery from the on-screen message. Test the real subscription and unsubscribe workflow separately without real customer data.
