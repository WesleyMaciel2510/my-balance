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
import LeftBar from '../../components/leftbar'
import Footer from '@/components/footer/footer'

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
        <div></div>
      </div>
    </div>
  )
}

export default DashboardPage
