"use client";
import { useState } from "react";
import NavBar from "../components/navbar";
import AccountCard from "../components/accountCard";
import "./styles.css";

const DashboardPage = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1, paddingLeft: 200 }}>
          <AccountCard type="Checking" amount={2000.0} />
        </div>
        <div style={{ flex: 1 }}>
          <AccountCard type="Saving" amount={10000.0} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
