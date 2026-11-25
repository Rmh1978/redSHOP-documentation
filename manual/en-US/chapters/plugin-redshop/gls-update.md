## GLS shipping information update

The previous guide referred to a separate “GLS - Update Shipping User Information” plugin. Its exact package and current availability have not been established. Do not assume it is included, required or compatible with your installation.

The current [Default GLS plugin](chapters/plugin-redshop/gls-plugin.md) source contains a shipping-information update handler, but source inspection alone does not establish the resulting address or order behavior. Check the installed extension identity and version with its distributor before enabling any additional integration.

The Default GLS handler can fail when processing a pickup selection. Verify the entire order and address flow on an isolated shop before offering the integration.

On an isolated shop with disposable addresses and provider-authorized test facilities, verify pickup selection, saved shipping details, order display, access and checkout. Do not use live customer data or create real shipments for the test.
