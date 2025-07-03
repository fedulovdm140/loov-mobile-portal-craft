import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, AlertTriangle } from "lucide-react";

export const UnifiedMetricsCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const currentSalary = 45000;
  const monthlyForecast = 52000;
  const openDealsCount = 8;
  const openDealsSum = 45000;

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);
  const salaryProgress = Math.round(currentSalary / monthlyForecast * 100);

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-1 sm:pb-3 px-2 sm:px-4 pt-2 sm:pt-4">
        <CardTitle className="text-xs sm:text-base font-bold text-gray-800 flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
            <TrendingUp className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <span>Выручка и зарплата</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1.5 sm:space-y-3 px-2 sm:px-4 pt-0 pb-2 sm:pb-4">
        {/* Critical Alert - Unclosed Deals */}
        {openDealsCount > 0 && (
          <div className="bg-gradient-to-r from-red-50 to-orange-50/50 rounded-lg p-2 sm:p-3 border border-red-200/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-red-800">Незакрытые сделки</div>
                  <div className="text-[10px] sm:text-xs text-red-600">{openDealsCount} сделок</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm sm:text-base font-bold text-red-700">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
              </div>
            </div>
          </div>
        )}

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {/* Daily Revenue */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-lg p-2 sm:p-3 border border-green-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-green-800">Сегодня</span>
            </div>
            <div className="text-center mb-1.5">
              <div className="text-base sm:text-lg font-bold text-green-700">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
              <div className="text-[10px] sm:text-xs text-green-600">{dailyProgress}% от плана</div>
            </div>
            <div className="h-1.5 bg-green-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-700" 
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
            </div>
          </div>

          {/* Current Salary */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50/50 rounded-lg p-2 sm:p-3 border border-emerald-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Target className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-emerald-800">Зарплата</span>
            </div>
            <div className="text-center mb-1.5">
              <div className="text-base sm:text-lg font-bold text-emerald-700">{currentSalary.toLocaleString('ru-RU')} ₽</div>
              <div className="text-[10px] sm:text-xs text-emerald-600">{salaryProgress}% от прогноза</div>
            </div>
            <div className="h-1.5 bg-emerald-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-700"
                style={{ width: `${Math.min(salaryProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};