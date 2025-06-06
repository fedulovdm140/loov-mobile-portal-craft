
import { toast } from '@/components/ui/sonner';
import type { APIError } from './error-types';

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
