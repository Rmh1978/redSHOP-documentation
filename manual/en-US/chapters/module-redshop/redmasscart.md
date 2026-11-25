## redMASSCART module

The optional `mod_redmasscart` site module provides a text area for adding products to the cart by product number. [Install and configure the module](chapters/module-redshop/install-module-plugin.md), assign a position and pages, and configure the input label, instructions, button text, dimensions and optional quantity field. The default instructions specify one product number per line.

For a new module, the manifest provides these defaults; saved settings can differ:

| Setting | Purpose and default |
| --- | --- |
| Module Class Suffix | Optional styling suffix; empty by default. |
| Title of Button | Submit button text; defaults to `add to cart`. |
| Product Quantity Box | Show a separate quantity input; defaults to No. |
| Width / Height of textarea | Input size in pixels; defaults are 150 and 100. |
| Title of inputbox | Text-area label; defaults to `Product Number`. An empty value uses the language string. |
| Instruction | Tooltip text; defaults to `place product number per line.` |
| Alternative Layout | Select an installed alternative layout if needed. |

Enter one product number per line. The inspected cart helper trims each line and submits the same entered quantity for every recognized eligible product; when the quantity is absent or empty it submits one. It skips blank and unknown numbers, and reports unpublished, not-for-sale and expired products. **Unknown numbers are skipped without a message**, so always compare the resulting cart with the original list.

For example, enter two existing test product numbers on separate lines. If the quantity field is enabled and contains `2`, the inspected helper submits quantity two for each eligible number, not two items in total. Check the cart because stock rules, required product options and the cart handler can affect the final result.

Test valid, unknown and duplicate numbers, quantities, stock and products requiring options on a disposable shop. Verify cart contents and any error messages before checkout; the actual cart-add behavior and Joomla storefront have not been verified by this source review.
