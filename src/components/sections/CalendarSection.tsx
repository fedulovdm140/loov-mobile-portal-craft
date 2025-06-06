
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      id: 1,
      title: "Встреча с поставщиком Essilor",
      date: new Date(2024, 11, 8),
      time: "14:00",
      type: "meeting",
      description: "Обсуждение новой коллекции линз"
    },
    {
      id: 2,
      title: "Обучение по прогрессивным линзам",
      date: new Date(2024, 11, 10),
      time: "10:00",
      type: "training",
      description: "Онлайн-семинар от производителя"
    },
    {
      id: 3,
      title: "Отпуск",
      date: new Date(2024, 11, 15),
      time: "весь день",
      type: "vacation",
      description: "Запланированный отпуск"
    },
    {
      id: 4,
      title: "Планерка отдела",
      date: new Date(2024, 11, 12),
      time: "09:00",
      type: "meeting",
      description: "Еженедельная планерка команды"
    }
  ];

  const getEventDates = () => {
    return events.map(event => event.date);
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "meeting": return "bg-blue-100 text-blue-800 border-blue-200";
      case "training": return "bg-green-100 text-green-800 border-green-200";
      case "vacation": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEventTypeText = (type: string) => {
    switch (type) {
      case "meeting": return "Встреча";
      case "training": return "Обучение";
      case "vacation": return "Отпуск";
      default: return "Событие";
    }
  };

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Календарь событий</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Календарь */}
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              modifiers={{
                event: getEventDates()
              }}
              modifiersStyles={{
                event: { 
                  backgroundColor: "hsl(var(--primary))", 
                  color: "white",
                  fontWeight: "bold"
                }
              }}
              className="rounded-md border w-full"
            />
          </div>

          {/* События выбранной даты */}
          <div>
            <h4 className="font-medium mb-3">
              События на {selectedDate?.toLocaleDateString('ru-RU', { 
                day: 'numeric', 
                month: 'long',
                year: 'numeric'
              })}
            </h4>
            <div className="space-y-3">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg space-y-2">
                    <div className="flex justify-between items-start">
                      <h5 className="text-sm font-medium">{event.title}</h5>
                      <Badge className={getEventTypeColor(event.type)}>
                        {getEventTypeText(event.type)}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {event.time}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {event.description}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-muted-foreground text-center py-4">
                  Нет событий на выбранную дату
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Предстоящие события */}
        <div className="mt-6">
          <h4 className="font-medium mb-3">Предстоящие события</h4>
          <div className="space-y-2">
            {events
              .filter(event => event.date >= new Date())
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .slice(0, 3)
              .map((event) => (
                <div key={event.id} className="flex items-center gap-3 p-2 rounded border">
                  <div className={`w-3 h-3 rounded-full ${
                    event.type === 'meeting' ? 'bg-blue-500' :
                    event.type === 'training' ? 'bg-green-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{event.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {event.date.toLocaleDateString('ru-RU')} в {event.time}
                    </div>
                  </div>
                  <Badge variant="outline" className={getEventTypeColor(event.type)}>
                    {getEventTypeText(event.type)}
                  </Badge>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
