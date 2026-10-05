---
title: "On-Prem Connector Setup"
slug: /platform/key-concepts/on-premise-agent/on-premise-agent-setup
description: Step-by-step guide to create, download, and install an On-Prem Connector in appse ai for securely connecting on-premise systems and applications.
---

## Setup and install an On-Prem Connector

The On-Prem Connector in appse ai enables secure communication between your on-premise systems and the appse ai platform.

With the On-Prem Connector, you can:

- Securely connect on-premise applications.
- Execute workflows against on-premise environments.
- Monitor and manage agent connectivity directly from appse ai.

---

### Prerequisites

Before creating an On-Prem Connector, ensure that:

- You have access to the appse ai portal.
- Your organization has permission to create On-Prem Connectors.
- Required on-prem plugins are available for your organization.
- The target machine has internet connectivity.

---

### System Prerequisites

Confirm each item below on the target machine before running the installer.

#### Operating System

##### Server OS

| Item | Requirement |
|---|---|
| Recommended | Windows Server 2019 or Windows Server 2022 |
| Minimum supported | Windows Server 2016 |
| Not supported | Windows Server 2008 / 2008 R2 / 2012 / 2012 R2 |

##### Client OS

| Item | Requirement |
|---|---|
| Recommended | Windows 11 |
| Minimum supported | Windows 10 (version 1703 or later) |
| Not supported | Windows 7 / 8 / 8.1 / 10 (builds prior to 1703) |

---

#### Hardware

| Item | Requirement |
|---|---|
| CPU | 2 vCPU minimum · 4 vCPU recommended for high-volume sync |
| RAM | 4 GB minimum · 8 GB recommended |
| Disk space | 10 GB free minimum (installer ~55 MB; remaining space for logs, temp cache, and queued transaction data) |

---

#### Software Dependencies

- .NET Framework 4.8 or later.
- TLS 1.2 enabled at the OS level (TLS 1.0 / 1.1 disabled per security baseline).
- Local administrator rights for installation.
- Dedicated service account with the required database and network permissions for runtime operation.
- System clock synchronized via NTP.

---

#### Network

- Outbound HTTPS (port 443) access to the appse ai gateway endpoint (*.appse.ai)
- Firewall allowlist entry for the gateway domain or IP if outbound traffic is restricted.

---

#### Compliance and Security

- Antivirus exclusion recommended for the agent install directory.
- If corporate SSL inspection or proxy is in use, the appse ai gateway certificate must be trusted or excluded from inspection.

---

### Step 1: Navigate to On-Prem Connectors

- Click the three-dot menu from the bottom-left profile section

<img src="/img/platform/key-concepts/on-premise-agent/three-dot-menu.png" alt="Open On-Prem Connectors Menu" width="700"/>

- Select **On-Prem Connectors**

<img src="/img/platform/key-concepts/on-premise-agent/navigate-on-prem-connectors.png" alt="Navigate to On-Prem Connectors" width="700"/>

---

### Step 2: Open the On-premise connectors Creation Screen

The **On-premise connectors** page displays all available connectors for your organization.

If no connectors are available, the empty state screen is displayed.

- Click **Create connector**

<img src="/img/platform/key-concepts/on-premise-agent/create-on-prem-connectors.png" alt="Create On-Prem Connector" width="700"/>

---

### Step 3: Configure the On-premise connector

In the **Create on-premise connector** popup:

- Enter a unique **Connector Name**
- Click **Create**

<img src="/img/platform/key-concepts/on-premise-agent/click-on-create-connector.png" alt="Create On-Prem Connector Popup" width="700"/>

### Required Fields

| Field | Description |
|---|---|
| Connector Name | Unique name used to identify the On-Prem Connector |

### Example

```text
onprem-connector
```

:::info
All available on-prem plugins are automatically included in the downloaded bundle.
:::

---

### Step 4: Complete On-Prem Connector Registration

Once the agent is created successfully:

- The agent is registered in your organization
- A success confirmation popup is displayed

<img src="/img/platform/key-concepts/on-premise-agent/on-prem-success-popup.png" alt="Connector Created Successfully" width="700"/>

- Click **Done** to continue

---

### Step 5: View the Created On-Prem Connector

After closing the popup, the newly created agent is displayed in the On-premise connectors page.

- The agent status is displayed as **Offline**

<img src="/img/platform/key-concepts/on-premise-agent/offline-status.png" alt="Offline Agent Status" width="700"/>

---

### Step 6: Download the On-Prem Connector Bundle

Once the agent is created, the **Download Bundle** option becomes available.

