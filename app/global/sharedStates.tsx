import { useState } from "react";
import { useBetween } from "use-between";

export const useStateVariables = () => {
  const [checkingAccount, setCheckingAccount] = useState({
    accountType: "Checking Account",
    accountNumber: "57896824753-1",
    bankName: "Quality Control",
    income: 6000,
    withdraw: 4000,
  });
  const [savingAccount, setSavingAccount] = useState({
    accountType: "Saving Account",
    accountNumber: "36516026871-5",
    bankName: "New Digital",
    income: 10000,
    withdraw: 2000,
  });
  return {
    checkingAccount,
    setCheckingAccount,
    savingAccount,
    setSavingAccount,
  };
};

export const useSharedState = () => useBetween(useStateVariables);
