import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, DollarSign, Eye, Percent } from "lucide-react";

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
    const circumference = 2 * Math.PI * 10;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (rate / 100) * circumference;

    return (
      <div className="flex items-center gap-1.5">
        <div className="relative w-6 h-6 flex-shrink-0">
          <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="rgba(156, 163, 175, 0.15)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] font-bold text-gray-700">{rate}%</span>
          </div>
        </div>
        <span className="text-[9px] text-gray-600 font-medium leading-tight">{label}</span>
      </div>
    );
  };

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-2 px-3 pt-3">
        <CardTitle className="text-xs font-bold text-gray-800 flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center shadow-sm">
            <TrendingUp className="w-2.5 h-2.5 text-white" />
          </div>
          <span>Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-3 pt-0 pb-3">
        {/* Critical Alert - Unclosed Deals */}
        <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-lg p-2 border border-red-200/50 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                <AlertTriangle className="w-2.5 h-2.5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-red-800 uppercase tracking-wide">Не закрытые сделки</div>
                <div className="text-[8px] text-red-600 mt-0.5">Требуют внимания</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-red-700">{openDealsCount}</div>
              <div className="text-[9px] text-red-600 font-medium">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>

        {/* Main Revenue Progress */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-lg p-2 border border-green-200/50 shadow-sm">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                <DollarSign className="w-2.5 h-2.5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-green-800">Дневная выручка</div>
                <div className="text-[8px] text-green-600 mt-0.5">{dailyProgress}% от плана</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-green-700">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
              <div className="text-[9px] text-green-600 font-medium">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
          <div className="h-1.5 bg-green-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-700"
              style={{ width: `${Math.min(dailyProgress, 100)}%` }}
            />
          </div>
        </div>

        {/* Conversions & Sales Combined */}
        <div className="grid grid-cols-2 gap-2">
          {/* Conversions */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-lg p-2 border border-orange-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-3.5 h-3.5 bg-orange-500 rounded flex items-center justify-center">
                <Percent className="w-2 h-2 text-white" />
              </div>
              <span className="text-[10px] font-bold text-orange-800">Конверсии</span>
            </div>
            <div className="space-y-1">
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

          {/* Sales Today */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-lg p-2 border border-blue-200/50 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-3.5 h-3.5 bg-blue-500 rounded flex items-center justify-center">
                <Eye className="w-2 h-2 text-white" />
              </div>
              <span className="text-[10px] font-bold text-blue-800">Продажи</span>
            </div>
            <div className="space-y-0.5">
              {opticsData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold text-blue-700 w-2.5 text-center bg-blue-100 rounded px-0.5">{item.quantity}</span>
                    <span className="text-[8px] text-blue-600 font-medium">{item.category}</span>
                  </div>
                  <span className="text-[8px] font-bold text-blue-700">{item.amount.toLocaleString('ru-RU')} ₽</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-0.5 border-t border-blue-200/50">
                <div className="flex items-center gap-1 flex-shrink-0">
                  <span className="text-[9px] font-bold text-blue-800 w-2.5 text-center bg-blue-200 rounded px-0.5">{opticsData.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  <span className="text-[8px] font-bold text-blue-800">Всего</span>
                </div>
                <span className="text-[8px] font-bold text-blue-900 ml-1 flex-shrink-0">{opticsData.reduce((sum, item) => sum + item.amount, 0).toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
