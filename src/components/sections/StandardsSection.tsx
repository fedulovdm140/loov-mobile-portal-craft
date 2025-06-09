import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { BookOpen, User, ExternalLink, Play, CheckCircle } from "lucide-react";
import { useState } from "react";
export const StandardsSection = () => {
  const [openStandards, setOpenStandards] = useState<string[]>([]);
  const toggleStandard = (standardId: string) => {
    setOpenStandards(prev => prev.includes(standardId) ? prev.filter(id => id !== standardId) : [...prev, standardId]);
  };
  const standardsData = [{
    id: "service",
    zone: "Сервис",
    title: "Дарим вау-опыт",
    description: "Создаем идеальный сервис и консультируем с заботой",
    status: "in-progress",
    progress: 80,
    responsible: "Менеджер заботы",
    owner: "Владимир Амосов",
    metrics: ["Чек-лист торговой точки пройден на ≥ 80%", "NPS ≥ 85%, жалоб ≤ 2 в месяц", "Конверсия Входящий→Оформленные заказы ≥ 70%"],
    articles: [{
      title: "Базовый подход заботы в LOOV",
      type: "guide"
    }, {
      title: "Работа с CJM",
      type: "methodology"
    }, {
      title: "Стандарты обслуживания клиентов",
      type: "standard"
    }],
    courses: {
      assigned: [{
        title: "Основы клиентского сервиса",
        progress: 60,
        deadline: "15.12.2024",
        lmsUrl: "#"
      }, {
        title: "Работа с возражениями",
        progress: 30,
        deadline: "20.12.2024",
        lmsUrl: "#"
      }],
      completed: [{
        title: "Введение в LOOV",
        completedDate: "10.11.2024",
        score: 95,
        lmsUrl: "#"
      }, {
        title: "Корпоративная культура",
        completedDate: "05.11.2024",
        score: 88,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "sales",
    zone: "Продажи",
    title: "Помогаем выбрать лучшее",
    description: "Достигаем плана продаж и знаем наши продукты",
    status: "active",
    progress: 95,
    responsible: "Менеджер заботы",
    owner: "Коммерческий директор",
    metrics: ["План продаж ≥ 100%, допродажи в ≥ 50% заказов", "Средний чек с ценовой значимостью"],
    articles: [{
      title: "Структура Рудников в Клубах и Клиниках",
      type: "guide"
    }, {
      title: "Техники продаж LOOV",
      type: "methodology"
    }],
    courses: {
      assigned: [{
        title: "Продажи очков и линз",
        progress: 85,
        deadline: "18.12.2024",
        lmsUrl: "#"
      }],
      completed: [{
        title: "Знание продуктовой линейки",
        completedDate: "12.11.2024",
        score: 92,
        lmsUrl: "#"
      }, {
        title: "Работа с планом продаж",
        completedDate: "08.11.2024",
        score: 90,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "development",
    zone: "Саморазвитие",
    title: "Растем с LOOV",
    description: "Учимся и растем, проходим обучающие программы",
    status: "completed",
    progress: 100,
    responsible: "Менеджер заботы",
    owner: "HRD",
    metrics: ["Пройденные тесты >80%, Грейды??"],
    articles: [{
      title: "План профессионального развития",
      type: "guide"
    }, {
      title: "Система грейдов LOOV",
      type: "standard"
    }],
    courses: {
      assigned: [],
      completed: [{
        title: "Личная эффективность",
        completedDate: "20.11.2024",
        score: 95,
        lmsUrl: "#"
      }, {
        title: "Основы лидерства",
        completedDate: "15.11.2024",
        score: 87,
        lmsUrl: "#"
      }, {
        title: "Управление временем",
        completedDate: "10.11.2024",
        score: 93,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "crm",
    zone: "CRM",
    title: "Строим отношения",
    description: "Ведем данные в CRM и поддерживаем порядок",
    status: "active",
    progress: 75,
    responsible: "Менеджер заботы",
    owner: "Игорь Николаев",
    metrics: ["100% заказов и клиентов заведены без ошибок", "Ввод данных ≤ 5 минут после заказа"],
    articles: [{
      title: "Заказы. Общая информация",
      type: "guide"
    }, {
      title: "Работа с CRM системой",
      type: "methodology"
    }],
    courses: {
      assigned: [{
        title: "Работа с CRM",
        progress: 45,
        deadline: "25.12.2024",
        lmsUrl: "#"
      }],
      completed: [{
        title: "Основы CRM",
        completedDate: "18.11.2024",
        score: 88,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "inventory",
    zone: "Инвентаризация",
    title: "Помогаем с инвентаризацией",
    description: "Поддерживаем порядок и выкладку товаров",
    status: "active",
    progress: 85,
    responsible: "Менеджер заботы",
    owner: "Мерчендайзер",
    metrics: ["Расхождение <1%, 100% участие в инвентаризациях"],
    articles: [{
      title: "Мерчендайзинг с учетом приоритета LOOV",
      type: "guide"
    }, {
      title: "Идеальная инвентаризация",
      type: "methodology"
    }, {
      title: "Основные принципы выкладки оправ",
      type: "standard"
    }],
    courses: {
      assigned: [{
        title: "Инвентаризация товаров",
        progress: 70,
        deadline: "22.12.2024",
        lmsUrl: "#"
      }],
      completed: [{
        title: "Основы мерчендайзинга",
        completedDate: "16.11.2024",
        score: 91,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "atmosphere",
    zone: "Зал",
    title: "Создаем стильное пространство",
    description: "Создаем атмосферу LOOV в торговом зале",
    status: "in-progress",
    progress: 70,
    responsible: "Менеджер заботы",
    owner: "Лидер стиля",
    metrics: ["0 замечаний по форме и музыке при еженедельных проверках ТП"],
    articles: [{
      title: "Стандарт внешнего вида в клубах и клиниках LOOV",
      type: "standard"
    }, {
      title: "Музыка в LOOV",
      type: "guide"
    }, {
      title: "Микроклимат в LOOV",
      type: "guide"
    }],
    courses: {
      assigned: [{
        title: "Стандарты оформления торгового зала",
        progress: 40,
        deadline: "30.12.2024",
        lmsUrl: "#"
      }],
      completed: [{
        title: "Дресс-код LOOV",
        completedDate: "14.11.2024",
        score: 96,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "cashier",
    zone: "Касса",
    title: "Делаем расчеты безупречно",
    description: "Соблюдаем кассовую дисциплину и работаем с операциями",
    status: "completed",
    progress: 100,
    responsible: "Менеджер заботы",
    owner: "Бухгалтер",
    metrics: ["0 ошибок в кассовых операциях, время на кассе ≤ 3 минуты"],
    articles: [{
      title: "Кассовые операции",
      type: "guide"
    }, {
      title: "Работа с платежными системами",
      type: "methodology"
    }],
    courses: {
      assigned: [],
      completed: [{
        title: "Кассовая дисциплина",
        completedDate: "22.11.2024",
        score: 98,
        lmsUrl: "#"
      }, {
        title: "Работа с эквайрингом",
        completedDate: "19.11.2024",
        score: 94,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "craftsmen",
    zone: "Работа с крафтерами и оптик-мастерами",
    title: "Доводим заказы до готовы",
    description: "Передаем заказы крафтерам и оптик-мастерам",
    status: "active",
    progress: 90,
    responsible: "Менеджер заботы",
    owner: "Коммерческий директор",
    metrics: ["100% заказов переданы с корректными параметрами, ошибки ≤ 1%"],
    articles: [{
      title: "Как принимать и отдавать заказы на ремонт и изготовление",
      type: "guide"
    }, {
      title: "Контроль качества изготовления",
      type: "methodology"
    }],
    courses: {
      assigned: [{
        title: "Работа с производством",
        progress: 80,
        deadline: "28.12.2024",
        lmsUrl: "#"
      }],
      completed: [{
        title: "Технические параметры заказов",
        completedDate: "25.11.2024",
        score: 89,
        lmsUrl: "#"
      }]
    }
  }, {
    id: "optometrists",
    zone: "Работа с оптометристами/офтальмологами",
    title: "Заботимся о зрении",
    description: "Организуем проверку зрения для клиентов",
    status: "active",
    progress: 80,
    responsible: "Менеджер заботы",
    owner: "Коммерческий директор",
    metrics: ["≥ 95% заказов выполнены в срок, 100% клиентов уведомлены", "Конверсия Входящий→Проверка зрения ≥ 80%, время ожидания ≤ 15 минут"],
    articles: [{
      title: "Организация проверки зрения",
      type: "guide"
    }, {
      title: "Взаимодействие с врачами",
      type: "methodology"
    }],
    courses: {
      assigned: [{
        title: "Основы оптометрии",
        progress: 55,
        deadline: "02.01.2025",
        lmsUrl: "#"
      }],
      completed: [{
        title: "Расписание врачей",
        completedDate: "28.11.2024",
        score: 85,
        lmsUrl: "#"
      }]
    }
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "active":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "assigned":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Завершен";
      case "in-progress":
        return "В процессе";
      case "active":
        return "Активен";
      case "assigned":
        return "Назначен";
      default:
        return "Не назначен";
    }
  };
  const getArticleTypeIcon = (type: string) => {
    switch (type) {
      case "guide":
        return <BookOpen className="h-4 w-4" />;
      case "methodology":
        return <BookOpen className="h-4 w-4" />;
      case "standard":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };
  const getArticleTypeBadge = (type: string) => {
    switch (type) {
      case "guide":
        return "Руководство";
      case "methodology":
        return "Методология";
      case "standard":
        return "Стандарт";
      default:
        return "Документ";
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-left mx-[30px]">Стандарты работы LOOV</h1>
        <Button>Добавить базу знаний</Button>
      </div>

      <div className="space-y-4">
        {standardsData.map(standard => <Collapsible key={standard.id}>
            <Card>
              <CollapsibleTrigger className="w-full" onClick={() => toggleStandard(standard.id)}>
                <CardHeader className="hover:bg-accent/50 transition-colors">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                      <div className="text-lg">
                        {openStandards.includes(standard.id) ? "▼" : "▶"}
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {standard.zone}
                          </Badge>
                        </div>
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
                  <Progress value={standard.progress} className="mt-3 h-2" />
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="border-t">
                  <div className="space-y-6 pt-4">
                    {/* Ответственный */}
                    <div className="flex items-center gap-3 p-4 border rounded-lg bg-accent/30">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Ответственный</div>
                        <div className="font-medium">{standard.responsible}</div>
                        <div className="text-sm text-muted-foreground">Владелец процесса: {standard.owner}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Статьи */}
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Статьи и материалы
                        </h4>
                        <div className="space-y-1">
                          {standard.articles.map((article, index) => <div key={index} className="flex items-center justify-between p-2 hover:bg-accent/50 rounded cursor-pointer transition-colors">
                              <div className="flex items-center gap-2 flex-1">
                                {getArticleTypeIcon(article.type)}
                                <span className="text-sm">{article.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {getArticleTypeBadge(article.type)}
                                </Badge>
                                <ExternalLink className="h-3 w-3 text-muted-foreground" />
                              </div>
                            </div>)}
                        </div>
                      </div>

                      {/* Курсы */}
                      <div>
                        <h4 className="font-medium mb-3">Курсы обучения</h4>
                        
                        {/* Назначенные курсы */}
                        {standard.courses.assigned.length > 0 && <div className="mb-4">
                            <h5 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                              <Play className="h-3 w-3" />
                              Назначенные курсы
                            </h5>
                            <div className="space-y-1">
                              {standard.courses.assigned.map((course, index) => <div key={index} className="p-2 hover:bg-accent/50 rounded cursor-pointer transition-colors">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium">{course.title}</span>
                                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                                  </div>
                                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                                    <span>Прогресс: {course.progress}%</span>
                                    <span>До: {course.deadline}</span>
                                  </div>
                                  <Progress value={course.progress} className="h-1" />
                                </div>)}
                            </div>
                          </div>}

                        {/* Завершенные курсы */}
                        {standard.courses.completed.length > 0 && <div>
                            <h5 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                              <CheckCircle className="h-3 w-3" />
                              Завершенные курсы
                            </h5>
                            <div className="space-y-1">
                              {standard.courses.completed.map((course, index) => <div key={index} className="p-2 hover:bg-accent/50 rounded cursor-pointer transition-colors">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium">{course.title}</span>
                                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                                  </div>
                                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span>Оценка: {course.score}%</span>
                                    <span>Завершен: {course.completedDate}</span>
                                  </div>
                                </div>)}
                            </div>
                          </div>}
                      </div>
                    </div>

                    {/* Метрики */}
                    {standard.metrics.length > 0 && <div className="p-4 border rounded-lg bg-muted/30">
                        <h5 className="text-sm font-medium mb-2">Ключевые метрики</h5>
                        <ul className="space-y-1">
                          {standard.metrics.map((metric, index) => <li key={index} className="text-sm">• {metric}</li>)}
                        </ul>
                      </div>}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>)}
      </div>
    </div>;
};