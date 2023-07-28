import React, { forwardRef, Ref } from 'react'
import clsx from 'clsx'
import { useControllableValue } from 'ahooks'
import * as Collapsible from '@radix-ui/react-collapsible'
import Button from '../button'
import './style.scss'

interface PanelProps {
  className?: string
  title: React.ReactNode
  extra?: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpen?: (value: boolean) => void
}

const PanelComp = (props: PanelProps, ref: Ref<HTMLDivElement>) => {
  const { className, title, extra, children } = props
  const [open, setOpen] = useControllableValue(props, {
    defaultValue: true,
    valuePropName: 'open',
    defaultValuePropName: 'defaultOpen',
    trigger: 'onOpen',
  })

  return (
    <Collapsible.Root
      className={clsx(['app-collapse transition-all', open ? 'app-collapse-open' : ''], className)}
      open={open}
      ref={ref}
      onOpenChange={(v) => {
        setOpen(v)
      }}
    >
      <div className='app-collapse-header'>
        <div className='app-collapse-title'>{title}</div>
        <div className='app-collapse-tools'>
          {extra}
          <Collapsible.Trigger asChild>
            <Button
              pill
              type='text'
              size='sm'
              icon='i-tabler:chevron-down'
              className={open ? 'rotate-180' : ''}
              aria-label='close'
            />
          </Collapsible.Trigger>
        </div>
      </div>

      <Collapsible.Content>
        <div className='app-collapse-body'>{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

const Panel = forwardRef<HTMLDivElement, PanelProps>(PanelComp)
export default Panel
