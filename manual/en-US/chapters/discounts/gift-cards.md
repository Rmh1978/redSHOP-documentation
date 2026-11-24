## Gift cards

Gift-card products can be purchased and a code issued to a recipient. **Do not offer them commercially until the current coupon redemption issue has been fixed and the complete purchase, delivery, redemption and refund flow tested.** Gift-card mail creates a coupon with one use remaining, but the inspected coupon application rejects one remaining use.

<h2 id="overview-1">Gift-card list</h2>
<h4 id="field-1">Fields</h4>

The list presents published state, name, images, price, value and validity.

<h4 id="action-1">Actions</h4>

Create, edit, publish, unpublish and delete definitions as permitted. Back up and verify effects on existing purchases before changing them.

<h2 id="overview-2">Gift-card details</h2>
<h4 id="field-2">Fields</h4>

Name, customer-amount selection, price, value, validity and published state are required in the current form. Free shipping, image, background image, description and an e-conomic account group are also available. Check currency, validity and accounting behavior with disposable data.

<h4 id="action-2">Save</h4>

Save and reopen the definition to check values and images.

<h2 id="gift-cards">Working with gift cards</h2>
<h4 id="create-gift-card">Create</h4>

Create a disposable gift-card definition and select suitable non-sensitive images. Verify both a fixed value and the customer-amount option where needed.

<h4 id="gift-card-frontend">Storefront</h4>
<h5 id="show-gift-card">Show gift cards</h5>

The component provides a gift-card list menu layout. Configure a test menu item, then check published and unpublished definitions and the active template.

<h5 id="order-gift-card">Purchase and redeem</h5>

With an isolated customer and safe mail recipients, use a mocked payment to test purchase, issuance, expiration and redemption. Confirm values and recipient details without exposing real codes. Verify cancellations, refunds, repeated callbacks and duplicate mail before use. The single-use coupon issue must be addressed separately in Core.
