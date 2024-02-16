'use client'
import { useSharedState } from '../global/sharedStates'
import NavBar from '../../components/navbar'
import AccountCard from '../../components/cards/accountCard'
import TableInfo from '../../components/tables/infoTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCalculator,
  faHouse,
  faIdCard,
  faChartSimple,
  faMoneyBillTrendUp,
  faGear,
  faCircleHalfStroke,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import IconAndLabel from '../../components/buttons/iconAndLabel'
import { SetStateAction } from 'react'

const DashboardPage = () => {
  const { accounts, setAccounts } = useSharedState()
  const addAccount = () => {
    setAccounts((prevAccounts) => [
      ...prevAccounts,
      {
        accountType: '',
        accountNumber: '',
        bankName: '',
        income: 0,
        withdraw: 0,
        balance: 0,
      },
    ])
  }
  const updateBalances = (side: string) => {
    console.log('side = ', side)
    const totalBalance = accounts[0].balance + accounts[1].balance
    let updatedAccounts: SetStateAction<
      {
        accountType: string
        accountNumber: string
        bankName: string
        income: number
        withdraw: number
        balance: number
      }[]
    > = []

    if (side === 'left') {
      updatedAccounts = [
        { ...accounts[0], balance: totalBalance },
        { ...accounts[1], balance: 0 },
      ]
    }

    if (side === 'right') {
      updatedAccounts = [
        { ...accounts[0], balance: 0 },
        { ...accounts[1], balance: totalBalance },
      ]
    }
    setAccounts(updatedAccounts)
  }

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#337ab7',
          height: '100vh',
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
          justifyContent: 'flex-start', // Add this line
        }}
      >
        {/* LEFT  */}
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
              marginBottom: 10,
            }}
          />
          <div>
            <IconAndLabel icon={faHouse} label={'Home'} />
            <IconAndLabel icon={faChartSimple} label={'Analytics'} />
            <IconAndLabel icon={faMoneyBillTrendUp} label={'My Investment'} />
            <IconAndLabel icon={faIdCard} label={'My Accounts'} />
            <IconAndLabel icon={faGear} label={'Settings'} />
            <div
              style={{
                border: '1px solid white',
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <IconAndLabel icon={faCircleHalfStroke} label={'Dark Theme'} />
            <IconAndLabel icon={faLock} label={'Change\n Password'} />
          </div>
        </div>
      </div>

      <div style={{ flex: 5, display: 'flex', flexDirection: 'column' }}>
        {/* RIGHT */}
        <NavBar />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div style={{ flex: 4, justifyContent: 'center' }}>
              <AccountCard
                type={accounts[0].accountType}
                amount={accounts[0].balance}
              />
            </div>

            <div style={{ flex: 1, paddingLeft: 30, paddingRight: 30 }}>
              <div onClick={() => updateBalances('left')}>
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  style={{
                    color: 'oklch(var(--p))',
                    width: 50,
                    height: 50,
                    paddingTop: 30,
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div onClick={() => updateBalances('right')}>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  style={{
                    color: 'oklch(var(--p))',
                    width: 50,
                    height: 50,
                    paddingTop: 30,
                    cursor: 'pointer',
                  }}
                />
              </div>
            </div>
            <div style={{ flex: 4, justifyContent: 'center' }}>
              <AccountCard
                type={accounts[1].accountType}
                amount={accounts[1].balance}
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 20 }}
            >
              <TableInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
