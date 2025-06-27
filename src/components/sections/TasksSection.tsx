
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, RefreshCw } from "lucide-react";

export const TasksSection = () => {
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
      case "medium": return "bg-orange-500";
      case "low": return "bg-emerald-500";
      default: return "bg-gray-500";
    }
  };

  const handleTaskClick = (trackerUrl: string) => {
    window.open(trackerUrl, '_blank');
  };

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="pb-2 px-3">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <List className="w-3 h-3 text-orange-600" />
          </div>
          <span className="truncate">Задачи на сегодня</span>
          <button className="ml-auto p-1 hover:bg-gray-50 rounded-lg transition-colors flex-shrink-0">
            <RefreshCw className="w-3 h-3 text-gray-600" />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 pt-0 pb-3">
        <div className="space-y-2">
          {tasks.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-2 p-2 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors hover:shadow-sm"
              onClick={() => handleTaskClick(item.trackerUrl)}
            >
              <div className={`w-2 h-2 rounded-full ${getPriorityColor(item.priority)} mt-1.5 flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium leading-tight text-gray-900 mb-1 break-words">{item.task}</p>
                <p className="text-xs text-gray-500 font-medium">{item.dueTime}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
