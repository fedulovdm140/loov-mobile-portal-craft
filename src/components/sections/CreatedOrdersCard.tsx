
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

  return (
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-2 px-3 pt-3">
        <CardTitle className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center">
            <TrendingUp className="w-2.5 h-2.5 text-white" />
          </div>
          <span>Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 px-3 pt-0 pb-3">
        {/* Critical Alert - Unclosed Deals */}
        <AlertCard openDealsCount={openDealsCount} openDealsSum={openDealsSum} />

        {/* Main Revenue Progress */}
        <RevenueProgressCard 
          dailyRevenue={dailyRevenue} 
          dailyTarget={dailyTarget} 
          dailyProgress={dailyProgress} 
        />

        {/* Conversions & Sales Combined */}
        <div className="grid grid-cols-2 gap-3">
          {/* Conversions */}
          <ConversionsProgressCard conversionsData={conversionsData} />

          {/* Sales Today */}
          <SalesTodayCard opticsData={opticsData} />
        </div>
      </CardContent>
    </Card>
  );
};
