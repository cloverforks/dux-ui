import React, {
  forwardRef,
  useCallback,
  useContext,
  createContext,
  useState,
  ReactNode,
  Ref,
  ReactElement,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import clsx from 'clsx'
import './style.scss'
import Button, { Color } from '../button'
import { motion, AnimatePresence } from 'framer-motion'

interface ContextProps {
  close: () => void
}

const context = createContext<ContextProps>({ close: () => void 0 })

interface AlertProps {
  title?: string
  type?: 'info' | 'success' | 'warn' | 'danger'
  close?: boolean | ReactNode
  onClose?: () => void
  footer?: string | ReactNode
  children?: ReactNode
}

const AlertComp = (props: AlertProps, ref: Ref<ContextProps>) => {
  const { title, type = 'info', close = false, onClose, footer, children } = props
  const [open, setOpen] = useState(true)

  const closeColors: {
    [key in 'info' | 'success' | 'warn' | 'danger']: Color
  } = {
    info: 'primary',
    success: 'success',
    warn: 'warn',
    danger: 'danger',
  }

  const alertColors = {
    info: 'app-alert-info',
    success: 'app-alert-success',
    warn: 'app-alert-warn',
    danger: 'app-alert-danger',
  }

  const alertIcons = {
    info: 'i-tabler:info-circle-filled',
    success: 'i-tabler:circle-check-filled',
    warn: 'i-tabler:alert-triangle-filled',
    danger: 'i-tabler:circle-check-filled',
  }

  const closeFun = useCallback(() => {
    onClose?.()
    setOpen(false)
  }, [])

  React.useImperativeHandle(ref, () => ({
    close: () => closeFun(),
  }))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          transition={{
            duration: 0.2,
          }}
          initial={{
            opacity: 0,
            height: 0,
            translateY: -20,
          }}
          animate={{
            opacity: 1,
            height: 'auto',
            translateY: 0,
          }}
          exit={{
            opacity: 0,
            height: 0,
            translateY: -20,
          }}
        >
          <div className={clsx(['app-alert', alertColors[type]])}>
            <div className={clsx(['h-5 w-5 flex', alertIcons[type]])}></div>
            <context.Provider value={{ close: closeFun }}>
              <div className='app-alert-body'>
                {title && <div className='app-alert-title'>{title}</div>}
                <div className='app-alert-content'>{children}</div>
                {footer && <div className='mt-2'>{footer}</div>}
              </div>
            </context.Provider>
            {close && (
              <div className='app-alert-close'>
                {typeof close === 'boolean' ? (
                  <Button
                    pill
                    size='sm'
                    type='text'
                    color={closeColors[type]}
                    icon='i-tabler:x'
                    onClick={() => closeFun()}
                    aria-label='Close'
                  ></Button>
                ) : (
                  close
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface AlertCloseProps {
  children: ReactElement
}

const AlertClose: React.FC<AlertCloseProps> = ({ children }) => {
  const alertContext = useContext(context)
  return React.cloneElement(children, {
    onClick: () => {
      alertContext.close()
    },
  })
}
AlertClose.displayName = 'Alert.Close'

interface AlertType extends ForwardRefExoticComponent<AlertProps & RefAttributes<ContextProps>> {
  Close: React.FC<AlertCloseProps>
  useContext: () => ContextProps
}

const Alert = forwardRef(AlertComp) as AlertType
Alert.Close = AlertClose

Alert.useContext = () => useContext(context)

export default Alert
