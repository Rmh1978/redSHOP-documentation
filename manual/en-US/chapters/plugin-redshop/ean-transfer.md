## redSHOP EAN Transfer Payment

The optional `rs_payment_eantransfer` plugin provides an EAN transfer payment option. Its presence does not establish that an electronic invoice was sent or that payment was received.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop first, after checking the exact package and Joomla/redSHOP compatibility.
2. Review private-person and business eligibility, shopper groups, order status, extra information and any e-conomic identifiers relevant to your installation. The manifest defaults both customer types to Yes. The inspected manifest does not declare the payment-price field described in the old guide.
3. Test eligible and ineligible customers and shopper groups with disposable data. Verify the checkout, order receipt, status, any messages and the complete electronic-invoicing process independently.
4. Use the shop's authorized reconciliation workflow to confirm payment; do not infer payment or invoice delivery from the order receipt.

The inspected handler returns to the checkout flow and may send an order email if configured. Joomla, actual invoices and provider integration have not been tested.

### Plugin settings

| Setting | Purpose and new-install manifest default |
|---|---|
| Payment Plugin Description | Checkout tooltip; initially blank. |
| Show on Private Person, Show on Business | Customer-type visibility; both default to Yes. |
| E-conomic Payment Conditions ID, Design and Layout ID | Optional integration identifiers, initially blank. Verify mappings with the accounting integration. |
| Order Status transactions | Select an existing order status; the manifest default is code `C`, whose meaning depends on your configured statuses. It does not confirm invoice delivery or payment. |
| Select Shopper Group | Choose applicable shopper groups; the selection starts blank. Test members and nonmembers before enabling the method. |
| Enter Extra Info | Customer-facing information. The manifest contains the placeholder `Please enter your Extra Info`; replace or clear it with approved instructions before use. |
| Logo | Optional image, initially blank. Check its checkout display and accessibility. |

These are manifest defaults for a new configuration, not necessarily the values saved in an existing shop. Reopen the plugin after saving and test the complete invoice and payment workflow separately.
