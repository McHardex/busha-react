import React from "react";
import Layout from "../hoc/Layout/Layout";
import Account from "../hoc/Account/Account";
import Sidebar from "../components/shared/SideBar/Sidebar";
import Header from "../components/shared/Header/Header";
import Transfers from "../components/Transfers/Transfers";

const Page2 = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="body">
        <Header title="Tranfers" />
        <Account>
          <Transfers />
        </Account>
      </div>
    </Layout>
  );
};

export default Page2;
