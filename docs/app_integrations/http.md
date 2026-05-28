---
title: "HTTP app"
---





# HTTP App




The HTTP App in appse ai allows you to interact with any external API by making HTTP requests directly from your workflow. It’s used whenever you want to send data to an external service, retrieve data, or perform actions through an API—even if that service doesn’t have a dedicated app integration inside appse ai.


This makes the HTTP App a flexible option for connecting with virtually any system that exposes an API.




## What the HTTP App Does




The HTTP App lets you:




- Send requests (GET, POST, PUT, PATCH) to any API.
- Pass data from previous nodes as part of the request body, headers, or query parameters.
- Receive API responses and use them as input for the next node in the workflow.
- Handle custom or advanced API cases where prebuilt nodes don’t meet your requirements.




## Authentication Types
![authentication types screen](/img/credentials/http/authentication-types.png)


In an HTTP app, authentication types ensure secure and authorized communication between your workflow and external services. Here's a brief explanation of the available authentication types:




- **No Auth**: Select this option if the external service doesn't require any authentication to access its APIs. No credentials are needed.
- **OAuth 2.0**: OAuth 2.0 is used for secure access to external services, especially when handling sensitive data. This allows for token-based authentication where the service requests user consent to grant your app access.
- **API Key**: This authentication type utilizes a static key provided by the service. The key is included in API requests to authenticate the user or service.
- **Bearer Token**: A Bearer token is a form of authentication where you provide a token (usually received through OAuth) to authorize API calls.
- **Basic Auth**: Basic Authentication uses a username and password to authenticate API requests, where the credentials are sent (usually encoded) with each request to verify access.




::note




For any business application, if you want to create an HTTP in appse ai, you need to refer to the official API documentation of that particular application, where you can find all the details related to its supported authentication types and HTTP requests.




::


### OAuth Authentication
#### [Credential Setup Example] for OAuth Authentication

#### Set Credentials
![o auth set credentials screen](/img/credentials/http/oauth2/o-auth-set-credentials.png)




- HubSpot is one example of an application that supports OAuth 2.0 Authentication, providing you with a reference on how to create an OAuth 2.0-supported HTTP app node for your use in appse ai.




- For the Base API URL, you can refer to the Official API documentation of HubSpot.




- I have used HubSpot credentials for authentication purposes. To fill in the required fields (Authorization URL, Token API URL, Callback URL, and Scope), please refer to the HubSpot Credential Documentation for detailed instructions on how to properly configure the OAuth settings.




- Once you have filled in the fields according to the documentation, click **Save & Authorize** to connect your HubSpot account to the workflow securely.




- To proceed, select the action event from the dropdown. This is gonna be one of the HTTP Methods discussed with an example in the next tabs.


#### Request Examples


<Tabs>
  <TabItem value="GET" label="GET">
![o auth get method](/img/credentials/http/oauth2/get/o-auth-get-method.png)




#### Configure




##### URL Path
![o auth get path](/img/credentials/http/oauth2/get/o-auth-get-url-path.png)




The URL Path identifies the endpoint of the application that you are trying to access or modify.




You can find the URL path details in the HubSpot Developer’s documentation. The URL path shown in the examples below is specific to one HubSpot object, i.e., a contact. However, if you want to work with a different object (such as companies, deals, etc.), simply refer to the API documentation link provided.




When using the HTTP app, the final request URL is made up of two parts:




1. **Base URL**  
   This is saved in your credentials.
2. **URL Path**  
   This is entered inside the HTTP node.




Together, they form the complete API request URL.




Here we are using HubSpot as an example for creating an OAuth 2.0 Authentication-supported HTTP App in appse ai.




##### Additional Notes: Possible combinations of Base URL and API path




**Example 1:**




If you have specified your Base URL like:
![o auth get base api url](/img/credentials/http/oauth2/get/o-auth-get-base-api-url.png)




Then, you need to construct the request URL path as shown below, where 'contacts' refers to the API endpoint you want to work with.
![o auth get url path](/img/credentials/http/oauth2/get/o-auth-get-url-path.png)




**Example 2:**




