---
title: "Zoho CRM"
---

Zoho CRM is a cloud-based software that helps businesses manage their customer relationships, track sales, and automate various business processes. It enables companies to streamline their sales, marketing, and customer support efforts on a single platform.

---

### Key Features:
- **Lead and Contact Management**: Track and manage leads, contacts, and accounts.
- **Sales Automation**: Automate routine tasks, such as follow-ups and data entry.
- **Customizable Dashboards**: Visualize and analyze your sales pipeline and performance.
- **Reports and Analytics**: Gain insights into sales trends and customer behaviors.
- **Integrations**: Connect seamlessly with other Zoho apps and third-party tools.

## Set Credential

To get started with Zoho CRM, you need to set credentials for it. Click on 'Select a credential' to create a new credential.![create a new credential screen](/img/credentials/zoho-crm/create_a_new_credential.png)

Which leads to a pop-up:![credential form](/img/credentials/zoho-crm/credential_form.png)

### Regional Configuration

**Select Authorization URL based on your Zoho Account region:**![authorize url](/img/credentials/zoho-crm/authorization_url.png)![authorize url dropdown](/img/credentials/zoho-crm/authorization_url_dropdown.png)

**Select Token URL based on your Zoho Account region:**![token url dropdown](/img/credentials/zoho-crm/token_url_dropdown.png)

**Select Base API URL based on your Zoho Account region:**![base api url](/img/credentials/zoho-crm/base_api_url.png)![base api url dropdown](/img/credentials/zoho-crm/base_api_url_format.png)

## How to Get Client ID and Client Secret

### Step 1: Access Zoho CRM
Sign in to your [Zoho CRM account](https://www.zoho.com/crm/login.html)![sign in](/img/credentials/zoho-crm/sign_in.png)

Or create an account if you don't have one:![fill in your details](/img/credentials/zoho-crm/fill_in_your_details.png)

### Step 2: Complete Company Setup
After signing in, write your Company Name with the Employee Count:![fill company details](/img/credentials/zoho-crm/fill_company_details.png)

### Step 3: Access Developer Console
Click on the [link](https://accounts.zoho.com/signin?servicename=AaaServer&context=&serviceurl=https%3A%2F%2Fapi-console.zoho.com%2F) to access the Zoho CRM Developer's Console:

Alternatively, you can:

1. Go to Zoho CRM's [Documentation](https://www.zoho.com/crm/developer/docs/api/v7/register-client.html)

2. Find OAuth Authentication in Step 1: Registering a Client
3. Click on the Zoho Developer Console link![click on Zoho developer console](/img/credentials/zoho-crm/click_on_zoho_developer_console.png)

### Step 4: Sign In to Developer Console
Sign in with the same account you used to create a Zoho CRM account:![sign in with your details](/img/credentials/zoho-crm/sign_in_with_your_details.png)

### Step 5: Get Started
Click on 'Get started':![get started](/img/credentials/zoho-crm/get_started.png)

### Step 6: Choose Client Type
Select 'Server-based applications':![server based applications](/img/credentials/zoho-crm/choose_a_client_type.png)

### Step 7: Configure Application
1. Write 'App name' and 'Homepage URL'
2. Copy 'Callback API URL' from appse.ai's Zoho CRM credential form
3. Paste it in 'Authorized Redirect URIs'
4. Click 'Create' after filling in all fields![call back url](/img/credentials/zoho-crm/callback_url.png)![create new client](/img/credentials/zoho-crm/create_new_client.png)

### Step 8: Copy Credentials
Copy 'Client ID' and 'Client secret':![copy client id and secret](/img/credentials/zoho-crm/copy_client_id_secret.png)

### Step 9: Paste Credentials
Paste the credentials in appse.ai's Zoho CRM credential form:![paste client id and client secret](/img/credentials/zoho-crm/paste_client_id_secret.png)

### Step 10: Configure Multi-Data Center Settings
Go to settings and make sure to select the checkbox for 'Use the same OAuth credentials for all data centers':![select all](/img/credentials/zoho-crm/select_all.png)

Click on 'Ok' to use the same credentials for all data centers:![ok multi dc](/img/credentials/zoho-crm/ok_multi_dc.png)

## Final Authorization

### Step 11: Save and Authorize
Go to appse.ai's [credential page](https://workflow.appse.ai/credentials) and select Zoho CRM's credential. Click on 'Save & Authorise' to continue:![save & authorize](/img/credentials/zoho-crm/save_authorise.png)

### Step 12: Grant Permissions
Select the checkbox to allow your app to access the following data from your Zoho account:![accept & allow](/img/credentials/zoho-crm/accept_allow.png)

## Completion

If you followed all the steps correctly, your Zoho CRM credential should be sucessfully saved.

## Support

Need help? Contact our support team at hello@appse.ai