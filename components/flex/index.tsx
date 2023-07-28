import clsx from 'clsx'
import React from 'react'

interface FlexProps {
  className?: string
  children?: React.ReactNode
}

const Flex = ({ children, className }: FlexProps) => {
  return <div className={clsx(['flex flex-row flex-wrap gap-4', className])}>{children}</div>
}

export default Flex
