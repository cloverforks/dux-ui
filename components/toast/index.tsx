import React, { forwardRef, Ref, RefObject } from 'react'
import { createRoot } from 'react-dom/client'
import * as ArkToast from '@ark-ui/react/toast'
import type { Service, Placement, ToastOptions } from '@zag-js/toast'
import { useTranslation } from 'react-i18next'
import './style.scss'
import Button from '../button'
import Icon from '../icon'
import clsx from 'clsx'

type Type = 'success' | 'error' | 'warn' | 'info'

interface ToastRef {
  publish: (params: ToastProps) => void
}

declare global {
  interface Window {
    appToastRef: React.RefObject<ToastRef>
  }
}

interface ToastCreateProps extends ToastOptions {
  mode: Type
  confirm?: () => void
  close?: boolean
}

const ToastComp = forwardRef((_, ref: Ref<ToastRef>) => {
  const toast = ArkToast.useToast()
  React.useImperativeHandle(ref, () => ({
    publish: (params: ToastProps) => {
      let placement = 'top' as Placement
      if (params.mode === 'notice') {
        placement = 'top-end'
      }
      if (params.mode === 'message') {
        placement = 'top'
      }
      toast.create({
        title: params.title,
        description: params.desc,
        placement: placement,
        duration: params.confirm ? 1000 * 60 * 60 : params.duration,
        mode: params.type,
        confirm: params.confirm,
      } as ToastCreateProps)
    },
  }))
  return (
    <ArkToast.ToastPlacements>
      {(placements) =>
        placements.map((placement) => (
          <ArkToast.ToastGroup key={placement} placement={placement}>
            {(toasts) => toasts.map((toast, i) => <ToastItem key={i} toast={toast} />)}
          </ArkToast.ToastGroup>
        ))
      }
    </ArkToast.ToastPlacements>
  )
})
ToastComp.displayName = 'ToastComp'

interface ToastItemProps extends ToastProps {
  toast: Service
}

export const ToastItem = ({ toast }: ToastItemProps) => {
  const { t } = useTranslation('components')

  const statusColors = {
    info: 'app-toast-info',
    success: 'app-toast-success',
    warn: 'app-toast-warn',
    error: 'app-toast-danger',
  }

  const statusIcons = {
    info: 'i-tabler:info-circle-filled',
    success: 'i-tabler:circle-check-filled',
    warn: 'i-tabler:alert-circle-filled',
    error: 'i-tabler:circle-x-filled',
  }

  const context = toast.config.context as unknown as ToastCreateProps

  return (
    <ArkToast.Toast toast={toast} className={clsx(['app-toast', statusColors[context.mode]])}>
      <div className='app-toast-content'>
        <div className='app-toast-icon'>
          <Icon icon={statusIcons[context.mode]} size={22} />
        </div>
        <div className='flex flex-col gap-1'>
          <ArkToast.ToastTitle className='app-toast-title' />
          {context.description && <ArkToast.ToastDescription className='app-toast-desc' />}
        </div>
      </div>
      {context.confirm && (
        <div className='app-toast-confirm'>
          <div className='h-0 flex flex-1'>
            <ArkToast.ToastCloseTrigger
              className='app-toast-button rounded-tr-lg'
              onClick={() => {
                confirm?.()
              }}
            >
              {t('ok')}
            </ArkToast.ToastCloseTrigger>
          </div>
          <div className='h-0 flex flex-1'>
            <ArkToast.ToastCloseTrigger
              className='app-toast-button rounded-br-lg'
              aria-label='Close'
            >
              {t('cancel')}
            </ArkToast.ToastCloseTrigger>
          </div>
        </div>
      )}
      {!context.confirm && context.close && (
        <div className='app-toast-close'>
          <ArkToast.ToastCloseTrigger asChild>
            <Button
              size='sm'
              pill
              type='text'
              icon='i-heroicons-x-mark'
              aria-label='Close'
            ></Button>
          </ArkToast.ToastCloseTrigger>
        </div>
      )}
    </ArkToast.Toast>
  )
}

export interface ToastProps {
  title?: string
  desc?: string
  confirm?: () => void
  duration?: number
  close?: boolean
  mode?: 'notice' | 'message'
  type?: Type
}

export const create = ({
  title,
  desc,
  confirm,
  close,
  duration = 5000,
  mode = 'notice',
  type = 'info',
}: ToastProps) => {
  if (!window.appToastRef) {
    window.appToastRef = React.createRef() as RefObject<ToastRef>
    const div = document.createElement('div')
    document.body.appendChild(div)
    const root = createRoot(div)
    root.render(
      <ArkToast.ToastProvider>
        <ToastComp ref={window.appToastRef} />
      </ArkToast.ToastProvider>
    )
  }
  setTimeout(() => {
    window.appToastRef.current?.publish({
      title: title,
      desc: desc,
      confirm: confirm,
      duration: duration,
      close: close,
      mode: mode,
      type: type,
    })
  }, 30)
  return null
}

const createNotice = (props: ToastProps) => {
  props.mode = 'notice'
  create(props)
}

const createMessage = (props: ToastProps) => {
  props.mode = 'message'
  create(props)
}

const Toast = {
  notice: createNotice,
  message: createMessage,
}

export default Toast
