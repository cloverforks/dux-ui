import React, { ReactNode } from 'react'
import clsx from 'clsx'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  Portal,
} from '@ark-ui/react'
import type { Placement } from '@floating-ui/dom'
import '../popover/style.scss'
import './style.scss'

interface DropdownMenuProps {
  trigger: ReactNode
  width?: number
  position?: Placement
  children: ReactNode
}
const Dropdown: React.FC<DropdownMenuProps> & {
  Item: typeof DropdownMenuItem
  ItemSub: typeof DropdownItemSub
  Separator: typeof DropdownSeparator
} = (props: DropdownMenuProps) => {
  const { trigger, width = 160, position, children } = props
  return (
    <Menu
      positioning={{
        placement: position,
      }}
    >
      <MenuTrigger asChild>{trigger}</MenuTrigger>
      <DropdownMenuContent width={width}>{children}</DropdownMenuContent>
    </Menu>
  )
}
Dropdown.displayName = 'Dropdown'

interface DropdownMenuContentProps {
  width?: number | string
  children: ReactNode
}
const DropdownMenuContent = ({ width, children }: DropdownMenuContentProps) => {
  return (
    <Portal>
      <MenuPositioner className='app-popover-position'>
        <MenuContent
          className={clsx(['app-popover'])}
          style={{
            minWidth: width,
          }}
        >
          <div className={clsx(['app-menu'])}>
            {React.Children.map(children, (child, index) => {
              if (!React.isValidElement(child)) {
                return
              }
              const type = child.type as React.FunctionComponent

              if (
                React.isValidElement<DropdownMenuItemProps>(child) &&
                type.displayName === 'Dropdown.Item'
              ) {
                return React.cloneElement(child, { id: index })
              }

              if (
                React.isValidElement<DropdownMenuSubProps>(child) &&
                type.displayName === 'Dropdown.ItemSub'
              ) {
                return React.cloneElement(child, { width: width })
              }

              if (type.displayName === 'Dropdown.Separator') {
                return child
              }
              return
            })}
          </div>
        </MenuContent>
      </MenuPositioner>
    </Portal>
  )
}
interface DropdownMenuItemProps {
  id?: number
  icon?: string
  children: string
  onClick?: () => void
}
const DropdownMenuItem = ({ id, icon, children, onClick }: DropdownMenuItemProps) => {
  return (
    <MenuItem id={'menu' + id} className='app-menu-item' onClick={onClick}>
      {icon && <div className={clsx([icon, 'w-4 h-4'])}></div>}
      <div className='w-1 flex-grow'>{children}</div>
    </MenuItem>
  )
}
DropdownMenuItem.displayName = 'Dropdown.Item'
Dropdown.Item = DropdownMenuItem

interface DropdownMenuSubProps {
  icon?: string
  label: string
  width?: number | string
  children: ReactNode
}
const DropdownItemSub = ({ icon, label, width = 160, children }: DropdownMenuSubProps) => {
  return (
    <Menu
      positioning={{
        offset: {
          mainAxis: 4,
        },
      }}
    >
      <MenuTriggerItem className='app-menu-item'>
        {icon && <div className={clsx([icon, 'w-4 h-4'])}></div>}
        <div className='w-1 flex-grow'>{label}</div>
        <div className='app-menu-arrow i-heroicons:chevron-right h-3 w-3'></div>
      </MenuTriggerItem>
      <DropdownMenuContent width={width}>{children}</DropdownMenuContent>
    </Menu>
  )
}
DropdownItemSub.displayName = 'Dropdown.ItemSub'
Dropdown.ItemSub = DropdownItemSub

const DropdownSeparator = () => {
  return <MenuSeparator className='border-gray dark:border-gray/10' />
}
DropdownSeparator.displayName = 'Dropdown.Separator'
Dropdown.Separator = DropdownSeparator

export default Dropdown
