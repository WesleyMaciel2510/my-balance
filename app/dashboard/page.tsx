"use client";
import { useSharedState } from "../global/sharedStates";
import NavBar from "../components/navbar";
import AccountCard from "../components/accountCard";
import TableInfo from "../components/infoTable";
import { useState } from "react";

const DashboardPage = () => {
  const { accounts, setAccounts } = useSharedState();
  const [isHovered, setIsHovered] = useState(false);
  const addAccount = () => {
    setAccounts((prevAccounts) => [
      ...prevAccounts,
      {
        accountType: "",
        accountNumber: "",
        bankName: "",
        income: 0,
        withdraw: 0,
      },
    ]);
  };

  return (
    <div style={{ flex: 1 }}>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 4, paddingLeft: 220 }}>
          <AccountCard
            type={accounts[0].accountType}
            amount={accounts[0].income - accounts[0].withdraw}
          />
        </div>
        <div style={{ flex: 4, paddingRight: 100 }}>
          <AccountCard
            type={accounts[1].accountType}
            amount={accounts[1].income - accounts[1].withdraw}
          />
        </div>
        <div style={{ flex: 1 }}>
          <button
            className="btn"
            style={{
              borderRadius: 5,
              backgroundColor: isHovered ? "#09b531" : "#20f559",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              addAccount();
              console.log("there are ", accounts.length, " accounts!");
            }}
          >
            Add Account
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ paddingLeft: 200, paddingRight: 200, paddingTop: 50 }}>
          <TableInfo />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