Whichever part of your request URL stays the same and static for all the endpoints for your application, you can include that in the base URL while creating the credential for the HTTP node. Refer to the example below:
![o auth get e.g base api url](/img/credentials/http/oauth2/get/o-auth-get-e.g-base-api-url.png)
![o auth get e.g url path](/img/credentials/http/oauth2/get/o-auth-get-e.g-url-path.png)




This is the final URL structure (just for your reference):  
`https://api.hubapi.com/v3/objects/contacts`




#### Output
![o auth get output](/img/credentials/http/oauth2/get/o-auth-get-output.png)




After completing the configuration, click the **Run** button to execute the HTTP app. This will trigger the app to retrieve the data.




Once the app runs successfully, the output will be displayed in the results section, allowing you to view the response data for further use in your workflow.
  </TabItem>
  <TabItem value="POST" label="POST">
![o auth post method](/img/credentials/http/oauth2/post/o-auth-post-method.png)




#### Configure




##### URL Path




The URL Path identifies the endpoint of the application that you are trying to access or modify.
![o auth post url path](/img/credentials/http/oauth2/post/o-auth-post-url-path.png)




You can find the URL path details in the HubSpot Developer’s documentation. The URL path shown in the examples below is specific to one HubSpot object, i.e., a contact. However, if you want to work with a different object (such as companies, deals, etc.), simply refer to the API documentation link provided.




**Note:** How to construct URL path based on Base URL of the application has been explained above in the GET method section. Please refer to that.




##### Request Body




Request Body refers to the data sent to the server when making a POST request. It contains the information that needs to be processed or stored by the server. The request body allows you to define the data that you want to interact with in external systems via the HTTP POST method.




From the Optional dropdown, select **Request Body** to add it.
![o auth post select request body](/img/credentials/http/oauth2/post/o-auth-post-select-request-body.png)
![o auth post request body](/img/credentials/http/oauth2/post/o-auth-post-request-body.png)




#### Output
![o auth post output](/img/credentials/http/oauth2/post/o-auth-post-output.png)




After completing the configuration and clicking **Run**, the HTTP app will send a POST request to the specified API endpoint with the provided data. Upon success, the response, including details like status and returned data (e.g., created or updated contact info), will be displayed in the Output section, ready for use in the next steps of your workflow.
  </TabItem>
  <TabItem value="PATCH" label="PATCH">
![o auth patch method](/img/credentials/http/oauth2/patch/o-auth-patch-method.png)




#### Configure




##### URL Path




The URL Path identifies the endpoint of the application that you are trying to access or modify.
![o auth patch url path](/img/credentials/http/oauth2/patch/o-auth-patch-url-path.png)




You can find the URL path details in the HubSpot Developer’s documentation. The URL path shown in the examples below is specific to one HubSpot object, i.e., a contact. However, if you want to work with a different object (such as companies, deals, etc.), simply refer to the API documentation link provided.




**Note:** How to construct URL path based on Base URL of the application has been explained above in the GET method section. Please refer to that.




The ID in the URL path corresponds to the specific record you want to target. For example, in the case of `v3/objects/contacts/328766938858`, the number `328766938858` represents the unique ID of a contact. You will need to replace this ID with the ID of the contact (or any other object) you wish to retrieve, update, or interact with.




##### Request Body




The Request Body for a PATCH method refers to the data sent to the server to update an existing resource. It contains the specific fields or properties that you want to modify in the target object. The request body allows you to define the partial data that needs to be updated in external systems via the HTTP PATCH method.
![o auth patch url path](/img/credentials/http/oauth2/patch/o-auth-patch-request-body.png)




#### Output
![o auth patch output](/img/credentials/http/oauth2/patch/o-auth-patch-output.png)




After completing the configuration and clicking **Run**, the HTTP app will send a PATCH request to the specified API endpoint with the provided data. Upon success, the response, including details like the status and updated resource information (e.g., modified contact details), will be displayed in the Output section, ready for use in the next steps of your workflow.
</TabItem>
</Tabs>


---


### Bearer Token


#### [Credential Setup Example] for Bearer Token

#### Set Credentials
![bearer token save credential screen](/img/credentials/http/bearer-token/bearer-token-save-credentials.png)
I have used Magento credentials for authentication purposes.


#### For the Base API URL


- Sign in to your Magento account

