import { forwardRef, MouseEventHandler } from 'react'
import './style.scss'

interface LinkProps {
  href?: string
  target?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  children?: React.ReactNode
}

const Link = (
  { href, target, onClick, children }: LinkProps,
  ref: React.Ref<HTMLAnchorElement>
) => {
  return (
    <a className='app-link' ref={ref} onClick={onClick} href={href} target={target} tabIndex={0}>
      {children}
    </a>
  )
}

export default forwardRef(Link)
