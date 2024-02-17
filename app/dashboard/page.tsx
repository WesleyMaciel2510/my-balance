'use client'
import { useSharedState } from '../../global/sharedStates'
import NavBar from '../../components/navbar'
import AccountCard from '../../components/cards/accountCard'
import TableInfo from '../../components/tables/infoTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { SetStateAction, useState } from 'react'
import LeftBar from '../../components/leftBar'

const DashboardPage = () => {
  const { accounts, setAccounts, darktheme, setDarktheme } = useSharedState()
  const [transferAmount, setTransferAmount] = useState(0)

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
          `Unable to transfer your balance. \n Please check the amount entered and the total available \n in Saving Account.`,
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
          `Unable to transfer your balance. \n Please check the amount entered and the total available \n in Checking Account.`,
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
      {/* LEFT  */}
      <div
        style={{
          backgroundColor: '#337ab7',
          boxShadow: '0px 0apx 7px 1px rgba(0,0,0,0.75)',
          minHeight: '100vh',
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
        >
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
                    color: '#07508f',
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
                    color: '#07508f',
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
