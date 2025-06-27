
import { CreatedOrdersCard } from "./CreatedOrdersCard";
import { ForecastCard } from "./ForecastCard";
import { SalaryCard } from "./SalaryCard";
import { TasksSection } from "./TasksSection";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-2 space-y-3">
      {/* Compact Header */}
      <div className="text-center space-y-1 mb-3">
        <h1 className="text-xl font-bold text-gray-900">Дашборд</h1>
        <p className="text-gray-600 text-sm">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard - 2 columns on large screens, single column on mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
        <CreatedOrdersCard />
        <ForecastCard />
      </div>

      {/* Secondary sections - stacked below */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
        <SalaryCard />
        <TasksSection />
      </div>
    </div>
  );
};
