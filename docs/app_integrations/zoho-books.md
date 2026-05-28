---
title: Zoho Books
description: Step-by-step guide to set up Zoho Books credentials for appse.ai integration
---


## Introduction

Zoho Books is an online accounting software that helps businesses manage invoicing, expenses, inventory, payments, and taxes. This guide explains how to configure Zoho Books authentication credentials in appse.ai so the platform can securely connect to your Zoho Books account.

---

## Key Features

- **Invoicing & Billing**: Create invoices, bills, credit notes, and recurring invoices.
- **Inventory Management**: Track items, stock levels, and warehouses.
- **Payments & Banking**: Record payments, manage bank feeds, and reconciliation.
- **Tax & Compliance**: Handle GST, VAT, and regional tax configurations.
- **Financial Reports**: Balance sheet, profit & loss, and cash flow reports.
- **Automation & Integrations**: Integrate with CRM, eCommerce, and ERP platforms.

## Setup Credential

Follow the steps below to quickly set up your Zoho Books credential.

### Required Fields

The following fields are required to configure Zoho Books credentials in appse.ai.

| Field             | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Authorization URL | Select your Zoho Books authorization url based on your Zoho account region.              |
| Token URL         | Select your Zoho Books token url based on your Zoho account region.                      |
| Client ID         | Login to Zoho API Console based on your region and create a client to get Client ID.     |
| Client Secret     | Copy Client Secret from Zoho API Console along with Client ID.                           |
| API Access Scope  | Set required Zoho Books scopes like ZohoBooks.modules.ALL in your developer console APP. |
| Base API URL      | Select your Zoho Books base api url based on your Zoho account region.                   |

::info
All required fields must be filled correctly to successfully authorize Zoho Books with appse.ai.
::

## Step-by-Step Guide

To get started with Zoho Books, you need to set credentials for it. Go to the credential page of appse.ai.
![Create a new credential](/img/credentials/zoho-books/home_page.png)

Click on **Add credentials**, search for Zoho Books and select it to create a new credential.
![Create a new credential](/img/credentials/zoho-books/add_new_cred.png)

Or you can also do it while creating workflow by clicking on **Create a new credential**.
![Create a new credential](/img/credentials/zoho-books/new_credpage.png)

Which leads to a pop-up:
![Enter credential details to add credential](/img/credentials/zoho-books/credential_form.png)

::note
The credential form is where you will provide OAuth and regional configuration details.
::

### Regional Configuration

You must select the correct regional URLs based on your **Zoho Books account region**.

::warning
Selecting an incorrect region may cause authentication failures or API request errors.
::

### Authorization URL

Select the **Authorization URL** based on your Zoho account region.
![Zoho Books auth url](/img/credentials/zoho-books/auth_url.png)
![Zoho Books auth url dropdown](/img/credentials/zoho-books/authurl_dropdown.png)

::info
The Authorization URL determines where users are redirected for OAuth consent.
::

### Token URL

Select the **Token URL** based on your Zoho account region.
![Zoho Books token url](/img/credentials/zoho-books/token_url.png)
![Zoho Books token url dropdown](/img/credentials/zoho-books/tokenurl_dropdown.png)

::info
The Token URL is used by appse.ai to exchange the authorization code for access and refresh tokens.
::

### Base API URL

Select the **Base API URL** based on your Zoho account region.
![Zoho Books base url](/img/credentials/zoho-books/base_url.png)
![Zoho books base url dropdown](/img/credentials/zoho-books/baseurl_dropdown.png)

::note
The Base API URL ensures all API calls are routed to the correct Zoho data center.
::

## How to Get Client ID and Client Secret

<Tabs>
  <TabItem value="zohobooks_oauth2" label="OAuth 2.0">

### Step 1: Access Zoho books

Sign in to your **Zoho books** account.
![Sign in to Zoho books](/img/credentials/zoho-books/login_page.png)

