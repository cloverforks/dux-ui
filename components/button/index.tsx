import { clsx } from 'clsx'
import React, { useMemo, forwardRef, Ref } from 'react'
import './style.scss'
import Loading from '../loading'

export type Color = 'default' | 'primary' | 'secondary' | 'info' | 'warn' | 'danger' | 'success'

export interface ButtonProps {
  color?: Color
  children?: React.ReactNode
  className?: string
  icon?: string
  type?: 'default' | 'outline' | 'text'
  size?: 'default' | 'xs' | 'sm' | 'lg'
  pill?: boolean
  disabled?: boolean
  loading?: boolean
  block?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  htmlType?: 'button' | 'submit' | 'reset'
}

const ButtonComp = (
  {
    htmlType = 'button',
    children,
    className,
    icon,
    color = 'default',
    type = 'default',
    size = 'default',
    pill,
    disabled,
    loading,
    block,
    onClick,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  const colors = {
    primary: 'app-btn-primary',
    default: 'app-btn-default',
    secondary: 'app-btn-secondary',
    info: 'app-btn-info',
    warn: 'app-btn-warn',
    danger: 'app-btn-danger',
    success: 'app-btn-success',
  }

  const typeClass = useMemo(() => {
    switch (type) {
      case 'outline':
        return 'app-btn-outline'
      case 'text':
        return 'app-btn-text'
      default:
        return 'app-btn-general'
    }
  }, [type])

  const sizeClass = useMemo(() => {
    switch (size) {
      case 'xs':
        return 'app-btn-xs'
      case 'sm':
        return 'app-btn-sm'
      case 'lg':
        return 'app-btn-lg'
    }
  }, [size])

  return (
    <button
      type={htmlType}
      tabIndex={0}
      ref={ref}
      disabled={disabled}
      onClick={(e) => {
        if (disabled || loading) {
          return
        }
        onClick?.(e)
      }}
      {...props}
      className={clsx([
        'app-btn',
        block ? 'w-full' : '',
        colors[color || 'default'],
        pill ? 'app-btn-pill' : '',
        disabled || loading ? 'app-btn-disabled' : '',
        icon || loading ? (!children ? 'app-btn-icon' : 'app-btn-mix') : '',
        typeClass,
        sizeClass,
        className,
      ])}
    >
      {loading ? (
        <Loading color={color == 'default' ? 'primary' : 'white'} />
      ) : (
        icon && <div className={clsx(['app-btn-icon-inner', icon])}></div>
      )}
      {children}
    </button>
  )
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonComp)
export default Button
