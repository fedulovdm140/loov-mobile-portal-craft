
import { useState, useEffect } from 'react';
import { useAPIHealth, useConnectionStatus } from './useConnectionStatus';

export interface APIState {
  isConnected: boolean;
  isHealthy: boolean;
  responseTime?: number;
  lastChecked?: Date;
  retryCount: number;
  status: 'connecting' | 'connected' | 'disconnected' | 'error';
}

export function useAPIState() {
  const [retryCount, setRetryCount] = useState(0);
  const { data: healthData, isLoading: healthLoading, error: healthError } = useAPIHealth();
  const { data: connectionData, isLoading: connectionLoading, error: connectionError } = useConnectionStatus();

  const [apiState, setApiState] = useState<APIState>({
    isConnected: false,
    isHealthy: false,
    retryCount: 0,
    status: 'connecting'
  });

  useEffect(() => {
    const isLoading = healthLoading || connectionLoading;
    const hasError = healthError || connectionError;
    const isConnected = !!connectionData?.connected;
    const isHealthy = !!healthData?.status;

    let status: APIState['status'] = 'connecting';
    
    if (isLoading) {
      status = 'connecting';
    } else if (hasError) {
      status = 'error';
    } else if (isConnected && isHealthy) {
      status = 'connected';
    } else {
      status = 'disconnected';
    }

    setApiState({
      isConnected,
      isHealthy,
      responseTime: connectionData?.responseTime,
      lastChecked: connectionData ? new Date(connectionData.timestamp) : undefined,
      retryCount,
      status
    });
  }, [healthData, connectionData, healthLoading, connectionLoading, healthError, connectionError, retryCount]);

  const retry = () => {
    setRetryCount(prev => prev + 1);
  };

  const resetRetryCount = () => {
    setRetryCount(0);
  };

  return {
    apiState,
    retry,
    resetRetryCount,
    isLoading: healthLoading || connectionLoading
  };
}
