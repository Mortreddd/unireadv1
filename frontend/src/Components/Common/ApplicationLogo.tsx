import { Fragment } from "react";
import { Link } from "react-router-dom";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@/Utils/Util";
import Logo from "@/Assets/uniread.svg";
const ApplicationVariant = cva(
  "object-cover m-1 aspect-video mix-blend-multiply",
  {
    variants: {
      size: {
        sm: "h-12 md:h-16 w-40 md:w-52",
        md: "h-16 md:h-20 w-44 md:w-64",
        lg: "h-24 md:h-32 w-52 md:w-72",
      },
    },
  }
);

interface ApplicationLogoProps extends VariantProps<typeof ApplicationVariant> {
  className?: string;
}

export default function ApplicationLogo({
  size,
  className,
}: ApplicationLogoProps) {
  return (
    <Fragment>
      <Link to={"/"} className="flex items-center h-fit w-fit">
        <img
          src={Logo}
          alt="uniread"
          className={cn(ApplicationVariant({ size, className }))}
        />
      </Link>
    </Fragment>
  );
}
