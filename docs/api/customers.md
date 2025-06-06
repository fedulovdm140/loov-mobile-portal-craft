
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

Правильный синтаксис фильтров (JSON массив):
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

## Обработка ошибок

### 422 Validation Error (пример)
```json
{
  "message": "Customer Name is mandatory",
  "exc_type": "ValidationError"
}
```

### 409 Duplicate Entry
```json
{
  "message": "Customer with this name already exists", 
  "exc_type": "DuplicateEntryError"
}
```

### 401 Unauthorized
```json
{
  "message": "Not permitted",
  "exc_type": "PermissionError"
}
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

## Примеры использования в коде

```typescript
// Создание клиента
const { mutate: createCustomer } = useCreateCustomer();

createCustomer({
  customer_name: "Петров Петр Петрович",
  customer_type: "Individual",
  customer_group: "Individual",
  territory: "Russia",
  custom_phone: "+7 (999) 555-44-33",
  custom_email: "petrov@example.com"
});

// Поиск клиентов
const { data: customers, isLoading } = useCustomers("Петров");

// Получение конкретного клиента
const { data: customer } = useFrappeQuery(
  ['customer', customerId],
  () => frappeAPI!.getById('Customer', customerId)
);
```
