
import { AlertTriangle } from "lucide-react";

interface AlertCardProps {
  openDealsCount: number;
  openDealsSum: number;
}

export const AlertCard = ({ openDealsCount, openDealsSum }: AlertCardProps) => {
  return (
    <div className="bg-red-50 rounded-lg p-2.5 border border-red-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
            <AlertTriangle className="w-2.5 h-2.5 text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-red-800">Не закрытые сделки</div>
            <div className="text-[10px] text-red-600 mt-0.5">Требуют внимания</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-red-700">{openDealsCount}</div>
          <div className="text-[10px] text-red-600 font-medium">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
    </div>
  );
};
