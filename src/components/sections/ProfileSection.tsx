
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const ProfileSection = () => {
  const userEmail = localStorage.getItem("userEmail") || "user@loov.com";
  const userName = "Анна Петрова"; // Заглушка, в реальном проекте из Keycloak
  const userPosition = "Технический директор"; // Заглушка

  const profileItems = [
    { label: "Фото профиля", value: "Не загружено" },
    { label: "ФИО", value: userName },
    { label: "Должность", value: userPosition },
    { label: "Зарплата", value: "Конфиденциально" },
    { label: "Кол-во дней отпуска", value: "28 дней" },
    { label: "Где работает", value: "Москва, офис" },
    { label: "Контакты", value: userEmail },
    { label: "Мой руководитель", value: "Сергей Иванов" },
    { label: "Ачивки (достижения)", value: "5 наград" },
    { label: "Календарь", value: "Синхронизирован" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Мой профиль</h1>
        <Button variant="outline" onClick={handleLogout}>
          Выйти
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" />
              <AvatarFallback className="text-lg">АП</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{userName}</CardTitle>
              <p className="text-muted-foreground">{userPosition}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {profileItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                <span className="font-medium">{item.label}:</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
