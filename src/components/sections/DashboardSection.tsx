
import { UrgentDealsCard } from "./UrgentDealsCard";
import { DailyMetricsCard } from "./DailyMetricsCard";
import { MonthlyForecastCard } from "./MonthlyForecastCard";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[28px] font-semibold text-gray-900 mb-2">Дашборд</h1>
        <p className="text-sm font-medium text-gray-600">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Priority 1: Urgent Open Deals */}
        <UrgentDealsCard />
        
        {/* Priority 2: Daily Metrics */}
        <DailyMetricsCard />
        
        {/* Priority 3: Monthly Forecast */}
        <MonthlyForecastCard />
      </div>
    </div>
  );
};
