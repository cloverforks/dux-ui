import { Ref, forwardRef, useMemo } from 'react'
import { useControllableValue } from 'ahooks'
import dayjs, { Dayjs } from 'dayjs'
import dayjsConfig from 'rc-picker/lib/generate/dayjs'
import Picker, { RangePicker } from 'rc-picker'
import zh_CN from 'rc-picker/lib/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import './style.scss'
import '../form/style.scss'
import clsx from 'clsx'

export type pickerType = 'date' | 'month' | 'year' | 'time'
export type dateType = 'date' | 'month' | 'year' | 'time' | 'datetime'
export interface DatePickerProps {
  placeholder?: string | [string, string]
  type?: dateType
  range?: boolean
  format?: string
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
  defaultValue?: string | [string, string]
  value?: string | [string, string]
  onChange?: (value: string | [string, string]) => void
}

interface IconProps {
  type?: dateType
}

const Icon = ({ type }: IconProps) => {
  if (type === 'time') {
    return <div className='i-tabler:clock h-4 w-4'></div>
  } else {
    return <div className='i-tabler:calendar h-4 w-4'></div>
  }
}

const DatePicker = forwardRef((props: DatePickerProps, ref: Ref<HTMLDivElement>) => {
  const {
    placeholder,
    range,
    format,
    type = 'date',
    disabled = false,
    readOnly = false,
    error,
  } = props
  const [value, setValue] = useControllableValue(props)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formats = {
    date: 'YYYY-MM-DD',
    month: 'YYYY-MM',
    year: 'YYYY',
    time: 'HH:mm:ss',
    datetime: 'YYYY-MM-DD HH:mm:ss',
  }

  const pickers = {
    date: 'date',
    month: 'month',
    year: 'year',
    time: 'time',
    datetime: 'date',
  }

  const getValue = useMemo(() => {
    if (!value) {
      return null
    }

    if (Array.isArray(value)) {
      return value.map((v) => dayjs(v, format || formats[type]))
    }

    return dayjs(value, format || formats[type])
  }, [value, format, type, formats])

  const params = {
    allowClear: true,
    prefixCls: 'app-picker',
    generateConfig: dayjsConfig,
    locale: zh_CN,
    picker: pickers[type] as pickerType,
    showTime: type === 'datetime',
    suffixIcon: <Icon type={type} />,
    prevIcon: <div className='i-heroicons:chevron-left h-3 w-3'></div>,
    superPrevIcon: <div className='i-heroicons:chevron-double-left h-3 w-3'></div>,
    nextIcon: <div className='i-heroicons:chevron-right h-3 w-3'></div>,
    superNextIcon: <div className='i-heroicons:chevron-double-right h-3 w-3'></div>,
    format: format || formats[type],
    placeholder: placeholder,
    disabled: disabled,
    inputReadOnly: readOnly,
  }

  return (
    <div className={clsx(['app-form-element', error ? 'app-form-element-error' : ''])} ref={ref}>
      {range ? (
        <RangePicker<Dayjs>
          {...params}
          onChange={(_, dateString: [string, string]) => {
            setValue(dateString)
          }}
          value={getValue as [Dayjs, Dayjs]}
          placeholder={placeholder as [string, string]}
        ></RangePicker>
      ) : (
        <Picker<Dayjs>
          {...params}
          onChange={(_, dateString: string) => {
            setValue(dateString)
          }}
          showNow
          showToday
          value={getValue as Dayjs}
          placeholder={placeholder as string}
        />
      )}
    </div>
  )
})
DatePicker.displayName = 'DatePicker'

export default DatePicker
