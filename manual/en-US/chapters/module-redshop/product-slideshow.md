## redSHOP Product Slideshow module

The optional `mod_redshop_products_slideshow` site module has a product-selection helper, but the inspected default layout displays two fixed placeholder image paths rather than the selected products. An isolated layout test with different synthetic product lists produced the same placeholders. Do not rely on the default layout for a live product slideshow; an installed alternative layout may differ.

The module is separate from the [Product Scroller](chapters/module-redshop/product-scroller.md) and [Featured Product](chapters/module-redshop/featured-product.md) modules. If evaluating an alternative layout, [install and configure the appropriate package](chapters/module-redshop/install-module-plugin.md) on an isolated shop first.

The manifest offers category selection, current-category loading, product type and count, image and banner dimensions, colors, transitions, price options and an alternative layout. Its defaults include current-category loading enabled, random products, five products, a 670 by 210 banner and 200 by 100 images. Existing saved settings may differ. The inspected helper uses these settings to generate an XML file, but the inspected default layout does not consume that data; the settings therefore should not be assumed to control its placeholder slides.

The default layout also references externally hosted script and stylesheet assets. The entry attempts to write generated XML under the installed module's assets directory. Verify package behavior, file permissions, external asset policy, actual product links and prices, keyboard access and mobile presentation before using an alternative. No real Joomla query, XML write, network asset or browser behavior was tested in this review.
