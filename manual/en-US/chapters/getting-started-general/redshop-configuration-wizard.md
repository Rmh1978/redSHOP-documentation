## redSHOP configuration wizard

The setup wizard offers initial shop, user, price and tax settings. On a new installation, the installation screen includes a **Configuration Wizard** button; it is not shown on that screen for an update. Access requires redSHOP administration permission.

**Existing shops:** do not rerun the wizard on a live installation without a verified backup and an isolated rehearsal. The inspected welcome-page path attempts to copy the distributed configuration over the active configuration file, and does not check the copy result. Whether it succeeds depends on file permissions. Use [Configuration](chapters/global-configuration/start-here.md) for ordinary changes and verify recovery on a disposable copy.

The source defines these screens:

1. **Welcome:** introduction and links.
2. **General:** shop name, welcome message, administrator email, shop and default shipping countries, country list, date format, invoice-mail options and products excluded from reorder. A selected country list alone does not establish checkout enforcement.
3. **Terms:** select a Joomla article; an article-creation link is also provided. Review the actual text and checkout acceptance in the user configuration.
4. **User:** registration method and welcome/registration text, with private and company text fields depending on configuration. See [User configuration](chapters/global-configuration/user.md) for the four registration modes.
5. **Price:** currency, symbol and separators; default tax country/state and address basis; VAT rates and discount/VAT switches. Rate management may change existing tax data separately from the final configuration save. Use [Price configuration](chapters/global-configuration/price.md) and [VAT rates](chapters/vat/vat-rate.md) to review details and units.
6. **Finish:** optionally install demo content and save the collected configuration. Demo content changes shop data; use it only in a disposable installation.

Previous, Next and Skip controls are present. The controller stores submitted step values in the session and writes the configuration on Finish; do not assume Skip undoes file or tax-rate operations already performed. If saving fails, investigate before continuing. Finish does not configure or validate every payment, shipping, tax and email workflow.

Test the complete wizard, navigation, current labels, configuration persistence and checkout results on supported Joomla versions before relying on it. Do not send real mail, make real payments or install sample data on an existing shop as part of this test.
