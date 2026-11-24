## Dashboard menu visibility

Open redSHOP Configuration and choose **Dashboard**. The menu-hide form is built from the current redSHOP sidebar, including entries supplied by enabled integrations. Check an entry to hide it and save; clear it and save to show it again. Checking a section also checks its listed children in the current editor.

This is a display preference, **not an authorization control**. Configure Joomla/redSHOP permissions separately and verify a restricted account cannot access protected actions directly. Keep a configuration route available to an authorized administrator and test changes with a non-production account.

The available entries vary with configuration, extensions and permissions. The following headings describe groups rather than promising every historical menu item is installed:

<h4 id="products">Products</h4>

Product, price, manufacturer, supplier, tax, attribute and product-file navigation can appear here. See [products](chapters/product-management/products-redshop.md).

<h4 id="order">Orders</h4>

Order, status, search, quotation and other enabled order workflows can appear here. See [orders](chapters/orders/order-list.md).

<h4 id="discount">Discounts</h4>

Discount, coupon, voucher, gift-card and promotion entries depend on installed features.

<h4 id="communication">Communication</h4>

Mail, newsletters and subscriptions are separate workflows. Hiding an entry does not change subscription or mailing consent.

<h4 id="shipping">Shipping</h4>

Shipping methods, boxes and wrapping entries may appear. See [shipping methods](chapters/shipping/shipping-methods.md).

<h4 id="user">Users</h4>

Customer records, user synchronization and shopper groups are distinct from Joomla permissions.

<h4 id="import-export">Import/Export</h4>

Import/export visibility does not disable installed plugins or prevent authorized data access.

<h4 id="customization">Customization</h4>

Templates, custom fields, text, geographical data and other configured customization tools appear as available.

<h4 id="customer-input">Customer input</h4>

Question and review entries depend on the enabled functionality.

<h4 id="statistics">Statistics</h4>

Menu visibility and the separate statistics collection setting are different controls. Hiding a statistics entry is not equivalent to disabling data collection or deleting existing records.

<h4 id="configuration">Configuration</h4>

Configuration and related administrative entries should remain available to authorized maintainers. Hiding their navigation does not revoke access.

<h4 id="tools">Tools</h4>

Check the impact and backups before running maintenance tools; hiding a link does not prevent a permitted action.

<h4 id="categories">Categories</h4>

Category navigation is part of the current shop sidebar; see [categories](chapters/categories/redshop-categories.md).

<h4 id="medias">Media</h4>

Media navigation is part of the current shop sidebar; see [media management](chapters/media/working-medias.md).

Stockroom appears when its configuration is enabled, and extensions can add sidebar entries. After saving, check the resulting menu and direct permissions with both an administrator and a restricted test account.
