## Price configuration

Open redSHOP Configuration and choose **Price**. Back up settings and verify prices, tax and discounts with an accountant on an isolated shop. The options alone do not establish compliance with local tax rules.

<h2 id="main-price">Main price settings</h2>

Choose whether to show prices, the shop currency and symbol, symbol position, decimal and thousands separators, displayed decimal places, calculation precision and zero-price replacement text. Several currency controls are shown conditionally when prices are enabled. Shopper-group settings also affect price visibility; hiding prices or add-to-cart controls is not an authorization boundary.

The symbol position offers **Front**, **Behind** and **None**, as well as a
selection placeholder. The distributed settings show prices, use currency
code `DKK`, a comma decimal separator, a period thousands separator, two
displayed decimals and four calculation decimals. The symbol-position setting
is initially the selection placeholder and the zero-price replacement is
blank. Existing saved settings may differ. The save form rejects single and
double quotation marks as either separator. Changing the currency selection
copies its currency code into the symbol field; review or edit the symbol
after choosing the currency.

**Use Tax Exempt** exposes **Show Tax Exempt in Front** and **Apply VAT for Tax Exempt**. The latter setting's effect on calculations is under investigation; independently verify the resulting totals rather than relying on the switch. The distributed configuration sets all three to Yes, but an existing shop may have different saved values. Catalog mode is also here. Test guest, private, company and tax-exempt groups in product lists, product pages, cart and checkout. Changing currency display or symbol does not itself convert existing prices; see [Currencies](chapters/vat/currency.md).

<h2 id="vat-tax">VAT / tax</h2>

Configure default VAT country, state and group, the VAT basis and billing/shipping address basis, VAT on discounts, VAT-after-discount rate, VAT-number requirement and explanatory texts. Set up and publish appropriate [VAT groups](chapters/vat/vat-group.md) and [VAT rates](chapters/vat/vat-rate.md).

The VAT basis offers **Webshop**, **Customer** and **EU-mode**. In the
inspected product lookup, Webshop mode uses the configured default country
and state for a logged-in customer; Customer and EU modes can use customer
address information. EU mode also restricts matching product rates to those
marked as EU rates. Guest and shipping calculations have their own paths, so
verify each case rather than assuming the mode alone determines the result.
The billing/shipping selector chooses which address is used in relevant
paths. A product tax group can override the default group.

The distributed configuration has no default country or state selected, no
default group selected, Webshop mode, billing-address basis, **After**
discount, and a VAT-after-discount value of `0.000`. It enables the VAT-number
requirement; in the inspected company billing template that requirement applies
when tax exemption and the VAT-number template section are used. Review saved
settings and actual customer forms before relying on these values.

The inspected calculations use the VAT-after-discount value as a fraction: for example `0.16` represents a 16% multiplier in those paths, not `16`. Check with an accountant before changing it, and test mixed rates, discounts, shipping, rounding and tax-exempt cases. Do not assume the country selection automatically determines legally correct tax.

The VAT-after-discount field's fractional input validation is under
investigation. Verify the saved value and resulting calculations in an
isolated shop; do not assume an invalid indicator or a save outcome without
testing the actual administrator form.

The VAT intro and with/without VAT text fields provide explanatory text. The
`{vat_info}` template tag uses the with- or without-VAT text according to the
template's VAT setting; check the templates that your shop actually uses.

<h2 id="gift-card">Gift card images</h2>

Configure gift-card and list thumbnail dimensions and watermark options. The distributed dimensions are 0 x 0 for both thumbnails and both watermark switches are disabled. Test image quality and the active gift-card templates; see [Gift Cards](chapters/discounts/gift-cards.md).

<h2 id="discount">Discounts</h2>

The discount switch controls the visibility of combination rules, coupon and voucher switches, coupon information, special discount mail, whether vouchers/coupons apply to already-discounted products, shipping basis, and discount-coupon type and value.

The distributed configuration enables discounts, coupons, vouchers, special
discount mail and applying vouchers/coupons to already-discounted products; it
disables coupon information and selects subtotal for shipping calculations.
The combination choice is **Discount + voucher (multiple) + coupon (multiple)**,
and the discount-coupon choice is Total with value `10`. Review these defaults
before enabling customer promotions; existing shop settings may differ.

Test each intended combination with real cart calculations, quantities, shopper groups, tax and shipping. Coupon and voucher restrictions and usage counts have separate settings; see [Coupons](chapters/discounts/coupon.md) and [Vouchers](chapters/discounts/voucher.md). Do not promise that every combination is valid without testing.

<h2 id="discount-mail">Discount mail</h2>

The form provides an enable switch, three after-purchase delays and coupon validity in days; these dependent fields are shown when discount mail is enabled. The distributed configuration enables discount mail, sets all three delays to zero and sets coupon duration to 10 days. Review these settings before configuring a scheduler; saved settings may differ. The inspected scheduled path selects orders with payment status `Paid` and order status `C`, and checks the configured send dates. Scheduling, mail delivery and templates must be configured and verified separately; the special-discount mail switch above is a distinct setting.

The inspected coupon expiration calculation uses `23 * 59 * 59` seconds per configured day, not a full 24 hours. Test the actual expiry and reminders in an isolated shop with a mail sink before using this feature.
