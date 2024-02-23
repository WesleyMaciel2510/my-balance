import React from 'react'
import IconAndLabel from '../buttons/iconAndLabel'
import {
  faHouse,
  faIdCard,
  faChartSimple,
  faMoneyBillTrendUp,
  faGear,
  faCircleHalfStroke,
  faLock,
  faRightFromBracket,
  faUser,
  faRotate,
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
          borderBottomStyle: 'double',
          borderBottomWidth: '3px',
          borderBottomColor: 'white',
          marginTop: 15,
        }}
      />
      <div>
        <IconAndLabel icon={faHouse} label={'Home'} navigateTo={'/dashboard'} />
        <IconAndLabel
          icon={faChartSimple}
          label={'Analytics'}
          navigateTo={'/analytics'}
        />
        <IconAndLabel
          icon={faMoneyBillTrendUp}
          label={'My Investments'}
          navigateTo={'/my-investments'}
        />
        <IconAndLabel
          icon={faIdCard}
          label={'My Accounts'}
          navigateTo={'/my-accounts'}
        />
        <IconAndLabel
          icon={faCircleHalfStroke}
          label={'Dark Theme'}
          navigateTo={''}
        />
        <div
          style={{
            borderStyle: 'double',
            borderBottomWidth: '3px',
            borderBottomColor: 'white',
          }}
        />
        <IconAndLabel icon={faUser} label={'Profile'} navigateTo={'/profile'} />
        <IconAndLabel
          icon={faGear}
          label={'Settings'}
          navigateTo={'/dashboard'}
        />
        <IconAndLabel
          icon={faLock}
          label={'Change\n Password'}
          navigateTo={'/forgot-password'}
        />
        <div style={{ position: 'fixed', bottom: 0, width: '15%' }}>
          <IconAndLabel
            icon={faRightFromBracket}
            label={'Log Out'}
            navigateTo={'/'}
          />
        </div>
      </div>
    </div>
  )
}

export default LeftBar
