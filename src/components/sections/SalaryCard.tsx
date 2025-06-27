
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, User } from "lucide-react";

export const SalaryCard = () => {
  // Mock data - эти данные будут поступать из API в реальном приложении
  const currentSalary = 45000;
  const monthlyForecast = 52000;
  const baseSalary = 35000;
  const bonusAmount = currentSalary - baseSalary;
  const forecastBonus = monthlyForecast - baseSalary;
  const salaryProgress = Math.round(currentSalary / monthlyForecast * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
            <User className="w-4 h-4 text-purple-600" />
          </div>
          Зарплата
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {/* Current Salary */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-3 border border-purple-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">Текущая</span>
            </div>
            <span className="text-lg font-bold text-purple-700">{Math.round(currentSalary/1000)}k ₽</span>
          </div>
          <div className="text-xs text-purple-600 text-center">
            Оклад {Math.round(baseSalary/1000)}k + бонус {Math.round(bonusAmount/1000)}k
          </div>
        </div>

        {/* Monthly Forecast */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-3 border border-indigo-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-800">Прогноз месяц</span>
            </div>
            <span className="text-lg font-bold text-indigo-700">{Math.round(monthlyForecast/1000)}k ₽</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-indigo-600">
              <span>Текущий: {Math.round(currentSalary/1000)}k</span>
              <span>{salaryProgress}%</span>
            </div>
            <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(salaryProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Forecast Bonus */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-semibold text-green-800">Прогноз бонуса</span>
            <span className="text-lg font-bold text-green-700">{Math.round(forecastBonus/1000)}k ₽</span>
          </div>
          <div className="text-xs text-green-600 text-center">
            Потенциал: +{Math.round((forecastBonus - bonusAmount)/1000)}k ₽
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
