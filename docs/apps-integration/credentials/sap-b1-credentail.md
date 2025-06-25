---
title: "SAP B1 Credential"
---
## Overview

Welcome to the SAP Business One (SAP B1) credential setup guide!  

This guide will walk you through each detail you need to retrieve from your SAP B1 environment, ensuring a smooth and secure connection with our platform.

## 🪜 Step-by-Step Guide

### 1. 🔍 Find Your **Host URL** and **Port**

Provide a name for your credential in the `Connection Name` field. This will be showcased in the credential listing page.

### 2. 🔍 Find Your **Host URL** and **Port**
![APPSeAI SAP Business One Credentials Url and Port Gif](/img/credentials/sap_b1_url_port.gif)

1. Open the SAP Business One **Service Layer** configuration or ask your SAP B1 administrator.
2. Locate the base URL used to access the Service Layer API.
   - It will look something like: `https://insync.pro`
3. Check the configured port, commonly `50000`.

> ✅ **Example**:
> - Host URL: `https://insync.pro`
> - Port: `50000`
---

### 3. 🏢 Find Your **Company DB** Name
![APPSeAI SAP Business One Credentials Database Name Gif](/img/credentials/sap_b1_database_name.gif)

1. Log in to your SAP B1 desktop client.
2. On the login screen or system message, find the `Company Database` you are connected to.
3. The name typically looks like: `DEV_SAPB1H_COMPANY7`.

> ✅ **Tip**: You can also find this by going to:
> `Help` → `About SAP Business One` → `Company Details`
---

### 4. 👤 Get Your **Username** and **Password**

1. Use your **SAP B1 login credentials**.
2. Make sure the user has sufficient API permissions for integration.

> ⚠️ **Note**: The password will be encrypted in our system and never shared.

---

## 🧪 Test Your Credential

Once you've filled out the form with the above values, it should look something like this:

![APPSeAI SAP Business One Credentials](/img/credentials/sap_b1.png)

Click the **"Save"** button to store validate your inputs.

- If successful, your SAP B1 connection will be established.
- If not, please double-check the credentials or consult your administrator.

---

## 🙋 Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [support@yourcompany.com](mailto:support@yourcompany.com).

---