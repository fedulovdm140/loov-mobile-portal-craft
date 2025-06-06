
# Frappe/ERPNext API Overview

Этот документ описывает API интеграцию между фронтендом LOOV и Frappe/ERPNext бэкендом.

## Структура документации

- [Аутентификация](./authentication.md) - Настройка API ключей и токенов
- [Управление клиентами](./customers.md) - API для работы с клиентами
- [Управление товарами](./products.md) - API каталога товаров
- [Управление заказами](./orders.md) - API системы заказов
- [Проверка зрения](./vision-tests.md) - API проверок зрения
- [Инвентаризация](./inventory.md) - API управления остатками
- [Отчеты и аналитика](./reports.md) - API отчетов и KPI
- [Обработка ошибок](./error-handling.md) - Коды ошибок и их обработка
- [Примеры интеграции](./integration-examples.md) - Готовые примеры кода

## Базовая настройка

### URL и заголовки

Базовый URL: `https://your-frappe-site.com`

Стандартные заголовки для всех запросов:
```
Authorization: token api_key:api_secret
Content-Type: application/json
```

## Лимиты API

- Максимум 1000 запросов в час на API ключ
- Максимум 100 записей за один запрос GET
- Timeout: 30 секунд
