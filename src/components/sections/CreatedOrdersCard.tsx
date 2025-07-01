
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

  // Упрощенные данные продаж
  const opticsData = [{
    category: "Оправы",
    quantity: 4,
    amount: 10000,
    target: 12000
  }, {
    category: "Линзы", 
    quantity: 4,
    amount: 5000,
    target: 6000
  }];

  // Упрощенные данные конверсий
  const conversionsData = {
    repairToCheck: {
      rate: 71,
      label: "Ремонт → Проверка",
      target: 75
    },
    repairToSale: {
      rate: 38,
      label: "Ремонт → Продажа", 
      target: 45
    }
  };

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-1 px-2 pt-2">
        <CardTitle className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
          <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
            <TrendingUp className="w-2 h-2 text-white" />
          </div>
          <span>Рабочие задачи</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-2 pt-0 pb-2">
        <AlertCard openDealsCount={openDealsCount} openDealsSum={openDealsSum} />
        <RevenueProgressCard 
          dailyRevenue={dailyRevenue} 
          dailyTarget={dailyTarget} 
          dailyProgress={dailyProgress} 
        />
        <div className="grid grid-cols-1 gap-2">
          <ConversionsProgressCard conversionsData={conversionsData} />
          <SalesTodayCard opticsData={opticsData} />
        </div>
      </CardContent>
    </Card>
  );
};
