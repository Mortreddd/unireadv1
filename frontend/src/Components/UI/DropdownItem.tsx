import React from "react";

export default function DropdownItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <li className={className}>{children}</li>
    </React.Fragment>
  );
}
