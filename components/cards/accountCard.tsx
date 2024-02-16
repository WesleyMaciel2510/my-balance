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
    <div style={{ flex: 1, padding: 20 }}>
      <div
        className="card w-96 glass"
        style={{
          backgroundColor: isHovered ? '#07508f' : '#337ab7',
          borderRadius: 12,
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
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
