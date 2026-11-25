## redWEB Facebook Plugins module

The optional `mod_redweb_facebook_plugins` site module contains settings for an application ID, API version, language and comments, video, like or share-button layouts. [Install and configure the module](chapters/module-redshop/install-module-plugin.md) only after confirming the current provider requirements and your site's consent and privacy obligations.

The manifest's default API version is historical and is not evidence that the provider still supports it. Check the chosen provider feature, domains, accessibility and consent behavior on a test site with an authorized test application; do not copy old example application IDs into production. Provider compatibility and real external requests have not been verified here.

### Configure the module

The following are defaults for a new configuration, not necessarily values saved
in an existing module:

| Setting | Use |
| --- | --- |
| AppId | Required numeric application ID. Supply your own authorized application ID. |
| Version | Required API version; the manifest default is `2.11`. Check provider support rather than assuming this historical default works. |
| Language | Required SDK locale, default `en_US`. |
| Plugin | Required: Comments, Video, Like or Share button. The manifest default is Like. |
| Like and Share | Shown for Like; selects whether the Like layout also requests a share control. The manifest default does not match either offered choice; select and verify the intended setting explicitly. |
| Numposts | Number of comments requested by the Comments layout; default 5. |
| Colorscheme and Mobile | The Comments layout passes the selected light/dark scheme and mobile option to the provider. Defaults are light and Yes. |
| Width and Height | Required integer dimensions, defaults 550 and 500. The selected layout may not use both, and the module's resize script can replace dimensions based on viewport width. |

In the **Comments** settings, enter the target URL and choose social, reverse
time or time ordering (default social). In **Video**, enter the video URL.
The Like and Share button layouts use the URL in the **Page** settings. The
manifest supplies example URLs: replace them with appropriate authorized
targets, even when the fields belong to another settings tab.

The Page settings also contain timeline, cover, facepile, call-to-action,
header and adaptive-width controls. They are used by the bundled Page layout,
but Page is not offered in the manifest's Plugin selector; do not assume
these controls affect the four selectable layouts. The module loads the
provider SDK when rendered, so arrange any required consent before rendering
it. Verify the resulting behavior, including responsive sizing, on an
authorized isolated site.

The bundled Video layout contains malformed closing markup that may affect
subsequent page content. Check the page carefully and contact your maintainer
before relying on that layout.
