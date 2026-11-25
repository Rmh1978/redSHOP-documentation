## Promotions

Promotion rules are provided by installed `redshop_promotion` plugins. In the redSHOP administrator, open **Discount → Promotions**. The bundled Promotion plugin supports product-quantity and order-volume conditions, product awards and optional free shipping. **Do not enable it for live campaigns until the known date and award-product lookup issues have been reviewed and the complete cart and order flow tested.**

<h2 id="overview-1">Promotion list</h2>
<h4 id="promotions-1">Fields</h4>

The list includes the promotion name, description and publication state. Search matches the name; use the available ordering controls to sort the list.

<h4 id="actions-1">Actions</h4>

Create a rule with **New**, or open an existing row to edit it. Select rows to publish, unpublish or delete them as permitted. Plugin availability and permissions affect the available choices.

<h2 id="overview-2">Promotion details</h2>
<h4 id="promotions-2">Conditions and awards</h4>

The base form has a required **Name**, a promotion plugin **Type**, an optional **Description** and a **Publication** setting that defaults to published. Choose unpublished while preparing a rule. The plugin type is read-only when editing an existing rule.

With the bundled Promotion plugin:

- **Condition Type** defaults to **Amount Product**. Select **Volume Order** for an order-volume condition. The condition type is intended to be read-only for an existing promotion.
- **Amount Product:** select the applicable manufacturers, categories or products and enter a positive quantity. The selection fields allow multiple values. Verify combinations and the effect of empty selections in an isolated shop.
- **Volume Order:** enter a positive order-volume threshold. The inspected helper compares it with product subtotal excluding VAT.
- **From Date / To Date:** optional. The quantity condition's validation checks the date order, but known date-comparison problems must be addressed before using a live schedule.
- **Award product / quantity:** select the product and enter a positive award quantity; the form defaults the quantity to `1`.
- **Free Shipping:** explicitly select **Yes** or **No** and verify the saved value; the form's declared default does not match either option's stored value.

Other plugins can define different fields and behavior.

The plugin adds an award cart line and can set free shipping, but actual checkout, stock, tax and overlapping promotions need isolated testing.

In an isolated test of the promotion methods, removing a non-free-shipping promotion restored earlier shipping values even though another promotion's free-shipping award remained. Cart persistence and discount recalculation were stubbed. Test overlapping promotions and shipping totals after a separately reviewed fix.

Another isolated removal test produced an undefined-index warning when removing the final award cart item. The test treated warnings as exceptions; actual Joomla error handling and cart persistence were not tested.

In a separate isolated test, removing an award before other cart products duplicated one product and left another outside the reduced cart count. Do not rely on promotion removal preserving cart contents until this is addressed and verified end to end.

<h4 id="actions-2">Save</h4>

Save and reopen a disposable rule to verify its settings and plugin-specific validation.

<h2 id="work">Testing promotions</h2>
<h4 id="amount-product">Product quantity</h4>

Use disposable products and verify quantities just below, at and above the threshold, including manufacturer, category and product combinations. Check that the intended award and quantity are added and removed as the cart changes.

<h4 id="volume-order">Order volume</h4>

Check subtotal values below, at and above the threshold and compare shipping and tax before and after the rule applies or is removed. Use mock payment and verify the saved order and inventory.

The current plugin formats the comparison date incorrectly, and its award helper looks up the promotion ID as a product ID rather than the selected award ID. Both were reproduced with isolated mocks. Test date boundaries, award category, unavailable stock, multiple promotions and repeated cart updates after separately reviewed fixes.
