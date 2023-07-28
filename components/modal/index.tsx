import React, {
  createContext,
  forwardRef,
  lazy,
  Suspense,
  useContext,
  useCallback,
  useImperativeHandle,
  FC,
  ReactNode,
  Ref,
  ReactElement,
} from 'react'
import clsx from 'clsx'
import { createRoot } from 'react-dom/client'
import {
  Dialog,
  DialogBackdrop,
  DialogContainer,
  DialogContent,
  DialogDescription,
  //DialogPresence,
  DialogTitle,
  Portal,
} from '@ark-ui/react'
import './style.scss'
import Button from '../button'
import { useControllableValue } from 'ahooks'

interface ContextProps {
  onClose?: () => void
}

const context = createContext<ContextProps>({})

interface ModalProps {
  title?: string
  desc?: string
  trigger?: ReactElement<TriggerProps>
  children?: ReactNode | ((onClose: () => void) => ReactNode)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: () => Promise<{ default: FC<any> }>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentProps?: { [key: string]: any }
  className?: string
  width?: number
  defaultOpen?: boolean
  open?: boolean
  onClose?: () => void
}

interface TriggerProps {
  onClick: () => void
}

const ModalComp = (props: ModalProps, ref: Ref<ContextProps>) => {
  const {
    title,
    desc,
    trigger,
    children,
    component,
    componentProps,
    className,
    width = 500,
    defaultOpen = false,
    onClose,
  } = props
  const AsyncContent = component ? lazy(component) : undefined
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    defaultValuePropName: 'defaultOpen',
    defaultValue: defaultOpen,
  })

  const onCloseFun = useCallback(() => {
    setOpen(false)
    onClose?.()
  }, [onClose, setOpen])

  useImperativeHandle(ref, () => ({
    onClose: onCloseFun,
  }))

  return (
    <>
      {React.isValidElement(trigger) &&
        React.cloneElement(trigger, {
          onClick: () => {
            setOpen(true)
          },
        })}
      <Dialog open={open} onClose={() => setOpen(false)} modal={true} trapFocus={true}>
        <context.Provider value={{ onClose: onCloseFun }}>
          <Portal>
            <DialogBackdrop className='app-modal-backdrop' />
            <DialogContainer className='app-modal-container'>
              <DialogContent
                className={clsx(['app-modal-content', className])}
                style={{
                  width: width,
                }}
              >
                <div className='app-modal-decoration'>
                  <div className='app-modal-decoration-1'></div>

                  <div className='app-modal-decoration-2'></div>
                </div>
                <div className='app-modal-header'>
                  <div className='flex items-center gap-2'>
                    <DialogTitle className='app-modal-title'>{title}</DialogTitle>
                  </div>
                  {desc && <DialogDescription className='app-modal-desc'>{desc}</DialogDescription>}
                </div>
                <div className='app-modal-body'>
                  {component ? (
                    <Suspense>
                      {AsyncContent && <AsyncContent {...componentProps} onClose={onCloseFun} />}
                    </Suspense>
                  ) : typeof children === 'function' ? (
                    children(onCloseFun)
                  ) : (
                    children
                  )}
                </div>
                <div className='app-modal-close'>
                  <Button
                    size='sm'
                    pill
                    type='text'
                    icon='i-tabler:x'
                    onClick={() => onCloseFun()}
                    aria-label='Close'
                  ></Button>
                </div>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </context.Provider>
      </Dialog>
    </>
  )
}
interface ModalFooterProps {
  children?: ReactNode
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className='app-modal-footer'>{children}</div>
}

const openModal: (props: ModalProps) => void = (props) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const root = createRoot(div)
  root.render(
    <Modal
      {...props}
      defaultOpen={true}
      onClose={() => {
        document.body.removeChild(div)
        props?.onClose?.()
      }}
    />
  )
}

interface ModalType
  extends React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<ContextProps>> {
  Footer: typeof ModalFooter
  create: typeof openModal
  useContext: () => ContextProps
}

const Modal = forwardRef(ModalComp) as ModalType

Modal.Footer = ModalFooter
Modal.useContext = () => useContext(context)
Modal.create = openModal

export default Modal
