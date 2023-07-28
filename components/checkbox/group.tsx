import { createContext, forwardRef, ReactNode, Ref, useCallback, useState } from 'react'
import { clsx } from 'clsx'
import '../radio/style.scss'
import './style.scss'
import { value, checked } from './index'

export interface GroupContext {
  value?: value[]
  onChange?: (value: value, checked: checked) => void
  disabled?: boolean
}

export const context = createContext<GroupContext | null>(null)

export interface CheckboxGroupProps {
  value?: value[]
  defaultValue?: value[]
  readOnly?: boolean
  disabled?: boolean
  extend?: boolean | 'fill'
  direction?: 'horizontal' | 'vertical'
  onChange?: (value: value[]) => void
  children?: ReactNode
}

const CheckboxGroup = forwardRef((props: CheckboxGroupProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    defaultValue = [],
    readOnly = false,
    disabled = false,
    extend,
    direction = 'horizontal',
  } = props
  const [value, setValue] = useState(props?.value || defaultValue)

  const onChange = useCallback(
    (v: value, state: checked) => {
      setValue((prevValue) => {
        let values = []
        if (state) {
          if (!prevValue?.includes?.(v)) {
            values = [...prevValue, v]
          } else {
            values = prevValue
          }
        } else {
          values = prevValue.filter((item) => item !== v)
        }
        props?.onChange?.(values)
        return values
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props?.onChange]
  )

  return (
    <div
      ref={ref}
      className={clsx([
        'app-checkbox-group',
        direction === 'horizontal' ? 'app-checkbox-group-horizontal' : '',
        direction === 'vertical' ? 'app-checkbox-group-vertical' : '',
        extend === true ? 'app-checkbox-group-extend' : '',
        extend === 'fill' ? 'app-checkbox-group-extend app-checkbox-group-fill' : '',
      ])}
    >
      <context.Provider value={{ value, onChange, disabled: disabled || readOnly }}>
        {children}
      </context.Provider>
    </div>
  )
})
CheckboxGroup.displayName = 'CheckboxGroup'

export default CheckboxGroup
