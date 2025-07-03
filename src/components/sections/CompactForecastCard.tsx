
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, TrendingUp } from "lucide-react";

export const CompactForecastCard = () => {
  // Mock data - these would come from API in real app
  const monthlyTarget = 300000;
  const closedRevenueMonth = 180000;
  const expectedClosedRevenue = 80000;
  
  const monthlyProgress = Math.round(closedRevenueMonth / monthlyTarget * 100);
  const monthlyForecast = Math.round((closedRevenueMonth + expectedClosedRevenue) / monthlyTarget * 100);
  const forecastTotal = closedRevenueMonth + expectedClosedRevenue;

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-3">
          <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
          <span>Прогноз продаж</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-4 pt-0 pb-4">
        {/* Main Forecast */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50/50 rounded-xl p-4 border border-purple-200/50 shadow-sm text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-800">Прогноз выполнения плана</span>
          </div>
          <div className="text-3xl font-bold text-purple-700 mb-1">{monthlyForecast}%</div>
          <div className="text-sm text-purple-600">{forecastTotal.toLocaleString('ru-RU')} ₽ из {monthlyTarget.toLocaleString('ru-RU')} ₽</div>
        </div>

        {/* Progress Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-lg p-3 border border-green-200/50 text-center">
            <Calendar className="w-4 h-4 text-green-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-700">{monthlyProgress}%</div>
            <div className="text-xs text-green-600">уже закрыто</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-lg p-3 border border-orange-200/50 text-center">
            <BarChart3 className="w-4 h-4 text-orange-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-orange-700">{expectedClosedRevenue.toLocaleString('ru-RU')} ₽</div>
            <div className="text-xs text-orange-600">ожидается</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
