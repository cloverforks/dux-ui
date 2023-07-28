import React, { forwardRef, ReactNode } from 'react'
import * as Ark from '@ark-ui/react'
import clsx from 'clsx'
import './style.scss'
import { useControllableValue } from 'ahooks'

interface RadioGroupProps {
  children?: ReactNode
  value?: number | string
  defaultValue?: number | string
  readOnly?: boolean
  disabled?: boolean
  extend?: boolean | 'fill'
  direction?: 'horizontal' | 'vertical'
  onChange?: (value: string) => void
}

const RadioGroup = forwardRef(
  (
    {
      children,
      extend,
      readOnly = false,
      disabled = false,
      direction = 'horizontal',
      defaultValue = 0,
      ...props
    }: RadioGroupProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [value, setValue] = useControllableValue(props, {
      defaultValue: String(defaultValue),
    })
    return (
      <Ark.RadioGroup
        ref={ref}
        className={clsx([
          'app-radio-group',
          direction === 'horizontal' ? 'app-radio-group-horizontal' : '',
          direction === 'vertical' ? 'app-radio-group-vertical' : '',
          extend === true ? 'app-radio-group-extend' : '',
          extend === 'fill' ? 'app-radio-group-extend app-radio-group-fill' : '',
        ])}
        disabled={disabled || readOnly}
        value={String(value)}
        onChange={(details) => {
          setValue(details.value)
        }}
      >
        {children}
      </Ark.RadioGroup>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
