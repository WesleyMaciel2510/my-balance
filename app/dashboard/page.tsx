"use client";
import { useSharedState } from "../global/sharedStates";
import NavBar from "../components/navbar";
import AccountCard from "../components/accountCard";
import TableInfo from "../components/infoTable";

const DashboardPage = () => {
  const { checkingAccount, savingAccount } = useSharedState();
  return (
    <div style={{ flex: 1 }}>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1, paddingLeft: 220 }}>
          <AccountCard
            type={checkingAccount.accountType}
            amount={checkingAccount.income - checkingAccount.withdraw}
          />
        </div>
        <div style={{ flex: 1, paddingRight: 100 }}>
          <AccountCard
            type={savingAccount.accountType}
            amount={savingAccount.income - savingAccount.withdraw}
          />
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
