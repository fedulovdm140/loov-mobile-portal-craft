
import { AlertTriangle } from "lucide-react";

export const UrgentDealsCard = () => {
  // Mock data
  const openDealsCount = 8;
  const openDealsSum = 45000;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-[28px] font-semibold text-gray-900">Срочные сделки</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <div className="text-[24px] font-semibold text-gray-900 mb-1">{openDealsCount}</div>
          <div className="text-sm font-medium text-gray-600">открытых сделок</div>
        </div>
        <div className="text-center">
          <div className="text-[24px] font-semibold text-gray-900 mb-1">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
          <div className="text-sm font-medium text-gray-600">общая сумма</div>
        </div>
      </div>
    </div>
  );
};
