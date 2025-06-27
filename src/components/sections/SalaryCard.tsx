
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, User, Target } from "lucide-react";

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
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          Зарплата менеджера
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Current Salary - Main highlight */}
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 p-4 rounded-2xl border border-purple-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-800">Текущая зарплата</h3>
                <p className="text-sm text-purple-600">За текущий период</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-700">{currentSalary.toLocaleString()} ₽</div>
              <div className="text-sm text-purple-600">оклад + бонус</div>
            </div>
          </div>
        </div>

        {/* Salary Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Оклад</span>
              <span className="text-lg font-bold text-gray-800">{baseSalary.toLocaleString()} ₽</span>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-green-700">Текущий бонус</span>
              <span className="text-lg font-bold text-green-700">+{bonusAmount.toLocaleString()} ₽</span>
            </div>
          </div>
        </div>

        {/* Monthly Forecast */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-200">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold text-indigo-800">Прогноз за месяц</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <span className="text-2xl font-bold text-indigo-700">{monthlyForecast.toLocaleString()} ₽</span>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600" />
              <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                salaryProgress >= 100 ? 'bg-green-100 text-green-700' : 
                salaryProgress >= 80 ? 'bg-yellow-100 text-yellow-700' : 
                'bg-orange-100 text-orange-700'
              }`}>
                {salaryProgress}% от цели
              </span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Текущий: {currentSalary.toLocaleString()} ₽</span>
              <span>Цель: {monthlyForecast.toLocaleString()} ₽</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-700 ${
                  salaryProgress >= 100 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                  salaryProgress >= 80 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                  'bg-gradient-to-r from-orange-400 to-orange-600'
                }`}
                style={{ width: `${Math.min(salaryProgress, 100)}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Forecast Bonus */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h4 className="text-lg font-bold text-blue-800">Прогноз бонуса</h4>
              <p className="text-sm text-blue-600">Ожидаемая доплата</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-blue-700">{forecastBonus.toLocaleString()} ₽</div>
              <div className="text-sm text-blue-600">
                {forecastBonus > bonusAmount ? `+${(forecastBonus - bonusAmount).toLocaleString()} ₽` : 'достигнуто'}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
