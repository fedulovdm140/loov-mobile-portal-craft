
# LOOV Оптика - Система управления салоном оптики

Современная web-система для управления салоном оптики с интеграцией Frappe/ERPNext.

## 🚀 Быстрый старт

### Требования
- Node.js 18+ 
- npm или bun
- Frappe/ERPNext сервер

### Установка фронтенда

1. **Клонируйте репозиторий:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   # или
   bun install
   ```

3. **Запустите приложение:**
   ```bash
   npm run dev
   # или
   bun dev
   ```

Приложение будет доступно по адресу `http://localhost:8080`

## 🔧 Настройка интеграции с Frappe/ERPNext

### 1. Подготовка Frappe сервера

#### Установка ERPNext (если еще не установлен)
```bash
# Создание нового сайта
bench new-site your-optik-site.com

# Установка ERPNext
bench --site your-optik-site.com install-app erpnext

# Создание пользователя
bench --site your-optik-site.com add-user optik-user optik@example.com
```

#### Настройка API доступа

1. **Создайте API ключи:**
   - Войдите в ERPNext как администратор
   - Перейдите в "User" > найдите пользователя для API
   - В разделе "API Access" нажмите "Generate Keys"
   - Сохраните `API Key` и `API Secret`

2. **Настройте CORS (если требуется):**
   ```python
   # В site_config.json
   {
     "allow_cors": "*",
     "cors_allowed_origins": [
       "http://localhost:8080",
       "https://your-frontend-domain.com"
     ]
   }
   ```

### 2. Создание кастомных полей

Выполните в Frappe консоли (`bench --site your-site.com console`):

```python
# Кастомные поля для Customer (Клиент)
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields

customer_fields = {
    "Customer": [
        {
            "fieldname": "custom_phone",
            "label": "Телефон",
            "fieldtype": "Data",
            "insert_after": "email_id"
        },
        {
            "fieldname": "custom_birth_date",
            "label": "Дата рождения",
            "fieldtype": "Date",
            "insert_after": "custom_phone"
        },
        {
            "fieldname": "custom_vision_left",
            "label": "Зрение левый глаз",
            "fieldtype": "Data",
            "insert_after": "custom_birth_date"
        },
        {
            "fieldname": "custom_vision_right",
            "label": "Зрение правый глаз",
            "fieldtype": "Data",
            "insert_after": "custom_vision_left"
        },
        {
            "fieldname": "custom_notes",
            "label": "Заметки",
            "fieldtype": "Text",
            "insert_after": "custom_vision_right"
        }
    ]
}

create_custom_fields(customer_fields)

# Кастомные поля для Item (Товар)
item_fields = {
    "Item": [
        {
            "fieldname": "custom_brand",
            "label": "Бренд",
            "fieldtype": "Data",
            "insert_after": "item_group"
        },
        {
            "fieldname": "custom_model",
            "label": "Модель",
            "fieldtype": "Data",
            "insert_after": "custom_brand"
        },
        {
            "fieldname": "custom_color",
            "label": "Цвет",
            "fieldtype": "Data",
            "insert_after": "custom_model"
        },
        {
            "fieldname": "custom_size",
            "label": "Размер",
            "fieldtype": "Data",
            "insert_after": "custom_color"
        }
    ]
}

create_custom_fields(item_fields)
```

### 3. Создание DocType для проверки зрения

```python
# Создание кастомного DocType "Vision Test"
vision_test_doctype = {
    "doctype": "DocType",
    "name": "Vision Test",
    "module": "Custom",
    "autoname": "naming_series:",
    "naming_series_options": "VT-.YYYY.-",
    "fields": [
        {
            "fieldname": "customer",
            "label": "Клиент",
            "fieldtype": "Link",
            "options": "Customer",
            "reqd": 1
        },
        {
            "fieldname": "test_date",
            "label": "Дата проверки",
            "fieldtype": "Date",
            "reqd": 1
        },
        {
            "fieldname": "optometrist",
            "label": "Оптометрист",
            "fieldtype": "Data"
        },
        {
            "fieldname": "vision_left_sphere",
            "label": "Левый глаз - Сфера",
            "fieldtype": "Float"
        },
        {
            "fieldname": "vision_left_cylinder",
            "label": "Левый глаз - Цилиндр",
            "fieldtype": "Float"
        },
        {
            "fieldname": "vision_left_axis",
            "label": "Левый глаз - Ось",
            "fieldtype": "Int"
        },
        {
            "fieldname": "vision_right_sphere",
            "label": "Правый глаз - Сфера",
            "fieldtype": "Float"
        },
        {
            "fieldname": "vision_right_cylinder",
            "label": "Правый глаз - Цилиндр",
            "fieldtype": "Float"
        },
        {
            "fieldname": "vision_right_axis",
            "label": "Правый глаз - Ось",
            "fieldtype": "Int"
        },
        {
            "fieldname": "notes",
            "label": "Заметки",
            "fieldtype": "Text"
        },
        {
            "fieldname": "next_checkup",
            "label": "Следующий осмотр",
            "fieldtype": "Date"
        }
    ]
}

frappe.get_doc(vision_test_doctype).insert()
```

