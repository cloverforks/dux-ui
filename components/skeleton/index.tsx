import clsx from 'clsx'
import React, { ReactNode } from 'react'
import './style.scss'

interface SkeletonProps {
  children?: ReactNode
  className?: string
}

interface SkeletonTextProps {
  width?: string | number
  height?: string | number
  className?: string
}

interface SkeletonImageProps {
  width?: string | number
  height?: string | number
  circle?: boolean
  className?: string
}

const Skeleton = ({ className, children }: SkeletonProps) => {
  return (
    <div className={clsx(['app-skeleton', className])}>
      {React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) &&
          (child.type as React.FunctionComponent).displayName === 'SkeletonImage' &&
          child
      )}
      <div className='app-skeleton-content'>
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement(child) &&
            (child.type as React.FunctionComponent).displayName === 'SkeletonText' &&
            child
        )}
      </div>
    </div>
  )
}

const SkeletonText = ({ width = '100%', height = '20px', className }: SkeletonTextProps) => {
  return (
    <div
      className={clsx(['app-skeleton-text  animate-pulse', className])}
      style={{
        width: width,
        height: height,
      }}
    ></div>
  )
}
SkeletonText.displayName = 'SkeletonText'

const SkeletonImage = ({
  width = 48,
  height = 48,
  circle = false,
  className,
}: SkeletonImageProps) => {
  return (
    <div
      className={clsx([
        'app-skeleton-image  animate-pulse',
        circle ? 'rounded-full' : 'rounded-lg',
        className,
      ])}
      style={{
        width: width,
        height: height,
      }}
    ></div>
  )
}
SkeletonImage.displayName = 'SkeletonImage'

Skeleton.Text = SkeletonText
Skeleton.Image = SkeletonImage

export default Skeleton
