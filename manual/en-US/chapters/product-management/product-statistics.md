## Product statistics

Open **Statistics → Product Statistic** in redSHOP administration. The report lists product name, SKU, manufacturer, order count, units sold and total sale. It includes order-item rows from orders whose stored payment status is **Paid**, and excludes rows with a nonpositive final price. Do not treat the results as an independent payment or accounting reconciliation.

Use the date-range control to restrict order-item creation dates; it displays dates as `dd.mm.yyyy` and offers preset ranges. Verify dates, timezones and totals with disposable orders before relying on the report. The query groups by product, so the date recorded for an aggregated product is not a complete history of its sales.

Use pagination and the available headings to navigate. The order-count heading is not in the model's allowed ordering fields and may fall back to product-name ordering; check the resulting order rather than assuming it sorted by count.

**Export Data** requests a CSV file and **Print** opens a printable view. The export uses the list model, so verify filters and pagination before assuming it contains all matching products. It writes values without CSV field quoting; check the output with non-sensitive sample product names containing commas. The chart loads a third-party library; review your site's network and privacy requirements.

The report changes the database session SQL mode before building its query. Compatibility with your database version and the effects on the request need testing on an isolated installation. Actual Joomla rendering, database, export and print behavior remain unverified.