Or create an account if you don’t already have one:
![Sign Up to create a new zoho books account](/img/credentials/zoho-books/sign_up_page.png)

::note
You must have an active Zoho books account before creating OAuth credentials.
::

---

### Step 2: Access Developer Console

You need to create a new client application to obtain OAuth credentials for Zoho books.

Click on the [Zoho Developer Console](https://api-console.zoho.com/).

::info
The Zoho Developer Console is used to register OAuth clients and manage credentials.
::

Alternatively, you can:

- Go to [Zoho Books Api Documentation](https://www.zoho.com/books/api/v3/introduction/)
- Locate OAuth
- Navigate to Step 1: Registering New Client
- Click the Zoho Developer Console link

![Zoho books api documentation](/img/credentials/zoho-books/zoho-books_apidoc.png)

---

### Step 3: Sign in to Zoho Developer Console

Sign in with the same account details you used to create a Zoho books account:
![Zoho books api console sign in page](/img/credentials/zoho-books/sign_in_page.png)

---

### Step 4: Get Started

Click on **Get started**:
![Get Started](/img/credentials/zoho-books/get_started.png)

---

### Step 5: Choose Client Type

Select **Server-based applications**:
![Choose the client type](/img/credentials/zoho-books/client_based_app.png)

::tip
Server-based applications are recommended for backend integrations like appse.ai.
::

---

### Step 6: Configure Application

1. Enter **App Name** and **Homepage URL**
2. Copy the **Callback API URL** from appse.ai's Zoho Books credential form
3. Paste it into **Authorized Redirect URIs**
4. Click **Create**

![Create new client](/img/credentials/zoho-books/createnewclient.png)

::warning
The Callback API URL must exactly match the value provided by appse.ai, otherwise authorization will fail.
::

---

### Step 7: Configure Multi-Data Center Settings

Go to **Settings** and enable **Use the same OAuth credentials for all data centers**:
![data_center_settings](/img/credentials/zoho-books/data_center_settings.png)

Click **OK** to confirm:
![save_data_center_settings](/img/credentials/zoho-books/save_data_center_settings.png)

::info
This setting allows the same OAuth credentials to work across Zoho data centers.
::

---

### Step 8: Copy Credentials

Copy the generated **Client ID** and **Client Secret**:
![client_credentials](/img/credentials/zoho-books/client_credential.png)

::warning
Keep your Client Secret secure and do not share it publicly.
::

---

### Step 9: Paste Credentials

Paste the **Client ID** and **Client Secret** into appse.ai’s Zoho Books credential form:
![Paste client id and client secret](/img/credentials/zoho-books/paste_clientid_clientsecret.png)

---

### Final Authorization

### Step 10: Save and Authorize

Click **Save and Authorize** to continue.
![Save and authorize](/img/credentials/zoho-books/save_authorise.png)

---

### Step 11: Grant Permissions

Select the checkbox to grant access and click **Accept**.
![Grant Permissions](/img/credentials/zoho-books/grant_permissions.png)

::info
Granting permissions allows appse.ai to access Zoho Books data based on the configured scope.
::

If the details are valid, appse.ai will complete the OAuth authorization flow and save the credential successfully.

If validation fails, an error message will be displayed so you can correct the configuration and try again.

  </TabItem>
</Tabs>

---

## Webhook Configuration

To receive data from **Zoho Books**, you must use Webhooks. This is required because **Zoho Books** does not support date-time filters, making it impossible to check for new data using standard polling methods. Instead, you must configure **Zoho Books** to push data directly to your appse ai flow via Webhooks.

---

## Actions

Here is a list of the available actions for Zoho Books:

### Actions

- **Create Contact**
- **Update Contact**
- **Create Item**
- **Update Item**
- **Create ContactPerson**
- **Update ContactPerson**
- **Create SalesOrder**
- **Create Invoice**
- **Get Records by Id**
- **Get Contact Addresses**
- **Get Contactpersons of a Contact**

---

## Support

Need help? Contact our support team at hello@appse.ai
