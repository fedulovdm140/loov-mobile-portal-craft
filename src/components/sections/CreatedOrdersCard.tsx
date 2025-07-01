
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { AlertCard } from "./AlertCard";
import { RevenueProgressCard } from "./RevenueProgressCard";
import { ConversionsProgressCard } from "./ConversionsProgressCard";
import { SalesTodayCard } from "./SalesTodayCard";

export const CreatedOrdersCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const openDealsCount = 8;
  const openDealsSum = 45000;

  // Обновленные данные продаж с целями и сравнениями
  const opticsData = [{
    category: "Оправы",
    quantity: 4,
    amount: 10000,
    target: 12000,
    lastMonth: 8500
  }, {
    category: "Линзы",
    quantity: 4,
    amount: 5000,
    target: 6000,
    lastMonth: 4800
  }, {
    category: "Ремонты",
    quantity: 3,
    amount: 2500,
    target: 3000,
    lastMonth: 2200
  }];

  // Обновленные данные конверсий с целями и историей
  const conversionsData = {
    repairToCheck: {
      rate: 71,
      label: "Ремонт → Проверка",
      change: +5,
      isPositive: true,
      target: 75,
      lastMonth: 66
    },
    repairToSale: {
      rate: 38,
      label: "Ремонт → Продажа",
      change: -2,
      isPositive: false,
      target: 45,
      lastMonth: 40
    }
  };

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-2 px-3 pt-3">
        <CardTitle className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center">
            <TrendingUp className="w-2.5 h-2.5 text-white" />
          </div>
          <span>Рабочие задачи</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-3 pt-0 pb-3">
        {/* Критичное - Незакрытые сделки */}
        <AlertCard openDealsCount={openDealsCount} openDealsSum={openDealsSum} />

        {/* Основной показатель - Выручка дня */}
        <RevenueProgressCard 
          dailyRevenue={dailyRevenue} 
          dailyTarget={dailyTarget} 
          dailyProgress={dailyProgress} 
        />

        {/* Детализация - Конверсии и Продажи */}
        <div className="grid grid-cols-1 gap-3">
          <ConversionsProgressCard conversionsData={conversionsData} />
          <SalesTodayCard opticsData={opticsData} />
        </div>
      </CardContent>
    </Card>
  );
};
