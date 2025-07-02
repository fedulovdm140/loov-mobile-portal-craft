import { Eye } from "lucide-react";

interface OpticsData {
  category: string;
  quantity: number;
  amount: number;
}

interface SalesTodayDisplayProps {
  opticsData: OpticsData[];
}

export const SalesTodayDisplay = ({ opticsData }: SalesTodayDisplayProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-lg p-2 sm:p-3 border border-blue-200/50 shadow-sm">
      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-lg flex items-center justify-center">
          <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
        </div>
        <span className="text-xs sm:text-sm font-bold text-blue-800">Продажи</span>
      </div>
      <div className="space-y-0.5 sm:space-y-1">
        {opticsData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-blue-700 w-5 sm:w-6 text-center bg-blue-100 rounded px-0.5 sm:px-1">{item.quantity}</span>
              <span className="text-[10px] sm:text-xs text-blue-600 font-medium">{item.category}</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-blue-700">{item.amount.toLocaleString('ru-RU')} ₽</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-0.5 sm:pt-1 border-t border-blue-200/50">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm font-bold text-blue-800 w-5 sm:w-6 text-center bg-blue-200 rounded px-0.5 sm:px-1">{opticsData.reduce((sum, item) => sum + item.quantity, 0)}</span>
            <span className="text-[10px] sm:text-xs font-bold text-blue-800">Всего</span>
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-blue-900">{opticsData.reduce((sum, item) => sum + item.amount, 0).toLocaleString('ru-RU')} ₽</span>
        </div>
      </div>
    </div>
  );
};