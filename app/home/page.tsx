'use client'
import NavBar from '../../components/bars/navbar'
import LeftBar from '../../components/bars/leftbar'
import { useSharedState } from '@/global/sharedStates'
import InfoText from '@/components/bars/infoTextBar'
import HomeCard from '@/components/cards/homeCard'
import LottieView from '@/components/lottieView'
import Link from 'next/link'

const HomePage = () => {
  const { name, accounts } = useSharedState()
  const animationData = require('../../assets/home.json')
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
            paddingTop: 15,
            paddingLeft: 50,
          }}
        >
          <div
            className="hero bg-base-300"
            style={{
              height: '50vh',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginBottom: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 0,
            }}
          >
            <div
              className="hero-content flex-col lg:flex-row"
              style={{
                alignItems: 'flex-start',
              }}
            >
              <Link href="/analytics">
                <div style={{ alignItems: 'flex-start' }}>
                  <LottieView
                    animationData={animationData}
                    loopingActive={true}
                    height={300}
                    width={180}
                  />
                </div>
              </Link>

              <div
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}
              >
                <h1 className="text-5xl font-bold text-primary mt-10">
                  Hello, {firstName}!
                </h1>
                <p className="py-6" style={{ maxWidth: '100vh' }}>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <Link className="btn btn-primary" href="/my-accounts">
                  Get Started
                </Link>
              </div>
              <div
                className="stats stats-vertical shadow"
                style={{ alignSelf: 'flex-start' }}
              >
                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>
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
