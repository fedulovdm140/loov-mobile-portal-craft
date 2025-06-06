
# API отчетов и аналитики

## Отчет по продажам

```
GET /api/method/frappe.desk.query_report.run?report_name=Sales Analytics&filters={"from_date":"2024-12-01","to_date":"2024-12-31"}
Authorization: token api_key:api_secret
```

## KPI дашборд

```
GET /api/method/erpnext.selling.page.sales_funnel.sales_funnel.get_funnel_data
Authorization: token api_key:api_secret
```

## Отчет по клиентам

```
GET /api/method/frappe.desk.query_report.run?report_name=Customer Acquisition and Loyalty&filters={"from_date":"2024-12-01","to_date":"2024-12-31"}
Authorization: token api_key:api_secret
```

## Отчет по остаткам

```
GET /api/method/frappe.desk.query_report.run?report_name=Stock Balance&filters={"company":"Your Company","warehouse":"Main Store"}
Authorization: token api_key:api_secret
```

## Отчет по прибыльности товаров

```
GET /api/method/frappe.desk.query_report.run?report_name=Item-wise Sales Register&filters={"from_date":"2024-12-01","to_date":"2024-12-31"}
Authorization: token api_key:api_secret
```

## Кастомные метрики для оптики

### Количество проверок зрения за период

```
GET /api/method/frappe.db.count?doctype=Vision Test&filters=[["test_date","between",["2024-12-01","2024-12-31"]]]
Authorization: token api_key:api_secret
```

### Топ клиентов по заказам

```
GET /api/method/frappe.db.get_list?doctype=Sales Order&fields=["customer","sum(grand_total) as total"]&group_by="customer"&order_by="total desc"&limit=10
Authorization: token api_key:api_secret
```

### Анализ продаж по брендам

```
GET /api/method/frappe.db.sql?query=SELECT i.custom_brand, SUM(soi.amount) as total_sales FROM `tabSales Order Item` soi LEFT JOIN `tabItem` i ON soi.item_code = i.name WHERE soi.parent IN (SELECT name FROM `tabSales Order` WHERE docstatus = 1) GROUP BY i.custom_brand ORDER BY total_sales DESC
Authorization: token api_key:api_secret
```
