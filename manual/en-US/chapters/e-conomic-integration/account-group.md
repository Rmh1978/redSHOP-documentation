## Account Group

An e-conomic account group in redSHOP holds accounting mappings. The current account-group editor contains a name, VAT and non-VAT account numbers, discount and shipping account numbers for both cases, a discount product number and a published state. The product editor has an e-conomic account-group selector; redSHOP configuration also has a default group.

### Account-group list

The list displays the group name, account and discount-product mappings, publication state and ID. Open a name to edit it; sortable headings and pagination help navigate. The source defaults to ID ascending and does not provide search or filter controls in this list. The toolbar provides New, Publish, Unpublish and Delete. The selected-row and bulk-action handling requires further verification; do not assume the indicated action or message reflects a successful change. Review product and configuration references before unpublishing or deleting a group, and verify the resulting records on an isolated copy.

### Fields

The editor marks all fields except Published as required. Account inputs are numeric; the name and discount product number are text. For a new group these mapping fields start blank, while Published defaults to Yes. Confirm all mappings with the accounting administrator rather than copying example values.

| Field | Purpose |
|---|---|
| **Name** | Identify the mapping when selecting a group. |
| **VAT account / non-VAT account** | Account numbers for the respective sales mappings. |
| **Discount product number** | Accounting product identifier for discount lines. |
| **Discount VAT / non-VAT account** | Account numbers for discount lines in each case. |
| **Shipping VAT / non-VAT account** | Account numbers for shipping lines in each case. |
| **Published** | Whether the group is published; new groups default to Yes. |

Use the editor's Save or Apply action to store a change, or Cancel/Close to leave. Reopen the group and verify the saved mappings before testing downstream accounting operations.

### Configure a mapping

1. Work on an isolated copy with an approved test accounting account. Ask the accounting administrator for the correct test account numbers and product identifiers.
2. Open the account-group management screen in redSHOP and inspect existing groups before creating one. Enter a name and the required account and discount-product fields; choose the published state and save.
3. Review the default e-conomic account group in configuration and the group selected on relevant products. Do not assume the default or sample values match your chart of accounts.
4. With disposable data, verify product groups, taxable and non-taxable lines, discounts and shipping in the accounting test system. Compare the resulting draft or test booking against the expected mapping.

The editor and fields exist in current source, but actual provider synchronization and accounting outcomes have not been verified. See [e-conomic Integration](chapters/global-configuration/e-conomic-integration.md) before enabling the integration.
