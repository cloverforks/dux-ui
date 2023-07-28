import { forwardRef, Ref } from 'react'
import RCascader from 'rc-cascader'
import { Arrow, Clear, ItemClear } from '../select'
import { useControllableValue } from 'ahooks'
import { BaseSelectRef } from 'rc-select'
import '../form/style.scss'
import './style.scss'

interface OptionType {
  value: string | number
  label: string
  children?: OptionType[]
}

interface CascaderProps {
  options: OptionType[]
  multi?: boolean
  placeholder?: string
  leaf?: boolean
  disabled?: boolean
  loading?: boolean
  value?: string | number | Array<string | number>
  defaultValue?: string | number | Array<string | number>
  onChange?: (value: string | number | Array<string | number>) => void
}

const Cascader = forwardRef((props: CascaderProps, ref: Ref<BaseSelectRef>) => {
  const { options, multi, placeholder, leaf, disabled, loading } = props
  const [value, setValue] = useControllableValue(props)

  return (
    <RCascader
      ref={ref}
      prefixCls='app-cascader'
      className='app-form-element'
      options={options}
      checkable={multi}
      displayRender={(labels) => labels.join(' / ')}
      showCheckedStrategy='SHOW_CHILD'
      changeOnSelect={leaf}
      expandIcon={<div className='i-heroicons:chevron-right h-3 w-3'></div>}
      placeholder={placeholder}
      value={value}
      suffixIcon={Arrow}
      onChange={(value) => {
        setValue(value)
      }}
      removeIcon={ItemClear}
      clearIcon={Clear}
      disabled={disabled}
      loading={loading}
      allowClear
      showSearch
    />
  )
})
Cascader.displayName = 'Cascader'

export default Cascader
