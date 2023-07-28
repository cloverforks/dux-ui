import React, { forwardRef, Ref } from 'react'
import clsx from 'clsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Skeleton from '../skeleton'
import './style.scss'

export interface ImageProps {
  src: string
  title?: string
  alt?: string
  className?: string
  height?: number | string
  width?: number | string
  rounded?: boolean
  circle?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Placeholder = () => {
  return <Skeleton.Image width='100%' height='100%'></Skeleton.Image>
}

/**
 * Image component with lazy loading effect, loading will show Loading state
 */
const ImageComp = (
  {
    src,
    title,
    alt,
    className,
    height = 60,
    width = 60,
    rounded = true,
    circle = false,
    onClick,
  }: ImageProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div
      ref={ref}
      className={clsx([
        'app-image',
        rounded ? 'app-image-rounded' : '',
        circle ? 'app-image-circle' : '',
        className,
      ])}
      style={{
        width: width,
        height: height,
      }}
      onClick={onClick}
    >
      {src ? (
        <>
          <LazyLoadImage
            className='app-image-inner'
            alt={alt}
            src={src}
            placeholder={<Placeholder />}
          />
          {title && <div className='app-image-title'>{title}</div>}
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  )
}

const Image = forwardRef<HTMLDivElement, ImageProps>(ImageComp)
export default Image
