
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
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
      id: "service",
      zone: "Сервис",
      title: "Дарим вау-опыт",
      description: "Создаем идеальный сервис и консультируем с заботой",
      status: "in-progress",
      progress: 80,
      responsible: "Менеджер заботы",
      owner: "Владимир Амосов",
      metrics: [
        "Чек-лист торговой точки пройден на ≥ 80%",
        "NPS ≥ 85%, жалоб ≤ 2 в месяц",
        "Конверсия Входящий→Оформленные заказы ≥ 70%"
      ],
      standards: [
        "Конверсия Входящий→Продажи ≥ 70%, ≥ 5 персонализированных предложений в смену"
      ],
      links: ["Базовый подход заботы в LOOV", "Работа с CJM"]
    },
    {
      id: "sales",
      zone: "Продажи",
      title: "Помогаем выбрать лучшее",
      description: "Достигаем плана продаж и знаем наши продукты",
      status: "active",
      progress: 95,
      responsible: "Менеджер заботы",
      owner: "Коммерческий директор",
      metrics: [
        "План продаж ≥ 100%, допродажи в ≥ 50% заказов",
        "Средний чек с ценовой значимостью"
      ],
      standards: [
        "Тест по продуктам >90%",
        "Выполненные целевые планы продаж"
      ],
      links: ["Структура Рудников в Клубах и Клиниках"]
    },
    {
      id: "development",
      zone: "Саморазвитие",
      title: "Растем с LOOV",
      description: "Учимся и растем, проходим обучающие программы",
      status: "completed",
      progress: 100,
      responsible: "Менеджер заботы",
      owner: "HRD",
      metrics: [
        "Пройденные тесты >80%, Грейды??"
      ],
      standards: [],
      links: []
    },
    {
      id: "crm",
      zone: "CRM",
      title: "Строим отношения",
      description: "Ведем данные в CRM и поддерживаем порядок",
      status: "active",
      progress: 75,
      responsible: "Менеджер заботы",
      owner: "Игорь Николаев",
      metrics: [
        "100% заказов и клиентов заведены без ошибок",
        "Ввод данных ≤ 5 минут после заказа"
      ],
      standards: [
        "0 замечаний по выкладке при еженедельных проверках, онлайн и офлайн ТП"
      ],
      links: ["Заказы. Общая информация", "Основные принципы выкладки оправ"]
    },
    {
      id: "inventory",
      zone: "Инвентаризация",
      title: "Помогаем с инвентаризацией",
      description: "Поддерживаем порядок и выкладку товаров",
      status: "active",
      progress: 85,
      responsible: "Менеджер заботы",
      owner: "Мерчендайзер",
      metrics: [
        "Расхождение <1%, 100% участие в инвентаризациях"
      ],
      standards: [],
      links: ["Мерчендайзинг с учетом приоритета LOOV", "Идеальная инвентаризация"]
    },
    {
      id: "atmosphere",
      zone: "Зал",
      title: "Создаем стильное пространство",
      description: "Создаем атмосферу LOOV в торговом зале",
      status: "in-progress",
      progress: 70,
      responsible: "Менеджер заботы",
      owner: "Лидер стиля",
      metrics: [
        "0 замечаний по форме и музыке при еженедельных проверках ТП"
      ],
      standards: [],
      links: ["Стандарт внешнего вида в клубах и клиниках LOOV", "Музыка в LOOV", "Микроклимат в LOOV"]
    },
    {
      id: "cashier",
      zone: "Касса",
      title: "Делаем расчеты безупречно",
      description: "Соблюдаем кассовую дисциплину и работаем с операциями",
      status: "completed",
      progress: 100,
      responsible: "Менеджер заботы",
      owner: "Бухгалтер",
      metrics: [
        "0 ошибок в кассовых операциях, время на кассе ≤ 3 минуты"
      ],
      standards: [],
      links: ["Кассовые операции"]
    },
    {
      id: "craftsmen",
      zone: "Работа с крафтерами и оптик-мастерами",
      title: "Доводим заказы до готовы",
      description: "Передаем заказы крафтерам и оптик-мастерам",
      status: "active",
      progress: 90,
      responsible: "Менеджер заботы",
      owner: "Коммерческий директор",
      metrics: [
        "100% заказов переданы с корректными параметрами, ошибки ≤ 1%"
      ],
      standards: [
        "Контролируем сроки заказов"
      ],
      links: ["Как принимать и отдавать заказы на ремонт и изготовление"]
    },
    {
      id: "optometrists",
      zone: "Работа с оптометристами/офтальмологами",
      title: "Заботимся о зрении",
      description: "Организуем проверку зрения для клиентов",
      status: "active",
      progress: 80,
      responsible: "Менеджер заботы",
      owner: "Коммерческий директор",
      metrics: [
        "≥ 95% заказов выполнены в срок, 100% клиентов уведомлены",
        "Конверсия Входящий→Проверка зрения ≥ 80%, время ожидания ≤ 15 минут"
      ],
      standards: [],
      links: []
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
        <h1 className="text-2xl font-bold">Стандарты работы LOOV</h1>
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
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    {/* Информация о зоне ответственности */}
                    <div>
                      <h4 className="font-medium mb-3">Информация о стандарте</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="text-xs text-muted-foreground mb-1">Ответственный</div>
                          <div className="text-sm font-medium">{standard.responsible}</div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="text-xs text-muted-foreground mb-1">Владелец процесса</div>
                          <div className="text-sm font-medium">{standard.owner}</div>
                        </div>
                        {standard.metrics.length > 0 && (
                          <div className="p-3 border rounded-lg">
                            <div className="text-xs text-muted-foreground mb-2">Метрики</div>
                            <ul className="space-y-1">
                              {standard.metrics.map((metric, index) => (
                                <li key={index} className="text-sm">• {metric}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm">Изучить стандарт</Button>
                        <Button size="sm" variant="outline">Скачать чек-лист</Button>
                      </div>
                    </div>

                    {/* Стандарты и статьи */}
                    <div>
                      <h4 className="font-medium mb-3">Стандарты и материалы</h4>
                      <div className="space-y-3">
                        {standard.standards.length > 0 && (
                          <div className="p-3 border rounded-lg">
                            <div className="text-xs text-muted-foreground mb-2">Стандарты</div>
                            <ul className="space-y-1">
                              {standard.standards.map((item, index) => (
                                <li key={index} className="text-sm">• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {standard.links.length > 0 && (
                          <div className="p-3 border rounded-lg">
                            <div className="text-xs text-muted-foreground mb-2">Полезные статьи</div>
                            <ul className="space-y-1">
                              {standard.links.map((link, index) => (
                                <li key={index} className="text-sm text-blue-600 hover:underline cursor-pointer">
                                  • {link}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <Button size="sm" variant="outline" className="w-full">
                          Открыть полную документацию
                        </Button>
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
