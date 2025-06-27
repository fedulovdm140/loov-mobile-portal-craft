
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Eye, DollarSign, AlertTriangle } from "lucide-react";

export const CreatedOrdersCard = () => {
  // Mock data - these would come from API in real app
  const dailyRevenue = 15000;
  const dailyTarget = 25000;
  const openDealsCount = 8;
  const openDealsSum = 45000;

  // Optics sales data
  const opticsData = [{
    category: "Оправы",
    quantity: 4,
    amount: 10000
  }, {
    category: "Линзы",
    quantity: 4,
    amount: 5000
  }];

  const dailyProgress = Math.round(dailyRevenue / dailyTarget * 100);

  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          По созданным заказам
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Open Deals - moved to top with red styling */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-800">Незакрытые сделки</p>
              <p className="text-xs text-red-600">{openDealsSum.toLocaleString()} ₽</p>
            </div>
          </div>
          <span className="text-xl font-bold text-red-600">{openDealsCount}</span>
        </div>

        {/* Daily Revenue Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <DollarSign className="w-3 h-3 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Выручка за день</span>
            </div>
            <span className="text-lg font-bold text-gray-900">{dailyRevenue.toLocaleString()} ₽</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Факт: {dailyRevenue.toLocaleString()} ₽</span>
              <span>План: {dailyTarget.toLocaleString()} ₽</span>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500" style={{
                width: `${Math.min(dailyProgress, 100)}%`
              }} />
              {dailyProgress > 100 && (
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{
                  width: '100%'
                }} />
              )}
            </div>
            <div className="text-center">
              <span className={`text-xs font-bold ${dailyProgress >= 100 ? 'text-blue-600' : dailyProgress >= 80 ? 'text-green-600' : 'text-orange-600'}`}>
                {dailyProgress}% выполнено
              </span>
            </div>
          </div>
        </div>

        {/* Compact Optics Sales Table */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Eye className="w-3 h-3 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-700">Созданные сделки за день</span>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2">
            <Table>
              <TableHeader>
                <TableRow className="border-emerald-200">
                  <TableHead className="text-xs h-6 px-2 py-1 text-gray-600 font-medium">Категория</TableHead>
                  <TableHead className="text-xs h-6 px-2 py-1 text-gray-600 text-center font-medium w-20">Кол-во</TableHead>
                  <TableHead className="text-xs h-6 px-2 py-1 text-gray-600 text-right font-medium whitespace-nowrap">Сумма</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {opticsData.map((item, index) => (
                  <TableRow key={index} className="border-emerald-100">
                    <TableCell className="text-xs py-1 px-2 font-medium text-gray-700 whitespace-nowrap">{item.category}</TableCell>
                    <TableCell className="text-xs py-1 px-2 text-center text-gray-600 whitespace-nowrap">{item.quantity} шт</TableCell>
                    <TableCell className="text-xs py-1 px-2 text-right font-semibold text-emerald-600 whitespace-nowrap">
                      {item.amount.toLocaleString()} ₽
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-emerald-200 bg-emerald-100/50">
                  <TableCell className="text-xs py-1 px-2 font-bold text-gray-800 whitespace-nowrap">Итого</TableCell>
                  <TableCell className="text-xs py-1 px-2 text-center font-bold text-gray-800 whitespace-nowrap">
                    {opticsData.reduce((sum, item) => sum + item.quantity, 0)} шт
                  </TableCell>
                  <TableCell className="text-xs py-1 px-2 text-right font-bold text-emerald-700 whitespace-nowrap">
                    {opticsData.reduce((sum, item) => sum + item.amount, 0).toLocaleString()} ₽
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
