
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, DollarSign } from "lucide-react";

export const AlertsCard = () => {
  // Mock data - these would come from API in real app
  const openDealsCount = 8;
  const openDealsSum = 45000;

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50/30 shadow-lg border-0 ring-1 ring-gray-200/60">
      <CardHeader className="pb-3 px-4 pt-4">
        <CardTitle className="text-base font-bold text-gray-800 flex items-center gap-3">
          <div className="w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm">
            <AlertTriangle className="w-4 h-4 text-white" />
          </div>
          <span>Требует внимания</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pt-0 pb-4">
        <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-xl p-4 border border-red-200/50 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-red-800">Незакрытые сделки</div>
                <div className="text-xs text-red-600">Требуют обработки</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-red-700">{openDealsCount}</div>
              <div className="text-sm text-red-600">{openDealsSum.toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
