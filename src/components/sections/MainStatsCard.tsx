
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CircularProgress } from "./CircularProgress";

export const MainStatsCard = () => {
  const mainStats = [
    {
      title: "СЕГОДНЯ",
      value: "15 000",
      subtitle: "из 25 000 ₽",
      progress: 60,
      color: "bg-blue-500",
      icon: <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border border-white"></div>
      </div>
    },
    {
      title: "МЕСЯЦ", 
      value: "180K",
      subtitle: "из 300K ₽",
      progress: 60,
      color: "bg-green-500",
      icon: <div className="w-8 h-8 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      </div>
    },
    {
      title: "ПРОГНОЗ",
      value: "45K",
      subtitle: "зарплата",
      progress: 75,
      color: "bg-purple-500",
      icon: <div className="w-8 h-8 flex items-center justify-center text-white text-lg font-bold">₽</div>
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white border-0 shadow-2xl">
        <CardContent className="p-8">
          {/* Three Circular Stats */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {mainStats.map((stat, index) => (
              <CircularProgress
                key={index}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
                progress={stat.progress}
                color={stat.color}
                icon={stat.icon}
              />
            ))}
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white">План дня</span>
              <span className="text-white">15 000 ₽</span>
            </div>
            <Progress value={60} className="h-3 bg-white/20" />
            
            <div className="flex items-center justify-between mt-6">
              <span className="text-white">План месяца</span> 
              <span className="text-white">180K ₽</span>
            </div>
            <Progress value={60} className="h-3 bg-white/20" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
