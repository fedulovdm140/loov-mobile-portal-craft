
import { Eye } from "lucide-react";

interface SalesItem {
  category: string;
  quantity: number;
  amount: number;
}

interface SalesTodayCardProps {
  opticsData: SalesItem[];
}

export const SalesTodayCard = ({ opticsData }: SalesTodayCardProps) => {
  const totalQuantity = opticsData.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = opticsData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="bg-blue-50 rounded-lg p-2.5 border border-blue-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
          <Eye className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs font-bold text-blue-800">Продажи</span>
      </div>
      <div className="space-y-1">
        {opticsData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-blue-700 w-4 text-center bg-blue-100 rounded px-1">{item.quantity}</span>
              <span className="text-[10px] text-blue-600 font-medium">{item.category}</span>
            </div>
            <span className="text-[10px] font-bold text-blue-700">{item.amount.toLocaleString('ru-RU')} ₽</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-1 border-t border-blue-200 mt-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-blue-800 w-4 text-center bg-blue-200 rounded px-1">{totalQuantity}</span>
            <span className="text-[10px] font-bold text-blue-800">Всего</span>
          </div>
          <span className="text-[10px] font-bold text-blue-900">{totalAmount.toLocaleString('ru-RU')} ₽</span>
        </div>
      </div>
    </div>
  );
};
