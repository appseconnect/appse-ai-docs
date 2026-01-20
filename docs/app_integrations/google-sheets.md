---
title: "Google Sheets"
slug: /app-integrations/google-sheets
---

Google Sheets is a powerful cloud-based spreadsheet application that allows users to create, edit, and collaborate on spreadsheets in real time. With **appse ai**, you can securely connect your Google Sheets account, automate data operations, and seamlessly integrate spreadsheet data into your workflows.

---

## Setup Credential

Follow the steps below to set up your Google Sheets credential and authorize access from our platform.

---

### Required Fields

You’ll need to provide the following details while creating the credential:

| Field             | Description                                                   |
|------------------|---------------------------------------------------------------|
| Connection Name   | A name to identify this Google Sheets connection              |
| Client ID         | OAuth 2.0 Client ID from Google Cloud Console                  |
| Client Secret     | OAuth 2.0 Client Secret from Google Cloud Console              |
| Callback API URL  | Redirect URI provided by our platform for OAuth authentication |

---

### Step-by-Step Guide

#### 1. Add Connection Name

- Enter a meaningful name to identify this credential in our platform.
- This is only for internal reference.

> **Example**: `Google Sheets – Finance`, `GS Reporting Account`

---

#### 2. Create a Google Cloud Project

- Go to the [Google Cloud Console](https://console.cloud.google.com/).
- Click on the **Project dropdown** (top-left corner) → **New Project**.
- Enter a **Project Name** and select a **Billing Account** (if prompted).
- Click **Create**.

---

#### 3. Enable Google Sheets API

- In the Google Cloud Console, navigate to  
  **API & Services → Library**.
- Search for **Google Sheets API**.
- Click on the API and press **Enable**.

This allows your project to interact with Google Sheets.

---

#### 4. Configure OAuth Consent Screen

- Go to **API & Services → OAuth consent screen**.
- Select **User Type**:
  - **External** (recommended for most use cases)
- Click **Create** and fill in:
  - **App name**: Your application name
  - **User support email**: Your email address
  - **Developer contact information**: Your email address
- Click **Save and Continue**.
- Under **Scopes**, add:
  - `https://www.googleapis.com/auth/spreadsheets`
- Add **Test Users** (optional for testing environments).
- Save and continue until the setup is complete.

---

#### 5. Create OAuth 2.0 Client Credentials

- Navigate to **API & Services → Credentials**.
- Click **Create Credentials** → **OAuth Client ID**.
- Select **Application Type**:
  - Choose **Web application**.
- Provide a **Name** for the OAuth client.
- Under **Authorized redirect URIs**, add the **Callback API URL** provided in our platform.

> **Important**: The redirect URI must exactly match the Callback API URL shown in the credential form.

- Click **Create**.

---

#### 6. Copy Client ID and Client Secret

- After creation, a dialog will appear with:
  - **Client ID**
  - **Client Secret**
- Copy these values and paste them into the corresponding fields in our credential form.

> You can also download the `credentials.json` file if required for reference.

---

#### 7. Complete Authorization

- Click **Save and Authorize** in our platform.
- A Google login popup will appear.
- Log in using the Google account that has access to the required Google Sheets.
- Grant the requested permissions.

Once authorization is successful, your Google Sheets credential will be connected.

---

### Save Your Credential

After entering all required fields, click **"Save"** to validate and store your credential.

- If successful, the credential will show a **check (✓)** icon and is ready for use in workflows.
- If it fails, an **error (!) icon** will appear. Please verify:
  - Client ID & Client Secret
  - Callback API URL
  - OAuth consent screen configuration

---

## Need Help?

If you face any issues during setup or authorization, please contact our support team at  
**hello@appse.ai**
