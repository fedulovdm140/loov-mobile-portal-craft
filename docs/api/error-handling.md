
# Обработка ошибок API

## Стандартные коды ошибок

- `200` - Успешно
- `401` - Не авторизован
- `403` - Доступ запрещен  
- `404` - Ресурс не найден
- `409` - Конфликт (дублирование данных)
- `422` - Ошибка валидации
- `500` - Внутренняя ошибка сервера

## Формат ответа с ошибкой

```json
{
  "message": "Описание ошибки",
  "exc_type": "ValidationError", 
  "exc": "Подробная информация об ошибке"
}
```

## Типичные ошибки и их решения

### 401 Unauthorized

```json
{
  "message": "Not permitted",
  "exc_type": "PermissionError"
}
```

**Решение:** Проверьте API ключи и права доступа пользователя.

### 422 Validation Error

```json
{
  "message": "Customer Name is mandatory",
  "exc_type": "ValidationError"
}
```

**Решение:** Проверьте обязательные поля в запросе.

### 409 Duplicate Entry

```json
{
  "message": "Customer with this name already exists",
  "exc_type": "DuplicateEntryError"
}
```

**Решение:** Используйте уникальные значения или обновите существующую запись.

## Обработка ошибок в коде

```typescript
class FrappeAPIError extends Error {
  constructor(
    public statusCode: number,
    public response: any,
    message: string
  ) {
    super(message);
    this.name = 'FrappeAPIError';
  }
}

async function handleFrappeRequest(request: Promise<Response>) {
  try {
    const response = await request;
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new FrappeAPIError(
        response.status,
        errorData,
        errorData.message || 'Unknown error'
      );
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof FrappeAPIError) {
      console.error('Frappe API Error:', error);
      // Обработка специфичных ошибок
      switch (error.statusCode) {
        case 401:
          // Перенаправление на страницу входа
          break;
        case 422:
          // Показать ошибки валидации пользователю
          break;
        default:
          // Показать общую ошибку
      }
    }
    throw error;
  }
}
```

## Retry логика

```typescript
async function apiRequestWithRetry(
  url: string, 
  options: RequestInit, 
  maxRetries = 3
): Promise<any> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      if (response.status === 429) { // Rate limit
        const retryAfter = response.headers.get('Retry-After');
        const delay = retryAfter ? parseInt(retryAfter) * 1000 : attempt * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      return await handleFrappeRequest(Promise.resolve(response));
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      // Exponential backoff
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, attempt) * 1000)
      );
    }
  }
}
```
