
import { useAPIHealth } from '@/hooks/useFrappeAPI';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export const APIStatus = () => {
  const { data, isLoading, error } = useAPIHealth();

  if (isLoading) {
    return (
      <Badge variant="secondary" className="flex items-center gap-1">
        <Loader2 className="w-3 h-3 animate-spin" />
        Проверка API...
      </Badge>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <XCircle className="h-4 w-4" />
        <AlertDescription>
          Нет подключения к Frappe API. Проверьте настройки.
        </AlertDescription>
      </Alert>
    );
  }

  if (data?.status === 'connected') {
    return (
      <Badge variant="default" className="flex items-center gap-1 bg-green-500">
        <CheckCircle className="w-3 h-3" />
        API подключен
      </Badge>
    );
  }

  return null;
};
