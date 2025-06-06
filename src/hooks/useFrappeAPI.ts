
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { frappeAPI, FrappeAPIError } from '@/lib/frappe-api';
import { toast } from '@/components/ui/sonner';

// Generic hook for Frappe queries
export function useFrappeQuery<T>(
  key: string[],
  queryFn: () => Promise<T>,
  options: {
    enabled?: boolean;
    staleTime?: number;
    cacheTime?: number;
  } = {}
) {
  return useQuery({
    queryKey: key,
    queryFn,
    enabled: !!frappeAPI && (options.enabled !== false),
    staleTime: options.staleTime || 5 * 60 * 1000, // 5 minutes
    gcTime: options.cacheTime || 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error) => {
      // Don't retry on authentication errors
      if (error instanceof FrappeAPIError && error.statusCode === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
}

// Generic mutation hook
export function useFrappeMutation<T, V>(
  mutationFn: (variables: V) => Promise<T>,
  options: {
    onSuccess?: (data: T, variables: V) => void;
    onError?: (error: Error, variables: V) => void;
    invalidateQueries?: string[][];
  } = {}
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data, variables) => {
      options.onSuccess?.(data, variables);
      
      // Invalidate related queries
      if (options.invalidateQueries) {
        options.invalidateQueries.forEach(queryKey => {
          queryClient.invalidateQueries({ queryKey });
        });
      }
    },
    onError: (error, variables) => {
      console.error('Mutation error:', error);
      options.onError?.(error, variables);
    },
  });
}

// Specific hooks for the optical store

// Customers
export function useCustomers(search?: string) {
  return useFrappeQuery(
    ['customers', search || ''],
    () => frappeAPI!.getCustomers(search),
    { enabled: !!frappeAPI }
  );
}

export function useCreateCustomer() {
  return useFrappeMutation(
    (customerData: any) => frappeAPI!.createCustomer(customerData),
    {
      onSuccess: () => {
        toast.success('Клиент успешно создан');
      },
      invalidateQueries: [['customers']],
    }
  );
}

// Products
export function useProducts(search?: string) {
  return useFrappeQuery(
    ['products', search || ''],
    () => frappeAPI!.searchProducts(search || ''),
    { enabled: !!frappeAPI }
  );
}

// Orders
export function useOrders(customerId?: string) {
  return useFrappeQuery(
    ['orders', customerId || ''],
    () => frappeAPI!.getOrders(customerId),
    { enabled: !!frappeAPI }
  );
}

export function useCreateOrder() {
  return useFrappeMutation(
    (orderData: any) => frappeAPI!.createOrder(orderData),
    {
      onSuccess: () => {
        toast.success('Заказ успешно создан');
      },
      invalidateQueries: [['orders']],
    }
  );
}

// Vision Tests
export function useVisionTests(customerId: string) {
  return useFrappeQuery(
    ['vision-tests', customerId],
    () => frappeAPI!.getVisionTests(customerId),
    { enabled: !!frappeAPI && !!customerId }
  );
}

export function useCreateVisionTest() {
  return useFrappeMutation(
    (testData: any) => frappeAPI!.createVisionTest(testData),
    {
      onSuccess: () => {
        toast.success('Результаты проверки зрения сохранены');
      },
      invalidateQueries: [['vision-tests']],
    }
  );
}

// API health check
export function useAPIHealth() {
  return useFrappeQuery(
    ['api-health'],
    async () => {
      if (!frappeAPI) throw new Error('API not configured');
      
      // Try to call a simple method to check if API is working
      await frappeAPI.callMethod('frappe.auth.get_logged_user');
      return { status: 'connected' };
    },
    {
      staleTime: 30 * 1000, // 30 seconds
      cacheTime: 60 * 1000, // 1 minute
      retry: 1,
    }
  );
}
