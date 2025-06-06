import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { frappeAPI, FrappeAPIError } from '@/lib/frappe-api';
import { toast } from '@/components/ui/sonner';

// Types for better error handling
export interface APIError {
  message: string;
  statusCode?: number;
  type: 'validation' | 'authentication' | 'permission' | 'network' | 'server' | 'unknown';
  details?: any;
}

// Error handler utility
function handleAPIError(error: any): APIError {
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
        
        // Show user-friendly error messages
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

// Specific hooks for the optical store with improved error handling

// Customers
export function useCustomers(search?: string) {
  return useFrappeQuery(
    ['customers', search || ''],
    () => frappeAPI!.getCustomers(search),
    { 
      enabled: !!frappeAPI,
      onError: (error) => {
        if (error.type === 'authentication') {
          console.warn('Customer API authentication failed');
        }
      }
    }
  );
}

export function useCreateCustomer() {
  return useFrappeMutation(
    (customerData: any) => frappeAPI!.createCustomer(customerData),
    {
      successMessage: 'Клиент успешно создан',
      invalidateQueries: [['customers']],
    }
  );
}

// Products
export function useProducts(search?: string) {
  return useFrappeQuery(
    ['products', search || ''],
    () => frappeAPI!.searchProducts(search || ''),
    { 
      enabled: !!frappeAPI,
      onError: (error) => {
        if (error.type === 'authentication') {
          console.warn('Products API authentication failed');
        }
      }
    }
  );
}

// Orders
export function useOrders(customerId?: string) {
  return useFrappeQuery(
    ['orders', customerId || ''],
    () => frappeAPI!.getOrders(customerId),
    { 
      enabled: !!frappeAPI,
      onError: (error) => {
        if (error.type === 'authentication') {
          console.warn('Orders API authentication failed');
        }
      }
    }
  );
}

export function useCreateOrder() {
  return useFrappeMutation(
    (orderData: any) => frappeAPI!.createOrder(orderData),
    {
      successMessage: 'Заказ успешно создан',
      invalidateQueries: [['orders']],
    }
  );
}

// Vision Tests
export function useVisionTests(customerId: string) {
  return useFrappeQuery(
    ['vision-tests', customerId],
    () => frappeAPI!.getVisionTests(customerId),
    { 
      enabled: !!frappeAPI && !!customerId,
      onError: (error) => {
        if (error.type === 'authentication') {
          console.warn('Vision tests API authentication failed');
        }
      }
    }
  );
}

export function useCreateVisionTest() {
  return useFrappeMutation(
    (testData: any) => frappeAPI!.createVisionTest(testData),
    {
      successMessage: 'Результаты проверки зрения сохранены',
      invalidateQueries: [['vision-tests']],
    }
  );
}

// API health check with improved error handling
export function useAPIHealth() {
  return useFrappeQuery(
    ['api-health'],
    async () => {
      if (!frappeAPI) throw new Error('API not configured');
      
      // Try to call a simple method to check if API is working
      await frappeAPI.callMethod('frappe.auth.get_logged_user');
      return { status: 'connected', timestamp: new Date().toISOString() };
    },
    {
      staleTime: 30 * 1000, // 30 seconds
      cacheTime: 60 * 1000, // 1 minute
      retry: 1,
      onError: (error) => {
        console.warn('API health check failed:', error);
      }
    }
  );
}

// Connection status hook
export function useConnectionStatus() {
  return useFrappeQuery(
    ['connection-status'],
    async () => {
      const startTime = Date.now();
      
      if (!frappeAPI) {
        throw new Error('API not configured');
      }
      
      await frappeAPI.callMethod('frappe.auth.get_logged_user');
      
      const responseTime = Date.now() - startTime;
      
      return {
        connected: true,
        responseTime,
        timestamp: new Date().toISOString()
      };
    },
    {
      staleTime: 15 * 1000, // 15 seconds
      cacheTime: 30 * 1000, // 30 seconds
      retry: (failureCount, error) => {
        const apiError = handleAPIError(error);
        return apiError.type === 'network' && failureCount < 2;
      },
      onError: (error) => {
        console.warn('Connection status check failed:', error);
      }
    }
  );
}
