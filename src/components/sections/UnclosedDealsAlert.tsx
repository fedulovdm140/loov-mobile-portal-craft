import { AlertTriangle } from "lucide-react";

interface UnclosedDealsAlertProps {
  openDealsCount: number;
  openDealsSum: number;
}

export const UnclosedDealsAlert = ({ openDealsCount, openDealsSum }: UnclosedDealsAlertProps) => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-lg p-3 border border-red-200/50 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-red-800 uppercase tracking-wide">Не закрытые сделки</div>
            <div className="text-xs text-red-600 mt-0.5">Требуют внимания</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-red-700">{openDealsCount}</div>
          <div className="text-sm text-red-600 font-medium">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
        </div>
      </div>
    </div>
  );
};