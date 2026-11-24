## Product questions

Open **Customer Input → Questions** in redSHOP administration. Questions and answers may contain personal data; restrict access and verify privacy and moderation before enabling public submissions.

<h2 id="overview-1">Question list</h2>
<h4 id="field-1">Fields</h4>

The list identifies questions, products, publication and associated customer information. Check the installed UI and permissions before relying on any column or ordering behavior.

<h4 id="action-1">Actions</h4>

Use the available toolbar to create, edit, publish, unpublish or delete records. Back up before bulk deletion.

<h2 id="overview-2">Question details</h2>
<h4 id="field-2">Fields</h4>

The current form requires a product and provides telephone, address, publication, question and answer fields. User name and email are hidden form fields, not ordinary visible inputs. The inspected admin save path assigns the current administrator's name and email when creating a record; test the workflow rather than assuming it creates a customer-authored question.

<h4 id="action-2">Actions</h4>

Save persists changes; the controller also has a separate send action for answers. Saving an answer should not be assumed to have sent mail: verify the action and receipt using a mail sink.

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
