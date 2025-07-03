
import { DollarSign } from "lucide-react";

export const DailyMetricsCard = () => {
  // Mock data
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-[28px] font-semibold text-gray-900">Дневная выручка</h2>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-[24px] font-semibold text-gray-900 mb-1">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
        <div className="text-sm font-medium text-gray-600">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span>Прогресс</span>
          <span>{dailyProgress}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-700" 
            style={{ width: `${Math.min(dailyProgress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};
