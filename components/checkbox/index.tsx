import React, { forwardRef, ReactNode, Ref, useContext, useEffect } from 'react'
import * as Ark from '@ark-ui/react'
import { clsx } from 'clsx'
import { useControllableValue } from 'ahooks'
import CheckboxGroup, { context } from './group'
import '../radio/style.scss'
import './style.scss'

export type value = string | number | undefined
export type checked = boolean | 'indeterminate'

interface CheckboxProps {
  value?: value
  checked?: checked
  defaultChecked?: checked
  disabled?: boolean
  readOnly?: boolean
  children?: ReactNode
  extra?: ReactNode
  desc?: ReactNode
  onChange?: (checked: checked) => void
}

const CheckboxComp = forwardRef((props: CheckboxProps, ref: Ref<HTMLLabelElement>) => {
  const { value, defaultChecked = false, disabled, readOnly, children, extra, desc } = props
  const groupContext = useContext(context)
  const [checked, setChecked] = useControllableValue(props, {
    defaultValue: defaultChecked,
    defaultValuePropName: 'defaultChecked',
    valuePropName: 'checked',
  })

  useEffect(() => {
    if (!groupContext) {
      return
    }
    setChecked(groupContext?.value?.includes(value) || false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupContext])

  return (
    <Ark.Checkbox
      className='app-checkbox-warp'
      ref={ref}
      value={String(value)}
      checked={checked}
      disabled={disabled || readOnly || groupContext?.disabled}
      onChange={(details) => {
        setChecked(details.checked)
        groupContext?.onChange?.(value, details.checked)
        props?.onChange?.(details.checked)
      }}
    >
      <Ark.CheckboxInput />
      <Ark.CheckboxControl className={clsx(['app-checkbox'])}></Ark.CheckboxControl>
      <div className='app-checkbox-inner'>
        <div className='app-checkbox-extra'>{extra}</div>
        <div className='app-checkbox-content'>
          <div className='app-checkbox-label'>{children}</div>
          {desc && <div className='app-checkbox-desc'>{desc}</div>}
        </div>
        {extra && checked === true && (
          <div className='app-checkbox-checked'>
            <div className='app-checkbox-checked-icon i-tabler:check'></div>
          </div>
        )}
      </div>
    </Ark.Checkbox>
  )
})
CheckboxComp.displayName = 'Checkbox'

const Checkbox = CheckboxComp as React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLButtonElement>
> & {
  Group: typeof CheckboxGroup
}
Checkbox.Group = CheckboxGroup

export default Checkbox
