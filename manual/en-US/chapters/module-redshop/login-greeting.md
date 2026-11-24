## redSHOP Login Greeting module

The optional `mod_redshop_logingreeting` site module displays a greeting for a logged-in user. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), select its position and pages, enter greeting text and choose Joomla username or full name. The manifest offers no module caching option other than no caching.

Test logged-out and logged-in views using disposable accounts. The inspected template writes the greeting and account-derived name without explicit HTML escaping; verify output handling before enabling it where untrusted users can control those values.
