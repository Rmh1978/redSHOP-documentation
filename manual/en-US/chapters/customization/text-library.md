## Text Library

The Text Library stores reusable content for redSHOP tags. Open
**Customization → Text Library** in redSHOP administration. Changes to a
published entry can affect every template that uses its tag.

### Text list

The list shows the name, description, section, publication state and ID.
Search by name or use the section filter. The list query also accepts `id:`
followed by an ID; the default order is ID ascending. Open a name to edit.
Inline editing, publication and toolbar actions depend on permissions and
settings. Actions include **New**, **Copy**, **Delete**, **Publish**,
**Unpublish** and **Check-in** where available.

### Create reusable text

1. Select **New**. Enter a required **Name** for the tag and an optional
   **Description** for administrators.
2. Select **Section**: Product, Category or Newsletter. Product is the form
   default. **Published** defaults to Yes for a new entry.
3. Enter the replacement **Content** in the editor and save. For example, an
   entry named `delivery_notice` is referenced as `{delivery_notice}` in a
   supported template.
4. Back up the template, insert the tag where appropriate and test its output
   on an isolated copy. The template editor's hints list published entries by
   section.

The inspected replacement helper loads published text from all sections; the
section is not a restriction enforced by that helper. Use distinct names across
sections and verify each template and newsletter path rather than assuming
that duplicate names or every custom template will behave as intended.
Unpublishing or deleting an entry can leave its tag in output. Review existing
uses before changing a name, section, publication state or content.
