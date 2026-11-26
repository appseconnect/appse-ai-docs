---
title: "Dynamics 365 Finance and Operations"
description: "Step-by-step guide to set up Dynamics 365 Finance and Operations credentials for appse ai integration"
slug: /app-integrations/d365fo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Microsoft Dynamics 365 Finance and Operations helps organizations manage finance, supply chain, and core business processes in one integrated system. It provides real-time visibility, stronger control, and scalable operations across business functions. This guide explains how to configure credentials in appse ai using the available authentication options.

## Setup Credential

Follow the steps below to set up your Dynamics 365 Finance and Operations credential. The integration supports three authentication modes — **Production / Sandbox**, **OneBox (Developer VM)**, and **Service to service (client credentials)**.

## Select Authentication

When adding a Dynamics 365 Finance and Operations credential, first choose one of the available authentication types:

- **Production / Sandbox** — for hosted D365 F&O environments on `.operations.dynamics.com`
- **OneBox (Developer VM)** — for local or custom OneBox developer environments
- **Service to service (client credentials)** — for unattended, server-to-server access to a hosted D365 F&O environment using your own Microsoft Entra ID app registration

<img src="/img/credentials/dynamics-365-finance-and-operations/credentialchoice.png" alt="Select Authentication screen showing Production / Sandbox and OneBox (Developer VM) options" width="700"/>

## Configure Credentials

Select your authentication mode below to see the fields required to configure that mode.

<Tabs>
<TabItem value="prod" label="Production / Sandbox" default>

#### Required Fields

Fill in the following details to configure a **Production / Sandbox** credential:

| Field | Description |
| --- | --- |
| **Connection Name** | A name to identify this Dynamics 365 Finance and Operations connection in appse ai. |
| **Environment Name** | If your D365FO login URL is, for example: `https://testenv.operations.dynamics.com/data`, enter `testenv` in this field. The prefix `https://` and suffix `.operations.dynamics.com` are automatically applied by appse ai. |
| **Tenant ID** | Your Microsoft Entra ID tenant ID. Copy it from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → Overview → Tenant ID. |

<img src="/img/credentials/dynamics-365-finance-and-operations/credential.png" alt="Production / Sandbox credential form with Connection Name, Environment Name, and Tenant ID fields" width="700"/>

:::note
The base URL and API access scope are automatically generated using the environment name you provide.
:::

Click **Save & Authorize** to complete the setup.

- ✓ **Success:** The credential is saved and automatically verified by appse ai.  
- ! **Failure:** Verify that the environment name matches your Production or Sandbox URL and try again.

</TabItem>

<TabItem value="onebox" label="OneBox (Developer VM)">

#### Required Fields

Fill in the following details to configure a **OneBox (Developer VM)** credential:

| Field | Description |
| --- | --- |
| **Connection Name** | A name to identify this Dynamics 365 Finance and Operations connection in appse ai. |
| **Tenant ID** | Your Microsoft Entra ID tenant ID. Copy it from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → Overview → Tenant ID. |
| **Base URL** | The full base URL of your D365FO OneBox environment (for example, `https://usnconeboxax1aos.cloud.onebox.dynamics.com`). This can differ if you are not using the default Microsoft-hosted OneBox environment — in that case, use your proxy URL to connect. |

<img src="/img/credentials/dynamics-365-finance-and-operations/credential-onebox.png" alt="OneBox (Developer VM) credential form with Connection Name, Tenant ID, and Base URL fields" width="500"/>

Click **Save & Authorize** to complete the setup.

- ✓ **Success:** The credential is saved and automatically verified by appse ai.  
- ! **Failure:** Verify that the Base URL and Tenant ID are correct and try again.

</TabItem>

<TabItem value="clientcredentials" label="Service to service (client credentials)">

Use this mode when the integration must run unattended — no interactive user sign-in, and no dependency on a named user's session. appse ai obtains the access token directly from Microsoft Entra ID using your own app registration (OAuth 2.0 `client_credentials` grant).

:::info Before you begin

You need a Microsoft Entra ID app registration with a client secret, and that application must be registered inside D365 F&O under **System administration → Setup → Microsoft Entra ID applications**, mapped to a service account user. The permissions available to the integration are the permissions of that mapped user.

:::

#### Required Fields

Fill in the following details to configure a **Service to service (client credentials)** credential:

