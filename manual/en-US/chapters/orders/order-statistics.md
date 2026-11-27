## Order statistics

Open **Statistics → Order Statistic** in redSHOP administration. The report groups orders by creation date and displays order count and the sum of stored order totals. Its chart loads a third-party library. Restrict access and verify your site's network and privacy requirements.

Select a date range and, if needed, a weekly, monthly or yearly grouping; the unselected grouping uses daily dates. Separate order-status and payment-status controls can restrict the list. A stored payment status is not independent proof of a payment: reconcile payments with your provider. Check the timezone and date boundaries using disposable orders before relying on totals.

The table has date, count and total columns, sortable headings and pagination. **Print** opens a printable view. Verify the print scope and selected filters on an isolated installation.

The **Export Data** action is currently unreliable: in isolated tests of the export controller, an empty result failed and an aggregate row did not provide the order ID the exporter expects. Do not rely on this export until the issue is corrected and the resulting file, selection and filters are tested with disposable orders. Exports can contain customer and address information; protect any test files.

Actual Joomla database, browser, print and export behavior remain unverified.
