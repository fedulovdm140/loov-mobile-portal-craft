
# API проверки зрения

## Создание записи проверки зрения

Сначала создайте DocType `Vision Test` в Frappe с необходимыми полями.

```
POST /api/resource/Vision Test
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "customer": "CUST-001",
  "test_date": "2024-12-06",
  "optometrist": "Dr. Smith",
  "vision_left_sphere": "-2.5",
  "vision_left_cylinder": "-0.5",
  "vision_left_axis": "90",
  "vision_right_sphere": "-2.0",
  "vision_right_cylinder": "-0.25",
  "vision_right_axis": "85",
  "notes": "Рекомендуется коррекция зрения",
  "next_checkup": "2025-12-06"
}
```

## Получение истории проверок клиента

```
GET /api/resource/Vision Test?filters=[["customer","=","CUST-001"]]&order_by="test_date desc"
Authorization: token api_key:api_secret
```

## Получение последней проверки

```
GET /api/resource/Vision Test?filters=[["customer","=","CUST-001"]]&order_by="test_date desc"&limit_page_length=1
Authorization: token api_key:api_secret
```

## Обновление результатов проверки

```
PUT /api/resource/Vision Test/{test_id}
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "vision_left_sphere": "-2.75",
  "notes": "Обновленные результаты после повторной проверки"
}
```

## Структура DocType Vision Test

Рекомендуемые поля для DocType `Vision Test`:

- `customer` (Link to Customer) - Клиент
- `test_date` (Date) - Дата проверки
- `optometrist` (Data) - Оптометрист
- `vision_left_sphere` (Float) - Сфера левый глаз
- `vision_left_cylinder` (Float) - Цилиндр левый глаз
- `vision_left_axis` (Int) - Ось левый глаз
- `vision_right_sphere` (Float) - Сфера правый глаз
- `vision_right_cylinder` (Float) - Цилиндр правый глаз
- `vision_right_axis` (Int) - Ось правый глаз
- `notes` (Text) - Заметки
- `next_checkup` (Date) - Следующая проверка
- `test_type` (Select) - Тип проверки
- `visual_acuity_left` (Data) - Острота зрения левый глаз
- `visual_acuity_right` (Data) - Острота зрения правый глаз
