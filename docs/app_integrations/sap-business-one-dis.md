---
title: "SAP Business One DIS"
description: Step-by-step guide to set up SAP Business One DIS credentials for appse ai integration
slug: /app-integrations/sap-business-one-dis
toc_max_heading_level: 4
---

SAP Business One DIS is an on-premise integration for SAP Business One that connects your local SAP instance to appse ai through a dedicated On-Prem Connector.

---

## Prerequisites

Before you begin SAP Business One DIS setup, confirm the following requirements are in place on the machine where you will install the On-Prem Connector.

### SAP Business One components

The target system must have **SAP Business One Service Manager** installed and configured on the same environment where the On-Prem Connector will be installed.

- Open **SAP Business One Service Manager** and confirm the **SBO DI Server** service is configured and running.

<img src="/img/credentials/sap-business-one-dis/sbo-diserver.jpg" alt="SAP Business One Service Manager showing SBO DI Server service" width="450" height="350"/>

Work with your SAP administrator to confirm Service Manager is installed and operational before proceeding.

#### Optional: SAP Business One Client

Installing **SAP Business One Client** is not mandatory for the integration to work but it can be helpful for visual verifications.

### On-Prem Connector

SAP Business One DIS communicates with appse ai through an **On-Prem Connector** — a locally installed agent that securely bridges your on-premise SAP environment and the appse ai platform. The connector must be created, installed, and showing an **Online** status before you can complete credential setup.

If you have not set up an On-Prem Connector yet, follow the [On-Prem Connector setup guide](/platform/key-concepts/on-premise-agent/on-premise-agent-setup) first.

---

## Setup Credential

Complete the steps below in order. Credential configuration on the Credentials page is the final step and depends on a working On-Prem Connector.

### Step 1: Set up the On-Prem Connector

Create, download, and install an On-Prem Connector on a machine that can reach your SAP Business One environment and the internet.

Follow the full walkthrough in the [On-Prem Connector setup guide](/platform/key-concepts/on-premise-agent/on-premise-agent-setup), including:

- Creating a connector in the appse ai portal
- Downloading and extracting the installation bundle
- Running the installer on the target machine

:::note
Install the On-Prem Connector on a machine that has network access to your SAP Business One server and license server. The selected connector must be able to reach the SAP environment used for this integration.
:::

### Step 2: Verify the connector is online

After installation, return to the **On-Prem Connectors** page in appse ai and confirm the connector status shows **Online**.

- If the status is still **Offline**, verify the connector service is running on the target machine and that outbound internet connectivity is available.
- Do not continue to credential setup until the connector is **Online**.

### Step 3: Configure the SAP DIS credential

Once your On-Prem Connector is online, complete SAP Business One DIS authentication on the **Credentials** page.

#### 3.1 Open the Credentials page

- In the appse ai portal, go to the **Credentials** page.

<img src="/img/credentials/sap-business-one-dis/sap-credential-page.jpg" alt="credentialsPage" width="700"/>

- Select **SAP Business One DIS** from the application list.

#### 3.2 Select an active On-Prem Connector

- Use the **On-Prem Connector** dropdown to choose the connector you installed in Steps 1 and 2.
- The connector must show as active and online.
- Only after selecting an active connector will the remaining configuration fields appear.

<img src="/img/credentials/sap-business-one-dis/sap-select-connector.png" alt="select-connector" width="700"/>

#### 3.3 Provide connection details

Fill in the following required fields once the connector is selected:

| Field              | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| Connection Name    | A name for this SAP Business One DIS connection to be identified in appse ai.     |
| SAP Server Address | The hostname or IP address of the SAP Business One server.                        |
| Company Database   | The SAP Business One company database name (for example, `SBODemoUS`).            |
| Username           | SAP Business One username with access to the target company.                      |
| Password           | Password for the SAP Business One user account.                                   |
| License Server     | The address and port of your SAP license server (for example, `sapserver:30000`). |
| Database Type      | The database platform used by SAP Business One (for example, Microsoft SQL 2019). |

