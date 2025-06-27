
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";

export const ConversionsCard = () => {
  // Mock data - эти данные будут поступать из API в реальном приложении
  const conversionsData = {
    repairToCheck: {
      daily: { from: 5, to: 3, rate: 60 },
      monthly: { from: 120, to: 85, rate: 71 }
    },
    repairToSale: {
      daily: { from: 5, to: 2, rate: 40 },
      monthly: { from: 120, to: 45, rate: 38 }
    }
  };

  const ConversionRow = ({ title, daily, monthly, color }: {
    title: string;
    daily: { from: number; to: number; rate: number };
    monthly: { from: number; to: number; rate: number };
    color: string;
  }) => (
    <div className={`bg-${color}-50 rounded-lg p-1.5 border border-${color}-100`}>
      <div className="flex items-center gap-1 mb-1">
        <ArrowRight className={`w-3 h-3 text-${color}-600 flex-shrink-0`} />
        <span className={`text-xs font-medium text-${color}-800`}>{title}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-1.5">
        {/* Daily */}
        <div className="text-center">
          <div className={`text-xs font-bold text-${color}-700`}>{daily.rate}%</div>
          <div className={`text-xs text-${color}-600`}>{daily.to}/{daily.from}</div>
          <div className={`text-xs text-${color}-500`}>День</div>
        </div>
        
        {/* Monthly */}
        <div className="text-center">
          <div className={`text-xs font-bold text-${color}-700`}>{monthly.rate}%</div>
          <div className={`text-xs text-${color}-600`}>{monthly.to}/{monthly.from}</div>
          <div className={`text-xs text-${color}-500`}>Месяц</div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-1 px-2.5">
        <CardTitle className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-2.5 h-2.5 text-orange-600" />
          </div>
          <span className="truncate">Конверсии</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1.5 px-2.5 pt-0 pb-2.5">
        <ConversionRow
          title="Ремонт → Проверка"
          daily={conversionsData.repairToCheck.daily}
          monthly={conversionsData.repairToCheck.monthly}
          color="green"
        />
        
        <ConversionRow
          title="Ремонт → Продажа"
          daily={conversionsData.repairToSale.daily}
          monthly={conversionsData.repairToSale.monthly}
          color="blue"
        />
      </CardContent>
    </Card>
  );
};
