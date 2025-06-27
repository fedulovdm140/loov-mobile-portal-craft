
import { CreatedOrdersCard } from "./CreatedOrdersCard";
import { ForecastCard } from "./ForecastCard";
import { TasksSection } from "./TasksSection";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold text-gray-900">Дашборд</h1>
        <p className="text-gray-600 text-lg">Добро пожаловать, {userName}!</p>
      </div>

      {/* Dashboard Cards Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreatedOrdersCard />
        <ForecastCard />
      </div>

      {/* Tasks Section */}
      <TasksSection />
    </div>
  );
};
