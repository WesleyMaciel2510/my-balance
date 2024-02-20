'use client'
import LeftBar from '@/components/leftbar'
import NavBar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import ColumnGraph from '@/components/columnGraph'
import checkingAccountData from './checkingAccount.json'
import savingAccountData from './savingAccount.json'

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
            <div>
              <h2
                style={{
                  flex: 1,
                  textAlign: 'left',
                  fontSize: 23,
                  paddingTop: 5,
                  paddingBottom: 15,
                }}
              >
                Account Details
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1 }}>
                {isClient && (
                  <ColumnGraph
                    data={checkingAccountData}
                    IncomeColor="#008080"
                    OutcomeColor="#FFD700"
                  />
                )}
                <h2
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Checking Account
                </h2>
              </div>
              <div style={{ flex: 1 }}>
                {isClient && (
                  <ColumnGraph
                    data={savingAccountData}
                    IncomeColor="#8a2be2"
                    OutcomeColor="#3cb371"
                  />
                )}
                <h2
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Saving Account
                </h2>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
