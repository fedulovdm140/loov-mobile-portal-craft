import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarSection } from "./CalendarSection";
export const ProfileSection = () => {
  const userEmail = localStorage.getItem("userEmail") || "user@loov.com";
  const userName = "Анна Петрова";
  const userPosition = "Оптик-консультант";
  const achievements = ["Лучший продавец месяца", "Эксперт по контактным линзам", "Сертификат по детской оптике"];
  const stats = [{
    label: "Продаж в месяце",
    value: "127"
  }, {
    label: "Средний чек",
    value: "₽ 8,500"
  }, {
    label: "Рейтинг клиентов",
    value: "4.9/5"
  }, {
    label: "Конверсия",
    value: "68%"
  }];
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    window.location.reload();
  };
  return <div className="space-y-6 pb-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold mx-[30px]">Мой профиль</h1>
      </div>

      {/* Profile Header Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">АП</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="mt-2">
                Изменить фото
              </Button>
            </div>
            
            <div className="flex-1 text-center w-full">
              <h2 className="text-2xl font-bold">{userName}</h2>
              <p className="text-lg text-muted-foreground mb-2">{userPosition}</p>
              <p className="text-sm text-muted-foreground mb-4">Салон оптики "Четкое зрение", Москва</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {achievements.map((achievement, index) => <Badge key={index} variant="secondary" className="text-xs">
                    {achievement}
                  </Badge>)}
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => <div key={index} className="text-center">
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Info */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Личная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">ФИО:</span>
                <span className="text-sm font-medium">{userName}</span>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">Email:</span>
                <span className="text-sm font-medium break-all">{userEmail}</span>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">Телефон:</span>
                <span className="text-sm font-medium">+7 (999) 123-45-67</span>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">Дата рождения:</span>
                <span className="text-sm font-medium">15 марта 1992</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Рабочая информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">Должность:</span>
                <span className="text-sm font-medium">{userPosition}</span>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">Стаж работы:</span>
                <span className="text-sm font-medium">3 года 2 месяца</span>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">Отпуск доступен:</span>
                <span className="text-sm font-medium">28 дней</span>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-sm text-muted-foreground">Руководитель:</span>
                <span className="text-sm font-medium">Сергей Иванов</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Последняя активность</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-2 rounded border">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-sm">Пройден курс "Консультирование по прогрессивным линзам"</span>
                <span className="text-xs text-muted-foreground block sm:inline sm:ml-auto mt-1 sm:mt-0">2 дня назад</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-2 rounded border">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-sm">Обновлен профиль: добавлен сертификат</span>
                <span className="text-xs text-muted-foreground block sm:inline sm:ml-auto mt-1 sm:mt-0">5 дней назад</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-2 rounded border">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <span className="text-sm">Достигнут план продаж на 150%</span>
                <span className="text-xs text-muted-foreground block sm:inline sm:ml-auto mt-1 sm:mt-0">1 неделя назад</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Section */}
      <CalendarSection />

      {/* Logout Button at the bottom */}
      <div className="flex justify-center pt-6">
        <Button variant="outline" onClick={handleLogout} className="w-full sm:w-auto">
          Выйти
        </Button>
      </div>
    </div>;
};