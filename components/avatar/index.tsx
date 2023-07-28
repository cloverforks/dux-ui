import { clsx } from 'clsx'
import React, { Ref, forwardRef } from 'react'
import { Color } from '../button'
import * as Ark from '@ark-ui/react'
import './style.scss'

interface AvatarProps {
  src?: string
  alt?: string
  circle?: boolean
  color?: Color
  size?: number
  className?: string
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const AvatarComp = (
  { src, alt, circle, color = 'default', size = 46, className, onClick, children }: AvatarProps,
  ref: Ref<HTMLDivElement>
) => {
  const colors = {
    default: 'app-avatar-default',
    primary: 'app-avatar-primary',
    secondary: 'app-avatar-secondary',
    info: 'app-avatar-info',
    warn: 'app-avatar-warn',
    danger: 'app-avatar-danger',
    success: 'app-avatar-success',
  }

  return (
    <Ark.Avatar
      ref={ref}
      asChild
      className={clsx([
        'app-avatar',
        circle ? 'app-avatar-circle' : 'app-avatar-rounded',
        colors[color],
        className,
      ])}
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
    >
      <div>
        <Ark.AvatarFallback className={clsx(['app-avatar-text'])}>{children}</Ark.AvatarFallback>
        {src && <Ark.AvatarImage className={clsx(['app-avatar-image'])} src={src} alt={alt} />}
      </div>
    </Ark.Avatar>
  )
}

const Avatar = forwardRef(AvatarComp)
export default Avatar
