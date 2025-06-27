
import { CreatedOrdersCard } from "./CreatedOrdersCard";
import { ForecastCard } from "./ForecastCard";
import { SalaryCard } from "./SalaryCard";
import { TasksSection } from "./TasksSection";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-1 space-y-1">
      {/* Compact Header */}
      <div className="text-center mb-0.5">
        <h1 className="text-base font-bold text-gray-900">Дашборд</h1>
        <p className="text-gray-600 text-xs">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard - 2 columns: Созданные заказы, Закрытые сделки */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1">
        <CreatedOrdersCard />
        <ForecastCard />
      </div>

      {/* Secondary sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1">
        <SalaryCard />
        <TasksSection />
      </div>
    </div>
  );
};
