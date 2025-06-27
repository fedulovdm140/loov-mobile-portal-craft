
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, DollarSign, Eye } from "lucide-react";

export const CreatedOrdersCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const openDealsCount = 8;
  const openDealsSum = 45000;

  // Optics sales data
  const opticsData = [{
    category: "Оправы",
    quantity: 4,
    amount: 10000
  }, {
    category: "Линзы", 
    quantity: 4,
    amount: 5000
  }];

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-2 px-3">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-3 h-3 text-blue-600" />
          </div>
          <span className="truncate">Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-3 pt-0 pb-3">
        {/* Top Row - Key Metrics */}
        <div className="grid grid-cols-2 gap-2">
          {/* Daily Revenue */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2 border border-green-100">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-green-800">Выручка</span>
              </div>
              <span className="text-sm font-bold text-green-700">{Math.round(dailyRevenue/1000)}k</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-green-600">
                <span>{dailyProgress}%</span>
                <span>{Math.round(dailyTarget/1000)}k</span>
              </div>
              <div className="h-1.5 bg-green-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(dailyProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Open Deals */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-2 border border-red-100">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-red-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-red-800">Открытые</span>
              </div>
              <span className="text-lg font-bold text-red-600">{openDealsCount}</span>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-red-600">
                {Math.round(openDealsSum/1000)}k ₽
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Optics Sales */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-100">
          <div className="flex items-center gap-1 mb-2">
            <Eye className="w-3 h-3 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-semibold text-blue-800">Продажи сегодня</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center">
            {opticsData.map((item, index) => (
              <div key={index} className="bg-white/60 rounded p-1.5">
                <div className="text-sm font-bold text-blue-700">{item.quantity}</div>
                <div className="text-xs text-blue-600 font-medium truncate">{item.category}</div>
                <div className="text-xs font-semibold text-blue-700">{Math.round(item.amount/1000)}k</div>
              </div>
            ))}
            <div className="bg-blue-100 rounded p-1.5">
              <div className="text-sm font-bold text-blue-800">{opticsData.reduce((sum, item) => sum + item.quantity, 0)}</div>
              <div className="text-xs text-blue-700 font-medium">Всего</div>
              <div className="text-xs font-bold text-blue-800">{Math.round(opticsData.reduce((sum, item) => sum + item.amount, 0)/1000)}k</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
