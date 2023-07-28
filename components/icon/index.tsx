import { forwardRef, Ref, MouseEvent } from 'react'
import { clsx } from 'clsx'

interface IconProps {
  icon: string
  size?: string | number
  className?: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

const IconComp = ({ icon, size = 16, onClick, className }: IconProps, ref: Ref<HTMLDivElement>) => {
  const sizeConver = typeof size === 'string' ? size : `${size}px`
  return (
    <div
      style={{
        width: sizeConver,
        height: sizeConver,
      }}
      className={clsx(icon, className)}
      onClick={onClick}
      ref={ref}
    ></div>
  )
}

const Icon = forwardRef<HTMLDivElement, IconProps>(IconComp)

export default Icon
