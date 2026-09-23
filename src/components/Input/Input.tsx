import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, id, className, ...props }: InputProps) {
  const inputId = id ?? `input-${Math.random().toString(36).slice(2)}`;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        className={cn(
          "block w-full rounded-md border px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-100",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
        {...props}
      />
      {error && <p id={`${inputId}-error`} className="text-sm text-red-600">{error}</p>}
      {!error && hint && <p id={`${inputId}-hint`} className="text-sm text-gray-500">{hint}</p>}
    </div>
  );
}