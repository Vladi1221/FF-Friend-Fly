import type { HTMLAttributes } from 'react'

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border border-primary-light bg-surface p-4 shadow-sm ${className}`}
      {...props}
    />
  )
}
