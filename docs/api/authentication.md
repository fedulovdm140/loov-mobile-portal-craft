
# Аутентификация Frappe/ERPNext API

## Получение API ключей

### 1. Создание API ключа

```bash
# В Frappe bench
bench --site your-site.com add-user-permission "API Key" your-api-key user@example.com
```

### 2. Создание API Secret

```python
# В Frappe console
frappe.generate_hash()
```

## Методы аутентификации

### Login с паролем

```
POST /api/method/login
Content-Type: application/json

{
  "usr": "user@example.com",
  "pwd": "password"
}
```

### Получение информации о пользователе

```
GET /api/method/frappe.auth.get_logged_user
Headers:
  Authorization: token api_key:api_secret
```

### Проверка токена

```
GET /api/method/frappe.auth.get_logged_user
Headers:
  Authorization: token api_key:api_secret
```

## Настройка переменных окружения

```env
VITE_FRAPPE_URL=https://your-frappe-site.com
VITE_FRAPPE_API_KEY=your-api-key
VITE_FRAPPE_API_SECRET=your-api-secret
```
