---
title: "Instantly"
---


Instantly is a cold email outreach tool that helps you scale your outreach campaigns. With appse ai, you can receive data from Instantly in real-time using Webhooks.

## Setup Connection

To receive data from Instantly, you must use **Webhooks**. This is required because Instantly does not support date-time filters, making it impossible to check for new data using standard polling methods. Instead, you must configure Instantly to push data directly to your appse ai flow via Webhooks.

### Step-by-Step Guide

**1. Get Webhook URL from appse ai**

- In your appse ai flow, add a Webhook Node. [**Learn more about Webhook Node**](/platform/key-concepts/nodes/trigger/webhook).![appse ai Webhook Node](/img/credentials/instantly/appse-webhook-node.png)

- Copy the **Webhook URL** provided in the node configuration.![appse ai Webhook Configuration](/img/credentials/instantly/appse-webhook-config.png)

**2. Navigate to Instantly Integrations**

- Log in to your Instantly account.
- Go to **Settings** and click on the **Integrations** tab.![Instantly Settings Integrations](/img/credentials/instantly/instantly-settings-integrations.png)

**3. Open Webhooks Section**

- Switch to the **Webhooks** tab.
- Click **Add Webhook**.![Instantly Webhooks List](/img/credentials/instantly/instantly-webhooks-list.png)

**4. Configure Webhook Details**

- **Webhook URL**: Paste the URL you copied from the appse ai Webhook Node.![Instantly Add Webhook Modal](/img/credentials/instantly/instantly-add-webhook-modal.png)

- **Event Type**: Select the event you want to trigger the flow (e.g., _Lead is marked as interested_, _Email Sent_, etc.).
- **Campaign**: Select the specific campaign or "All Campaigns".
- Click **Add Webhook**.![Instantly Webhook Configuration](/img/credentials/instantly/instantly-webhook-configuration.png)

**5. Receive Data**

- Once configured, Instantly will automatically send data to your appse ai flow whenever the selected event occurs.

---

## Triggers and Actions

Here is a list of the available actions and triggers for Instantly:

### Actions

- **Patch Campaign** - Update campaign settings by ID.
- **Patch Lead** - Update lead details by ID.

---

## Need Help?

If you need assistance setting up webhooks, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
