import clsx from 'clsx'
import React, { Ref, forwardRef } from 'react'
import * as Ark from '@ark-ui/react'
import { useControllableValue } from 'ahooks'
import Scrollbar from '../scrollbar'
import './style.scss'

interface TabsProps {
  className?: string
  title?: React.ReactNode
  extra?: React.ReactNode
  append?: React.ReactNode
  //type?: 'default' | 'capsule'
  defaultValue?: string | null
  value?: string | null
  children?: React.ReactNode
  onChange?: (value: string) => void
}

const TabsComp = (
  { className, title, extra, append, children, ...props }: TabsProps,
  ref: Ref<HTMLDivElement>
) => {
  const [value, setValue] = useControllableValue(props, {
    defaultValue: '0',
  })

  return (
    <Ark.Tabs
      ref={ref}
      value={value}
      onChange={(v) => {
        setValue(v.value || '')
      }}
    >
      <Ark.TabList className={clsx(['app-tab', className])}>
        <Scrollbar>
          <div className='app-tab-layout'>
            <div className='app-tab-list'>
              {title && <div className='app-tab-title'>{title}</div>}
              {React.Children.map(children, (child, index) => {
                if (
                  React.isValidElement(child) &&
                  (child.type as React.FunctionComponent).displayName === 'TabsItem'
                ) {
                  const itemValue = child.props?.value || index.toString()
                  return (
                    <Ark.TabTrigger
                      value={itemValue}
                      className={clsx([
                        'app-tab-item',
                        value === itemValue ? 'app-tab-active' : '',
                      ])}
                    >
                      <div className='app-tab-label'>{child.props?.label}</div>
                      {value === itemValue && <div className='app-tab-active-dot'></div>}
                    </Ark.TabTrigger>
                  )
                }
              })}
              {append && <div className='app-tab-append'>{append}</div>}
            </div>
            {extra && <div className='app-tab-extra'>{extra}</div>}
          </div>
        </Scrollbar>
      </Ark.TabList>
      {React.Children.map(children, (child, index) => {
        if (
          React.isValidElement(child) &&
          (child.type as React.FunctionComponent).displayName === 'TabsItem' &&
          child.props?.children
        ) {
          const itemValue = child.props?.value || index.toString()
          return (
            <Ark.TabContent value={itemValue} className='p-4 text-sm'>
              {child.props.children}
            </Ark.TabContent>
          )
        }
      })}
    </Ark.Tabs>
  )
}

interface TabsItemProps {
  label?: string
  value?: string
  children?: React.ReactNode
}

const TabsItem: React.FC<TabsItemProps> = () => {
  return null
}
TabsItem.displayName = 'TabsItem'

const Tabs = forwardRef(TabsComp) as React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<HTMLDivElement>
> & {
  Item: typeof TabsItem
}

Tabs.Item = TabsItem

export default Tabs
