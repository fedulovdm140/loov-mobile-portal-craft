
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

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  return (
    <Card className="bg-white shadow-sm border border-gray-100">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span>Созданные заказы</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-4 pb-4">
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
