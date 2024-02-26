import React, { useState } from 'react'
import { useSharedState } from '@/global/sharedStates'

interface HomeCardProps {
  index: number
}

const HomeCard: React.FC<HomeCardProps> = ({ index }) => {
  const { accounts, setAccounts } = useSharedState()
  const [actionType, setActionType] = useState('')
  const [inputValue, setInputValue] = useState('')

  /*  const changeFunds = (actionType: string) => {
    const updatedAccounts = [...accounts]
    const amount = parseInt(inputValue)

    if (isNaN(amount)) return

    const updatedAccount = { ...accounts[index] }

    if (actionType === 'deposit') {
      updatedAccount.income += amount
    } else {
      updatedAccount.withdraw += amount
    }

    updatedAccounts[index] = updatedAccount
    setAccounts(updatedAccounts)
  }

  const handleButtonModalClick = (action: string) => {
    console.log('action = ', action)
    setActionType(action)
    const modal = document.getElementById('modal')
    if (modal instanceof HTMLDialogElement) {
      modal.showModal()
    }
  } */

  return (
    <div>
      <div
        className="stats bg-primary text-primary-content"
        style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 17 }}
      >
        <div className="stat">
          <div className="stat-title text-white mb-3">Account Income</div>
          <div className="stat-value">${accounts[index].income}</div>
          <div className="stat-actions">
            <button
              //onClick={() => handleButtonModalClick('details')}
              className="btn btn-sm btn-success"
            >
              Details
            </button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-white mb-3">Account Outcome</div>
          <div className="stat-value">${accounts[index].withdraw}</div>
          <div className="stat-actions">
            <button
              //onClick={() => handleButtonModalClick('deposit')}
              className="btn btn-sm btn-success mr-2"
            >
              Deposit
            </button>
            <button
              //onClick={() => handleButtonModalClick('withdraw')}
              className="btn btn-sm btn-success"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <h2
        className="title-text text-primary text-center"
        style={{ marginRight: 100, marginTop: 10 }}
      >
        {accounts[index].accountType}
      </h2>
      <dialog id="modal" className="modal">
        <div
          className="modal-box"
          style={{ borderWidth: 2, borderRadius: 20, borderColor: '#70a5f5' }}
        >
          <h3 className="font-bold text-lg text-primary">
            {actionType === 'withdraw'
              ? 'Withdraw funds from your account'
              : 'Add funds to your account'}
          </h3>
          <p className="py-4">
            Please Select the amount and click in Add Funds.
          </p>
          <input
            type="text"
            placeholder="Type here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input input-bordered input-primary w-1/2 max-w-xs mr-3"
          />
          <button
            className="btn bg-primary text-white"
            //onClick={() => changeFunds(actionType)}
          >
            {actionType === 'withdraw' ? 'Withdraw Funds' : 'Add Funds'}
          </button>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default HomeCard
