
import { AlertTriangle, Search } from "lucide-react";

interface AlertCardProps {
  openDealsCount: number;
  openDealsSum: number;
}

export const AlertCard = ({ openDealsCount, openDealsSum }: AlertCardProps) => {
  const handleSearchOrders = () => {
    console.log("Поиск незакрытых заказов старше месяца");
  };

  return (
    <div className="bg-red-50 rounded-md p-2 border border-red-200">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
            <AlertTriangle className="w-2.5 h-2.5 text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-red-800">Незакрытые сделки</div>
            <div className="text-[10px] text-red-600">Старше 30 дней</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-red-700">{openDealsCount}</div>
          <div className="text-[10px] text-red-600 font-medium">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
      
      <button 
        onClick={handleSearchOrders}
        className="w-full flex items-center justify-center gap-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-[10px] font-medium py-1.5 px-2 rounded transition-colors"
      >
        <Search className="w-2.5 h-2.5" />
        Найти и закрыть
      </button>
    </div>
  );
};
