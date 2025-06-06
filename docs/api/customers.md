
# API управления клиентами

## Создание клиента

```
POST /api/resource/Customer
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "customer_name": "Иванов Иван Иванович",
  "customer_type": "Individual",
  "customer_group": "Individual",
  "territory": "Russia",
  "custom_phone": "+7 (999) 123-45-67",
  "custom_email": "ivan@example.com",
  "custom_birth_date": "1990-01-01",
  "custom_vision_left": "-2.5",
  "custom_vision_right": "-2.0",
  "custom_notes": "Первичный осмотр"
}
```

## Получение списка клиентов

```
GET /api/resource/Customer?fields=["name","customer_name","custom_phone","custom_email"]&limit_page_length=20
Authorization: token api_key:api_secret
```

## Поиск клиентов

```
GET /api/resource/Customer?filters=[["customer_name","like","%Иванов%"]]
Authorization: token api_key:api_secret
```

## Обновление клиента

```
PUT /api/resource/Customer/{customer_id}
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "custom_phone": "+7 (999) 123-45-68",
  "custom_notes": "Обновленная информация"
}
```

## Получение конкретного клиента

```
GET /api/resource/Customer/{customer_id}
Authorization: token api_key:api_secret
```

## Кастомные поля клиента

Для салона оптики рекомендуется добавить следующие кастомные поля в DocType Customer:

- `custom_phone` (Phone) - Телефон
- `custom_email` (Email) - Email
- `custom_birth_date` (Date) - Дата рождения
- `custom_vision_left` (Small Text) - Зрение левый глаз
- `custom_vision_right` (Small Text) - Зрение правый глаз
- `custom_notes` (Text) - Заметки
- `custom_last_visit` (Date) - Последний визит
- `custom_preferred_contact` (Select) - Предпочитаемый способ связи
