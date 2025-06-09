
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const StandardsSection = () => {
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryIndex: number) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  const standards = [
    {
      category: "Обслуживание клиентов",
      items: [
        { 
          title: "Время ожидания клиента", 
          standard: "не более 3 минут", 
          current: "2.5 мин", 
          status: "good",
          description: "Среднее время от входа клиента до начала консультации"
        },
        { 
          title: "Проведение диагностики зрения", 
          standard: "обязательно для всех", 
          current: "95%", 
          status: "good",
          description: "Процент клиентов, прошедших проверку зрения"
        },
        { 
          title: "Презентация не менее 3 оправ", 
          standard: "100%", 
          current: "87%", 
          status: "warning",
          description: "Показ минимум 3 вариантов оправ каждому клиенту"
        }
      ]
    },
    {
      category: "Качество продукции",
      items: [
        { 
          title: "Проверка готовых очков", 
          standard: "100% заказов", 
          current: "98%", 
          status: "warning",
          description: "Контроль качества перед выдачей заказа"
        },
        { 
          title: "Время изготовления стандартных линз", 
          standard: "1-2 дня", 
          current: "1.5 дня", 
          status: "good",
          description: "Среднее время изготовления простых линз"
        },
        { 
          title: "Возвраты по браку", 
          standard: "менее 2%", 
          current: "1.2%", 
          status: "good",
          description: "Процент возвратов из-за дефектов продукции"
        }
      ]
    },
    {
      category: "Продажи и консультации",
      items: [
        { 
          title: "Конверсия консультаций в продажи", 
          standard: "не менее 60%", 
          current: "68%", 
          status: "good",
          description: "Процент успешных продаж от общего числа консультаций"
        },
        { 
          title: "Средний чек", 
          standard: "от ₽8,000", 
          current: "₽8,500", 
          status: "good",
          description: "Средняя сумма покупки на одного клиента"
        },
        { 
          title: "Предложение дополнительных услуг", 
          standard: "90%", 
          current: "75%", 
          status: "warning",
          description: "Процент предложений дополнительных покрытий, футляров и т.д."
        }
      ]
    },
    {
      category: "Документооборот",
      items: [
        { 
          title: "Оформление заказа в системе", 
          standard: "в день обращения", 
          current: "100%", 
          status: "good",
          description: "Своевременное внесение данных в CRM систему"
        },
        { 
          title: "Ведение карточки клиента", 
          standard: "обязательно", 
          current: "92%", 
          status: "warning",
          description: "Заполнение всех необходимых полей в карточке"
        }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "good": return <Badge className="bg-green-100 text-green-800 text-xs">Соответствует</Badge>;
      case "warning": return <Badge className="bg-orange-100 text-orange-800 text-xs">Требует внимания</Badge>;
      case "critical": return <Badge className="bg-red-100 text-red-800 text-xs">Критично</Badge>;
      default: return <Badge variant="secondary" className="text-xs">Неизвестно</Badge>;
    }
  };

  const calculateProgress = (current: string, isPercentage: boolean = false) => {
    if (isPercentage) {
      return parseInt(current.replace('%', ''));
    }
    return 75;
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between ml-0 sm:ml-14 gap-2 sm:gap-0">
        <h1 className="text-xl md:text-2xl font-bold">Стандарты работы</h1>
        <Button variant="outline" size="sm" className="text-xs md:text-sm">Скачать руководство</Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        <Card>
          <CardContent className="p-3 md:p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Соответствует стандартам</p>
                <p className="text-lg md:text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 md:p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500" />
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Требует внимания</p>
                <p className="text-lg md:text-2xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="p-3 md:p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Критичные отклонения</p>
                <p className="text-lg md:text-2xl font-bold">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Standards by Category - Collapsible */}
      <div className="space-y-4 md:space-y-6">
        {standards.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <Collapsible
              open={openCategories[categoryIndex]}
              onOpenChange={() => toggleCategory(categoryIndex)}
            >
              <CardHeader className="pb-2 md:pb-4">
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer">
                    <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                      <span>{category.category}</span>
                      <Badge variant="outline" className="text-xs">{category.items.length} показателей</Badge>
                    </CardTitle>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openCategories[categoryIndex] ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </CollapsibleTrigger>
              </CardHeader>
              
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-3 md:space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border rounded-lg p-3 md:p-4 space-y-2 md:space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm md:text-base">{item.title}</h4>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">{item.description}</p>
                          </div>
                          {getStatusBadge(item.status)}
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                          <div>
                            <p className="text-xs md:text-sm text-muted-foreground">Стандарт</p>
                            <p className="font-medium text-sm md:text-base">{item.standard}</p>
                          </div>
                          <div>
                            <p className="text-xs md:text-sm text-muted-foreground">Текущий показатель</p>
                            <p className="font-medium text-sm md:text-base">{item.current}</p>
                          </div>
                        </div>

                        {item.current.includes('%') && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs md:text-sm">
                              <span>Выполнение</span>
                              <span>{item.current}</span>
                            </div>
                            <Progress 
                              value={calculateProgress(item.current, true)} 
                              className="h-1.5 md:h-2"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Рекомендации по улучшению</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500 mt-1" />
              <div>
                <p className="font-medium text-sm md:text-base">Увеличить презентацию оправ</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Текущий показатель 87%, цель 100%. Показывайте минимум 3 варианта каждому клиенту.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500 mt-1" />
              <div>
                <p className="font-medium text-sm md:text-base">Улучшить предложение доп. услуг</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Текущий показатель 75%, цель 90%. Предлагайте покрытия, футляры, средства ухода.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500 mt-1" />
              <div>
                <p className="font-medium text-sm md:text-base">Контроль качества готовых очков</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Текущий показатель 98%, цель 100%. Усилить финальную проверку перед выдачей.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
