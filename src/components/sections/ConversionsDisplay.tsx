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
    <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-lg p-3 border border-orange-200/50 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 bg-orange-500 rounded-lg flex items-center justify-center">
          <Percent className="w-3 h-3 text-white" />
        </div>
        <span className="text-sm font-bold text-orange-800">Конверсии</span>
      </div>
      <div className="space-y-2">
        <div className="text-center">
          <div className="text-lg font-bold text-green-700">{conversionsData.repairToCheck.rate}%</div>
          <div className="text-xs text-gray-600">{conversionsData.repairToCheck.label}</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-700">{conversionsData.repairToSale.rate}%</div>
          <div className="text-xs text-gray-600">{conversionsData.repairToSale.label}</div>
        </div>
      </div>
    </div>
  );
};