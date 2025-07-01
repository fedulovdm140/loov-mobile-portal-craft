
import { Eye } from "lucide-react";

interface SalesItem {
  category: string;
  quantity: number;
  amount: number;
  target: number;
}

interface SalesTodayCardProps {
  opticsData: SalesItem[];
}

export const SalesTodayCard = ({ opticsData }: SalesTodayCardProps) => {
  const totalAmount = opticsData.reduce((sum, item) => sum + item.amount, 0);
  const totalTarget = opticsData.reduce((sum, item) => sum + item.target, 0);
  const targetProgress = Math.round(totalAmount / totalTarget * 100);

  return (
    <div className="bg-green-50 rounded-md p-2 border border-green-200">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-4 h-4 bg-green-600 rounded flex items-center justify-center">
          <Eye className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs font-bold text-green-800">Продажи сегодня</span>
      </div>
      
      <div className="bg-white rounded p-1.5 mb-1.5 border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-green-700">{totalAmount.toLocaleString('ru-RU')} ₽</span>
          <span className="text-[10px] text-gray-600">{targetProgress}% от цели</span>
        </div>
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-600 rounded-full transition-all duration-700"
            style={{ width: `${Math.min(targetProgress, 100)}%` }}
          />
        </div>
      </div>

      <div className="space-y-0.5">
        {opticsData.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-[10px]">
            <div className="flex items-center gap-1">
              <span className="font-bold text-green-700 w-3 text-center bg-green-100 rounded px-0.5">{item.quantity}</span>
              <span className="text-green-600 font-medium">{item.category}</span>
            </div>
            <span className="font-bold text-green-700">{item.amount.toLocaleString('ru-RU')} ₽</span>
          </div>
        ))}
      </div>
    </div>
  );
};
