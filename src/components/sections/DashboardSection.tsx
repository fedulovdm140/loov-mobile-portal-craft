
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DashboardSection = () => {
  const dashboardItems = [
    { title: "План/факт продаж", period: "1 мес., 1 нед, 1 день", value: "15,000 ₽", color: "bg-blue-500" },
    { title: "KPI - поставленные на месяц", value: "85%", color: "bg-green-500" },
    { title: "Конверсии", value: "12.5%", color: "bg-purple-500" },
    { title: "Задачи", value: "8 активных", color: "bg-orange-500" },
    { title: "Кто на смене", value: "15 человек", color: "bg-red-500" },
    { title: "Назначенные курсы, обучения", value: "3 курса", color: "bg-indigo-500" },
    { title: "Дайджесты", value: "2 новых", color: "bg-pink-500" },
    { title: "Новости (ДР, отпуски, отсутствия)", value: "5 событий", color: "bg-cyan-500" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Дашборд</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardItems.map((item, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className={`w-full h-2 rounded ${item.color} mb-2`} />
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              {item.period && (
                <p className="text-xs text-muted-foreground">{item.period}</p>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Задачи на сегодня</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span>Подготовить отчет по продажам</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span>Провести встречу с командой</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span>Обновить KPI метрики</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
