---
slug: /platform/key-concepts/nodes/built-in/base64-decode
title: Base64 Decode
---

The Base64 Decode node in Appse AI is a built-in node that allows you to convert a Base64 string back into its original format. Many applications and APIs return files in a Base64 string format. This node helps decode that data into a text format that can be used in other nodes in your workflow.

## Configuration

### Type
Select the type of file you want to decode.

### Base64 String
Enter or map the field containing the Base64-encoded string that you want to decode. Make sure the string is properly encoded — invalid or incomplete Base64 data will result in an error.

## Steps to Use the Base64 Decode Node

1. From the selection screen, choose the Base64 Decode node.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\selection-screen.png" alt="selection screen" width="700"/>

2. Connect it with a desired node that provides a Base64 string.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\select-a-desired-node.png" alt="select a desired node" width="700"/>

3. Under Type, select the format of the file you want to decode.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\select-type.png" alt="select type" width="700"/>

4. In the Base64 String field, enter or map the field that contains the Base64 string.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\map-base64-string.png" alt="map base64 string" width="700"/>

5. Click Continue, then Run the node to decode the data.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\continue.png" alt="continue" width="700"/>

6. After execution, the original file content will be available as output for the next node in your workflow.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\output.png" alt="output" width="700"/>

:::note

The Base64 node currently supports only the PDF files that are **NOT** protected by a password.

:::
