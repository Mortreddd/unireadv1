import { Fragment } from "react";
import Navbar from "./Navbar";
import GenreTabs from "../Genre/GenreTabs";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}
export default function Header({ className, children }: HeaderProps) {
  return (
    <Fragment>
      <header
        className={`${className} w-full border-b-2 space-y-2 md:space-y-5 font-sans border-gray-300 border-solid py-1 md:py-3 px-8 md:px-10 lg:px-16`}
      >
        <Navbar />
        {children}
      </header>
    </Fragment>
  );
}
