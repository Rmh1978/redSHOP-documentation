## How do I customize the AJAX add-to-cart boxes?

redSHOP uses template records for the AJAX cart box and detail box. Current default files are under `media/com_redshop/templates/ajax_cart_box/` and `media/com_redshop/templates/ajax_cart_detail_box/`; do not edit the shipped defaults directly, because an update can replace them.

### Select and customize a template

1. On an isolated copy, enable **Enable Add to Cart lightbox (Ajax)** in the cart settings and review **Ajax Cart Template**.
2. In redSHOP **Customization → Templates**, inspect the published template records for the relevant AJAX cart section. Preserve the existing content and configuration before making changes.
3. Adjust the relevant template and CSS for the desired layout while retaining required redSHOP tags and controls. The default box includes `{ajax_cart_box_title}`, `{continue_shopping_button}` and `{show_cart_button}`. The detail box includes attribute, accessory and add-to-cart form template tags.
4. Select the intended published detail template in cart settings. A product template may explicitly select a named detail template using `{ajaxdetail_template:template_name}`; otherwise the configured default is used.
5. Test products with and without attributes, accessories and custom fields, keyboard operation, continuation to the cart and different viewport sizes. Check both the changed template and an unaffected product.

The current loader queries published redSHOP template records and reads their associated files. Do not assume that old `/components/com_redshop/templates/rsdefaulttemplates/` paths or a Joomla template override will be used. The precise edit, override and update-preservation workflow must be verified for the installed version.
