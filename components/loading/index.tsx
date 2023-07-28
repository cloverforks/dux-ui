import { forwardRef, Ref } from 'react'
import './style.scss'
import clsx from 'clsx'
import LoadingContainer, { LoadingContainerProps } from './container'

export type LoadingColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warn'
  | 'danger'
  | 'success'
  | 'white'

export interface LoadingProps {
  size?: number
  color?: LoadingColor
}

const LoadingComp = ({ size = 18, color = 'default' }: LoadingProps, ref: Ref<SVGSVGElement>) => {
  const colors = {
    default: 'app-loading-default',
    primary: 'app-loading-primary',
    secondary: 'app-loading-secondary',
    info: 'app-loading-info',
    warn: 'app-loading-warn',
    danger: 'app-loading-danger',
    success: 'app-loading-success',
    white: 'app-loading-white',
  }

  return (
    <svg
      role='status'
      className={clsx(['app-loading animate-spin', colors[color]])}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      style={{
        width: size,
        height: size,
      }}
      ref={ref}
    >
      <circle
        className='opacity-20'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-80'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  )
}

const Loading = forwardRef(LoadingComp) as React.ForwardRefExoticComponent<
  LoadingProps & React.RefAttributes<SVGSVGElement>
> & {
  Container: React.FC<LoadingContainerProps>
}

Loading.Container = LoadingContainer

export default Loading
