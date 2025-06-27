
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
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-1 px-2.5">
        <CardTitle className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
            <User className="w-2.5 h-2.5 text-purple-600" />
          </div>
          <span className="truncate">Зарплата</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1.5 px-2.5 pt-0 pb-2.5">
        {/* Current Salary */}
        <div className="bg-purple-50 rounded-lg p-1.5 border border-purple-100">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-purple-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-purple-800">Текущая</span>
            </div>
            <span className="text-sm font-bold text-purple-700">{currentSalary.toLocaleString('ru-RU')} ₽</span>
          </div>
          <div className="text-xs text-purple-600 text-center">
            Оклад {baseSalary.toLocaleString('ru-RU')} ₽ + бонус {bonusAmount.toLocaleString('ru-RU')} ₽
          </div>
        </div>

        {/* Monthly Forecast */}
        <div className="bg-indigo-50 rounded-lg p-1.5 border border-indigo-100">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-indigo-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-indigo-800">Прогноз</span>
            </div>
            <span className="text-sm font-bold text-indigo-700">{monthlyForecast.toLocaleString('ru-RU')} ₽</span>
          </div>
          
          <div className="space-y-0.5">
            <div className="flex justify-between text-xs text-indigo-600">
              <span>{currentSalary.toLocaleString('ru-RU')} ₽</span>
              <span>{salaryProgress}%</span>
            </div>
            <div className="h-1 bg-indigo-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(salaryProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Forecast Bonus */}
        <div className="bg-green-50 rounded-lg p-1.5 border border-green-100">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-green-800">Потенциал</span>
            <span className="text-sm font-bold text-green-700">+{(forecastBonus - bonusAmount).toLocaleString('ru-RU')} ₽</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
