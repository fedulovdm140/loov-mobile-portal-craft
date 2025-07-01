
interface CircularProgressProps {
  title: string;
  value: string;
  subtitle: string;
  progress: number;
  color: string;
  icon: React.ReactNode;
}

export const CircularProgress = ({ title, value, subtitle, progress, color, icon }: CircularProgressProps) => {
  return (
    <div className="text-center">
      {/* Circular Progress */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${progress * 2.51} 251`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center`}>
            {icon}
          </div>
        </div>
        <div className="absolute -top-2 -right-2 bg-white text-blue-600 text-sm font-bold px-2 py-1 rounded-full">
          {progress}%
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-sm opacity-80">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs opacity-60">{subtitle}</p>
      </div>
    </div>
  );
};
