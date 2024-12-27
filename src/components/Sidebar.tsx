import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  ChevronDown,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, text: "Панель управления", path: "/" },
  {
    icon: Package,
    text: "Инвентарь",
    path: "/inventory",
    submenu: [
      { text: "Список лекарств", path: "/inventory/medicines" },
      { text: "Медицинские группы", path: "/inventory/groups" },
    ],
  },
  { icon: FileText, text: "Отчеты", path: "/reports" },
  { icon: Settings, text: "Конфигурация", path: "/configuration" },
  { icon: Users, text: "Управление контактами", path: "/contacts" },
  { icon: Bell, text: "Уведомления", path: "/notifications" },
  { icon: MessageSquare, text: "Общение с посетителями", path: "/chat" },
  { icon: Wrench, text: "Техническая поддержка", path: "/support" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleSubmenu = (path: string) => {
    setExpandedSubmenu(expandedSubmenu === path ? null : path);
  };

  const isActive = (path: string) => location.pathname === path;
  const isSubmenuActive = (item: any) =>
    item.submenu?.some((subItem: any) => location.pathname === subItem.path);

  return (
    <div
      className={`bg-sidebar min-h-screen relative transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-10 bg-white rounded-full p-1 border shadow-md"
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <div className="p-4 flex items-center space-x-4">
        {!collapsed && <span className="text-xl font-bold text-white">PRO Фарма</span>}
      </div>

      <div className="mt-8">
        {menuItems.map((item) => (
          <div key={item.path}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(item.path)}
                  className={`flex items-center w-full text-gray-300 hover:bg-sidebar-hover hover:text-white px-4 py-3 cursor-pointer transition-colors ${
                    isSubmenuActive(item) ? "bg-sidebar-hover text-white" : ""
                  }`}
                >
                  <item.icon size={24} />
                  {!collapsed && (
                    <>
                      <span className="ml-4 flex-1">{item.text}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          expandedSubmenu === item.path ? "rotate-180" : ""
                        }`}
                      />
                    </>
                  )}
                </button>
                {!collapsed && expandedSubmenu === item.path && (
                  <div className="bg-sidebar-accent">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`block pl-12 py-2 text-gray-300 hover:text-white ${
                          isActive(subItem.path) ? "text-white bg-sidebar-hover" : ""
                        }`}
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center text-gray-300 hover:bg-sidebar-hover hover:text-white px-4 py-3 transition-colors ${
                  isActive(item.path) ? "bg-sidebar-hover text-white" : ""
                }`}
              >
                <item.icon size={24} />
                {!collapsed && <span className="ml-4">{item.text}</span>}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};