import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const DashboardSection = () => {
  const dashboardItems = [{
    title: "План продаж на месяц",
    value: "85%",
    target: "₽ 150,000",
    actual: "₽ 127,500",
    color: "bg-blue-500",
    trend: "+5%",
    progress: 85,
    dashboardUrl: "https://datalens.yandex.ru/sales-dashboard"
  }, {
    title: "Средний чек",
    value: "₽ 8,500",
    target: "₽ 8,000",
    trend: "+6.25%",
    color: "bg-green-500",
    progress: 106,
    dashboardUrl: "https://datalens.yandex.ru/average-check-dashboard"
  }, {
    title: "Конверсия консультаций",
    value: "68%",
    target: "65%",
    trend: "+3%",
    color: "bg-purple-500",
    progress: 105,
    dashboardUrl: "https://datalens.yandex.ru/conversion-dashboard"
  }, {
    title: "Продажи оправ",
    value: "45 шт",
    target: "40 шт",
    trend: "+12.5%",
    color: "bg-orange-500",
    progress: 113,
    dashboardUrl: "https://datalens.yandex.ru/frames-dashboard"
  }, {
    title: "Продажи линз",
    value: "78 пар",
    target: "70 пар",
    trend: "+11.4%",
    color: "bg-red-500",
    progress: 111,
    dashboardUrl: "https://datalens.yandex.ru/lenses-dashboard"
  }, {
    title: "Обмены/возвраты",
    value: "2.3%",
    target: "<5%",
    trend: "-0.7%",
    color: "bg-indigo-500",
    progress: 77,
    dashboardUrl: "https://datalens.yandex.ru/returns-dashboard"
  }, {
    title: "NPS клиентов",
    value: "4.9/5",
    target: "4.5/5",
    trend: "+0.2",
    color: "bg-pink-500",
    progress: 98,
    dashboardUrl: "https://datalens.yandex.ru/nps-dashboard"
  }, {
    title: "Активных акций",
    value: "3",
    description: "Скидка на вторую пару, Детская оптика -20%, Прогрессивные линзы",
    color: "bg-cyan-500",
    progress: 100,
    dashboardUrl: "https://datalens.yandex.ru/promotions-dashboard"
  }];
  const tasks = [{
    task: "Связаться с клиентом по заказу прогрессивных линз",
    priority: "high",
    dueTime: "до 14:00",
    trackerUrl: "https://tracker.yandex.ru/OPTIC-123"
  }, {
    task: "Подготовить отчет по продажам за неделю",
    priority: "medium",
    dueTime: "до 18:00",
    trackerUrl: "https://tracker.yandex.ru/OPTIC-124"
  }, {
    task: "Обучение: новая коллекция Ray-Ban",
    priority: "low",
    dueTime: "завтра",
    trackerUrl: "https://tracker.yandex.ru/OPTIC-125"
  }, {
    task: "Проверить поступление товара",
    priority: "medium",
    dueTime: "до 16:00",
    trackerUrl: "https://tracker.yandex.ru/OPTIC-126"
  }];
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-orange-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  const getProgressBarColor = (progress: number) => {
    if (progress >= 100) return "bg-green-500";
    if (progress >= 80) return "bg-blue-500";
    if (progress >= 60) return "bg-orange-500";
    return "bg-red-500";
  };
  const handleKpiClick = (dashboardUrl: string) => {
    window.open(dashboardUrl, '_blank');
  };
  const handleTaskClick = (trackerUrl: string) => {
    window.open(trackerUrl, '_blank');
  };
  const handleQuickAction = (action: string) => {
    const itigrisUrls = {
      'new-client': 'https://itigris.ru/crm/clients/new',
      'vision-test': 'https://itigris.ru/crm/services/vision-test',
      'product-search': 'https://itigris.ru/crm/inventory/search',
      'create-sale': 'https://itigris.ru/crm/sales/new'
    };
    const url = itigrisUrls[action as keyof typeof itigrisUrls];
    if (url) {
      window.open(url, '_blank');
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mx-[30px]">Дашборд оптика</h1>
        <span className="text-sm text-muted-foreground">
          Обновлено: {new Date().toLocaleDateString('ru-RU')} в {new Date().toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit'
        })}
        </span>
      </div>
      
      {/* KPI Cards - 2-3 в ряд на мобильных */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {dashboardItems.map((item, index) => <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden" onClick={() => handleKpiClick(item.dashboardUrl)}>
            <CardHeader className="pb-2 relative">
              {/* Цветная шкала прогресса */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200">
                <div className={`h-full ${getProgressBarColor(item.progress || 0)} transition-all duration-300`} style={{
              width: `${Math.min(item.progress || 0, 100)}%`
            }} />
              </div>
              <div className="pt-2">
                <CardTitle className="text-xs md:text-sm font-medium leading-tight">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg md:text-xl font-bold">{item.value}</p>
              {item.target && <p className="text-xs text-muted-foreground">
                  План: {item.target}
                </p>}
              {item.actual && <p className="text-xs text-muted-foreground">
                  Факт: {item.actual}
                </p>}
              {item.progress && <div className="flex justify-between text-xs">
                  <span>Прогресс</span>
                  <span>{item.progress}%</span>
                </div>}
              {item.trend && <p className={`text-xs font-medium ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {item.trend}
                </p>}
              {item.description && <p className="text-xs text-muted-foreground leading-tight">
                  {item.description}
                </p>}
            </CardContent>
          </Card>)}
      </div>

      {/* Tasks and Notifications */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Задачи на сегодня</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tasks.map((item, index) => <div key={index} className="flex items-start gap-3 p-3 rounded border cursor-pointer hover:bg-accent transition-colors" onClick={() => handleTaskClick(item.trackerUrl)}>
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(item.priority)} mt-1 flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight">{item.task}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.dueTime}</p>
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Уведомления</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded border border-blue-200 bg-blue-50">
                <div className="w-3 h-3 rounded-full bg-blue-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Поступление новой коллекции</p>
                  <p className="text-xs text-muted-foreground">Oakley Spring 2024 - ожидается завтра</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded border border-green-200 bg-green-50">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Заказ готов к выдаче</p>
                  <p className="text-xs text-muted-foreground">Клиент Иванова А.С. - прогрессивные линзы</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded border border-orange-200 bg-orange-50">
                <div className="w-3 h-3 rounded-full bg-orange-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Обновление ценника</p>
                  <p className="text-xs text-muted-foreground">Новые цены на контактные линзы с понедельника</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="p-4 rounded border hover:bg-accent text-center" onClick={() => handleQuickAction('new-client')}>
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm font-medium">Новый клиент</div>
            </button>
            <button className="p-4 rounded border hover:bg-accent text-center" onClick={() => handleQuickAction('vision-test')}>
              <div className="text-2xl mb-2">🔍</div>
              <div className="text-sm font-medium">Проверка зрения</div>
            </button>
            <button className="p-4 rounded border hover:bg-accent text-center" onClick={() => handleQuickAction('product-search')}>
              <div className="text-2xl mb-2">📦</div>
              <div className="text-sm font-medium">Поиск товара</div>
            </button>
            <button className="p-4 rounded border hover:bg-accent text-center" onClick={() => handleQuickAction('create-sale')}>
              <div className="text-2xl mb-2">💰</div>
              <div className="text-sm font-medium">Оформить продажу</div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>;
};