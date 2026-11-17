---
title: "Zoho Desk"
slug : /app-integrations/zoho-desk/
---
Zoho Desk is a cloud-based customer service software that helps businesses manage customer support tickets, automate workflows, and deliver exceptional customer experiences. It enables companies to streamline their customer support operations on a unified platform.

### Key Features:
- **Ticket Management**: Track and manage customer support tickets efficiently.
- **Multi-Channel Support**: Handle customer inquiries from email, phone, chat, social media, and more.
- **Automation**: Automate repetitive tasks and workflows to improve efficiency.
- **Knowledge Base**: Create self-service resources for customers.
- **Reports and Analytics**: Gain insights into support team performance and customer satisfaction.
- **Integrations**: Connect seamlessly with other Zoho apps and third-party tools.

## Set Credential

To get started with Zoho Desk, you need to set credentials for it. Click on 'Select a credential' to create a new credential.

<img src="\img\credentials\zoho-desk\create_a_new_credential.png" alt="create a new credential screen" width="700"/>

The credential popup will open with various options

### Regional Configuration

**Select Authorization URL, Token URL and Base URL based on your Zoho Account region:**
<img src="\img\credentials\zoho-desk\authorization_url.png" alt="authorize url" width="700"/>
 
Choose all Authorization URLs from the same Region, to ensure the API works perfectly. 

After you choose these URLs using dropdowns, you can finally go to find the Client ID and Client Secret. 

<img src="\img\credentials\zoho-desk\credential_form.png" alt="credential form" width="700"/>

## How to Get Client ID and Client Secret

