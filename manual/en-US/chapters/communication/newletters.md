## Newsletters

Open **Components → redSHOP → Communication → Newsletters**. Newsletter creation and bulk sending are separate operations. Use a mail sink and disposable subscribers when testing.

<h2 id="overview-1">Newsletter list</h2>
<h4 id="field-1">Fields</h4>

The list includes the newsletter name, subject, subscriber count and publication state. The inspected count includes published subscription records; it is not proof of consent.

Search matches the newsletter name. Use the available sortable headings and pagination to navigate.

<h4 id="action-1">Actions</h4>

The toolbar provides Send Newsletter and Copy in addition to the available standard list actions. Review selection and recipient filters before any send. Copying, deleting or publishing affects shop data; test changes first.

<h2 id="overview-2">Newsletter details</h2>
<h4 id="field-2">Fields</h4>

- **Name:** required; identifies the newsletter in the administration list.
- **Subject:** enter the message subject.
- **Body:** compose the message in the editor.
- **Template:** choose a newsletter template. The send path inserts the body at the template's `{data}` tag. An Edit control opens the saved template separately; check which template is saved before editing it.
- **Published:** new newsletters default to Published.

The form also displays available default newsletter tags. Test formatting, links, sender and unsubscribe content in received messages.

<h4 id="action-2">Actions</h4>

Apply saves without closing; Save saves and returns to the list; Save & New saves and starts another newsletter. Cancel leaves without saving current form edits. Template editing is a separate action.

<h2 id="working">Sending and consent</h2>

Select a newsletter and use **Send Newsletter** to reach the recipient preview. The current preview includes country, shopper-group, product and category filters among others. Review the selected recipients before submitting the send. The inspected sender splits selected recipients into configured chunks and drives subsequent batches from the browser; interrupted sends, retries and duplicate prevention require testing.

Set a positive whole-number batch size in newsletter configuration. An isolated controller test failed before queuing with a negative batch size; the actual configuration save and Joomla send route were not tested.

The preview's send action currently points to a different controller from the bulk-send handler and may not start delivery. The preview's recipient selection also differs from the fields expected by the send handler. Verify the complete flow and selected recipients with a mail sink before relying on it.

The progress display may omit recipient details after the first row. Do not treat that display alone as proof of which messages were delivered; use a mail sink when testing and check delivery independently.

The inspected signup code may publish an entry before confirmation, and the configuration test-mail result is not a reliable delivery confirmation. Do not send to real subscribers until consent, unsubscribe, message content, authorization and delivery are independently verified. See [Newsletter subscribers](chapters/communication/newletters-subcribers.md) and [Newsletter configuration](chapters/global-configuration/newsletter.md).

<h4 id="create">Create a newsletter</h4>

1. Choose **New**, enter the name and subject, compose the body and select a suitable template.
2. Save and review the result with a test recipient and mail sink.
3. Check consent and recipient selection separately before any approved real send.
