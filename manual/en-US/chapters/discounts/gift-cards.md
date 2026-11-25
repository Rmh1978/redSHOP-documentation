## Gift cards

Gift-card products can be purchased and a code issued to a recipient. In Joomla administration, open **Components → redSHOP → Discount → Gift Cards**. **Do not offer gift cards commercially until the current coupon redemption issue has been fixed and the complete purchase, delivery, redemption and refund flow tested.** Gift-card mail creates a coupon with one use remaining, but the inspected coupon application rejects one remaining use.

<h2 id="overview-1">Gift-card list</h2>
<h4 id="field-1">Fields</h4>

The list presents published state, name, images, price, value and validity. Search by name or enter `id:` followed by the numeric ID. Sort using the available column headings; the default order is name ascending.

<h4 id="action-1">Actions</h4>

Create, edit, publish, unpublish and delete definitions as permitted. Select records before bulk actions. Gift-card records do not support check-in. Back up and verify effects on existing purchases before changing them.

<h2 id="overview-2">Gift-card details</h2>
<h4 id="field-2">Fields</h4>

| Field | Purpose and default |
|---|---|
| **Gift Card Name** | Required name shown to shoppers. |
| **Customer Amount** | **No** by default. **Yes** allows a customer-defined amount when the gift-card detail template includes the `{customer_amount}` control. The inspected fallback detail template does not include that tag. Verify the input, entered amount and resulting order. |
| **Gift Card Price** | Required purchase price. The save check rejects an empty or zero value, including for customer-amount cards. |
| **Gift Card Value** | Required value used for the issued coupon. The save check rejects an empty or zero value. With customer amount enabled, the mail issuance path uses the order-item final price as the coupon value. |
| **Gift Card Validity** | Required validity in days; zero or empty is rejected. Verify expiry and time-zone behavior before use. |
| **Free Shipping** | **No** by default. The generated coupon receives this setting; verify its effect on available shipping methods. |
| **Published** | **Published** by default. Set an unfinished definition to unpublished. |
| **Gift Card Background Image**, **Gift Card Image** | Optional image uploads. The save path deletes an existing image before uploading its replacement and may report success even if upload fails. Keep a backup and verify both saved images and their storefront and email appearance. |
| **Description** | Optional formatted text for the gift-card description. |
| **e-conomic account group** | Available when e-conomic integration is enabled. Verify the accounting mapping using a separately authorized test environment. |

For a fixed-value example, enter a price of `50`, a value of `50` and a validity of `30` days in the shop's currency and settings. These are example values, not a recommendation to sell the card while the known issues remain.

<h4 id="action-2">Save</h4>

Use **Apply** to save while continuing to edit, or **Save** to save the definition. **Cancel/Close** leaves the editor. Reopen the definition to check values and images.

<h2 id="gift-cards">Working with gift cards</h2>
<h4 id="create-gift-card">Create</h4>

Create a disposable gift-card definition and select suitable non-sensitive images. Verify both a fixed value and the customer-amount option where needed.

<h4 id="gift-card-frontend">Storefront</h4>
<h5 id="show-gift-card">Show gift cards</h5>

The component provides a gift-card list menu layout. Configure a test menu item, then check published and unpublished definitions and the active template.

<h5 id="order-gift-card">Purchase and redeem</h5>

With an isolated customer and safe mail recipients, use a mocked payment to test purchase, issuance, expiration and redemption. Confirm values and recipient details without exposing real codes. The inspected mail path can send only the last code for multiple units and can display the configured value instead of a customer-selected value. Verify these separately along with cancellations, refunds, repeated callbacks and duplicate mail. The single-use coupon issue must be addressed separately in Core.
