
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const StandardsSection = () => {
  const standards = [
    {
      category: "Сервис",
      title: "Дарим вау-опыт",
      description: "Создаем идеальный сервис и консультируем с заботой",
      progress: 80,
      status: "В процессе",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      category: "Продажи", 
      title: "Помогаем выбрать лучшее",
      description: "Достигаем плана продаж и знаем наши продукты",
      progress: 95,
      status: "Активен",
      statusColor: "bg-orange-100 text-orange-800"
    },
    {
      category: "Саморазвитие",
      title: "Растем с LOOV",
      description: "Учимся и растем, проходим обучающие программы",
      progress: 100,
      status: "Завершен",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      category: "CRM",
      title: "Строим отношения",
      description: "Ведем данные в CRM и поддерживаем порядок",
      progress: 75,
      status: "Активен",
      statusColor: "bg-orange-100 text-orange-800"
    },
    {
      category: "Инвентаризация",
      title: "Помогаем с инвентаризацией",
      description: "Поддерживаем порядок и выкладку товаров",
      progress: 85,
      status: "Активен",
      statusColor: "bg-orange-100 text-orange-800"
    }
  ];

  const expandedStandard = {
    responsible: "Менеджер заботы",
    owner: "Владелец процеса: Владимир Амосов",
    materials: [
      { title: "Базовый подход заботы в LOOV", type: "Руководство" },
      { title: "Работа с CJM", type: "Методология" },
      { title: "Стандарты обслуживания клиентов", type: "Стандарт" }
    ],
    courses: [
      { title: "Основы клиентского сервиса", progress: 60, deadline: "До: 15.12.2024" },
      { title: "Работа с возражениями", progress: 30, deadline: "До: 20.12.2024" }
    ],
    completedCourses: [
      { title: "Введение в LOOV", score: "95%", completed: "Завершен: 10.11.2024" },
      { title: "Корпоративная культура", score: "88%", completed: "Завершен: 05.11.2024" }
    ],
    keyMetrics: [
      "Чек-лист торговой точки пройден на ≥ 80%",
      "NPS ≥ 85%, жалоб ≤ 2 в месяц",
      "Конверсия Входящий→Оформленные заказы ≥ 70%"
    ]
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between ml-0 sm:ml-14 gap-2 sm:gap-0">
        <h1 className="text-xl md:text-2xl font-bold">Стандарты работы</h1>
        <Button variant="outline" size="sm" className="text-xs md:text-sm">Скачать руководство</Button>
      </div>

      {/* Standards Cards */}
      <div className="space-y-4">
        {standards.map((standard, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{standard.category}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{standard.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{standard.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={`text-xs ${standard.statusColor}`}>
                    {standard.status}
                  </Badge>
                  <span className="text-lg md:text-xl font-bold">{standard.progress}%</span>
                </div>
              </div>
              
              <div className="w-full bg-secondary rounded-full h-2 md:h-3">
                <div 
                  className="bg-primary h-2 md:h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${standard.progress}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expanded Standard Details */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg md:text-xl mb-2">Дарим вау-опыт</CardTitle>
              <p className="text-sm text-muted-foreground">Создаем идеальный сервис и консультируем с заботой</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-100 text-blue-800 text-xs">В процессе</Badge>
              <span className="text-xl font-bold">80%</span>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-full h-3 mt-4">
            <div className="bg-primary h-3 rounded-full" style={{ width: '80%' }} />
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Responsible Person */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm">👤</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ответственный</p>
              <p className="font-medium">{expandedStandard.responsible}</p>
              <p className="text-sm text-muted-foreground">{expandedStandard.owner}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Materials */}
            <div>
              <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                📋 Статьи и материалы
              </h4>
              <div className="space-y-2">
                {expandedStandard.materials.map((material, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded border">
                    <span className="text-sm">{material.title}</span>
                    <Badge variant="outline" className="text-xs">{material.type}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-base font-semibold mb-3">🎓 Курсы обучения</h4>
              
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">▷ Назначенные курсы</p>
                <div className="space-y-3">
                  {expandedStandard.courses.map((course, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{course.title}</span>
                        <span className="text-muted-foreground">{course.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs">Прогресс: {course.progress}%</span>
                        <div className="flex-1 bg-secondary rounded-full h-1.5">
                          <div 
                            className="bg-primary h-1.5 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">✓ Завершенные курсы</p>
                <div className="space-y-2">
                  {expandedStandard.completedCourses.map((course, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{course.title}</span>
                      <div className="text-right">
                        <p className="text-muted-foreground">Оценка: {course.score}</p>
                        <p className="text-xs text-muted-foreground">{course.completed}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="text-base font-semibold mb-3">Ключевые метрики</h4>
            <ul className="space-y-2">
              {expandedStandard.keyMetrics.map((metric, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span>•</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
