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
      id: "customer-consultation",
      title: "Консультирование клиентов",
      description: "Правила и процедуры консультирования клиентов по выбору оптических изделий",
      status: "completed",
      progress: 100,
      subsections: [
        { title: "Определение потребностей клиента", progress: 100 },
        { title: "Подбор оправы по типу лица", progress: 100 },
        { title: "Консультирование по линзам", progress: 100 }
      ],
      courses: [
        { title: "Основы консультирования в оптике", duration: "2 часа", progress: 100 },
        { title: "Психология продаж оптических изделий", duration: "1.5 часа", progress: 100 }
      ]
    },
    {
      id: "vision-testing",
      title: "Проверка зрения",
      description: "Стандарты проведения диагностики и проверки остроты зрения",
      status: "in-progress",
      progress: 75,
      subsections: [
        { title: "Визометрия", progress: 100 },
        { title: "Рефрактометрия", progress: 75 },
        { title: "Авторефрактометрия", progress: 50 }
      ],
      courses: [
        { title: "Методы исследования зрения", duration: "3 часа", progress: 100 },
        { title: "Работа с диагностическим оборудованием", duration: "2 часа", progress: 25 }
      ]
    },
    {
      id: "lens-selection",
      title: "Подбор линз",
      description: "Правила подбора очковых и контактных линз по рецепту врача",
      status: "active",
      progress: 60,
      subsections: [
        { title: "Интерпретация рецепта", progress: 80 },
        { title: "Типы линз и покрытий", progress: 60 },
        { title: "Центрирование линз", progress: 40 }
      ],
      courses: [
        { title: "Оптические свойства линз", duration: "2.5 часа", progress: 80 },
        { title: "Современные покрытия линз", duration: "1.5 часа", progress: 0 }
      ]
    },
    {
      id: "contact-lenses",
      title: "Контактные линзы",
      description: "Работа с контактными линзами и обучение пациентов",
      status: "assigned",
      progress: 0,
      subsections: [
        { title: "Подбор контактных линз", progress: 0 },
        { title: "Обучение пациентов", progress: 0 },
        { title: "Уход за контактными линзами", progress: 0 }
      ],
      courses: [
        { title: "Контактная коррекция зрения", duration: "4 часа", progress: 0 },
        { title: "Осложнения при ношении КЛ", duration: "2 часа", progress: 0 }
      ]
    },
    {
      id: "frame-adjustment",
      title: "Подгонка оправ",
      description: "Техники правильной подгонки и ремонта очковых оправ",
      status: "assigned",
      progress: 0,
      subsections: [
        { title: "Анатомия лица и посадка оправы", progress: 0 },
        { title: "Регулировка заушников", progress: 0 },
        { title: "Ремонт оправ", progress: 0 }
      ],
      courses: [
        { title: "Техники подгонки оправ", duration: "3 часа", progress: 0 },
        { title: "Ремонт и обслуживание очков", duration: "2 часа", progress: 0 }
      ]
    },
    {
      id: "lens-processing",
      title: "Обработка линз",
      description: "Технология изготовления и обработки очковых линз",
      status: "assigned", 
      progress: 0,
      subsections: [
        { title: "Разметка и центрирование", progress: 0 },
        { title: "Обработка на станке", progress: 0 },
        { title: "Контроль качества", progress: 0 }
      ],
      courses: [
        { title: "Технология изготовления очков", duration: "4 часа", progress: 0 },
        { title: "Работа на обрабатывающем оборудовании", duration: "3 часа", progress: 0 }
      ]
    },
    {
      id: "sales-process",
      title: "Процесс продажи",
      description: "Стандарты ведения продаж и обслуживания клиентов",
      status: "active",
      progress: 45,
      subsections: [
        { title: "Встреча и приветствие клиента", progress: 60 },
        { title: "Презентация товара", progress: 30 },
        { title: "Закрытие сделки", progress: 45 }
      ],
      courses: [
        { title: "Техники продаж в оптике", duration: "2.5 часа", progress: 60 },
        { title: "Работа с возражениями", duration: "1.5 часа", progress: 30 },
        { title: "Послепродажное обслуживание", duration: "1 час", progress: 0 }
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
