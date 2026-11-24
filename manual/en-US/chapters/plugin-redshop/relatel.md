## Relatel Live Caller ID

The current source contains an optional **System** plugin, element `relatel`, that adds incoming-call controls to the redSHOP administrator's Orders list. Its source is maintained under a different directory; install an approved package through Joomla's extension installer rather than copying the source directory into the integrations plugin group.

The plugin declares PHP 8.3 or later and Joomla 5/6 in its manifest. This is not a substitute for testing the installed package and provider API on your environment.

### Configure

1. In a disposable test shop, install an approved package if needed and locate **redSHOP - Relatel Live Caller ID** in Joomla's System plugins.
2. Provide an authorized test API token using the plugin's token field or a private server environment variable named `REDSHOP_RELATEL_TOKEN`. A non-empty environment value takes precedence.
3. Configure monitoring, recent-number count, polling interval and automatic popup. The form allows 1–20 recent numbers and 5–300 seconds between polls. Enable the plugin and open the ordinary redSHOP Orders list.
4. Test with approved test calls, accounts and access permissions before any production use.

The password field masks the token in the interface but does **not** encrypt Joomla plugin parameters in the database or backups. Restrict administrator, database, backup and server access. Do not put tokens, telephone numbers or customer information in shared screenshots, source control or logs. Confirm environment-variable availability with the hosting administrator.

### Use and verify

The Orders controls support recent calls and customer lookup. Monitoring is a shared plugin setting, not a per-browser preference: changing it affects other administrators. Changing the switch requires permission to edit Joomla plugins; the component access check still applies to viewing data. Manual lookups remain available when monitoring is disabled.

The inspected customer matching supports Danish and Swedish number normalization; unknown or ambiguous numbers require manual handling. Verify customer and order results rather than assuming a match is correct. The plugin retrieves recent incoming calls; it does not place calls.

In the isolated shop, check enabled and disabled states, permissions and expired sessions, incoming test calls, multiple matches, monitoring across administrators, manual refresh, and provider errors or timeouts. Verify polling, popup and privacy behavior on Joomla 5 and 6; do not use real customer data without authorization.
