---
title: Splitter Node
---


The Splitter node in Appse AI is a built-in action node that helps you divide array-type data into individual items. It allows each item in a list, such as order lines, products, or records, to be processed separately in the workflow.

This is useful when you receive multiple records from an app or API and want to handle each record independently through subsequent nodes.

## How It Works

When data passes through the Splitter node, it identifies the array field and splits each item from that array into separate outputs. Each split item is then processed individually in the next connected nodes.

## Configuration

- **Fields to Split** - Enter the array field name that contains multiple records you want to split.
- **Include** - Decide whether you want to include additional fields from the parent object along with each split item.
  - **No other fields**: Only the items from the selected field will be passed to the next node.
  - **All other fields**: The split items will also include all other fields from the parent data.

## Steps to Use the Splitter Node

1. **From the selection screen**, choose the Splitter node.![selection screen](/img/platform/key-concepts/nodes/built-in/splitter/selection_screen.png)

2. **In the Fields to Split box**, enter the name of the array field you want to break down.![fields to split](/img/platform/key-concepts/nodes/built-in/splitter/fields_to_split.png)

3. **Under Include**, select whether to keep No other fields or All other fields from the parent object.![include](/img/platform/key-concepts/nodes/built-in/splitter/include.png)

4. **Click Continue** and then **run the node** to split the array into individual items.![continue](/img/platform/key-concepts/nodes/built-in/splitter/continue.png)![run](/img/platform/key-concepts/nodes/built-in/splitter/run.png)

5. **After execution**, each item will be output separately for the next node in the workflow.![output](/img/platform/key-concepts/nodes/built-in/splitter/output.png)

---