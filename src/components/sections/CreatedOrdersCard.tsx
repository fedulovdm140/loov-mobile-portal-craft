
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Eye, DollarSign } from "lucide-react";

export const CreatedOrdersCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const opticsCount = 12;
  const openDealsCount = 8;
  const openDealsSum = 45000;
  
  const dailyProgress = Math.round((dailyRevenue / dailyTarget) * 100);

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          По созданным заказам
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Daily Revenue Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Выручка за день</span>
            </div>
            <span className="text-lg font-bold text-gray-900">{dailyRevenue.toLocaleString()} ₽</span>
          </div>
          
          {/* Plan vs Fact Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Факт: {dailyRevenue.toLocaleString()} ₽</span>
              <span>План: {dailyTarget.toLocaleString()} ₽</span>
            </div>
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(dailyProgress, 100)}%` }}
              />
              {dailyProgress > 100 && (
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  style={{ width: '100%' }}
                />
              )}
            </div>
            <div className="text-center">
              <span className={`text-sm font-bold ${dailyProgress >= 100 ? 'text-blue-600' : dailyProgress >= 80 ? 'text-green-600' : 'text-orange-600'}`}>
                {dailyProgress}% выполнено
              </span>
            </div>
          </div>
        </div>

        {/* Optics Sold */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <Eye className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-sm font-semibold text-gray-700">Оптика за день</span>
          </div>
          <span className="text-2xl font-bold text-emerald-600">{opticsCount}</span>
        </div>

        {/* Open Deals */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">Незакрытые сделки</p>
              <p className="text-xs text-gray-500">{openDealsSum.toLocaleString()} ₽</p>
            </div>
          </div>
          <span className="text-2xl font-bold text-indigo-600">{openDealsCount}</span>
        </div>
      </CardContent>
    </Card>
  );
};
