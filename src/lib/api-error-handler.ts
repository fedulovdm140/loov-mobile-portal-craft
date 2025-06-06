
import { FrappeAPIError } from '@/lib/frappe-api';
import { toast } from '@/components/ui/sonner';

// Types for better error handling
export interface APIError {
  message: string;
  statusCode?: number;
  type: 'validation' | 'authentication' | 'permission' | 'network' | 'server' | 'unknown';
  details?: any;
}

// Error handler utility
export function handleAPIError(error: any): APIError {
  console.error('API Error:', error);

  if (error instanceof FrappeAPIError) {
    let type: APIError['type'] = 'unknown';
    
    switch (error.statusCode) {
      case 400:
        type = 'validation';
        break;
      case 401:
        type = 'authentication';
        break;
      case 403:
        type = 'permission';
        break;
      case 422:
        type = 'validation';
        break;
      case 500:
      case 502:
      case 503:
        type = 'server';
        break;
      default:
        type = 'unknown';
    }

    return {
      message: error.message || 'Произошла ошибка API',
      statusCode: error.statusCode,
      type,
      details: error.response
    };
  }

  // Network errors
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return {
      message: 'Ошибка подключения к серверу',
      type: 'network'
    };
  }

  return {
    message: error.message || 'Неизвестная ошибка',
    type: 'unknown'
  };
}

// Show user-friendly error messages based on error type
export function showErrorToast(apiError: APIError) {
  switch (apiError.type) {
    case 'authentication':
      toast.error('Ошибка авторизации. Проверьте настройки API.');
      break;
    case 'permission':
      toast.error('Недостаточно прав для выполнения операции.');
      break;
    case 'validation':
      toast.error(`Ошибка валидации: ${apiError.message}`);
      break;
    case 'network':
      toast.error('Ошибка подключения к серверу. Проверьте интернет-соединение.');
      break;
    case 'server':
      toast.error('Ошибка сервера. Попробуйте позже.');
      break;
    default:
      toast.error(apiError.message);
  }
}
