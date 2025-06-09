
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProfileSection = () => {
  const userProfile = {
    name: "Анна Сергеевна Иванова",
    position: "Оптик-консультант",
    store: "Оптика Loov - ТЦ Галерея",
    experience: "2 года 8 месяцев",
    avatar: "/placeholder.svg",
    achievements: [
      { title: "Лучший продавец месяца", date: "Февраль 2024", type: "gold" },
      { title: "Высокий NPS", date: "Январь 2024", type: "silver" },
      { title: "Превышение плана", date: "Декабрь 2023", type: "bronze" }
    ],
    stats: {
      salesThisMonth: "₽ 127,500",
      customersServed: 45,
      averageCheck: "₽ 8,500",
      npsScore: 4.9
    },
    skills: [
      { name: "Подбор оправ", level: 95 },
      { name: "Консультация по линзам", level: 88 },
      { name: "Работа с детьми", level: 92 },
      { name: "Продажи", level: 85 }
    ]
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "gold": return "default";
      case "silver": return "secondary";
      case "bronze": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between ml-14">
        <h1 className="text-2xl font-bold">Мой профиль</h1>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback className="text-2xl">АИ</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-2">
              <h2 className="text-2xl font-bold">{userProfile.name}</h2>
              <p className="text-lg text-muted-foreground">{userProfile.position}</p>
              <p className="text-sm text-muted-foreground">{userProfile.store}</p>
              <p className="text-sm">Опыт работы: {userProfile.experience}</p>
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="outline">Редактировать профиль</Button>
              <Button variant="outline">Настройки</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Продажи за месяц</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{userProfile.stats.salesThisMonth}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Клиентов обслужено</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{userProfile.stats.customersServed}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{userProfile.stats.averageCheck}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">NPS Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{userProfile.stats.npsScore}/5</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements and Skills */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Достижения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userProfile.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                  <Badge variant={getBadgeVariant(achievement.type)}>
                    {achievement.type === "gold" ? "🥇" : achievement.type === "silver" ? "🥈" : "🥉"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Навыки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userProfile.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
