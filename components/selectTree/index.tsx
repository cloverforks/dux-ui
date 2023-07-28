import { forwardRef, Ref } from 'react'
import { useControllableValue } from 'ahooks'
import RCTreeSelect from 'rc-tree-select'
import { Arrow, Clear, ItemClear } from '../select'
import { BaseSelectRef } from 'rc-select'
import '../popover/style.scss'
import '../form/style.scss'
import './style.scss'

interface OptionType {
  value: string | number
  label: string
  children?: OptionType[]
}

type Value = string | number | Array<string | number>

interface SelectTreeProps {
  options: OptionType[]
  multi?: boolean
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  value?: Value
  defaultValue?: Value
  onChange?: (value: Value) => void
}

const SelectTree = forwardRef((props: SelectTreeProps, ref: Ref<BaseSelectRef>) => {
  const { options, multi, placeholder, disabled, loading } = props
  const [value, setValue] = useControllableValue(props)

  return (
    <RCTreeSelect
      ref={ref}
      prefixCls='app-select'
      className='app-form-element'
      treeData={options}
      placeholder={placeholder}
      value={value}
      onChange={(value) => {
        setValue(value)
      }}
      dropdownRender={(el) => {
        return <div className='app-popover'>{el}</div>
      }}
      showCheckedStrategy='SHOW_CHILD'
      suffixIcon={Arrow}
      clearIcon={Clear}
      removeIcon={ItemClear}
      disabled={disabled}
      loading={loading}
      treeCheckable={multi}
      showSearch
      allowClear
    />
  )
})
SelectTree.displayName = 'SelectTree'

export default SelectTree
