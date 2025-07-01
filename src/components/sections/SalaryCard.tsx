
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
      <CardHeader className="pb-2 px-3 pt-3">
        <CardTitle className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <div className="w-5 h-5 bg-emerald-600 rounded-md flex items-center justify-center">
            <User className="w-2.5 h-2.5 text-white" />
          </div>
          <span>Зарплата</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-3 pt-0 pb-3">
        {/* Current Salary */}
        <div className="bg-emerald-50 rounded-lg p-2.5 border border-emerald-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-600 rounded flex items-center justify-center">
                <DollarSign className="w-2.5 h-2.5 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-800">Текущая зарплата</div>
                <div className="text-[10px] text-emerald-600 mt-0.5">За текущий период</div>
              </div>
            </div>
            <div className="text-xl font-bold text-emerald-700">{currentSalary.toLocaleString('ru-RU')} ₽</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-emerald-600 bg-emerald-100 rounded-lg px-2 py-1 inline-block">
              Оклад {baseSalary.toLocaleString('ru-RU')} ₽ + бонус {bonusAmount.toLocaleString('ru-RU')} ₽
            </div>
          </div>
        </div>

        {/* Forecast & Potential */}
        <div className="grid grid-cols-2 gap-3">
          {/* Monthly Forecast */}
          <div className="bg-blue-50 rounded-lg p-2.5 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
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
                  className="h-full bg-blue-600 rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(salaryProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Potential Bonus */}
          <div className="bg-green-50 rounded-lg p-2.5 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-green-600 rounded flex items-center justify-center">
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
