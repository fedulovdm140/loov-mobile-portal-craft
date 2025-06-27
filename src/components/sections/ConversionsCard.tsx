
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const ConversionsCard = () => {
  // Mock data - эти данные будут поступать из API в реальном приложении
  const conversionsData = {
    repairToCheck: { rate: 71, label: "Ремонт → Проверка" },
    repairToSale: { rate: 38, label: "Ремонт → Продажа" }
  };

  const CircularProgress = ({ rate, label, color }: {
    rate: number;
    label: string;
    color: string;
  }) => {
    const circumference = 2 * Math.PI * 16; // radius = 16
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (rate / 100) * circumference;

    return (
      <div className="text-center">
        <div className="relative w-12 h-12 mx-auto mb-1">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 40 40">
            <circle
              cx="20"
              cy="20"
              r="16"
              stroke="rgba(156, 163, 175, 0.2)"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="20"
              cy="20"
              r="16"
              stroke={color}
              strokeWidth="3"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700">{rate}%</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 leading-tight">{label}</p>
      </div>
    );
  };

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
      <CardContent className="px-2.5 pt-0 pb-2.5">
        <div className="grid grid-cols-2 gap-2">
          <CircularProgress
            rate={conversionsData.repairToCheck.rate}
            label={conversionsData.repairToCheck.label}
            color="#10b981"
          />
          <CircularProgress
            rate={conversionsData.repairToSale.rate}
            label={conversionsData.repairToSale.label}
            color="#3b82f6"
          />
        </div>
      </CardContent>
    </Card>
  );
};
