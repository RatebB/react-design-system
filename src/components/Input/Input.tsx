import {
  forwardRef,
  InputHTMLAttributes,
  useId,
} from 'react';

import { cn } from '../../lib/cn';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, hint, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? `input-${generatedId}`;

    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy = [hintId, errorId]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full rounded-md border border-slate-300 bg-white px-3 py-2',
            'text-sm text-slate-900 shadow-sm',
            'placeholder:text-slate-400',
            'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className,
          )}
          {...props}
        />

        {hint && !error && (
          <p id={hintId} className="text-xs text-slate-500">
            {hint}
          </p>
        )}

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';