'use client'
import LeftBar from '@/components/leftbar'
import NavBar from '@/components/navbar'
import AccountCard from '../../components/cards/accountCard'
import { useSharedState } from '@/global/sharedStates'
import React, { useEffect, useState } from 'react'
import ColumnGraph from '@/components/columnGraph'

const Analytics = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
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
        <div style={{ padding: 20 }}>
          <div
            style={{
              flex: 1,
              //borderWidth: 1,
              //borderColor: 'gray',
              borderRadius: 20,
              paddingLeft: 20,
              paddingRight: 20,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2
                style={{
                  flex: 1,
                  textAlign: 'left',
                  fontSize: 23,
                  padding: 10,
                }}
              >
                Account Details
              </h2>
            </div>
            <div>{isClient && <ColumnGraph />}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
