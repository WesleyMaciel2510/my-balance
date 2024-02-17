import React from 'react'
import IconAndLabel from './buttons/iconAndLabel'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faHouse,
  faIdCard,
  faChartSimple,
  faMoneyBillTrendUp,
  faGear,
  faCircleHalfStroke,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { useSharedState } from '@/global/sharedStates'
import { useRouter } from 'next/navigation'

const LeftBar = () => {
  const { darktheme, setDarktheme } = useSharedState()
  const router = useRouter()
  return (
    <div
      style={{
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <div style={{ marginTop: 10 }}>
        <h1
          className="text-white"
          style={{
            fontWeight: 'bold',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            textAlign: 'center',
          }}
        >
          My Balance
        </h1>
      </div>
      <div
        style={{
          border: '1px solid white',
          marginTop: 15,
        }}
      />
      <div>
        <IconAndLabel icon={faHouse} label={'Home'} navigateTo={'/dashboard'} />
        <IconAndLabel
          icon={faChartSimple}
          label={'Analytics'}
          navigateTo={'/dashboard'}
        />
        <IconAndLabel
          icon={faMoneyBillTrendUp}
          label={'My Investment'}
          navigateTo={'/dashboard'}
        />
        <IconAndLabel
          icon={faIdCard}
          label={'My Accounts'}
          navigateTo={'/dashboard'}
        />
        <IconAndLabel
          icon={faGear}
          label={'Settings'}
          navigateTo={'/dashboard'}
        />
        <div
          style={{
            border: '1px solid white',
          }}
        />
        <IconAndLabel
          icon={faLock}
          label={'Change\n Password'}
          navigateTo={'/dashboard'}
        />
        <div onClick={() => setDarktheme(!darktheme)}>
          <IconAndLabel
            icon={faCircleHalfStroke}
            label={'Dark Theme'}
            navigateTo={''}
          />
        </div>
      </div>
    </div>
  )
}

export default LeftBar
