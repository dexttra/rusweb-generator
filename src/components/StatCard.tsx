import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle: string;
  color: string;
}

export const StatCard = ({ icon: Icon, title, value, subtitle, color }: StatCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md border-t-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        </div>
        <div className={`${color.replace('border', 'text')} opacity-80`}>
          <Icon size={40} />
        </div>
      </div>
    </div>
  );
};