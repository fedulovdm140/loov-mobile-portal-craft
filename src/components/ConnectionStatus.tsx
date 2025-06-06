
import { useConnectionStatus } from '@/hooks/useConnectionStatus';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, Loader2, Wifi, WifiOff } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface ConnectionStatusProps {
  showDetails?: boolean;
  className?: string;
}

export const ConnectionStatus = ({ showDetails = false, className }: ConnectionStatusProps) => {
  const { data, isLoading, error } = useConnectionStatus();

  if (isLoading) {
    return (
      <Badge variant="secondary" className={className}>
        <LoadingSpinner size="sm" />
        <span className="ml-2">Проверка соединения...</span>
      </Badge>
    );
  }

  if (error || !data?.connected) {
    if (showDetails) {
      return (
        <Alert variant="destructive" className={className}>
          <WifiOff className="h-4 w-4" />
          <AlertDescription>
            Нет подключения к серверу. Проверьте настройки API и интернет-соединение.
          </AlertDescription>
        </Alert>
      );
    }

    return (
      <Badge variant="destructive" className={className}>
        <XCircle className="w-3 h-3" />
        <span className="ml-1">Нет соединения</span>
      </Badge>
    );
  }

  if (data.connected) {
    const isSlowConnection = data.responseTime > 2000;
    
    if (showDetails) {
      return (
        <Alert className={`border-green-200 ${className}`}>
          <Wifi className="h-4 w-4 text-green-600" />
          <AlertDescription>
            Подключено к серверу. Время отклика: {data.responseTime}ms
            {isSlowConnection && " (медленное соединение)"}
          </AlertDescription>
        </Alert>
      );
    }

    return (
      <Badge 
        variant={isSlowConnection ? "secondary" : "default"} 
        className={`${isSlowConnection ? 'bg-yellow-500' : 'bg-green-500'} ${className}`}
      >
        <CheckCircle className="w-3 h-3" />
        <span className="ml-1">
          {isSlowConnection ? `Медленно (${data.responseTime}ms)` : 'Подключено'}
        </span>
      </Badge>
    );
  }

  return null;
};
