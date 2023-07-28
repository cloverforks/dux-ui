import { clsx } from 'clsx'
import React, { forwardRef, ReactNode } from 'react'
import Image, { ImageProps } from '../image'
import './style.scss'

export interface MediaTextProps {
  children?: ReactNode
  size?: 'default' | 'sm'
}

const MediaTextComp = (
  { size = 'default', children }: MediaTextProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div className={clsx(['app-media-text', size == 'sm' ? 'app-media-text-sm' : ''])} ref={ref}>
      {React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) &&
          (child.type as React.FunctionComponent).displayName === 'MediaText.Image' &&
          child
      )}
      <div className='app-media-text-content'>
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement(child) &&
            (child.type as React.FunctionComponent).displayName === 'MediaText.Title' &&
            child
        )}
        <div className='empty:hidden'>
          {React.Children.map(
            children,
            (child) =>
              React.isValidElement(child) &&
              (child.type as React.FunctionComponent).displayName === 'MediaText.Desc' &&
              child
          )}
        </div>
      </div>
    </div>
  )
}

const MediaTextImage = (props: ImageProps) => {
  const { width = 48, height = 48 } = props
  return <Image {...props} width={width} height={height} />
}
MediaTextImage.displayName = 'MediaText.Image'

interface MediaTextTitleProps {
  children?: ReactNode
}
const MediaTextTitle = ({ children }: MediaTextTitleProps) => {
  return (
    <div className={clsx(['app-media-text-title'])} data-highlight>
      <div className='inline-block'>{children}</div>
    </div>
  )
}
MediaTextTitle.displayName = 'MediaText.Title'

const MediaTextDesc = ({ children }: { children?: ReactNode }) => {
  return <div className={clsx(['app-media-text-desc'])}>{children}</div>
}
MediaTextDesc.displayName = 'MediaText.Desc'

const MediaText = forwardRef(MediaTextComp) as React.ForwardRefExoticComponent<
  MediaTextProps & React.RefAttributes<HTMLDivElement>
> & {
  Image: typeof MediaTextImage
  Title: typeof MediaTextTitle
  Desc: typeof MediaTextDesc
}

MediaText.Image = MediaTextImage
MediaText.Title = MediaTextTitle
MediaText.Desc = MediaTextDesc

export default MediaText
