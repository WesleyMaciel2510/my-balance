import { useState } from "react";
import { useBetween } from "use-between";

export const useStateVariables = () => {
  const [accounts, setAccounts] = useState([
    {
      accountType: "Checking Account",
      accountNumber: "57896824753-1",
      bankName: "Quality Control",
      income: 6000,
      withdraw: 4000,
      balance: 6000 - 4000,
    },
    {
      accountType: "Saving Account",
      accountNumber: "36516026871-5",
      bankName: "New Digital",
      income: 10000,
      withdraw: 2000,
      balance: 10000 - 2000,
    },
  ]);
  return {
    accounts,
    setAccounts,
  };
};

export const useSharedState = () => useBetween(useStateVariables);
