'use client'
import LeftBar from '@/components/bars/leftbar'
import NavBar from '@/components/bars/navbar'
import React from 'react'

const Analytics = () => {
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
        <div className="drawer-content flex flex-col items-center justify-center bg-primary"></div>
      </div>
    </div>
  )
}

export default Analytics
