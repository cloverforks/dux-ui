import { forwardRef, Ref, ReactElement } from 'react'
import * as Ark from '@ark-ui/react'
import { useControllableValue } from 'ahooks'
import './style.scss'

interface SliderProps {
  defaultValue?: number
  step?: number
  min?: number
  max?: number
  disabled?: boolean
  readOnly?: boolean
  value?: number
  onChange?: (value: number) => void
}

const Slider = forwardRef((props: SliderProps, ref: Ref<HTMLDivElement>): ReactElement => {
  const { defaultValue, step = 1, min = 0, max = 100, disabled = false, readOnly = false } = props
  const [value, setValue] = useControllableValue(props, {
    defaultValue: defaultValue || 0,
  })

  return (
    <Ark.Slider
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      disabled={disabled || readOnly}
      onChange={(details) => {
        setValue(details.value)
      }}
    >
      <Ark.SliderControl className='app-slider'>
        <Ark.SliderTrack className='app-slider-track'>
          <Ark.SliderRange className='app-slider-range' />
        </Ark.SliderTrack>
        <Ark.SliderThumb className='app-slider-thumb'></Ark.SliderThumb>
      </Ark.SliderControl>
      <Ark.SliderMarkerGroup className='app-slider-group'>
        <Ark.SliderMarker value={0}>0</Ark.SliderMarker>
        <Ark.SliderMarker value={25}>25</Ark.SliderMarker>
        <Ark.SliderMarker value={50}>50</Ark.SliderMarker>
        <Ark.SliderMarker value={75}>75</Ark.SliderMarker>
        <Ark.SliderMarker value={100}>100</Ark.SliderMarker>
      </Ark.SliderMarkerGroup>
    </Ark.Slider>
  )
})
Slider.displayName = 'Slider'

export default Slider
