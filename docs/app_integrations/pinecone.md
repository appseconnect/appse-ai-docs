---
title: "Pinecone"
---


Pinecone is a vector database designed for building scalable AI applications. It allows you to store, index, and search high-dimensional embeddings efficiently, making it ideal for semantic search and retrieval-augmented generation (RAG) use cases.

## Set Up Credential

::info
To use the Pinecone API, you need a Pinecone account and an active project with an index created.  
::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                      |
| --------------- | ------------------------------------------------ |
| Connection Name | A name to help you identify this connection      |
| API Key         | Your Pinecone API Key                            |

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Pinecone** from the application list.
![appse ai Pinecone Select Credential](/img/credentials/pinecone/pinecone-create-new-connection.png)

<br/>

This opens the Pinecone credential form. Add your **Connection Name**.
![appse ai Pinecone Connection Name](/img/credentials/pinecone/pinecone-connection-name.png)

#### 2. Sign In / Create an Account

Go to [https://www.pinecone.io](https://www.pinecone.io) and sign in or sign up. You can use Google sign-in for faster access.

#### 3. Open the Pinecone Console

Once logged in, open the [Pinecone Console](https://app.pinecone.io).

#### 4. Navigate to API Keys

From the left sidebar, click on **API Keys**.
![appse ai Pinecone API Keys](/img/credentials/pinecone/api-keys.png)
<br/>

#### 5. Create a New API Key

Click **Create API Key**, give it a name, and click **Create**.
![appse ai Pinecone Create API Key](/img/credentials/pinecone/create-api-key.png)
<br/>

#### 6. Copy Your API Key

Copy the API key immediately after creation.

::warning
You will **not be able to see this key again** after closing the dialog. Store it somewhere safe before proceeding.
::
![appse ai Pinecone Copy API Key](/img/credentials/pinecone/copy-api-key.png)
<br/>

#### 7. Create an Index (if not already created)

Go to the **Indexes** section and click **Create Index**. Provide:

- Index name
- Dimension (based on your embedding model)
- Metric (cosine, dotproduct, euclidean)
- Cloud and region (e.g. AWS, us-west-2)

![appse ai Pinecone Create Index](/img/credentials/pinecone/create-index.png)
<br/>

#### 8. Paste into appse ai

Return to the appse ai credential form:

- Copy your **API Key** from Step 6 and paste it into the **API Key** field.
- Go to **Indexes** → click on your index → copy the **Index URL** (e.g. `https://your-index-name-xxxx.svc.pinecone.io`) and paste it into the **Base URL** field.

Click **Save**. Your Pinecone credential should now be connected.
![appse ai Pinecone Add Credentials](/img/credentials/pinecone/add-credentials.png)
<br/>

---

## Triggers and Actions

Here is a list of the available actions for Pinecone:

### Actions

- **Upsert Documents** — Insert or update documents into a Pinecone index. Requires index name, document ID(s), text/content, embeddings, and optional metadata.

- **Search** — Perform semantic search over indexed documents. Requires index name, query text or embedding, top K results, and optional filters.

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)