
import { CreatedOrdersCard } from "./CreatedOrdersCard";
import { ForecastCard } from "./ForecastCard";
import { SalaryCard } from "./SalaryCard";
import { TasksSection } from "./TasksSection";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 p-2 sm:p-4">
      {/* Optimized Header */}
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Дашборд</h1>
        <p className="text-gray-600 text-sm sm:text-base">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard Grid - Optimized for mobile */}
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4">
        {/* Primary Cards - Most Important */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          <CreatedOrdersCard />
          <ForecastCard />
        </div>

        {/* Secondary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          <SalaryCard />
          <TasksSection />
        </div>
      </div>
    </div>
  );
};
