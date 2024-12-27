import { Shield, DollarSign, Pill, AlertTriangle } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { InfoBlock } from "@/components/InfoBlock";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Панель управления</h1>
            <p className="text-gray-600">Краткий обзор данных</p>
          </div>
          <button className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Скачать отчет
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Shield}
            title="Хороший"
            value="Статус"
            subtitle="Статус инвентаря"
            color="border-card-green"
          />
          <StatCard
            icon={DollarSign}
            title="150 000₽"
            value="Доход"
            subtitle="Январь"
            color="border-card-yellow"
          />
          <StatCard
            icon={Pill}
            title="298"
            value="Лекарства"
            subtitle="Доступные лекарства"
            color="border-card-blue"
          />
          <StatCard
            icon={AlertTriangle}
            title="01"
            value="Внимание"
            subtitle="Нехватка лекарств"
            color="border-card-red"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoBlock
            title="Инвентарь"
            stats={[
              { value: "298", label: "Общее количество лекарств" },
              { value: "24", label: "Медицинские группы" },
            ]}
            action={{
              text: "Конфигурация",
              onClick: () => console.log("Конфигурация clicked"),
            }}
          />
          <InfoBlock
            title="Быстрый отчет"
            stats={[
              { value: "70 856", label: "Количество проданных лекарств" },
              { value: "5,288", label: "Количество счетов" },
            ]}
            action={{
              text: "Подробнее",
              onClick: () => console.log("Подробнее clicked"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;