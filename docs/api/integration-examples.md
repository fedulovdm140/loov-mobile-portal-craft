
# Примеры интеграции

## JavaScript/TypeScript клиент

```typescript
class FrappeAPI {
  private baseURL: string;
  private apiKey: string;
  private apiSecret: string;

  constructor(baseURL: string, apiKey: string, apiSecret: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  private getHeaders() {
    return {
      'Authorization': `token ${this.apiKey}:${this.apiSecret}`,
      'Content-Type': 'application/json'
    };
  }

  async getCustomers() {
    const response = await fetch(
      `${this.baseURL}/api/resource/Customer`,
      { headers: this.getHeaders() }
    );
    return response.json();
  }

  async createOrder(orderData: any) {
    const response = await fetch(
      `${this.baseURL}/api/resource/Sales Order`,
      {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(orderData)
      }
    );
    return response.json();
  }

  async searchProducts(query: string) {
    const filters = JSON.stringify([["item_name", "like", `%${query}%`]]);
    const response = await fetch(
      `${this.baseURL}/api/resource/Item?filters=${encodeURIComponent(filters)}`,
      { headers: this.getHeaders() }
    );
    return response.json();
  }
}
```

## React хуки для интеграции

```typescript
// hooks/useFrappeAPI.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FrappeAPI } from '../lib/frappe-api';

const api = new FrappeAPI(
  import.meta.env.VITE_FRAPPE_URL,
  import.meta.env.VITE_FRAPPE_API_KEY,
  import.meta.env.VITE_FRAPPE_API_SECRET
);

export function useCustomers() {
  return useQuery({
    queryKey: ['customers'],
    queryFn: () => api.getCustomers(),
  });
}

export function useCreateCustomer() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (customerData: any) => api.createCustomer(customerData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
}

export function useProducts(search?: string) {
  return useQuery({
    queryKey: ['products', search],
    queryFn: () => search ? api.searchProducts(search) : api.getProducts(),
    enabled: !!search || search === '',
  });
}
```

## Webhooks настройка

```python
# hooks.py в вашем Frappe приложении
doc_events = {
    "Sales Order": {
        "on_submit": "your_app.hooks.sales_order_submitted",
        "on_cancel": "your_app.hooks.sales_order_cancelled"
    },
    "Customer": {
        "after_insert": "your_app.hooks.customer_created"
    }
}

# your_app/hooks.py
import frappe
import requests

def sales_order_submitted(doc, method):
    """Отправка уведомления при подтверждении заказа"""
    webhook_url = frappe.db.get_single_value("System Settings", "webhook_url")
    
    if webhook_url:
        payload = {
            "event": "sales_order_submitted",
            "data": {
                "order_id": doc.name,
                "customer": doc.customer,
                "total": doc.grand_total
            }
        }
        
        try:
            requests.post(webhook_url, json=payload, timeout=30)
        except Exception as e:
            frappe.log_error(f"Webhook error: {str(e)}")

def customer_created(doc, method):
    """Уведомление о создании нового клиента"""
    # Логика уведомления команды о новом клиенте
    pass
```

## Синхронизация данных

```typescript
// Сервис для синхронизации данных
class SyncService {
  private api: FrappeAPI;
  private lastSync: Date | null = null;

  constructor(api: FrappeAPI) {
    this.api = api;
  }

  async syncCustomers() {
    const lastSyncDate = this.lastSync?.toISOString() || '2024-01-01';
    
    const customers = await this.api.getCustomers({
      filters: [['modified', '>', lastSyncDate]]
    });

    // Обновление локальной базы данных
    for (const customer of customers.data) {
      await this.updateLocalCustomer(customer);
    }

    this.lastSync = new Date();
  }

  async syncOrders() {
    // Аналогичная логика для заказов
  }

  private async updateLocalCustomer(customer: any) {
    // Логика обновления локальных данных
    // Например, сохранение в IndexedDB или локальную базу
  }
}
```

## Обработка offline режима

```typescript
class OfflineFrappeAPI extends FrappeAPI {
  private offlineQueue: Array<{
    method: string;
    url: string;
    data?: any;
    timestamp: Date;
  }> = [];

  async createCustomer(customerData: any) {
    if (!navigator.onLine) {
      // Сохранение в офлайн очередь
      this.offlineQueue.push({
        method: 'POST',
        url: '/api/resource/Customer',
        data: customerData,
        timestamp: new Date()
      });
      
      // Сохранение в локальное хранилище
      localStorage.setItem('offline_queue', JSON.stringify(this.offlineQueue));
      
      return { offline: true, id: `temp_${Date.now()}` };
    }

    return super.createCustomer(customerData);
  }

  async processOfflineQueue() {
    if (!navigator.onLine || this.offlineQueue.length === 0) return;

    const queue = [...this.offlineQueue];
    this.offlineQueue = [];

    for (const request of queue) {
      try {
        await this.makeRequest(request.method, request.url, request.data);
      } catch (error) {
        // Возврат в очередь при ошибке
        this.offlineQueue.push(request);
      }
    }

    localStorage.setItem('offline_queue', JSON.stringify(this.offlineQueue));
  }
}
```
