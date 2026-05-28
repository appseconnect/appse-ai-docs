---
title: Execution History
description: Keep track of all the executions performed by your workflows, check status, data transferred and much more.
---

# Execution History

The **Workflow Execution History** helps users monitor and review past workflow runs. It provides detailed logs and a visual preview of each execution, allowing users to analyze, debug, and understand how their workflows performed at every step.  
This feature offers clear visibility into data flow, execution results, and overall workflow performance.

---

## How to View Execution History

To view the Execution History:

1. Navigate to the **Workflows** section on [appse ai](https://workflow.appse.ai/).
2. In the workflow list, click the **View Execution History** button next to the desired workflow.

<br/>![workflow listing screen](/img/platform/key-concepts/execution-history/workflow-listing.png)
<br/><br/>![execution history screen](/img/platform/key-concepts/execution-history/execution-history.png)

---

## Read-only Preview Mode

In the **Read-only Preview** mode, you’ll see the familiar workflow canvas displayed in a strictly read-only state, showing the exact workflow structure as it existed during that specific execution.

<br/>![node payload preview](/img/platform/key-concepts/execution-history/node-payload-preview.png)

The **Individual Run Preview** opens when a user clicks on a node within the workflow preview window.  
It displays the input and output payloads for each executed node — whether successful or failed — in a read-only format similar to the node configuration window.  
This allows users to review the data processed by each node and identify any errors that occurred during execution.

<br/>![output input node preview](/img/platform/key-concepts/execution-history/output-input-node-preview.png)

---

## List of Executions

The **Workflow Execution Records** section within the Execution History provides a comprehensive, sortable, and filterable list of all past workflow runs.  
It displays key execution details such as time, status, and performance metrics in a clear, structured format, helping users quickly locate specific runs and monitor workflow performance more effectively.

<br/>![execution records listing](/img/platform/key-concepts/execution-history/execution-records-listing.png)

---

## Filter By

The **Filter By** option opens a panel that lets users refine the list of workflow executions by status (e.g., Success or Error) and date range.  
After selecting the desired filters, click **Apply Filters** to update the list or **Clear Filters** to reset all selections.

<br/>![filter by](/img/platform/key-concepts/execution-history/filter-by.png)

---

## Execution Card

Each **Execution Card** represents a single workflow run and displays details such as status, timestamp, Execution ID, and execution time.  
Selecting a card loads a read-only preview of that specific workflow execution.

---

## Card Navigator

The **Card Navigator** enables users to move between different execution cards.  
Click the arrow buttons to browse through records — the workflow preview updates automatically to display the corresponding workflow execution for the selected card.

---