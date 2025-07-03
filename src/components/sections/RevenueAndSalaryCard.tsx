
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Target } from "lucide-react";

export const RevenueAndSalaryCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const currentSalary = 45000;
  const salaryForecast = 52000;
  
  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);
  const salaryProgress = Math.round(currentSalary / salaryForecast * 100);

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-3">
          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
            <DollarSign className="w-4 h-4 text-white" />
          </div>
          <span>Выручка и зарплата</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-4 pt-0 pb-4">
        {/* Daily Revenue */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-xl p-4 border border-green-200/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-green-800">Выручка сегодня</div>
                <div className="text-xs text-green-600">{dailyProgress}% от плана</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-green-700">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
              <div className="text-sm text-green-600">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
          <div className="h-2 bg-green-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-700" 
              style={{ width: `${Math.min(dailyProgress, 100)}%` }}
            />
          </div>
        </div>

        {/* Salary */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl p-4 border border-blue-200/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                <Target className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-blue-800">Зарплата</div>
                <div className="text-xs text-blue-600">{salaryProgress}% от прогноза</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-blue-700">{currentSalary.toLocaleString('ru-RU')} ₽</div>
              <div className="text-sm text-blue-600">прогноз {salaryForecast.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
          <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-700"
              style={{ width: `${Math.min(salaryProgress, 100)}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
