## Using editors with redSHOP

redSHOP uses Joomla editor fields for content such as category descriptions, newsletter bodies, mail bodies and templates. Other forms include manufacturer, supplier and shopper-group content; the product editor also requests a Joomla editor for its short and full descriptions. The actual editor and available controls depend on Joomla's configuration, the user's preferences and installed editor plugins.

Choose an enabled, compatible editor in Joomla's configuration or user settings as appropriate. For HTML-sensitive templates, use an editor that preserves the required markup and redSHOP tags; a plain-text editor can be useful for inspecting source. Editor choice does not override Joomla filtering, permissions or the behavior of an installed plugin.

Fields can have different filters: for example, the category description fields declare `safehtml`, while the mail-body field declares `raw`. Do not assume that markup accepted in one screen will be preserved or rendered the same way in another.

Before changing a production template:

1. Back up the existing content and use a disposable shop.
2. Edit and save a test copy, then reopen it and compare tags and HTML.
3. Check rendered storefront or mail output, accessibility and escaping in the actual context. For mail, use a test recipient and mail sink rather than real customers.

Third-party editor compatibility and content transformations must be tested separately on the Joomla version in use. See [Templates](chapters/customization/template.md) and [Mail templates](chapters/communication/mails.md).

For product tags in Joomla content, see [Products in Joomla content](chapters/plugin-redshop/product-content.md); the optional editor button and content replacement plugin are separate.
