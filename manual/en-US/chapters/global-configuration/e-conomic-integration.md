## e-conomic Integration

The current source includes an optional `economic/economic` Marketplace plugin and redSHOP configuration for e-conomic integration. The plugin also offers a Reviso account mode. Provider API compatibility, authentication, synchronization and booking have not yet been verified for the current plugin; its connection code uses SOAP. Do not connect a live account or enable automatic booking solely on the basis of these settings.

### Prepare an isolated integration

1. Confirm with the plugin distributor and accounting provider that the exact plugin version, API, Joomla/PHP versions and account type are supported. Obtain an appropriate test account and a disposable copy of the shop and database.
2. Back up the shop and accounting test data. Restrict administrator access; do not put credentials, tokens, customer data or provider responses in screenshots, documentation or shared logs.
3. If the approved plugin is installed, inspect it in Joomla's plugin manager. Its **Select Account** setting offers e-conomic and Reviso modes. The manifest exposes an agreement-token control for e-conomic; Reviso mode has agreement number, username and password fields. Configure only test credentials in the isolated environment and use the provider's current instructions for authorization.
4. Review the plugin's debtor group, payment terms, layout, unit, creditor, cashbook and debtor-reference settings with the accounting administrator. Do not invent IDs or reuse production values.
5. In redSHOP configuration, review the e-conomic settings and account-group mappings before enabling the integration. Test with disposable products, customers and orders; keep real booking and live provider connections disabled.

### redSHOP configuration

The current configuration screen contains:

| Setting | Available configuration |
|---|---|
| e-conomic Integration | Enable or disable the integration. |
| Choice of Book Invoice | Direct booking, manual booking, or booking on a selected order status. |
| e-conomic book invoice number | Use the order number or sequential numbering in e-conomic. |
| Default e-conomic Account Group | Select the default mapping; see [Account Group](chapters/e-conomic-integration/account-group.md). |
| Store Attributes as Products in e-conomic | Choose no attribute products, attributes as products, or attributes and products. |
| Short error messages | Controls error-message detail. Treat all diagnostics as potentially sensitive and redact them. |

These are source-defined options, not a guarantee of successful synchronization or booking. The administrator screen warns that finalizing drafts outside redSHOP can cause invoice-number mismatches; verify the exact workflow and numbering with the provider before use.

The distributed configuration disables e-conomic integration. The form shows its dependent controls when enabled, and shows the order-status selector for status-based booking. An existing shop may have different saved settings.

### Verify before any live use

With an approved provider-compatible test environment, check authentication and permissions; product and group mappings; debtor and tax data; shipping and discounts; draft creation, booking and numbering; retries and duplicate prevention; and reconciliation or refund handling. Compare both systems after each action. Resolve errors and review accounting consequences before considering production activation.

See [Product synchronization](chapters/e-conomic-integration/sync.md) and [Setup](chapters/e-conomic-integration/setup.md).
