## redSHOP navigation panel

The administrator sidebar groups links to the shop's management screens. Entries depend on configuration, extensions and permissions, and may differ between screens. Use list toolbar actions to create or edit records where available. Hiding a menu entry does **not** revoke access; configure Joomla/redSHOP permissions separately.

<h2 id="wizard">Configuration and wizard</h2>

For routine settings use [Configuration](chapters/global-configuration/start-here.md). Do not reopen the [wizard](chapters/getting-started-general/redshop-configuration-wizard.md) on a live shop without backup and an isolated rehearsal: its welcome path can overwrite the active configuration.

<h2 id="productManagement">Products and shop</h2>

Products, prices, manufacturers, suppliers, tax groups/rates and attributes are grouped in the current product menu. Product Files is permission-dependent. Categories and media have separate shop navigation. See [Products](chapters/product-management/products-redshop.md), [Categories](chapters/categories/redshop-categories.md) and [Media](chapters/media/working-medias.md).

<h2 id="orders">Orders and discounts</h2>

Order navigation includes orders, subscriptions, statuses, quotations and product-order search; stockroom navigation is conditional. Discounts include mass and order/product discounts, gift cards, vouchers, coupons and promotions. See [Orders](chapters/orders/order-list.md), [Stockroom](chapters/stockroom/stockroom-management.md) and [Discounts](chapters/discounts/overview-discounts.md).

<h2 id="comunication">Communication</h2>

Manage mail templates, newsletters, newsletter subscriptions and statistics separately. Test recipients and consent before sending.

<h2 id="shipping">Shipping</h2>

Shipping methods, boxes and wrapping have separate lists. Methods are supplied by installed plugins; availability and rate options vary. See [Shipping methods](chapters/shipping/shipping-methods.md).

<h2 id="user">Users</h2>

User and shopper-group lists are separate from Joomla access permissions. User synchronization is a state-changing operation: back up and test it on a copy first. See [User management](chapters/users/user-management.md).

<h2 id="vat">VAT, currency and locations</h2>

Tax groups and rates are in the product group; currencies, countries, states and postal codes appear under customization in the current sidebar. Review [VAT rates](chapters/vat/vat-rate.md) and [Currencies](chapters/vat/currency.md) before changing shop calculations.

<h2 id="importExport">Import/export</h2>

Data and XML import/export entries are distinct; available data types depend on installed plugins. Back up and test imports on an isolated copy. A VirtueMart import entry appears when that component is installed and enabled; do not run a migration on a live shop without a reviewed migration plan.

<h2 id="customization">Customization</h2>

This group includes templates, custom fields and field groups, text library, catalog and sample entries, customer tags, attribute sets and location/currency lists. See [Templates](chapters/customization/template.md) and [Custom fields](chapters/customization/custom.md).

<h2 id="customer">Customer input</h2>

Question and review lists support moderation. Verify publication and privacy behavior before enabling customer submissions.

<h2 id="accounting">Accounting</h2>

The account-group entries appear when the e-conomic integration is enabled with its plugin, or when the Billy integration plugin is enabled. Provider connection, permissions, mappings and posting must be tested separately; see [e-conomic setup](chapters/e-conomic-integration/setup.md).

<h2 id="statistics">Statistics</h2>

The sidebar includes customer, order and product reports, along with visitor, turnover and other statistics views. Variant and quotation report entries are not enabled in the inspected sidebar. Verify report calculations and access with representative test data; see the dashboard warning in [redSHOP dashboard](chapters/getting-started-general/redshop-main-menu.md).

<h2 id="configuration">Configuration and tools</h2>

Configuration includes plugin management, Marketplace, template reset and access settings. Tools include image and update tools; log and release entries depend on their respective plugin or permissions. Before a reset, import, optimization or cleanup, inspect the action, take a verified backup and rehearse it on a disposable shop.

See [Backend access management](chapters/getting-started-general/backend-access.md) for the group rules screen and testing precautions.
