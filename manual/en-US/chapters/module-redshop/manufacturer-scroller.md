## redSHOP Manufacturer Scroller

The optional `mod_redmanufacturer` site module displays manufacturers. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign its position and pages, and create representative manufacturers in redSHOP.

Configure the module options for a new installation as follows; saved settings may differ:

| Setting | Purpose and manifest default |
| --- | --- |
| Pre-Text | Text above the scroller; empty by default. |
| Module Class Suffix / Menu Class Suffix | Styling options; both empty by default. Check their effect with your template and layout. |
| Image Link | Chooses manufacturer detail (default) or products as the destination. In the default layout the image is not linked; the destination is used for the optional name link instead. |
| Number Of Manufacturers | Maximum query rows; default 2. |
| Scroll Behavior / Scroll Auto | Control the number of visible and moving items respectively; both default to 1. Use a positive Scroll Behavior value. |
| Scroll Width | Maximum slider width; default 500 pixels. |
| Product Thumb Image width / height | Manufacturer thumbnail dimensions; both default to 200 pixels. |
| Show Image | Displays the manufacturer image; default Yes. |
| Show Manufacturer Name / Show link on manufacturer name | Both default to No. Enable both to give shoppers a clickable name in the default layout. |
| Scroll Delay | Fast by default; Slow is also available. |
| Manual controls usage / Direction navigation | Paging and previous/next controls; both default to No. |
| Order by | Default orders by manufacturer ID ascending; ordering ascending or descending is also available. |
| Alternative Layout | Select an installed alternative layout; its presentation may differ. |

The inspected query selects published manufacturers with published manufacturer media, so check both publication states and images when an expected manufacturer is absent. Test links, scrolling, keyboard operation and small screens with your site template before enabling it.

The query limits media rows rather than distinct manufacturers. If a manufacturer has multiple published media records, check whether it appears more than once and displaces other manufacturers; an equivalent isolated query exhibited this behavior, but the Joomla storefront has not been tested.
