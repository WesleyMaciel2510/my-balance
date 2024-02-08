import React, { ChangeEvent } from "react";
import { useSharedState } from "../global/sharedStates";

const TableInfo = () => {
  const {
    checkingAccount,
    setCheckingAccount,
    savingAccount,
    setSavingAccount,
  } = useSharedState();
  const handleIncomeInput = (event: ChangeEvent<HTMLInputElement>) => {
    /*  setIncome(event.target.valueAsNumber); */
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
          {/* row 1 */}
          <tr>
            <th>{checkingAccount.accountType}</th>
            <th>{checkingAccount.accountNumber}</th>
            <th>{checkingAccount.bankName}</th>
            <th>{checkingAccount.income}</th>
            <th>{checkingAccount.withdraw}</th>
            <th>{checkingAccount.income - checkingAccount.withdraw}</th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>{savingAccount.accountType}</th>
            <th>{savingAccount.accountNumber}</th>
            <th>{savingAccount.bankName}</th>
            <th>{savingAccount.income}</th>
            <th>{savingAccount.withdraw}</th>
            <th>{savingAccount.income - savingAccount.withdraw}</th>

            {/* <th>{savingAccount.balance}</th> */}
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <input
                type="text"
                placeholder=""
                className="input input-ghost w-full max-w-xs"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder=""
                className="input input-ghost w-full max-w-xs"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder=""
                className="input input-ghost w-full max-w-xs"
              />
            </td>
            <td>
              <input
                type="number"
                placeholder=""
                className="input input-ghost w-full max-w-xs"
                onChange={handleIncomeInput}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder=""
                className="input input-ghost w-full max-w-xs"
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
