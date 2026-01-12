---
slug: /platform/key-concepts/nodes/built-in/decision
title: Decision Node
---

The Decision Node in appse ai allows you to evaluate incoming data based on one or more conditions and route each record into either the True or False output path.

It helps you create dynamic workflow branches—where data is filtered, validated, or separated based on rules you define.

This is useful when you want to:
* Process only records that meet specific criteria
* Route high-value vs low-value orders
* Separate premium customers from standard ones
* Build conditional flows based on dates, numbers, or text

## IF Condition

The IF section is where you define the rules that determine whether an item is considered True or False.

<img src="\img\platform\key-concepts\nodes\built-in\decision\if.png" alt="if" width="700"/>

Each condition has three parts:

1.  **Field** → the data attribute to evaluate
    <img src="\img\platform\key-concepts\nodes\built-in\decision\field-if-condition.png" alt="field if condition" width="700"/>
2.  **Condition** → the comparison operator
    <img src="\img\platform\key-concepts\nodes\built-in\decision\if-conditions.png" alt="if conditions" width="700"/>
3.  **Value** → the expected value
    <img src="\img\platform\key-concepts\nodes\built-in\decision\value-if-condition.png" alt="value if conditions" width="700"/>

### Conditions

| Category | Condition | Purpose (≤10 words) | Expected Data Type | Example Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Basic** | Exists | Check if value is present | Any | "Email" exists |
| **Basic** | Does not exist | Check if value is missing | Any | "MiddleName" does not exist |
| **Text** | Equal to | Match exact text | String | "Status" equal to "Open" |
| **Text** | Not equal to | Ensure value differs from text | String | "Country" not equal to "USA" |
| **Text** | Contains | Check substring presence | String | "Name" contains "Inc" |
| **Text** | Does not contain | Ensure substring absent | String | "Comment" does not contain "error" |
| **Text** | Starts with | Validate text prefix | String | "ID" starts with "EMP-" |
| **Text** | Does not start with | Ensure text does not start with prefix | String | "Tag" does not start with "tmp" |
| **Text** | Ends with | Validate text suffix | String | "FileName" ends with ".pdf" |
| **Text** | Does not end with | Ensure text does not end with suffix | String | "FileName" does not end with ".tmp" |
| **Text** | Matches pattern | Validate regex pattern | String | "Email" matches pattern "^[^@]+@[^@]+$" |
| **Text** | Does not match pattern | Ensure regex mismatch | String | "URL" does not match pattern "^https://" |
| **Number** | Equal to | Match exact number | Number | "Score" equal to 10 |
| **Number** | Not equal to | Ensure number differs | Number | "Quantity" not equal to 0 |
| **Number** | Greater than | Check numeric higher value | Number | "Age" greater than 18 |
| **Number** | Less than | Check numeric lower value | Number | "Price" less than 100 |
| **Number** | Greater than or Equal to | Allow equal or higher | Number | "Hours" greater than or equal to 40 |
| **Number** | Less than or Equal to | Allow equal or lower | Number | "Attempts" less than or equal to 3 |
| **Date & Time** | Equal to | Match exact date/time | DateTime | "CreatedDate" equal to "2024-01-01" |
| **Date & Time** | Not equal to | Ensure date differs | DateTime | "StartDate" not equal to "Today" |
| **Date & Time** | Later than | Occurs after target date/time | DateTime | "DueDate" later than "Now" |
| **Date & Time** | Earlier than | Occurs before target date/time | DateTime | "EventDate" earlier than "Deadline" |
| **Date & Time** | Later than or Equal to | Date/time is same or later | DateTime | "ValidFrom" later than or equal to "Today" |
| **Date & Time** | Earlier than or Equal to | Date/time is same or earlier | DateTime | "ExpiryDate" earlier than or equal to "Now" |
| **Time** | Equal to | Match exact time | Time | "StartTime" equal to "09:00" |
| **Time** | Not equal to | Ensure time differs | Time | "MeetingTime" not equal to "12:00" |
| **Time** | Greater than | Later in the day | Time | "ReminderTime" greater than "14:00" |
| **Time** | Less than | Earlier in the day | Time | "StartTime" less than "08:00" |
| **Time** | Greater than or Equal to | Allow same or later time | Time | "ShiftStart" greater than or equal to "06:00" |
| **Time** | Less than or Equal to | Allow same or earlier time | Time | "CutoffTime" less than or equal to "17:00" |

