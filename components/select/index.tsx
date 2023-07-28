import React, { forwardRef, useState, useEffect, useMemo, ReactNode, Ref } from 'react'
import RCSelect, { BaseSelectRef } from 'rc-select'
import { useControllableValue } from 'ahooks'
import Button from '../button'
import MediaText from '../mediaText'
import Empty from '../empty'
import Loading from '../loading'
import '../popover/style.scss'
import '../form/style.scss'
import './style.scss'

interface SelectProps {
  defaultValue?: any
  type?: 'default' | 'multi' | 'tags'
  placeholder?: string
  tagsCount?: number
  tagsLimit?: number
  disabled?: boolean
  loading?: boolean
  value?: any
  onBlur?: () => void
  onChange?: (value: any) => void
  onSearch?: (value: any) => void
  options?: OptionProps[]
  children?: React.ReactNode
}

interface TOptionProps {
  value?: any
  children?: React.ReactNode
  label?: React.ReactNode
  desc?: React.ReactNode
  image?: string
}
interface TGroupProps {
  label?: React.ReactNode
  options?: OptionProps[]
  children?: React.ReactNode
}
interface OptionProps extends TOptionProps {
  options?: OptionProps[]
}

interface FormatOptionProps extends OptionProps {
  render?: React.ReactNode
}

export const ItemClear = () => {
  return <Button icon='i-tabler:x' pill size='xs' type='text' color='primary'></Button>
}

export const Clear = () => {
  return <Button icon='i-tabler:x' pill size='xs' type='text'></Button>
}

export const Arrow = (props: { loading?: boolean }) => {
  return !props.loading ? (
    <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
      <path
        fillRule='evenodd'
        d='M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z'
        clipRule='evenodd'
      ></path>
    </svg>
  ) : (
    <Loading size={16} />
  )
}

const ItemIcon = <div className='i-heroicons:check h-4 w-4'></div>

const OptionRender = (props: OptionProps) => {
  return (
    <MediaText size='sm'>
      <MediaText.Title>{props?.label}</MediaText.Title>
      {props?.image && <MediaText.Image src={props.image} height={30} width={30} circle />}
      {props?.desc && <MediaText.Desc>{props.desc}</MediaText.Desc>}
    </MediaText>
  )
}

const MultiRender = (props: OptionProps) => {
  return (
    <>
      {props?.image && <MediaText.Image src={props.image} height={20} width={20} circle />}
      <div>{props?.label}</div>
    </>
  )
}

type mode = 'multiple' | 'tags' | undefined

const SelectComp = forwardRef((props: SelectProps, ref: Ref<BaseSelectRef>) => {
  const {
    type = 'default',
    placeholder,
    tagsCount,
    tagsLimit,
    disabled,
    loading,
    onBlur,
    onChange,
    onSearch,
    children,
  } = props

  const types = {
    default: undefined,
    tags: 'tags',
    multi: 'multiple',
  }

  const [value, setValue] = useControllableValue(props)
  const [options, setOptions] = useState<OptionProps[]>([])

  useEffect(() => {
    const childrenOptions = (children: ReactNode) => {
      const data: OptionProps[] = props?.options || []
      React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return
        }
        if ((child.type as React.FunctionComponent).displayName === 'SelectOption') {
          const Item: OptionProps = {
            value: child.props?.value,
            label: child.props?.children,
            desc: child.props?.desc,
            image: child.props?.image,
          }
          data.push(Item as OptionProps)
        }
        if ((child.type as React.FunctionComponent).displayName === 'SelectGroup') {
          const Item = {
            label: child.props?.label,
            options: child.props?.children ? childrenOptions(child.props?.children) : [],
          }
          data.push(Item as OptionProps)
        }
      })
      return data
    }
    setOptions(childrenOptions(children))
  }, [children])

  const formatOptions = useMemo(() => {
    const formatItems = (options: OptionProps[]) => {
      const data: FormatOptionProps[] = []
      options.map((item: OptionProps) => {
        if (item?.options) {
          const Item = {
            label: item?.label,
            options: formatItems(item.options),
          }
          data.push(Item as FormatOptionProps)
        } else {
          const Item = {
            value: item?.value,
            desc: item?.desc,
            image: item?.image,
            label: <OptionRender {...item} />,
            render: type !== 'default' ? <MultiRender {...item} /> : <OptionRender {...item} />,
          }
          data.push(Item as FormatOptionProps)
        }
      })
      return data
    }
    return formatItems(options)
  }, [options])

  const getValue = useMemo(() => {
    if (Array.isArray(value)) {
      const filteredOptions = options.filter((option) => value.includes(option.value))
      return filteredOptions.length > 0 ? filteredOptions.map((option) => option.value) : undefined
    } else {
      const matchedOption = options.find((option) => option.value === value)
      return matchedOption !== undefined ? matchedOption.value : undefined
    }
  }, [value, options])

  return (
    <div>
      <RCSelect
        ref={ref}
        prefixCls='app-select'
        className='app-form-element'
        dropdownRender={(el) => {
          return <div className='app-popover'>{el}</div>
        }}
        placeholder={placeholder}
        options={formatOptions}
        value={getValue}
        suffixIcon={Arrow}
        showSearch
        allowClear
        disabled={disabled}
        loading={loading}
        mode={types[type] as mode}
        tokenSeparators={[' ', ',', '\n']}
        optionLabelProp='render'
        menuItemSelectedIcon={ItemIcon}
        clearIcon={Clear}
        removeIcon={ItemClear}
        maxTagCount={tagsCount}
        maxTagTextLength={tagsLimit}
        notFoundContent={<Empty desc='Not Found' />}
        onChange={(v) => {
          setValue(v)
          onChange?.(v)
        }}
        onSearch={onSearch}
        onBlur={onBlur}
      ></RCSelect>
    </div>
  )
})

SelectComp.displayName = 'Select'

const SelectOption = () => {
  return null
}
SelectOption.displayName = 'SelectOption'

const SelectGroup = () => {
  return null
}
SelectGroup.displayName = 'SelectGroup'

const Select = SelectComp as React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<BaseSelectRef>
> & {
  Option: React.FC<TOptionProps>
  Group: React.FC<TGroupProps>
}

Select.Option = SelectOption
Select.Group = SelectGroup

export default Select
