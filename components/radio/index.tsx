import { ReactNode } from 'react'
import * as Ark from '@ark-ui/react'
import './style.scss'
import RedioGrop from './group'

interface RadioProps {
  value: number | string
  desc?: ReactNode
  extra?: ReactNode
  children?: ReactNode
}

const Radio = ({ value, desc, extra, children }: RadioProps) => (
  <Ark.Radio className='app-radio-warp' value={String(value)}>
    <Ark.RadioInput></Ark.RadioInput>
    <Ark.RadioControl className='app-radio' />
    <Ark.RadioLabel className='app-radio-inner'>
      <div className='app-radio-extra'>{extra}</div>
      <div className='app-radio-content'>
        <div className='app-radio-label'>{children}</div>
        {desc && <div className='app-radio-desc'>{desc}</div>}
      </div>
    </Ark.RadioLabel>
  </Ark.Radio>
)

Radio.Group = RedioGrop

export default Radio
