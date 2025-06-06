
import { ConnectionStatus } from './ConnectionStatus';
import { APIMetrics } from './APIMetrics';

interface APIStatusProps {
  variant?: 'badge' | 'alert' | 'metrics';
  showDetails?: boolean;
  className?: string;
}

export const APIStatus = ({ 
  variant = 'badge', 
  showDetails = false, 
  className 
}: APIStatusProps) => {
  if (variant === 'metrics') {
    return <APIMetrics />;
  }

  return (
    <ConnectionStatus 
      showDetails={showDetails || variant === 'alert'} 
      className={className}
    />
  );
};
