import clsx from 'clsx'
import { ReactNode } from 'react'
import Loading, { LoadingColor } from '.'

export interface LoadingContainerProps {
  loading?: boolean
  color?: LoadingColor
  className?: string
  children?: ReactNode
}
const LoadingContainer = ({
  loading = true,
  color = 'primary',
  className,
  children,
}: LoadingContainerProps) => {
  return (
    <div className={clsx(['app-loading-container', className])}>
      {children}
      {loading && (
        <div className='app-loading-screen'>
          <Loading color={color} />
        </div>
      )}
    </div>
  )
}

export default LoadingContainer
