
# API управления заказами

## Создание заказа

```
POST /api/resource/Sales Order
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "customer": "CUST-001",
  "delivery_date": "2024-12-20",
  "items": [
    {
      "item_code": "FRAME-001",
      "qty": 1,
      "rate": 15000,
      "custom_vision_sphere_left": "-2.5",
      "custom_vision_cylinder_left": "-0.5",
      "custom_vision_axis_left": "90",
      "custom_vision_sphere_right": "-2.0",
      "custom_vision_cylinder_right": "-0.25",
      "custom_vision_axis_right": "85"
    }
  ],
  "custom_consultation_notes": "Рекомендованы прогрессивные линзы"
}
```

## Получение заказов

```
GET /api/resource/Sales Order?fields=["name","customer","status","grand_total","delivery_date"]&filters=[["status","=","Draft"]]
Authorization: token api_key:api_secret
```

## Обновление статуса заказа

```
PUT /api/resource/Sales Order/{order_id}
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "status": "Confirmed"
}
```

## Получение заказов клиента

```
GET /api/resource/Sales Order?filters=[["customer","=","CUST-001"]]&fields=["name","status","grand_total","transaction_date"]
Authorization: token api_key:api_secret
```

## Отмена заказа

```
POST /api/method/frappe.client.cancel_doc
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "doctype": "Sales Order",
  "name": "SO-001"
}
```

## Подтверждение заказа

```
POST /api/method/frappe.client.submit_doc
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "doctype": "Sales Order",
  "name": "SO-001"
}
```

## Кастомные поля заказа

Рекомендуемые поля для оптических заказов:

- `custom_vision_sphere_left` (Float) - Сфера левый глаз
- `custom_vision_cylinder_left` (Float) - Цилиндр левый глаз
- `custom_vision_axis_left` (Int) - Ось левый глаз
- `custom_vision_sphere_right` (Float) - Сфера правый глаз
- `custom_vision_cylinder_right` (Float) - Цилиндр правый глаз
- `custom_vision_axis_right` (Int) - Ось правый глаз
- `custom_consultation_notes` (Text) - Заметки консультации
- `custom_optometrist` (Link) - Оптометрист
