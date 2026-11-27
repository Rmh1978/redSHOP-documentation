## Customer statistics

Open **Statistics → Customer Statistic** in redSHOP administration. This report contains customer names and email addresses: restrict access and handle printed or exported copies according to your shop's privacy and retention procedures.

The table shows customer name, email, order count and total sale, with sortable headings and pagination. The inspected query groups by billing information record and counts orders whose stored payment status is **Paid**. The total is the sum of those orders' stored totals; it is not an independent reconciliation with payment providers or a guarantee of net revenue after refunds. Customers without matching paid orders do not appear in this report.

Use the date-range control to restrict the order creation dates. It displays dates as `dd.mm.yyyy` and offers preset ranges. Verify the start and end boundaries, timezone and totals with disposable orders before using the report for decisions.

**Export Data** requests a CSV file with the names, email addresses, counts and totals; **Print** opens a printable view. The export uses the list model and can be affected by list pagination and filtering, so verify its scope before relying on it as a complete extract. The current export writes comma-separated values without quoting each field; check the result with non-sensitive sample data, especially names containing commas. Keep exported files protected and remove approved test copies when finished.

The chart loads a third-party chart library. Check your site's network, privacy and administrator access requirements before using this screen. Actual Joomla rendering, export, date boundaries and print behavior need verification on an isolated installation.
