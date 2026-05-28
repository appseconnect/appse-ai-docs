---
title: "HubSpot"
---


**HubSpot CRM** is a cloud-based customer relationship management platform that helps businesses manage leads, track interactions, and grow customer relationships efficiently. It provides a unified space for sales, marketing, and support teams to collaborate and stay aligned.

## Set Up Credential

Before you can set up your HubSpot credential in **appse ai**, you need to have a **HubSpot Developer Account**.

This account gives you access to the **HubSpot Developer Dashboard**, where you can create and manage apps, generate the `Client ID` and `Client Secret`, and configure authorization settings required for connecting HubSpot with appse ai.

### 1. Sign In / Create an account in HubSpot

Sign in or create a HubSpot account using your email address.  
 [https://app.hubspot.com/login](https://app.hubspot.com/login)
![write email screen](/img/credentials/hubspot/write-email.png)

### 2. Enter Password

Type in the password for your HubSpot account.
![set password screen](/img/credentials/hubspot/set-password.png)

### 3. Enter Verification code

Enter the verification code sent to your email.
![enter verification code screen](/img/credentials/hubspot/enter-verification-code.png)

### 4. Click on ‘Create App’

After logging in to your HubSpot account, click on ‘Create App’.
![click on create app button](/img/credentials/hubspot/click-on-create-app.png)

### 5. Write the Public App name

Enter a name for your public app.
![write public app name](/img/credentials/hubspot/write-public-app-name.png)

### 6. Auth Settings

Go to the Auth settings
![go to auth settings screen](/img/credentials/hubspot/go-to-auth.png)

### 7. Redirect URL

You need to add the Redirect URL. For this, go back to your HubSpot credential form in appse ai and look for the Redirect URL.  
 (If you don’t know how to add a credential in appse ai, refer to the documentation on how to [add a credential](https://docs.appse.ai/platform/key-concepts/credentials/add-a-credential) )
![redirect url screen](/img/credentials/hubspot/redirect-url.png)

Copy it and paste it in the Redirect URL field in HubSpot.
![add redirect url screen](/img/credentials/hubspot/add-redirect-url.png)

### 8. Scope

You need to ensure that these scopes are added to the HubSpot to connect the credentials.
![add new scope screen](/img/credentials/hubspot/add-new-scope.png)

#### Scopes to select

`crm.objects.companies.read` `crm.objects.companies.write` `crm.objects.contacts.read` `crm.objects.contacts.write` `crm.objects.deals.read` `crm.objects.deals.write` `crm.objects.line_items.read` `crm.objects.line_items.write` `oauth` `e-commerce` `crm.objects.orders.read` `crm.objects.orders.write` `crm.objects.quotes.read` `crm.objects.quotes.write` `crm.objects.products.read` `crm.objects.products.write` `crm.objects.invoices.read`

::note
These scopes are added by default
::

### 9. Create app

After setting the scopes correctly, click on ‘Create App’.
![now create app screen](/img/credentials/hubspot/now-create-app.png)

### 10. App created

A confirmation message will appear, indicating that your app has been created successfully.
![success toaster](/img/credentials/hubspot/success-toaster.png)

### 11. Copy the credentials

Go to Auth, copy the ‘Client ID’ and ‘Client Secret’ from HubSpot.
![copy credentials screen](/img/credentials/hubspot/copy-credentials.png)

### 12. Setting credentials in appse ai

Go back to the Credentials page of appse ai [https://reimagine.insync.pro/credentials](https://reimagine.insync.pro/credentials)

Paste ‘Client ID’ and ‘Client Secret’ in their respective fields.
![client ID screen](/img/credentials/hubspot/client-id.png)
![client secret screen](/img/credentials/hubspot/client-secret.png)

### 13. Save & Authorize

Click on **‘Save & Authorize’** to connect your credentials. After this, if you have multiple accounts, a list will appear — select the account you want to connect to and continue.

(Note: Developer accounts cannot be used to authorize HubSpot credentials for your app, as they are meant for app development and testing only. Please select a live HubSpot account to complete the connection.)
![select live app screen](/img/credentials/hubspot/select-live-app.png)

### 14. Connect App

Click on Connect App to connect the credential.
![connect app screen](/img/credentials/hubspot/connect-app.png)

---

## Triggers and Actions

Here is a list of the available actions and triggers for HubSpot:

### Triggers

---

- **New Products Created** — Triggers when a new product is created.
- **Products Updated** — Triggers when an existing product is updated.
- **New Orders Created** — Triggers when a new order is created.
- **New Companies Created** — Triggers when a new company record is created.
- **Companies Updated** — Triggers when a company record is updated.
- **New Contacts Created** — Triggers when a new contact is created.
- **Contacts Updated** — Triggers when an existing contact is updated.
- **New Invoices Created** — Triggers when a new invoice is created.
- **New Deals Created** — Triggers when a new deal is created.
- **New Quotes Created** — Triggers when a new quote is created.

---

### Actions

---

> Company Actions

- **Create Company** — Create a new company record.
- **Update Company** — Update an existing company record.
- **Get Company Associations** — Retrieve associated records linked to a company.

---

> Contact Actions

- **Create Contact** — Create a new contact record.
- **Update Contact** — Update an existing contact record.
- **Get Contact Associations** — Retrieve records associated with a contact.
- **Get Contacts by Firstname and Lastname** — Retrieve contacts matching a given first and last name.
- **Get Contacts by Email** — Retrieve contacts using an email address.

---

> Product Actions

- **Create Product** — Create a new product record.
- **Update Product** — Update an existing product record.
- **Update Product Price** — Modify the price of an existing product.
- **Get Products by SKU** — Retrieve products using SKU values.

---

> Order Actions

- **Create Order** — Create a new order record.
- **Get Order Associations** — Retrieve records associated with an order.

---

> Deal Actions

- **Create Deal** — Create a new deal record.
- **Get Deal Associations** — Retrieve records associated with a deal.

---

> Invoice Actions

- **Create Invoice** — Create a new invoice record.
- **Get Invoice Associations** — Retrieve records associated with an invoice.

---

> Task Actions

- **Create Task** — Create a new task.
- **Update Task** — Update an existing task.
- **Delete Task** — Delete an existing task.

---

> LineItem Actions

- **Create LineItem** — Create a new line item record.

---

> Call Actions

- **Create Call** — Create a new call.

---

> Meeting Actions

- **Create Meeting** — Create a new meeting.

---

> Note Actions

- **Create Note** — Create a new note record.

---

> Generic Actions

- **Get Records by Filter** — Retrieve records matching specified filter criteria.
- **Get Record by ID** — Retrieve a record using its unique identifier.

---

## Support

Need help? Contact our support team at hello@appse.ai
