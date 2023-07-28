import clsx from 'clsx'
import { ReactNode } from 'react'

export default function Title({ title, icon }: { title: ReactNode; icon?: string }) {
  return (
    <div className='mb-4 flex items-center gap-1'>
      {icon && <div className={clsx(['w-4 h-4', icon])}></div>}
      <div className='text-base font-semibold text-black dark:text-gray'>{title}</div>
    </div>
  )
}
