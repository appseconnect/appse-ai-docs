---
title: "Amazon Seller Central"
description: Step-by-step guide to set up Amazon Seller Central credentials and automate order, feed, and financial workflows in appse ai.
slug: /app-integrations/amazon-seller-central/
---

Amazon Seller Central is the marketplace for managing your Amazon selling account. It allows you to list products, manage inventory, fulfill orders, and track your business performance. Integrating Amazon Seller Central into appse ai enables you to automate order management, feed submissions, financial reporting, and more — directly within your AI-powered workflows.

---

## Set Up Credential

:::info

Before you create a credential for Amazon Seller Central using appse ai, ensure you have an [Amazon Seller Central](https://sellercentral.amazon.com/) account with permission to authorize applications. appse ai connects through its own registered Selling Partner API application, so you do not need to register as a developer or supply a client ID or client secret.

:::

### Required Fields

| Field                         | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Connection Name**           | A label to identify this credential within appse ai.                                                                                                                                                                                                                                                                                                                                                          |
| **Select Marketplace Region** | The Amazon Selling Partner API region your seller account operates in:<ul><li>**NA** — North America: US, CA, MX, BR</li><li>**EU** — Europe, Middle East, Africa and India: UK, IE, DE, FR, IT, ES, NL, SE, PL, BE, TR, ZA, EG, SA, AE, IN</li><li>**FE** — Far East: JP, AU, SG</li></ul>See Amazon's [SP-API endpoints](https://developer-docs.amazon/sp-api/docs/sp-api-endpoints) for the complete list. |

:::note
You will also need your Amazon Seller Central login credentials and access to your registered two-step verification device during the authorization flow.
:::

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Amazon Seller Central** from the application list.

<img src="/img/credentials/amazon-seller-central/create-new-credential-appseai-amazon-seller-central.png" alt="appse ai Amazon Seller Central Connection Name" width="700"/>

This opens the Amazon Seller Central credential form. Add your **Connection Name**.

#### 2. Select Your Region

Choose the region your seller account operates in from the **Select Region** dropdown — **NA**, **EU**, or **FE**. This sets the Selling Partner API endpoint appse ai calls, so choosing the wrong region will prevent appse ai from accessing your account data.

<img src="/img/credentials/amazon-seller-central/select-region-seller-central.png" alt="appse ai Amazon Seller Central region and marketplace selector" width="700"/>

#### 3. Authorize the App and Complete Two-Step Verification

Log in to your Amazon Seller Central account and complete the two-step verification process.

Follow the Log in with Amazon (LWA) flow to authorize your application against your Seller account. LWA is Amazon's OAuth-based authorization system used to grant appse ai access to your Seller account.

Enter your Amazon account password to proceed.

<img src="/img/credentials/amazon-seller-central/enter-password-seller-central.png" alt="appse ai Amazon Seller Central enter password" width="700"/>

Enter the one-time password (OTP) sent to your registered device.

<img src="/img/credentials/amazon-seller-central/enter-otp-seller-central.png" alt="appse ai Amazon Seller Central enter OTP" width="700"/>

Select your country from the dropdown.

<img src="/img/credentials/amazon-seller-central/select-country-seller-central.png" alt="appse ai Amazon Seller Central select country" width="700"/>

Click **Confirm** to complete the verification process.

<img src="/img/credentials/amazon-seller-central/click-confirm-seller-central.png" alt="appse ai Amazon Seller Central click confirm" width="700"/>

Click **Save and Authorize** in appse ai to complete the connection.

<img src="/img/credentials/amazon-seller-central/click-save-authorize-appseai-amazon-seller-central.png" alt="appse ai Amazon Seller Central save and authorize button" width="700"/>

Once the verification is successfully completed, your credentials will be validated and saved within appse ai. You will see a confirmation message once the connection is successful.

:::tip
If the authorization flow fails, ensure the Amazon account you signed in with has Seller Central access and permission to authorize applications.
:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Amazon Seller Central:

### Triggers

All triggers below are **polling-based** — appse ai periodically checks Amazon for new or changed data since the last run.

**Orders**

- **New Orders Search (All Details)** — Initiates the workflow for new or updated orders and returns full order, buyer, shipping, and item details in a single event.

**Feeds & Reports**

- **Feed Created or Updated** — Initiates the workflow when a submitted feed finishes processing and its status becomes **Done** or **Fatal**. Useful for monitoring the outcome of bulk data uploads in real time.
- **New Report** — Initiates the workflow when a new report matching your filters is generated.

**Inventory & Shipments (FBA)**

- **Inbound Shipment Created** — Initiates the workflow when a new FBA inbound shipment is created, for tracking shipped vs. received quantities.
- **Inbound Shipment Updated** — Initiates the workflow when an FBA inbound shipment is created or updated, for tracking consignment status and mismatches.
- **Inventory Level Changed** — Initiates the workflow when FBA inventory levels change for a SKU, useful for syncing stock to an ERP, WMS, or storefront.
- **Inventory Reconciliation** — Initiates the workflow with a full FBA inventory quantity breakdown, useful for reconciling stock discrepancies.

**Financial Events**

- **New Sales Order Financial Event** — Initiates the workflow when a new shipment-related charge or fee is posted against a completed order.
- **New Return Financial Event** — Initiates the workflow when a return-related financial event is logged, such as a customer refund or return adjustment that impacts your account balance.

### Actions

**Orders**

| Action                | Description                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Get Order by ID**   | Retrieves a single order by its **Order ID**.                                                                                       |
| **Get Order Metrics** | Retrieves aggregated sales metrics (units, orders, average price, total sales) for a marketplace over a date range and granularity. |

**Feeds**

| Action                | Description                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Submit feed data**  | A guided, multi-step action that submits a feed for a price update, inventory update, or shipment confirmation, then pairs with **Get Feed Result** to confirm processing. Required fields vary by **Feed Type**. |
| **Get Feed**          | Retrieves the details and current processing status of a specific feed. Requires a **Feed ID**.                                                                                                                   |
| **Get Feed Document** | Downloads and decodes the contents of a processed feed document. Requires a **Feed Document ID**.                                                                                                                 |
| **Get Feed Result**   | Checks the processing status/result of a submitted feed. Requires a **Feed ID** and **Feed Type**.                                                                                                                |

**Reports**

| Action                  | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| **Get Report**          | Retrieves the details and status of a specific report. Requires a **Report ID**.               |
| **Get Report Document** | Retrieves the download URL for a processed report document. Requires a **Report Document ID**. |

**Catalog & Listings**

| Action                                                                                                          | Description                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Create or Replace Listings Item**](/app-integrations/amazon-seller-central-create-or-replace-listings-item/) | Creates a new listing or fully replaces an existing one. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Requirements**, and the item's **Attributes**. See the [detailed guide](/app-integrations/amazon-seller-central-create-or-replace-listings-item/) for request/response examples. |
| **Update item price**                                                                                           | Partially updates a listing's price without submitting a feed. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Currency**, and **Price**.                                                                                                                                                 |
| **Update Item Inventory**                                                                                       | Updates a listing's available inventory quantity synchronously, without submitting a feed. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Fulfillment Channel Code**, and **Quantity**.                                                                                                  |
| **Search listings items**                                                                                       | Searches your existing Amazon listings by product identifier (such as SKU or ASIN), variation parent SKU, or package hierarchy SKU, and returns the matching listing items. Requires a **Seller ID**, **Marketplace**, and a search method.                                                                     |

