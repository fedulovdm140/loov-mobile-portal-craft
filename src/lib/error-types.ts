
// Types for better error handling
export interface APIError {
  message: string;
  statusCode?: number;
  type: 'validation' | 'authentication' | 'permission' | 'network' | 'server' | 'unknown';
  details?: any;
}
