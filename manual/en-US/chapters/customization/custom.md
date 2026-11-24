## Custom field groups

Custom field groups organize related custom fields within a section. A group is not itself an input field: configure each field separately, including its type, publication and display settings.

<a id="overview-1"></a><a id="field-1"></a><a id="action-1"></a>
### Find a group

Open **Custom Field Groups** in redSHOP customization. The list supports name search and section filtering. Before changing or deleting a group, back up the shop and review fields that refer to it.

<a id="overview-2"></a><a id="field-2"></a><a id="action-2"></a><a id="working"></a>
### Create a group

1. Select **New**, enter the required name and select the required section.
2. Optionally add a description and choose the publication state, then save.
3. Reopen the record to check its values. Use the same section for the fields you intend to group.

<a id="add"></a>
### Associate fields

Open the relevant field in **Custom Fields**, select its section and group, and save. The field form also contains separate frontend, administrator, required and published settings; some settings depend on the section and type. Review the [custom-fields guide](chapters/customization/redshop.md) for field examples.

<a id="check"></a>
### Verify the result

On an isolated installation, create a disposable field and group, then check the relevant administrator editor and storefront or checkout context. The product editor obtains product-section fields through the extra-fields helper, which groups returned fields by group name; output also depends on field configuration and the selected template.

Test a published and unpublished group, a field without a group, different sections, required values and save/reload behavior. In the `listAllField` path, the field query filters the field's publication state but does not filter the joined group's publication state; do not rely on unpublishing a group to hide its fields. Check with restricted and authorized accounts and verify output escaping. Visibility switches are not a substitute for authorization; do not put sensitive data into a field until storage, access and output are verified for the intended use.
