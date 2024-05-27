import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@/Utils/Util";

const ButtonVariants = cva("btn transition-colors duration-200 ease-in-out", {
  variants: {
    variant: {
      default: "bg-primary text-white hover:bg-primary/90",
      primary: "bg-primary text-white hover:bg-secondary/90",
      secondary: "bg-secondary text-white hover:bg-secondary/90",
      ghost: "bg-transparent text-black border-2 border-black",
    },
    size: {
      default: "px-4 py-2",
      sm: "px-2 py-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, children, disabled, className, variant, size, ...props }) => {
    return (
      <button
        type={type}
        disabled={disabled}
        className={cn(ButtonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { Button, ButtonVariants };
