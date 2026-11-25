## redSHOP Login Greeting module

The optional `mod_redshop_logingreeting` site module displays a greeting for a logged-in user. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), select its position and pages, enter greeting text and choose Joomla username or full name. The manifest offers no module caching option other than no caching.

| Setting | Purpose and manifest default |
| --- | --- |
| Greeting text | Text placed before the selected name; empty by default. |
| Greeting type | Joomla username (default) or full name. |
| Module Class Suffix | Optional styling suffix; empty by default. |
| Caching | Only No Caching is offered in the manifest. |

Saved settings may differ from defaults. The inspected layout renders no greeting for a guest; test the saved name choice with a logged-in account.

Test logged-out and logged-in views using disposable accounts. The greeting requires an authorized security review before use where untrusted users can control displayed values.
