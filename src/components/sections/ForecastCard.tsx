
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

  return (
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-purple-600" />
          </div>
          Закрытые сделки
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {/* Top Row - Monthly Metrics */}
        <div className="grid grid-cols-2 gap-3">
          {/* Monthly Progress */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-3 border border-indigo-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-800">Месяц</span>
              </div>
              <span className="text-lg font-bold text-indigo-700">{monthlyProgress}%</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-indigo-600">
                <span>{Math.round(closedRevenueMonth/1000)}k факт</span>
                <span>{Math.round(monthlyTarget/1000)}k план</span>
              </div>
              <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Monthly Forecast */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-3 border border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-800">Прогноз</span>
              </div>
              <span className="text-lg font-bold text-purple-700">{monthlyForecast}%</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-purple-600">
                <span>{Math.round((closedRevenueMonth + expectedClosedRevenue)/1000)}k ожид</span>
                <span>+{Math.round(expectedClosedRevenue/1000)}k</span>
              </div>
              <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(monthlyForecast, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Daily Progress */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 border border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Сегодня</span>
            </div>
            <span className="text-lg font-bold text-blue-700">{dailyProgress}%</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-blue-600">
              <span>Факт: {Math.round(closedRevenueToday/1000)}k ₽</span>
              <span>План: {Math.round(dailyTarget/1000)}k ₽</span>
            </div>
            <div className="h-2.5 bg-blue-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
