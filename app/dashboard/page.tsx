'use client'
import { useSharedState } from '../global/sharedStates'
import { useRouter } from 'next/navigation'
import NavBar from '../../components/navbar'
import AccountCard from '../../components/cards/accountCard'
import TableInfo from '../../components/tables/infoTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import IconAndLabel from '../../components/buttons/iconAndLabel'
import { SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
  const { accounts, setAccounts } = useSharedState()
  const [transferAmount, setTransferAmount] = useState(0)
  const router = useRouter()

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
    console.log('transferAmount = ', transferAmount)

    //validate 'transferAmount' to not be bigger then Total in the selected account
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
      if (transferAmount > accounts[1].balance || accounts[1].balance <= 0) {
        alert(
          `It was not possible to transfer your balance. \n Please check the amount entered and the total available \n in Saving Account.`,
        )
      } else {
        //saving to checking
        const checking = transferAmount + accounts[0].balance
        const saving =
          transferAmount === 0
            ? accounts[1].balance
            : accounts[1].balance - transferAmount
        updatedAccounts = [
          { ...accounts[0], balance: checking },
          { ...accounts[1], balance: saving },
        ]
        setAccounts(updatedAccounts)
      }
    }

    if (side === 'right') {
      if (transferAmount > accounts[0].balance || accounts[0].balance <= 0) {
        alert(
          `It was not possible to transfer your balance. \n Please check the amount entered and the total available \n in Checking Account.`,
        )
      } else {
        //checking to saving
        const saving = transferAmount + accounts[1].balance
        const checking =
          transferAmount === 0
            ? accounts[0].balance
            : accounts[0].balance - transferAmount
        updatedAccounts = [
          { ...accounts[0], balance: checking },
          { ...accounts[1], balance: saving },
        ]
        setAccounts(updatedAccounts)
      }
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          backgroundColor: '#337ab7',
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
          minHeight: '100vh',
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
            }}
          />
          <div>
            <IconAndLabel
              icon={faHouse}
              label={'Home'}
              navigateTo={'/dashboard'}
            />
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
              icon={faCircleHalfStroke}
              label={'Dark Theme'}
              navigateTo={'/dashboard'}
            />
            <IconAndLabel
              icon={faLock}
              label={'Change\n Password'}
              navigateTo={'/dashboard'}
            />
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
            <div style={{ flex: 3 }}>
              <AccountCard
                type={accounts[0].accountType}
                amount={accounts[0].balance}
              />
            </div>

            <div
              style={{
                flex: 2,
                textAlign: 'center',
                marginTop: 20,
                padding: 10,
              }}
            >
              <div onClick={() => updateBalances('left')}>
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  style={{
                    color: 'oklch(var(--p))',
                    width: 50,
                    height: 50,
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div
                onClick={() => updateBalances('right')}
                style={{ paddingTop: 20, paddingBottom: 20 }}
              >
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  style={{
                    color: 'oklch(var(--p))',
                    width: 50,
                    height: 50,

                    cursor: 'pointer',
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm"
                value={transferAmount}
                style={{ width: '70px' }}
                onChange={(e) => {
                  const value = e.target.value
                  //validating to backspace do not makes the 'transferAmount' NaN
                  if (value === '') {
                    setTransferAmount(0)
                  } else {
                    const parsedValue = parseInt(value)
                    if (!isNaN(parsedValue)) {
                      setTransferAmount(parsedValue)
                    }
                  }
                }}
              />
            </div>
            <div style={{ flex: 3 }}>
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
