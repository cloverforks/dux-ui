import React, { forwardRef, MouseEvent, ReactNode } from 'react'
import clsx from 'clsx'
import Loading from '../loading'
import Button from '../button'
import './style.scss'
import Icon from '../icon'

export interface BaseElementProps {
  readOnly?: boolean
  disabled?: boolean
  loading?: boolean
  error?: boolean
}

export interface ElementProps extends BaseElementProps {
  className?: string
  clear?: boolean
  before?: ReactNode
  after?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
}

interface ElementPropsT extends ElementProps {
  children?: ReactNode | ReactNode[]
  onClear?: () => void
}

interface ClearProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Clear: React.FC<ClearProps> = ({ onClick }) => {
  return <Button icon='i-tabler:x' pill size='xs' type='text' onClick={onClick}></Button>
}

const Element = forwardRef<HTMLDivElement, ElementPropsT>((props, ref) => {
  const {
    className,
    readOnly,
    disabled,
    loading,
    error,
    before,
    after,
    prefix,
    suffix,
    clear,
    children,
    onClear,
  } = props

  return (
    <div
      className={clsx(['app-form-element', className, error ? 'app-form-element-error' : ''])}
      ref={ref}
    >
      {before && <div className='app-form-element-before'>{before}</div>}
      <div className='app-form-element-warp'>
        {prefix && <div className='app-form-element-prefix'>{prefix}</div>}
        {children}
        {(suffix || clear || readOnly || disabled || error) && (
          <div className='app-form-element-suffix'>
            {clear && !readOnly && !disabled && (
              <Clear
                onClick={() => {
                  onClear?.()
                }}
              />
            )}
            {error && (
              <Icon icon='i-tabler:alert-circle-filled' size={16} className='text-danger' />
            )}
            {loading && <Loading color='primary' size={16} />}
            {suffix && !loading && !error && suffix}
          </div>
        )}
      </div>
      {after && <div className='app-form-element-after'>{after}</div>}
    </div>
  )
})

Element.displayName = 'Input'

export { Element }
