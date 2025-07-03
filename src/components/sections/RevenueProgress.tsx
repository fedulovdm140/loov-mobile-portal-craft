import { DollarSign } from "lucide-react";
import { MetricHelpIcon } from "@/components/ui/MetricHelpIcon";

interface RevenueProgressProps {
  dailyRevenue: number;
  dailyTarget: number;
  dailyProgress: number;
}
export const RevenueProgress = ({
  dailyRevenue,
  dailyTarget,
  dailyProgress
}: RevenueProgressProps) => {
  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200">
      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-lg flex items-center justify-center">
            <DollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <div className="text-xs sm:text-sm font-bold text-gray-900">Выручка по созданным</div>
              <MetricHelpIcon helpText="Показывает выручку от созданных заказов за текущий день в сравнении с дневным планом. Прогресс-бар отображает процент выполнения плана." />
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">{dailyProgress}% от плана</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-base sm:text-lg font-bold text-gray-900">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
          <div className="text-xs sm:text-sm text-gray-600 font-medium">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
      <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full transition-all duration-700" style={{
        width: `${Math.min(dailyProgress, 100)}%`
      }} />
      </div>
    </div>
  );
};
