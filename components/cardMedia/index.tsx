import React, { Ref, forwardRef } from 'react'
import Image from '../image'
import Card from '../card'
import './style.scss'
import clsx from 'clsx'

interface CardMediaProps {
  className?: string
  image: string
  width?: string | number
  height?: string | number
  title: React.ReactNode
  desc: React.ReactNode
  extra?: React.ReactNode
  children?: React.ReactNode
  onPreview?: () => void
}

const CardMediaComp = (
  {
    className,
    image,
    width = '100%',
    height = 180,
    title,
    desc,
    extra,
    children,
    onPreview,
  }: CardMediaProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <Card className={className} ref={ref}>
      <div className='app-card-media'>
        <div className='app-card-media-header'>
          <Image
            src={image}
            className={clsx([
              'app-card-media-image',
              onPreview ? 'cursor-pointer' : 'cursor-default',
            ])}
            width={width}
            height={height}
            onClick={onPreview}
          />
          <div className='app-card-media-tags'>
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) {
                return
              }
              if ((child.type as React.FunctionComponent).displayName === 'Card.Tag') {
                return child
              }
            })}
          </div>
        </div>
        <div className='app-card-media-body'>
          <div className='app-card-media-content'>
            <div className={clsx(['app-card-media-title'])}>{title}</div>
            <div className='app-card-media-desc'>{desc}</div>
          </div>
          {extra && <div>{extra}</div>}
        </div>
      </div>
    </Card>
  )
}

interface CardMediaTagProps {
  children?: React.ReactNode
}
const CardMediaTag = ({ children }: CardMediaTagProps) => {
  return <div className={clsx(['app-card-media-tags-item'])}>{children}</div>
}
CardMediaTag.displayName = 'Card.Tag'

const CardMedia = forwardRef(CardMediaComp) as React.ForwardRefExoticComponent<
  CardMediaProps & React.RefAttributes<HTMLDivElement>
> & {
  Tag: typeof CardMediaTag
}

CardMedia.Tag = CardMediaTag

export default CardMedia
