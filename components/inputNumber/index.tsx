import { forwardRef, KeyboardEventHandler, InputHTMLAttributes, Ref } from 'react'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputField,
  NumberInputIncrementTrigger,
  NumberInputProps,
} from '@ark-ui/react'
import { useControllableValue } from 'ahooks'
import { Element, ElementProps } from '../form/element'
import Button from '../button'
import '../form/style.scss'
import '../input/style.scss'
import './style.scss'

type value = InputHTMLAttributes<HTMLInputElement>['value']
interface InputNumberProps extends ElementProps {
  defaultValue?: value
  value?: value
  placeholder?: string
  min?: number
  max?: number
  step?: number
  precision?: number
  onFocus?: NumberInputProps['onFocus']
  onBlur?: NumberInputProps['onBlur']
  onChange?: (value: number) => void
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>
}

const InputNumber = forwardRef((props: InputNumberProps, ref: Ref<HTMLDivElement>) => {
  const { placeholder, readOnly, disabled, min, max, step = 1, precision, onFocus, onBlur } = props

  const [value, setValue] = useControllableValue(props)

  return (
    <NumberInput
      min={min}
      max={max}
      step={step}
      minFractionDigits={precision}
      maxFractionDigits={precision}
      onChange={(datails) => {
        setValue(datails.valueAsNumber)
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value && String(value)}
      readOnly={readOnly}
      disabled={disabled}
      className='app-input-number'
      ref={ref}
    >
      <Element
        suffix={
          <NumberInputControl className='app-input-number-control'>
            <NumberInputDecrementTrigger className='app-input-number-dec' asChild>
              <Button icon='i-tabler:minus' type='text' size='xs' pill />
            </NumberInputDecrementTrigger>
            <NumberInputIncrementTrigger className='app-input-number-inc' asChild>
              <Button icon='i-tabler:plus' type='text' size='xs' pill />
            </NumberInputIncrementTrigger>
          </NumberInputControl>
        }
      >
        <NumberInputField className='app-input-number-field' placeholder={placeholder} />
      </Element>
    </NumberInput>
  )
})

InputNumber.displayName = 'InputNumber'

export default InputNumber
