import { DollarSign } from "lucide-react";

interface RevenueProgressProps {
  dailyRevenue: number;
  dailyTarget: number;
  dailyProgress: number;
}

export const RevenueProgress = ({ dailyRevenue, dailyTarget, dailyProgress }: RevenueProgressProps) => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-lg p-3 border border-green-200/50 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
            <DollarSign className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-green-800">Дневная выручка</div>
            <div className="text-xs text-green-600 mt-0.5">{dailyProgress}% от плана</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-700">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
          <div className="text-sm text-green-600 font-medium">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
      <div className="h-2 bg-green-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-700" 
          style={{ width: `${Math.min(dailyProgress, 100)}%` }}
        />
      </div>
    </div>
  );
};