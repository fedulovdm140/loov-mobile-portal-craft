
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
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-3 h-3 text-purple-600" />
          </div>
          По закрытым сделкам
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {/* Top Row - Monthly Metrics */}
        <div className="grid grid-cols-2 gap-2">
          {/* Monthly Progress */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-2 border border-indigo-100">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-indigo-600" />
                <span className="text-xs font-medium text-indigo-800">Месяц факт</span>
              </div>
              <span className="text-sm font-bold text-indigo-700">{monthlyProgress}%</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-indigo-600">
                <span>{Math.round(closedRevenueMonth/1000)}k ₽</span>
                <span>{Math.round(monthlyTarget/1000)}k план</span>
              </div>
              <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Monthly Forecast */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-2 border border-purple-100">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <Target className="w-3 h-3 text-purple-600" />
                <span className="text-xs font-medium text-purple-800">Прогноз</span>
              </div>
              <span className="text-sm font-bold text-purple-700">{monthlyForecast}%</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-purple-600">
                <span>{Math.round((closedRevenueMonth + expectedClosedRevenue)/1000)}k ₽</span>
                <span>+{Math.round(expectedClosedRevenue/1000)}k ожид</span>
              </div>
              <div className="h-1.5 bg-purple-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(monthlyForecast, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Daily Progress */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-2 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-blue-600" />
              <span className="text-xs font-medium text-blue-800">План/факт день</span>
            </div>
            <span className="text-sm font-bold text-blue-700">{dailyProgress}%</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-blue-600">
              <span>Факт: {Math.round(closedRevenueToday/1000)}k ₽</span>
              <span>План: {Math.round(dailyTarget/1000)}k ₽</span>
            </div>
            <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
              {dailyProgress > 100 && (
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  style={{ width: '100%' }}
                />
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
