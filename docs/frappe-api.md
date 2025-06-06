
# Frappe/ERPNext API Documentation

## Обзор

Этот документ описывает API интеграцию между фронтендом LOOV и Frappe/ERPNext бэкендом.

## Базовая настройка

### Аутентификация

Frappe использует cookie-based аутентификацию. Для API доступа требуется:

1. **Получение API ключей:**
   ```bash
   # В Frappe bench
   bench --site your-site.com add-user-permission "API Key" your-api-key user@example.com
   ```

2. **Создание API Secret:**
   ```python
   # В Frappe console
   frappe.generate_hash()
   ```

### Базовые эндпоинты

#### Аутентификация
```
POST /api/method/login
Content-Type: application/json

{
  "usr": "user@example.com",
  "pwd": "password"
}
```

#### Получение токена
```
GET /api/method/frappe.auth.get_logged_user
Headers:
  Authorization: token api_key:api_secret
```

## API для оптики LOOV

### 1. Управление клиентами

#### Создание клиента
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

#### Получение клиентов
```
GET /api/resource/Customer?fields=["name","customer_name","custom_phone","custom_email"]&limit_page_length=20
Authorization: token api_key:api_secret
```

#### Поиск клиентов
```
GET /api/resource/Customer?filters=[["customer_name","like","%Иванов%"]]
Authorization: token api_key:api_secret
```

### 2. Управление товарами

#### Получение товаров (оправы)
```
GET /api/resource/Item?filters=[["item_group","=","Frames"]]&fields=["name","item_name","item_code","standard_rate","stock_qty"]
Authorization: token api_key:api_secret
```

#### Создание товара
```
POST /api/resource/Item
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "item_code": "FRAME-001",
  "item_name": "Оправа Ray-Ban RB5150",
  "item_group": "Frames",
  "stock_uom": "Nos",
  "is_stock_item": 1,
  "include_item_in_manufacturing": 0,
  "standard_rate": 15000,
  "custom_brand": "Ray-Ban",
  "custom_model": "RB5150",
  "custom_color": "Черный",
  "custom_size": "52-19-140"
}
```

### 3. Управление заказами

#### Создание заказа
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

#### Получение заказов
```
GET /api/resource/Sales Order?fields=["name","customer","status","grand_total","delivery_date"]&filters=[["status","=","Draft"]]
Authorization: token api_key:api_secret
```

### 4. Проверка зрения

#### Создание записи проверки зрения
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

### 5. Инвентаризация

#### Получение остатков
```
GET /api/method/erpnext.stock.utils.get_stock_balance?item_code=FRAME-001&warehouse=Main Store
Authorization: token api_key:api_secret
```

#### Обновление остатков
```
POST /api/resource/Stock Entry
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "stock_entry_type": "Material Receipt",
  "items": [
    {
      "item_code": "FRAME-001",
      "qty": 10,
      "basic_rate": 15000,
      "t_warehouse": "Main Store"
    }
  ]
}
```

### 6. Отчеты и аналитика

#### Отчет по продажам
```
GET /api/method/frappe.desk.query_report.run?report_name=Sales Analytics&filters={"from_date":"2024-12-01","to_date":"2024-12-31"}
Authorization: token api_key:api_secret
```

#### KPI дашборд
```
GET /api/method/erpnext.selling.page.sales_funnel.sales_funnel.get_funnel_data
Authorization: token api_key:api_secret
```

## Обработка ошибок

### Стандартные коды ошибок
- `200` - Успешно
- `401` - Не авторизован
- `403` - Доступ запрещен
- `404` - Ресурс не найден
- `500` - Внутренняя ошибка сервера

### Формат ответа с ошибкой
```json
{
  "message": "Описание ошибки",
  "exc_type": "ValidationError",
  "exc": "..."
}
```

## Webhooks

Frappe поддерживает webhooks для уведомления о событиях:

```python
# hooks.py
doc_events = {
    "Sales Order": {
        "on_submit": "your_app.hooks.sales_order_submitted"
    }
}
```

## Лимиты API

- Максимум 1000 запросов в час на API ключ
- Максимум 100 записей за один запрос GET
- Timeout: 30 секунд

## Примеры интеграции

### JavaScript/TypeScript клиент
```typescript
class FrappeAPI {
  private baseURL: string;
  private apiKey: string;
  private apiSecret: string;

  constructor(baseURL: string, apiKey: string, apiSecret: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  private getHeaders() {
    return {
      'Authorization': `token ${this.apiKey}:${this.apiSecret}`,
      'Content-Type': 'application/json'
    };
  }

  async getCustomers() {
    const response = await fetch(
      `${this.baseURL}/api/resource/Customer`,
      { headers: this.getHeaders() }
    );
    return response.json();
  }

  async createOrder(orderData: any) {
    const response = await fetch(
      `${this.baseURL}/api/resource/Sales Order`,
      {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(orderData)
      }
    );
    return response.json();
  }
}
```
