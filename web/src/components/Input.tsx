import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm text-text-muted" htmlFor={id}>
      {label}
      <input
        id={id}
        className={`rounded-lg border border-primary-light bg-surface px-3 py-2 text-text outline-none focus:border-primary ${className}`}
        {...props}
      />
    </label>
  )
}
