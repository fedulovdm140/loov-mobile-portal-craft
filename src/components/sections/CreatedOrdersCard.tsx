
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
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-blue-600" />
          </div>
          По созданным заказам
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {/* Top Row - Key Metrics */}
        <div className="grid grid-cols-2 gap-2">
          {/* Daily Revenue */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-100">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-green-600" />
                <span className="text-xs font-medium text-green-800">Выручка день</span>
              </div>
              <span className="text-sm font-bold text-green-700">{Math.round(dailyRevenue/1000)}k ₽</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-green-600">
                <span>{dailyProgress}%</span>
                <span>{Math.round(dailyTarget/1000)}k план</span>
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
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-2 border border-red-100">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-red-600" />
                <span className="text-xs font-medium text-red-800">Незакрытые</span>
              </div>
              <span className="text-lg font-bold text-red-600">{openDealsCount}</span>
            </div>
            <div className="text-xs text-red-600 text-center">
              {Math.round(openDealsSum/1000)}k ₽
            </div>
          </div>
        </div>

        {/* Bottom Row - Optics Sales */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2 border border-emerald-100">
          <div className="flex items-center gap-1 mb-2">
            <Eye className="w-3 h-3 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-800">Сделки за день</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {opticsData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-emerald-700">{item.quantity}</div>
                <div className="text-emerald-600 truncate">{item.category}</div>
                <div className="font-semibold text-emerald-700">{Math.round(item.amount/1000)}k ₽</div>
              </div>
            ))}
            <div className="text-center bg-emerald-100 rounded px-1 py-0.5">
              <div className="font-bold text-emerald-800">{opticsData.reduce((sum, item) => sum + item.quantity, 0)}</div>
              <div className="text-emerald-700 text-xs">Итого</div>
              <div className="font-bold text-emerald-800">{Math.round(opticsData.reduce((sum, item) => sum + item.amount, 0)/1000)}k ₽</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
