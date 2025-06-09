
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const StandardsSection = () => {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "bg-green-500";
      case "warning": return "bg-orange-500";
      case "critical": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "good": return <Badge className="bg-green-100 text-green-800">Соответствует</Badge>;
      case "warning": return <Badge className="bg-orange-100 text-orange-800">Требует внимания</Badge>;
      case "critical": return <Badge className="bg-red-100 text-red-800">Критично</Badge>;
      default: return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  const calculateProgress = (current: string, isPercentage: boolean = false) => {
    if (isPercentage) {
      return parseInt(current.replace('%', ''));
    }
    return 75; // Default progress for non-percentage values
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between ml-14">
        <h1 className="text-2xl font-bold">Стандарты работы</h1>
        <Button variant="outline">Скачать руководство</Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Соответствует стандартам</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Требует внимания</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Критичные отклонения</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Standards by Category */}
      <div className="space-y-6">
        {standards.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>{category.category}</span>
                <Badge variant="outline">{category.items.length} показателей</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      {getStatusBadge(item.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Стандарт</p>
                        <p className="font-medium">{item.standard}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Текущий показатель</p>
                        <p className="font-medium">{item.current}</p>
                      </div>
                    </div>

                    {item.current.includes('%') && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Выполнение</span>
                          <span>{item.current}</span>
                        </div>
                        <Progress 
                          value={calculateProgress(item.current, true)} 
                          className="h-2"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle>Рекомендации по улучшению</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50">
              <div className="w-3 h-3 rounded-full bg-orange-500 mt-1" />
              <div>
                <p className="font-medium">Увеличить презентацию оправ</p>
                <p className="text-sm text-muted-foreground">
                  Текущий показатель 87%, цель 100%. Показывайте минимум 3 варианта каждому клиенту.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50">
              <div className="w-3 h-3 rounded-full bg-orange-500 mt-1" />
              <div>
                <p className="font-medium">Улучшить предложение доп. услуг</p>
                <p className="text-sm text-muted-foreground">
                  Текущий показатель 75%, цель 90%. Предлагайте покрытия, футляры, средства ухода.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50">
              <div className="w-3 h-3 rounded-full bg-orange-500 mt-1" />
              <div>
                <p className="font-medium">Контроль качества готовых очков</p>
                <p className="text-sm text-muted-foreground">
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
