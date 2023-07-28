import React, { Ref, forwardRef } from 'react'
import { useControllableValue } from 'ahooks'
import * as Ark from '@ark-ui/react'
import clsx from 'clsx'
import './style.scss'

interface SegmentProps {
  className?: string
  defaultValue?: string | null
  value?: string | null
  children?: React.ReactNode
  onChange?: (value: string) => void
}

interface SegmentItemProps {
  label?: string
  value: string
}

const SegmentComp = ({ className, children, ...props }: SegmentProps, ref: Ref<HTMLDivElement>) => {
  const [value, setValue] = useControllableValue(props, {
    defaultValue: '0',
  })

  return (
    <Ark.SegmentGroup
      ref={ref}
      value={value}
      onChange={(v) => {
        setValue(v.value || '')
      }}
      className={clsx(['app-segment', className])}
    >
      <Ark.SegmentIndicator className='app-segment-indicator' />
      {children}
    </Ark.SegmentGroup>
  )
}

const SegmentItem = ({ value = '', label }: SegmentItemProps) => {
  return (
    <Ark.Segment value={value} className='app-segment-item'>
      <Ark.SegmentLabel>{label}</Ark.SegmentLabel>
      <Ark.SegmentInput />
      <Ark.SegmentControl />
    </Ark.Segment>
  )
}
SegmentItem.displayName = 'SegmentItem'

const Segment = forwardRef(SegmentComp) as React.ForwardRefExoticComponent<
  SegmentProps & React.RefAttributes<HTMLDivElement>
> & {
  Item: typeof SegmentItem
}

Segment.Item = SegmentItem

export default Segment
