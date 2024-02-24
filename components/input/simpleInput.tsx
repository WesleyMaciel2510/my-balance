import React, { ChangeEvent } from 'react'

interface SimpleInputProps {
  label: string
  type: string
  value: string
  action: (value: string) => void
}

const SimpleInput: React.FC<SimpleInputProps> = ({
  label,
  type,
  value,
  action,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    action(e.target.value)
  }

  return (
    <div>
      <h2 className="text-white" style={{ paddingBottom: 10 }}>
        {label}
      </h2>
      <div style={{ paddingBottom: 15 }}>
        <input
          type={type}
          className="pd px-4 py-2 w-2/3 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
          placeholder={value}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SimpleInput
