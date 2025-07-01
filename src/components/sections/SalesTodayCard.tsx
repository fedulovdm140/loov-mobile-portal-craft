
import { Eye, Target } from "lucide-react";

interface SalesItem {
  category: string;
  quantity: number;
  amount: number;
  target: number;
  lastMonth: number;
}

interface SalesTodayCardProps {
  opticsData: SalesItem[];
}

export const SalesTodayCard = ({ opticsData }: SalesTodayCardProps) => {
  const totalQuantity = opticsData.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = opticsData.reduce((sum, item) => sum + item.amount, 0);
  const totalTarget = opticsData.reduce((sum, item) => sum + item.target, 0);
  const totalLastMonth = opticsData.reduce((sum, item) => sum + item.lastMonth, 0);
  
  const targetProgress = Math.round(totalAmount / totalTarget * 100);
  const monthChange = Math.round((totalAmount - totalLastMonth) / totalLastMonth * 100);

  return (
    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center">
          <Eye className="w-3 h-3 text-white" />
        </div>
        <span className="text-sm font-bold text-green-800">Продажи сегодня</span>
      </div>
      
      {/* Основные показатели */}
      <div className="bg-white rounded-md p-2 mb-2 border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-lg font-bold text-green-700">{totalAmount.toLocaleString('ru-RU')} ₽</span>
          <div className="flex items-center gap-1">
            <Target className="w-3 h-3 text-gray-500" />
            <span className="text-xs text-gray-600">{targetProgress}% от цели</span>
          </div>
        </div>
        
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
          <div 
            className="h-full bg-green-600 rounded-full transition-all duration-700"
            style={{ width: `${Math.min(targetProgress, 100)}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-gray-500">
          <span>Цель: {totalTarget.toLocaleString('ru-RU')} ₽</span>
          <span className={monthChange >= 0 ? 'text-green-600' : 'text-red-600'}>
            {monthChange >= 0 ? '+' : ''}{monthChange}% к пр. мес.
          </span>
        </div>
      </div>

      {/* Детализация по категориям */}
      <div className="space-y-1">
        {opticsData.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-green-700 w-4 text-center bg-green-100 rounded px-1">{item.quantity}</span>
              <span className="text-green-600 font-medium">{item.category}</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-green-700">{item.amount.toLocaleString('ru-RU')} ₽</div>
              <div className="text-green-500 text-[10px]">из {item.target.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
