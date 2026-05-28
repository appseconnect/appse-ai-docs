---
title: HTML to JSON Node
---


The HTML to JSON node in Appse AI is a built-in node that helps extract structured data from raw HTML content using CSS selectors.  
It converts unstructured or semi-structured HTML into clean JSON output, making it easier for downstream nodes to process and map the data.

This node is commonly used when working with:
- Web page HTML responses
- HTML email bodies

---

## Configuration Options

- **Source** – Specifies the field that contains the raw HTML string.
    - If you are entering the value manually as text, specify the property that exists inside the JSON object that contains HTML value returned by the previous node (for example: html_content).
    - If you are using drag and drop, simply drag the property that exists inside the JSON object that contains HTML value from the previous node's output. It will automatically be added as an expression.
- **Extraction Rules**
  
  **Item #1** – Extraction rule for a single output field
  - **Key** – Defines the output JSON key where the extracted value will be stored.
  - **CSS Selector** – A CSS selector used to find elements within the HTML.
  - **Return Type**
    - **Text** – Extracts visible text content.
    - **HTML** – Extracts inner HTML of the selected element.
    - **Attribute** – Extracts a specific attribute value (e.g., `href`, `src`, `class`, `value`).
      - **Attribute Name** – The name of the attribute to extract.
    - **Value** – Extracts the value of form elements (`input`, `textarea`, `select`).
  - **Optionals**
    - **Return Array** – Returns multiple extracted values as an array.
    - **Skip Selectors** (available only for Text return type) – Ignores specified child elements during text extraction.
- **Optionals**
  - **Trim Values** – Removes leading and trailing whitespace.
  - **Clean Up Text** – Normalizes text by removing extra spaces, line breaks, and HTML entities.

---

## Steps to Use HTML to JSON Node

### 1. Select HTML to JSON Node
Select **HTML to JSON** from the node selection screen.![](/img/platform/key-concepts/nodes/built-in/html_to_json/select_html_to_json.png)

---

### 2. Connect it to a Node Returning HTML
Connect the HTML to JSON node to a node that returns HTML (for example, an HTTP GET request).![connect html source](/img/platform/key-concepts/nodes/built-in/html_to_json/connect_node.png)

---

### 3. Configure the Source Field
Under **Source**, provide the field path that contains the HTML string.![configure source field](/img/platform/key-concepts/nodes/built-in/html_to_json/source_field_configuration.png)

---

### 4. Configure Based on Return Type

Select the appropriate tab below based on your desired **Return Type** (Text, HTML, Attribute, or Value), then follow the configuration steps:

<Tabs>

<TabItem value="Attribute" label="Attribute">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.![](/img/platform/key-concepts/nodes/built-in/html_to_json/attribute_key_field_configuration.png)

**CSS Selector** – Specify the CSS selector for the target HTML element.![](/img/platform/key-concepts/nodes/built-in/html_to_json/attribute_css_selector_field_configuration.png)

**Return Type** – Choose return type as Attribute.![](/img/platform/key-concepts/nodes/built-in/html_to_json/attribute_return_type_field_configuration.png)

**Attribute Name** – Provide the name of the attribute to extract.![](/img/platform/key-concepts/nodes/built-in/html_to_json/attribute_name_field_configuration.png)

**Configure Optional Extraction Rule**

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.![](/img/platform/key-concepts/nodes/built-in/html_to_json/return_array_field_configuration.png)

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_trim_value.png)

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_clean_up_text.png)

---

#### Click Continue to Move to the Next Step![continue button](/img/platform/key-concepts/nodes/built-in/html_to_json/attribute_continue_button.png)

---

#### Click Run to Execute the HTML to JSON Node![run button](/img/platform/key-concepts/nodes/built-in/html_to_json/run_button.png)

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.![after execution](/img/platform/key-concepts/nodes/built-in/html_to_json/attribute_html_to_json_output.png)

</TabItem>

<TabItem value="HTML" label="HTML">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.![](/img/platform/key-concepts/nodes/built-in/html_to_json/html_key_field_configuration.png)

**CSS Selector** – Specify the CSS selector for the target HTML element.![](/img/platform/key-concepts/nodes/built-in/html_to_json/html_css_selector_field_configuration.png)

**Return Type** – Choose return type as HTML.![](/img/platform/key-concepts/nodes/built-in/html_to_json/html_return_type_field_configuration.png)

**Configure Optional Extraction Rule**

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.![](/img/platform/key-concepts/nodes/built-in/html_to_json/return_array_field_configuration.png)

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_trim_value.png)

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_clean_up_text.png)

---

#### Click Continue to Move to the Next Step![continue button](/img/platform/key-concepts/nodes/built-in/html_to_json/html_continue_button.png)

---

#### Click Run to Execute the HTML to JSON Node![run button](/img/platform/key-concepts/nodes/built-in/html_to_json/run_button.png)

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.![after execution](/img/platform/key-concepts/nodes/built-in/html_to_json/html_html_to_json_output.png)

</TabItem>

<TabItem value="Text" label="Text">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.![](/img/platform/key-concepts/nodes/built-in/html_to_json/key_field_configuration.png)

**CSS Selector** – Specify the CSS selector for the target HTML element.![](/img/platform/key-concepts/nodes/built-in/html_to_json/css_selector_field_configuration.png)

**Return Type** – Choose return type as Text.![](/img/platform/key-concepts/nodes/built-in/html_to_json/return_type_field_configuration.png)

**Configure Optional Extraction Rule**

**Skip Selectors** – If required to exclude child elements such as a, span, or img from text extraction.![](/img/platform/key-concepts/nodes/built-in/html_to_json/skip_selector.png)

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.![](/img/platform/key-concepts/nodes/built-in/html_to_json/true_return_array_field_configuration.png)

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_trim_value.png)

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_clean_up_text.png)

---

#### Click Continue to Move to the Next Step![continue button](/img/platform/key-concepts/nodes/built-in/html_to_json/continue_button.png)

---

#### Click Run to Execute the HTML to JSON Node![run button](/img/platform/key-concepts/nodes/built-in/html_to_json/run_button.png)

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.![after execution](/img/platform/key-concepts/nodes/built-in/html_to_json/html_to_json_output.png)

</TabItem>

<TabItem value="Value" label="Value">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.![](/img/platform/key-concepts/nodes/built-in/html_to_json/value_key_field_configuration.png)

**CSS Selector** – Specify the CSS selector for the target HTML element.![](/img/platform/key-concepts/nodes/built-in/html_to_json/value_css_selector_field_configuration.png)

**Return Type** – Choose return type as Value.![](/img/platform/key-concepts/nodes/built-in/html_to_json/value_return_type_field_configuration.png)

**Configure Optional Extraction Rule**

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.![](/img/platform/key-concepts/nodes/built-in/html_to_json/return_array_field_configuration.png)

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_trim_value.png)

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.![](/img/platform/key-concepts/nodes/built-in/html_to_json/optional_field_clean_up_text.png)

---

#### Click Continue to Move to the Next Step![continue button](/img/platform/key-concepts/nodes/built-in/html_to_json/value_continue_button.png)

---

#### Click Run to Execute the HTML to JSON Node![run button](/img/platform/key-concepts/nodes/built-in/html_to_json/run_button.png)

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.![after execution](/img/platform/key-concepts/nodes/built-in/html_to_json/value_html_to_json_output.png)

</TabItem>

</Tabs>