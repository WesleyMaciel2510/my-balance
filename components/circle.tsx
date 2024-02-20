import React from 'react'

interface CircleColorProps {
  color: string
}

const CircleColor: React.FC<CircleColorProps> = ({ color }) => {
  return (
    <div
      style={{
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: color,
        alignSelf: 'center',
      }}
    />
  )
}

export default CircleColor
