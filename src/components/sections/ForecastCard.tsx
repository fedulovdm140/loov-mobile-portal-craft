
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
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-sm font-bold text-gray-800 flex items-center gap-2.5">
          <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
            <BarChart3 className="w-3.5 h-3.5 text-white" />
          </div>
          <span>Закрытые сделки</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-4 pt-0 pb-4">
        {/* Forecast Achievement */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50/50 rounded-xl p-3 border border-purple-200/50 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                <Target className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-purple-800">Прогноз плана</div>
                <div className="text-[10px] text-purple-600 mt-0.5">Ожидаемое выполнение</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-purple-700">{monthlyForecast}%</div>
              <div className="text-xs text-purple-600 font-medium">{forecastTotal.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>

        {/* Daily & Monthly Progress */}
        <div className="grid grid-cols-2 gap-3">
          {/* Daily Progress */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 rounded-xl p-3 border border-blue-200/50 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
                <Calendar className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-blue-800">Сегодня</span>
            </div>
            <div className="text-center mb-2">
              <div className="text-2xl font-bold text-blue-700">{dailyProgress}%</div>
              <div className="text-[10px] text-blue-600 font-medium">от плана</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-blue-600 font-medium">
                <span>{closedRevenueToday.toLocaleString('ru-RU')} ₽</span>
                <span>{dailyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-700" 
                  style={{ width: `${Math.min(dailyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50/50 rounded-xl p-3 border border-indigo-200/50 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-indigo-500 rounded-md flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-indigo-800">Месяц</span>
            </div>
            <div className="text-center mb-2">
              <div className="text-2xl font-bold text-indigo-700">{monthlyProgress}%</div>
              <div className="text-[10px] text-indigo-600 font-medium">выполнено</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-indigo-600 font-medium">
                <span>{closedRevenueMonth.toLocaleString('ru-RU')} ₽</span>
                <span>{monthlyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full transition-all duration-700" 
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
