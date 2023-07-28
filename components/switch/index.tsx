import { clsx } from 'clsx'
import { forwardRef, Ref, ReactElement } from 'react'
import { useControllableValue } from 'ahooks'
import * as Ark from '@ark-ui/react'
import Loading from '../loading'
import './style.scss'

interface SwitchProps {
  defaultValue?: boolean
  disabled?: boolean
  readOnly?: boolean
  loading?: boolean
  value?: boolean
  onChange?: (value: boolean) => void
}

const Switch = forwardRef((props: SwitchProps, ref: Ref<HTMLLabelElement>): ReactElement => {
  const { disabled, readOnly, loading } = props
  const [value, setValue] = useControllableValue(props)

  return (
    <Ark.Switch
      ref={ref}
      checked={value}
      disabled={disabled || readOnly}
      onChange={(details) => {
        setValue(details.checked)
      }}
      className={clsx(['app-switch'])}
    >
      <Ark.SwitchInput />
      <Ark.SwitchControl>
        <Ark.SwitchThumb className='app-switch-checked'>
          {loading && <Loading size={12} />}
        </Ark.SwitchThumb>
      </Ark.SwitchControl>
    </Ark.Switch>
  )
})

Switch.displayName = 'Switch'

export default Switch
