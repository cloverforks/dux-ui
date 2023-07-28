import clsx from 'clsx'
import { forwardRef } from 'react'
import './style.scss'

const Icon = () => {
  return (
    <svg
      className='w-12 h-12'
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
    >
      <path
        className='fill-gray-light dark:fill-black-light'
        d='M896 85.333333H277.333333v853.333334h618.666667V85.333333zM373.333333 384h341.333334v42.666667H373.333333v-42.666667z m0 106.666667h341.333334v42.666666H373.333333v-42.666666z m341.333334 106.666666H373.333333v42.666667h341.333334v-42.666667z'
        //fill='#F5F5F5'
      ></path>
      <path
        className='fill-gray dark:fill-gray/50'
        d='M757.333333 384h42.666667v42.666667h-42.666667v-42.666667zM757.333333 490.666667h42.666667v42.666666h-42.666667v-42.666666zM800 597.333333h-42.666667v42.666667h42.666667v-42.666667z'
      ></path>
      <path
        d='M917.333333 458.666667l32-32 32 32-32 32-32-32zM458.666667 224l32-32 32 32-32 32-32-32zM629.333333 85.333333a42.666667 42.666667 0 0 0-85.333333 0h-85.333333v42.666667h256V85.333333h-85.333334z'
        className='fill-gray dark:fill-gray/50'
      ></path>
      <path
        d='M371.498667 320c-94.261333 0-170.666667 76.405333-170.666667 170.666667s76.405333 170.666667 170.666667 170.666666c94.250667 0 170.666667-76.405333 170.666666-170.666666s-76.416-170.666667-170.666666-170.666667z m0-42.666667c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333c-43.477333 0-83.925333-13.013333-117.653334-35.338667L103.018667 819.509333 42.666667 759.168 193.514667 608.32A212.341333 212.341333 0 0 1 158.165333 490.666667c0-117.824 95.509333-213.333333 213.333334-213.333334z'
        className='fill-gray-dark dark:fill-gray-dark'
      ></path>
    </svg>
  )
}

interface EmptyProps {
  title?: string
  desc?: string
  direction?: 'vertical' | 'horizontal'
  className?: string
  children?: React.ReactNode
}

const Empty = forwardRef<HTMLDivElement, EmptyProps>(
  ({ title, desc, direction = 'vertical', className, children }, ref) => {
    return (
      <div className={clsx('app-empty', className)} ref={ref}>
        <div
          className={clsx([
            'app-empty-inner',
            direction === 'vertical' ? 'app-empty-vertical' : '',
            direction === 'horizontal' ? 'app-empty-horizontal' : '',
          ])}
        >
          <div>
            <Icon />
          </div>
          <div className={'app-empty-content'}>
            {title && <div className='text-black dark:text-gray'>{title}</div>}
            {desc && <div className='text-gray-dark dark:text-gray-dark/50'>{desc}</div>}
            {children && <div className='mt-2'>{children}</div>}
          </div>
        </div>
      </div>
    )
  }
)
Empty.displayName = 'Empty'

export default Empty
