
import { Percent, TrendingUp, TrendingDown } from "lucide-react";

interface ConversionsData {
  repairToCheck: {
    rate: number;
    label: string;
    change: number;
    isPositive: boolean;
    target: number;
    lastMonth: number;
  };
  repairToSale: {
    rate: number;
    label: string;
    change: number;
    isPositive: boolean;
    target: number;
    lastMonth: number;
  };
}

interface ConversionsProgressCardProps {
  conversionsData: ConversionsData;
}

export const ConversionsProgressCard = ({ conversionsData }: ConversionsProgressCardProps) => {
  const renderConversionItem = (data: ConversionsData['repairToCheck']) => {
    const targetProgress = Math.round(data.rate / data.target * 100);
    
    return (
      <div className="bg-white rounded-md p-2 border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-700">{data.label}</span>
          <div className="flex items-center gap-1">
            {data.isPositive ? (
              <TrendingUp className="w-3 h-3 text-green-600" />
            ) : (
              <TrendingDown className="w-3 h-3 text-red-600" />
            )}
            <span className={`text-xs font-bold ${data.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {data.isPositive ? '+' : ''}{data.change}%
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-gray-900">{data.rate}%</span>
          <span className="text-xs text-gray-500">цель {data.target}%</span>
        </div>
        
        <div className="space-y-1">
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-700"
              style={{ width: `${Math.min(targetProgress, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Прошлый месяц: {data.lastMonth}%</span>
            <span>{targetProgress}% от цели</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
          <Percent className="w-3 h-3 text-white" />
        </div>
        <span className="text-sm font-bold text-blue-800">Конверсии</span>
      </div>
      
      <div className="space-y-2">
        {renderConversionItem(conversionsData.repairToCheck)}
        {renderConversionItem(conversionsData.repairToSale)}
      </div>
    </div>
  );
};
