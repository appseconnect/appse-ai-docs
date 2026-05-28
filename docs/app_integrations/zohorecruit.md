---
title: Zoho Recruit
description: Step-by-step guide to set up Zoho Recruit credentials for Appse.ai integration
---


## Introduction

Zoho Recruit is an applicant tracking system used to manage candidates, job openings, interviews, and recruitment workflows. This guide explains how to configure Zoho Recruit authentication credentials in Appse.ai so the platform can securely connect to your Zoho Recruit account.

---

## Key Features

- **Candidate Management**: Track and manage candidates throughout the hiring lifecycle.
- **Job Opening Management**: Create, publish, and manage job openings.
- **Recruitment Automation**: Automate interview scheduling, notifications, and candidate status updates.
- **Reports and Analytics**: Gain insights into recruitment performance and hiring metrics.
- **Integrations**: Seamlessly integrate with other Zoho apps and third-party tools.

## Setup Credential

Follow the steps below to quickly set up your Zoho Recruit credential.

### Required Fields

The following fields are required to configure Zoho Recruit credentials in Appse.ai.

| Field | Description |
|------|------------|
| Authorization URL | Select your Zoho Recruit authorization url based on where your Zoho account region. |
| Token URL | Select your Zoho Recruit token url based on where your Zoho account region. |
| Client ID | Login to Zoho API Console based on your region and create a client to get Client ID. |
| Client Secret | Copy Client Secret from Zoho API Console along with Client ID. |
| API Access Scope | Set required Zoho Recruit scopes like ZohoRecruit.modules.ALL in your developer console APP. |
| Base API URL | Select your Zoho Recruit base api url based on where your Zoho account region. |

::info
All required fields must be filled correctly to successfully authorize Zoho Recruit with Appse.ai.
::

## Step-by-Step Guide

To get started with Zoho Recruit, you need to set credentials for it. Click on **Select a credential** to create a new credential.
![Create a new credential](/img/credentials/zohorecruit/new_credpage.png)

Which leads to a pop-up:
![Enter credential details to add credential](/img/credentials/zohorecruit/credential_form.png)

::note
The credential form is where you will provide OAuth and regional configuration details.
::

### Regional Configuration

You must select the correct regional URLs based on your **Zoho Recruit account region**.

::warning
Selecting an incorrect region may cause authentication failures or API request errors.
::

### Authorization URL

Select the **Authorization URL** based on your Zoho account region.
![Zoho Recruit auth url](/img/credentials/zohorecruit/auth_url.png)
![Zoho Recruit auth url dropdown](/img/credentials/zohorecruit/authurl_dropdown.png)

::info
The Authorization URL determines where users are redirected for OAuth consent.
::

### Token URL

Select the **Token URL** based on your Zoho account region.
![Zoho Recruit token url](/img/credentials/zohorecruit/token_url.png)
![Zoho Recruit token url dropdown](/img/credentials/zohorecruit/tokenurl_dropdown.png)

::info
The Token URL is used by Appse.ai to exchange the authorization code for access and refresh tokens.
::

### Base API URL

Select the **Base API URL** based on your Zoho account region.
![Zoho Recruit base url](/img/credentials/zohorecruit/base_url.png)
![Zoho Recruit base url dropdown](/img/credentials/zohorecruit/baseurl_dropdown.png)

::note
The Base API URL ensures all API calls are routed to the correct Zoho data center.
::

## How to Get Client ID and Client Secret

<Tabs>
  <TabItem value="zohorecruit_oauth2" label="OAuth 2.0">

### Step 1: Access Zoho Recruit

Sign in to your **Zoho Recruit** account.
![Sign in to Zoho Recruit](/img/credentials/zohorecruit/login_page.png)

Or create an account if you don’t already have one:
![Sign Up to create a new zoho recruit account](/img/credentials/zohorecruit/sign_up_page.png)

::note
You must have an active Zoho Recruit account before creating OAuth credentials.
::

---

### Step 2: Access Developer Console

You need to create a new client application to obtain OAuth credentials for Zoho Recruit.

Click on the [Zoho Developer Console](https://api-console.zoho.com/).

::info
The Zoho Developer Console is used to register OAuth clients and manage credentials.
::

Alternatively, you can:

- Go to [Zoho Recruit Api Documentation](https://www.zoho.com/recruit/developer-guide/apiv2/)
- Locate OAuth Authentication
- Navigate to Step 1: Registering a Client
- Click the Zoho Developer Console link

![Zoho Recruit api documentation](/img/credentials/zohorecruit/zohorecruit_apidoc.png)

---

### Step 3: Sign in to Zoho Developer Console

Sign in with the same account details you used to create a Zoho Recruit account:
![Zoho Recruit api console sign in page](/img/credentials/zohorecruit/sign_in_page.png)

---

### Step 4: Get Started

Click on **Get started**:
![Get Started](/img/credentials/zohorecruit/get_started.png)

---

### Step 5: Choose Client Type

Select **Server-based applications**:
![Choose the client type](/img/credentials/zohorecruit/client_based_app.png)

::tip
Server-based applications are recommended for backend integrations like Appse.ai.
::

---

### Step 6: Configure Application

1. Enter **App Name** and **Homepage URL**
2. Copy the **Callback API URL** from Appse.ai's Zoho Recruit credential form
3. Paste it into **Authorized Redirect URIs**
4. Click **Create**

![Create new client](/img/credentials/zohorecruit/createnewclient.png)

::warning
The Callback API URL must exactly match the value provided by Appse.ai, otherwise authorization will fail.
::

---

### Step 7: Configure Multi-Data Center Settings

Go to **Settings** and enable **Use the same OAuth credentials for all data centers**:
![data_center_settings](/img/credentials/zohorecruit/data_center_settings.png)

Click **OK** to confirm:
![save_data_center_settings](/img/credentials/zohorecruit/save_data_center_settings.png)

::info
This setting allows the same OAuth credentials to work across Zoho data centers.
::

---

### Step 8: Copy Credentials

Copy the generated **Client ID** and **Client Secret**:
![client_credentials](/img/credentials/zohorecruit/client_credential.png)

::warning
Keep your Client Secret secure and do not share it publicly.
::

---

### Step 9: Paste Credentials

Paste the **Client ID** and **Client Secret** into Appse.ai’s Zoho Recruit credential form:
![Paste client id and client secret](/img/credentials/zohorecruit/paste_clientid_clientsecret.png)

---

### Final Authorization

### Step 10: Save and Authorize

Click **Save and Authorize** to continue.
![Save and authorize](/img/credentials/zohorecruit/save_authorise.png)

---

### Step 11: Grant Permissions

Select the checkbox to grant access and click **Accept**.
![Grant Permissions](/img/credentials/zohorecruit/grant_permissions.png)

::info
Granting permissions allows Appse.ai to access Zoho Recruit data based on the configured scope.
::

If the details are valid, Appse.ai will complete the OAuth authorization flow and save the credential successfully.  

If validation fails, an error message will be displayed so you can correct the configuration and try again.

  </TabItem>
</Tabs>

## Support

Need help? Contact our support team at hello@appse.ai
