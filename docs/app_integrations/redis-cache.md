---
title: "Redis Cache"
slug: /app-integrations/redis-cache/
description: Step-by-step guide to set up Redis Cache credentials and use available actions in workflows within appse ai.
---

Redis Cache is an in-memory key-value data store built for high-speed data access. It allows you to store, retrieve, and expire frequently used values in milliseconds, making it ideal for caching API responses, passing state between workflow runs, and cutting down repeated calls to slow or rate-limited systems.

## Set Up Credential

:::note  
To use Redis Cache, you need a running Redis instance (managed or self-hosted) and its connection details — host, port, and password — reachable from appse ai.  
:::

### Required Fields

You'll be asked to fill in the following details:

| Field | Description |
| ----- | ----------- |
| Connection Name | A name to help you identify this connection |
| Host | The host part of your Redis endpoint — everything before the colon in `host:port`. Copy it from your provider's console; do not include the port or a `redis://` prefix. |
| Port | Your Redis endpoint is shown as `host:port` — the number after the colon is your port. Find it in your provider's console on the database or cache overview page, next to the endpoint or connection string. For self-hosted Redis it is the port setting in `redis.conf`. |
| User | Leave as `default`. |
| Password | Redis password or access key. Required — appse ai will not connect to an unauthenticated instance over a public endpoint. |
| Cache timeout (in seconds). 0 for No TTL | Default lifetime for keys written by this connection. `0` means keys never expire. A **Set value** action can override this per node. Changing this affects every workflow using this credential that does not set its own TTL. |
| Is SSL Enabled | Enable if your instance requires TLS. Managed services normally do; a local or self-hosted Redis normally does not. |

### Step-by-Step Guide

#### 1. Open the Credential Form

Navigate to Credentials, Click **Add Credentials**, and choose **Redis Cache** from the application list.

<img src="/img/credentials/redis-cache/redis-create-new-connection.png" alt="appse ai Redis Cache Select Credential" width="700"/>

#### 2. Enter Connection Name

<img src="/img/credentials/redis-cache/redis-connection-name.png" alt="appse ai Redis Cache Connection Name" width="700"/>

#### 3. Enter Redis Host

<img src="/img/credentials/redis-cache/redis_host.png" alt="redis host" width="700"/>

#### 4. Enter Redis Port

<img src="/img/credentials/redis-cache/redis_port.png" alt="redis port" width="700"/>

#### 5. Enter Redis User

Leave as default

<img src="/img/credentials/redis-cache/redis_user.png" alt="redis user" width="700"/>

#### 6. Enter Redis Password

<img src="/img/credentials/redis-cache/redis_password.png" alt="redis passoword" width="700"/>

#### 7. Enter Cache timeout (in seconds)

<img src="/img/credentials/redis-cache/redis_cache_timeout.png" alt="redis cacahe timeout" width="700"/>

#### 8. Select Is SSL Enabled

<img src="/img/credentials/redis-cache/redis_ssl_enabled.png" alt="redis SSL Enabled" width="700"/>

#### 9. Click Save

Click **Save**. Your Redis Cache credential should now be connected.

<img src="/img/credentials/redis-cache/click_save.png" alt="Click Save" width="700"/>

---

## Triggers and Actions

### Actions

| Action | Description |
| ------ | ----------- |
| **Create or Update key value** | Write a value to a key. Creates the key if it does not exist, or overwrites the value if it does. Applies the credential's default TTL unless the node sets its own. |
| **Get value** | Read the value stored against a single key. Returns empty if the key does not exist or has expired. |
| **Get multiple values** | Read the values for several keys in one call, instead of adding a separate node per key. |
| **Delete key** | Remove a key and its value from the cache immediately, without waiting for its TTL to expire. |

---

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)