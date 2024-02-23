'use client'
import React, { useState } from 'react'
import LeftBar from '@/components/bars/leftbar'
import NavBar from '@/components/bars/navbar'
import BorderedTab from '@/components/tabs/borderedTab'
import Performance from './performance.json'
import InvestmentLineChart from '@/components/charts/lineChart'
import './styles.css'

const MyInvestments = () => {
  const holdings = ['stocks', 'bonds', 'crypto', 'realEstate', 'etfs']

  const [selectedHolding, setSelectedHolding] = useState('stocks')

  const handleButtonClick = (holding: React.SetStateAction<string>) => {
    setSelectedHolding(holding)
  }

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
        className="bg-color"
        style={{
          flex: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />

        <div
          className="drawer-content flex flex-col items-center justify-center bg-color"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              paddingTop: 30,
              paddingLeft: 50,
            }}
          >
            <h2 className="title-text" style={{ color: '#336699' }}>
              My investments
            </h2>
          </div>
          <div
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              paddingLeft: 50,
            }}
          >
            <BorderedTab
              labelTab1={'OverView'}
              labelTab2={'Holdings'}
              labelTab3={'Activity'}
              labelTab4={'Performance'}
              content1={
                /* TAB 1 CONTENT */
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minWidth: '160vh',
                  }}
                >
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="blue-text">Total Net Worth: </h2>
                    <h1 className="value-show">$353.901.52</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="pd-10 blue-text"> Dividend Yield: </h2>
                    <h1 className=" value-show center">$78.964</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="pd-10 blue-text"> Total Performance: </h2>
                    <h1
                      className=" value-show center"
                      style={{ color: 'green' }}
                    >
                      + $32.240
                    </h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="pd-10 blue-text">Tax Losses Harvested:</h2>
                    <h1
                      className=" value-show center"
                      style={{ color: '#c41414' }}
                    >
                      + $4.791
                    </h1>
                  </div>
                </div>
              }
              content2={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minWidth: '160vh',
                  }}
                >
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="blue-text">Stocks: </h2>
                    <h1 className="value-show center">$142,104.20</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="blue-text pd-10">Bonds: </h2>
                    <h1 className="value-show center pd-10">$3,901.52</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="blue-text" style={{ paddingLeft: 25 }}>
                      Crypto:
                    </h2>
                    <h1
                      className="value-show center"
                      style={{ paddingLeft: 10 }}
                    >
                      $3,456.70
                    </h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="blue-text pd-10">Real Estate: </h2>
                    <h1
                      className="value-show center"
                      style={{ paddingLeft: 20 }}
                    >
                      $4,567.98
                    </h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: 'nowrap' }}>
                    <h2 className="blue-text">ETFs (Exchange-Traded Funds):</h2>
                    <h1 className="value-show center">$5,678.12</h1>
                  </div>
                </div>
              }
              content3={
                <div className="container">
                  <div className="row">
                    <div className="left-column blue-text">Description</div>
                    <div className="center-column blue-text">Value</div>
                    <div className="right-column blue-text">Date</div>
                  </div>
                  <div className="row">
                    <div className="left-column">
                      <div className="activity">Grocery Shopping</div>
                      <div className="activity">Dinner with Friends</div>
                      <div className="activity">E-commerce Store Selling</div>
                      <div className="activity">Salary Deposit</div>
                    </div>
                    <div className="center-column">
                      <h1 className="outcome">- $50.00</h1>
                      <h1 className="outcome">- $38.90</h1>
                      <h1 className="income">+ $249.00</h1>
                      <h1 className="income">+ $5200.00</h1>
                    </div>
                    <div className="right-column">
                      <div className="amount">February 23, 2024</div>
                      <div className="amount">February 22, 2024</div>
                      <div className="amount">February 20, 2024</div>
                      <div className="amount">February 20, 2024</div>
                    </div>
                  </div>
                </div>
              }
              content4={
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <InvestmentLineChart />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyInvestments
