
import { MainStatsCard } from "./MainStatsCard";
import { TasksSection } from "./TasksSection";

export const DashboardSection = () => {
  const userName = "Дмитрий";

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-600">Дашборд</h1>
        <p className="text-gray-600 text-lg">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard Card */}
      <MainStatsCard />

      {/* Tasks Section */}
      <TasksSection />
    </div>
  );
};
