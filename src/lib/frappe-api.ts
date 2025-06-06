
// Frappe API Client для оптики LOOV

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

export class FrappeAPIClient {
  private baseURL: string;
  private apiKey: string;
  private apiSecret: string;

  constructor(baseURL: string, apiKey: string, apiSecret: string) {
    this.baseURL = baseURL.replace(/\/$/, ''); // Remove trailing slash
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  private getHeaders(): Record<string, string> {
    return {
      'Authorization': `token ${this.apiKey}:${this.apiSecret}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  private async makeRequest(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<any> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: response.statusText };
        }
        
        throw new FrappeAPIError(
          response.status,
          errorData,
          errorData.message || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof FrappeAPIError) {
        throw error;
      }
      throw new FrappeAPIError(0, null, `Network error: ${error.message}`);
    }
  }

  // Customers API
  async getCustomers(search?: string): Promise<any> {
    let endpoint = '/api/resource/Customer?fields=["name","customer_name","customer_type","territory","mobile_no","email_id"]';
    
    if (search) {
      const filters = JSON.stringify([["customer_name", "like", `%${search}%`]]);
      endpoint += `&filters=${encodeURIComponent(filters)}`;
    }
    
    return this.makeRequest(endpoint);
  }

  async createCustomer(customerData: any): Promise<any> {
    return this.makeRequest('/api/resource/Customer', {
      method: 'POST',
      body: JSON.stringify(customerData),
    });
  }

  async getCustomer(customerId: string): Promise<any> {
    return this.makeRequest(`/api/resource/Customer/${customerId}`);
  }

  async updateCustomer(customerId: string, customerData: any): Promise<any> {
    return this.makeRequest(`/api/resource/Customer/${customerId}`, {
      method: 'PUT',
      body: JSON.stringify(customerData),
    });
  }

  // Products API
  async searchProducts(search: string): Promise<any> {
    const filters = JSON.stringify([["item_name", "like", `%${search}%`]]);
    const endpoint = `/api/resource/Item?filters=${encodeURIComponent(filters)}&fields=["name","item_name","item_code","standard_rate","stock_qty","item_group"]`;
    
    return this.makeRequest(endpoint);
  }

  async getProducts(): Promise<any> {
    return this.makeRequest('/api/resource/Item?fields=["name","item_name","item_code","standard_rate","stock_qty","item_group"]');
  }

  async getProduct(itemCode: string): Promise<any> {
    return this.makeRequest(`/api/resource/Item/${itemCode}`);
  }

  // Orders API
  async getOrders(customerId?: string): Promise<any> {
    let endpoint = '/api/resource/Sales Order?fields=["name","customer","status","grand_total","transaction_date","delivery_date"]';
    
    if (customerId) {
      const filters = JSON.stringify([["customer", "=", customerId]]);
      endpoint += `&filters=${encodeURIComponent(filters)}`;
    }
    
    return this.makeRequest(endpoint);
  }

  async createOrder(orderData: any): Promise<any> {
    return this.makeRequest('/api/resource/Sales Order', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getOrder(orderId: string): Promise<any> {
    return this.makeRequest(`/api/resource/Sales Order/${orderId}`);
  }

  async updateOrder(orderId: string, orderData: any): Promise<any> {
    return this.makeRequest(`/api/resource/Sales Order/${orderId}`, {
      method: 'PUT',
      body: JSON.stringify(orderData),
    });
  }

  // Vision Tests API
  async getVisionTests(customerId: string): Promise<any> {
    const filters = JSON.stringify([["customer", "=", customerId]]);
    const endpoint = `/api/resource/Vision Test?filters=${encodeURIComponent(filters)}&fields=["name","customer","test_date","optometrist","vision_left_sphere","vision_left_cylinder","vision_left_axis","vision_right_sphere","vision_right_cylinder","vision_right_axis","notes"]&order_by="test_date desc"`;
    
    return this.makeRequest(endpoint);
  }

  async createVisionTest(testData: any): Promise<any> {
    return this.makeRequest('/api/resource/Vision Test', {
      method: 'POST',
      body: JSON.stringify(testData),
    });
  }

  async getVisionTest(testId: string): Promise<any> {
    return this.makeRequest(`/api/resource/Vision Test/${testId}`);
  }

  // Inventory API
  async getStockBalance(itemCode: string, warehouse?: string): Promise<any> {
    let endpoint = `/api/method/erpnext.stock.utils.get_stock_balance?item_code=${itemCode}`;
    if (warehouse) {
      endpoint += `&warehouse=${warehouse}`;
    }
    return this.makeRequest(endpoint);
  }

  // Generic API methods
  async callMethod(method: string, args?: any): Promise<any> {
    const endpoint = `/api/method/${method}`;
    
    if (args) {
      return this.makeRequest(endpoint, {
        method: 'POST',
        body: JSON.stringify(args),
      });
    }
    
    return this.makeRequest(endpoint);
  }

  async getResource(doctype: string, filters?: any, fields?: string[]): Promise<any> {
    let endpoint = `/api/resource/${doctype}`;
    
    const params = new URLSearchParams();
    if (filters) {
      params.append('filters', JSON.stringify(filters));
    }
    if (fields) {
      params.append('fields', JSON.stringify(fields));
    }
    
    if (params.toString()) {
      endpoint += `?${params.toString()}`;
    }
    
    return this.makeRequest(endpoint);
  }
}

// Create global instance (will be null if env vars are not set)
let frappeAPI: FrappeAPIClient | null = null;

// Initialize API client if environment variables are available
const frappeUrl = import.meta.env.VITE_FRAPPE_URL;
const frappeApiKey = import.meta.env.VITE_FRAPPE_API_KEY;
const frappeApiSecret = import.meta.env.VITE_FRAPPE_API_SECRET;

if (frappeUrl && frappeApiKey && frappeApiSecret) {
  frappeAPI = new FrappeAPIClient(frappeUrl, frappeApiKey, frappeApiSecret);
  console.log('Frappe API client initialized');
} else {
  console.warn('Frappe API credentials not found in environment variables');
  console.warn('Required: VITE_FRAPPE_URL, VITE_FRAPPE_API_KEY, VITE_FRAPPE_API_SECRET');
}

export { frappeAPI };
export default FrappeAPIClient;
