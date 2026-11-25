## Cart and checkout configuration

Open redSHOP Configuration and review the Cart settings, Payment/Shipping/Securing settings and cart image settings. Their exact presentation depends on the installed version. Back up configuration and test with disposable products and non-charging payment methods before changing a live shop.

<h2 id="add-to-cart">Add to cart</h2>

- **Individual add to cart:** controls the individual-attribute add-to-cart behavior. Test the active product and attribute templates.
- **Allow pre-order and message:** configure pre-order availability and its message. The message control is shown when pre-order is enabled. Product-level settings, stockroom and actual stock affect the workflow.
- **Quotation mode and show quotation price:** configure quotation behavior and price display. The price control is shown when quotation mode is enabled. Test the quotation template and shopper-group settings.
- **Cart timeout:** expressed in minutes. The inspected expiry path multiplies it by 60 and removes expired reserved-cart products only when product reservation and stockroom are enabled; it is called when the cart model is constructed. Configuration save substitutes 20 for a value at or below zero. This is not a general guarantee that every inactive session or cart is emptied; test reservation and session expiration separately.
- **AJAX cart box:** enable the AJAX display and select its detail-box template, display duration and box dimensions. The tooltip describes duration in milliseconds; zero means no automatic timeout. The distributed configuration has AJAX disabled and a `3000` millisecond duration; existing shops can differ. A product template may request a named detail template, otherwise the configured default is considered. When different products are processed in one request, the helper can reuse the first product's selection for later products; test mixed-product lists and custom fields.
- **Add-to-cart behavior:** choose **Direct to Cart** or **Stay on Current View**; the selector also has a Select option. The distributed setting is Stay on Current View. Test with and without AJAX. The form also includes an option to clear user information; verify its effect with a disposable session before enabling it.

For example, set AJAX duration to `3000` for three seconds, then test add-to-cart on product and category pages, including keyboard access, errors and the chosen template.

The distributed configuration disables individual add-to-cart, pre-order and quotation mode, with a blank pre-order message and quotation-price display disabled. Its AJAX detail-box template ID is `112`, detail dimensions are 500 × 600 and box dimensions are 500 × 150; verify the template exists and test actual output. The distributed cart timeout is 20 minutes.

<h2 id="cart-settings">Cart settings</h2>

The form provides one-step checkout, shipping display in cart, attribute-image display, quantity display, quantity input length and comma-separated quantity choices, Continue Shopping link and minimum order total. Display depends on the template and its tags. **Quantity Max Characters** controls the text input's maximum length in the inspected product renderer, not its starting quantity; its distributed value is `3`. The distributed quantity choices are `1,5,10`; verify the selector and active template before relying on them.

The distributed configuration disables one-step checkout and cart attribute
images, enables shipping display and quantity text entry, leaves the Continue
Shopping link blank and sets the minimum order total to zero. Existing shop
settings may differ.

**Minimum order total requires special care:** the inspected cart-template path compares the cart total when `{minimum_order_total}` is present, and adds a warning and client-side checkout styling unless the customer bypasses the minimum. The older JavaScript checkout check is commented out. Do not rely on this setting as a universally enforced server-side minimum without an isolated end-to-end verification and code review.

Test guest and registered customers, one-step and other checkout paths, stock, shipping, coupons, VAT and the final order. Compare amounts immediately below, equal to and above the threshold, including any authorized minimum bypass.

<h2 id="payment">Payment</h2>

Payment calculation can use total or subtotal; the distributed choice is total. This affects the calculation base for applicable payment charges or discounts, not proof that payment succeeded. Test each enabled method and mixed carts using a mock or sandbox provider; verify payment status separately from order status.

<h2 id="shipping">Shipping</h2>

The form includes optional shipping address, shipping-method enablement, split-delivery cost, split-delivery time difference and delivery rule. Configure shipping according to the products and installed methods. Do not assume disabling shipping is appropriate for a mixed physical and digital cart; test addresses, rates and tax.

The cart's optional shipping calculator may fail to update the displayed shipping amount and total. Test the active cart template and verify shipping separately at checkout rather than relying on the calculator alone.

<h2 id="securing">Transport security</h2>

The configuration includes checkout and backend SSL options. Serve both storefront and administration over HTTPS with a valid certificate and correctly configured Joomla and proxy settings; test redirects, callbacks and assets. These switches alone do not secure a shop or authorize storing card details.

<h2 id="cart-image">Cart images</h2>

The current image settings include cart thumbnail width/height and watermark, and uploads for add-to-cart, request-quote, quantity-update and delete images. The distributed thumbnail size is 50 × 50 and watermarking is disabled. Template output may differ; verify previews, accessibility and storefront rendering after saving.
