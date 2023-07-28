import React from 'react'
import './style.scss'

const Arrow: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='6'
      viewBox='0 0 100 100'
      className='app-arrow'
      preserveAspectRatio='none'
    >
      <polyline points='4,4 50,96 96,4' className='app-arrow-border' strokeWidth='10' />
    </svg>
  )
}

export default Arrow
