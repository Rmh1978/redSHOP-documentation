## redSHOP configuration wizard

The setup wizard offers initial shop, user, price and tax settings. On a new installation, the installation screen includes a **Configuration Wizard** button; it is not shown on that screen for an update. Access requires redSHOP administration permission.

**Existing shops:** do not rerun the wizard on a live installation without a verified backup and an isolated rehearsal. The inspected welcome-page path attempts to copy the distributed configuration over the active configuration file, and does not check the copy result. Whether it succeeds depends on file permissions. Use [Configuration](chapters/global-configuration/start-here.md) for ordinary changes and verify recovery on a disposable copy.

The current wizard model also requires a legacy configuration-model path not supplied by the Core manifest. Loading the model failed in an isolated PHP check; installed Joomla and upgrade behavior have not been tested. If the wizard fails, do not repeatedly retry it on a configured shop.

The source defines these screens:

1. **Welcome:** introduction and links.
2. **General:** enter the shop name and administrator email; select the shop country, default shipping country, available country list and date format. Choose whether to send invoice mail; when enabled, select administrator, customer or both as the recipient. Select products to exclude from reorder. The welcome-message field exists in the source but is hidden on this screen. A selected country list alone does not establish checkout enforcement.
3. **Terms:** select a Joomla article; an article-creation link is also provided. Review the actual text and checkout acceptance in the user configuration.
4. **User:** registration method and welcome/registration text, with private and company text fields depending on configuration. The wizard currently stores the company introduction under a different key from the one it displays; use [User configuration](chapters/global-configuration/user.md) to review and set it, and verify the resulting company registration page. That guide also describes the four registration modes.
5. **Price:** choose currency and symbol, decimal and thousands separators and number of decimal places. Set the default VAT country/state and address basis, VAT-on-discount option, discount/coupon/voucher switches, discount-combination mode and whether the shipping threshold uses total or subtotal. The rate add, edit and remove controls use task names that differ from current tax controllers and may not work; manage rates through [VAT rates](chapters/vat/vat-rate.md) and verify them separately. Rate operations can be separate from the final configuration save. See [Price configuration](chapters/global-configuration/price.md) for details and units.
6. **Finish:** optionally install demo content and save the collected configuration. Demo content changes shop data; use it only in a disposable installation.

Previous and Next submit the current step, while **Skip** returns to the dashboard. The controller stores submitted step values in the session and writes the configuration on Finish; do not assume Skip undoes file or tax-rate operations already performed. If saving fails, investigate before continuing. Finish does not configure or validate every payment, shipping, tax and email workflow.

On steps other than Price, the current save path can emit a warning about a missing VAT removal flag. Depending on error handling, this may interrupt navigation; verify the wizard on a disposable installation and check errors and saved values.

The wizard initially loads configuration into its session. The distributed settings include shop and shipping country Denmark, currency DKK, two price decimals, optional account creation and disabled invoice mail. Existing settings and available country or currency records can differ; review each choice for your shop rather than treating these values as recommendations.

Test the complete wizard, navigation, current labels, configuration persistence and checkout results on supported Joomla versions before relying on it. Do not send real mail, make real payments or install sample data on an existing shop as part of this test.
