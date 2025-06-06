
import { frappeAPI } from '@/lib/frappe-api';
import { useFrappeQuery, useFrappeMutation } from './useGenericAPI';

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
