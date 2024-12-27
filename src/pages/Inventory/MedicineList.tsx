import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const medicines = [
  { name: "Аугментин 625", id: "D06ID232435454", group: "Антидепрессанты", quantity: 350 },
  { name: "Азитрал 500 таблетка", id: "D06ID232435451", group: "Противогрибковые", quantity: 20 },
  { name: "Аскорил LS сироп", id: "D06ID232435452", group: "Гормональные", quantity: 85 },
  { name: "Ази 500 таблетка", id: "D06ID232435450", group: "Цитостатики", quantity: 75 },
  { name: "Аллегра 120 мг таблетка", id: "D06ID232435455", group: "Диабет", quantity: 44 },
  { name: "Алекс Сироп", id: "D06ID232435456", group: "Диабет", quantity: 65 },
  { name: "Амоксиклав 625 Таблетка", id: "D06ID232435457", group: "Диуретики", quantity: 150 },
  { name: "Авил 25 Таблетка", id: "D06ID232435458", group: "Диабет", quantity: 270 },
];

const MedicineList = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Инвентарь › Список лекарств (298)</h1>
          <p className="text-gray-600">Список лекарств, доступных для продажи.</p>
        </div>
        <Button className="bg-red-500 hover:bg-red-600">+ Добавить</Button>
      </div>

      <div className="flex gap-4 mb-6">
        <Input placeholder="Поиск в инвентаре лекарств..." className="max-w-md" />
        <select className="border rounded-md px-3 py-2">
          <option>- Выбрать группу -</option>
        </select>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Название лек.</th>
                <th className="text-left p-4">ID лек.</th>
                <th className="text-left p-4">Имя группы</th>
                <th className="text-left p-4">Кол-во лек.</th>
                <th className="text-left p-4">Действие</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id} className="border-t">
                  <td className="p-4">{medicine.name}</td>
                  <td className="p-4">{medicine.id}</td>
                  <td className="p-4">{medicine.group}</td>
                  <td className="p-4">{medicine.quantity}</td>
                  <td className="p-4">
                    <Button variant="ghost" className="text-blue-500">
                      Посмотреть <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicineList;