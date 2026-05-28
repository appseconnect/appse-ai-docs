---
title: JSON Converter Node
---

The JSON Converter node in Appse AI is a built-in node that helps convert plain text or unstructured data into JSON format. This makes it easier for the next nodes in your workflow to read and process the data.

## Configuration options:
- **Conversion Type** – Choose String to JSON to define how the data should be converted.
- **Fields to Convert** – Select the fields that need to be changed into JSON format.

After running the node, it outputs clean, structured JSON data that other connected nodes in your workflow can use.

## Steps to Use JSON Converter

1. **Select JSON Converter** from the selection screen![select json converter](/img/platform/key-concepts/nodes/built-in/json_converter/select_json_converter.png)

2. **Connect it to any desired node**![connect any node](/img/platform/key-concepts/nodes/built-in/json_converter/connect_any_node.png)

3. **Run the workflow** and click on the JSON Converter node
4. **Under Fields to Convert**, drag and drop the field containing the JSON string
*(Note: Only fields with valid JSON strings can be converted.)*![drag and drop field](/img/platform/key-concepts/nodes/built-in/json_converter/drag_and_drop_field.png)

5. **After running the node**, the JSON string will be converted into a structured JSON object view![json string converted into json object](/img/platform/key-concepts/nodes/built-in/json_converter/json_string_converted_into_json_object.png)

---