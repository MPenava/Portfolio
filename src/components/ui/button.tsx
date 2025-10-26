import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground text-secondary shadow hover:bg-foreground/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-accent-foreground text-foreground bg-accent shadow-sm hover:bg-accent/90 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface SharedProps extends VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className?: string;
}

type ButtonOnlyProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  SharedProps & {
    href?: undefined;
  };

type AnchorOnlyProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  SharedProps & {
    href: string;
  };

export type ButtonProps = ButtonOnlyProps | AnchorOnlyProps;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, asChild = false, href, ...props }, ref) => {
  const Comp: React.ElementType = asChild ? Slot : href ? "a" : "button";

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...(href ? { href } : {})}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
