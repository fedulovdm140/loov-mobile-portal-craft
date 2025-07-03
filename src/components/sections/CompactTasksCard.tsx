
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, Clock, AlertTriangle } from "lucide-react";

export const CompactTasksCard = () => {
  const tasks = [
    {
      task: "Связаться с клиентом по заказу",
      priority: "high",
      dueTime: "до 14:00"
    },
    {
      task: "Подготовить отчет по продажам", 
      priority: "medium",
      dueTime: "до 18:00"
    },
    {
      task: "Обучение: новая коллекция",
      priority: "low",
      dueTime: "завтра"
    }
  ];

  const highPriorityCount = tasks.filter(t => t.priority === "high").length;

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-3">
          <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
            <List className="w-4 h-4 text-white" />
          </div>
          <span>Задачи</span>
          {highPriorityCount > 0 && (
            <div className="ml-auto flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full">
              <AlertTriangle className="w-3 h-3" />
              <span className="text-xs font-medium">{highPriorityCount}</span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pt-0 pb-4">
        <div className="space-y-2">
          {tasks.map((item, index) => {
            const isHigh = item.priority === "high";
            return (
              <div 
                key={index} 
                className={`p-3 rounded-lg border transition-all duration-200 hover:shadow-sm cursor-pointer ${
                  isHigh 
                    ? "bg-gradient-to-r from-red-50 to-pink-50/50 border-red-200/50" 
                    : "bg-gradient-to-r from-gray-50 to-slate-50/50 border-gray-200/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate mb-1">{item.task}</p>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-600">{item.dueTime}</span>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    isHigh ? "bg-red-500" : item.priority === "medium" ? "bg-amber-500" : "bg-emerald-500"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
