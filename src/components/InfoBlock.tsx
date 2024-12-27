interface InfoBlockProps {
  title: string;
  stats: {
    value: string | number;
    label: string;
  }[];
  action?: {
    text: string;
    onClick: () => void;
  };
}

export const InfoBlock = ({ title, stats, action }: InfoBlockProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {action && (
          <button
            onClick={action.onClick}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            {action.text} →
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};