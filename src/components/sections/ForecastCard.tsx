
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, Target } from "lucide-react";

export const ForecastCard = () => {
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
      <CardHeader className="pb-1 px-2 pt-2">
        <CardTitle className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
          <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
            <BarChart3 className="w-2 h-2 text-white" />
          </div>
          <span>Закрытые сделки</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-2 pt-0 pb-2">
        <div className="bg-purple-50 rounded-md p-2 border border-purple-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
                <Target className="w-2.5 h-2.5 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-purple-800">Прогноз плана</div>
                <div className="text-[10px] text-purple-600">Ожидаемое выполнение</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-purple-700">{monthlyForecast}%</div>
              <div className="text-[10px] text-purple-600 font-medium">{forecastTotal.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 rounded-md p-2 border border-blue-200">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3 h-3 bg-blue-600 rounded flex items-center justify-center">
                <Calendar className="w-2 h-2 text-white" />
              </div>
              <span className="text-[10px] font-bold text-blue-800">Сегодня</span>
            </div>
            <div className="text-center mb-1">
              <div className="text-sm font-bold text-blue-700">{dailyProgress}%</div>
              <div className="text-[9px] text-blue-600">{closedRevenueToday.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div className="h-1 bg-blue-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-700" 
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-indigo-50 rounded-md p-2 border border-indigo-200">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3 h-3 bg-indigo-600 rounded flex items-center justify-center">
                <BarChart3 className="w-2 h-2 text-white" />
              </div>
              <span className="text-[10px] font-bold text-indigo-800">Месяц</span>
            </div>
            <div className="text-center mb-1">
              <div className="text-sm font-bold text-indigo-700">{monthlyProgress}%</div>
              <div className="text-[9px] text-indigo-600">{closedRevenueMonth.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div className="h-1 bg-indigo-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-700" 
                style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
