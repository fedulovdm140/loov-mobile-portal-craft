
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
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-2 px-3 pt-3">
        <CardTitle className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <div className="w-5 h-5 bg-purple-600 rounded-md flex items-center justify-center">
            <BarChart3 className="w-2.5 h-2.5 text-white" />
          </div>
          <span>Закрытые сделки</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-3 pt-0 pb-3">
        {/* Forecast Achievement */}
        <div className="bg-purple-50 rounded-lg p-2.5 border border-purple-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
                <Target className="w-2.5 h-2.5 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-purple-800">Прогноз плана</div>
                <div className="text-[10px] text-purple-600 mt-0.5">Ожидаемое выполнение</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-purple-700">{monthlyForecast}%</div>
              <div className="text-[10px] text-purple-600 font-medium">{forecastTotal.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>

        {/* Daily & Monthly Progress */}
        <div className="grid grid-cols-2 gap-3">
          {/* Daily Progress */}
          <div className="bg-blue-50 rounded-lg p-2.5 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                <Calendar className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-blue-800">Сегодня</span>
            </div>
            <div className="text-center mb-2">
              <div className="text-xl font-bold text-blue-700">{dailyProgress}%</div>
              <div className="text-[10px] text-blue-600 font-medium">от плана</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-blue-600 font-medium">
                <span>{closedRevenueToday.toLocaleString('ru-RU')} ₽</span>
                <span>{dailyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-700" 
                  style={{ width: `${Math.min(dailyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-indigo-50 rounded-lg p-2.5 border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-indigo-600 rounded flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-indigo-800">Месяц</span>
            </div>
            <div className="text-center mb-2">
              <div className="text-xl font-bold text-indigo-700">{monthlyProgress}%</div>
              <div className="text-[10px] text-indigo-600 font-medium">выполнено</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-indigo-600 font-medium">
                <span>{closedRevenueMonth.toLocaleString('ru-RU')} ₽</span>
                <span>{monthlyTarget.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full transition-all duration-700" 
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
