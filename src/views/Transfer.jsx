import React from "react";
import Layout from "../hoc/Layout/Layout";
import Account from "../hoc/Account/Account";
import Sidebar from "../components/shared/SideBar/Sidebar";
import Header from "../components/shared/Header/Header";
import Transfers from "../components/Transfers/Transfers";

const Transfer = () => {
  return (
    <Layout>
      <Sidebar active="transfers" />
      <div className="body">
        <Header title="Tranfers" />
        <Account>
          <Transfers />
        </Account>
      </div>
    </Layout>
  );
};

export default Transfer;
