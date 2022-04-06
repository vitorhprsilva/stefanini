import React from 'react'

import './styles.css'

type slotEmptyProps = {
  children: React.ReactNode
  color: string
  borderColor: string
}

export const SlotEmpty = ({children, color, borderColor}: slotEmptyProps) => {
  return (
    <div className="avatar" style={{backgroundColor: `${color}`, borderColor: `${borderColor}`}}>
      <div className="avatar__letters">
        {children}
      </div>
  </div>
  )
}