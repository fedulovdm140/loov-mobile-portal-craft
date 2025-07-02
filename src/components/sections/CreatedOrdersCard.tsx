
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, DollarSign, Eye, Percent, ArrowUp, ArrowDown } from "lucide-react";

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

  // Conversions data with month-to-month changes
  const conversionsData = {
    repairToCheck: {
      rate: 71,
      label: "Ремонт → Проверка",
      change: +5, // +5% from last month
      isPositive: true
    },
    repairToSale: {
      rate: 38,
      label: "Ремонт → Продажа",
      change: -2, // -2% from last month
      isPositive: false
    }
  };

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  const CircularProgress = ({
    rate,
    label,
    color,
    change,
    isPositive
  }: {
    rate: number;
    label: string;
    color: string;
    change: number;
    isPositive: boolean;
  }) => {
    const circumference = 2 * Math.PI * 10;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - rate / 100 * circumference;
    
    return (
      <div className="flex items-center gap-1.5">
        <div className="relative w-6 h-6 flex-shrink-0">
          <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="rgba(156, 163, 175, 0.15)" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-700" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] font-bold text-gray-700">{rate}%</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[9px] text-gray-600 font-medium leading-tight block">{label}</span>
          <div className="flex items-center gap-1 mt-0.5">
            <div className={`flex items-center gap-0.5 px-1 py-0.5 rounded text-[7px] font-bold ${
              isPositive 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {isPositive ? (
                <ArrowUp className="w-2 h-2" />
              ) : (
                <ArrowDown className="w-2 h-2" />
              )}
              <span>{Math.abs(change)}%</span>
            </div>
            <span className="text-[7px] text-gray-500">от пр. мес.</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-3">
          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span>Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-4 pt-0 pb-4">
        {/* Critical Alert - Unclosed Deals */}
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

        {/* Main Revenue Progress */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-lg p-3 border border-green-200/50 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-green-800">Дневная выручка</div>
                <div className="text-xs text-green-600 mt-0.5">{dailyProgress}% от плана</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-700">{dailyRevenue.toLocaleString('ru-RU')} ₽</div>
              <div className="text-sm text-green-600 font-medium">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
          <div className="h-2 bg-green-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-700" style={{
            width: `${Math.min(dailyProgress, 100)}%`
          }} />
          </div>
        </div>

        {/* Conversions & Sales Combined */}
        <div className="grid grid-cols-2 gap-3">
          {/* Conversions */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-lg p-3 border border-orange-200/50 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-orange-500 rounded-lg flex items-center justify-center">
                <Percent className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-bold text-orange-800">Конверсии</span>
            </div>
            <div className="space-y-2">
              <div className="text-center">
                <div className="text-lg font-bold text-green-700">{conversionsData.repairToCheck.rate}%</div>
                <div className="text-xs text-gray-600">{conversionsData.repairToCheck.label}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-700">{conversionsData.repairToSale.rate}%</div>
                <div className="text-xs text-gray-600">{conversionsData.repairToSale.label}</div>
              </div>
            </div>
          </div>

          {/* Sales Today */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-lg p-3 border border-blue-200/50 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-blue-500 rounded-lg flex items-center justify-center">
                <Eye className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-bold text-blue-800">Продажи</span>
            </div>
            <div className="space-y-1">
              {opticsData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-blue-700 w-6 text-center bg-blue-100 rounded px-1">{item.quantity}</span>
                    <span className="text-xs text-blue-600 font-medium">{item.category}</span>
                  </div>
                  <span className="text-xs font-bold text-blue-700">{item.amount.toLocaleString('ru-RU')} ₽</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-1 border-t border-blue-200/50">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-800 w-6 text-center bg-blue-200 rounded px-1">{opticsData.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  <span className="text-xs font-bold text-blue-800">Всего</span>
                </div>
                <span className="text-xs font-bold text-blue-900">{opticsData.reduce((sum, item) => sum + item.amount, 0).toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
