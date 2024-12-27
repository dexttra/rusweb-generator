import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const groups = [
  { name: "Антидепрессанты", count: 45 },
  { name: "Противогрибковые", count: 32 },
  { name: "Гормональные", count: 28 },
  { name: "Цитостатики", count: 15 },
  { name: "Диабет", count: 42 },
  { name: "Диуретики", count: 18 },
];

const MedicalGroups = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Инвентарь › Медицинские группы</h1>
          <p className="text-gray-600">Управление медицинскими группами лекарств.</p>
        </div>
        <Button className="bg-red-500 hover:bg-red-600">+ Добавить группу</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.name}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{group.name}</h3>
                <span className="text-gray-500">{group.count} лекарств</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  Редактировать
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  Удалить
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MedicalGroups;