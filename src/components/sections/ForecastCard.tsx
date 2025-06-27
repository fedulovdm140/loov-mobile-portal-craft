
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Target, Calendar } from "lucide-react";

export const ForecastCard = () => {
  // Mock data - these would come from API in real app
  const monthlyTarget = 300000;
  const closedRevenueMonth = 180000;
  const expectedRevenue = 80000;
  const dailyTarget = 25000;
  const closedRevenueToday = 15000;
  
  const monthlyProgress = Math.round((closedRevenueMonth / monthlyTarget) * 100);
  const monthlyForecast = Math.round(((closedRevenueMonth + expectedRevenue) / monthlyTarget) * 100);
  const dailyProgress = Math.round((closedRevenueToday / dailyTarget) * 100);

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-purple-600" />
          </div>
          Прогноз
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Monthly Forecast */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">Прогноз на месяц</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Факт: {Math.round(closedRevenueMonth/1000)}k ₽</span>
              <span>План: {Math.round(monthlyTarget/1000)}k ₽</span>
            </div>
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-purple-600 font-medium">Выполнено: {monthlyProgress}%</span>
              <span className="text-indigo-600 font-medium">Прогноз: {monthlyForecast}%</span>
            </div>
          </div>
        </div>

        {/* Daily Plan vs Fact */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">План на день</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Факт: {Math.round(closedRevenueToday/1000)}k ₽</span>
              <span>План: {Math.round(dailyTarget/1000)}k ₽</span>
            </div>
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
            </div>
            <div className="text-center">
              <span className={`text-sm font-bold ${dailyProgress >= 100 ? 'text-blue-600' : dailyProgress >= 80 ? 'text-green-600' : 'text-orange-600'}`}>
                {dailyProgress}% выполнено
              </span>
            </div>
          </div>
        </div>

        {/* Expected Revenue Info */}
        <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Ожидаемая выручка</span>
            <span className="text-lg font-bold text-amber-600">{Math.round(expectedRevenue/1000)}k ₽</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
