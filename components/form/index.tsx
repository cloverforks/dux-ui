import { createContext, ReactNode, cloneElement, isValidElement, useContext } from 'react'
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
  FieldValues,
  UseFormHandleSubmit,
  UseFormWatch,
} from 'react-hook-form'

interface ContextProps {
  disabled?: boolean
}

const context = createContext<ContextProps>({ disabled: false })

interface FormProps {
  disabled?: boolean
  defaultValues?: FieldValues
  values?: FieldValues
  children?: ((watch: UseFormWatch<FieldValues>) => ReactNode) | ReactNode
  onSubmit?: (values: FieldValues) => void
}

const Form = ({
  values,
  defaultValues,
  disabled,
  children,
  ...props
}: FormProps & {
  Item: FormItemProps
  Action: FormActionProps
}) => {
  const methods = useForm({
    values: values,
    defaultValues: defaultValues,
    //shouldUnregister: false, // Add this line if you don't want to unregister fields on unmount
  })

  const handleSubmit = methods.handleSubmit((data) => {
    console.log('submit', data)
    props?.onSubmit?.(data)
  })

  const isFunctionChild = typeof children === 'function'

  return (
    <context.Provider value={{ disabled: disabled }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {isFunctionChild ? children(methods.watch) : children}
        </form>
      </FormProvider>
    </context.Provider>
  )
}
Form.displayName = 'Form'

interface FormItemProps {
  field?: string
  name?: ReactNode
  defaultValue?: unknown
  required?: boolean
  disabled?: boolean
  children?: ReactNode
}

const FormItem = ({
  field = '',
  name = '',
  defaultValue,
  required,
  disabled,
  children,
}: FormItemProps) => {
  const { control, formState } = useFormContext()

  const formContext = useContext(context)

  if (!isValidElement(children)) {
    return null
  }

  return (
    <Controller
      name={field}
      control={control}
      rules={{
        required: !!required,
      }}
      defaultValue={defaultValue}
      render={(item) => (
        <div className='flex flex-col gap-2'>
          <div className='relative flex text-sm font-semibold'>
            {required && <div className='absolute top-0.5 align-base text-danger -left-3'>*</div>}
            {name}
          </div>
          <div>
            {cloneElement(children, {
              ...item.field,
              disabled: disabled || formState.isSubmitting || formContext.disabled,
              error: !!formState.errors[field],
            } as {
              [key: string]: unknown
            })}
          </div>
        </div>
      )}
    />
  )
}
FormItem.displayName = 'FormItem'
Form.Item = FormItem

interface FormActionProps {
  children: ({
    handleSubmit,
    reset,
  }: {
    handleSubmit: UseFormHandleSubmit<FieldValues>
    reset: () => void
  }) => ReactNode
}

const FormAction = ({ children }: FormActionProps) => {
  const { handleSubmit, reset } = useFormContext()
  return children?.({ handleSubmit, reset })
}
FormAction.displayName = 'FormAction'
Form.Action = FormAction

export default Form
