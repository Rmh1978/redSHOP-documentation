## redSHOP Tags - Similar module

The optional `mod_redshop_tags_similar` site module finds tagged content sharing tags with the current item. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign a position and pages, and set the maximum results, match type (all, any or half) and ordering.

The manifest defaults to at most five results, matching any tag and ordering by match count. The form allows 1–20 results and also offers random ordering and match count with random ordering. The advanced settings include an alternative layout, module class suffix, caching and cache time; the manifest defaults to global caching and 900 seconds, though existing settings can differ.

For example, if the current item has three tags, **All** requires three matching tags, **Half** requires at least two, and **Any** requires at least one. Match-count ordering puts the most matches first; the combined option randomizes results with the same count. The inspected query filters tags and candidate content by access, and candidate content by publication status, dates and the configured tag-language filter.

When the helper returns an empty result array, the module exits before rendering its layout, rather than displaying a no-match message.

Add relevant tags to test products and content and compare results for different access levels and languages. The inspected helper uses the request's `pid` to identify the current item and returns null for category views, users or the tags component. The module entry cannot count a null result on PHP 8, and inspected Joomla 5.4.0 and 6.0.0 cache source forwards or stores callback results; the actual installed Joomla storefront has not been tested. Restrict page assignments and check excluded routes and untagged items before use. Do not assume every Joomla article or route works with this module; verify the exact pages and links in your installation. Test cache behavior across users before relying on caching.
