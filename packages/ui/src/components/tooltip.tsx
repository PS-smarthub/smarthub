import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ToolTip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent className="border-0 text-s font-semibold dark:text-gray-600">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
