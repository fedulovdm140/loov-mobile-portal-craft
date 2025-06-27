
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, DollarSign, Eye } from "lucide-react";

export const CreatedOrdersCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const openDealsCount = 8;
  const openDealsSum = 45000;

  // Optics sales data with repairs
  const opticsData = [{
    category: "Оправы",
    quantity: 4,
    amount: 10000
  }, {
    category: "Линзы", 
    quantity: 4,
    amount: 5000
  }, {
    category: "Ремонты", 
    quantity: 3,
    amount: 2500
  }];

  // Conversions data
  const conversionsData = {
    repairToCheck: { rate: 71, label: "Ремонт → Проверка" },
    repairToSale: { rate: 38, label: "Ремонт → Продажа" }
  };

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  const CircularProgress = ({ rate, label, color }: {
    rate: number;
    label: string;
    color: string;
  }) => {
    const circumference = 2 * Math.PI * 14; // увеличенный радиус = 14
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (rate / 100) * circumference;

    return (
      <div className="text-center">
        <div className="relative w-10 h-10 mx-auto mb-0.5">
          <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="14"
              stroke="rgba(156, 163, 175, 0.2)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-700 leading-none">{rate}%</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 leading-tight px-0.5">{label}</p>
      </div>
    );
  };

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-0.5 px-2">
        <CardTitle className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-2.5 h-2.5 text-blue-600" />
          </div>
          <span className="truncate">Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 px-2 pt-0 pb-2">
        {/* Top Row - Не закрытые сделки */}
        <div className="bg-red-50 rounded-lg p-1 border border-red-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 text-red-600 flex-shrink-0" />
              <span className="text-xs font-medium text-red-800">НЕ ЗАКРЫТЫЕ СДЕЛКИ</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-red-600">{openDealsCount}</div>
              <div className="text-xs text-red-600">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>

        {/* Second Row - Conversions */}
        <div className="bg-orange-50 rounded-lg p-1 border border-orange-100">
          <div className="flex items-center gap-1 mb-0.5">
            <TrendingUp className="w-3 h-3 text-orange-600 flex-shrink-0" />
            <span className="text-xs font-semibold text-orange-700">Конверсии</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
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
        </div>

        {/* Third Row - Daily Revenue */}
        <div className="bg-green-50 rounded-lg p-1 border border-green-100">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-green-600 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700">Созданные заказы</span>
            </div>
            <span className="text-sm font-semibold text-green-700">{dailyRevenue.toLocaleString('ru-RU')} ₽</span>
          </div>
          <div className="space-y-0.5">
            <div className="flex justify-between text-xs text-green-600">
              <span>{dailyProgress}%</span>
              <span>{dailyTarget.toLocaleString('ru-RU')} ₽</span>
            </div>
            <div className="h-1 bg-green-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Fourth Row - Optics Sales */}
        <div className="bg-blue-50 rounded-lg p-1 border border-blue-100">
          <div className="flex items-center gap-1 mb-0.5">
            <Eye className="w-3 h-3 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-semibold text-blue-700">Продажи сегодня</span>
          </div>
          <div className="space-y-0.5">
            {opticsData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-blue-700 w-3 text-center">{item.quantity}</span>
                  <span className="text-xs text-blue-600">{item.category}</span>
                </div>
                <span className="text-xs font-medium text-blue-700">{item.amount.toLocaleString('ru-RU')} ₽</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-0.5 border-t border-blue-200">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-blue-800 w-3 text-center">{opticsData.reduce((sum, item) => sum + item.quantity, 0)}</span>
                <span className="text-xs font-bold text-blue-800">Всего</span>
              </div>
              <span className="text-xs font-bold text-blue-900">{opticsData.reduce((sum, item) => sum + item.amount, 0).toLocaleString('ru-RU')} ₽</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
