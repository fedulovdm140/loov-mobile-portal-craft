
import { ArrowUp, ArrowDown } from "lucide-react";

interface CircularProgressIndicatorProps {
  rate: number;
  label: string;
  color: string;
  change: number;
  isPositive: boolean;
}

export const CircularProgressIndicator = ({
  rate,
  label,
  color,
  change,
  isPositive
}: CircularProgressIndicatorProps) => {
  const circumference = 2 * Math.PI * 12;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - rate / 100 * circumference;
  
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 flex-shrink-0">
        <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="12" stroke="rgba(156, 163, 175, 0.15)" strokeWidth="2" fill="none" />
          <circle cx="14" cy="14" r="12" stroke={color} strokeWidth="2" fill="none" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-700" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[9px] font-bold text-gray-700">{rate}%</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[10px] text-gray-600 font-medium leading-tight block">{label}</span>
        <div className="flex items-center gap-1 mt-0.5">
          <div className={`flex items-center gap-0.5 px-1 py-0.5 rounded text-[8px] font-bold ${
            isPositive 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {isPositive ? (
              <ArrowUp className="w-2 h-2" />
            ) : (
              <ArrowDown className="w-2 h-2" />
            )}
            <span>{Math.abs(change)}%</span>
          </div>
          <span className="text-[8px] text-gray-500">от пр. мес.</span>
        </div>
      </div>
    </div>
  );
};
