
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const MainStatsCard = () => {
  const dailyTarget = 25000;
  const dailyActual = 15000;
  const monthlyTarget = 300000;
  const monthlyActual = 180000;
  
  const dailyProgress = Math.round(dailyActual / dailyTarget * 100);
  const monthlyProgress = Math.round(monthlyActual / monthlyTarget * 100);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white border-0 shadow-2xl">
        <CardContent className="p-8">
          {/* Главные показатели - только 2 ключевые метрики */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Сегодня */}
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{dailyProgress}%</div>
              <div className="text-sm opacity-90 mb-3">ПЛАН ДНЯ</div>
              <div className="text-lg font-semibold">{dailyActual.toLocaleString('ru-RU')} ₽</div>
              <div className="text-xs opacity-75">из {dailyTarget.toLocaleString('ru-RU')} ₽</div>
            </div>
            
            {/* Месяц */}
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{monthlyProgress}%</div>
              <div className="text-sm opacity-90 mb-3">ПЛАН МЕСЯЦА</div>
              <div className="text-lg font-semibold">{monthlyActual.toLocaleString('ru-RU')} ₽</div>
              <div className="text-xs opacity-75">из {monthlyTarget.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>

          {/* Прогресс бары */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Выполнение плана дня</span>
                <span className="text-sm">{dailyProgress}%</span>
              </div>
              <Progress value={dailyProgress} className="h-3 bg-white/20" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Выполнение плана месяца</span>
                <span className="text-sm">{monthlyProgress}%</span>
              </div>
              <Progress value={monthlyProgress} className="h-3 bg-white/20" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
