---
title: "BigCommerce B2B"
---


BigCommerce is a powerful e-commerce solution which also offers a dedicated B2B Edition with advanced features tailored for wholesale and business-to-business operations, enabling companies to manage complex pricing structures, customer groups, company accounts, and bulk ordering efficiently. appse ai lets you seamlessly connect with your BigCommerce B2B account to automate key processes such as order management, company management, quote synchronization, and invoice updates—helping streamline operations and enhance efficiency through intelligent, automated workflows.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

The following fields are required to authenticate your BigCommerce account:

| Field      | Description                                  |
| ---------- | -------------------------------------------- |
| Store Hash | Unique identifier for your BigCommerce store |
| API Token  | Token used to authenticate API requests      |

### Step-by-Step Guide

#### 1. Find Your Store Hash

- Log in to your BigCommerce admin dashboard.
- In your browser's address bar, you will see a URL like:  
   `https://store-abc123.mybigcommerce.com/manage/dashboard`
![APPSeAI BigCommerce Store Hash](/img/credentials/bigcommerce-b2b/bigcommerce-cred-store-hash.png)

- The value after `store-` is your **Store Hash**.  
   Example: `abc123`

#### 2. Generate Your Access Token

- Navigate to **Settings** → **Store-level API accounts** → Click **Create API Account**.

![APPSeAI BigCommerce Store Level API Accounts](/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-1.png)
![APPSeAI BigCommerce Store Create API Account](/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-2.png)

- Enter a **Name** and select the required **OAuth scopes**.

Here is a recommended table for the required OAuth scopes:

| OAuth Scope                                  | Access    |
| -------------------------------------------- | --------- |
| Content                                      | None      |
| Checkout Content                             | None      |
| Customers                                    | modify    |
| Customers login                              | None      |
| Information & settings                       | None      |
| Marketing                                    | None      |
| Orders                                       | modify    |
| Order transactions                           | modify    |
| Create payments                              | create    |
| Get Payment methods                          | read-only |
| Stored Payment Instruments                   | None      |
| Products                                     | modify    |
| Themes                                       | None      |
| Carts                                        | None      |
| Checkouts                                    | None      |
| Sites & routes                               | None      |
| Channel settings                             | None      |
| Channel listings                             | None      |
| Storefront API tokens                        | None      |
| Storefront API customer impersonation tokens | None      |
| Store Locations                              | modify    |
| Store Inventory                              | modify    |
| Fulfillment Methods                          | modify    |
| Order Fulfillment                            | modify    |
| Metafield Ownership                          | None      |
| Metafields Access                            | full      |
| B2B Edition                                  | modify    |

::info
Make sure the B2B Edition scope is checked. It is mandatory for accessing B2B features of BigCommerce.
::
![APPSeAI BigCommerce B2B Api Scope](/img/credentials/bigcommerce-b2b/scope.png)

- Click **Save** to generate the token.

![APPSeAI BigCommerce B2B Save API](/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-3.png)

- Copy and securely store the **Access Token** — it will not be shown again.

![APPSeAI BigCommerce B2B Access Token](/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-4.png)

You will now have your **Access Token** for use within the APPSe AI platform.

### Test Your Credential

Once both **Store Hash** and **API Token** are entered into the credential form, use the **Save** button to store your configurations.
![APPSeAI BigCommerce B2B Save Credentails](/img/credentials/bigcommerce-b2b/save-cred.png)

- If successful, your BigCommerce B2B integration will be ready to use.
- If unsuccessful, try the following solutions:
  - Ensure your Store Hash and token are correct and that the scopes are properly set.
  - Ensure that your API token has the required scope for the Customers endpoint. Missing or insufficient permissions may result in authentication or data access errors. Refer to the OAuth scope recommendation table above.

---

### Triggers and Actions

Here is a list of all the actions and triggers available for BigCommerce B2B:

---

## Triggers

- **On New Company Created** — Triggers when a new company record is created.
- **On New User Created** — Triggers when a new user is created.
- **On New B2B Order Created** — Triggers when a new B2B order is placed.
- **On New Quote (RFQ) Created** — Triggers when a new request for quote is created.

---

## Actions

> **Company Actions**

- **Create Company** — Create a new company record.
- **Get Company by ID** — Retrieve a company using its unique identifier.
- **Update Company** — Update details of an existing company.

---

> **User Actions**

- **Create User** — Create a new user record.
- **Get User by ID** — Retrieve a user using their unique identifier.
- **Get User by Email** — Retrieve a user using their email address.
- **Get Company Users** — Retrieve all users associated with a specific company.
- **Update User** — Update details of an existing user.

---

> **RFQ Actions**

- **Get Quote by ID** — Retrieve a quote using its unique identifier.

---

> **Order Actions**

- **Get Order by BC Order ID** — Retrieve an order using its BigCommerce order ID.

---

> **Invoice Actions**

- **Create Invoice** — Create a new invoice record.

---

> **Company Address Actions**

- **Get Company Addresses** — Retrieve all addresses associated with a company.
- **Create Company Address** — Create a new address for a company.
- **Update Company Address** — Update an existing company address.

---

## Support

Need help? Contact our support team at hello@appse.ai
