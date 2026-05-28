---
title: Apollo.io
description: Step-by-step guide to set up Apollo.io credentials for Appse.ai integration
---


## Introduction

Apollo.io is a B2B sales intelligence and engagement platform that helps teams discover leads, enrich contacts, and automate outbound sales workflows. By integrating Apollo.io with Appse.ai, you can securely access people and organization data to power automated sales, enrichment, and CRM workflows.

---

## Key Features

- **Lead Discovery**: Find targeted B2B prospects using advanced search filters.
- **Data Enrichment**: Enrich contacts and companies with verified contact and firmographic data.
- **Sales Automation**: Automate outbound emails, follow-ups, and engagement sequences.
- **Intent Signals**: Identify accounts showing buying interest.
- **CRM Sync**: Sync leads and contacts with connected CRM systems.
- **Integrations**: Connect seamlessly with Appse.ai and other third-party tools.

---

## Setup Credential

Follow the steps below to configure Apollo.io credentials in Appse.ai.

### Required Fields

The following fields are required to configure Apollo credentials in Appse.ai.

| Field           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Connection Name | A name to help you identify this Apollo.io connection within Appse.ai       |
| API Key        | Your personal Apollo.io API key used to authenticate API requests           |

::info
All required fields must be filled correctly to successfully authorize Apollo with Appse.ai.
::

## Step-by-Step Guide

To get started with Apollo.io, click **Select a Credential** and choose **Apollo.io** from the application list.
![Create Apollo.io credential](/img/credentials/apollo-io/add_credential.png)

This opens the Apollo.io credential form.
![Apollo.io credential form](/img/credentials/apollo-io/configure_credential.png)

---

### Step 1: Add Connection Name

- Enter a meaningful **Connection Name**.
- This is for identification purposes only inside Appse.ai and does not affect your Apollo.io account.

![Apollo.io connection name field](/img/credentials/apollo-io/connection_key.png)

---

### Step 2: Log in to Apollo.io

- Open a new tab and log in to your **Apollo.io** account.

![Apollo.io login page](/img/credentials/apollo-io/login_page.png)

Sign in to your **Apollo.io** account.

Or create an account if you don’t already have one:
![Apollo.io login page](/img/credentials/apollo-io/signup_page.png)

::note
You must have an active Apollo.io account in order to use Apollo.io for integration in the APPSe AI.
::

After successful login, you will able to access your Apollo.io account.
![Apollo.io login page](/img/credentials/apollo-io/apollo_dashboard.png)

---

### Step 3: Navigate to API Settings

- Click on your **Profile icon** (top-right corner) on your Apollo.io account.
- Select **Admin Settings** from the dropdown menu.
- In the Settings menu, navigate to **Integrations** → **API**.

![Apollo.io login page](/img/credentials/apollo-io/admin_settings.png)
![Apollo.io API settings](/img/credentials/apollo-io/apisection.png)

- Click on API Key section.

![Apollo.io API key](/img/credentials/apollo-io/Api_key.png)

---

### Step 4: Generate and copy API Key

- Click on **Create New Key**.

![Apollo.io API key](/img/credentials/apollo-io/create_new_key.png)

- A form will open, where you need to add key name and other details.

![Enter Api key name](/img/credentials/apollo-io/enter_key_name.png)

- You can add the key as master key by enabling **Set as master key**, which automatically gives you access to all apollo api endpoint.

![Save as master key](/img/credentials/apollo-io/set_as_master_key.png)

- Or, you can add api endpoints as per you requirement by clicking the api dropdown section and clicking check boxes.

![Apollo.io API settings](/img/credentials/apollo-io/apilist_dropdown.png)

- After filling the details, click on the **Create API Key** button to create the api key.

![Create new api key](/img/credentials/apollo-io/save_create_new_apikey.png)

- Once the key is generated, copy the key to use it for your integration.

![Copy Api Key](/img/credentials/apollo-io/copy_api_key.png)

::warning
Treat your API key like a password. Do not share it publicly or commit it to source control.
::

---

### Step 5: Paste API Key in Appse.ai

- Return to the Appse.ai credential form.
- Paste the copied **API Key** into the **API Key** field.

![Paste Apollo.io API key](/img/credentials/apollo-io/appseai_apikey.png)

---

### Step 6: Save Credential

- Click **Save** to store and validate your credential.

![Save Apollo.io credential](/img/credentials/apollo-io/save_credential.png)

---

## Support

Need help? Contact our support team at **hello@appse.ai**