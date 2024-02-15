import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'

interface AccountCardProps {
  type: string
  amount: number
}
const AccountCard: React.FC<AccountCardProps> = ({ type, amount }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div style={{ flex: 1 }}>
      <div
        className="card w-96 glass"
        style={{
          backgroundColor: isHovered ? '#09b531' : '#20f559',
          borderRadius: 12,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-body">
          <h2 className="card-title">{type}</h2>
          <h2 className="card-title"> $ {amount}</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <div style={{ flex: 1, paddingTop: 30 }}>
                <p>444 221 224 ***</p>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ flex: 1, paddingLeft: 120, paddingTop: 10 }}>
                <FontAwesomeIcon
                  icon={faCcMastercard}
                  style={{ width: 50, height: 50 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountCard
