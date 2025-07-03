
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Calendar, Target } from "lucide-react";

export const ForecastCard = () => {
  // Mock data - these would come from API in real app
  const monthlyTarget = 300000;
  const closedRevenueMonth = 180000;
  const expectedClosedRevenue = 80000;
  const dailyTarget = 25000;
  const closedRevenueToday = 15000;

  const monthlyProgress = Math.round(closedRevenueMonth / monthlyTarget * 100);
  const monthlyForecast = Math.round((closedRevenueMonth + expectedClosedRevenue) / monthlyTarget * 100);
  const dailyProgress = Math.round(closedRevenueToday / dailyTarget * 100);
  const forecastTotal = closedRevenueMonth + expectedClosedRevenue;

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-1 sm:pb-3 px-2 sm:px-4 pt-2 sm:pt-4">
        <CardTitle className="text-xs sm:text-base font-bold text-gray-800 flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
            <BarChart3 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <span>Закрытые сделки</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3 px-2 sm:px-4 pt-0 pb-2 sm:pb-4">
        {/* Main Forecast Achievement */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50/50 rounded-lg p-2 sm:p-3 border border-purple-200/50 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-purple-800">Прогноз плана</div>
                <div className="text-xs sm:text-sm text-purple-600">{forecastTotal.toLocaleString('ru-RU')} ₽</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-bold text-purple-700">{monthlyForecast}%</div>
            </div>
          </div>
        </div>

        {/* Compact Daily & Monthly Stats */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {/* Daily Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 rounded-lg p-2 sm:p-3 border border-blue-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-blue-800">Сегодня</span>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-blue-700">{dailyProgress}%</div>
              <div className="text-xs sm:text-sm text-blue-600">{closedRevenueToday.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>

          {/* Monthly Stats */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50/50 rounded-lg p-2 sm:p-3 border border-indigo-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-indigo-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-indigo-800">Месяц</span>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-indigo-700">{monthlyProgress}%</div>
              <div className="text-xs sm:text-sm text-indigo-600">{closedRevenueMonth.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
