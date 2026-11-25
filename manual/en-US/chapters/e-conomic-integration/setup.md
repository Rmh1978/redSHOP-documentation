## Set up the e-conomic integration

The optional integration requires both Joomla plugin settings and redSHOP configuration. Start with [e-conomic Integration](chapters/global-configuration/e-conomic-integration.md) for the account modes, configuration fields and isolated-test prerequisites.

1. Verify the exact plugin package and account type with the provider and prepare an isolated shop and approved test account. The manifest defaults the account type to e-conomic; Reviso is a separate choice.
2. Review the plugin's account authorization and debtor group, payment terms, layout and unit settings with the accounting administrator. Protect all credentials and avoid reusing production identifiers.
3. Review redSHOP's integration and invoice-booking settings and configure a test [account group](chapters/e-conomic-integration/account-group.md). Product, debtor and invoice operations can affect accounting data; do not enable live booking based on a successful connection alone.
4. Follow [Product synchronization](chapters/e-conomic-integration/sync.md) with disposable records, then test invoice and error/retry behavior and reconcile both systems.

### Plugin fields

| Setting | Purpose |
|---|---|
| **Select Account** | Choose e-conomic or Reviso. The manifest defaults to e-conomic; an existing saved choice may differ. |
| **Agreement number, username and password** | The form shows these for Reviso. Obtain the correct test-account details from the provider. |
| **Get Agreement Token** | The form shows the grant/renew control for e-conomic. Granting access opens an external authorization flow; use only the approved test account and verify the provider's current process first. |
| **Debtor group, payment terms, layout and unit IDs** | Map the plugin to the corresponding accounting settings. The manifest leaves these fields empty for a new configuration. Confirm the intended identifiers with the accounting administrator. |
| **Creditor (supplier) number** | Used by an inspected merchant-fee cashbook path. Confirm the correct account and treatment before enabling it. |
| **Create Cashbook Entry** | The manifest defaults this to Yes; saved settings may differ. Check the actual booking and payment flow before using it. |
| **Debtor reference extra fields** | Select the individual and company extra fields used for debtor references, where applicable. Verify that the selected fields and values are appropriate for the test account. |

Cashbook number and contra-account fields are hidden in the manifest; do not assume they can be configured from this form. Protect credentials and accounting identifiers in configuration and backups.

The inspected connection can fail with an error after SOAP client initialization fails (CODE-047). Current provider compatibility, authentication, synchronization and booking remain unverified; investigate failures before retrying and do not connect a live account until the workflow has been reviewed.
