## redSHOP Shopper Group Category module

The optional `mod_redshop_shoppergroup_category` site module displays a Joomla menu with category-related filtering. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), select the menu, start/end levels, child-item behavior, position and page assignment.

The helper checks portal category permission for category links when Portal Shop is enabled. Hiding a menu item is not access control: independently verify category, product and direct URL access for each group. The helper also uses a cache key that is not assigned in the inspected function; its effect on per-user menu results must be verified before use. Disabling the module's Joomla caching option alone is not evidence that the helper's separate cache is safe.

Test menu routing, menu access levels, group changes and direct URLs with separate disposable accounts and with the site's actual cache configuration before enabling this module.
