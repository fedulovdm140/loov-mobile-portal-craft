
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Eye, RefreshCw, List } from "lucide-react";

export const DashboardSection = () => {
  const userName = "Дмитрий";

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

  const tasks = [
    {
      task: "Связаться с клиентом по заказу прогрессивных линз",
      priority: "high",
      dueTime: "до 14:00",
      trackerUrl: "https://tracker.yandex.ru/OPTIC-123"
    },
    {
      task: "Подготовить отчет по продажам за неделю", 
      priority: "medium",
      dueTime: "до 18:00",
      trackerUrl: "https://tracker.yandex.ru/OPTIC-124"
    },
    {
      task: "Обучение: новая коллекция Ray-Ban",
      priority: "low",
      dueTime: "завтра",
      trackerUrl: "https://tracker.yandex.ru/OPTIC-125"
    },
    {
      task: "Проверить поступление товара",
      priority: "medium", 
      dueTime: "до 16:00",
      trackerUrl: "https://tracker.yandex.ru/OPTIC-126"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-orange-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleTaskClick = (trackerUrl: string) => {
    window.open(trackerUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-600">Дашборд</h1>
        <p className="text-gray-600 text-lg">Добро пожаловать, {userName}!</p>
      </div>

      {/* Main Dashboard Card */}
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white border-0 shadow-2xl">
          <CardContent className="p-8">
            {/* Three Circular Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {mainStats.map((stat, index) => (
                <div key={index} className="text-center">
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="white"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${stat.progress * 2.51} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-blue-600 text-sm font-bold px-2 py-1 rounded-full">
                      {stat.progress}%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm opacity-80">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs opacity-60">{stat.subtitle}</p>
                  </div>
                </div>
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

      {/* Tasks Section */}
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <List className="w-4 h-4 text-white" />
            </div>
            <CardTitle className="text-xl">Задачи на сегодня</CardTitle>
            <div className="ml-auto flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">
                <List className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tasks.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleTaskClick(item.trackerUrl)}
                >
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(item.priority)} mt-1 flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight">{item.task}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.dueTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
