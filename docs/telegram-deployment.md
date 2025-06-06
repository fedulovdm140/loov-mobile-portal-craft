
# Развертывание LoovIS в Telegram Mini App

## Обзор

LoovIS может работать как Telegram Mini App, предоставляя пользователям удобный доступ к системе управления салоном оптики прямо из Telegram.

## Подготовка к развертыванию

### 1. Создание Telegram Bot

1. **Напишите @BotFather в Telegram:**
   ```
   /start
   /newbot
   ```

2. **Укажите данные бота:**
   - Имя: `LoovIS Bot`
   - Username: `loovis_bot` (должен быть уникальным)

3. **Сохраните токен бота** - он понадобится для настройки

### 2. Настройка Mini App

1. **Настройте кнопку меню:**
   ```
   /setmenubutton
   @loovis_bot
   ```
   - Название кнопки: `Открыть LoovIS`
   - URL: `https://your-domain.com`

2. **Настройте описание бота:**
   ```
   /setdescription
   @loovis_bot
   LoovIS - Информационная система для управления салоном оптики. Управляйте клиентами, заказами и инвентарем прямо из Telegram.
   ```

3. **Настройте команды:**
   ```
   /setcommands
   @loovis_bot
   start - Запустить LoovIS
   help - Помощь
   dashboard - Открыть дашборд
   clients - Управление клиентами
   orders - Заказы
   ```

### 3. Развертывание веб-приложения

#### Вариант 1: Развертывание через Lovable

1. **Подготовьте переменные окружения:**
   ```env
   VITE_FRAPPE_URL=https://your-frappe-site.com
   VITE_FRAPPE_API_KEY=your-api-key
   VITE_FRAPPE_API_SECRET=your-api-secret
   VITE_TELEGRAM_BOT_TOKEN=your-bot-token
   VITE_IS_TELEGRAM_MINI_APP=true
   ```

2. **Опубликуйте через Lovable:**
   - Нажмите кнопку "Publish" в редакторе Lovable
   - Получите URL развернутого приложения
   - Используйте этот URL в настройках бота

#### Вариант 2: Самостоятельное развертывание

1. **Соберите проект:**
   ```bash
   npm run build
   ```

2. **Разверните на хостинге:**
   - Vercel: `vercel --prod`
   - Netlify: загрузите папку `dist`
   - VPS: скопируйте `dist` на сервер

3. **Настройте HTTPS** (обязательно для Telegram Mini App)

### 4. Настройка безопасности

#### Проверка данных пользователя

В production обязательно проверяйте подпись `initData`:

```python
# Пример проверки на бэкенде (Python)
import hashlib
import hmac
from urllib.parse import unquote, parse_qsl

def validate_telegram_data(init_data: str, bot_token: str) -> bool:
    parsed_data = dict(parse_qsl(unquote(init_data)))
    
    if 'hash' not in parsed_data:
        return False
    
    received_hash = parsed_data.pop('hash')
    
    # Создаем строку для проверки
    data_check_string = '\n'.join([f"{k}={v}" for k, v in sorted(parsed_data.items())])
    
    # Вычисляем секретный ключ
    secret_key = hmac.new(
        "WebAppData".encode(),
        bot_token.encode(),
        hashlib.sha256
    ).digest()
    
    # Вычисляем хеш
    calculated_hash = hmac.new(
        secret_key,
        data_check_string.encode(),
        hashlib.sha256
    ).hexdigest()
    
    return calculated_hash == received_hash
```

#### Настройка CORS

```javascript
// Для Express.js сервера
app.use(cors({
  origin: [
    'https://web.telegram.org',
    'https://your-domain.com'
  ],
  credentials: true
}));
```

### 5. Особенности UX для Telegram

#### Адаптация интерфейса

1. **Используйте тему Telegram:**
   ```css
   .telegram-mini-app {
     --background: var(--tg-theme-bg-color, #ffffff);
     --foreground: var(--tg-theme-text-color, #000000);
     --muted: var(--tg-theme-hint-color, #707579);
     --accent: var(--tg-theme-link-color, #2481cc);
   }
   ```

