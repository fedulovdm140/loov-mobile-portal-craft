
import { AlertTriangle, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface Deal {
  number: string;
  cost: number;
}

interface UnclosedDealsAlertProps {
  openDealsCount: number;
  openDealsSum: number;
}

export const UnclosedDealsAlert = ({ openDealsCount, openDealsSum }: UnclosedDealsAlertProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for unclosed deals - in real app this would come from API
  const deals: Deal[] = [
    { number: "SO-001", cost: 12000 },
    { number: "SO-008", cost: 8500 },
    { number: "SO-015", cost: 15000 },
    { number: "SO-022", cost: 3500 },
    { number: "SO-029", cost: 2800 },
    { number: "SO-031", cost: 1800 },
    { number: "SO-033", cost: 900 },
    { number: "SO-035", cost: 400 }
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div className="bg-red-50 rounded-lg p-2 sm:p-3 border border-red-200 cursor-pointer hover:bg-red-100 transition-colors">
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
              <ChevronDown className={`w-4 h-4 text-red-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </div>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="mt-2">
        <div className="bg-red-50 rounded-lg border border-red-200 overflow-hidden">
          <div className="max-h-32 overflow-y-auto">
            {deals.map((deal, index) => (
              <div key={deal.number} className={`flex justify-between items-center px-3 py-2 ${index !== deals.length - 1 ? 'border-b border-red-200' : ''}`}>
                <span className="text-xs sm:text-sm font-medium text-red-900">{deal.number}</span>
                <span className="text-xs sm:text-sm font-bold text-red-700">{deal.cost.toLocaleString('ru-RU')} ₽</span>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
