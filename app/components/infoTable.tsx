import React, { ChangeEvent, useState } from "react";
import { useSharedState } from "../global/sharedStates";

const TableInfo = () => {
  const { accounts, setAccounts } = useSharedState();
  const [mockData, setMockData] = useState({
    accountType: "",
    accountNumber: "",
    bankName: "",
    income: 0,
    withdraw: 0,
    balance: 0,
  });

  const handleChange = (e: any, key: any) => {
    const newValue = e.target.value;
    setMockData((prevData) => ({
      ...prevData,
      [key]: newValue,
    }));
    console.log("mockData = ", mockData);
  };
  return (
    <div className="overflow-x-auto" style={{ borderRadius: 8 }}>
      <table className="table" style={{ color: "#000" }}>
        {/* head */}
        <thead style={{ backgroundColor: "#20f559" }}>
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
            <tr
              key={index}
              style={{ justifyContent: "center", alignContent: "center" }}
            >
              <th>{account.accountType}</th>
              <th>{account.accountNumber}</th>
              <th>{account.bankName}</th>
              <th>{account.income}</th>
              <th>{account.withdraw}</th>
              <th>{account.income - account.withdraw}</th>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost input-sm w-full max-w-"
                value={mockData.accountType}
                onChange={(e) => handleChange(e, "accountType")}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost input-sm w-full max-w-"
                value={mockData.accountNumber}
                onChange={(e) => handleChange(e, "accountNumber")}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost input-sm w-full max-w-"
                value={mockData.bankName}
                onChange={(e) => handleChange(e, "bankName")}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost input-sm w-full max-w-"
                value={mockData.income}
                onChange={(e) => handleChange(e, "income")}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost input-sm w-full max-w-"
                value={mockData.withdraw}
                onChange={(e) => handleChange(e, "withdraw")}
              />
            </td>
            <td>{mockData.income - mockData.withdraw}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
