## Price configuration

Open redSHOP Configuration and choose **Price**. Back up settings and verify prices, tax and discounts with an accountant on an isolated shop. The options alone do not establish compliance with local tax rules.

<h2 id="main-price">Main price settings</h2>

Choose whether to show prices, the shop currency and symbol, symbol position, decimal and thousands separators, displayed decimal places, calculation precision and zero-price replacement text. Several currency controls are shown conditionally when prices are enabled. Shopper-group settings also affect price visibility; hiding prices or add-to-cart controls is not an authorization boundary.

Tax-exempt controls and catalog mode are also here. Test guest, private, company and tax-exempt groups in product lists, product pages, cart and checkout. Changing currency display or symbol does not itself convert existing prices; see [Currencies](chapters/vat/currency.md).

<h2 id="vat-tax">VAT / tax</h2>

Configure default VAT country, state and group, the VAT basis and billing/shipping address basis, VAT on discounts, VAT-after-discount rate, VAT-number requirement and explanatory texts. Set up and publish appropriate [VAT groups](chapters/vat/vat-group.md) and [VAT rates](chapters/vat/vat-rate.md).

The inspected calculations use the VAT-after-discount value as a fraction: for example `0.16` represents a 16% multiplier in those paths, not `16`. Check with an accountant before changing it, and test mixed rates, discounts, shipping, rounding and tax-exempt cases. Do not assume the country selection automatically determines legally correct tax.

<h2 id="gift-card">Gift card images</h2>

Configure gift-card and list thumbnail dimensions and watermark options. Test image quality and the active gift-card templates; see [Gift Cards](chapters/discounts/gift-cards.md).

<h2 id="discount">Discounts</h2>

The discount switch controls the visibility of combination rules, coupon and voucher switches, coupon information, special discount mail, whether vouchers/coupons apply to already-discounted products, shipping basis, and discount-coupon type and value.

Test each intended combination with real cart calculations, quantities, shopper groups, tax and shipping. Coupon and voucher restrictions and usage counts have separate settings; see [Coupons](chapters/discounts/coupon.md) and [Vouchers](chapters/discounts/voucher.md). Do not promise that every combination is valid without testing.

<h2 id="discount-mail">Discount mail</h2>

The form provides an enable switch, three after-purchase delays and coupon validity in days. The inspected scheduled path selects orders with payment status `Paid` and order status `C`, and checks the configured send dates. Scheduling, mail delivery and templates must be configured and verified separately; the special-discount mail switch above is a distinct setting.

The inspected coupon expiration calculation uses `23 * 59 * 59` seconds per configured day, not a full 24 hours. Test the actual expiry and reminders in an isolated shop with a mail sink before using this feature.
