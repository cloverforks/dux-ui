import React from 'react'
import * as Ark from '@ark-ui/react'
import type { Placement } from '@floating-ui/dom'

import clsx from 'clsx'
import './style.scss'

export interface Props {
  className?: string
  position?: Placement
  width?: number | 'inherit'
  trigger: React.ReactNode
  children?: React.ReactNode
  onChange?: (value: boolean) => void
}

const Popover = (props: Props) => {
  const { className, trigger, width = 200, position, children, onChange } = props

  return (
    <Ark.Popover
      onOpen={() => {
        onChange?.(true)
      }}
      positioning={{
        placement: position,
      }}
    >
      <Ark.PopoverTrigger asChild>{trigger}</Ark.PopoverTrigger>
      <Ark.PopoverPositioner
        className={clsx(['app-popover-position', className])}
        style={{
          width: width == 'inherit' ? 'var(--reference-width)' : width,
        }}
      >
        <Ark.PopoverContent className='app-popover'>
          <Ark.PopoverArrow className='app-popover-arrow'>
            <Ark.PopoverArrowTip className='app-popover-arrow-tip' />
          </Ark.PopoverArrow>
          {React.isValidElement(children) ? children : <div className='p-4'>{children}</div>}
        </Ark.PopoverContent>
      </Ark.PopoverPositioner>
    </Ark.Popover>
  )
}
Popover.displayName = 'Popover'

export default Popover
