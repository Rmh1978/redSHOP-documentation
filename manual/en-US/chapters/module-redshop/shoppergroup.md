## redSHOP Shopper Group Logo module

The optional `mod_redshop_shoppergrouplogo` site module displays a shopper-group logo. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and set thumbnail width and height.

The template looks for the configured default portal logo for guests and the shopper-group portal logo for logged-in users. Configure the default logo in redSHOP's shopper-group configuration and the relevant group logos, then test guests and users in different groups on a disposable shop. If a logged-in user's group or logo is unavailable, the default layout does not fall back to the guest logo. Missing files result in no image.

The manifest defaults both thumbnail dimensions to 100 for a new module. The module converts the saved values to integers before requesting a thumbnail. Adjust them for the module position and check the resulting image on the storefront.

The default layout does not provide an image text alternative. Review the logo's meaning and accessibility with your site maintainer before relying on it to convey information.
