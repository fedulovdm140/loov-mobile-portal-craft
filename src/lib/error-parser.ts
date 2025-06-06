
import { FrappeAPIError } from '@/lib/frappe-api';
import type { APIError } from './error-types';

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
