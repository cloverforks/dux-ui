import clsx from 'clsx'
import React, { forwardRef, useMemo, ReactNode, Ref } from 'react'
import './style.scss'

interface TimelineItemProps {
  value?: number | string
  children: ReactNode
  desc?: ReactNode
  extra?: ReactNode
  current?: boolean
  active?: boolean
}

interface TimelineProps {
  value?: number | string
  children: ReactNode
  ref?: Ref<HTMLOListElement>
}

const TimelineComp = ({ value, children }: TimelineProps, ref: Ref<HTMLOListElement>) => {
  const activeIndex = useMemo(() => {
    let activeIndex = 0
    React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const itemValue = child.props?.value == null ? index : child.props.value
        if (itemValue == value) {
          activeIndex = index
        }
      }
    })
    return activeIndex
  }, [value, children])

  return (
    <ol role='list' className='app-timeline' ref={ref}>
      {React.Children.map(children, (child, index) => {
        if (
          React.isValidElement(child) &&
          (child.type as React.FunctionComponent).displayName == 'TimelineItem'
        ) {
          return React.cloneElement(child, {
            current: activeIndex == index,
            active: activeIndex > index,
          } as TimelineItemProps)
        }
      })}
    </ol>
  )
}

const TimelineItem = ({ children, desc, extra, current, active }: TimelineItemProps) => {
  return (
    <li
      className={clsx([
        'app-timeline-item',
        active ? 'app-timeline-active' : '',
        current ? 'app-timeline-current' : '',
      ])}
    >
      <div className='app-timeline-prefix' aria-hidden='true'>
        {active && (
          <div className='app-timeline-icon'>
            <div className='i-tabler:check'></div>
          </div>
        )}
        {current && (
          <>
            <div className='app-timeline-dot-active'></div>
            <div className='app-timeline-dot-active-bg'></div>
          </>
        )}
        {!current && !active && <div className='app-timeline-dot'></div>}
      </div>
      <div className={clsx(['app-timeline-content'])}>
        <div className='space-y-1'>
          <div className={clsx(['app-timeline-title'])}>{children}</div>
          {desc && <div className='app-timeline-desc'>{desc}</div>}
        </div>
        {extra && <div>{extra}</div>}
      </div>
    </li>
  )
}
TimelineItem.displayName = 'TimelineItem'

const Timeline = forwardRef(TimelineComp) as React.ForwardRefExoticComponent<
  TimelineProps & React.RefAttributes<HTMLOListElement>
> & {
  Item: typeof TimelineItem
}

Timeline.Item = TimelineItem

export default Timeline
