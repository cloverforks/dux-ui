import React from 'react'
import * as Ark from '@ark-ui/react'
import { Placement } from '@zag-js/toast'
import './style.scss'
interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  position?: Placement
  delay?: number
}

const Tooltip = ({ children, content, position = 'top', delay = 100 }: TooltipProps) => {
  return (
    <Ark.Tooltip closeDelay={delay} openDelay={delay} positioning={{ placement: position }}>
      <Ark.TooltipTrigger asChild>{children}</Ark.TooltipTrigger>
      <Ark.Portal>
        <Ark.TooltipPositioner className='app-tooltip'>
          <Ark.TooltipArrow className='app-tooltip-arrow'>
            <Ark.TooltipArrowTip className='app-tooltip-arrow-tip' />
          </Ark.TooltipArrow>
          <Ark.TooltipContent>{content}</Ark.TooltipContent>
        </Ark.TooltipPositioner>
      </Ark.Portal>
    </Ark.Tooltip>
  )
}

export default Tooltip
