
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, Clock } from "lucide-react";

export const TasksSection = () => {
  const tasks = [
    {
      task: "Связаться с клиентом по заказу прогрессивных линз",
      priority: "high",
      dueTime: "до 14:00"
    },
    {
      task: "Подготовить отчет по продажам за неделю", 
      priority: "medium",
      dueTime: "до 18:00"
    }
  ];

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case "high": return { color: "bg-red-500", bgColor: "from-red-50 to-pink-50/50", borderColor: "border-red-200/50" };
      case "medium": return { color: "bg-amber-500", bgColor: "from-amber-50 to-orange-50/50", borderColor: "border-amber-200/50" };
      default: return { color: "bg-gray-500", bgColor: "from-gray-50 to-slate-50/50", borderColor: "border-gray-200/50" };
    }
  };

  return (
    <Card className="bg-white shadow-sm border border-gray-200 h-fit">
      <CardHeader className="pb-1 px-2 pt-2">
        <CardTitle className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
          <div className="w-4 h-4 bg-orange-600 rounded flex items-center justify-center">
            <List className="w-2 h-2 text-white" />
          </div>
          <span>Задачи на сегодня</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 pt-0 pb-2">
        <div className="space-y-1.5">
          {tasks.map((item, index) => {
            const priorityConfig = getPriorityConfig(item.priority);
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-r ${priorityConfig.bgColor} rounded-md p-2 border ${priorityConfig.borderColor}`}
              >
                <div className="flex items-start gap-2">
                  <div className={`w-3 h-3 ${priorityConfig.color} rounded mt-0.5`}>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-medium leading-tight text-gray-900 mb-1">{item.task}</p>
                    <div className="flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-gray-500" />
                      <span className="text-[9px] text-gray-600 font-medium">{item.dueTime}</span>
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
