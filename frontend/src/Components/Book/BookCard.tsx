import React from "react";
import Cover from "../assets/Cover.jpg";
import BookCover from "./BookCover";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@/Utils/Util";
import WithBadge from "../withBadge";
const BookCardVariants = cva("rounded-lg border-primary border-2", {
  variants: {
    variant: {
      default: "h-fit w-fit",
      sm: "h-fit w-fit",
      md: "h-fit w-fit",
      lg: "h-fit w-fit",
    },

    size: {
      default: "h-fit w-fit",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

interface BookCardProps extends VariantProps<typeof BookCardVariants> {
  className?: string;
}
export default function BookCard({
  variant,
  size,
  className,
  ...props
}: BookCardProps) {
  return (
    <React.Fragment>
      <article className={cn(BookCardVariants({ variant, size, className }))}>
        <BookCover bookImage={Cover} />
        <div className="w-full p-2">
          <WithBadge>Horror</WithBadge>
        </div>
      </article>
    </React.Fragment>
  );
}
