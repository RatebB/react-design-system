import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Card({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={cn("rounded-lg border border-gray-200 bg-white p-5 shadow-sm", className)} {...props}>{children}</div>;
}