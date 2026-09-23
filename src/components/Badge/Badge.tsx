import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export interface BadgeProps {
  children: ReactNode;
  variant?: "neutral" | "success" | "warning" | "danger" | "info";
}

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  const styles = {
    neutral: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-medium", styles[variant])}>{children}</span>;
}