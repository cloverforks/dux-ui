import { ReactNode, Ref, forwardRef } from 'react'
import clsx from 'clsx'
import './style.scss'

interface CardProps {
  className?: string
  border?: boolean
  title?: string
  desc?: string
  extra?: ReactNode
  children: ReactNode
}

const CardComp = (
  { className, border, title, desc, extra, children }: CardProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div className={clsx(['app-card', border ? 'app-card-border' : '', className])} ref={ref}>
      {title && (
        <>
          <header className={clsx(['app-card-header'])}>
            {title && (
              <div>
                <div className={clsx(['app-card-title'])}>{title}</div>
                {desc && <div className={clsx(['app-card-desc'])}>{desc}</div>}
              </div>
            )}
            {extra}
          </header>
        </>
      )}
      {children}
    </div>
  )
}

const Card = forwardRef(CardComp)

export default Card
