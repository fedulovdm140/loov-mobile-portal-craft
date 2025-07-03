
import { AlertTriangle } from "lucide-react";

interface UnclosedDealsAlertProps {
  openDealsCount: number;
  openDealsSum: number;
}

export const UnclosedDealsAlert = ({ openDealsCount, openDealsSum }: UnclosedDealsAlertProps) => {
  return (
    <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900 uppercase tracking-wide">Не закрытые сделки</div>
            <div className="text-xs text-gray-600">Требуют внимания</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">{openDealsCount}</div>
          <div className="text-sm text-gray-600">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
    </div>
  );
};
