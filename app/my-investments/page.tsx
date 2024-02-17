'use client'
import LeftBar from '@/components/leftbar'
import NavBar from '@/components/navbar'
import { useSharedState } from '@/global/sharedStates'
import React from 'react'

const MyInvestments = () => {
  const { accounts, setAccounts, darktheme, setDarktheme } = useSharedState()

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
        style={{
          flex: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
        <div
          className="drawer-content flex flex-col items-center justify-center"
          style={{ backgroundColor: darktheme ? 'white' : 'black' }}
        ></div>
      </div>
    </div>
  )
}

export default MyInvestments
