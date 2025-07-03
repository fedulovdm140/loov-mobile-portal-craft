
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { UnclosedDealsAlert } from "./UnclosedDealsAlert";
import { RevenueProgress } from "./RevenueProgress";
import { ConversionsDisplay } from "./ConversionsDisplay";
import { SalesTodayDisplay } from "./SalesTodayDisplay";

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
    <Card className="bg-white shadow-lg border border-gray-200 border-l-4 border-l-blue-500">
      <CardHeader className="pb-1 sm:pb-3 px-2 sm:px-4 pt-2 sm:pt-4">
        <CardTitle className="text-xs sm:text-base font-bold text-gray-900 flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
            <TrendingUp className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <span>Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1.5 sm:space-y-3 px-2 sm:px-4 pt-0 pb-2 sm:pb-4">
        {/* Critical Alert - Unclosed Deals */}
        <UnclosedDealsAlert 
          openDealsCount={openDealsCount}
          openDealsSum={openDealsSum}
        />

        {/* Main Revenue Progress */}
        <RevenueProgress 
          dailyRevenue={dailyRevenue}
          dailyTarget={dailyTarget}
          dailyProgress={dailyProgress}
        />

        {/* Sales Display */}
        <SalesTodayDisplay opticsData={opticsData} />
      </CardContent>
    </Card>
  );
};
