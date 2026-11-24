## redSHOP Tags - Similar module

The optional `mod_redshop_tags_similar` site module finds tagged content sharing tags with the current item. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign a position and pages, and set the maximum results, match type (all, any or half) and ordering.

Add relevant tags to test products and content and compare results for different access levels and languages. The inspected helper uses the request's `pid` to identify the current item and returns no list for category views, users or the tags component. Therefore do not assume every Joomla article or route works with this module; verify the exact pages and links in your installation. Test cache behavior across users before enabling caching.
