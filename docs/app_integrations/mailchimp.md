---
title: "Mailchimp"
description: Step-by-step guide to set up Mailchimp credentials and automate audience, contact, and campaign workflows in appse ai.
---


Mailchimp is a leading email marketing and audience management platform that helps businesses automate campaigns, manage contacts, and track customer engagement. With appse ai, you can seamlessly connect Mailchimp to automate audience synchronization, contact management, tagging operations, and campaign workflows.

## Setup Credential

To set up your Mailchimp credential, you need to generate an API Key from your Mailchimp account and configure the associated Data Center.

### Required Fields

| Field           | Description                                                            |
| ----------------| ---------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection.                           |
| Data Center     | The Mailchimp data center associated with your account (e.g., `us21`). |
| API Key         | API key generated from your Mailchimp account.                         |
<img src="/img/credentials/mailchimp/mailchimp-credential-popup.png" alt="Mailchimp Credential Form" width="700" height="500"/>

### Step-by-Step Guide

Before setting up your Mailchimp credential in appse ai, ensure that you have access to your Mailchimp account with permission to generate API keys.

#### 1. Log in to Mailchimp

- Log in to your Mailchimp account.
<img src="/img/credentials/mailchimp/mailchimp-login.png" alt="Mailchimp Login" width="700" height="500"/>

---

#### 2. Navigate to API Key settings

- Click on your profile icon in the bottom-left corner and navigate to:

![Mailchimp Profile Menu](/img/credentials/mailchimp/mailchimp-profile.png)

- Click on **Account & Billing**

![Mailchimp Account and Billing menu](/img/credentials/mailchimp/mailchimp-account-billing.png)

- Click on **Extras**

![Mailchimp Extra tab](/img/credentials/mailchimp/mailchimp-extra-tab.png)

- Click on **API keys**

![Mailchimp API keys tab](/img/credentials/mailchimp/mailchimp-apikey.png)

---

#### 3. Generate API Key

In the API Keys section:

- Click **Create A Key**

![Mailchimp Create A Key button](/img/credentials/mailchimp/mailchimp-create-apikey.png)

- Provide **API Key Name**

![Mailchimp API Key Name](/img/credentials/mailchimp/mailchimp-apikey-name.png)

- Click on **Generate Key**

![Mailchimp Generate Key button](/img/credentials/mailchimp/mailchimp-click-generate-key.png)

- Copy the generated API key

![Mailchimp copy API key screen](/img/credentials/mailchimp/mailchimp-copy-apikey.png)

::info
Store the API key securely. It provides access to your Mailchimp account APIs.
::

---

#### 4. Find Data Center

Your Mailchimp Data Center can be identified from either the account URL or the API key format.

Example Mailchimp URL:

```text
https://us21.admin.mailchimp.com/
```

Here, `us21` is the **Data Center**.

You can also identify it from the API key format:

```text
xxxxxxxxxxxxxxxx-us21
```

---

#### 5. Connect to appse ai

In appse ai, enter the following details:

- **Connection Name**
- **Data Center**
- **API Key**
<img src="/img/credentials/mailchimp/mailchimp-configure-credential.png" alt="Save Mailchimp Credential" width="700" height="500"/>

- Click **Save** to establish the connection.

---

## Find Audience ID

Most Mailchimp actions in appse ai require an **Audience ID** to identify the target audience/list.

To find your Audience ID in Mailchimp:

- Navigate to **Audience** from the left sidebar.

![Mailchimp Audience menu](/img/credentials/mailchimp/audience-tab.png)

- Click on the **three-dot menu (...)**

![Mailchimp Audience three dot menu](/img/credentials/mailchimp/audience-three-dot-menu.png)

- Click on **Audience settings**

![Mailchimp Audience settings dropdown](/img/credentials/mailchimp/audience-settings.png)

- Locate and copy the **Audience ID**

![Mailchimp Audience ID](/img/credentials/mailchimp/audience-id.png)

::info
The Audience ID is required in most Mailchimp actions such as Create Contact and Add or Remove Contact Tags.
::

---

## Actions

Here is the list of available actions in Mailchimp:

| Action                         | Description                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| **Create Contact**             | Add a new contact to a Mailchimp audience.                       |
| **Add or Remove Contact Tags** | Add or remove tags on an existing Mailchimp contact.          |

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
