
import { frappeAPI } from '@/lib/frappe-api';
import { useFrappeQuery } from './useGenericAPI';
import { handleAPIError } from '@/lib/api-error-handler';

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