2. **Адаптируйте навигацию:**
   - Используйте `BackButton` вместо обычной навигации
   - Используйте `MainButton` для основных действий

#### Тактильная обратная связь

```typescript
// Примеры использования haptic feedback
const handleSuccess = () => {
  hapticFeedback('notification', 'success');
};

const handleError = () => {
  hapticFeedback('notification', 'error');
};

const handleButtonClick = () => {
  hapticFeedback('impact', 'medium');
};
```

### 6. Интеграция с ботом

#### Создание webhook для уведомлений

```python
# Пример webhook для уведомлений о заказах
from telegram import Bot

bot = Bot(token=BOT_TOKEN)

async def notify_order_status(user_id: int, order_id: str, status: str):
    message = f"🔔 Статус заказа #{order_id} изменен на: {status}"
    
    keyboard = [
        [{"text": "Открыть заказ", "web_app": {"url": f"https://your-domain.com/orders/{order_id}"}}]
    ]
    
    await bot.send_message(
        chat_id=user_id,
        text=message,
        reply_markup={"inline_keyboard": keyboard}
    )
```

#### Команды бота

```python
# Обработчики команд
from telegram.ext import Application, CommandHandler, MessageHandler, filters

async def start_command(update, context):
    keyboard = [
        [{"text": "🚀 Открыть LoovIS", "web_app": {"url": "https://your-domain.com"}}]
    ]
    
    await update.message.reply_text(
        "Добро пожаловать в LoovIS! 👋\n\n"
        "Управляйте своим салоном оптики прямо из Telegram.",
        reply_markup={"keyboard": keyboard, "resize_keyboard": True}
    )

async def dashboard_command(update, context):
    keyboard = [
        [{"text": "📊 Дашборд", "web_app": {"url": "https://your-domain.com/dashboard"}}]
    ]
    
    await update.message.reply_text(
        "Откройте дашборд для просмотра ключевых метрик:",
        reply_markup={"inline_keyboard": keyboard}
    )

# Регистрация обработчиков
app = Application.builder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start_command))
app.add_handler(CommandHandler("dashboard", dashboard_command))
```

### 7. Отладка и тестирование

#### Тестирование в Telegram

1. **Добавьте бота в личные сообщения**
2. **Отправьте команду `/start`**
3. **Нажмите кнопку "Открыть LoovIS"**
4. **Проверьте все функции**

#### Отладка

```javascript
// Логирование для отладки
console.log('Telegram WebApp Data:', window.Telegram?.WebApp);
console.log('User Data:', telegramService.getUserData());
console.log('Theme Params:', telegramService.getThemeParams());
```

### 8. Оптимизация производительности

#### Минимизация размера приложения

```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          telegram: ['@/lib/telegram', '@/hooks/useTelegram']
        }
      }
    }
  }
});
```

#### Кеширование

```javascript
// Service Worker для кеширования
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    return; // Не кешируем API запросы
  }
  
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

### 9. Мониторинг и аналитика

#### Отслеживание использования

```typescript
// Аналитика для Telegram Mini App
const trackTelegramEvent = (event: string, data?: any) => {
  if (telegramService.isInTelegram()) {
    // Отправка событий в вашу аналитическую систему
    analytics.track(`telegram_${event}`, {
      user_id: telegramService.getUserData()?.id,
      platform: 'telegram_mini_app',
      ...data
    });
  }
};
```

### 10. Checklist развертывания

- [ ] Создан и настроен Telegram Bot
- [ ] Настроен Menu Button с правильным URL
- [ ] Приложение развернуто с HTTPS
- [ ] Настроены переменные окружения
- [ ] Проверена интеграция с Telegram WebApp API
- [ ] Настроена проверка подписи данных
- [ ] Протестированы все основные функции
- [ ] Настроены команды бота
- [ ] Добавлена тактильная обратная связь
- [ ] Настроен мониторинг и логирование

## Полезные ссылки

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
- [Telegram WebApp API](https://core.telegram.org/bots/webapps#initializing-mini-apps)
- [BotFather Commands](https://core.telegram.org/bots#botfather)

