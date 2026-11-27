## Products in Joomla content

The optional **Content - redSHOP Product** plugin replaces tags such as `{redshop:123}` in content with a product display, where `123` is the product ID. The separate **redSHOP product editor insert button** plugin is intended to insert such tags from a product selector. Both are separately distributed integrations; installing or enabling one does not enable the other.

### Configure and test

1. On an isolated copy, install a compatible content plugin and enable it in Joomla's plugin manager. Install and enable the editor button separately if you want to test the selector; it is not required for manually entered tags.
2. In the content plugin, choose a published **Product Template** from the `product_content_template` section. Template lookup uses published records; verify the selected record remains published. Back up templates before editing and verify the actual product display, links, price and add-to-cart behavior with a disposable product. See [Templates](chapters/customization/template.md).
3. Use a disposable article to test a manually entered tag with a real test product ID. Check the rendered article, product availability and access rules, mobile layout and cart behavior before publishing it.

The editor button currently builds a selector URL for a different product view from the one containing the selector layout. The button path therefore needs verification and may open the product editor instead of the selector. Test it on the target Joomla version; the tag replacement and editor button are separate paths. Legacy modal and script dependencies also need compatibility testing.

### AcyMailing integration

The separately distributed **AcyMailing Tag: redSHOP Products** plugin is a different integration from redSHOP's own newsletter feature and from the Joomla content plugin above. Its source supports `{product:123}`, `{product_name:123}`, `{product_price:123}` and `{product_thumb_image:123}`, where the number is the product ID. Choose a published Product Content template in the integration's **Product Template** setting.

The integration's image call passes its arguments in a different order from the current image helper, which may affect product output, including tags that request only a name or price. Verify a preview and a message sent to a safe test inbox with disposable products before relying on it. AcyMailing version compatibility and actual email rendering have not been verified.
