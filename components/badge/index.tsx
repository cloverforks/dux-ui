import React, { forwardRef, Ref } from 'react'
import { clsx } from 'clsx'
import './style.scss'

export interface BadgeProps {
  text?: string | number
  dot?: boolean
  size?: number
  color?: 'primary' | 'secondary' | 'info' | 'warn' | 'danger' | 'success'
  ping?: boolean
  circle?: boolean
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const BadgeComp = (
  { text, dot, size = 10, color = 'danger', ping, circle, onClick, children }: BadgeProps,
  ref: Ref<HTMLDivElement>
) => {
  const colors = {
    primary: 'app-badge-primary',
    secondary: 'app-badge-secondary',
    info: 'app-badge-info',
    warn: 'app-badge-warn',
    danger: 'app-badge-danger',
    success: 'app-badge-success',
  }

  return (
    <div className='relative inline-block' onClick={onClick} ref={ref}>
      {children}
      <div
        className={clsx(['app-badge', circle ? 'app-badge-circle' : '', colors[color]])}
        style={{
          width: dot ? size : 'auto',
          height: dot ? size : 'auto',
        }}
      >
        {ping && (
          <div
            className={clsx(['animate-ping app-badge-dot', colors[color]])}
            style={{
              width: dot ? size : 'auto',
              height: dot ? size : 'auto',
            }}
          ></div>
        )}
        {dot && <div className={clsx(['app-badge-dot', colors[color]])}></div>}
        {!dot && <div className='app-badge-text'>{text}</div>}
      </div>
    </div>
  )
}

const Badge = forwardRef(BadgeComp)
export default Badge