**Inventory & Fulfillment (FBA)**

| Action                          | Description                                                                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Get FBA Inventory Summaries** | Retrieves FBA inventory summaries, including fulfillable, reserved, and researching quantities. Requires a **Granularity Type**, **Granularity ID**, and **Marketplace**. |
| **Get Shipment Items**          | Retrieves the items included in a specific inbound shipment. Requires a **Shipment ID** and **Marketplace**.                                                              |

**Inbound Plans (FBA)**

| Action                           | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Create Inbound Plan**          | Creates an FBA inbound plan holding the items, quantities, and source address for stock you intend to send to Amazon. Nothing is committed and no fee is incurred at this stage. Returns an **Inbound Plan ID** and **Operation ID** — store the Inbound Plan ID, as it cannot be looked up from a shipment later. Requires a **Destination Marketplace**, **Source Address**, and **Items**. |
| **List Inbound Plan Items**      | Retrieves the items in an inbound plan, including MSKU, ASIN, FNSKU, quantity, label owner, and prep instructions. Use it to confirm the plan contents before generating packing options. Requires an **Inbound Plan ID**.                                                                                                                                                                    |
| **Generate Packing Options**     | Asks Amazon to work out how the items in an inbound plan can be boxed and grouped. Returns an **Operation ID** only — poll **Get Inbound Operation Status** until it succeeds, then read the result with **List Packing Options**. Requires an **Inbound Plan ID**.                                                                                                                           |
| **List Packing Options**         | Retrieves the packing options generated for an inbound plan, each with its packing groups, fees, discounts, status (`OFFERED`, `ACCEPTED`, or `EXPIRED`), and expiry time. Requires an **Inbound Plan ID**.                                                                                                                                                                                   |
| **Confirm Packing Option**       | Accepts one of the packing options offered for an inbound plan. Nothing progresses until an option is confirmed, and an offer left too long expires and must be regenerated. Requires an **Inbound Plan ID** and **Packing Option ID**.                                                                                                                                                       |
| **Generate Placement Options**   | Asks Amazon which fulfillment centres the stock can be sent to and what each split costs. Each option carries its own fees. Returns an **Operation ID** only — poll **Get Inbound Operation Status** until it succeeds, then read the result with **List Placement Options**. Requires an **Inbound Plan ID**.                                                                                |
| **List Placement Options**       | Retrieves the placement options generated for an inbound plan, each with its shipment IDs, fees, discounts, status (`OFFERED`, `ACCEPTED`, or `EXPIRED`), and expiry time. Requires an **Inbound Plan ID**.                                                                                                                                                                                   |
| **Confirm Placement Option**     | Accepts a placement option for an inbound plan. Once confirmed it cannot be changed — destinations are assigned and the placement fee is committed. Requires an **Inbound Plan ID** and **Placement Option ID**.                                                                                                                                                                              |
| **Get Inbound Operation Status** | Checks the status of an asynchronous inbound operation. Every generate, create, and confirm call in the inbound flow returns an **Operation ID** — poll this action until the status is `SUCCESS` before moving to the next step. A `FAILED` status returns the problems that caused it. Requires an **Operation ID**.                                                                        |

**Financial Events**

| Action                               | Description                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Get Financial Events**             | Retrieves financial events for a date range, for automated financial reporting and reconciliation. Requires **Posted After**, **Posted Before**, and a **Limit**.                                                                                                                                                                           |
| **Get financial events of an order** | Retrieves all financial events posted for a specific order. This includes shipment events (charges, fees, taxes, and promotions), refund events (returns and customer refunds), and other adjustments, chargebacks, and service fees where Amazon has posted them against the order. Requires an **Order ID** and **Max Results Per Page**. |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
