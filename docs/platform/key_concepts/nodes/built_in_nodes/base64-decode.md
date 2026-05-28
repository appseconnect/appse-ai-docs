---
title: Base64 Decode
description: Step-by-step guide to use the Base64 Decode node to convert Base64 strings into their original format in appse ai.
---


The Base64 Decode node in appse ai is a built-in node that allows you to convert a Base64 string back into its original format. Many applications and APIs return files in a Base64 string format. This node helps decode that data into a text format that can be used in other nodes in your workflow.

## How to Add the Node

1. From the selection screen, choose the Base64 Decode node.

![Base64 Decode node selection screen](/img/platform/key-concepts/nodes/built-in/base64-decode/SelectBase64Node.jpg)

2. Connect it with a node that provides a Base64 string output.

![Connecting Base64 Decode node to source node](/img/platform/key-concepts/nodes/built-in/base64-decode/SelectdesireAPP.jpg)

## Configuration

### Steps to Use Different File Types in the Base64 Node

Select the type of file you want to decode.

<Tabs>
<TabItem value="pdf" label="PDF" default>

#### Steps to Use the Base64 Node for PDF Files

3. Under **Type**, select the **PDF** option from the dropdown menu.

![Base64 Decode file type selection dropdown](/img/platform/key-concepts/nodes/built-in/base64-decode/select-type.jpg)

4. In the Base64 String field, enter or map the Base64-encoded string of the PDF you want to decode.

![Base64 string input field for PDF decoding](/img/platform/key-concepts/nodes/built-in/base64-decode/Continue1.png)

5. Click **Continue**, then run the node to decode the data.

6. After execution, the decoded PDF will be available as output for the next node in the workflow.
```json
[
	{
		"output": {
			"page_1": {
				"content": "Purchase Order Printing\nPage: 1\nPurchase Order\nP.O. Number: 1000 Order Date: 2/14/2026\nAccount #: A-1000\nORDERED BY: Fire Tailed\n421 Hobbs Street, Tampa, FL 33619-7880\nPhone: (813) 684-1782 --- Fax: (813) 654-4272\nVendor: Annin & Company, PO Box 847660, Boston, MA 02284-7660\nShip To: Fire Tailed, 421 Hobbs Street, Tampa, FL 33619\nOrdered Unit Cost Amount Item Name\n2.00 100.0 200.0 carbomer\nNet Order: 400.00\nSales Tax: 0.00\nFreight: 0.00\nOrder Total: 400.00\nPlease Ship 02/15/26 Destination\nOrder Balance: 400.00\nLess Prepaid: 0.00",
				"text": "Purchase Order Printing\nPage: 1\nPurchase Order\nP.O. Number: 1000 Order Date: 2/14/2026\nAccount #: A-1000\nORDERED BY: Fire Tailed\n421 Hobbs Street, Tampa, FL 33619-7880\nPhone: (813) 684-1782 --- Fax: (813) 654-4272\nVendor: Annin & Company, PO Box 847660, Boston, MA 02284-7660\nShip To: Fire Tailed, 421 Hobbs Street, Tampa, FL 33619\nOrdered Unit Cost Amount Item Name\n2.00 100.0 200.0 carbomer\nNet Order: 400.00\nSales Tax: 0.00\nFreight: 0.00\nOrder Total: 400.00\nPlease Ship 02/15/26 Destination\nOrder Balance: 400.00\nLess Prepaid: 0.00",
				"images_text": []
			}
		},
		"processing_time": 0.12,
		"pages_processed": 1
	}
]
```

::note

The Base64 node currently supports only the PDF files that are **NOT** protected by a password.

::

#### Example

#### Input

The following is a sample PDF that will be used as input for this example.
![Sample PDF document for Base64 encoding example](/img/platform/key-concepts/nodes/built-in/base64-decode/Input-of-PDF.jpg)

#### Output

The output displays the decoded PDF text/content in JSON format, which you can map to the next node.
![Base64 decoded PDF output in JSON format](/img/platform/key-concepts/nodes/built-in/base64-decode/PDF-Output.jpg)

</TabItem>
<TabItem value="image" label="Image">

#### Steps to Use the Base64 Node for Image Files

3.  Under **Type**, select the **Image** option from the dropdown menu.

![Base64 Decode Image type selection from dropdown](/img/platform/key-concepts/nodes/built-in/base64-decode/Base64N-CNTNUE5.jpg)

4. In the Base64 String field, enter or map the Base64-encoded string of the image you want to decode.

![Base64 Decode node configuration with encoded image string](/img/platform/key-concepts/nodes/built-in/base64-decode/ExampleConfig.jpg)

5. Click **Continue**, then run the node to decode the data.

6. After execution, the decoded image will be available as output for the next node in the workflow.
```json
[
	{
		"output": {
			"extracted_text": "Contrast\nDesign Principle\nContrast is an important element\nof graphic design because it\nallows different elements to\nstand out and grab attention.\nebaqdesign"
		},
		"processing_time": 5.37,
		"pages_processed": 1
	}
]
```

::note
The Base64 node supports the following image file types: **PNG, JPG, JPEG, GIF, BMP, WEBP**.

For accurate data extraction, the image should be of **high quality and clarity**.

::

#### Example

#### Input

The following is a sample PNG image that will be used as input for this example.
![Sample PNG image for Base64 encoding example](/img/platform/key-concepts/nodes/built-in/base64-decode/Image-Input.jpg)

#### Output

The output displays the decoded image text/content in JSON format, which you can map to the next node.
![Base64 Decode node output showing extracted image text in JSON](/img/platform/key-concepts/nodes/built-in/base64-decode/Base64N-Result6.jpg)

</TabItem>
</Tabs>

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)