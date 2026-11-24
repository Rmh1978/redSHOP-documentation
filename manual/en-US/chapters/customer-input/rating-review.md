## Ratings and reviews

Open **Customer Input → Rating/Review** to manage reviews. Restrict moderation access and verify privacy, escaping and spam handling before enabling public submissions.

<h2 id="overview-1">Review list</h2>
<h4 id="field-1">Fields</h4>

The form-backed list includes title, product, user, date, rating, favoured and published state. Publication and favoured are distinct controls.

<h4 id="action-1">Actions</h4>

Use the available toolbar to create, edit, publish, unpublish or delete records. Check the effects of bulk actions on a disposable shop first.

<h2 id="overview-2">Review details</h2>
<h4 id="field-2">Fields</h4>

Title, comment, product, user, rating, favoured and publication are required by the admin form. Date is also provided. Email, company name and images are hidden fields rather than normal visible admin inputs.

<h4 id="action-2">Actions</h4>

Save or Save & Close persists changes; Cancel leaves the current form edits. Verify a review after saving and before publishing.

<h2 id="working">Review workflow</h2>
<h4 id="create-1">Create or moderate in administration</h4>

Select a product and user, enter title, comment and rating, review the favoured and publication settings, and save. Confirm actual storefront output with a test product.

<h4 id="display">Display on the storefront</h4>

Product templates support `{product_rating}`, `{product_rating_summary}`, `{form_rating}` and `{form_rating_without_lightbox}`. Output also depends on review configuration and the selected template; test visibility and aggregate results with published and unpublished reviews.

<h4 id="create-2">Storefront submission</h4>

The inspected handler checks a Joomla token, applies the login-required setting, checks guest CAPTCHA, validates the form and checks for existing reviews. Submitted reviews are initially unpublished and not favoured in that path. Test guest and logged-in users, duplicates, moderation, notifications and accessible output in isolation; do not assume these checks alone establish complete security.