![bearer token magento username screen](/img/credentials/http/bearer-token/bearer-token-magento-username.png)
- Go to the Magento admin panel

![bearer token magento dashboard screen](/img/credentials/http/bearer-token/bearer-token-magento-dashboard.png)
- Click on the Stores icon in the left panel

![bearer token select stores screen](/img/credentials/http/bearer-token/bearer-token-select-stores.png)
- Go to configuration

![bearer token configuration screen](/img/credentials/http/bearer-token/bearer-token-configuration.png)
- Go to the general section

![bearer token select general screen](/img/credentials/http/bearer-token/bearer-token-select-general.png)
- Click on ‘Web’, and you will be able to find the base URL

![bearer token base url screen](/img/credentials/http/bearer-token/bearer-token-base-url.png)
- Now, copy and paste it in the HTTP credential form of appse ai


#### To obtain the Bearer token


- Go to the Magento admin panel

![bearer token magento dashboard screen](/img/credentials/http/bearer-token/bearer-token-magento-dashboard-2.png)
- Click on the Systems icon in the left panel

![bearer token system screen](/img/credentials/http/bearer-token/bearer-token-system.png)
- Go to Integrations

![bearer token integrations screen](/img/credentials/http/bearer-token/bearer-token-integrations.png)
- Click on the edit options of one of the Integrations

![bearer token integration edit screen](/img/credentials/http/bearer-token/bearer-token-integration-edit.png)
- Scroll to the bottom screen, you will be able to find ‘Access token’, copy and paste it in the HTTP credential form of appse ai

![bearer token access token screen](/img/credentials/http/bearer-token/bearer-token-access-token.png)
- Once you have filled in the fields as documented, click Save & Authorize to securely connect your Magento account to the workflow.

![bearer token access token screen](/img/credentials/http/bearer-token/bearer-token-access-token.png)


- To proceed, select the action event from the dropdown.


#### Request Examples


