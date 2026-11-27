## redSHOP Wishlist module

The optional `mod_redshop_wishlist` site module provides a link to the wishlist or an empty-state message. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and enable the wishlist in [Feature settings](chapters/global-configuration/feature-settings.md). The distributed configuration starts with the wishlist disabled; existing shop settings may differ.

The manifest offers one basic option, **Module Class Suffix**, which is empty by default. Use it for template styling if needed. The default layout displays a link or message, not a product list.

The inspected module reads the guest wishlist from the session and a logged-in user's wishlists through the wishlist helper. The helper can create a default wishlist for a logged-in user who has none. The layout tests whether the returned wishlist value is empty, not whether each wishlist contains products: a link alone does not confirm that products have been saved.

Use disposable products and accounts to test an empty wishlist, adding and removing products, the link and the configured login requirement for guests and registered customers. Check separate sessions, privacy and the active product and wishlist templates before use. Actual Joomla routing, persistence and guest-to-account behavior have not been verified by this source review.

With the inspected default product button and wishlist script, a guest may be unable to add a product when login is optional. Verify the button with your active template before relying on it; alternative layouts may behave differently.
