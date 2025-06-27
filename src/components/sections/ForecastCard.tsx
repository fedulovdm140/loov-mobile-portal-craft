
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ForecastCard = () => {
  // Mock data - these would come from API in real app
  const monthlyTarget = 300000;
  const closedRevenueMonth = 180000;
  const expectedRevenue = 80000;
  const dailyTarget = 25000;
  const closedRevenueToday = 15000;
  
  const monthlyForecast = Math.round(((closedRevenueMonth + expectedRevenue) / monthlyTarget) * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          📈 Прогноз
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Monthly Forecast with Circular Progress */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-sm font-medium text-gray-600">Прогноз выполнения плана</span>
            <div className="text-xs text-gray-500">на месяц</div>
          </div>
          <div className="relative flex items-center justify-center">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(79, 70, 229, 0.1)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#4F46E5"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${monthlyForecast * 2.51} 251`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold text-indigo-600">{monthlyForecast}%</span>
            </div>
          </div>
        </div>

        {/* Monthly Plan vs Fact */}
        <div className="space-y-1">
          <span className="text-sm font-medium text-gray-600">План / Факт выручка (месяц)</span>
          <div className="text-lg font-semibold text-gray-900">
            {Math.round(monthlyTarget/1000)}k ₽ / {Math.round(closedRevenueMonth/1000)}k ₽
          </div>
        </div>

        {/* Daily Plan vs Fact */}
        <div className="space-y-1">
          <span className="text-sm font-medium text-gray-600">План / Факт (день, закрытые)</span>
          <div className="text-lg font-semibold text-emerald-600">
            {Math.round(dailyTarget/1000)}k ₽ / {Math.round(closedRevenueToday/1000)}k ₽
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
