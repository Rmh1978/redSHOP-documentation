# Stage 24 — Preservation-first patch instructions

**Policy:** Apply only to copies of original articles. Keep the original paragraphs, examples and images. The proposed FAQ index is a full replacement because its original content was retrieved and checked.

## `faq/overview-faq.md`

Replace with the included full file. Four relative links previously used `chapters/faq/` even though the file itself lives in that directory. Changed to sibling paths. This is a source-confirmed relative-link correction; published-site routing still needs checking.

## `faq/payment.md`

Insert immediately below the title:

> **Historical article (2016):** This page describes a legacy workaround involving the “Credit Card in Shop” payment plugin. Do not treat a credit-card workflow as a COD implementation without checking the currently installed payment plugins, order states and customer-facing labels. Confirm a supported COD method on a test installation.

Preserve the original paragraph below the warning. Do **not** implement the old workaround based on this article alone.

## `faq/paypal.md`

Insert immediately below the title:

> **Historical notice:** This article concerns an older PayPal certificate transition and is not a current setup guide. Verify the installed PayPal plugin, current TLS requirements, authentication, API endpoints and sandbox transactions before using it.

Preserve all original links and historical technical details as an archive.

## `faq/how-do-1.md`

Insert immediately below the title:

> **Legacy template paths:** The two `rsdefaulttemplates/ajax_cart_*.php` files described below were not found in the current `develop` repository tree. Treat the code samples as historical until the current override points are located. Do not edit component files directly.

Preserve both HTML samples in full.

## `faq/how-do-2.md`

Insert immediately below the title:

> **Safety notice:** This 2016 article describes removing VAT references from storefront output and recommends deleting VAT rates. Do not delete existing tax rates or change tax treatment based solely on this article. Verify legal requirements, tax configuration, existing orders and checkout totals in an isolated test site. Hiding a label is not equivalent to changing tax calculation.

Preserve original instructions as historical material pending a verified replacement.

## Verification gates

- [ ] Compare each patched file against full original, including images and code.
- [ ] Check published routing for the four FAQ index links.
- [ ] Verify PayPal and COD plugin availability and test-only flows.
- [ ] Verify current AJAX template override path.
- [ ] Verify VAT changes in product, cart, checkout, order and invoice.
- [ ] Approve before any GitHub write.
