
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
    <Card className="bg-white border border-gray-200">
      <CardHeader className="pb-1 sm:pb-3 px-2 sm:px-4 pt-2 sm:pt-4">
        <CardTitle className="text-xs sm:text-base font-bold text-gray-900 flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-blue-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <span>Закрытые сделки</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1.5 sm:space-y-3 px-2 sm:px-4 pt-0 pb-2 sm:pb-4">
        {/* Forecast Achievement */}
        <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-500 rounded-lg flex items-center justify-center">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-purple-900">Прогноз плана</div>
                <div className="text-xs text-purple-700">Ожидаемое выполнение</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold text-purple-900">{monthlyForecast}%</div>
              <div className="text-xs text-purple-700 font-medium">{forecastTotal.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>

        {/* Daily & Monthly Progress */}
        <div className="grid grid-cols-2 gap-2">
          {/* Daily Progress */}
          <div className="bg-white rounded-lg p-2 border border-gray-200">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                <Calendar className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-gray-900">Сегодня</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-600 font-medium">
                <span>{closedRevenueToday.toLocaleString('ru-RU')} ₽</span>
                <span>{dailyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-500 rounded-full transition-all duration-700" 
                  style={{ width: `${Math.min(dailyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-white rounded-lg p-2 border border-gray-200">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-gray-900">Месяц</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-600 font-medium">
                <span>{closedRevenueMonth.toLocaleString('ru-RU')} ₽</span>
                <span>{monthlyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-700" 
                  style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
