import { forwardRef, Ref, ReactElement } from 'react'
import * as Ark from '@ark-ui/react'
import { useControllableValue } from 'ahooks'
import './style.scss'

interface SliderProps {
  step?: number
  min?: number
  max?: number
  range?: boolean
  disabled?: boolean
  readOnly?: boolean
  value?: number[]
  defaultValue?: number[]
  onChange?: (value: number[]) => void
}

const SliderRange = forwardRef((props: SliderProps, ref: Ref<HTMLDivElement>): ReactElement => {
  const { defaultValue, step = 1, min = 0, max = 100, disabled, readOnly } = props
  const [value, setValue] = useControllableValue(props, {
    defaultValue: defaultValue || [0, 0],
  })

  return (
    <Ark.RangeSlider
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
      <Ark.RangeSliderControl className='app-slider'>
        <Ark.RangeSliderTrack className='app-slider-track'>
          <Ark.RangeSliderRange className='app-slider-range' />
        </Ark.RangeSliderTrack>
        <Ark.RangeSliderThumb index={0} className='app-slider-thumb'></Ark.RangeSliderThumb>
        <Ark.RangeSliderThumb index={1} className='app-slider-thumb'></Ark.RangeSliderThumb>
      </Ark.RangeSliderControl>
      <Ark.RangeSliderMarkerGroup className='app-slider-group'>
        <Ark.RangeSliderMarker value={0}>0</Ark.RangeSliderMarker>
        <Ark.RangeSliderMarker value={25}>25</Ark.RangeSliderMarker>
        <Ark.RangeSliderMarker value={50}>50</Ark.RangeSliderMarker>
        <Ark.RangeSliderMarker value={75}>75</Ark.RangeSliderMarker>
        <Ark.RangeSliderMarker value={100}>100</Ark.RangeSliderMarker>
      </Ark.RangeSliderMarkerGroup>
    </Ark.RangeSlider>
  )
})
SliderRange.displayName = 'Slider'

export default SliderRange
