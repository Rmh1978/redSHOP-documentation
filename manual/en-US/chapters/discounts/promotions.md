## Promotions

Promotion rules are provided by installed `redshop_promotion` plugins. The bundled Promotion plugin supports product-quantity and order-volume conditions, product awards and optional free shipping. **Do not enable it for live campaigns until the known date and award-product lookup issues have been reviewed and the complete cart and order flow tested.**

<h2 id="overview-1">Promotion list</h2>
<h4 id="promotions-1">Fields</h4>

The base form includes a required name, promotion type, description and publication state; the list has a search filter.

<h4 id="actions-1">Actions</h4>

Create, edit, publish, unpublish and delete rules as permitted. Plugin availability and permissions affect the available choices.

<h2 id="overview-2">Promotion details</h2>
<h4 id="promotions-2">Conditions and awards</h4>

With the bundled Promotion plugin, select **Amount Product** or **Volume Order**. Amount Product offers manufacturer, category, product and quantity controls; Volume Order has a monetary threshold. Optional dates and an award product, award quantity and free-shipping setting are provided. Other plugins can define different fields and behavior.

The inspected order-volume helper compares the threshold to product subtotal excluding VAT. The plugin adds an award cart line and can set free shipping, but actual checkout, stock, tax and overlapping promotions need isolated testing.

<h4 id="actions-2">Save</h4>

Save and reopen a disposable rule to verify its settings and plugin-specific validation.

<h2 id="work">Testing promotions</h2>
<h4 id="amount-product">Product quantity</h4>

Use disposable products and verify quantities just below, at and above the threshold, including manufacturer, category and product combinations. Check that the intended award and quantity are added and removed as the cart changes.

<h4 id="volume-order">Order volume</h4>

Check subtotal values below, at and above the threshold and compare shipping and tax before and after the rule applies or is removed. Use mock payment and verify the saved order and inventory.

The current plugin formats the comparison date incorrectly, and its award helper looks up the promotion ID as a product ID rather than the selected award ID. Both were reproduced with isolated mocks. Test date boundaries, award category, unavailable stock, multiple promotions and repeated cart updates after separately reviewed fixes.
