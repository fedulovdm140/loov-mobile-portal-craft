
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export const StandardsSection = () => {
  const [openStandards, setOpenStandards] = useState<string[]>([]);

  const toggleStandard = (standardId: string) => {
    setOpenStandards(prev => 
      prev.includes(standardId) 
        ? prev.filter(id => id !== standardId)
        : [...prev, standardId]
    );
  };

  const standardsData = [
    {
      id: "organization",
      title: "Организация работы",
      description: "Правила и процедуры ведения рабочего процесса в салоне оптики",
      status: "completed",
      progress: 100,
      subsections: [
        { title: "Правила хранения", progress: 100 },
        { title: "Прием и расстановка теста", progress: 100 },
        { title: "Прием ингредиентов и товаров", progress: 100 }
      ],
      courses: [
        { title: "Основы организации рабочего места оптика", duration: "1.5 часа", progress: 100 },
        { title: "Правила хранения оптических изделий", duration: "45 мин", progress: 100 }
      ]
    },
    {
      id: "cleaning",
      title: "Уборка в пиццерии",
      description: "Стандарты чистоты и санитарии в салоне оптики",
      status: "in-progress",
      progress: 75,
      subsections: [
        { title: "Ежедневная уборка", progress: 100 },
        { title: "Дезинфекция оборудования", progress: 75 },
        { title: "Уборка витрин и оправ", progress: 50 }
      ],
      courses: [
        { title: "Санитарные нормы в оптике", duration: "1 час", progress: 100 },
        { title: "Уход за оптическим оборудованием", duration: "2 часа", progress: 25 }
      ]
    },
    {
      id: "storage",
      title: "Прием и хранение продуктов",
      description: "Правила приема, проверки и хранения оптических товаров",
      status: "active",
      progress: 60,
      subsections: [
        { title: "Правила хранения", progress: 80 },
        { title: "Прием и расстановка теста", progress: 60 },
        { title: "Прием ингредиентов и товаров", progress: 40 }
      ],
      courses: [
        { title: "Приемка товара в оптике", duration: "1 час", progress: 80 },
        { title: "Контроль качества оптических изделий", duration: "1.5 часа", progress: 0 }
      ]
    },
    {
      id: "cold-shop",
      title: "Холодный цех",
      description: "Работа с контактными линзами и растворами",
      status: "assigned",
      progress: 0,
      subsections: [
        { title: "Правила работы с контактными линзами", progress: 0 },
        { title: "Хранение растворов", progress: 0 },
        { title: "Консультирование по уходу", progress: 0 }
      ],
      courses: [
        { title: "Основы контактной коррекции", duration: "3 часа", progress: 0 },
        { title: "Подбор и уход за контактными линзами", duration: "2 часа", progress: 0 }
      ]
    },
    {
      id: "hot-shop",
      title: "Горячий цех",
      description: "Работа с оборудованием для изготовления очков",
      status: "assigned",
      progress: 0,
      subsections: [
        { title: "Безопасность при работе с оборудованием", progress: 0 },
        { title: "Обработка линз", progress: 0 },
        { title: "Сборка очков", progress: 0 }
      ],
      courses: [
        { title: "Технология изготовления очков", duration: "4 часа", progress: 0 },
        { title: "Безопасность в оптической мастерской", duration: "1 час", progress: 0 }
      ]
    },
    {
      id: "dough-shop",
      title: "Тестомесильный цех",
      description: "Работа с диоптрийными очками и сложными случаями",
      status: "assigned", 
      progress: 0,
      subsections: [
        { title: "Сложные рецепты", progress: 0 },
        { title: "Прогрессивные линзы", progress: 0 },
        { title: "Специальные покрытия", progress: 0 }
      ],
      courses: [
        { title: "Прогрессивные и офисные линзы", duration: "2.5 часа", progress: 0 },
        { title: "Специальные покрытия линз", duration: "1.5 часа", progress: 0 }
      ]
    },
    {
      id: "cashier",
      title: "Касса",
      description: "Работа с кассовым оборудованием и оформление продаж",
      status: "active",
      progress: 45,
      subsections: [
        { title: "Пять принципов удивительного сервиса", progress: 60 },
        { title: "Работа на станции гости", progress: 30 },
        { title: "Как решать проблемы гостей", progress: 45 }
      ],
      courses: [
        { title: "Кассовые операции в оптике", duration: "2 часа", progress: 60 },
        { title: "Работа с программой автоматизации", duration: "1.5 часа", progress: 30 },
        { title: "Гарантийное обслуживание", duration: "1 час", progress: 0 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "in-progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "active": return "bg-orange-100 text-orange-800 border-orange-200";
      case "assigned": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Завершен";
      case "in-progress": return "В процессе";
      case "active": return "Активен";
      case "assigned": return "Назначен";
      default: return "Не назначен";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Стандарты работы</h1>
        <Button>Добавить базу знаний</Button>
      </div>

      <div className="space-y-4">
        {standardsData.map((standard) => (
          <Collapsible key={standard.id}>
            <Card>
              <CollapsibleTrigger 
                className="w-full"
                onClick={() => toggleStandard(standard.id)}
              >
                <CardHeader className="hover:bg-accent/50 transition-colors">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                      <div className="text-lg">
                        {openStandards.includes(standard.id) ? "▼" : "▶"}
                      </div>
                      <div className="text-left">
                        <CardTitle className="text-lg">{standard.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{standard.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(standard.status)}>
                        {getStatusText(standard.status)}
                      </Badge>
                      <div className="text-sm font-medium">{standard.progress}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${standard.progress}%` }}
                    />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="border-t">
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    {/* Подразделы стандарта */}
                    <div>
                      <h4 className="font-medium mb-3">Разделы стандарта</h4>
                      <div className="space-y-3">
                        {standard.subsections.map((subsection, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{subsection.title}</span>
                              <span className="font-medium">{subsection.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-primary h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${subsection.progress}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm">Изучить стандарт</Button>
                        <Button size="sm" variant="outline">Скачать чек-лист</Button>
                      </div>
                    </div>

                    {/* Связанные курсы */}
                    <div>
                      <h4 className="font-medium mb-3">Связанные курсы</h4>
                      <div className="space-y-3">
                        {standard.courses.map((course, index) => (
                          <div key={index} className="p-3 border rounded-lg space-y-2">
                            <div className="flex justify-between items-start">
                              <h5 className="text-sm font-medium leading-tight">{course.title}</h5>
                              <Badge variant="outline" className="text-xs">
                                {course.duration}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Прогресс</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                            <Button size="sm" variant="outline" className="w-full mt-2">
                              {course.progress > 0 ? "Продолжить курс" : "Начать курс"}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};
