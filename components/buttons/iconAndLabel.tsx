import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IconAndLabelProps {
  icon: IconDefinition
  label: string
  navigateTo: string
}

const IconAndLabel: React.FC<IconAndLabelProps> = ({
  icon,
  label,
  navigateTo,
}) => {
  function renderContent() {
    return (
      <h2
        className="btn btn-ghost text-xl"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          fontSize: 15,
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{ width: 20, height: 20, paddingRight: 10 }}
        />
        {label}
      </h2>
    )
  }
  return (
    <div className="text-white">
      {navigateTo.length > 0 ? (
        <Link href={navigateTo}>{renderContent()}</Link>
      ) : (
        <div>{renderContent()}</div>
      )}
    </div>
  )
}

export default IconAndLabel
