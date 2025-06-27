
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
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-0.5 px-2">
        <CardTitle className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-2.5 h-2.5 text-purple-600" />
          </div>
          <span className="truncate">Закрытые сделки</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 px-2 pt-0 pb-2">
        {/* Top Row - Прогноз выполнения плана */}
        <div className="bg-purple-50 rounded-lg p-1 border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3 text-purple-600 flex-shrink-0" />
              <span className="text-xs font-medium text-purple-800">Прогноз плана</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-purple-700">{monthlyForecast}%</div>
              <div className="text-xs text-purple-600">{forecastTotal.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>

        {/* Bottom Row - День и Месяц */}
        <div className="grid grid-cols-2 gap-1">
          {/* Daily Progress */}
          <div className="bg-blue-50 rounded-lg p-1 border border-blue-100">
            <div className="flex items-center gap-1 mb-0.5">
              <Calendar className="w-3 h-3 text-blue-600 flex-shrink-0" />
              <span className="text-xs font-medium text-blue-700">День</span>
            </div>
            <div className="text-center mb-0.5">
              <span className="text-sm font-semibold text-blue-700">{dailyProgress}%</span>
            </div>
            <div className="space-y-0.5">
              <div className="flex justify-between text-xs text-blue-600">
                <span>{closedRevenueToday.toLocaleString('ru-RU')} ₽</span>
                <span>{dailyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1 bg-blue-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                  style={{ width: `${Math.min(dailyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="rounded-lg p-1 border border-indigo-100 bg-indigo-100">
            <div className="flex items-center gap-1 mb-0.5">
              <TrendingUp className="w-3 h-3 text-indigo-600 flex-shrink-0" />
              <span className="text-xs font-medium text-indigo-700">Месяц</span>
            </div>
            <div className="text-center mb-0.5">
              <span className="text-sm font-semibold text-indigo-700">{monthlyProgress}%</span>
            </div>
            <div className="space-y-0.5">
              <div className="flex justify-between text-xs text-indigo-600">
                <span>{closedRevenueMonth.toLocaleString('ru-RU')} ₽</span>
                <span>{monthlyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1 bg-indigo-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 rounded-full transition-all duration-500" 
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
