import { twMerge } from "tailwind-merge";

import { ClassValue, clsx } from "clsx";
export default function cn(...classes: ClassValue[]) {
  return clsx(twMerge(clsx(...classes)));
}
