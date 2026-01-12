---
slug: /platform/key-concepts/nodes/built-in/filter
title: Filter Node
---

The Filter Node in appse ai allows you to selectively pass through only the data records that meet one or more defined conditions.

Records that do not satisfy the conditions are simply excluded from the workflow and are not forwarded further.

It helps you clean, narrow down, and control data flow without creating branches.

This is useful when you want to:
* Allow only valid or relevant records to continue
* Remove unwanted or incomplete data
* Process only high-priority or matching records
* Reduce noise before downstream processing

## IF Condition

The IF section is where you define the rules that determine whether an item is considered True or False.

<img src="\img\platform\key-concepts\nodes\built-in\filter\if.png" alt="if" width="700"/>

Each condition has three parts:

1. **Field** → the data attribute to evaluate
   <img src="\img\platform\key-concepts\nodes\built-in\filter\field-if-condition.png" alt="if field" width="700"/>
2. **Condition** → the comparison operator
   <img src="\img\platform\key-concepts\nodes\built-in\filter\if-conditions.png" alt="if condition" width="700"/>
3. **Value** → the expected value
   <img src="\img\platform\key-concepts\nodes\built-in\filter\value-if-condition.png" alt="value if condition" width="700"/>

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
| | Later than | Occurs after target date/time | DateTime | "DueDate" later than "Now" |
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

<img src="\img\platform\key-concepts\nodes\built-in\filter\and.png" alt="and" width="700"/>

The AND button adds another condition inside the same rule group.

**Example meaning:** Condition A **AND** Condition B

For a record to pass the filter, all AND conditions must be satisfied.

Use AND when every condition must be true at the same time.

## OR Conditions

<img src="\img\platform\key-concepts\nodes\built-in\filter\or.png" alt="or" width="700"/>

The OR button creates a separate rule group.

**Example meaning:**
**(Group 1: ConditionA AND ConditionB)** OR **(Group 2: ConditionC AND ConditionD)**

If any one group evaluates to true, the record is allowed to pass.

Use OR when multiple alternative criteria should qualify.

## Case Sensitivity (Settings Tab)

* **Disable Case Sensitivity**
* When **ON** → "Alice" = "alice" = "ALICE"
* When **OFF** (default) → comparisons are case-sensitive
* Applies only to Text-based conditions.

## Steps to Use the Filter Node

1. Select the Filter node from the node selection screen.
   <img src="\img\platform\key-concepts\nodes\built-in\filter\select-filter-node.png" alt="select filter node" width="700"/>
2. Drag `order.status` from the Schema panel into the Field box. Confirm it appears as `{{$payload.order.status}}`.
   <img src="\img\platform\key-concepts\nodes\built-in\filter\drag-param.png" alt="drag parameter" width="700"/>
3. From the Condition dropdown (Text), select **Equal to**.
   <img src="\img\platform\key-concepts\nodes\built-in\filter\select-condition.png" alt="select condition" width="700"/>
4. In the Value box, enter `Shipped`.
   <img src="\img\platform\key-concepts\nodes\built-in\filter\write-value.png" alt="set value" width="700"/>

### Example with AND and OR

For this example, we have used AND and OR conditions in the Filter node like this:

First, we clicked **AND +** and added another rule where `order.status` is **Equal to** `Shipped` **AND** `customer.segment` is **Equal to** `Premium`.

Then, we clicked **OR +** to create a second group, where `dates.orderDate` is **Later than** `01/02/2025 14:00`.

**Together, this means a record will pass the filter if it matches:**
`(order.status = Shipped AND customer.segment = Premium) OR (orderDate > 01/02/2025 14:00)`.

<img src="\img\platform\key-concepts\nodes\built-in\filter\or-condition.png" alt="and or condition" width="700"/>

## Output Behavior

<img src="\img\platform\key-concepts\nodes\built-in\filter\filtered-branch.png" alt="filtered branch" width="700"/>

* All records that satisfy at least one of the above rule groups are passed to the next connected node (for example, a shipped order from a premium customer, or any order placed after the specified date).
* Records that do not satisfy any of the configured groups are filtered out and will not be processed further.

Use the Filter node when you want only matching records to continue in a single flow, without creating separate True or False branches.