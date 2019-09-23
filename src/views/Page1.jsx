import React from "react";
import Layout from "../hoc/Layout/Layout";
import Account from "../hoc/Account/Account";
import AccountStatus from "../components/AccountStatus/AccountStatus";
import Sidebar from "../components/shared/SideBar/Sidebar";
import Header from "../components/shared/Header/Header";

const Page1 = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="body">
        <Header title="Balances" />
        <Account>
          <AccountStatus />
        </Account>
      </div>
    </Layout>
  );
};

export default Page1;
