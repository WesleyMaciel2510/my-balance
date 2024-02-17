import React, { ChangeEvent, useState } from 'react'
import { useSharedState } from '../../global/sharedStates'

const TableInfo = () => {
  const { accounts, setAccounts } = useSharedState()
  const [mockData, setMockData] = useState({
    accountType: '',
    accountNumber: '',
    bankName: '',
    income: 0,
    withdraw: 0,
    balance: 0,
  })
  const [isHovered, setIsHovered] = useState(false)

  //==========================================================
  const handleAddAccount = () => {
    setAccounts((prevAccounts) => [...prevAccounts, mockData])
    //cleaning input
    setMockData({
      accountType: '',
      accountNumber: '',
      bankName: '',
      income: 0,
      withdraw: 0,
      balance: 0,
    })
  }

  const handleChange = (data: any, key: any, accountIndex: number) => {
    const { value } = data.target
    console.log('value = ', value)
    console.log('key = ', key)
    console.log('accountIndex = ', accountIndex)
    setAccounts((prevAccounts) => {
      const updatedAccounts = [...prevAccounts]
      updatedAccounts[accountIndex] = {
        ...updatedAccounts[accountIndex],
        [key]: value,
      }
      return updatedAccounts
    })
  }
  const handleMockChange = (data: any, key: any) => {
    const { value } = data.target
    setMockData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }
  //==========================================================
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}
      >
        <div>
          <h2 style={{ textAlign: 'left', fontSize: 25 }}>Account Details</h2>
        </div>

        <div>
          <button
            className="btn text-white"
            style={{
              borderRadius: 5,
              backgroundColor: isHovered ? '#07508f' : '#337ab7',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleAddAccount}
          >
            Add Account
          </button>
        </div>
      </div>
      <div
        className="overflow-x-auto"
        style={{ borderRadius: 8, borderColor: 'gray', borderWidth: 1 }}
      >
        <table className="table" style={{ color: '#000' }}>
          <thead
            className="text-white"
            style={{
              backgroundColor: '#337ab7',
            }}
          >
            <tr>
              <th>Account Type</th>
              <th>Account Number</th>
              <th>Bank Name</th>
              <th>Income</th>
              <th>Withdraw</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost input-sm w-full max-w-"
                    value={account.accountType}
                    onChange={(data) =>
                      handleChange(data, 'accountType', index)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost input-sm w-full max-w-"
                    value={account.accountNumber}
                    onChange={(data) =>
                      handleChange(data, 'accountNumber', index)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost input-sm w-full max-w-"
                    value={account.bankName}
                    onChange={(data) => handleChange(data, 'bankName', index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost input-sm w-full max-w-"
                    value={account.income}
                    onChange={(data) => handleChange(data, 'income', index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost input-sm w-full max-w-"
                    value={account.withdraw}
                    onChange={(data) => handleChange(data, 'withdraw', index)}
                  />
                </td>
                <td>{account.income - account.withdraw}</td>
              </tr>
            ))}
            {/* ANOTHER ACCOUNTS */}
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost input-sm w-full max-w-"
                  value={mockData.accountType}
                  onChange={(data) => handleMockChange(data, 'accountType')}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost input-sm w-full max-w-"
                  value={mockData.accountNumber}
                  onChange={(data) => handleMockChange(data, 'accountNumber')}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost input-sm w-full max-w-"
                  value={mockData.bankName}
                  onChange={(data) => handleMockChange(data, 'bankName')}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost input-sm w-full max-w-"
                  value={mockData.income}
                  onChange={(data) => handleMockChange(data, 'income')}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost input-sm w-full max-w-"
                  value={mockData.withdraw}
                  onChange={(data) => handleMockChange(data, 'withdraw')}
                />
              </td>
              <td>{mockData.income - mockData.withdraw}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableInfo
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.')
}
