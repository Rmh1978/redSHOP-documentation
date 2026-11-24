## About and system information

Open redSHOP Configuration and choose **About**. Use this overview for diagnostics, then verify requirements and extension status in Joomla and the hosting environment. Do not share server details, customer data or credentials in public support requests.

<h2 id="system">System information</h2>

The table displays web-server identification when available, PHP and database versions, GD and mbstring availability, PHP upload and memory limits, `allow_url_fopen` and maximum execution time. The database row is labelled MySQL but displays the connected database driver's version. The multibyte result reports whether the PHP `mbstring` extension is loaded, not a redSHOP configuration switch.

These are diagnostic values, not a complete compatibility or security assessment. Uploads can also be limited by other PHP, web-server and application settings. Ask the hosting administrator to review changes and test the actual supported package and platform combination.

<h2 id="modules">redSHOP modules</h2>

The module table queries Joomla extension records whose element contains `mod_redshop`. It shows installation and enabled indicators for returned records. An empty result hides the table; it does not enumerate every module that could be installed. An enabled extension is not proof that a module instance is published or assigned to a page.

<h2 id="shipping">Shipping plugins</h2>

The shipping table uses Joomla extension records in the `redshop_shipping` folder and shows state and enabled indicators. If there are no returned records, the table is not rendered. Verify plugin configuration and actual checkout rates separately; see [shipping methods](chapters/shipping/shipping-methods.md).

<h2 id="payment">Payment plugins</h2>

The payment table uses records in the `redshop_payment` folder and shows state and enabled indicators. An empty result hides the table. An enabled plugin is not proof of configured credentials, checkout availability, payment verification or successful transactions; inspect Joomla's extension manager and test the method in a sandbox.
