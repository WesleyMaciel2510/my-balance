import React, { useState } from 'react'
import { useSharedState } from '@/global/sharedStates'

const ModalHome = (actionType: string, index: number) => {
  const { accounts, setAccounts } = useSharedState()

  const [inputValue, setInputValue] = useState(0)

  const changeFunds = (index: number) => {
    console.log('inputValue = ', inputValue)
    console.log('index = ', index)
    console.log('actionType = ', actionType)
    let updatedAccounts, total
    if (actionType == 'deposit') {
      total = accounts[index].income + inputValue
      console.log('index = ', index)
      index == 0
        ? (updatedAccounts = [
            { ...accounts[0], income: total },
            { ...accounts[1] },
          ])
        : (updatedAccounts = [
            { ...accounts[0] },
            { ...accounts[1], income: total },
          ])

      setAccounts(updatedAccounts)
    } else {
      total = accounts[index].withdraw + inputValue
      console.log('index = ', index)
      index == 0
        ? (updatedAccounts = [
            { ...accounts[0], withdraw: total },
            { ...accounts[1] },
          ])
        : (updatedAccounts = [
            { ...accounts[0] },
            { ...accounts[1], withdraw: total },
          ])
      setAccounts(updatedAccounts)
    }
  }

  return (
    <div>
      <dialog id="modal" className="modal">
        <div
          className="modal-box"
          style={{
            borderWidth: 2,
            borderRadius: 20,
            borderColor: '#70a5f5',
          }}
        >
          <h3 className="font-bold text-lg text-primary">
            {actionType == 'withdraw'
              ? 'Withdraw funds from your account'
              : 'Add funds to your account'}
          </h3>
          <p className="py-4">
            Please Select the ammount and click in Add Funds.
          </p>
          <input
            type="text"
            placeholder="Type here"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value
              //validating to backspace do not makes the 'transferAmount' NaN
              if (value === '') {
                setInputValue(0)
              } else {
                const parsedValue = parseInt(value)
                if (!isNaN(parsedValue)) {
                  setInputValue(parsedValue)
                }
              }
            }}
            className="input input-bordered input-primary w-1/2 max-w-xs mr-3"
          />
          <button
            className="btn bg-primary text-white"
            onClick={() => changeFunds(index)}
          >
            {actionType == 'withdraw' ? 'Withdraw Funds' : 'Add Funds'}
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

export default ModalHome