| Field | Description |
| --- | --- |
| **Connection Name** | A name to identify this Dynamics 365 Finance and Operations connection in appse ai. |
| **Environment name** | The part of your D365 F&O URL before `.operations.dynamics.com`. For `https://testenv.operations.dynamics.com/data`, enter `testenv`. For a sandbox such as `https://contoso-uat.sandbox.operations.dynamics.com`, enter `contoso-uat.sandbox`. The prefix `https://` and suffix `.operations.dynamics.com` are automatically applied by appse ai. |
| **Tenant ID** | Your Microsoft Entra ID tenant ID. Copy it from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → Overview → Tenant ID. |
| **Client ID (application ID)** | The Application (client) ID of your app registration. Copy it from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → App registrations → your app → Application (client) ID. The same Client ID must be registered in D365 F&O under System administration → Setup → Microsoft Entra ID applications. |
| **Client secret** | The secret generated for your app registration. Copy it from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → App registrations → your app → Certificates & secrets → New client secret → copy the **Value**. |

:::note
The base URL, token URL, and API access scope are generated automatically from the environment name and tenant ID you provide. No authorization URL is used — the client credentials grant has no user consent redirect.
:::

Click **Save & Authorize** to complete the setup. No sign-in window appears in this mode; appse ai requests the token directly from Microsoft Entra ID and verifies the credential by calling the D365 F&O legal entities endpoint.

- ✓ **Success:** The credential is saved and automatically verified by appse ai.  
- ! **Failure:** Verify the environment name, Tenant ID, Client ID, and client secret, and confirm that the application is registered in D365 F&O and mapped to an active service account user.

:::warning
Client secrets expire. Note the expiry date set in the Azure Portal and rotate the secret in both Microsoft Entra ID and the appse ai credential before it lapses, otherwise workflows using this credential will begin to fail authentication.
:::

</TabItem>
</Tabs>

## Triggers

The Dynamics 365 Finance and Operations integration currently supports the following triggers. Use these triggers to start workflows when data changes occur in D365 F&O.

| Trigger | Description |
| --- | --- |
| **New contacts created** | Fetches data records when new contacts are created in D365 F&O. |
| **New customers created** | Fetches data records when new customer accounts are created in D365 F&O. |
| **New Orders created** | Fetches data records when new sales orders are created in D365 F&O. |
| **New packing slip created** | Fetches data records when new packing slips are created in D365 F&O. |
| **New products created** | Fetches data records when new products are created in D365 F&O. |
| **New Sales Invoice Created** | Fetches data records when new sales invoices are created in D365 F&O. |
| **Sales invoices created by date range** | Fetches sales invoice records created within a specified date range in D365 F&O. |

## Tools

