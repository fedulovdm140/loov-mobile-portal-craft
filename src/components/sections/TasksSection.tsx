
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, RefreshCw, List } from "lucide-react";

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
  );
};
