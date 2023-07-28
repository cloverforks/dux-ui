import clsx from 'clsx'
import React, { forwardRef, useMemo, Ref } from 'react'
import './style.scss'

interface StepsItemProps {
  value?: number | string
  title?: string
  children?: React.ReactNode
  index?: number
  active?: boolean
  current?: boolean
}

interface StepsProps {
  value?: number | string
  direction?: 'horizontal' | 'vertical'
  children?: React.ReactNode
  ref?: Ref<HTMLOListElement>
}

const StepsComp = (
  { value, direction = 'horizontal', children }: StepsProps,
  ref: Ref<HTMLOListElement>
) => {
  const activeIndex = useMemo(() => {
    let activeIndex = 0
    React.Children.map(children, (child, index) => {
      if (
        React.isValidElement(child) &&
        (child.type as React.FunctionComponent).displayName === 'StepsItem'
      ) {
        const itemValue = child.props?.value == null ? index : child.props.value
        if (itemValue === value) {
          activeIndex = index
        }
      }
    })
    return activeIndex
  }, [value, children])

  return (
    <ol
      role='list'
      ref={ref}
      className={clsx([
        'app-step',
        direction === 'vertical' ? 'app-step-vertical' : '',
        direction === 'horizontal' ? 'app-step-horizontal' : '',
      ])}
    >
      {React.Children.map(children, (child, index) => {
        if (
          React.isValidElement(child) &&
          (child.type as React.FunctionComponent).displayName === 'StepsItem'
        ) {
          return React.cloneElement(child, {
            index: index + 1,
            current: activeIndex === index,
            active: activeIndex > index,
          } as StepsItemProps)
        }
      })}
    </ol>
  )
}

const StepsItem = ({ title, children, index, active, current }: StepsItemProps) => {
  return (
    <li
      className={clsx([
        'app-step-item',
        active ? 'app-step-active' : '',
        current ? 'app-step-current' : '',
      ])}
    >
      <div className='app-step-icon' aria-hidden='true'>
        {active ? (
          <div className='i-tabler:check'></div>
        ) : (
          <div className='app-step-icon'>{index}</div>
        )}
      </div>
      <div className='app-step-content'>
        <div className='app-step-title'>{title}</div>
        <div className='app-step-desc'>{children}</div>
      </div>
    </li>
  )
}
StepsItem.displayName = 'StepsItem'

const Steps = forwardRef(StepsComp) as React.ForwardRefExoticComponent<
  StepsProps & React.RefAttributes<HTMLOListElement>
> & {
  Item: typeof StepsItem
}

Steps.Item = StepsItem

export default Steps
