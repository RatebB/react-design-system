import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export interface AlertProps {
  title: string;
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "danger";
}

export function Alert({ title, children, variant = "info" }: AlertProps) {
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-900",
    success: "border-green-200 bg-green-50 text-green-900",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-900",
    danger: "border-red-200 bg-red-50 text-red-900",
  };
  return (
    <div role="alert" className={cn("rounded-md border p-4", styles[variant])}>
      <p className="font-medium">{title}</p>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}