
import { TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const MonthlyForecastCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock data
  const monthlyTarget = 300000;
  const closedRevenueMonth = 180000;
  const expectedClosedRevenue = 80000;
  const monthlyProgress = Math.round(closedRevenueMonth / monthlyTarget * 100);
  const monthlyForecast = Math.round((closedRevenueMonth + expectedClosedRevenue) / monthlyTarget * 100);
  const forecastTotal = closedRevenueMonth + expectedClosedRevenue;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-[28px] font-semibold text-gray-900">Месячный прогноз</h2>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-[24px] font-semibold text-gray-900 mb-1">{monthlyForecast}%</div>
        <div className="text-sm font-medium text-gray-600">прогноз выполнения плана</div>
      </div>

      {/* Main Progress */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span>Текущий прогресс</span>
          <span>{monthlyProgress}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 rounded-full transition-all duration-700" 
            style={{ width: `${Math.min(monthlyProgress, 100)}%` }}
          />
        </div>
      </div>

      {/* Collapsible Details */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <span className="text-sm font-medium text-gray-700">Детали прогноза</span>
          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-semibold text-gray-900 mb-1">{closedRevenueMonth.toLocaleString('ru-RU')} ₽</div>
              <div className="text-xs font-medium text-gray-600">закрыто</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-semibold text-gray-900 mb-1">{expectedClosedRevenue.toLocaleString('ru-RU')} ₽</div>
              <div className="text-xs font-medium text-gray-600">ожидаемо</div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
