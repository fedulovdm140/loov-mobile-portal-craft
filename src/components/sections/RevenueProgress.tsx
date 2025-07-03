
import { DollarSign } from "lucide-react";

interface RevenueProgressProps {
  dailyRevenue: number;
  dailyTarget: number;
  dailyProgress: number;
}

export const RevenueProgress = ({ dailyRevenue, dailyTarget, dailyProgress }: RevenueProgressProps) => {
  return (
    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
            <DollarSign className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Дневная выручка</div>
            <div className="text-xs text-gray-600">от плана</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
          <div className="text-sm text-gray-600">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
      <div className="h-2 bg-green-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 rounded-full transition-all duration-700" 
          style={{ width: `${Math.min(dailyProgress, 100)}%` }}
        />
      </div>
    </div>
  );
};
