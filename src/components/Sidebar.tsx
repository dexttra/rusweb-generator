import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  FileText,
  Settings,
  Users,
  Bell,
  MessageSquare,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, text: "Панель управления" },
  { icon: Package, text: "Инвентарь" },
  { icon: FileText, text: "Отчеты" },
  { icon: Settings, text: "Конфигурация" },
  { icon: Users, text: "Управление контактами" },
  { icon: Bell, text: "Уведомления" },
  { icon: MessageSquare, text: "Общение с посетителями" },
  { icon: Wrench, text: "Техническая поддержка" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`bg-sidebar min-h-screen relative transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-10 bg-white rounded-full p-1 border shadow-md"
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <div className="p-4 flex items-center space-x-4 text-white">
        {!collapsed && <span className="text-xl font-bold">PRO Фарма</span>}
      </div>

      <div className="mt-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-gray-300 hover:bg-sidebar-hover hover:text-white px-4 py-3 cursor-pointer transition-colors"
          >
            <item.icon size={24} />
            {!collapsed && <span className="ml-4">{item.text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};