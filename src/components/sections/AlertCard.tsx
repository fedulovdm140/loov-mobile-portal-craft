
import { AlertTriangle, Search } from "lucide-react";

interface AlertCardProps {
  openDealsCount: number;
  openDealsSum: number;
}

export const AlertCard = ({ openDealsCount, openDealsSum }: AlertCardProps) => {
  const handleSearchOrders = () => {
    // В реальном приложении здесь будет переход к поиску заказов
    console.log("Поиск незакрытых заказов старше месяца");
  };

  return (
    <div className="bg-red-50 rounded-lg p-3 border border-red-200">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-red-800">Незакрытые сделки</div>
            <div className="text-xs text-red-600">Старше 30 дней</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-red-700">{openDealsCount}</div>
          <div className="text-xs text-red-600 font-medium">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
      
      <button 
        onClick={handleSearchOrders}
        className="w-full flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-medium py-2 px-3 rounded-md transition-colors"
      >
        <Search className="w-3 h-3" />
        Найти и закрыть
      </button>
    </div>
  );
};
