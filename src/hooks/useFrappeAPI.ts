
// Re-export types and utilities
export type { APIError } from '@/lib/api-error-handler';
export { handleAPIError, showErrorToast } from '@/lib/api-error-handler';

// Re-export generic hooks
export { useFrappeQuery, useFrappeMutation } from './useGenericAPI';

// Re-export specific Frappe hooks
export {
  useCustomers,
  useCreateCustomer,
  useProducts,
  useOrders,
  useCreateOrder,
  useVisionTests,
  useCreateVisionTest
} from './useFrappeHooks';

// Re-export connection status hooks
export { useAPIHealth, useConnectionStatus } from './useConnectionStatus';
