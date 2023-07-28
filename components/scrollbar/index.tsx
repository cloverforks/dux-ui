import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/overlayscrollbars.css'

interface ScrollbarProps {
  children: React.ReactNode
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children }) => {
  return (
    <OverlayScrollbarsComponent
      options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 300 } }}
      defer
    >
      {children}
    </OverlayScrollbarsComponent>
  )
}

export default Scrollbar
