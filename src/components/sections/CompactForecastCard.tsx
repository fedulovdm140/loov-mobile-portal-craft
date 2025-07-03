import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Eye } from "lucide-react";

export const CompactForecastCard = () => {
  // Mock data - these would come from API in real app
  const monthlyTarget = 300000;
  const closedRevenueMonth = 180000;
  const expectedClosedRevenue = 80000;
  
  const monthlyProgress = Math.round(closedRevenueMonth / monthlyTarget * 100);
  const monthlyForecast = Math.round((closedRevenueMonth + expectedClosedRevenue) / monthlyTarget * 100);
  const forecastTotal = closedRevenueMonth + expectedClosedRevenue;

  // Optics sales data
  const opticsData = [{
    category: "Оправы",
    quantity: 4,
    amount: 10000
  }, {
    category: "Линзы",
    quantity: 4,
    amount: 5000
  }];

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-1 sm:pb-3 px-2 sm:px-4 pt-2 sm:pt-4">
        <CardTitle className="text-xs sm:text-base font-bold text-gray-800 flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
            <BarChart3 className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <span>Прогноз и продажи</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1.5 sm:space-y-3 px-2 sm:px-4 pt-0 pb-2 sm:pb-4">
        {/* Forecast and Monthly Progress */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {/* Monthly Forecast */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50/50 rounded-lg p-2 sm:p-3 border border-purple-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-purple-800">Прогноз</span>
            </div>
            <div className="text-center mb-1.5">
              <div className="text-base sm:text-lg font-bold text-purple-700">{monthlyForecast}%</div>
              <div className="text-[10px] sm:text-xs text-purple-600">{forecastTotal.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50/50 rounded-lg p-2 sm:p-3 border border-indigo-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-indigo-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-indigo-800">Месяц</span>
            </div>
            <div className="text-center mb-1.5">
              <div className="text-base sm:text-lg font-bold text-indigo-700">{monthlyProgress}%</div>
              <div className="text-[10px] sm:text-xs text-indigo-600">{closedRevenueMonth.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full transition-all duration-700" 
                style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Sales Data */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 rounded-lg p-2 sm:p-3 border border-blue-200/50 shadow-sm">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-lg flex items-center justify-center">
              <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-blue-800">Продажи сегодня</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {opticsData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-sm sm:text-base font-bold text-blue-700">{item.quantity}</div>
                <div className="text-[10px] sm:text-xs text-blue-600 font-medium">{item.category}</div>
                <div className="text-[10px] sm:text-xs text-blue-500">{Math.round(item.amount / item.quantity).toLocaleString('ru-RU')} ₽</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};