---
title: "Business Central"
---

Welcome to the Dynamics 365 Business Central credential setup guide!
  
This guide will walk you through connecting your Business Central account to our platform. You can choose between **OAuth 2.0** and **Basic Authentication** based on your security and environment preferences. Each method requires different credentials — we’ll walk you through both.

By the end of this guide, you'll be able to securely connect your Dynamics 365 BC environment and begin syncing data and automating processes.


---

## Required Fields

Before proceeding, choose your preferred **Authentication Method**:

### Option 1: OAuth 2.0 (Recommended)

You’ll need to provide:

| Field           | Description                                      |
|----------------|--------------------------------------------------|
| Connection Name | A name to identify the connection                |
| Tenant ID       | Your Azure Active Directory tenant ID            |
| Company Name    | The Business Central company you're working with |

---

### Option 2: Basic Authentication

You’ll need to provide:

| Field           | Description                                      |
|----------------|--------------------------------------------------|
| Connection Name | A name to identify the connection                |
| Username        | Your Business Central Web Service username       |
| Password        | The Web Service Access Key or password           |
| Tenant ID       | Your Azure Active Directory tenant ID            |
| Company Name    | The Business Central company you're working with |

> **Note**: Microsoft is deprecating Basic Authentication in favor of OAuth 2.0. Use Basic only if required by your environment.

---

## Step-by-Step Guide

### 1. Choose Your Authentication Method

- Select either **OAuth 2.0** or **Basic Authentication** in the credential form.
- Based on your selection, the form will update to ask for the relevant fields.

---

### 2. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `BC Finance`, `D365 Europe Instance`).
- This is only for reference within our platform.

---

### 3. Locate Your Tenant ID

1. Go to the [Azure Portal](https://portal.azure.com).
<img src="/img/credentials/business-central-cred-azure-dashboard.png" alt="APPSeAI Business Central Azure Dashboard" width="700"/>


2. Search for **Azure Active Directory** → **Overview**.
<img src="/img/credentials/business-central-cred-tenant-id.png" alt="APPSeAI Business Central Tenant ID" width="700"/>


3. Copy the **Tenant ID** from the overview page.

> **Example**: `e3f75f41-xxxx-4a70-9b5c-xxxxxxxxxxxx`

---

### 4. Find Your Company Name

1. Log in to your Business Central account.
2. Navigate to **Settings (⚙️)** → **My Settings**.
<img src="/img/credentials/business-central-cred-companyname.png" alt="APPSeAI Business Central Company Name" width="700"/>

3. Locate the value under **Company**.
<img src="/img/credentials/business-central-cred-settings.png" alt="APPSeAI Business Central Settings" width="700"/>


> **Example**: `CRONUS USA, Inc.`

---

### 5. Enter Username and Password (Basic Auth only)

> Only required if you selected **Basic Authentication**

1. Use the same credentials you use while trying to access: https://businesscentral.dynamics.com/

---

## Test Your Credential

After entering all required details based on your chosen authentication type:

- Click **"Test Connection"**.
- A successful test will confirm the integration is ready to use.
- If the connection fails, recheck the credentials and try again or contact support.

---

## Need Help?

Not sure which authentication to choose or having trouble finding your credentials?  
Our team is here to help!  
Email us at [support@yourcompany.com](mailto:support@yourcompany.com) for quick assistance.

---