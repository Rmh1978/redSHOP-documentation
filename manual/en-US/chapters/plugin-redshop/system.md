## redSHOP Product Image Zoom

The optional system plugin `redproductzoom` adds a zoom effect to redSHOP product pages. [Install and configure the plugin](chapters/module-redshop/install-module-plugin.md) on an isolated shop; do not confuse it with a GLS shipping plugin.

The manifest offers window, inner and lens modes, scroll zoom and mode-specific settings. Its defaults include window mode, a 400 by 400 zoom window and scroll zoom enabled. The inspected plugin loads legacy jQuery-based scripts on frontend redSHOP product views with a nonzero product ID, so confirm package and template compatibility before enabling it.

In **Window** mode, the form also offers a tint switch (default No), tint color (default `#FF9900`) and opacity (default `0.5`, with a form range of `0.1`–`1.0` in steps of `0.1`). In **Lens** mode, choose round or square shape (default round), lens size (default `200`) and fade-in/fade-out switches (both default Yes). These controls are shown for their respective modes. Defaults describe a new configuration; verify the settings saved in your installation.

The bundled initialization expects product thumbnail URLs in a particular redSHOP `images/.../thumb/..._w..._h...` naming format. Test custom image paths and template overrides as well as missing images; the script does not check for a failed match before using the result.

Test product images, zoom modes, keyboard and touch interaction, small screens and browser errors with the active template. Joomla frontend behavior and accessibility have not been verified here.
