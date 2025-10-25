import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

const variantStyles = {
  default: {
    separator: "bg-white",
    starWrapper: "",
    star: "",
  },
  secondary: {
    separator: "bg-secondary",
    starWrapper: "text-secondary",
    star: "",
  },
} as const;

type StarSeparatorProps = {
  variant?: keyof typeof variantStyles;
  className?: string;
};

const StarSeparator = ({
  variant = "default",
  className,
}: StarSeparatorProps) => {
  const { separator, starWrapper, star } = variantStyles[variant];

  return (
    <div
      className={cn("flex w-24 items-center justify-center gap-2", className)}
    >
      <Separator className={cn("h-1 rounded-sm", separator)} />
      <div className={cn(starWrapper)}>
        <Star className={cn("size-10", star)} />
      </div>
      <Separator className={cn("h-1 rounded-sm", separator)} />
    </div>
  );
};

export { StarSeparator };
