
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const CreatedOrdersCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const opticsCount = 12;
  const openDealsCount = 8;
  const openDealsSum = 45000;
  
  const dailyProgress = Math.round((dailyRevenue / dailyTarget) * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          🎯 По созданным заказам
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Daily Revenue */}
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-medium text-gray-600">Факт выручка за день</span>
            <span className="text-2xl font-semibold text-gray-900">{dailyRevenue.toLocaleString()} ₽</span>
          </div>
          <Progress value={dailyProgress} className="h-2 bg-gray-100" />
          <div className="text-xs text-gray-500">
            {dailyProgress}% от плана ({dailyTarget.toLocaleString()} ₽)
          </div>
        </div>

        {/* Optics Sold */}
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-medium text-gray-600">Оптика, проданная за день</span>
          <span className="text-2xl font-semibold text-emerald-600">{opticsCount} шт.</span>
        </div>

        {/* Open Deals */}
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-medium text-gray-600">Незакрытые сделки</span>
          <div className="text-right">
            <div className="text-2xl font-semibold text-indigo-600">{openDealsCount} шт.</div>
            <div className="text-sm text-gray-500">{openDealsSum.toLocaleString()} ₽</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
