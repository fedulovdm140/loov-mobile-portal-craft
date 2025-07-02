
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, RefreshCw, Clock } from "lucide-react";

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

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case "high": return { color: "bg-red-500", label: "Высокий", bgColor: "from-red-50 to-pink-50/50", borderColor: "border-red-200/50" };
      case "medium": return { color: "bg-amber-500", label: "Средний", bgColor: "from-amber-50 to-orange-50/50", borderColor: "border-amber-200/50" };
      case "low": return { color: "bg-emerald-500", label: "Низкий", bgColor: "from-emerald-50 to-green-50/50", borderColor: "border-emerald-200/50" };
      default: return { color: "bg-gray-500", label: "Обычный", bgColor: "from-gray-50 to-slate-50/50", borderColor: "border-gray-200/50" };
    }
  };

  const handleTaskClick = (trackerUrl: string) => {
    window.open(trackerUrl, '_blank');
  };

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
            <List className="w-4 h-4 text-white" />
          </div>
          <span>Задачи на сегодня</span>
          <button className="ml-auto p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4 text-gray-500" />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pt-0 pb-4">
        <div className="space-y-3">
          {tasks.map((item, index) => {
            const priorityConfig = getPriorityConfig(item.priority);
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-r ${priorityConfig.bgColor} rounded-xl p-3 border ${priorityConfig.borderColor} shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 hover:scale-[1.02]`}
                onClick={() => handleTaskClick(item.trackerUrl)}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 ${priorityConfig.color} rounded-lg flex items-center justify-center mt-0.5 shadow-sm`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight text-gray-900 mb-2 break-words">{item.task}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-600 font-medium">{item.dueTime}</span>
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">
                        {priorityConfig.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
