import { DollarSign } from "lucide-react";

interface RevenueProgressProps {
  dailyRevenue: number;
  dailyTarget: number;
  dailyProgress: number;
}

export const RevenueProgress = ({ dailyRevenue, dailyTarget, dailyProgress }: RevenueProgressProps) => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-lg p-2 sm:p-3 border border-green-200/50 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-lg flex items-center justify-center">
            <DollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-green-800">Дневная выручка</div>
            <div className="text-xs sm:text-sm text-green-600">{dailyTarget.toLocaleString('ru-RU')} ₽ план</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg sm:text-xl font-bold text-green-700">{dailyProgress}%</div>
          <div className="text-xs sm:text-sm text-green-600">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
    </div>
  );
};