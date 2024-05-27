import cn from "@/Utils/Util";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const BadgeVariants = cva("w-fit badge p-2 md:p-3 gap-2 lg:gap-3", {
  variants: {
    variant: {
      default: "badge-neutral",
      success: "badge-success",
      error: "badge-error",
      secondary: "badge-secondary",
      info: "badge-info",
    },
  },
});

interface BadgeProps extends VariantProps<typeof BadgeVariants> {
  className?: string;
  children: React.ReactNode;
}
export default function WithBadge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(BadgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}
