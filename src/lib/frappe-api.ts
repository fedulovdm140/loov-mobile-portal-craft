
// Frappe API client with error handling and TypeScript support
import { toast } from '@/components/ui/sonner';

// Types for Frappe API
export interface FrappeResponse<T = any> {
  message: T;
  data?: T;
  exc_type?: string;
  exc?: string;
}

export interface FrappeListResponse<T = any> {
  data: T[];
  message?: string;
}

export interface FrappeError {
  message: string;
  exc_type?: string;
  exc?: string;
  statusCode: number;
}

// Custom error class for Frappe API
export class FrappeAPIError extends Error {
  constructor(
    public statusCode: number,
    public response: any,
    message: string
  ) {
    super(message);
    this.name = 'FrappeAPIError';
  }
}

// Configuration interface
interface FrappeConfig {
  baseUrl: string;
  apiKey: string;
  apiSecret: string;
}

export class FrappeAPI {
  private config: FrappeConfig;

  constructor(config: FrappeConfig) {
    this.config = config;
  }

  private getHeaders(): Record<string, string> {
    return {
      'Authorization': `token ${this.config.apiKey}:${this.config.apiSecret}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    
    if (!contentType?.includes('application/json')) {
      throw new FrappeAPIError(
        response.status,
        null,
        'Invalid response format - expected JSON'
      );
    }

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || data.exc || 'Unknown error occurred';
      throw new FrappeAPIError(response.status, data, errorMessage);
    }

    return data;
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.config.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      });

      return await this.handleResponse<T>(response);
    } catch (error) {
      if (error instanceof FrappeAPIError) {
        // Log specific Frappe errors
        console.error('Frappe API Error:', {
          statusCode: error.statusCode,
          message: error.message,
          response: error.response
        });
        
        // Show user-friendly error messages
        switch (error.statusCode) {
          case 401:
            toast.error('Ошибка авторизации. Проверьте API ключи.');
            break;
          case 403:
            toast.error('Доступ запрещен. Недостаточно прав.');
            break;
          case 404:
            toast.error('Ресурс не найден.');
            break;
          case 422:
            toast.error(`Ошибка валидации: ${error.message}`);
            break;
          case 500:
            toast.error('Внутренняя ошибка сервера. Попробуйте позже.');
            break;
          default:
            toast.error(`Ошибка API: ${error.message}`);
        }
        
        throw error;
      }
      
      // Network or other errors
      console.error('Network or other error:', error);
      toast.error('Ошибка сети. Проверьте подключение к интернету.');
      throw new FrappeAPIError(0, null, 'Network error');
    }
  }

  // Generic CRUD operations
  async get<T>(doctype: string, options: {
    filters?: Array<[string, string, any]>;
    fields?: string[];
    orderBy?: string;
    limit?: number;
    offset?: number;
  } = {}): Promise<FrappeListResponse<T>> {
    const params = new URLSearchParams();
    
    if (options.filters?.length) {
      params.append('filters', JSON.stringify(options.filters));
    }
    
    if (options.fields?.length) {
      params.append('fields', JSON.stringify(options.fields));
    }
    
    if (options.orderBy) {
      params.append('order_by', options.orderBy);
    }
    
    if (options.limit) {
      params.append('limit_page_length', options.limit.toString());
    }
    
    if (options.offset) {
      params.append('limit_start', options.offset.toString());
    }

    const queryString = params.toString();
    const endpoint = `/api/resource/${doctype}${queryString ? `?${queryString}` : ''}`;
    
    return this.makeRequest<FrappeListResponse<T>>(endpoint);
  }

  async getById<T>(doctype: string, id: string): Promise<FrappeResponse<T>> {
    return this.makeRequest<FrappeResponse<T>>(`/api/resource/${doctype}/${id}`);
  }

  async create<T>(doctype: string, data: any): Promise<FrappeResponse<T>> {
    return this.makeRequest<FrappeResponse<T>>(`/api/resource/${doctype}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async update<T>(doctype: string, id: string, data: any): Promise<FrappeResponse<T>> {
    return this.makeRequest<FrappeResponse<T>>(`/api/resource/${doctype}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(doctype: string, id: string): Promise<FrappeResponse> {
    return this.makeRequest<FrappeResponse>(`/api/resource/${doctype}/${id}`, {
      method: 'DELETE',
    });
  }

  async callMethod<T>(method: string, args: any = {}): Promise<FrappeResponse<T>> {
    return this.makeRequest<FrappeResponse<T>>(`/api/method/${method}`, {
      method: 'POST',
      body: JSON.stringify(args),
    });
  }

  // Specific methods for the optical store
  async searchProducts(query: string) {
    return this.get('Item', {
      filters: [['item_name', 'like', `%${query}%`]],
      fields: ['name', 'item_name', 'item_code', 'standard_rate', 'custom_brand', 'custom_model']
    });
  }

  async getCustomers(search?: string) {
    const filters = search 
      ? [['customer_name', 'like', `%${search}%`] as [string, string, string]]
      : undefined;
    
    return this.get('Customer', {
      filters,
      fields: ['name', 'customer_name', 'custom_phone', 'custom_email', 'custom_last_visit']
    });
  }

  async createCustomer(customerData: any) {
    return this.create('Customer', customerData);
  }

  async getOrders(customerId?: string) {
    const filters = customerId 
      ? [['customer', '=', customerId] as [string, string, string]]
      : undefined;
    
    return this.get('Sales Order', {
      filters,
      fields: ['name', 'customer', 'status', 'grand_total', 'transaction_date'],
      orderBy: 'transaction_date desc'
    });
  }

  async createOrder(orderData: any) {
    return this.create('Sales Order', orderData);
  }

  async getVisionTests(customerId: string) {
    return this.get('Vision Test', {
      filters: [['customer', '=', customerId]],
      orderBy: 'test_date desc'
    });
  }

  async createVisionTest(testData: any) {
    return this.create('Vision Test', testData);
  }
}

// Create default instance
const createFrappeAPI = () => {
  const baseUrl = import.meta.env.VITE_FRAPPE_URL;
  const apiKey = import.meta.env.VITE_FRAPPE_API_KEY;
  const apiSecret = import.meta.env.VITE_FRAPPE_API_SECRET;

  if (!baseUrl || !apiKey || !apiSecret) {
    console.warn('Frappe API credentials not configured');
    return null;
  }

  return new FrappeAPI({
    baseUrl,
    apiKey,
    apiSecret
  });
};

export const frappeAPI = createFrappeAPI();
