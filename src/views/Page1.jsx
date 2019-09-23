import React from 'react';
import Layout from '../hoc/Layout';
import Sidebar from '../shared/SideBar/Sidebar';
import Header from '../shared/Header/Header';

const Page1 = () => {
  return (
    <Layout>
      <Sidebar />
      <Header title="Balances" />
    </Layout>
  )
}

export default Page1;