## AND Conditions

<img src="\img\platform\key-concepts\nodes\built-in\decision\and.png" alt="and" width="700"/>

The AND button adds another condition inside the same rule group.

**Example meaning:**
Condition A **AND** Condition B
<img src="\img\platform\key-concepts\nodes\built-in\decision\and-condition.png" alt="and-condition" width="700"/>

For the item to be marked True, both conditions must be satisfied.

Use AND when all conditions must be true at the same time.

## OR Conditions

<img src="\img\platform\key-concepts\nodes\built-in\decision\or.png" alt="or" width="700"/>

The OR button creates a separate rule block.

**Example meaning:**
**(Group 1: ConditionA AND ConditionB)** OR **(Group 2: ConditionC AND ConditionD)**
<img src="\img\platform\key-concepts\nodes\built-in\decision\or-condition.png" alt="or condition" width="700"/>

If any one group evaluates to true, the item is routed to the True output.

Use OR when you want multiple possible criteria to qualify.

## Case Sensitivity (Settings Tab)

*   **Disable Case Sensitivity**
*   When **ON** → "Alice" = "alice" = "ALICE"
*   When **OFF** (default) → comparisons are strict
*   This affects Text-based conditions only.

## Steps to Use the Decision Node

1.  Select the Decision node from the selection screen.
    <img src="\img\platform\key-concepts\nodes\built-in\decision\select-decision-node.png" alt="select-decision-node" width="700"/>
2.  Drag the `order.amount` field from the Schema panel on the left into the Field box of the IF section. Confirm that the field appears as `{{$payload.order.amount}}` in the IF box.
    <img src="\img\platform\key-concepts\nodes\built-in\decision\drag-param.png" alt="drag param" width="700"/>
3.  Open the Condition dropdown and select **Equal to** from the Number options.
    <img src="\img\platform\key-concepts\nodes\built-in\decision\select-condition.png" alt="select condition" width="700"/>
4.  In the Value box, type `50000` so the rule checks: `order.amount = 50000`.
    <img src="\img\platform\key-concepts\nodes\built-in\decision\write-value.png" alt="write value" width="700"/>

### Example with AND and OR

For this example, we have also used AND and OR conditions like this:

First, we clicked **AND +** and added another rule where `customer.name` is **Equal to** `Alice Wonderland`.

Then we clicked **OR +** to create a second group, where `dates.orderDate` is **Equal to** `05/02/2025 14:00` **AND** `order.status` is **Equal to** `Pending`.

**Together, this means a record will pass if it matches:**
`(amount = 50000 AND customer = Alice Wonderland) OR (orderDate = 05/02/2025 14:00 AND status = Pending)`.

### Output (True and False Division)

1.  Click Continue, go to the Run tab, and click Run again.
2.  In the **False branch** of the output, you will see all records that do not satisfy any of the configured groups (for example, an order with an amount of 75000 and status Delivered).
    <img src="\img\platform\key-concepts\nodes\built-in\decision\false-branch.png" alt="false branch" width="700"/>
3.  In the **True branch** of the output, you will see all records that satisfy at least one group (for example, Alice Wonderland’s order with an amount of 50000).
    <img src="\img\platform\key-concepts\nodes\built-in\decision\true-branch.png" alt="true branch" width="700"/>

Use these True and False outputs to connect different downstream nodes, depending on how you want to process matching vs non-matching records.