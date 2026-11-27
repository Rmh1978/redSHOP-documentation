## Ratings and reviews

Open **Customer Input → Rating/Review** to manage reviews. Restrict moderation access and verify privacy, escaping and spam handling before enabling public submissions.

<h2 id="overview-1">Review list</h2>
<h4 id="field-1">Fields</h4>

The form-backed list includes title, product, user, date, rating, favoured and published state. Publication and favoured are distinct controls.

Search matches username, comment or product name, not the review title. The model defaults to ID ascending unless a saved list selection applies. Use the available sortable headings and pagination to navigate.

The user, date and publication headings are displayed as sortable, but the inspected model falls back to ID ordering for those fields. Check the resulting order before using it for moderation.

The product-name link currently uses a review-edit task with the product ID. Open the product from Product Management instead of relying on that link.

<h4 id="action-1">Actions</h4>

Depending on permissions, the list toolbar offers New, Delete, Publish, Unpublish and Check-in. Open a review title to edit it. Check the effects of bulk actions on a disposable shop first.

<h2 id="overview-2">Review details</h2>
<h4 id="field-2">Fields</h4>

The form definition marks title, comment, product, user, rating, favoured and publication as required:

- **Title and comment:** enter the review heading and text.
- **Product and user:** select the product and associated user.
- **Rating:** choose a value from zero to five using the displayed radio controls.
- **Favoured:** controls the separate favoured state.
- **Published:** controls publication.

New administrator-created reviews default to Favoured and Published, unlike the inspected storefront submission path; review both settings before saving. The rating date is shown in the list, but the inspected editor suppresses its date field. Email, company name and images are hidden fields rather than normal visible admin inputs. Verify actual form validation and saved values on the installed version.

If a review has no stored timestamp, its displayed date can show the current date rather than its original creation date. Check review dates before relying on them for moderation or reporting.

<h4 id="action-2">Actions</h4>

Save or Save & Close persists changes; Cancel leaves the current form edits. Verify a review after saving and before publishing.

<h2 id="working">Review workflow</h2>
<h4 id="create-1">Create or moderate in administration</h4>

Select a product and user, enter title, comment and rating, review the favoured and publication settings, and save. Confirm actual storefront output with a test product.

<h4 id="display">Display on the storefront</h4>

Product templates support `{product_rating}`, `{product_rating_summary}`, `{form_rating}` and `{form_rating_without_lightbox}`. Output also depends on review configuration and the selected template; test visibility and aggregate results with published and unpublished reviews.

<h4 id="create-2">Storefront submission</h4>

The inspected handler checks a Joomla token, applies the login-required setting, attempts a guest CAPTCHA check, validates the form and checks for existing reviews. Guest submission may fail during the CAPTCHA check in the inspected version. Submitted reviews are initially unpublished and not favoured in that path. If a notification fails, a review may already have been saved; check the moderation list before retrying. Test guest and logged-in users, duplicates, moderation, notifications and accessible output in isolation; do not assume these checks alone establish complete security.
