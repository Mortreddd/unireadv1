import React from "react";
import { Link } from "react-router-dom";

interface TabItemProps {
  children?: React.ReactNode;
  className?: string;
  to: string;
}
export default function TabItem({ children, className, to }: TabItemProps) {
  return (
    <Link to={to} className={` ${className}`}>
      {children}
    </Link>
  );
}
