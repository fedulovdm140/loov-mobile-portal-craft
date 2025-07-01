
import { CreatedOrdersCard } from "./CreatedOrdersCard";
import { ForecastCard } from "./ForecastCard";
import { SalaryCard } from "./SalaryCard";
import { TasksSection } from "./TasksSection";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 p-1">
      <div className="text-center mb-2">
        <h1 className="text-base font-bold text-gray-900 mb-0.5">Дашборд</h1>
        <p className="text-gray-600 text-xs">Добро пожаловать, {userName}!</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <CreatedOrdersCard />
          <ForecastCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <SalaryCard />
          <TasksSection />
        </div>
      </div>
    </div>
  );
};
