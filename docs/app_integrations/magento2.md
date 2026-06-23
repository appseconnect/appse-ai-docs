---
title: "Magento 2"
description: "Connect your Magento 2 store to appse ai to automate orders, products, and customer data management."
slug: /app-integrations/magento2/
---

Magento 2 is a robust, open-source e-commerce platform that offers flexible shopping cart systems and control over the look, content, and functionality of your online store. With appse ai, you can seamlessly connect your Magento 2 store to automate orders, products, and customer data management, enhancing operational efficiency.

## Setup Credential

To set up your Magento 2 credential, you can choose between two authentication methods:

1.  **Integration Token**: Uses an Access Token generated via Magento Integrations (Recommended).
2.  **Session Authentication**: Uses your Magento Admin username and password.

<img src="/img/credentials/magento2/magento-auth-selection.png" alt="Magento Authentication Selection" width="700"/>

### Method 1: Integration Token

Select **Integration Token** in the authentication type selection screen.

#### Required Fields

| Field           | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                     |
| Store Domain    | The domain of your Magento store (e.g., `test.templatebar.com`). |
| Access Token    | The API access token generated from Magento Admin.               |

<img src="/img/credentials/magento2/magento-credential-modal.png" alt="Magento Integration Token Fields" width="700"/>

#### Step-by-Step Guide

**1. Prerequisite: Configure OAuth Settings**

Before creating an integration, you must enable standalone Bearer tokens.

- Log in to Magento Admin.
- Navigate to **Stores > Settings > Configuration > Services > OAuth**.
- Expand **Consumer Settings**.
- Set **Allow OAuth Access Tokens to be used as standalone Bearer tokens** to **Yes**.
- Click **Save Config**.

<img src="/img/credentials/magento2/magento-oauth-config.png" alt="Magento OAuth Configuration" width="700"/>

**2. Create an Integration**

- Navigate to **System > Extensions > Integrations** and click **Add New Integration**.

<img src="/img/credentials/magento2/magento-integrations-grid.png" alt="Magento Integrations Grid" width="700"/>

**3. Configure Integration Details**

- Enter a **Name** (e.g., `appseai`) and your **Password** in "Basic Settings".

<img src="/img/credentials/magento2/magento-new-integration.png" alt="Magento New Integration Form" width="700"/>

**4. Set API Permissions**

- Switch to the **API** tab, set **Resource Access** to **All**, and click **Save**.

<img src="/img/credentials/magento2/magento-api-permissions.png" alt="Magento API Permissions" width="700"/>

**5. Get Access Token**

- Click **Activate** on the new integration, then **Allow**.
- Copy the **Access Token**.

<img src="/img/credentials/magento2/magento-access-token.png" alt="Magento Access Tokens" width="700"/>

**6. Connect to appse ai**

- In appse ai, enter your **Store Domain** and paste the **Access Token**.
- Click **Save**.

---

### Method 2: Session Authentication

Select **Session Authentication** in the authentication type selection screen.

#### Required Fields

| Field           | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                     |
| Store Domain    | The domain of your Magento store (e.g., `test.templatebar.com`). |
| Admin Username  | Your Magento Admin panel username.                               |
| Admin Password  | Your Magento Admin panel password.                               |

<img src="/img/credentials/magento2/magento-session-auth-modal.png" alt="Magento Session Authentication Fields" width="700"/>

#### Step-by-Step Guide

1.  **Select Authentication**: Choose **Session Authentication** when adding a credential.
2.  **Enter Details**:
    - **Store Domain**: Enter your store's base domain (e.g., `magento.example.com`).
    - **Admin Username**: Enter the username you use to log in to the Magento Admin.
    - **Admin Password**: Enter your admin password.
    - _Note: Ensure the user has API access permissions._
3.  **Connect**: Click **Save** to verify and connect.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application-specific activities within the platform. Here is a list of all the actions and triggers available:

### Triggers

| Trigger | Description |
| ------- | ----------- |
| **Customers updated** | Trigger when customers are updated in Magento. |
| **New customers created** | Trigger when new customers are created in Magento. |
| **New orders created** | Trigger when new orders are created in Magento. |
| **New products created** | Trigger when new products are created in Magento. |

### Actions

#### Customer Actions

| Action | Description |
| ------ | ----------- |
| **Create a customer** | Create a new customer in Magento. |
| **Get customer by email address** | Get customer details by email address. |
| **Update a customer** | Update an existing customer in Magento. |

#### Product Actions

| Action | Description |
| ------ | ----------- |
| **Create a product** | Create a new product in Magento. |
| **Get product by SKU** | Get product details by SKU. |
| **Update a product** | Update an existing product in Magento. |

#### Shipment Actions

| Action | Description |
| ------ | ----------- |
| **Create shipment** | Create a shipment for a Magento order. |

---

## Action Configuration

### Update a Customer

**Update a Customer** action modifies the details of an existing customer in Magento using their customer ID. It allows updating personal details, email, and address information.

This action is commonly used to **keep customer records up to date**, **sync address changes from external systems**, and **manage customer data across integrations**.

For a full list of supported fields, refer to the [Magento 2 REST API documentation](https://developer.adobe.com/commerce/webapi/rest/tutorials/orders/order-add-items/).

---

#### Scenario 1: Create a New Address While Updating a Customer

:::note
Use this configuration when you want to **add a new shipping or billing address** to an existing customer record during the update.
:::

##### Mandatory Configuration Fields

| Field | Description |
| ----- | ----------- |
| firstname | First name of the customer for the new address. (e.g., `"Jane"`) |
| lastname | Last name of the customer for the new address. (e.g., `"Doe"`) |
| street | Street line(s) for the new address. (e.g., `"123 Main Street"`) |
| city | City for the new address. (e.g., `"Austin"`) |
| postcode | ZIP or postal code for the address. (e.g., `"78701"`) |
| countryId | Two-letter ISO country code for the address. (e.g., `"US"`) |
| telephone | Contact phone number for the address. (e.g., `"5121234567"`) |



---

#### Scenario 2: Update an Existing Address While Updating a Customer

:::note
Use this configuration when you want to **modify an address that already exists** on the customer record.
:::

##### Mandatory Configuration Fields

| Field | Description |
| ----- | ----------- |
| id | The unique ID of the existing address to update. (e.g., `15`) |

:::note
The **Address ID (`id`)** is mandatory and must match an address already associated with the customer. Providing an incorrect or non-existent Address ID will result in an error.

Apart from the Address ID, users can provide any other fields they wish to update.
:::

---

## Support

If you’re unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