For help locating each value in SAP Business One, see the [How to Find Your Credential Values](#how-to-find-your-credential-values) section below.

#### 3.4 Save the credential

- After all required fields are filled, click **Save** to store the credential.
- If the connection is valid, the credential is saved and displayed with a green tick.
- You can then use the credential in workflows as needed.

## How to Find Your Credential Values

### SAP Server Address

- The hostname or IP of the machine running the SAP Business One server components.
- Navigate to choose company, select your company and find the SAP Server Address in the Current Server section. Example: `sapserver.company.local` or `192.0.2.10`.

<img src="/img/credentials/sap-business-one-dis/serveraddress.png" alt="find server address" width="700"/>

### Company Database

- The company database in your DBMS (for example, `SBODemoUS`).
- Navigate to choose company, select your company and find Company Database in the Database section.

<img src="/img/credentials/sap-business-one-dis/database.png" alt="find company database" width="700"/>

### Username

- This is the SAP Business One user account with access to the target company.

<img src="/img/credentials/sap-business-one-dis/username.png" alt="username" width="700"/>

### Password

- The password for the SAP Business One user account used.

<img src="/img/credentials/sap-business-one-dis/password.png" alt="password" width="700"/>

### License Server

- The address (and port) of the SAP License Server that issue licenses to SAP Business One clients. Confirm this by respective SAP admin.

<img src="/img/credentials/sap-business-one-dis/serveraddress.png" alt="licenseserver" width="700"/>

### Database Type

- The database platform used for SAP Business One (for example, `Microsoft SQL 2019`).

- Supported options (select the one matching your installation):

`Microsoft SQL (Legacy)`,`Microsoft SQL 2012`,`Microsoft SQL 2014`,`Microsoft SQL 2016`,`Microsoft SQL 2017`,`Microsoft SQL 2019`,`SAP HANA`

<img src="/img/credentials/sap-business-one-dis/databasetype.png" alt="SAP Business One database type dropdown showing available SQL options" width="700"/>

### Troubleshoot

If the following error is displayed for SAP DIS:

<img src="/img/credentials/sap-business-one-dis/quickfix.png" alt="SAP DIS SM_OBS_DLL error screenshot" width="700"/>

:::caution
To resolve this error:

- Stop the SAP-related service from Services.
- Delete the folder at `C:\Windows\Temp\SM_OBS_DLL\1000120` (Note: The folder name may vary depending on your environment).
- Start the SAP service again, verify it is running, and try the connection once more.
  :::

## Triggers and Actions

### Triggers

The SAP Business One DIS integration currently supports the following triggers. Use these triggers to start workflows when data changes occur in SAP Business One.

| Trigger                             | Description                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------- |
| **Item inventory updated (OnHand)** | Fetches data records when an item on-hand quantity changes in SAP Business One. |
| **Item price updated**              | Fetches data records when an item price is updated.                             |
| **Items updated**                   | Fetches data records when existing items are updated.                           |
| **New A/R invoices created**        | Fetches data records when new accounts receivable invoices are created.         |
| **New business partners created**   | Fetches data records when new business partners are created.                    |
| **Business partners updated**       | Fetches data records when existing business partners are updated.               |
| **New delivery notes created**      | Fetches data records when new delivery notes are created.                       |
| **New items created**               | Fetches data records when new items are created.                                |
| **Credit notes created**            | Fetches data records when credit notes are created.                             |

### Actions

The SAP Business One DIS integration currently supports the following actions. Use these actions in workflows to create, update, query, and retrieve SAP Business One records via DIS.

| Action                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Create business partner**       | Creates a new business partner record in SAP Business One. Use this to add customers, vendors, or other partner entities.                                                                                                                                                                                                                                                                                                                                          |
| **Update business partner**       | Updates an existing business partner record with the latest details such as contact information, address, or classification.                                                                                                                                                                                                                                                                                                                                       |
| **Create item**                   | Creates a new item in the SAP Business One inventory catalog. Useful for adding products or materials.                                                                                                                                                                                                                                                                                                                                                             |
| **Update item**                   | Updates an existing item record with new pricing, stock levels, descriptions, or other metadata.                                                                                                                                                                                                                                                                                                                                                                   |
| **Create sales quotation**        | Creates a new sales quotation document in SAP Business One.                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Update sales quotation**        | Updates an existing sales quotation with revised line items, pricing, or customer details.                                                                                                                                                                                                                                                                                                                                                                         |
| **Create sales order**            | Creates a new sales order document in SAP Business One.                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Update sales order**            | Updates an existing sales order with revised quantities, pricing, dates, or other order details.                                                                                                                                                                                                                                                                                                                                                                   |
| **Create delivery note**          | Creates a new delivery note document in SAP Business One to record goods shipped to a customer.                                                                                                                                                                                                                                                                                                                                                                    |
| **Update delivery note**          | Updates an existing delivery note with changes such as delivery date, quantities, or shipping details.                                                                                                                                                                                                                                                                                                                                                             |
| **Create returns**                | Creates a returns document in SAP Business One to process customer returns.                                                                                                                                                                                                                                                                                                                                                                                        |
| **Create an A/R credit note**     | Creates a new accounts receivable (A/R) credit note in SAP Business One.                                                                                                                                                                                                                                                                                                                                                                                           |
| **Update an A/R credit note**     | Updates an existing A/R credit note with revised amounts, line items, or reference details.                                                                                                                                                                                                                                                                                                                                                                        |
| **Update an A/R invoice**         | Updates an existing accounts receivable (A/R) invoice with respective details.                                                                                                                                                                                                                                                                                                                                                                                     |
| **Create draft incoming payment** | Creates a draft incoming payment record in SAP Business One for customer payments.                                                                                                                                                                                                                                                                                                                                                                                 |
| **Create a purchase order**       | Creates a new purchase order document in SAP Business One.                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Create an A/P invoice**         | Creates a new accounts payable (A/P) invoice in SAP Business One for vendor billing and payables processing.                                                                                                                                                                                                                                                                                                                                                       |
| **Create equipment card**         | Creates a new equipment card record in SAP Business One for tracking assets or installed equipment.                                                                                                                                                                                                                                                                                                                                                                |
| **Update equipment card**         | Updates an existing equipment card with revised details such as status, location, or maintenance information.                                                                                                                                                                                                                                                                                                                                                      |
| **Execute a select query**        | Runs a custom select query against SAP Business One data and returns the results for use in workflow logic or validation.                                                                                                                                                                                                                                                                                                                                          |
| **Get record by key**             | Retrieves a single SAP Business One record by its primary key for lookup, validation, or conditional workflow decisions. Supported modules: `oBusinessPartners` (Business Partner), `oItems` (Item), `oOrders` (Sales Order), `oInvoices` (Invoice A/R), `oDeliveryNotes` (Delivery Note), `oQuotations` (Quotation), `oCreditNotes` (Credit Note), `oPurchaseOrders` (Purchase Order), `oJournalEntries` (Journal Entry), `oIncomingPayments` (Incoming Payment). |

### Advanced actions

Advanced actions for user-defined objects (UDO) in SAP Business One.

| Action  | Description                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------- |
| **UDO** | Creates, updates, or reads records of a user-defined object (UDO) in SAP Business One. See [UDO](#udo). |

### UDO {#udo}

The **UDO** action is used to create, update, or read records of user-defined objects (UDO) in SAP Business One. The objects already present in your SAP company database are loaded dynamically, and once you select one, all of its fields are loaded so you can configure them and run the action.

Use it, for example, to sync custom data between SAP Business One and other systems.

#### Select the credential and action event

In the node, select your SAP Business One DIS account and choose **UDO** as the **Action event**. Click **Continue**.

<img src="/img/credentials/sap-business-one-dis/udo-select-action.png" alt="SAP Business One DIS select UDO action event" width="700"/>

#### Select the operation

On the **Configure** tab, select an **Operation**: **Create**, **Update**, or **Read**.

<img src="/img/credentials/sap-business-one-dis/udo-operation-select.png" alt="SAP Business One DIS UDO operation dropdown" width="700"/>

| Operation | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| Create    | Creates a new record in the selected user-defined object.                                   |
| Update    | Updates an existing record in the selected user-defined object, identified by its **Code**. |
| Read      | Retrieves records from the selected user-defined object.                                    |

After you pick an operation, select the **User-defined object** to work with. The list shows the objects that already exist in SAP Business One. As soon as you select an object, its fields are loaded dynamically for you to configure.

#### Create

<img src="/img/credentials/sap-business-one-dis/udo-create-operation.png" alt="SAP Business One DIS UDO create operation" width="700"/>

##### Configuration Fields

| Field               | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| Operation           | Select **Create**.                                                                                   |
| User-defined object | Select the object from the list of objects loaded from SAP Business One. (e.g., "APPSECONNECT_SYNC") |

After you select the object, all of its fields are loaded dynamically. Configure the fields you need, then click **Continue** and **Run** the node.

##### Example Configuration

This example creates a record in the `APPSECONNECT_SYNC` user-defined object:

- **Operation** is set to **Create**.
- **User-defined object** is set to `APPSECONNECT_SYNC`. Once it is selected, the object's fields are loaded.
- **Code** is the required key of the new record.
- **Name**, **SAP Object Code**, **SAP Object Type** and **SAP Unique ID** are optional fields loaded for this object. Fill in the ones you need and remove the rest with the delete icon.
- Use **Select to add field** to add any other field of the object.

Click **Continue**, then **Run** the node to create the record.

<img src="/img/credentials/sap-business-one-dis/udo-create-config.png" alt="SAP Business One DIS UDO create example configuration" width="700"/>

#### Update

<img src="/img/credentials/sap-business-one-dis/udo-update-operation.png" alt="SAP Business One DIS UDO update operation" width="700"/>

##### Configuration Fields

| Field               | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| Operation           | Select **Update**.                                                                                   |
| User-defined object | Select the object from the list of objects loaded from SAP Business One. (e.g., "APPSECONNECT_SYNC") |

After you select the object, all of its fields are loaded dynamically. Configure the fields you need, then click **Continue** and **Run** the node.

##### Example Configuration

This example updates a record in the `APPSECONNECT_SYNC` user-defined object:

- **Operation** is set to **Update**.
- **User-defined object** is set to `APPSECONNECT_SYNC`. Once it is selected, the object's fields are loaded.
- **Code** is the required key of the record to update.
- **Name** and **SAP Object Type** are optional fields loaded for this object. Enter new values only for the fields you want to change.
- Use **Select to add field** to add any other field of the object.

Click **Continue**, then **Run** the node to update the record.

<img src="/img/credentials/sap-business-one-dis/udo-update-config.png" alt="SAP Business One DIS UDO update example configuration" width="700"/>

#### Read

<img src="/img/credentials/sap-business-one-dis/udo-read-operation.png" alt="SAP Business One DIS UDO read operation" width="700"/>

##### Configuration Fields

| Field                         | Description                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| Operation                     | Select **Read**.                                                                                     |
| User-defined object           | Select the object from the list of objects loaded from SAP Business One. (e.g., "APPSECONNECT_SYNC") |
| Limit of records              | Enter the maximum number of records to return. (e.g., "1")                                           |
| Include child tables          | Turn on to include the object's child tables in the result.                                          |
| Code (key) (Optional)         | Enter the code (key) to read a specific record.                                                      |
| Filter (SQL WHERE) (Optional) | Enter a SQL WHERE condition to filter the records returned.                                          |

##### Example Configuration

This example reads records from the `APPSECONNECT_SYNC` user-defined object:

- **Operation** is set to **Read**.
- **User-defined object** is set to `APPSECONNECT_SYNC`.
- **Limit of records** is set to `1`, so at most one record is returned.
- **Include child tables** is turned on, so the object's child tables are returned with each record.
- **Code (key)** is optional. Enter it to read one specific record.
- **Filter (SQL WHERE)** is optional. Enter a SQL WHERE condition to return only the records that match.

Click **Continue**, then **Run** the node to read the records.

<img src="/img/credentials/sap-business-one-dis/udo-read-config.png" alt="SAP Business One DIS UDO read example configuration" width="700"/>

**Filter examples**

The **Filter (SQL WHERE)** field accepts a SQL WHERE condition, written without the `WHERE` keyword. Use the field names of the selected object.

Read records created within a date range:

```sql
CreateDate > '2026-05-05' AND CreateDate < '2026-07-07'
```

<img src="/img/credentials/sap-business-one-dis/udo-read-filter-date-range.png" alt="SAP Business One DIS UDO read with a date range filter" width="700"/>

Read records created after a date that have a given status (for example, `O` for open):

```sql
CreateDate > '2026-05-05' AND Status = 'O'
```

<img src="/img/credentials/sap-business-one-dis/udo-read-filter-status.png" alt="SAP Business One DIS UDO read with a status filter" width="700"/>

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)
