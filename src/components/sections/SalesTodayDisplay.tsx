import { Eye } from "lucide-react";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MetricHelpIcon } from "@/components/ui/MetricHelpIcon";

interface OpticsData {
  category: string;
  quantity: number;
  amount: number;
}

interface SalesTodayDisplayProps {
  opticsData: OpticsData[];
}

export const SalesTodayDisplay = ({ opticsData }: SalesTodayDisplayProps) => {
  const [timeframe, setTimeframe] = useState<string>("day");

  // Mock data for month view - in real app this would come from API
  const monthOpticsData = [
    { category: "Оправы", quantity: 45, amount: 120000 },
    { category: "Линзы", quantity: 38, amount: 85000 }
  ];

  const currentData = timeframe === "day" ? opticsData : monthOpticsData;

  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200">
      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-lg flex items-center justify-center">
            <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-gray-900">Продажи</span>
          <MetricHelpIcon helpText="Отображает количество проданных товаров по категориям и их среднюю стоимость. Можно переключаться между данными за день и месяц." />
        </div>
        
        <ToggleGroup type="single" value={timeframe} onValueChange={(value) => value && setTimeframe(value)} size="sm">
          <ToggleGroupItem value="day" className="text-xs px-2 py-1 h-6">
            День
          </ToggleGroupItem>
          <ToggleGroupItem value="month" className="text-xs px-2 py-1 h-6">
            Месяц
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="flex justify-between items-center mb-1 sm:mb-1.5 text-[10px] sm:text-xs text-gray-600 font-medium">
        <span>Категория</span>
        <span>Средняя стоимость</span>
      </div>
      
      <div className="space-y-0.5 sm:space-y-1">
        {currentData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-blue-700 w-5 sm:w-6 text-center bg-blue-100 rounded px-0.5 sm:px-1">{item.quantity}</span>
              <span className="text-[10px] sm:text-xs text-gray-600 font-medium">{item.category}</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-gray-700">{Math.round(item.amount / item.quantity).toLocaleString('ru-RU')} ₽</span>
          </div>
        ))}
      </div>
    </div>
  );
};
