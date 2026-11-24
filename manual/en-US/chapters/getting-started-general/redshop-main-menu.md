## redSHOP administration dashboard

<h2 id="mainMenu">Open the dashboard</h2>

In Joomla administration choose **Components → redSHOP**. The installation screen also offers a Dashboard action. Access requires redSHOP management permission.

<h2 id="linkButtons">Navigate to shop sections</h2>

Use the [navigation panel](chapters/getting-started-general/redshop-navigation-panel.md) to reach products, orders, discounts, shipping, customers, configuration and other available sections. Menu entries vary with configuration, permissions and installed extensions; the current dashboard is not the historical grid of section buttons.

<h2 id="configuration">Toolbar</h2>

The current dashboard view can show **Statistics** and **Configuration**, subject to its menu-hide settings. A license-management link appears when licensing is enabled and the user has permission. Hiding a link is not a substitute for access control.

For regular shop settings use [Configuration](chapters/global-configuration/start-here.md). Do not rerun the [setup wizard](chapters/getting-started-general/redshop-configuration-wizard.md) on a live shop without a verified backup and an isolated rehearsal.

<h2 id="dashboard">Dashboard panels</h2>

The current dashboard template includes cards labelled total sales, order count, total members and total visitors, a sales chart, newest orders and newest customers. A Billy revenue panel is included when that integration plugin is enabled.

**Do not use the four card values for accounting or operational decisions:** the inspected data query returns a union of order IDs, user-info IDs and a visitor count rather than the four aggregates expected by the template. The results can therefore be mislabelled. Reconcile against independently verified order and payment records while this is investigated. Chart and report accuracy also require isolated testing.
