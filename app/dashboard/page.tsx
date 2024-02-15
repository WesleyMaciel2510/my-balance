'use client'
import { useSharedState } from '../global/sharedStates'
import NavBar from '../../components/navbar'
import AccountCard from '../../components/accountCard'
import TableInfo from '../../components/infoTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons'
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
    <div style={{ flex: 1 }}>
      <NavBar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
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
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-40 max-h-64 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
