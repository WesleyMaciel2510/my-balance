'use client'
import LeftBar from '@/components/bars/leftbar'
import LottieView from '@/components/lottieView'
import NavBar from '@/components/bars/navbar'
import React from 'react'
import MobileMockup from '@/components/mobileMockup'

const OpenFinance = () => {
  const animationData = require('../../assets/world.json')

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
          className="title-text"
          style={{
            alignSelf: 'flex-end',
            paddingTop: 10,
            paddingRight: 50,
          }}
        >
          <h2
            style={{
              paddingBottom: 10,
              whiteSpace: 'pre-line',
              textAlign: 'center',
            }}
          >
            Check Out{'\n'} Our New App
          </h2>
          <MobileMockup />
        </div>
      </div>
    </div>
  )
}

export default OpenFinance
