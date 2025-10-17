# 📋 Expression Writing Guide

This document explains how to write expressions in templates and understand their output when using the `{{expression}}` syntax.

---

## 🔹 Expression Basics

Expressions are written between double curly braces `{{}}` and use **JMESPath** syntax to query and transform JSON data.

### **Syntax Pattern**
```
{{ jmespath_expression }}
```

### **Example Data Structure**
```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "age": 28,
      "city": "London",
      "orders": [
        { "id": 101, "product": "Laptop", "amount": 1200 },
        { "id": 102, "product": "Mouse", "amount": 25 }
      ]
    },
    {
      "id": 2,
      "name": "Bob",
      "age": 35,
      "city": "New York",
      "orders": [
        { "id": 103, "product": "Phone", "amount": 800 }
      ]
    }
  ]
}
```

---

## 🔹 Basic Property Access

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ users[0].name }}` | `"Alice"` | Get first user's name |
| `{{ users[1].age }}` | `35` | Get second user's age |
| `{{ users[-1].name }}` | `"Bob"` | Get last user's name |
| `{{ users[0].orders[0].product }}` | `"Laptop"` | Get first user's first order product |

---

## 🔹 Array Operations

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ users[*].name }}` | `["Alice", "Bob"]` | Get all user names |
| `{{ users[*].age }}` | `[28, 35]` | Get all user ages |
| `{{ users[*].orders[*].product }}` | `["Laptop", "Mouse", "Phone"]` | Get all products from all orders |
| `{{ length(users) }}` | `2` | Count total users |

---

## 🔹 Filtering Data

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ users[?age > `30`].name }}` | `["Bob"]` | Users older than 30 |
| `{{ users[?city == 'London'].name }}` | `["Alice"]` | Users from London |
| `{{ users[?age < `30` && city == 'London'].name }}` | `["Alice"]` | Young users from London |
| `{{ users[*].orders[?amount > `500`] }}` | `[{"id":101,"product":"Laptop","amount":1200}, {"id":103,"product":"Phone","amount":800}]` | Orders over $500 |

---

## 🔹 Data Transformation & Projection

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ users[*].{Name: name, Age: age} }}` | `[{"Name":"Alice","Age":28},{"Name":"Bob","Age":35}]` | Transform user objects |
| `{{ users[*].{User: name, OrderCount: length(orders)} }}` | `[{"User":"Alice","OrderCount":2},{"User":"Bob","OrderCount":1}]` | Add computed fields |
| `{{ users[*].{User: name, TotalSpent: sum(orders[*].amount)} }}` | `[{"User":"Alice","TotalSpent":1225},{"User":"Bob","TotalSpent":800}]` | Calculate totals |

---

## 🔹 Aggregation Functions

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ sum(users[*].orders[*].amount) }}` | `2025` | Total of all order amounts |
| `{{ max(users[*].age) }}` | `35` | Maximum age |
| `{{ min(users[*].orders[*].amount) }}` | `25` | Minimum order amount |
| `{{ avg(users[*].age) }}` | `31.5` | Average age |

---

## 🔹 Sorting & Ordering

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ sort(users[*].age) }}` | `[28, 35]` | Sort ages ascending |
| `{{ reverse(users[*].name) }}` | `["Bob", "Alice"]` | Reverse name order |
| `{{ sort_by(users, &age)[*].name }}` | `["Alice", "Bob"]` | Sort users by age, get names |
| `{{ max_by(users[*].orders[*], &amount) }}` | `{"id":101,"product":"Laptop","amount":1200}` | Order with highest amount |

---

## 🔹 String Functions

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ users[0].name }}` | `"Alice"` | Direct string value |
| `{{ to_string(users[0].age) }}` | `"28"` | Convert number to string |
| `{{ contains(users[0].city, 'Lon') }}` | `true` | Check if string contains substring |
| `{{ starts_with(users[0].name, 'Al') }}` | `true` | Check string prefix |
| `{{ ends_with(users[0].name, 'ice') }}` | `true` | Check string suffix |

---

## 🔹 Advanced Expressions

### **Complex Filtering**
```
{{ users[?contains(orders[*].product, 'Laptop')].name }}
```
**Output:** `["Alice"]`
**Description:** Users who have ordered a Laptop

### **Nested Projections**
```
{{ users[*].orders[*].{User: @.product, Cost: amount, Category: 'Electronics'} }}
```
**Output:** 
```json
[
  {"User":"Laptop","Cost":1200,"Category":"Electronics"},
  {"User":"Mouse","Cost":25,"Category":"Electronics"},
  {"User":"Phone","Cost":800,"Category":"Electronics"}
]
```

### **Conditional Logic**
```
{{ users[*].{Name: name, Status: age > `30` && 'Senior' || 'Junior'} }}
```
**Output:** 
```json
[
  {"Name":"Alice","Status":"Junior"},
  {"Name":"Bob","Status":"Senior"}
]
```

---

## 🔹 Template Context Examples

### **In String Templates**
```json
{
  "message": "Hello {{ users[0].name }}, you have {{ length(users[0].orders) }} orders."
}
```
**Output:**
```json
{
  "message": "Hello Alice, you have 2 orders."
}
```

### **In Object Templates**
```json
{
  "userSummary": "{{ users[*].{name: name, totalSpent: sum(orders[*].amount)} }}",
  "totalUsers": "{{ length(users) }}"
}
```
**Output:**
```json
{
  "userSummary": [
    {"name":"Alice","totalSpent":1225},
    {"name":"Bob","totalSpent":800}
  ],
  "totalUsers": 2
}
```

---

## 🔹 Expression Output Types

| **Expression Result** | **Output Type** | **Example** |
|---|---|---|
| Single value | Primitive | `"Alice"`, `28`, `true` |
| Array result | JSON Array | `["Alice", "Bob"]` |
| Object result | JSON Object | `{"name":"Alice","age":28}` |
| Complex structure | Nested JSON | `[{"User":"Alice","Orders":[...]}]` |

---

## 🔹 Common Patterns

### **1. List All Items**
```
{{ items[*].property }}
```

### **2. Filter and Transform**
```
{{ items[?condition].{NewName: oldName, Computed: calculation} }}
```

### **3. Aggregate Data**
```
{{ sum(items[*].values) }}
{{ max_by(items, &sortField) }}
```

### **4. Nested Access**
```
{{ parent[*].children[*].property }}
```

### **5. Conditional Selection**
```
{{ items[?field > `value` && otherField == 'text'] }}
```

---

## 🔹 Best Practices

1. **Use Wildcards** (`[*]`) for array operations
2. **Filter Early** to reduce processing overhead
3. **Combine Operations** in single expressions when possible
4. **Use Projections** (`{}`) to reshape data efficiently
5. **Test Complex Expressions** with sample data first

---

## 🔹 Error Handling

If an expression fails:
- **Invalid syntax**: Returns the original `{{ expression }}` unchanged
- **Missing data**: Returns `null` or empty result
- **Type mismatch**: May return unexpected results or error

---

## 🔹 Quick Reference

- `[*]` - All array elements
- `[?condition]` - Filter array
- `{key: value}` - Object projection
- `&field` - Sort by field reference
- `@` - Current element reference
- Backticks for literals: `` `value` ``
