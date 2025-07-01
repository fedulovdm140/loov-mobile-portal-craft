
import { Percent } from "lucide-react";
import { CircularProgressIndicator } from "./CircularProgressIndicator";

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

interface ConversionsProgressCardProps {
  conversionsData: ConversionsData;
}

export const ConversionsProgressCard = ({ conversionsData }: ConversionsProgressCardProps) => {
  return (
    <div className="bg-orange-50 rounded-lg p-2.5 border border-orange-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-orange-600 rounded flex items-center justify-center">
          <Percent className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs font-bold text-orange-800">Конверсии</span>
      </div>
      <div className="space-y-2">
        <CircularProgressIndicator 
          rate={conversionsData.repairToCheck.rate} 
          label={conversionsData.repairToCheck.label} 
          color="#16a34a"
          change={conversionsData.repairToCheck.change}
          isPositive={conversionsData.repairToCheck.isPositive}
        />
        <CircularProgressIndicator 
          rate={conversionsData.repairToSale.rate} 
          label={conversionsData.repairToSale.label} 
          color="#2563eb"
          change={conversionsData.repairToSale.change}
          isPositive={conversionsData.repairToSale.isPositive}
        />
      </div>
    </div>
  );
};
