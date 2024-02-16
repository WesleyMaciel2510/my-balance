import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faIdCard } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

interface IconAndLabelProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon: IconProp
  label?: string
}

const IconAndLabel: React.FC<IconAndLabelProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <div className="text-white">
      <a
        className="btn btn-ghost text-xl"
        style={{ display: 'flex', justifyContent: 'flex-start', fontSize: 15 }}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ width: 20, height: 20, paddingRight: 10 }}
        />
        {label}
      </a>
    </div>
  )
}

export default IconAndLabel
