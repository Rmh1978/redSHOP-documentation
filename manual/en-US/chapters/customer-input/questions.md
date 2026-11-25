## Product questions

Open **Customer Input → Questions** in redSHOP administration. Questions and answers may contain personal data; restrict access and verify privacy and moderation before enabling public submissions.

<h2 id="overview-1">Question list</h2>
<h4 id="field-1">Fields</h4>

The list identifies questions, products, answer counts, publication and associated customer name and email. Search matches question text, and a product filter is available. Use the sortable headings and pagination to navigate.

<h4 id="action-1">Actions</h4>

Use **New**, **Publish**, **Unpublish** or **Delete** from the list toolbar. Open a question to edit it. Back up before bulk deletion.

<h2 id="overview-2">Question details</h2>
<h4 id="field-2">Fields</h4>

- **Product:** required; select the product to which the question applies.
- **User name and email:** displayed from hidden form fields, not ordinary editable inputs. The inspected admin save path assigns the current administrator's username and email when creating a record; do not assume it creates a customer-authored question.
- **Telephone and address:** optional contact details. Handle them according to the shop's privacy policy.
- **Published:** new administrator records default to Yes; review this before saving.
- **Question and Answer:** enter the question and a new answer in the respective editors. Neither editor is marked required in the form.

The question or answer date may change when a record is saved. Check dates before relying on them as a historical record.

<h4 id="action-2">Actions</h4>

Save and Apply can report success even when a save fails, so reopen the record and verify the result. Saving an answer does not itself confirm mail delivery.

Existing answers appear in a separate list with selection boxes, answer text, user name, email and time. **Delete** and **Send** act on selected answers through separate requests; save other edits first. Send can report success even when the mail helper fails, so verify receipt using a mail sink rather than relying on the message alone.

<h2 id="working">Working with questions</h2>
<h4 id="create-1">Create or moderate in administration</h4>

Select the product, enter the question or answer, review publication and save. Reopen the record to check the result, especially after an error.

<h4 id="create-2">Storefront submission</h4>

The storefront submit handler checks a Joomla token and validates the form; for guests it checks CAPTCHA when the ask-question template includes the CAPTCHA tag. Verify authorization, spam protection, mail and moderation on an isolated shop. The template and configuration determine whether the form is shown.

<h4 id="display">Display the question form</h4>

The product template supports `{ask_question_about_product}` and `{ask_question_about_product_without_lightbox}`. Test each with the active template, including keyboard access and guest behavior.

<h4 id="show">Display questions and answers</h4>

The product renderer uses nested question and answer loops. A minimal structure is:

```text
{question_loop_start}
{question}
{answer_loop_start}
{answer}
{answer_loop_end}
{question_loop_end}
```

Additional tags include `{question_owner}`, `{question_date}`, `{answer_owner}` and `{answer_date}`. Test publication, escaping and personal-data exposure before making questions public.
