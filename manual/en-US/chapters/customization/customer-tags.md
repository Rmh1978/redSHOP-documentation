## Customer tags

Customer tags are labels associated with products and customers. They are
different from the reusable template tags in the
[Text Library](chapters/customization/text-library.md).

### Configuration and storefront

**Enable Customer Tagging** is off by default in the distributed
configuration. With it enabled, the inspected product renderer can show the
`{my_tags_button}` form to a signed-in customer when the active product
template contains that tag. The submission code separates entered names at
spaces. Test the actual product template, account template and theme on an
isolated shop before enabling the feature for customers.

The inspected account query lists published tags associated with the current
customer. Tag records can be shared across customer-product associations, so
do not assume that changing a tag name affects only one product or customer.
The inspected account detail links and edit form have inconsistencies that may
prevent customers from using them. Test the account list and its detail, edit
and removal controls before relying on them.

### Administrator list

Open **Customization → Customer Tags**. The list is designed to show a tag
name, usage, products, users, popularity, publication state and ID; it offers
sortable headings and a page-size control. The inspected query counts
association rows for usage, products and users, rather than distinct products
or distinct users. Treat these numbers as indicators, not independent unique
customer or product counts.

The editor provides a tag name and publication choice; a new record defaults
to published. Toolbar controls are present for creating, editing, deleting,
publishing and unpublishing. The inspected action and storage paths contain
inconsistencies, so delete and publication changes may fail or not persist.
Back up the shop and test changes with disposable records on an isolated
installation; check the saved state and affected customer associations instead
of relying on a success message alone.
