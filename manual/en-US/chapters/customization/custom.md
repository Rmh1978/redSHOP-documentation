## Custom field groups

Custom field groups organize related custom fields within a section. A group is not itself an input field: configure each field separately, including its type, publication and display settings.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find a group

Open **Custom Field Groups** in redSHOP customization. The list shows name, section, description, publication state and ID. Search by name, enter `id:` followed by the record ID, or filter by section. Sort by name, publication state or ID. Open the name to edit it; inline name editing is available when enabled and permitted.

Use **New**, or select records for **Copy**, **Delete**, **Publish** or **Unpublish**, subject to your permissions. Before changing or deleting a group, back up the shop and review fields that refer to it.

The shared copy path is intended to create an unpublished group with a distinct name; it copies the group record, not its associated fields. A current table-lookup defect can prevent copying, so check warnings and confirm the record exists. If it succeeds, reopen the copy, review its section and assign fields deliberately before publishing it.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a>
### Create a group

1. Select **New**, enter the required name and select the required section.
2. Optionally add a description and choose the publication state, then save. New groups default to Published.
3. Reopen the record to check its values. Use the same section for the fields you intend to group.

For example, create a **Specifications** group in the product section, then assign a disposable product field to that same section and group. Check the product editor and intended output before applying the pattern to existing products.

<a id="add"></a>
### Associate fields

Open the relevant field in **Custom Fields**, select its section and group, and save. The refreshed selector lists groups for the selected section; it returns at most 99 groups ordered by ID. If the intended group is unavailable, contact your maintainer rather than selecting an unrelated group. Reopen the field and verify its saved assignment. The field form also contains separate frontend, administrator, required and published settings; some settings depend on the section and type. Review the [custom-fields guide](chapters/customization/redshop.md) for field examples.

<a id="check"></a>
### Verify the result

On an isolated installation, create a disposable field and group, then check the relevant administrator editor and storefront or checkout context. The product editor obtains product-section fields through the extra-fields helper, which groups returned fields by group name; output also depends on field configuration and the selected template.

Use distinct group names within a section and verify the resulting tabs. The inspected `listAllField` path groups by the returned name rather than the group ID, so fields from groups with identical names can be combined there. Other rendering paths may behave differently.

Test a published and unpublished group, a field without a group, different sections, required values and save/reload behavior. In the `listAllField` path, the field query filters the field's publication state but does not filter the joined group's publication state; do not rely on unpublishing a group to hide its fields. Check with restricted and authorized accounts and verify output escaping. Visibility switches are not a substitute for authorization; do not put sensitive data into a field until storage, access and output are verified for the intended use.
