import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

interface DropdownProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function Dropdown({
  text,
  className = "dropdown-end",
  children,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <details className={`dropdown ${className}`}>
        <summary
          onClick={() => setIsOpen(!isOpen)}
          className="m-1 btn flex items-center gap-2"
        >
          {text}
          <div
            className={`w-fit ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-200 ease-in-out`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 lg:w-5 lg:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 md:w-52">
          {children}
        </ul>
      </details>
    </React.Fragment>
  );
}
