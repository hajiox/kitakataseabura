'use client'

import { ReactNode } from 'react'

interface MallLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function MallLink({ href, children, className }: MallLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track MallClick event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'MallClick', {
        product: 'kitakataseabura'
      })
    }

    // Wait 300-500ms before navigating
    const delay = 300 + Math.random() * 200
    
    e.preventDefault()
    setTimeout(() => {
      window.open(href, '_blank')
    }, delay)
  }

  return (
    <a href={href} onClick={handleClick} className={className} rel="noopener noreferrer">
      {children}
    </a>
  )
}
