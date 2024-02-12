"use client";
import { useSharedState } from "../global/sharedStates";
import NavBar from "../../components/navbar";
import AccountCard from "../../components/accountCard";
import TableInfo from "../../components/infoTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { SetStateAction } from "react";

const DashboardPage = () => {
  const { accounts, setAccounts } = useSharedState();
  const addAccount = () => {
    setAccounts((prevAccounts) => [
      ...prevAccounts,
      {
        accountType: "",
        accountNumber: "",
        bankName: "",
        income: 0,
        withdraw: 0,
        balance: 0,
      },
    ]);
  };
  const updateBalances = (side: string) => {
    console.log("side = ", side);
    const totalBalance = accounts[0].balance + accounts[1].balance;
    let updatedAccounts: SetStateAction<
      {
        accountType: string;
        accountNumber: string;
        bankName: string;
        income: number;
        withdraw: number;
        balance: number;
      }[]
    > = [];

    if (side === "left") {
      updatedAccounts = [
        { ...accounts[0], balance: totalBalance },
        { ...accounts[1], balance: 0 },
      ];
    }

    if (side === "right") {
      updatedAccounts = [
        { ...accounts[0], balance: 0 },
        { ...accounts[1], balance: totalBalance },
      ];
    }
    setAccounts(updatedAccounts);
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
            amount={accounts[0].balance}
          />
        </div>

        <div style={{ flex: 1 }}>
          <div onClick={() => updateBalances("left")}>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              style={{
                color: "oklch(var(--p))",
                width: 50,
                height: 50,
                paddingTop: 30,
                cursor: "pointer",
              }}
            />
          </div>
          <div onClick={() => updateBalances("right")}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{
                color: "oklch(var(--p))",
                width: 50,
                height: 50,
                paddingTop: 30,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div style={{ flex: 4, paddingRight: 100 }}>
          <AccountCard
            type={accounts[1].accountType}
            amount={accounts[1].balance}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ paddingLeft: 200, paddingRight: 200, paddingTop: 20 }}>
          <TableInfo />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
