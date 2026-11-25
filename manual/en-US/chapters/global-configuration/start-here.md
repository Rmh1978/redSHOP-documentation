## redSHOP configuration: start here

In Joomla administration open **Components → redSHOP**, then **Configuration**. Available tabs and labels can vary by version and installed extensions. Back up the shop before changing production settings, and test payment, tax, shipping, order and email changes on an isolated copy with mock services.

The current configuration view includes:

- [General](chapters/global-configuration/general.md) and [User](chapters/global-configuration/user.md): store and customer settings.
- [Categories](chapters/global-configuration/categories.md), [Manufacturers](chapters/global-configuration/manufacturers.md) and [Products](chapters/global-configuration/products.md): catalogue defaults, templates and images.
- [Feature Settings](chapters/global-configuration/feature-settings.md): reviews, comparisons, wishlist, import/export and stockroom controls.
- [Price](chapters/global-configuration/price.md) and [Cart/Checkout](chapters/global-configuration/cart.md): currency, tax, discounts, cart and checkout settings.
- [Orders](chapters/global-configuration/orders.md): order and invoice mail, numbering and reorder options. **Order ID Reset deletes order-related data.**
- [Newsletter](chapters/global-configuration/newsletter.md): newsletter and test-mail settings; verify consent and delivery before using live subscribers.
- [Integration](chapters/global-configuration/integration.md) and [SEO](chapters/global-configuration/seo.md): integration and search-engine settings.
- **Design Style:** the inspected frontend group has background and font-size fields for add-to-cart and module checkout buttons, plus a request-quote background field. The inspected backend group currently contains no controls. Back up your design and test the active frontend templates after changes.
- [Dashboard](chapters/global-configuration/dashboard.md): menu visibility; it does not replace permissions.
- **Performance:** includes an enable-performance-mode option, disabled in the distributed configuration. The inspected performance helper uses it for session-based cached values; the effect on a particular page or extension is not established by the switch alone. Verify behavior and performance on an isolated copy.
- [About](chapters/global-configuration/about.md): diagnostic system and extension information.

Review individual articles for field details and limitations. Save only intentional changes, then verify storefront and administrator workflows with appropriately restricted test accounts.