AI tools expose the same underlying D365 F&O operations as [Actions](#actions) below, but are written for an AI agent to call autonomously within an appse ai agentic workflow — the agent picks the tool and fills its parameters from conversation context, rather than a workflow builder configuring it upfront. These are geared toward customer-service and sales-ops style lookups (order status, invoice/payment checks, availability, routing).

| Tool | Description |
| --- | --- |
| **Get contact person info** | Looks up a D365 F&O contact person (e.g. by email), returning the associated customer/party, name, and phone. |
| **Get customer ledger transactions (AR / payments)** | Retrieves posted customer ledger transactions to confirm whether/when a payment was received, or to list open, overdue sales invoices for an account. |
| **Get internal user directory** | Looks up internal D365 F&O system users, for routing a support ticket to the right department (Finance, Logistics, Sales, Support). |
| **Get item on-hand availability (ATP)** | Retrieves per-warehouse on-hand inventory for an item, used to calculate available-to-promise quantity against a requested order. |
| **Get item preferred vendor and lead time** | Retrieves the preferred vendor and purchasing lead time for a released product — used when recommending a purchase order for a stock shortfall. |
| **Get sales order lines** | Retrieves the line items of a sales order, including ordered vs. remaining quantity and line status. |
| **Get packing slip lines by order** | Retrieves the shipped quantity per item per packing slip for a sales order. |
| **Get packing slip headers by order** | Retrieves packing slip (delivery) headers — one row per shipment — for a sales order. |
| **Get salesperson (Worker) by email** | Checks whether an inbound sender's email address belongs to an internal Worker/Sales Rep in D365 F&O. |
| **Get sites** | Retrieves operational sites within a legal entity, to resolve or validate a site referenced in shipping or warehouse context. |
| **Get special prices (trade agreements)** | Searches customer- and item-specific special pricing (sales price trade agreements). |
| **Get vendor transactions** | Retrieves posted vendor ledger transactions, to confirm whether/when a payment was sent to a vendor or list open purchase invoices. |
| **Search customer invoices** | Searches posted sales invoices by customer account and date range, or by sales order number. |
| **Search customers** | Searches customer accounts by email or company name to resolve caller/customer identity. |
| **Search items (released products)** | General search over released products by item number, name, or description. |
| **Search orders** | Looks up sales order headers by D365 F&O sales order number or the customer's own PO reference — the primary lookup for order-status questions. |
| **Search purchase orders** | Searches purchase orders — including drafts — to check PO status with a vendor. |
| **Search return orders** | Searches customer return orders (RMAs) linked to a prior sales order. |
| **Search sales quotations** | Searches sales quotations for pre-order questions, before a quote becomes a sales order. |
| **Search vendor invoices** | Searches posted vendor invoices for a specific vendor or purchase order. |

## Actions

The Dynamics 365 Finance and Operations integration currently supports the following actions. Use these actions in workflows to create, update, query, and retrieve D365 F&O records.

| Action | Description |
| --- | --- |
| **Create a new customer** | Creates a new customer account in Dynamics 365 Finance and Operations. |
| **Create a new product** | Creates a new released product record in the D365 F&O product catalog. |
| **Create contact** | Creates a new contact person record associated with a customer or other party in D365 F&O and returns its generated Contact Person ID. |
| **Create customer address** | Adds a new address to an existing customer account in D365 F&O. |
| **Create draft purchase order** | Creates a new purchase order in Draft status in D365 F&O, pending approval before confirmation. |
| **Create exchange rate** | Creates a new exchange rate entry for a currency pair, rate type, and effective date in D365 F&O. |
| **Create Ledger Journal Header** | Creates a new general ledger journal header in D365 F&O and returns the Journal Batch Number required to add journal lines. |
| **Create Ledger Journal Lines** | Adds a customer ledger journal line to an existing journal (identified by Journal Batch Number) in D365 F&O. |
| **Create Sales Order Header v3** | Creates a new sales order header using the Sales Order Header v3 API in D365 F&O. |
| **Create Sales Order Lines** | Adds line items to an existing sales order in D365 F&O. |
| **Get all sites** | Retrieves all operational site records from D365 F&O for the selected legal entity. |
| **Get contact by contact person ID** | Retrieves a contact person's full card — name, email, phone, address, and associated customer — by Contact Person ID in D365 F&O. |
| **Get customer by account** | Retrieves a customer record by customer account number in D365 F&O. |
| **Get customer credit limit** | Retrieves the credit limit, credit rating, and credit limit expiry date for a customer in D365 F&O. |
| **Get customer groups** | Retrieves the list of customer groups configured in D365 F&O. |
| **Get customer payment journal headers** | Retrieves customer payment journal header records from D365 F&O. |
| **Get dimension attributes** | Retrieves financial dimension attributes — dimension name, view name, and value mask — configured in D365 F&O. |
| **Get exchange rate** | Retrieves exchange rates filtered by rate type, from-currency, and to-currency in D365 F&O. |
| **Get item sales tax groups** | Retrieves item sales tax group records from D365 F&O. |
| **Get Order by SalesOrderNumber** | Retrieves a sales order — header and lines — by its Sales Order Number in D365 F&O. |
| **Get overdue customer invoices** | Retrieves open, unpaid sales invoices past a specified due-date cutoff for a customer account in D365 F&O. |
| **Get packing slip lines** | Retrieves packing slip line details for a given packing slip ID from D365 F&O. |
| **Get payment methods** | Retrieves the list of customer payment methods configured in D365 F&O. |
| **Get payment terms** | Retrieves the list of payment terms — terms code, number of days, discount percent — configured in D365 F&O. |
| **Get Posted Sales Invoice by Invoice Number** | Retrieves a posted sales invoice by its invoice number in D365 F&O. |
| **Get product by Product Number** | Retrieves a product record by product number in D365 F&O. |
| **Get product categories** | Retrieves product category records — name, hierarchy, and code — from the D365 F&O product catalog. |
| **Get Product Dimensions** | Retrieves released product variant dimension values — size, color, style, and configuration — from D365 F&O. |
| **Get product inventory** | Retrieves on-hand, reserved, available, ordered, and total available quantities for a product in a selected legal entity. |
| **Get product receipt headers** | Retrieves product receipt header records — receipt number, vendor account, receipt date — for a purchase order in D365 F&O. |
| **Get product variants** | Retrieves released product variant details — item number, variant number, and dimension values — for a product master number in D365 F&O. |
| **Get purchase orders by status** | Retrieves purchase order header records filtered by purchase order status in D365 F&O. |
| **Get released product by item number** | Retrieves a released product's pricing, units, item group, model group, and vendor information by item number in D365 F&O. |
| **Get released products** | Retrieves all released product records from D365 F&O for the selected legal entity. |
| **Get return order headers** | Retrieves return order header records from D365 F&O for the selected legal entity. |
| **Get return reason codes** | Retrieves return reason codes configured in D365 F&O. |
| **Get sales discount trade agreements** | Retrieves sales line discount trade agreements — item/account scope, discount percentage, validity dates — from D365 F&O. |
| **Get sales quotation lines by quotation number** | Retrieves sales quotation line items for a given quotation number in D365 F&O. |
| **Get sales quotations by quotation status** | Retrieves sales quotations filtered by quotation status in D365 F&O. |
| **Get sales tax groups** | Retrieves sales tax group records from D365 F&O. |
| **Get sales trade agreements** | Retrieves posted sales price trade agreements — price, currency, quantity breaks — for an item and customer in D365 F&O. |
| **Get SalesHeader Info by Customer Reference** | Retrieves sales order header information by the customer's own order reference in D365 F&O. |
| **Get SalesOrderHeaders by CustomerAccountNumber** | Retrieves sales order headers for a given ordering customer account number in D365 F&O. |
| **Get SalesOrderHeaders by CustomerAccountNumber and SalesOrderStatus** | Retrieves sales order headers for a given customer account number and sales order status in D365 F&O. |
| **Get vendor invoice headers** | Retrieves vendor invoice header records — invoice number, date, due date, review status — from D365 F&O. |
| **Get vendor transactions** | Retrieves vendor transaction records — invoice, transaction date, due date, amount — from D365 F&O. |
| **Get vendors** | Retrieves vendor records from D365 F&O for the selected legal entity. |
| **Get warehouse by site ID** | Retrieves warehouse records for a specified operational site in D365 F&O. |
| **Search records** | Runs an ad hoc OData search across common D365 F&O entities (customer, sales order, invoice, vendor, item, inventory, purchase order, customer transaction, and more) within a selected legal entity, using a free-form `$filter` you supply. |
| **Update a customer** | Updates an existing customer record in D365 F&O, identified by Customer Account and legal entity. Only the fields provided are updated. |
| **Update exchange rate** | Updates the exchange rate value for an existing currency pair, rate type, and effective date in D365 F&O. |

## Troubleshooting

- **Credential verification fails (Production / Sandbox):**  
  Ensure the environment name entered matches the subdomain of your Dynamics 365 Finance and Operations URL (for example, `testenv` for `https://testenv.operations.dynamics.com`).

- **Credential verification fails (OneBox):**  
  Ensure the full Base URL is correct and reachable. If you are not using the default Microsoft-hosted OneBox environment, use your proxy URL instead.

- **Tenant ID errors:**  
  Confirm the Tenant ID is copied from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → Overview → Tenant ID.

- **Credential verification fails (Service to service):**  
  Check each item in turn:
  - The client secret is the secret **Value**, not the Secret ID, and has not expired.
  - The Client ID and Tenant ID belong to the same app registration and tenant.
  - The application is registered in D365 F&O under **System administration → Setup → Microsoft Entra ID applications** and mapped to an active service account user — a valid token with no D365 F&O registration returns an authorization error, not a token error.
  - The environment name resolves to your actual environment, including the `.sandbox` part for sandbox URLs.

- **Token acquired but requests are rejected:**  
  The mapped service account user in D365 F&O does not have the required security roles. Assign the roles needed by the entities your workflow reads or writes.

## Frequently Asked Questions

**Do I need to enter the full Dynamics 365 Finance and Operations URL?**  
It depends on the authentication mode. For **Production / Sandbox** and **Service to service (client credentials)**, only the environment name is required — appse ai automatically constructs the full base URL. For **OneBox (Developer VM)**, enter the complete Base URL of your environment.

**Do I need to configure OAuth details manually?**  
No. OAuth 2.0 authorization is handled internally by appse ai for all authentication modes. For **Production / Sandbox** and **OneBox (Developer VM)**, appse ai also supplies the application registration. For **Service to service (client credentials)**, you supply your own Client ID and client secret; appse ai still builds the token URL and scope for you.

**When should I use Service to service (client credentials) instead of Production / Sandbox?**  
Use it for unattended integrations that must not depend on an interactive user sign-in or a named user's session — for example, scheduled or high-volume background workflows. It also lets you govern access through your own Microsoft Entra ID app registration and a dedicated D365 F&O service account.

**Does the Service to service mode require a user account in D365 F&O?**  
Yes. The Entra ID application must be registered in D365 F&O and mapped to a service account user. The integration inherits that user's security roles, so scope the roles to only what your workflows need.

**What happens when the client secret expires?**  
Authentication stops and workflows using the credential begin to fail. Generate a new secret in the Azure Portal and update the **Client secret** field on the appse ai credential before the existing one expires.

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)