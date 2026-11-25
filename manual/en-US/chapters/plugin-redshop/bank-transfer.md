## redSHOP Bank Transfer Payment

The optional `rs_payment_banktransfer` plugin provides an offline bank-transfer method. An order receipt does not prove that the bank has received payment. Confirm receipt through your authorized reconciliation process before treating an order as paid.

1. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop first. Confirm the exact package and Joomla/redSHOP compatibility.
2. Review the payment price or discount, private-person and business eligibility, guest and member visibility, shopper groups, countries, status and customer-facing instructions. The manifest defaults both customer types and guest/member visibility to Yes; choose settings appropriate to the shop.
3. Use accurate approved transfer instructions, without exposing credentials. Test permitted and excluded customers and countries, fees, checkout, receipt, order status and any messages using disposable data.
4. Verify the separate payment status and reconciliation workflow before enabling the method for customers.

The inspected handler proceeds to an order receipt without a payment gateway and may send an order email if configured. Actual checkout, email, payment status and bank reconciliation have not been tested.

### Plugin settings

| Setting | Purpose and new-install manifest default |
|---|---|
| Payment Plugin Description | Checkout tooltip; initially blank. |
| Payment operand, Payment price, Discount Type | Configure a charge or discount. The operand defaults to `-`, price is blank, and type defaults to Percentage; Total is the fixed-amount option. The inspected calculation adds for `+` and subtracts for `-`. For example, a test value of `2` with Percentage means 2%, not 0.02%. Verify the calculation base, rounding and resulting total in your shop. |
| Show on Private Person, Business, Guest, Member | Control the applicable customer categories; all four default to Yes. |
| Order Status transactions | Select an existing order status; the manifest default is code `C`, whose meaning depends on your configured statuses. It is not proof of receipt of funds. |
| Enter Extra Info, Select Extra Field | Provide customer-facing information and select payment-section fields for checkout. Extra information starts blank. Use only approved public transfer instructions. |
| Select Shopper Group, Show on Country | Restrict availability where needed; both selections start blank. Test matching and nonmatching customers and destinations. |
| E-conomic Payment Conditions ID, Design and Layout ID | Optional integration identifiers, initially blank. Verify mappings with the accounting integration before use. |
| Logo | Optional image, initially blank. Check its checkout display and accessibility. |

These are manifest defaults for a new configuration, not necessarily the values saved in an existing shop. Reopen the plugin after saving and test the available method and final order totals with disposable data.
