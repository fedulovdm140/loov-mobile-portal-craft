
# LoovIS - Информационная система управления салоном оптики

Современная web-система для управления салоном оптики с интеграцией Frappe/ERPNext и поддержкой Telegram Mini App.

## 🚀 Быстрый старт

### Требования
- Node.js 18+ 
- npm или bun
- Frappe/ERPNext сервер
- Telegram Bot (для Mini App)

### Установка фронтенда

1. **Клонируйте репозиторий:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd loovis
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

## 📱 Telegram Mini App

LoovIS поддерживает работу в качестве Telegram Mini App, что позволяет пользователям получать доступ к системе прямо из Telegram.

### Быстрое развертывание в Telegram

1. **Создайте бота через @BotFather:**
   ```
   /newbot
   Имя: LoovIS Bot
   Username: loovis_bot
   ```

2. **Настройте Menu Button:**
   ```
   /setmenubutton
   URL: https://your-domain.com
   ```

3. **Опубликуйте приложение** через Lovable или на своем хостинге

**📚 Подробная документация по развертыванию в Telegram:** [docs/telegram-deployment.md](./docs/telegram-deployment.md)

## 🔧 Настройка интеграции с Frappe/ERPNext

### 1. Установка Frappe Framework

Установите Frappe и ERPNext на свой сервер:

```bash
# Установка Frappe Bench
sudo pip3 install frappe-bench

# Создание нового сайта
bench new-site your-site.com

# Установка ERPNext
bench --site your-site.com install-app erpnext
```

### 2. Создание кастомных полей

Добавьте кастомные поля в DocType Customer:

- `custom_phone` (Phone)
- `custom_email` (Email)
- `custom_birth_date` (Date)
- `custom_vision_left` (Small Text)
- `custom_vision_right` (Small Text)
- `custom_notes` (Text)

### 3. Создание DocType для проверки зрения

Создайте новый DocType `Vision Test` со следующими полями:

- `customer` (Link to Customer)
- `test_date` (Date)
- `optometrist` (Data)
- `vision_left_sphere` (Float)
- `vision_left_cylinder` (Float)
- `vision_left_axis` (Int)
- `vision_right_sphere` (Float)
- `vision_right_cylinder` (Float)
- `vision_right_axis` (Int)
- `notes` (Text)
- `next_checkup` (Date)

### 4. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# Frappe/ERPNext
VITE_FRAPPE_URL=https://your-frappe-site.com
VITE_FRAPPE_API_KEY=your-api-key
VITE_FRAPPE_API_SECRET=your-api-secret

# Telegram Mini App (опционально)
VITE_TELEGRAM_BOT_TOKEN=your-bot-token
VITE_IS_TELEGRAM_MINI_APP=true
```

### 5. Настройка CORS

Настройте CORS в Frappe для разрешения запросов с вашего фронтенда:

```python
# site_config.json
"allow_cors": "*",
"allow_cors_origin": "*"
```

## 📋 Функциональность

### Текущие возможности
- ✅ Дашборд с KPI метриками
- ✅ Управление стандартами работы
- ✅ Календарь задач
- ✅ Адаптивный дизайн
- ✅ Система аутентификации
- ✅ Поддержка Telegram Mini App
- ✅ Интеграция с Telegram WebApp API

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
│   ├── ui/           # UI компоненты (shadcn/ui)
│   └── TelegramAdapter.tsx # Адаптер для Telegram
├── lib/
│   ├── frappe-api.ts  # API клиент для Frappe
│   ├── telegram.ts    # Telegram WebApp API
│   └── utils.ts      # Утилиты
├── hooks/
│   ├── useTelegram.tsx # Хук для работы с Telegram
│   └── ...           # Другие хуки
└── pages/           # Страницы приложения
```

## 🔌 API Документация

Подробная документация API доступна в следующих разделах:

- [Обзор API](./docs/api/overview.md) - Общая информация и структура API
- [Аутентификация](./docs/api/authentication.md) - Настройка API ключей и токенов
- [Управление клиентами](./docs/api/customers.md) - API для работы с клиентами
- [Управление товарами](./docs/api/products.md) - API каталога товаров
- [Управление заказами](./docs/api/orders.md) - API системы заказов
- [Проверка зрения](./docs/api/vision-tests.md) - API проверок зрения
- [Инвентаризация](./docs/api/inventory.md) - API управления остатками
- [Отчеты и аналитика](./docs/api/reports.md) - API отчетов и KPI
- [Обработка ошибок](./docs/api/error-handling.md) - Коды ошибок и их обработка
- [Примеры интеграции](./docs/api/integration-examples.md) - Готовые примеры кода

### Основные эндпоинты:
- `/api/resource/Customer` - Управление клиентами
- `/api/resource/Item` - Каталог товаров
- `/api/resource/Sales Order` - Заказы
- `/api/resource/Vision Test` - Проверка зрения

## 🚀 Развертывание

### Фронтенд (Lovable)
1. Настройте переменные окружения
2. Нажмите кнопку "Publish" в Lovable
3. Настройте кастомный домен (опционально)

### Фронтенд (самостоятельно)
```bash
# Сборка
npm run build

# Развертывание на любом web-сервере
# Статические файлы будут в папке dist/
```

### Telegram Mini App
Следуйте инструкциям в [docs/telegram-deployment.md](./docs/telegram-deployment.md)

### Frappe/ERPNext
Следуйте [официальной документации Frappe](https://frappeframework.com/docs/user/en/installation) для production развертывания.

## 🔒 Безопасность

### 1. Валидация данных Telegram

В production обязательно проверяйте подпись `initData` на бэкенде для защиты от подделки данных.

### 2. Защита API ключей

Храните API ключи Frappe в безопасном месте и не коммитьте их в репозиторий. Используйте переменные окружения.

### 3. Rate Limiting

Внедрите rate limiting для защиты от злоупотреблений API.

## 🔧 Настройка Frappe для оптики

### 1. Кастомизация DocTypes

Настройте DocTypes Customer, Item, Sales Order и Vision Test для соответствия потребностям салона оптики.

### 2. Создание отчетов

Создайте кастомные отчеты для анализа продаж, инвентаризации и клиентской базы.

### 3. Настройка разрешений

Настройте права доступа для различных ролей пользователей (администратор, оптометрист, продавец).

## 🤝 Поддержка

- Документация Frappe: https://frappeframework.com/docs
- Документация ERPNext: https://docs.erpnext.com
- Telegram Bot API: https://core.telegram.org/bots/api
- Telegram Mini Apps: https://core.telegram.org/bots/webapps
- Сообщество: https://discuss.frappe.io

## 📄 Лицензия

MIT License
