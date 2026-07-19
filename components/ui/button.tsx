import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-aurora-indigo via-aurora-violet to-aurora-cyan text-white shadow-glow hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]",

        glass:
          "glass text-[var(--fg)] hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]",

        ghost:
          "text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-white/10",

        outline:
          "border border-white/20 bg-transparent text-[var(--fg)] hover:bg-white/10",
      },

      size: {
        default: "h-11 px-6",

        sm: "h-9 px-4 text-[13px]",

        lg: "h-12 px-8 text-base",

        icon: "h-10 w-10 p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };