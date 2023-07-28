import { clsx } from 'clsx'
import React, { forwardRef, Ref, ReactElement } from 'react'
import './style.scss'
import Image from '../image'
import { Color } from '../button'

interface LabelProps {
  className?: string
  color?: Color
  size?: 'default' | 'sm' | 'xs'
  rounded?: boolean
  hollow?: boolean
  dot?: boolean
  ping?: boolean
  icon?: string
  image?: string
  extra?: ReactElement
  children: string | ReactElement
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const LabelComp = (
  {
    className,
    color = 'default',
    size = 'default',
    rounded,
    dot,
    ping,
    icon,
    image,
    extra,
    children,
    onClick,
  }: LabelProps,
  ref: Ref<HTMLDivElement>
) => {
  const dotColors = {
    primary: 'app-label-dot-primary',
    default: 'app-label-dot-default',
    secondary: 'app-label-dot-secondary',
    info: 'app-label-dot-info',
    warn: 'app-label-dot-warn',
    danger: 'app-label-dot-danger',
    success: 'app-label-dot-success',
  }

  const colors = {
    primary: 'app-label-primary',
    default: 'app-label-default',
    secondary: 'app-label-secondary',
    info: 'app-label-info',
    warn: 'app-label-warn',
    danger: 'app-label-danger',
    success: 'app-label-success',
  }

  const sizes = {
    default: '',
    sm: 'app-label-sm',
    xs: 'app-label-xs',
  }

  const sizeImage = {
    default: 22,
    sm: 20,
    xs: 18,
  }

  return (
    <div
      className={clsx([
        'app-label',
        rounded ? 'app-label-rounded' : '',
        image ? 'app-label-narrow' : '',
        extra ? 'app-label-extra' : '',
      ])}
      ref={ref}
      onClick={onClick}
    >
      <div className={clsx(['app-label-inner', className, colors[color], sizes[size]])}>
        {dot && (
          <div className='relative'>
            {ping && (
              <div
                className={clsx(['absolute animate-ping app-label-dot', dotColors[color]])}
              ></div>
            )}
            <div className={clsx(['app-label-dot', dotColors[color]])}></div>
          </div>
        )}
        {icon && <div className={clsx(['w-4 h-4', icon])}></div>}
        {image && (
          <Image
            className='app-label-image'
            width={sizeImage[size]}
            height={sizeImage[size]}
            src={image}
            circle
          />
        )}
        <div>{children}</div>
        {extra}
      </div>
    </div>
  )
}

const Label = forwardRef<HTMLDivElement, LabelProps>(LabelComp)
export default Label
