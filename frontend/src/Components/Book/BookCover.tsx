import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import cn from "@/Utils/Util";
const BookCoverVariant = cva("rounded-lg object-cover", {
  variants: {
    variant: {
      default: "h-72 md:h-96 w-40 md:w-52 object h-72 md:96 w-40 md:w-52 ",
      jumbotron: "h-72 md:h-96 w-40 md:w-52 object-cover",
    },
    size: {
      default: "h-72 md:h-96 w-40 md:w-52 object-cover",
      sm: "h-52 md:h-72 w-32 md:w-40 object-cover",
      md: "h-72 md:h-96 w-40 md:w-52 object-cover",
      lg: "h-96 md:h-72 w-52 md:w-64 object-cover",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
interface BookCoverProps extends VariantProps<typeof BookCoverVariant> {
  className?: string;
  bookImage?: string;
}

export default function BookCover({
  className,
  variant,
  size,
  bookImage = "",
}: BookCoverProps) {
  return (
    <img
      src={bookImage}
      alt={bookImage}
      className={cn(BookCoverVariant({ variant, size, className }))}
    />
  );
}