- Click **Download Bundle**

<img src="/img/platform/key-concepts/on-premise-agent/download-bundle.png" alt="Download Agent Bundle" width="700"/>

The bundle status is displayed as **Preparing...**

<img src="/img/platform/key-concepts/on-premise-agent/preparing-state.png" alt="Preparing Agent Bundle" width="700"/>

:::info
Bundle generation may take a few moments depending on plugin configuration and package size.
:::

The ZIP package is downloaded to your local machine.

---

### Step 7: Open the Downloaded Package

- Navigate to the folder where the ZIP package was downloaded

<img src="/img/platform/key-concepts/on-premise-agent/zip-folder.png" alt="Downloaded ZIP Package" width="700"/>

---

### Step 8: Extract the ZIP Package

- Right-click the ZIP package
- Click **Extract All**

<img src="/img/platform/key-concepts/on-premise-agent/extract.png" alt="Extract ZIP Package" width="700"/>

- Choose the extraction location
- Click **Extract**

<img src="/img/platform/key-concepts/on-premise-agent/extract-file-to-destination.png" alt="Select Extraction Location" width="700"/>

---

### Step 9: Open the Installer Directory

- Open the extracted folder
- Navigate to the **installer** directory

<img src="/img/platform/key-concepts/on-premise-agent/installer.png" alt="Installer Directory" width="700"/>

---

### Step 10: Launch the Installer

- Locate the **appseai** application file inside the installer folder
- Right-click the file
- Select **Run as administrator**

<img src="/img/platform/key-concepts/on-premise-agent/run-as-admin.png" alt="Run Installer as Administrator" width="700"/>

#### Windows Security Prompt

After selecting **Run as administrator**, Windows Defender SmartScreen may display a security warning for the installer.

- Click **More info**

<img src="/img/platform/key-concepts/on-premise-agent/windows-protected-your-pc.png" alt="Windows Protected Your PC Warning" width="700"/>

- Click **Run anyway** to continue the installation

<img src="/img/platform/key-concepts/on-premise-agent/run-anyway.png" alt="Run Anyway Option" width="700"/>

:::info
This prompt may appear because the installer is being executed from a locally downloaded package.
:::

#### Windows User Account Control

Windows may display a **User Account Control (UAC)** prompt asking for permission to allow the application to make changes to the device.

- Click **Yes** to continue the installation

:::info
Administrator permission is required to install and configure the On-Prem Agent services on the machine.
:::

---

### Step 11: Accept License Terms

- Enable **I agree to the license terms and conditions**

<img src="/img/platform/key-concepts/on-premise-agent/terms-and-condition.png" alt="Accept License Terms" width="700"/>

- Click **Install**

<img src="/img/platform/key-concepts/on-premise-agent/install.png" alt="Install On-Prem Agent" width="700"/>

---

### Step 12: Wait for Installation

During installation:

- The Windows service is created
- Required plugins are configured automatically
- Installation progress is displayed on the screen

<img src="/img/platform/key-concepts/on-premise-agent/processing.png" alt="Installing On-Prem Agent" width="700"/>

:::info
Installation duration may vary depending on machine configuration and plugin setup.
:::

---

### Step 13: Complete the Installation

After the installation is completed successfully:

- Click **Close** to finish the installation process

<img src="/img/platform/key-concepts/on-premise-agent/installed.png" alt="Installation Completed Successfully" width="700"/>

---

### Step 14: Verify On-Prem Connector Connectivity

- Return to the **On-Prem Connectors** page in appse ai

Once the installed connector successfully connects to the platform, the status automatically changes from **Offline** to **Online**.

<img src="/img/platform/key-concepts/on-premise-agent/agent-online-status.png" alt="Online Agent Status" width="700"/>

:::info
The Online status is reflected automatically after successful agent registration and connectivity.
:::

---

## Supported On-Prem Applications

The On-Prem Agent supports connectivity for the following applications and systems.

| Application | Documentation |
|---|---|
| SAP Business One DIS | [View Documentation](/app-integrations/sap-business-one-dis/) |
| SAP Business One | [View Documentation](/app-integrations/sap-b1/) |

---

## Agent Status Reference

| Status | Description |
|---|---|
| Offline | On-Prem Connector is created but not connected |
| Preparing | Installation bundle is being generated |
| Online | On-Prem Connector is installed and connected successfully |

---

## Additional Information

- Multiple On-Prem Connectors can be created within the same organization
- Each agent has its own downloadable installation bundle
- Plugin dependencies are automatically included in the generated package

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
