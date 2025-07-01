
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, TrendingUp } from "lucide-react";

export const SalaryCard = () => {
  const currentSalary = 45000;
  const monthlyForecast = 52000;
  const baseSalary = 35000;
  const bonusAmount = currentSalary - baseSalary;
  const salaryProgress = Math.round(currentSalary / monthlyForecast * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-1 px-2 pt-2">
        <CardTitle className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
          <div className="w-4 h-4 bg-emerald-600 rounded flex items-center justify-center">
            <User className="w-2 h-2 text-white" />
          </div>
          <span>Зарплата</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-2 pt-0 pb-2">
        <div className="bg-emerald-50 rounded-md p-2 border border-emerald-200">
          <div className="flex items-center justify-between mb-1">
            <div>
              <div className="text-xs font-bold text-emerald-800">Текущая</div>
              <div className="text-[10px] text-emerald-600">Оклад + бонус</div>
            </div>
            <div className="text-lg font-bold text-emerald-700">{currentSalary.toLocaleString('ru-RU')} ₽</div>
          </div>
          <div className="text-[10px] text-emerald-600 bg-emerald-100 rounded px-2 py-0.5 text-center">
            {baseSalary.toLocaleString('ru-RU')} ₽ + {bonusAmount.toLocaleString('ru-RU')} ₽
          </div>
        </div>

        <div className="bg-blue-50 rounded-md p-2 border border-blue-200">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-3 h-3 bg-blue-600 rounded flex items-center justify-center">
              <TrendingUp className="w-2 h-2 text-white" />
            </div>
            <span className="text-[10px] font-bold text-blue-800">Прогноз: {monthlyForecast.toLocaleString('ru-RU')} ₽</span>
          </div>
          <div className="h-1 bg-blue-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-700"
              style={{ width: `${Math.min(salaryProgress, 100)}%` }}
            />
          </div>
          <div className="text-[9px] text-blue-600 mt-0.5">{salaryProgress}% выполнено</div>
        </div>
      </CardContent>
    </Card>
  );
};
