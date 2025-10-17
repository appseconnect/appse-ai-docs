# 📋 Introduction to Expressions

Expressions are a powerful feature in **APPSeAI workflow nodes** that enable dynamic data mapping and transformation. They allow you to reference, filter, project, and manipulate data structures in real-time as data flows through your workflow.

---

## 🔹 What are Expressions?

In APPSeAI workflow nodes, expressions provide a way to:

- **Map fields dynamically** between different data structures
- **Transform data** as it flows through workflow nodes  
- **Filter and query** complex JSON data
- **Calculate values** based on input data
- **Reference data** from previous nodes in the workflow

---

## 🔹 How Expressions Work

Every workflow node:
1. **Receives input data** from previous nodes or external sources
2. **Makes data available** for expressions and template rendering
3. **Evaluates expressions** at runtime for dynamic configuration
4. **Outputs transformed data** to the next node in the workflow

### **Expression Syntax**
All expressions are written between double curly braces `{{}}` and use **JMESPath** syntax:

```
{{ jmespath_expression }}
```

### **Runtime Evaluation**
Expressions are evaluated at runtime, providing:
- **Dynamic configurations** based on actual data
- **Flexible data transformations** 
- **Context-aware processing**

---

## 🔹 Use Cases in APPSeAI

### **Field Mapping**
```json
{
  "customerName": "{{ user.fullName }}",
  "totalOrders": "{{ length(orders) }}"
}
```

### **Data Transformation**
```json
{
  "users": "{{ users[*].{name: fullName, email: contactInfo.email} }}"
}
```

### **Conditional Logic**
```json
{
  "status": "{{ orderCount > `10` && 'VIP' || 'Regular' }}"
}
```

---

## 🔹 Getting Started

This documentation is organized to help you learn expressions progressively:

1. **[Expression Basics](./01-basics.md)** - Core concepts and simple examples
2. **[Data Access](./02-data-access.md)** - Property access and array operations  
3. **[Filtering](./03-filtering.md)** - Filter data with conditions
4. **[Transformations](./04-transformations.md)** - Reshape and project data
5. **[Functions](./05-functions.md)** - Built-in functions reference
6. **[Advanced Patterns](./06-advanced-patterns.md)** - Complex scenarios
7. **[Template Integration](./07-template-integration.md)** - Using expressions in templates
8. **[Quick Reference](./08-quick-reference.md)** - Syntax cheat sheet

---

## 🔹 Key Benefits

- **No-Code Data Mapping** - Map fields without writing custom code
- **Real-time Processing** - Expressions evaluate with live data
- **Powerful Transformations** - Reshape data structures easily
- **Workflow Integration** - Seamlessly works within APPSeAI nodes
- **JSON-First** - Optimized for JSON data structures

Start with **[Expression Basics](./01-basics.md)** to learn the fundamentals!