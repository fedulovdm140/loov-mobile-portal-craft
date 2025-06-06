
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/components/ui/sonner';
import { handleAPIError, APIError } from '@/lib/api-error-handler';

// Generic mutation hook with improved error handling
export function useFrappeMutation<T, V>(
  mutationFn: (variables: V) => Promise<T>,
  options: {
    onSuccess?: (data: T, variables: V) => void;
    onError?: (error: APIError, variables: V) => void;
    invalidateQueries?: string[][];
    showSuccessToast?: boolean;
    successMessage?: string;
  } = {}
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data, variables) => {
      if (options.showSuccessToast !== false) {
        toast.success(options.successMessage || 'Операция выполнена успешно');
      }
      
      options.onSuccess?.(data, variables);
      
      // Invalidate related queries
      if (options.invalidateQueries) {
        options.invalidateQueries.forEach(queryKey => {
          queryClient.invalidateQueries({ queryKey });
        });
      }
    },
    onError: (error, variables) => {
      const apiError = handleAPIError(error);
      
      // Show user-friendly error messages
      switch (apiError.type) {
        case 'authentication':
          toast.error('Ошибка авторизации при выполнении операции');
          break;
        case 'permission':
          toast.error('Недостаточно прав для выполнения операции');
          break;
        case 'validation':
          toast.error(`Ошибка валидации: ${apiError.message}`);
          break;
        case 'network':
          toast.error('Ошибка подключения при выполнении операции');
          break;
        case 'server':
          toast.error('Ошибка сервера при выполнении операции');
          break;
        default:
          toast.error(`Ошибка: ${apiError.message}`);
      }
      
      options.onError?.(apiError, variables);
    },
  });
}
