'use client'

import { ReactNode } from 'react'

interface MallLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function MallLink({ href, children, className }: MallLinkProps) {
  const handleClick = () => {
    // Track MallClick event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'MallClick', {
        product: 'kitakataseabura'
      })
    }

  }

  return (
    <a href={href} target="_blank" onClick={handleClick} className={className} rel="noopener noreferrer">
      {children}
    </a>
  )
}
