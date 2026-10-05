---
title: "Zendesk"
slug: /app-integrations/zendesk/
description: Learn how to setup and use Zendesk on appse ai.
---

Zendesk is a cloud-based customer service and support ticketing platform that helps businesses manage customer conversations across email, chat, and social channels. With appse ai, you can seamlessly connect your Zendesk account to automate ticket management, route conversations, and power AI agents that read and respond to customer requests.

---

## Setup Credential

Zendesk uses **OAuth 2.0** authentication. Follow the steps below to create an OAuth client in Zendesk and connect your account.

### Required Fields

You'll be asked to fill in the following details:

| Field      | Description                                                                                          |
|------------|--------------------------------------------------------------------------------------------------------|
| Connection Name | A name to identify the connection                                                                 |
| Subdomain  | The subdomain portion of your Zendesk account URL (e.g. if your URL is `https://yourcompany.zendesk.com`, enter `yourcompany`) |
| Client ID  | The **Identifier** you set when creating the OAuth client in Zendesk Admin Center |
| Client Secret | The secret generated when the OAuth client is created — shown only once |

### Step-by-Step Guide

#### 1. Open Admin Center

Log in to your Zendesk account and switch to **Admin Center**.

<img src="/img/credentials/zendesk/credential-admin.png" alt="Zendesk Admin Center navigation" width="700"/>

#### 2. Create a new OAuth client

Go to **Apps and integrations** > **APIs** > **OAuth clients**, then click **Add OAuth client**.

<img src="/img/credentials/zendesk/oauth-client-create.png" alt="Zendesk OAuth clients page with Add OAuth client button" width="700"/>

#### 3. Name the client

Give it a **Name**, **Description**, and **Company** (these are shown to users when they authorize the app — any recognizable values work).

<img src="/img/credentials/zendesk/oauth-client-details1.png" alt="Zendesk Add OAuth client form with Name, Description, and Company fields" width="500"/>

#### 4. Set Client Kind and Redirect URL

Scroll down and configure:

- **Identifier** — a unique name for the client (this becomes your **Client ID**).
- **Client kind** — set this to **Confidential**, not Public. appse ai stores the client secret securely on the backend, and Zendesk only allows a client secret to be issued to a Confidential client — a Public client cannot use one.
- **Redirect URLs** — add exactly:
  ```
  https://embedded-ui.appse.ai/oauth-callback.html
  ```

<img src="/img/credentials/zendesk/oauth-client-details2.png" alt="Zendesk OAuth client form showing Client kind set to Confidential and Redirect URLs field" width="500"/>

:::caution
**Client kind must be Confidential.** If it's left as Public, Zendesk won't issue a client secret and the credential in appse ai will fail to authorize. The Redirect URL must also match `https://embedded-ui.appse.ai/oauth-callback.html` exactly — this is the address appse ai uses to receive the authorization result after you approve access on Zendesk.
:::

#### 5. Set scopes and save

Under **Scopes**, add `read` and `write` (this covers every action, trigger, and tool this integration ships). Click **Save**, and immediately copy the **Secret** shown — Zendesk displays it only once.

<img src="/img/credentials/zendesk/oauth-client-details3.png" alt="Zendesk OAuth client form showing Scopes, generated Secret, and Save button" width="500"/>

:::caution
The client secret is displayed only once. If you lose it, you'll need to regenerate it from the client's Edit page.
:::

#### 6. Configure the Credential in appse ai

1. Click **Select a Credential** and choose **Zendesk**, then add a **Connection Name**.
2. Enter your **Subdomain** — the part of your Zendesk URL before `.zendesk.com`.
3. Paste the **Identifier** you set in Step 4 into **Client ID**.
4. Paste the **Secret** you copied in Step 5 into **Client Secret**.
5. Click **Save & Authorize** — you'll be redirected to Zendesk to approve access, then returned to appse ai automatically.

<img src="/img/credentials/zendesk/credential-1.png" alt="appse ai Zendesk credential form with Subdomain, Client ID, and Client Secret fields" width="700"/>

:::warning

Keep your Client Secret secure. Anyone with the Client ID and Client Secret can request access tokens for your Zendesk account.

:::

### Save Your Credential

Once you've filled in the necessary fields and clicked **Save & Authorize**, appse ai verifies the connection.

- If successful, your Zendesk credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, recheck your Subdomain, Client ID, and Client Secret, confirm the OAuth client's **Client kind** is set to **Confidential**, and confirm the **Redirect URL** matches `https://embedded-ui.appse.ai/oauth-callback.html` exactly — or contact support.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the triggers and actions available for Zendesk:

### Triggers

- **New Ticket Created** — Fires when a new support ticket is created in Zendesk.
- **Ticket Updated** — Fires when an existing ticket is updated (status, priority, assignee, comments, or any other field change).
- **New Ticket Comment / Activity** — Fires on new ticket activity (comments, status changes, and field updates) across all tickets. Ideal for driving an AI agent that reads new customer replies and posts an automated response back to the ticket. Each event's `child_events` array may contain a `Comment` entry — filter on `event_type == "Comment"` (and `public == true` for customer-visible replies only) downstream if you want to react to replies specifically.
- **New User Created** — Fires when a new user (end-user, agent, or admin) is created in Zendesk.

### Actions

> Ticket Actions

- **Get List of Tickets** — Retrieve a page of tickets, with sorting and cursor pagination.
- **Get a Ticket** — Retrieve a single ticket by its ID.
- **Create a Ticket** — Create a new support ticket.
- **Update a Ticket** — Update an existing ticket's fields, such as status, priority, assignee, or tags.
- **Delete a Ticket** — Permanently delete a ticket.

> Comment Actions

- **Add Comment / Reply to Ticket** — Post a public reply or a private internal note on an existing ticket. Use this to publish an AI agent's response to the requester or to notify the support team.
- **Get Ticket Comments** — Retrieve the full conversation history (comments and notes) for a ticket. Useful for giving an AI agent context before it drafts a reply.

> User Actions

- **Get List of Users / Agents** — Retrieve a page of users, optionally filtered by role (end-user, agent, or admin).
- **Create a User** — Create a new user (end-user, agent, or admin).
- **Update a User** — Update an existing user's fields.

> Organization Actions

- **Get List of Organizations** — Retrieve a page of organizations.
- **Create an Organization** — Create a new organization to group related users together.

> Group Actions

- **Get List of Groups** — Retrieve a page of support groups, used to route and assign tickets.

> Generic Actions

- **Get Record by ID** — Retrieve a single record from any Zendesk module (ticket, user, organization, or group) using its unique ID.
- **Search Records** — Search tickets, users, organizations, or groups using Zendesk's advanced search syntax.

---

## Need Help?

If you're unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)