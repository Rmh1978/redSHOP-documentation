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
| Payment fee or discount, Payment adjustment amount, Adjustment amount type | Configure a charge or discount. The operand defaults to `-`, amount is blank, and type defaults to Percentage; Total is the fixed-amount option. The inspected helper adds for `+` and subtracts for `-`. For example, a test value of `2` with Percentage means 2%, not 0.02%. The helper rounds the adjustment to two decimal places and caps a `-` adjustment at its supplied total. Verify the actual calculation base and resulting total in your shop. |
| Show for private customers, business customers, guest users, registered users | Control the applicable customer categories; all four default to Yes. |
| Order status after successful payment | Select an existing order status; the manifest default is code `C`, whose meaning depends on your configured statuses. It is not proof of receipt of funds. |
| Enter Extra Info, Select Extra Field | Provide customer-facing information and select payment-section fields for checkout. Extra information starts blank. Use only approved public transfer instructions. |
| Available to shopper groups, Show on Country | Restrict availability where needed; both selections start blank. Test matching and nonmatching customers and destinations. |
| Logo | Optional image, initially blank. Check its checkout display and accessibility. |

The current manifest does not offer local e-conomic fields. Review the central [e-conomic settings](chapters/e-conomic-integration/setup.md) and any preserved legacy values before using accounting mappings.

These are manifest defaults for a new configuration, not necessarily the values saved in an existing shop. Reopen the plugin after saving and test the available method and final order totals with disposable data.
