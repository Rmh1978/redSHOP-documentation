## How do I configure a shop where VAT is not applicable?

First establish the shop's actual tax obligations with a qualified adviser. A country without VAT may still have other taxes, and treatment can vary by product, customer and destination. There is no universal safe instruction to delete all rates or switch every shop to tax-exempt mode.

1. Back up the site and review the existing [tax groups](chapters/vat/vat-group.md), [tax rates](chapters/vat/vat-rate.md), product assignments and default country/state/group.
2. On an isolated copy, configure the rates and tax settings appropriate to the shop's requirements. The price configuration includes **Use Tax Exempt**, **Show Tax Exempt in Front** and **Apply VAT for Tax Exempt**; the latter two controls are shown when exemption is enabled. These concern the exemption workflow and are not a substitute for checking every applicable rate. The effect of **Apply VAT for Tax Exempt** on calculations is under investigation; do not rely on this switch without independently checking the resulting totals.
3. Test guest and registered customers, applicable locations and shopper groups, exemptions, shipping and discounts. Verify product, cart, checkout, order and invoice totals with independently calculated expected results.
4. Only after verifying the calculation, review the cart template's displayed labels. Removing a VAT label or template tag changes presentation, not the underlying tax calculation. Preserve a copy of the template before editing and verify the resulting storefront.

Do not delete existing rates merely to hide VAT wording, and do not infer legal compliance from a zero displayed amount. The exact exemption and checkout behavior must be verified for the installed version and configuration.