### 4. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
VITE_FRAPPE_URL=https://your-frappe-site.com
VITE_FRAPPE_API_KEY=your-api-key
VITE_FRAPPE_API_SECRET=your-api-secret
```

### 5. Настройка API клиента

Создайте файл конфигурации API:

```typescript
// src/lib/frappe-api.ts
export const frappeConfig = {
  baseURL: import.meta.env.VITE_FRAPPE_URL || 'http://localhost:8000',
  apiKey: import.meta.env.VITE_FRAPPE_API_KEY,
  apiSecret: import.meta.env.VITE_FRAPPE_API_SECRET,
};

export class FrappeAPI {
  private baseURL: string;
  private apiKey: string;
  private apiSecret: string;

  constructor() {
    this.baseURL = frappeConfig.baseURL;
    this.apiKey = frappeConfig.apiKey;
    this.apiSecret = frappeConfig.apiSecret;
  }

  private getHeaders() {
    return {
      'Authorization': `token ${this.apiKey}:${this.apiSecret}`,
      'Content-Type': 'application/json',
    };
  }

  // Методы для работы с API...
}
```

## 📋 Функциональность

### Текущие возможности
- ✅ Дашборд с KPI метриками
- ✅ Управление стандартами работы
- ✅ Календарь задач
- ✅ Адаптивный дизайн
- ✅ Система аутентификации

### Планируемые интеграции с Frappe
- 🔄 Управление клиентами
- 🔄 Каталог товаров (оправы, линзы)
- 🔄 Система заказов
- 🔄 Проверка зрения
- 🔄 Инвентаризация
- 🔄 Отчеты и аналитика
- 🔄 CRM функции

## 🏗️ Архитектура

```
src/
├── components/
│   ├── auth/          # Компоненты аутентификации
│   ├── navigation/    # Навигация
│   ├── sections/      # Основные разделы
│   └── ui/           # UI компоненты (shadcn/ui)
├── lib/
│   ├── frappe-api.ts  # API клиент для Frappe
│   └── utils.ts      # Утилиты
├── hooks/            # React хуки
└── pages/           # Страницы приложения
```

## 🔌 API Документация

Подробная документация API доступна в [docs/frappe-api.md](./docs/frappe-api.md)

### Основные эндпоинты:
- `/api/resource/Customer` - Управление клиентами
- `/api/resource/Item` - Каталог товаров
- `/api/resource/Sales Order` - Заказы
- `/api/resource/Vision Test` - Проверка зрения

## 🚀 Развертывание

### Фронтенд (Lovable)
1. Нажмите кнопку "Publish" в Lovable
2. Настройте кастомный домен (опционально)

### Фронтенд (самостоятельно)
```bash
# Сборка
npm run build

# Развертывание на любом web-сервере
# Статические файлы будут в папке dist/
```

### Frappe/ERPNext
Следуйте [официальной документации Frappe](https://frappeframework.com/docs/user/en/installation) для production развертывания.

## 🔧 Настройка Frappe для оптики

### Дополнительные настройки

1. **Создание групп товаров:**
   ```
   - Frames (Оправы)
     - Designer Frames
     - Budget Frames
   - Lenses (Линзы)
     - Single Vision
     - Bifocal
     - Progressive
   - Accessories (Аксессуары)
   ```

2. **Настройка складов:**
   ```
   - Display Room (Выставочный зал)
   - Storage (Склад)
   - Repair Shop (Мастерская)
   ```

3. **Пользовательские роли:**
   ```
   - Optician (Оптик)
   - Manager (Менеджер)
   - Optometrist (Оптометрист)
   ```

## 🤝 Поддержка

- Документация Frappe: https://frappeframework.com/docs
- Документация ERPNext: https://docs.erpnext.com
- Сообщество: https://discuss.frappe.io

## 📄 Лицензия

MIT License - подробности в файле [LICENSE](LICENSE)
