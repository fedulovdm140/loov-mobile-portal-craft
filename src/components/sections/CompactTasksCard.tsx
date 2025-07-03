import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, Clock } from "lucide-react";

export const CompactTasksCard = () => {
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
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-amber-500";
      case "low": return "bg-emerald-500";
      default: return "bg-gray-500";
    }
  };

  const handleTaskClick = (trackerUrl: string) => {
    window.open(trackerUrl, '_blank');
  };

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-1 sm:pb-3 px-2 sm:px-4 pt-2 sm:pt-4">
        <CardTitle className="text-xs sm:text-base font-bold text-gray-800 flex items-center gap-1.5 sm:gap-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
            <List className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <span>Задачи на сегодня</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 sm:px-4 pt-0 pb-2 sm:pb-4">
        <div className="space-y-2">
          {tasks.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50/50 rounded-lg p-2 sm:p-3 border border-gray-200/50 hover:shadow-md cursor-pointer transition-all duration-200 hover:scale-[1.01]"
              onClick={() => handleTaskClick(item.trackerUrl)}
            >
              <div className="flex items-start gap-2">
                <div className={`w-3 h-3 sm:w-4 sm:h-4 ${getPriorityColor(item.priority)} rounded-full mt-0.5 shadow-sm flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium leading-tight text-gray-900 mb-1 break-words">{item.task}</p>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-medium">{item.dueTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};