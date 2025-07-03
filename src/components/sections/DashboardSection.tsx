
import { UnifiedMetricsCard } from "./UnifiedMetricsCard";
import { CompactForecastCard } from "./CompactForecastCard";
import { CompactTasksCard } from "./CompactTasksCard";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 p-1 sm:p-4">
      {/* Optimized Header */}
      <div className="text-center mb-2 sm:mb-6">
        <h1 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Дашборд</h1>
        <p className="text-gray-600 text-xs sm:text-base">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard Grid - Optimized and Simplified */}
      <div className="max-w-6xl mx-auto space-y-2 sm:space-y-4">
        {/* Primary Cards - Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4">
          <UnifiedMetricsCard />
          <CompactForecastCard />
        </div>

        {/* Secondary Card - Tasks */}
        <div className="max-w-3xl mx-auto">
          <CompactTasksCard />
        </div>
      </div>
    </div>
  );
};
