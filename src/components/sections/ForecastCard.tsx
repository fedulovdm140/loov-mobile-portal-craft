
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Target, Calendar, TrendingUp } from "lucide-react";

export const ForecastCard = () => {
  // Mock data - these would come from API in real app
  const monthlyTarget = 300000;
  const closedRevenueMonth = 180000;
  const expectedClosedRevenue = 80000; // Expected additional closed deals
  const dailyTarget = 25000;
  const closedRevenueToday = 15000;
  
  const monthlyProgress = Math.round((closedRevenueMonth / monthlyTarget) * 100);
  const monthlyForecast = Math.round(((closedRevenueMonth + expectedClosedRevenue) / monthlyTarget) * 100);
  const dailyProgress = Math.round((closedRevenueToday / dailyTarget) * 100);

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-purple-600" />
          </div>
          По закрытым сделкам
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Monthly Forecast - removed title */}
        <div className="space-y-2">
          <div className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Прогнозируемое выполнение</span>
              <span className={`text-xl font-bold ${monthlyForecast >= 100 ? 'text-green-600' : monthlyForecast >= 80 ? 'text-blue-600' : 'text-orange-600'}`}>
                {monthlyForecast}%
              </span>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              Ожидается: {Math.round((closedRevenueMonth + expectedClosedRevenue)/1000)}k ₽ из {Math.round(monthlyTarget/1000)}k ₽
            </div>
          </div>
        </div>

        {/* Monthly Plan vs Fact */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3 h-3 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-700">План/факт выручка по закрытым месяц</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Факт: {Math.round(closedRevenueMonth/1000)}k ₽</span>
              <span>План: {Math.round(monthlyTarget/1000)}k ₽</span>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
              />
              {monthlyProgress > 100 && (
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  style={{ width: '100%' }}
                />
              )}
            </div>
            <div className="text-center">
              <span className={`text-xs font-bold ${monthlyProgress >= 100 ? 'text-green-600' : monthlyProgress >= 80 ? 'text-indigo-600' : 'text-orange-600'}`}>
                {monthlyProgress}% выполнено
              </span>
            </div>
          </div>
        </div>

        {/* Daily Plan vs Fact */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">План/факт день по закрытым сделкам</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Факт: {Math.round(closedRevenueToday/1000)}k ₽</span>
              <span>План: {Math.round(dailyTarget/1000)}k ₽</span>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
              {dailyProgress > 100 && (
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  style={{ width: '100%' }}
                />
              )}
            </div>
            <div className="text-center">
              <span className={`text-xs font-bold ${dailyProgress >= 100 ? 'text-green-600' : dailyProgress >= 80 ? 'text-blue-600' : 'text-orange-600'}`}>
                {dailyProgress}% выполнено
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
