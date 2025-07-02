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
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-4 pt-3 sm:pt-4">
        <CardTitle className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span>Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3 px-3 sm:px-4 pt-0 pb-3 sm:pb-4">
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

        {/* Conversions & Sales Combined */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <ConversionsDisplay conversionsData={conversionsData} />
          <SalesTodayDisplay opticsData={opticsData} />
        </div>
      </CardContent>
    </Card>
  );
};