<Tabs>
<TabItem value="GET" label="GET">
![GET method](/img/credentials/http/bearer-token/get/get.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one Magento 2 (AdobeCommerce) entity, i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.
![url path](/img/credentials/http/bearer-token/get/url-path.png)


Here, 'products' is the endpoint.


As we are using Magento here, we have specified our example based on the search request of the Magento endpoint, where query parameters are mandatory for fetching the required set of data.


You can select 'Query parameters' from the dropdown of Optionals.
![query parameter option](/img/credentials/http/bearer-token/get/query-parameters.png)


You can refer to this documentation for setting 'Query parameters': https://developer.adobe.com/commerce/webapi/rest/use-rest/performing-searches/


Here is an example of how we have set up 'Query parameters.'
![query parameter item 1](/img/credentials/http/bearer-token/get/query-parameter-item-1.png)
![query parameter item 2](/img/credentials/http/bearer-token/get/query-parameter-item-2.png)
![query parameter item 3](/img/credentials/http/bearer-token/get/query-parameter-item-3.png)
![conditions](/img/credentials/http/bearer-token/get/conditions.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/bearer-token/get/output.png)


  </TabItem>
<TabItem value="POST" label="POST">
![post method](/img/credentials/http/bearer-token/post/post.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one Magento 2 (AdobeCommerce) entity, i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.
![url path](/img/credentials/http/bearer-token/post/url-path.png)


Here, "products" is only an example for the POST request; you can replace it with any object you want to create data for.


You can select 'Request body' from the Optionals dropdown.
![request body option](/img/credentials/http/bearer-token/post/request-body-option.png)


The Request Body is where you provide the complete data that the server should use to fully replace or update an existing resource when using the PUT method.
![request body](/img/credentials/http/bearer-token/post/request-body.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/bearer-token/post/output.png)
  </TabItem>
<TabItem value="PUT" label="PUT">
![put method](/img/credentials/http/bearer-token/put/put.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one Magento 2 (AdobeCommerce) entity, i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.
![url-path](/img/credentials/http/bearer-token/put/url-path.png)


Here '1' is the ID of the product you want to update.


You can select 'Request body' from the Optionals dropdown.
![request body options](/img/credentials/http/bearer-token/put/request-body-options.png)


The Request Body is where you provide the complete data that the server should use to fully replace or update an existing resource when using the PUT method.
![request body](/img/credentials/http/bearer-token/put/request-body.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/bearer-token/put/output.png)
  </TabItem>
  </Tabs>


---


### No Authentication
#### [Credential Setup Example] for No Authentication

#### Set Credentials
![no auth save credential screen](/img/credentials/http/no-auth/no-auth.png)


Enter the base URL for the API you are connecting to.


I have used the Base URL of the BigCommerce credentials for authentication. You can refer to the documentation: https://developer.bigcommerce.com/docs/rest-management/customers-v2#get-all-customers


And for getting 'Store hash', you need to log in to your BigCommerce account, where in the URL bar, you can get the store hash value.
![url bar screen](/img/credentials/http/no-auth/url-bar.png)


Your 'Base URL' will be something like this:


`https://store-\{store-hash\}.mybigcommerce.com/`


#### Request Examples


  <Tabs>
<TabItem value="GET" label="GET">
![Get method](/img/credentials/http/no-auth/get/GET.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to a single BigCommerce entity, i.e., a product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.
![url path](/img/credentials/http/no-auth/get/url-path.png)


You can select 'Query parameters' from the Optionals dropdown.
![query parameters options](/img/credentials/http/no-auth/get/query-parameters-options.png)


You can refer to this documentation for setting 'Query parameters': https://developer.bigcommerce.com/docs/api


Here is an example of how we have set up 'Query parameters.'
![query parameters](/img/credentials/http/no-auth/get/query-parameters.png)
![headers](/img/credentials/http/no-auth/get/headers.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/no-auth/get/output.png)
  </TabItem>
<TabItem value="POST" label="POST">
![POST method](/img/credentials/http/no-auth/post/POST.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one BigCommerce entity i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.
![url path](/img/credentials/http/no-auth/post/url-path.png)


You can select 'headers' and 'request body' from the Optionals dropdown.


You can refer to this documentation for setting 'headers' and 'request body': https://developer.bigcommerce.com/docs/api


Here is an example of how we have set up 'headers' and 'request body'.
![headers](/img/credentials/http/no-auth/post/headers.png)
![request body](/img/credentials/http/no-auth/post/request-body.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/no-auth/post/output.png)
  </TabItem>
<TabItem value="PUT" label="PUT">
![PUT method](/img/credentials/http/no-auth/put/PUT.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one BigCommerce entity i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.
![url path](/img/credentials/http/no-auth/put/url-path.png)


You can select 'headers' and 'request body' from the Optionals dropdown.


You can refer to this documentation for setting 'headers' and 'request body': https://developer.bigcommerce.com/docs/api


Here is an example of how we have set up 'headers' and 'request body.'
![headers](/img/credentials/http/no-auth/put/headers.png)
![request body](/img/credentials/http/no-auth/put/request-body.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/no-auth/put/output.png)
  </TabItem>
  </Tabs>
---


### API Key Authentication
#### [Credential Setup Example] for API Key Authentication

#### Set Credentials
![configure credentials](/img/credentials/http/api-key/configure-credentials.png)


Enter the base URL for the API you are connecting to. I have used the Base URL of the Shopify credentials for authentication.


Follow this pattern for Base API URL & Validation Endpoint:


`https://\{store_name\}.myshopify.com/admin/api/2025-10/\{resource\}.json`


You can refer to the documentation: https://shopify.dev/docs/api/admin-rest


**For Base API URL:**


Only enter `https://\{store_name\}.myshopify.com/admin/api/2025-10/` in the Base API URL, and replace `\{store_name\}` with your Shopify store name, which you can find in your Shopify Admin URL.
![shopify store](/img/credentials/http/api-key/shopify-store.png)


**For Validation Endpoint:**


Only write `\{resource\}.json` in the Validation endpoint and in place of `\{resource\}`, write the resource you want to use, which you can get from the API Documentation.
![validation endpoint](/img/credentials/http/api-key/validation-endpoint.png)


**For API Key name:**
![api key name and key value](/img/credentials/http/api-key/api-key-name-and-value.png)


Enter the header or parameter name where the API expects the key. Refer to the API documentation to know which one to use.
![api key name](/img/credentials/http/api-key/api-key-name.png)

#### Request Examples


  <Tabs>
<TabItem value="GET" label="GET">
![GET method](/img/credentials/http/api-key/get/get.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify.


I've used Shopify as the example for the GET method, but you can use any application of your choice. You can find the URL path details in the official Shopify API documentation. The URL path shown in the example above is specific to one Shopify resource, i.e., customers. However, if you want to work with a different resource (such as products, orders, variants, etc.), simply refer to the Shopify API documentation link provided and copy the appropriate endpoint based on what you want to work with.
![url path](/img/credentials/http/api-key/get/url-path.png)


You can select 'Query parameters' from the Optionals dropdown.
![query parameters option](/img/credentials/http/api-key/get/query-parameters-options.png)


You can refer to this documentation for setting 'Query parameters': https://shopify.dev/docs/storefronts/themes/navigation-search/search#query-parameters


Here is an example of how we have set up 'Query parameters.'
![query parameter item 1](/img/credentials/http/api-key/get/query-parameter-item-1.png)
![query parameter item 2](/img/credentials/http/api-key/get/query-parameter-item-2.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/api-key/get/output.png)
  </TabItem>
<TabItem value="POST" label="POST">
![POST method](/img/credentials/http/api-key/post/post.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify.


I've used Shopify as the example for the POST method, but you can use any application of your choice. You can find the URL path details in the official Shopify API documentation. The URL path shown in the example above is specific to one Shopify resource, i.e., customers. However, if you want to work with a different resource (such as products, orders, variants, etc.), simply refer to the Shopify API documentation link provided and copy the appropriate endpoint based on what you want to work with.
![url path](/img/credentials/http/api-key/post/url-path.png)


You can select 'Request body' from the dropdown of Optionals.
![query parameters options](/img/credentials/http/api-key/post/query-parameters-options.png)


Here is an example of how we have set up 'Request Body.'
![request body](/img/credentials/http/api-key/post/request-body.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/api-key/post/output.png)
  </TabItem>
<TabItem value="PUT" label="PUT">
![PUT method](/img/credentials/http/api-key/put/put.png)


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify.


I've used Shopify as the example for the PUT method, but you can use any application of your choice. You can find the URL path details in the official Shopify API documentation. The URL path shown in the example above is specific to one Shopify resource, i.e., customers. However, if you want to work with a different resource (such as products, orders, variants, etc.), simply refer to the Shopify API documentation link provided and copy the appropriate endpoint based on what you want to work with.
![url path](/img/credentials/http/api-key/put/url-path.png)


You can select 'Request body' from the Optionals dropdown.


Here is an example of how we have set up 'Request body.'
![request body](/img/credentials/http/api-key/put/request-body.png)


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/api-key/put/output.png)
  </TabItem>
  </Tabs>
---


### Basic Authentication
#### [Credential Setup Example] for Basic Authentication

#### Set Credentials
![base url in platform](/img/credentials/http/basic-auth/base-url-in-platform.png)


Enter the base URL for the API you are connecting to. I have used the Base URL of the ShipStation credentials for authentication. You can refer to the documentation: https://www.shipstation.com/docs/api/customers/list/
![where to get base url](/img/credentials/http/basic-auth/where-to-get-base-url.png)


Provide a valid API endpoint that can be used to test and validate the connection (e.g., customers).
![validation endpoint](/img/credentials/http/basic-auth/validation-endpoint.png)


For the 'Basic Authentication', I'm using the credentials for an application called 'ShipStation'.
![username and password platform](/img/credentials/http/basic-auth/username-and-password-platform.png)


**To get 'Username' and 'Password':**


1. Log in to your ShipStation account.
2. Go to Settings → Account → API Settings (sometimes under "My Profile → Account → API Settings").
3. Select the API version (V1 or V2) as needed.
4. If you don't have keys yet, click "Generate API Key".
5. Immediately copy both the API Key and API Secret, as they won't be visible again after you navigate away (for security reasons).
6. When making API calls, pass the API Key as the HTTP Basic Auth username and API Secret as the password.

![username and password shipstation](/img/credentials/http/basic-auth/username-and-password-shipstation.png)

  <Tabs>
<TabItem value="GET" label="GET">
![get method](/img/credentials/http/basic-auth/get/get-method.png)


**1. URL Path**
![url path](/img/credentials/http/basic-auth/get/url-path.png)


The URL Path defines the exact API endpoint that you want to access in ShipStation. Here, we are using 'customers.' This will request a list of customers from ShipStation. If you want to work with a different resource (e.g., orders, shipments), simply refer to the official ShipStation API documentation and replace the URL path with the required endpoint.


ShipStation API Docs: https://www.shipstation.com/docs/api/


**2. Content Type**
![content type](/img/credentials/http/basic-auth/get/content-type.png)


This defines the format of the request and response body. The default value is application/json, so you can keep it as is unless the API specifically requires another format.


**3. Optionals → Query Parameters**
![optionals query parameters item one](/img/credentials/http/basic-auth/get/optionals-query-parameters-item-one.png)
![optionals query parameters item two](/img/credentials/http/basic-auth/get/optionals-query-parameters-item-two.png)


Query parameters are used to filter, paginate, or limit the data you retrieve. In this example, we are fetching only the first 5 customers from the first page. These parameters are optional and can be modified as needed.


For example:
- Increase 'pageSize' to 50 to fetch more customer records
- Change the 'page' to navigate through pages


**Tip:** Query parameters vary by endpoint — refer to the ShipStation API docs when using other endpoints.


After configuring it properly, you can continue to get the output.
![output](/img/credentials/http/basic-auth/get/output.png)


Once everything is configured correctly, run the request to fetch data from ShipStation. If the credentials and endpoint are correct, you should receive a successful JSON response containing customer records.


  </TabItem>
<TabItem value="POST" label="POST">


This method is used to create or update data in the target application. In this example, we are creating an order in ShipStation.
![post method](/img/credentials/http/basic-auth/post/post-method.png)


**1. URL Path**


Enter the API endpoint for the operation you want to perform. Here we are using:
![url path](/img/credentials/http/basic-auth/post/url-path.png)


This endpoint is responsible for creating new orders in ShipStation. If you want to perform a different operation (e.g., update shipment, purchase label), refer to the official API documentation and use the appropriate path.


ShipStation API Docs: https://www.shipstation.com/docs/api/


**2. Content Type**
![content type](/img/credentials/http/basic-auth/post/content-type.png)


ShipStation requires the request body to be sent in JSON format. The default value is application/json, so you can keep it as is unless the API specifically requires another format.


**3. Request Body**
![content type](/img/credentials/http/basic-auth/post/content-type.png)


The Request Body contains the data that will be sent to ShipStation for creating the order. It must follow the JSON structure defined in ShipStation API documentation.


In this example, values are mapped dynamically from the previous application's output using placeholders:


You can customize the structure based on the API requirements.


After configuring it properly, you can continue to get the output.


Once everything is configured correctly, click Run to execute the request. If your API credentials and endpoint are correct, you will receive a successful JSON response from ShipStation — for example, customer or order details based on the endpoint used.
  </TabItem>
<TabItem value="PUT" label="PUT">
![put method](/img/credentials/http/basic-auth/put/put-method.png)


A PUT request is used when you want to update existing data. In this example, we are updating an existing product in ShipStation.


##### URL Path


Enter the specific endpoint for the resource you want to update.
![url path](/img/credentials/http/basic-auth/put/url-path.png)


The number (20870209) represents the Product ID in ShipStation, and must be replaced dynamically when updating different products. If you need to update another type of record (e.g., shipments, orders), refer to the ShipStation API documentation and use the appropriate endpoint.


ShipStation API Docs: https://www.shipstation.com/docs/api/


##### Content Type
![content type](/img/credentials/http/basic-auth/put/content-type.png)


ShipStation requires request body data to be formatted as JSON. The default value is already application/json, so you can keep it unchanged.


##### Request Body


This section contains the updated product data. Mapped dynamic fields can be used based on the incoming payload.
![optionals request body](/img/credentials/http/basic-auth/put/optionals-request-body.png)


Modify fields based on what you want to update. Ensure required fields for the specific endpoint are included.


After configuring it properly, you can continue to get the output. After correctly configuring and running the PUT request, ShipStation will respond with a success message indicating the update was applied.
![output](/img/credentials/http/basic-auth/put/output.png)
  </TabItem>
  </Tabs>