
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
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-sm font-bold text-gray-800 flex items-center gap-2.5">
          <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
            <User className="w-3.5 h-3.5 text-white" />
          </div>
          <span>Зарплата</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-4 pt-0 pb-4">
        {/* Current Salary */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50/50 rounded-xl p-3 border border-emerald-200/50 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-800">Текущая зарплата</div>
                <div className="text-[10px] text-emerald-600 mt-0.5">За текущий период</div>
              </div>
            </div>
            <div className="text-xl font-bold text-emerald-700">{currentSalary.toLocaleString('ru-RU')} ₽</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-emerald-600 bg-emerald-100/50 rounded-lg px-2 py-1 inline-block">
              Оклад {baseSalary.toLocaleString('ru-RU')} ₽ + бонус {bonusAmount.toLocaleString('ru-RU')} ₽
            </div>
          </div>
        </div>

        {/* Forecast & Potential */}
        <div className="grid grid-cols-2 gap-3">
          {/* Monthly Forecast */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-xl p-3 border border-blue-200/50 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
                <TrendingUp className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-blue-800">Прогноз</span>
            </div>
            <div className="text-center mb-2">
              <div className="text-lg font-bold text-blue-700">{monthlyForecast.toLocaleString('ru-RU')} ₽</div>
              <div className="text-[10px] text-blue-600 font-medium">к концу месяца</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-blue-600 font-medium">
                <span>{salaryProgress}%</span>
                <span>выполнено</span>
              </div>
              <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(salaryProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Potential Bonus */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl p-3 border border-green-200/50 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-green-500 rounded-md flex items-center justify-center">
                <DollarSign className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-bold text-green-800">Потенциал</span>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-700">+{(forecastBonus - bonusAmount).toLocaleString('ru-RU')} ₽</div>
              <div className="text-[10px] text-green-600 font-medium">дополнительно</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
