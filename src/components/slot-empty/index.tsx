import React from 'react'

import './styles.css'

type slotEmptyProps = {
  children: React.ReactNode
  color: string
  borderColor: string
  onPress: () => void
  style?: React.CSSProperties
}

export const SlotEmpty = ({children, color, borderColor, onPress, style}: slotEmptyProps) => {
  return (
    <button onClick={onPress} className="slot" style={{backgroundColor: `${color}`, borderColor: `${borderColor}`, ...style}}>
      <div className="avatar__slot">
        {children}
      </div>
    </button>
  )
}