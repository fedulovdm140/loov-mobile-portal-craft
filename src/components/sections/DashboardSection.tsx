
import { CreatedOrdersCard } from "./CreatedOrdersCard";
import { ForecastCard } from "./ForecastCard";
import { SalaryCard } from "./SalaryCard";
import { TasksSection } from "./TasksSection";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-3 mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Дашборд</h1>
        <p className="text-gray-600 text-lg lg:text-xl">Добро пожаловать, {userName}!</p>
      </div>

      {/* Dashboard Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <CreatedOrdersCard />
        <ForecastCard />
      </div>

      {/* Salary Card */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <SalaryCard />
      </div>

      {/* Tasks Section */}
      <div className="max-w-7xl mx-auto">
        <TasksSection />
      </div>
    </div>
  );
};
