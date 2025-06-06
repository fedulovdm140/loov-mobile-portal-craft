
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { frappeAPI } from '@/lib/frappe-api';
import { toast } from '@/components/ui/sonner';
import { handleAPIError, showErrorToast, APIError } from '@/lib/api-error-handler';

// Generic hook for Frappe queries with improved error handling
export function useFrappeQuery<T>(
  key: string[],
  queryFn: () => Promise<T>,
  options: {
    enabled?: boolean;
    staleTime?: number;
    cacheTime?: number;
    retry?: number | boolean | ((failureCount: number, error: any) => boolean);
    onError?: (error: APIError) => void;
  } = {}
) {
  return useQuery({
    queryKey: key,
    queryFn,
    enabled: !!frappeAPI && (options.enabled !== false),
    staleTime: options.staleTime || 5 * 60 * 1000, // 5 minutes
    gcTime: options.cacheTime || 10 * 60 * 1000, // 10 minutes
    retry: options.retry !== undefined ? options.retry : (failureCount, error) => {
      const apiError = handleAPIError(error);
      
      // Don't retry on authentication or permission errors
      if (apiError.type === 'authentication' || apiError.type === 'permission') {
        return false;
      }
      
      // Don't retry on validation errors
      if (apiError.type === 'validation') {
        return false;
      }
      
      return failureCount < 3;
    },
    meta: {
      onError: (error: any) => {
        const apiError = handleAPIError(error);
        showErrorToast(apiError);
        options.onError?.(apiError);
      }
    }
  });
}

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
