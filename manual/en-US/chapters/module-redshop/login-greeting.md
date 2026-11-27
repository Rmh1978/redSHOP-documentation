## redSHOP Login Greeting module

The optional `mod_redshop_logingreeting` site module displays a greeting for a logged-in user. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), select its position and pages, enter greeting text and choose a username or full name. The manifest offers no module caching option other than no caching.

| Setting | Purpose and manifest default |
| --- | --- |
| Greeting text | Text placed before the selected name; empty by default. |
| Greeting type | Joomla username (default) or full name. For full name, the inspected helper uses the redSHOP billing first and last names when a billing record exists; otherwise it falls back to the Joomla account name. |
| Module Class Suffix | Optional styling suffix; empty by default. |
| Caching | Only No Caching is offered in the manifest. |

Saved settings may differ from defaults. The module code also supplies different fallback values when either greeting parameter is absent, so explicitly save and verify the intended text and name choice rather than relying on manifest defaults alone. The inspected layout renders no greeting for a guest.

Test logged-out and logged-in views using disposable accounts. The greeting requires an authorized security review before use where untrusted users can control displayed values.
