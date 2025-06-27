
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Target } from "lucide-react";

export const SalaryCard = () => {
  // Mock data - эти данные будут поступать из API в реальном приложении
  const currentSalary = 45000;
  const monthlyForecast = 52000;
  const baseSalary = 35000;
  const bonusAmount = currentSalary - baseSalary;
  
  const salaryProgress = Math.round((currentSalary / monthlyForecast) * 100);

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-purple-600" />
          Зарплата менеджера
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Current Salary */}
        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
          <div>
            <h3 className="font-semibold text-purple-800">Текущая зарплата</h3>
            <p className="text-sm text-purple-600">{baseSalary.toLocaleString()} ₽ + {bonusAmount.toLocaleString()} ₽ бонус</p>
          </div>
          <div className="text-2xl font-bold text-purple-700">{currentSalary.toLocaleString()} ₽</div>
        </div>

        {/* Monthly Forecast */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span className="font-semibold text-indigo-800">Прогноз за месяц</span>
            </div>
            <span className="text-xl font-bold text-indigo-700">{monthlyForecast.toLocaleString()} ₽</span>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Прогресс</span>
              <div className="flex items-center gap-1">
                <Target className="w-3 h-3 text-gray-500" />
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  salaryProgress >= 100 ? 'bg-green-100 text-green-700' : 
                  salaryProgress >= 80 ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-orange-100 text-orange-700'
                }`}>
                  {salaryProgress}%
                </span>
              </div>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                  salaryProgress >= 100 ? 'bg-green-500' :
                  salaryProgress >= 80 ? 'bg-yellow-500' :
                  'bg-orange-500'
                }`}
                style={{ width: `${Math.min(salaryProgress, 100)}%` }} 
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
