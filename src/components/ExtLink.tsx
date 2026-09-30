import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export function ExtLink({ href, children, className }: Props) {
  if (!href) return <span className={className}>{children}</span>
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? 'ext-link'}
    >
      {children}
    </a>
  )
}
