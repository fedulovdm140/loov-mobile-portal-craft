
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, User } from "lucide-react";

export const SalaryCard = () => {
  // Mock data - эти данные будут поступать из API в реальном приложении
  const currentSalary = 45000;
  const monthlyForecast = 52000;
  const baseSalary = 35000;
  const bonusAmount = currentSalary - baseSalary;
  const forecastBonus = monthlyForecast - baseSalary;
  
  const salaryProgress = Math.round((currentSalary / monthlyForecast) * 100);

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-purple-600" />
          </div>
          Зарплата менеджера
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Monthly Forecast */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 min-w-0">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-3 h-3 text-indigo-600" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-indigo-800 truncate">Прогноз за месяц</p>
              <p className="text-xs text-indigo-600 truncate">Оклад + бонус</p>
            </div>
          </div>
          <span className="text-lg sm:text-xl font-bold text-indigo-600 flex-shrink-0 ml-2">{monthlyForecast.toLocaleString()} ₽</span>
        </div>

        {/* Salary Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg min-w-0">
            <span className="text-sm text-gray-600 truncate flex-1">Оклад</span>
            <span className="text-sm font-semibold text-gray-800 flex-shrink-0 ml-2">{baseSalary.toLocaleString()} ₽</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg min-w-0">
            <span className="text-sm text-green-700 truncate flex-1">Бонус текущий</span>
            <span className="text-sm font-semibold text-green-700 flex-shrink-0 ml-2">{bonusAmount.toLocaleString()} ₽</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-2">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600 gap-2">
              <span className="truncate">Текущий: {currentSalary.toLocaleString()} ₽</span>
              <span className="truncate">Прогноз: {monthlyForecast.toLocaleString()} ₽</span>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min(salaryProgress, 100)}%` }} 
              />
            </div>
            <div className="text-center">
              <span className={`text-xs font-bold ${salaryProgress >= 100 ? 'text-indigo-600' : salaryProgress >= 80 ? 'text-purple-600' : 'text-orange-600'}`}>
                {salaryProgress}% от прогноза
              </span>
            </div>
          </div>
        </div>

        {/* Forecast Bonus */}
        <div className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
          <div className="flex justify-between items-center min-w-0">
            <span className="text-sm font-semibold text-purple-800 truncate flex-1">Прогноз бонуса</span>
            <span className="text-lg font-bold text-purple-600 flex-shrink-0 ml-2">{forecastBonus.toLocaleString()} ₽</span>
          </div>
          <p className="text-xs text-purple-600 mt-1 truncate">
            Потенциальная доплата: +{(forecastBonus - bonusAmount).toLocaleString()} ₽
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
