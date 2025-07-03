
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { UnclosedDealsAlert } from "./UnclosedDealsAlert";
import { RevenueSalesDisplay } from "./RevenueSalesDisplay";

export const CreatedOrdersCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const monthlyRevenue = 120000;
  const monthlyTarget = 180000;
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

  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="pb-1 sm:pb-3 px-2 sm:px-4 pt-2 sm:pt-4">
        <CardTitle className="text-xs sm:text-base font-bold text-gray-900 flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-blue-500 rounded-lg flex items-center justify-center">
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

        {/* Combined Revenue and Sales Display */}
        <RevenueSalesDisplay 
          dailyRevenue={dailyRevenue}
          dailyTarget={dailyTarget}
          monthlyRevenue={monthlyRevenue}
          monthlyTarget={monthlyTarget}
          opticsData={opticsData}
        />
      </CardContent>
    </Card>
  );
};
