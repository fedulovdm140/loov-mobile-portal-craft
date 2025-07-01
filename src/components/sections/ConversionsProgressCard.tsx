
import { Percent } from "lucide-react";

interface ConversionsData {
  repairToCheck: {
    rate: number;
    label: string;
    target: number;
  };
  repairToSale: {
    rate: number;
    label: string;
    target: number;
  };
}

interface ConversionsProgressCardProps {
  conversionsData: ConversionsData;
}

export const ConversionsProgressCard = ({ conversionsData }: ConversionsProgressCardProps) => {
  const renderConversionItem = (data: ConversionsData['repairToCheck']) => {
    const targetProgress = Math.round(data.rate / data.target * 100);
    
    return (
      <div className="bg-white rounded p-1.5 border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-medium text-gray-700">{data.label}</span>
          <span className="text-xs font-bold text-gray-900">{data.rate}%</span>
        </div>
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-700"
            style={{ width: `${Math.min(targetProgress, 100)}%` }}
          />
        </div>
        <div className="text-[9px] text-gray-500 mt-0.5">цель {data.target}%</div>
      </div>
    );
  };

  return (
    <div className="bg-blue-50 rounded-md p-2 border border-blue-200">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
          <Percent className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs font-bold text-blue-800">Конверсии</span>
      </div>
      
      <div className="space-y-1.5">
        {renderConversionItem(conversionsData.repairToCheck)}
        {renderConversionItem(conversionsData.repairToSale)}
      </div>
    </div>
  );
};
