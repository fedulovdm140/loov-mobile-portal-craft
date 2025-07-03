
import { Percent } from "lucide-react";

interface ConversionsData {
  repairToCheck: {
    rate: number;
    label: string;
    change: number;
    isPositive: boolean;
  };
  repairToSale: {
    rate: number;
    label: string;
    change: number;
    isPositive: boolean;
  };
}

interface ConversionsDisplayProps {
  conversionsData: ConversionsData;
}

export const ConversionsDisplay = ({ conversionsData }: ConversionsDisplayProps) => {
  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200">
      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-lg flex items-center justify-center">
          <Percent className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
        </div>
        <span className="text-xs sm:text-sm font-bold text-gray-900">Конверсии</span>
      </div>
      <div className="space-y-1.5 sm:space-y-2">
        <div className="text-center">
          <div className="text-base sm:text-lg font-bold text-green-500">{conversionsData.repairToCheck.rate}%</div>
          <div className="text-[10px] sm:text-xs text-gray-600">{conversionsData.repairToCheck.label}</div>
        </div>
        <div className="text-center">
          <div className="text-base sm:text-lg font-bold text-blue-500">{conversionsData.repairToSale.rate}%</div>
          <div className="text-[10px] sm:text-xs text-gray-600">{conversionsData.repairToSale.label}</div>
        </div>
      </div>
    </div>
  );
};
