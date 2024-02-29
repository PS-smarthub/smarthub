import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ToolTip({ children, text }: { children: React.ReactNode, text: string }) {
  return (
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="border-0 text-s font-semibold">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
  );
}
