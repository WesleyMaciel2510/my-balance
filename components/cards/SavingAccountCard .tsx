/* import React, { useState } from 'react'
import { useSharedState } from '@/global/sharedStates'

const SavingAccountCard = () => {
  const { accounts, setAccounts } = useSharedState()
  const [action, setAction] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const changeFunds = (selectedAction: number) => {
    console.log('selectedAction in changeFunds = ', selectedAction)
  }

  const openModal = (selectedAction: number) => {
    console.log('selectedAction in openModal = ', selectedAction)
    setAction(selectedAction)
    const modal = document.getElementById('modal')
    if (modal instanceof HTMLDialogElement) {
      modal.showModal()
    }
  }

  return (
    <div>
      <div
        className="stats bg-primary text-primary-content"
        style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 17 }}
      >
        <div className="stat">
          <div className="stat-title text-white mb-3">Account Income</div>
          <div className="stat-value">${accounts[1].income}</div>
          <div className="stat-actions">
            <button
              onClick={() => openModal(0)}
              className="btn btn-sm btn-success"
            >
              Details
            </button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-white mb-3">Account Outcome</div>
          <div className="stat-value">${accounts[1].withdraw}</div>
          <div className="stat-actions">
            <button
              onClick={() => {
                setAction(1)
                openModal(1)
              }}
              className="btn btn-sm btn-success mr-2"
            >
              Deposit
            </button>
            <button
              onClick={() => {
                setAction(2)
                openModal(2)
              }}
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
        {accounts[1].accountType}
      </h2>
      <dialog id="modal" className="modal">
        <div
          className="modal-box"
          style={{ borderWidth: 2, borderRadius: 20, borderColor: '#70a5f5' }}
        >
          <h3 className="font-bold text-lg text-primary">
            {action === 2
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
            onClick={() => changeFunds(action)}
          >
            {action === 2 ? 'Withdraw Funds' : 'Add Funds'}
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

export default SavingAccountCard
 */
