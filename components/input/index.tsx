import React, { forwardRef, KeyboardEventHandler, Ref, InputHTMLAttributes } from 'react'
import { useControllableValue } from 'ahooks'
import { ElementProps, Element } from '../form/element'
import '../form/style.scss'
import './style.scss'

type value = InputHTMLAttributes<HTMLInputElement>['value']
interface InputProps extends ElementProps {
  defaultValue?: value
  value?: value
  placeholder?: string
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  onChange?: (value: value) => void
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>
}

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { placeholder, readOnly, disabled, onFocus, onBlur, onPressEnter } = props

  const [value, setValue] = useControllableValue(props)

  return (
    <Element
      disabled={disabled}
      readOnly={readOnly}
      onClear={() => {
        setValue('')
      }}
      {...props}
    >
      <input
        ref={ref}
        className='app-input'
        onChange={(e) => {
          setValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onPressEnter?.(e)
          }
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
      />
    </Element>
  )
})

Input.displayName = 'Input'

export default Input
