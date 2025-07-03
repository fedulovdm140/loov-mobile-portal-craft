
import { RevenueAndSalaryCard } from "./RevenueAndSalaryCard";
import { CompactForecastCard } from "./CompactForecastCard";
import { CompactTasksCard } from "./CompactTasksCard";
import { AlertsCard } from "./AlertsCard";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 p-1 sm:p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Дашборд</h1>
        <p className="text-gray-600">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Top Priority - Revenue & Salary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <RevenueAndSalaryCard />
          </div>
          <AlertsCard />
        </div>

        {/* Secondary Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CompactForecastCard />
          <CompactTasksCard />
        </div>
      </div>
    </div>
  );
};
