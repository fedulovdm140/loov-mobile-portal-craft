
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Deal {
  number: string;
  cost: number;
}

export const UnclosedDealsPage = () => {
  const navigate = useNavigate();

  // Mock data for unclosed deals - in real app this would come from API
  const deals: Deal[] = [
    { number: "SO-001", cost: 12000 },
    { number: "SO-008", cost: 8500 },
    { number: "SO-015", cost: 15000 },
    { number: "SO-022", cost: 3500 },
    { number: "SO-029", cost: 2800 },
    { number: "SO-031", cost: 1800 },
    { number: "SO-033", cost: 900 },
    { number: "SO-035", cost: 400 }
  ];

  const totalSum = deals.reduce((sum, deal) => sum + deal.cost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Незакрытые сделки</h1>
        </div>

        <Card className="bg-white border border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-red-900">
              <div className="w-7 h-7 bg-red-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Незакрытые сделки</div>
                <div className="text-sm text-red-700 font-normal">
                  Всего: {deals.length} сделок на сумму {totalSum.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {deals.map((deal, index) => (
                <div
                  key={deal.number}
                  className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200"
                >
                  <span className="text-sm font-medium text-red-900">{deal.number}</span>
                  <span className="text-sm font-bold text-red-700">
                    {deal.cost.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