### Step 1: Access Zoho Desk
Sign in to your [Zoho Desk account](https://desk.zoho.com/login)

<img src="\img\credentials\zoho-desk\sign_in.png" alt="sign in" width="700"/>

Or create an account if you don't have one:

<img src="\img\credentials\zoho-desk\fill_in_your_details.png" alt="fill in your details" width="700"/>

### Step 2: Complete Setup
After signing in, complete your Zoho Desk setup with your organization details:

### Step 3: Access Developer Console
Click on the [link](https://accounts.zoho.com/signin?servicename=AaaServer&context=&serviceurl=https%3A%2F%2Fapi-console.zoho.com%2F) to access the Zoho Developer's Console:

Alternatively, you can:

1. Go to Zoho Desk's [Documentation](https://desk.zoho.com/DeskAPIDocument)
2. Find OAuth Authentication in the API documentation
3. Click on the Zoho Developer Console link

<img src="\img\credentials\zoho-desk\click_on_zoho_developer_console.png" alt="click on Zoho developer console" width="700"/>

### Step 4: Sign In to Developer Console
Sign in with the same account you used to create a Zoho Desk account:

<img src="\img\credentials\zoho-desk\sign_in_with_your_details.png" alt="sign in with your details" width="700"/>

### Step 5: Get Started
Click on 'Get started':

<img src="\img\credentials\zoho-desk\get_started.png" alt="get started" width="700"/>

### Step 6: Choose Client Type
Select 'Server-based applications':

<img src="\img\credentials\zoho-desk\choose_a_client_type.png" alt="server based applications" width="700"/>

### Step 7: Configure Application
1. Write 'App name' and 'Homepage URL'
2. Copy 'Callback API URL' from appse ai's Zoho Desk credential form
3. Paste it in 'Authorized Redirect URIs'
4. Click 'Create' after filling in all fields

<img src="\img\credentials\zoho-desk\callback_url.png" alt="call back url" width="700"/>
<img src="\img\credentials\zoho-desk\create_new_client.png" alt="create new client" width="700"/>

### Step 8: Copy Credentials
Copy 'Client ID' and 'Client secret':

<img src="\img\credentials\zoho-desk\copy_client_id_secret.png" alt="copy client id and secret" width="700"/>

### Step 9: Paste Credentials
Paste the credentials in appse ai's Zoho Desk credential form:

<img src="\img\credentials\zoho-desk\paste_client_id_secret.png" alt="paste client id and client secret" width="700"/>

### Step 10: Configure Multi-Data Center Settings
Go to settings and make sure to select the checkbox for 'Use the same OAuth credentials for all data centers':

<img src="\img\credentials\zoho-desk\select_all.png" alt="select all" width="700"/>

Click on 'Ok' to use the same credentials for all data centers:

<img src="\img\credentials\zoho-desk\ok_multi_dc.png" alt="ok multi dc" width="700"/>

## Final Authorization

### Step 11: Save and Authorize
Go to appse ai's [credential page](https://workflow.appse.ai/credentials) and select Zoho Desk's credential. Click on 'Save & Authorise' to continue:

<img src="\img\credentials\zoho-desk\save_authorise.png" alt="save & authorize" width="700"/>

### Step 12: Grant Permissions
Select the checkbox to allow your app to access the following data from your Zoho account:

<img src="\img\credentials\zoho-desk\accept_allow.png" alt="accept & allow" width="700"/>

## Completion

If you followed all the steps correctly, your Zoho Desk credential should be successfully saved.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that let you perform application-specific activities within the platform. Here is the full list for Zoho Desk.

### Triggers

- [On New Ticket Created](#on-new-ticket-created)
- [On Ticket Updated](#on-ticket-updated)

### Actions

> Tickets

- [Create a Ticket](#create-a-ticket)
- [Get a Ticket](#get-a-ticket)
- [Update a Ticket](#update-a-ticket)

> Contacts, Accounts and Contracts

- [Update a Contact](#update-a-contact)
- [Update an Account](#update-an-account)
- [Update a Contract](#update-a-contract)

> Agents and Departments

- [Search Agent](#search-agent)
- [Search Department](#search-department)

> Generic (Preview)

- [Get Record by ID](#get-record-by-id)
- [Search Records](#search-records)

---

## Triggers

Zoho Desk triggers poll for tickets on a schedule and start your workflow once for every ticket found.

### On New Ticket Created

Fires when a new ticket is created in Zoho Desk. Tickets are fetched in order of creation time, newest first.

| Field | Required | Description |
| --- | --- | --- |
| Fetch Tickets Since | Yes | Date and time from which to fetch newly created tickets. |

:::tip
Set **Fetch Tickets Since** carefully before activating the workflow. Changing it after activation does not affect the running execution.
:::

### On Ticket Updated

Fires when an existing ticket is updated in Zoho Desk.

| Field | Required | Description |
| --- | --- | --- |
| Fetch Tickets Since | Yes | Date and time from which to fetch modified tickets. |

---

## Actions

### Create a Ticket

Creates a new ticket in Zoho Desk.

| Field | Required | Description |
| --- | --- | --- |
| Select Contact | Yes | Contact reporting the issue. Pick from the dropdown. |
| Ticket Subject | Yes | Short summary of the issue (e.g., `Login Error`). |
| Ticket Description | No | Full details of the issue: error messages, steps to reproduce, context. |
| Assign to Department | Yes | Department that should handle the ticket (e.g., Technical Support, Billing). |
| Ticket Source Channel | No | `Email`, `Phone`, `Web`, `Chat`, `Social` or `API`. Default: `Web`. |
| Priority Level | No | `High`, `Medium` or `Low`. |
| Initial Status | No | `Open`, `On Hold`, `Escalated` or `Closed`. Most tickets start as `Open`. |
| Assign to Agent | No | Agent to assign. Leave empty to use your auto-assignment rules. |
| Contact Email | No | Email address to reach the requester. |
| Contact Phone | No | Phone number to reach the requester. |
| Custom Fields | No | Key-value pairs of custom field API names and values (e.g., `cf_dueindays`). Find API names in Zoho Desk under **Setup > Customization > Layouts and Fields**. |

### Get a Ticket

Retrieves a single ticket by its ID.

| Field | Required | Description |
| --- | --- | --- |
| Ticket ID | Yes | ID of the ticket to retrieve. |
| Additional Information to Include | No | Comma-separated extras: `contacts`, `products`, `assignee`, `departments`, `contract`, `isRead`, `team`, `skills`. Leave empty for basic ticket info. |

### Update a Ticket

Updates an existing ticket. Leave any field empty to keep its current value.

| Field | Required | Description |
| --- | --- | --- |
| Ticket ID | Yes | ID of the ticket to update. |
| Update Subject | No | New subject line. |
| Reassign to Department | No | Move the ticket to another department. |
| Update Description | No | New or updated description. |
| Update Status | No | `Open`, `Closed`, `Escalated` or `On Hold`. Custom statuses from your Zoho Desk setup are also supported. |
| Custom Fields | No | Key-value pairs of custom field API names and values. |

### Update a Contact

Updates an existing contact. Only the fields you fill in are changed.

| Field | Required | Description |
| --- | --- | --- |
| Contact ID | Yes | ID of the contact to update. |
| First name / Last name | No | Contact's name. |
| Email / Secondary email | No | Primary and alternate email addresses. |
| Phone / Mobile | No | Phone and mobile numbers, with country code if applicable. |
| Job title | No | Contact's designation (e.g., IT Manager). |
| Contact type | No | Loaded from the Contact Type picklist in your Zoho Desk portal. |
| Account | No | Account to associate the contact with. |
| Contact owner | No | Agent who owns the contact. |
| Description | No | Notes about the contact. |
| Street / City / State / Country / Zip code | No | Contact's address. |
| Custom fields | No | Key-value pairs of custom field names and values (e.g., `cf_customer_tier`). |

### Update an Account

Updates an existing account. Only the fields you fill in are changed.

| Field | Required | Description |
| --- | --- | --- |
| Account ID | Yes | ID of the account to update. |
| Account name | No | New account name. |
| Email / Phone / Fax | No | Primary contact details of the account. |
| Website | No | Full website URL (e.g., `https://www.example.com`). |
| Industry | No | Loaded from the Industry picklist in your Zoho Desk portal. |
| Account code | No | Internal reference code. |
| Annual revenue | No | Annual revenue as a number (e.g., `250000`). |
| Account owner | No | Agent who owns the account. |
| Description | No | Notes about the account. |
| Street / City / State / Country / Zip code | No | Account's address. |
| Custom fields | No | Key-value pairs of custom field names and values (e.g., `cf_region`). |

### Update a Contract

Updates an existing contract. Only the fields you fill in are changed.

| Field | Required | Description |
| --- | --- | --- |
| Contract ID | Yes | ID of the contract to update. |
| Contract name | No | New contract name. |
| Start date | No | Effective date in `yyyy-MM-dd` format. |
| End date | No | Expiry date in `yyyy-MM-dd` format. Must be later than the start date. |
| Product | No | Product covered by the contract. |
| Contract owner | No | Agent who owns the contract. |
| Notify days before | No | Days before expiry to notify the owner about renewal (e.g., `15`). |
| Description | No | Description or terms of the contract. |
| Custom fields | No | Key-value pairs of custom field names and values (e.g., `cf_renewal_type`). |

### Search Agent

Finds agents by name or email.

| Field | Required | Description |
| --- | --- | --- |
| Search by Name or Email | Yes | Part of an agent's first name, last name or email. |
| Sort Order | No | `asc` (A–Z) or `desc` (Z–A). Default: `asc`. |

### Search Department

Finds departments by name.

| Field | Required | Description |
| --- | --- | --- |
| Search by Department Name | Yes | Part of a department name (e.g., `support`, `billing`). |
| Sort By | No | Field to sort results by. |
| Sort Direction | No | `A` (ascending) or `D` (descending). Default: `A`. |

### Get Record by ID

:::info
This action is in **Preview**.
:::

Retrieves a single record from any supported Zoho Desk module.

| Field | Required | Description |
| --- | --- | --- |
| Module | Yes | `Tickets`, `Contacts`, `Accounts`, `Agents`, `Departments`, `Tasks`, `Calls`, `Events` or `Teams`. |
| Record ID | Yes | ID of the record to retrieve. |

### Search Records

:::info
This action is in **Preview**.
:::

Retrieves records from any supported module using a filter query.

| Field | Required | Description |
| --- | --- | --- |
| Module | Yes | `Tickets`, `Contacts`, `Accounts`, `Tasks`, `Calls` or `Events`. |
| Filter Query | Yes | Filter string. Single: `email=support@zohosupport.com`. Multiple, joined with `&`: `email=support@zohosupport.com&lastName=Lawrence`. |
| Limit | Yes | Maximum records to return. Default: `10`, maximum: `100`. |

---

## Need Help?

If you're unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
