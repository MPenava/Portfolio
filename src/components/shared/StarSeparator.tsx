import { Star } from "lucide-react";
import { Separator } from "../ui/separator";

const StarSeparator = () => {
  return (
    <div className="flex w-24 items-center justify-center gap-2">
      <Separator className="h-1 rounded-sm bg-white" />
      <div>
        <Star className="size-10" />
      </div>
      <Separator className="h-1 rounded-sm bg-white" />
    </div>
  );
};

export { StarSeparator };
