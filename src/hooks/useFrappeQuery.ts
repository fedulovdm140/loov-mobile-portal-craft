
import { useQuery } from '@tanstack/react-query';
import { frappeAPI } from '@/lib/frappe-api';
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
