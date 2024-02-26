'use client'
import NavBar from '../../components/bars/navbar'
import LeftBar from '../../components/bars/leftbar'
import { useSharedState } from '@/global/sharedStates'
import InfoText from '@/components/bars/infoTextBar'
import HomeCard from '@/components/cards/homeCard'

const HomePage = () => {
  const { name, accounts } = useSharedState()
  const nameParts = name.split(' ')
  const firstName = nameParts[0]
  return (
    <div style={{ display: 'flex' }}>
      {/* LEFT  */}
      <div
        style={{
          backgroundColor: '#337ab7',
          minHeight: '100vh',
          boxShadow: '0px 0apx 7px 1px rgba(0,0,0,0.75)',
        }}
      >
        <LeftBar />
      </div>
      {/* RIGHT */}
      <div
        className="primary"
        style={{
          flex: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
        <div
          style={{
            flex: 1,
            paddingTop: 30,
            paddingLeft: 50,
          }}
        >
          <h2 className="title-text text-primary">Hello, {firstName}!</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <HomeCard index={0} />
            </div>
            <div style={{ flex: 1 }}>
              <HomeCard index={1} />
            </div>
          </div>
          <InfoText />
        </div>
      </div>
    </div>
  )
}

export default HomePage
