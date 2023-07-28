import { forwardRef, ReactNode, Ref } from 'react'
import './style.scss'
import * as ProgressRadix from '@radix-ui/react-progress'
import clsx from 'clsx'

export interface ProgressProps {
  value?: number
  total?: number
  size?: number
  color?: 'primary' | 'secondary' | 'info' | 'warn' | 'danger' | 'success' | 'gradual'
  type?: 'line' | 'bar' | 'circle'
  className?: string
  label?: boolean | string | number
  info?: ReactNode
  rate?: number
  ref?: Ref<HTMLDivElement>
}

const colors = {
  primary: 'app-progress-primary',
  secondary: 'app-progress-secondary',
  info: 'app-progress-info',
  warn: 'app-progress-warn',
  danger: 'app-progress-danger',
  success: 'app-progress-success',
  gradual: 'app-progress-gradual',
}

const ProgressLine = ({
  className,
  color = 'primary',
  size,
  rate,
  label,
  value,
  total,
  info,
}: ProgressProps) => {
  return (
    <>
      <ProgressRadix.Root
        className={clsx(['app-progress-stripe', colors[color], className])}
        style={{
          width: '100%',
          height: size,
        }}
      >
        <ProgressRadix.Indicator
          className='app-progress-inner'
          style={{
            width: `${rate || 0}%`,
            height: '100%',
          }}
        ></ProgressRadix.Indicator>
      </ProgressRadix.Root>
      {(info || label) && (
        <div className='app-progress-info flex-none'>
          {info ? (
            <>
              {value} / {total} {info}
            </>
          ) : (
            <>{label === true ? rate : label}%</>
          )}
        </div>
      )}
    </>
  )
}

const ProgressBar = ({ className, color = 'primary', size, rate, label }: ProgressProps) => {
  return (
    <>
      {label && <div className='app-progress-info'>{label === true ? rate : label}</div>}
      <ProgressRadix.Root
        className={clsx(['app-progress-stripe', colors[color], className])}
        style={{
          height: '100%',
          width: size,
        }}
      >
        <ProgressRadix.Indicator
          className='app-progress-inner'
          style={{
            width: '100%',
            height: `${rate || 0}%`,
          }}
        ></ProgressRadix.Indicator>
      </ProgressRadix.Root>
    </>
  )
}

const ProgressCircle = ({ className, color = 'primary', size, rate = 0, label }: ProgressProps) => {
  const stroke = 12
  const radius = 50 - stroke / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - rate / 100)
  return (
    <div
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={rate}
      className={clsx(['relative'])}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox='0 0 100 100'
        className={clsx(['app-progress-circle', colors[color], className])}
      >
        <circle
          className='stroke-black/5 dark:stroke-gray/10'
          style={{
            fill: 'transparent',
            strokeWidth: stroke,
            strokeLinecap: 'round',
          }}
          cx='50'
          cy='50'
          r={radius}
        />
        <circle
          className='app-progress-inner'
          cx='50'
          cy='50'
          r={radius}
          style={{
            fill: 'transparent',
            stroke: 'currentColor',
            strokeWidth: stroke,
            strokeLinecap: 'round',
            transform: 'rotate(-90deg)',
            transformOrigin: ' 50% 50%',
            strokeDashoffset: strokeDashoffset,
            strokeDasharray: `${circumference} ${circumference}`,
          }}
        />
      </svg>
      {label && (
        <div className='absolute left-50% top-50% text-base text-black -translate-x-1/2 -translate-y-1/2 dark:text-gray-dark'>
          {label === true ? `${rate}%` : label}
        </div>
      )}
    </div>
  )
}

const ProgressComp = (
  {
    value = 0,
    total = 100,
    size = 18,
    color = 'primary',
    type = 'line',
    className,
    label,
    info,
  }: ProgressProps,
  ref: Ref<HTMLDivElement>
) => {
  const rate = total ? (value / total) * 100 : 0

  return (
    <div
      ref={ref}
      className={clsx([
        'app-progress',
        type == 'line' ? 'app-progress-line' : '',
        type == 'bar' ? 'app-progress-bar' : '',
      ])}
    >
      {type == 'line' && (
        <ProgressLine
          className={className}
          color={color}
          size={size}
          rate={rate}
          label={label}
          value={value}
          total={total}
          info={info}
        />
      )}
      {type == 'circle' && (
        <ProgressCircle className={className} color={color} size={size} rate={rate} label={label} />
      )}
      {type == 'bar' && (
        <ProgressBar className={className} color={color} size={size} rate={rate} label={label} />
      )}
    </div>
  )
}

const Progress = forwardRef(ProgressComp)

export default Progress
