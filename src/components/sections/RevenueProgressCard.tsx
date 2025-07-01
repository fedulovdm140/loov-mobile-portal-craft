
import { DollarSign } from "lucide-react";

interface RevenueProgressCardProps {
  dailyRevenue: number;
  dailyTarget: number;
  dailyProgress: number;
}

export const RevenueProgressCard = ({ dailyRevenue, dailyTarget, dailyProgress }: RevenueProgressCardProps) => {
  return (
    <div className="bg-green-50 rounded-lg p-2.5 border border-green-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-600 rounded flex items-center justify-center">
            <DollarSign className="w-2.5 h-2.5 text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-green-800">Дневная выручка</div>
            <div className="text-[10px] text-green-600 mt-0.5">{dailyProgress}% от плана</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-700">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
          <div className="text-[10px] text-green-600 font-medium">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
      <div className="h-2 bg-green-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-600 rounded-full transition-all duration-700" style={{
          width: `${Math.min(dailyProgress, 100)}%`
        }} />
      </div>
    </div>
  );
};
