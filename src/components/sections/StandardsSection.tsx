
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const StandardsSection = () => {
  const standards = [
    { title: "Обслуживание клиентов", status: "Активен", progress: 100 },
    { title: "Продажи", status: "В процессе", progress: 60 },
    { title: "Безопасность", status: "Завершен", progress: 100 },
    { title: "Коммуникации", status: "Назначен", progress: 0 },
  ];

  const courses = [
    { title: "Основы работы с клиентами", duration: "2 часа", progress: 75 },
    { title: "Техники продаж", duration: "4 часа", progress: 30 },
    { title: "Безопасность на рабочем месте", duration: "1 час", progress: 100 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Стандарты</h1>
        <Button>Добавить базу знаний</Button>
      </div>

      <Tabs defaultValue="standards" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="standards">Стандарты</TabsTrigger>
          <TabsTrigger value="courses">Курсы обучения</TabsTrigger>
        </TabsList>

        <TabsContent value="standards" className="space-y-4">
          {standards.map((standard, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{standard.title}</CardTitle>
                  <span className={`px-2 py-1 rounded text-xs ${
                    standard.status === "Активен" ? "bg-green-100 text-green-800" :
                    standard.status === "В процессе" ? "bg-yellow-100 text-yellow-800" :
                    standard.status === "Завершен" ? "bg-blue-100 text-blue-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {standard.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс изучения</span>
                    <span>{standard.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${standard.progress}%` }}
                    />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm">Изучить</Button>
                    <Button size="sm" variant="outline">Чек-лист</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground">Продолжительность: {course.duration}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <Button size="sm" className="mt-4">
                    {course.progress > 0 ? "Продолжить" : "Начать курс"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
