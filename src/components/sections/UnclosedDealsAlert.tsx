
import { AlertTriangle, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UnclosedDealsAlertProps {
  openDealsCount: number;
  openDealsSum: number;
}

export const UnclosedDealsAlert = ({ openDealsCount, openDealsSum }: UnclosedDealsAlertProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/unclosed-deals");
  };

  return (
    <div 
      className="bg-red-50 rounded-lg p-2 sm:p-3 border border-red-200 cursor-pointer hover:bg-red-100 transition-colors"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-red-900 uppercase tracking-wide">Не закрытые сделки</div>
            <div className="text-[10px] sm:text-xs text-red-700 mt-0.5">Требуют внимания</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-base sm:text-lg font-bold text-red-900">{openDealsCount}</div>
            <div className="text-xs sm:text-sm text-red-700 font-medium">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
          </div>
          <ChevronRight className="w-4 h-4 text-red-600" />
        </div>
      </div>
    </div>
  );
};
