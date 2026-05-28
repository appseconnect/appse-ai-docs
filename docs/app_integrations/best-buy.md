---
title: Best Buy
description: Step-by-step guide to set up Best Buy credentials for Appse.ai integration
---


## Introduction

Best Buy is a leading consumer electronics retailer offering a comprehensive API platform for developers and businesses to integrate Best Buy's product catalog, pricing, and inventory data into their applications. By integrating Best Buy with Appse.ai, you can automate product searches, monitor prices, check inventory availability, and build powerful e-commerce workflows that leverage Best Buy's extensive product database.

---

## Key Features

- **Product Search**: Access Best Buy's comprehensive product catalog with advanced search capabilities.
- **Real-time Pricing**: Retrieve up-to-date pricing information for products.
- **Inventory Availability**: Check product availability across Best Buy stores.
- **Product Details**: Access detailed product specifications, images, and descriptions.
- **Store Locator**: Find Best Buy store locations and information.
- **Reviews & Ratings**: Access customer reviews and product ratings.

---

## Setup Credential

Follow the steps below to configure Best Buy credentials in Appse.ai.

### Required Fields

The following fields are required to configure Best Buy credentials in Appse.ai.

| Field           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Connection Name | A name to help you identify this Best Buy connection within Appse.ai       |
| API Key        | Your Best Buy API key used to authenticate API requests                     |

::info
All required fields must be filled correctly to successfully authorize Best Buy with Appse.ai.
::

## Step-by-Step Guide

To get started with Best Buy, click **Select a Credential** and choose **Best Buy** from the application list.

This opens the Best Buy credential form where you'll configure your connection.

---

### Step 1: Add Connection Name

- Enter a meaningful **Connection Name**.
- This is for identification purposes only inside Appse.ai and does not affect your Best Buy account.

---

### Step 2: Register for Best Buy Developer API

- Open a new tab and navigate to the [Best Buy Developer Portal](https://developer.bestbuy.com/).
- If you don't have an account, you'll need to create one.

::note
You must have a Best Buy Developer account in order to obtain an API key for integration with Appse.ai.
::

---

### Step 3: Access Your Personal Settings

Once logged in to the Best Buy Developer Portal, navigate to your personal settings or account dashboard.
![Best Buy personal settings](/img/credentials/best-buy/best_buy_personal_settings.png)

In your account settings, you'll find your API key information.

---

### Step 4: Locate Your API Key

In the personal settings section, you'll find your **API Key** displayed.
![Best Buy API key](/img/credentials/best-buy/credential_api_key.png)

- Copy your **API Key** from the developer portal.

::warning
Keep your API key secure and never share it publicly. Anyone with your API key can make requests on your behalf.
::

---

### Step 5: Add Credentials to Appse.ai

Return to the Appse ai credential form and:

1. Enter your **Connection Name** (e.g., "Best Buy Production")
2. Add your **Base URL** (e.g., https://your-domain.mirakl.net/)
2. Paste your **API Key** in the API Key field
3. Click the **Save** button

![Best Buy credential configuration](/img/credentials/best-buy/best_buy_credential_configuration.png)
---

## Testing Your Connection

After saving your credentials, Appse.ai will verify the connection to Best Buy's API. If successful, you'll see a confirmation message and can start using Best Buy nodes in your workflows.

---

## Using Best Buy in Workflows

Once your credential is configured, you can use Best Buy nodes in your Appse.ai workflows to:

- Search for products by keyword, category, or SKU
- Retrieve detailed product information
- Check product availability and pricing
- Monitor inventory levels across stores
- Build price comparison tools
- Create product recommendation systems

---

## API Rate Limits

Best Buy API has rate limits to ensure fair usage:

- **Rate Limit**: 5 requests per second per API key
- **Daily Limit**: 50,000 requests per day

::tip
Plan your workflows to stay within these limits. Consider implementing caching strategies for frequently accessed data.
::

---

## Troubleshooting

### Common Issues

**Invalid API Key**
- Verify that you've copied the entire API key without extra spaces
- Ensure your API key is still active in the Best Buy Developer Portal

**Rate Limit Exceeded**
- Reduce the frequency of API calls in your workflow
- Implement delays between requests
- Consider caching results for repeated queries

**No Results Returned**
- Check your search parameters
- Verify the product SKU or search terms are correct
- Ensure the product is available in Best Buy's catalog

---

## Additional Resources

- [Best Buy API Documentation](https://developer.bestbuy.com/documentation)
- [Best Buy API Terms of Use](https://developer.bestbuy.com/terms-of-use)
- [Appse.ai Workflow Documentation](../platform/getting_started/create-flow-overview.md)

---

## Support

If you encounter any issues setting up your Best Buy credential or using Best Buy nodes in Appse.ai workflows, please contact our support team or refer to our community forums for assistance.
