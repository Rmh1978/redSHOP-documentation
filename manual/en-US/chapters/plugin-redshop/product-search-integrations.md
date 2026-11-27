## Product search integrations

The optional **Smart Search - Redshop** plugin and **redSHOP Search Products** plugin are separate integrations, not settings for the [redSHOP Search module](chapters/module-redshop/search.md). Install and enable only the integration supported by the search component and Joomla version used on your site. Both are separately distributed extensions; their presence in source does not establish compatibility.

### Smart Search

The Smart Search plugin supplies product information to Joomla's indexer. Its product query selects published products and joins category data; the index path prepares product title, description, route, language and an image when available. Indexing and subsequent changes depend on Joomla's indexer and events.

On an isolated copy, enable the plugin, build or refresh the Smart Search index using Joomla's controls, and check disposable published and unpublished products, categories, links, images and access restrictions. Recheck changes and deletions. Do not treat index inclusion as proof of correct customer access.

### Search Products plugin

This plugin implements the legacy content-search event, not the Smart Search indexer. Its manifest defaults are a limit of 50 results and No for showing a section or searching short and full descriptions. The source also searches product name, number and product custom-field data; verify the result set and routes with your installed search component before enabling it.

The legacy event integration, indexing, permissions and actual Joomla 5/6 behavior have not been verified. Search output should not substitute for product access controls.
