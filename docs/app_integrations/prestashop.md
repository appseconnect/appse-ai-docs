---
title: "PrestaShop"
description: "Step-by-step guide to set up PrestaShop Admin API credentials for appse ai integration"
slug: /app-integrations/prestashop/
---

PrestaShop is an open-source e-commerce platform used to build and run online stores, with built-in catalog, order, customer, and stock management. With appse ai, you can connect your PrestaShop store through the **Admin API** to automate product, order, and customer workflows across your business systems.

This guide explains how to configure a PrestaShop credential in appse ai using the **Admin API**.

:::info

The **Admin API** is PrestaShop's modern REST API, secured with OAuth 2.0 client credentials. It is **not** the same as the legacy **Webservice API** (Advanced Parameters → Webservice), which uses a basic-auth API key. appse ai connects using the Admin API — make sure you configure an **API Client**, not a Webservice key.

:::

---

## Prerequisites

Before creating the credential in appse ai, confirm the following:

| Requirement         | Details                                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| PrestaShop version  | **9.0 or later** (recommended). The Admin API is available from **8.1** as an experimental feature and must be enabled manually. |
| HTTPS               | Your storefront and back office must be served over **HTTPS**. PrestaShop will not issue OAuth 2.0 tokens over plain HTTP.       |
| Back office access  | An employee account with permission to view and edit **Advanced Parameters**.                                                    |
| Reachable store URL | The store must be publicly reachable from appse ai (not behind an IP allowlist, maintenance mode, or basic-auth prompt).         |

---

## Setup Credential

Follow the steps below to set up your PrestaShop Admin API credential.

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection.                                                                              |
| Shop URL        | The base URL of your PrestaShop store, e.g. `https://shop.example.com`. Do **not** include `/admin` or a trailing `/api`. |
| Client ID       | The Client ID of the API Client created in your PrestaShop back office.                                                   |
| Client Secret   | The Client Secret generated when the API Client was created. Shown **only once** by PrestaShop.                           |

---

### Step-by-Step Guide

#### 1. Enable the Admin API (PrestaShop 8.1 only)

On **PrestaShop 9.0 and later, skip this step** — the Admin API is enabled by default.

On PrestaShop 8.1, the Admin API sits behind a feature flag:

- Log in to your PrestaShop back office.
- Go to **Advanced Parameters → Feature Flags**.
- Enable the **Admin API** feature flag (labelled _Authorization server_ in some builds).
- Click **Save**.

#### 2. Open the API Client page

Go to **Advanced Parameters → API Client**.

If this menu entry is not visible, the Admin API is not enabled — return to Step 1, or upgrade to PrestaShop 9.

#### 3. Create a new API Client

Click **Add new API client** and fill in the details:

| Field           | Recommended value                                                         |
| --------------- | ------------------------------------------------------------------------- |
| API Client name | `appse ai`                                                                |
| Client ID       | `appse-ai` (or any unique identifier — you will paste this into appse ai) |
| Description     | Optional, e.g. _Integration client for appse ai workflows._               |
| Enabled         | **Yes**                                                                   |
| Token lifetime  | `3600` seconds (default). appse ai refreshes tokens automatically.        |

#### 4. Assign scopes

Scroll to the **Scopes** section and select the permissions this client needs. PrestaShop scopes follow the pattern `<resource>_<read|write>` — for example `product_read`, `product_write`, `order_read`, `customer_read`.

Grant only the scopes your workflows require. As a starting point for a typical order-and-catalog integration:

| Scope                              | Purpose                           |
| ---------------------------------- | --------------------------------- |
| `product_read` / `product_write`   | Read and manage catalog products. |
| `customer_read` / `customer_write` | Read and manage customer records. |
| `order_read` / `order_write`       | Read and manage orders.           |

:::warning

A workflow that calls an endpoint outside the granted scopes will fail with an authorization error. If you add new workflows later, revisit the API Client and add the matching scopes.

:::

#### 5. Save and copy the Client Secret

Click **Save**. PrestaShop generates the **Client Secret** and displays it **once**, in a confirmation banner at the top of the page.

#### 6. Add the credential in appse ai

Return to appse ai and open the PrestaShop credential form:

- **Connection Name** — a name to identify this connection.
- **Shop URL** — your store's base URL, e.g. `https://shop.example.com`.
- **Client ID** — the Client ID from Step 3.
- **Client Secret** — the secret copied in Step 5.

Click **Save**. appse ai exchanges these for an access token against your store's token endpoint and validates the connection. If the credential saves successfully, your PrestaShop store is connected.

---

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)
