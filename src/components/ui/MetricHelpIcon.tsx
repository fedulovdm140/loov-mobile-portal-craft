
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MetricHelpIconProps {
  helpText: string;
}

export const MetricHelpIcon = ({ helpText }: MetricHelpIconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="w-3 h-3 text-gray-400 hover:text-gray-600 cursor-help transition-colors" />
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs text-sm">
          <p>{helpText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
