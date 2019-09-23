import React from "react";
import dashboard from "../../../images/dashboard.svg";
import balances from "../../../images/balances.svg";
import accountPayment from "../../../images/accountPayment.png";
import "./sidebar.scss";

const Sidebar = ({ active }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <span className="sidebar-rec-logo">B</span>
        <span className="business-name">Business name</span>
        <i className="fas fa-angle-down"></i>
      </div>
      <div className="sidebar-items-wrapper">
        <div className={active === "dashboard" ? "active" : "items"}>
          <img src={dashboard} alt="dashboard" />
          <span className="side-nav-title">Dashboard</span>
        </div>
        <div className={active === "balance" ? "active" : "items"}>
          <i className="fas fa-address-book icon" />
          <span className="side-nav-title">Balances</span>
        </div>
        <div className={active === "payments" ? "active" : "items"}>
          <img src={balances} alt="dashboard" />
          <span className="side-nav-title">Payments</span>
        </div>
        <div className={active === "transfers" ? "active" : "items"}>
          <i className="fas fa-address-book icon" />
          <span className="side-nav-title">Tranfers</span>
        </div>
        <div className={active === "developers" ? "active" : "items"}>
          <img src={balances} alt="dashboard" />
          <span className="side-nav-title">Developers</span>
        </div>
        <div className={active === "settings" ? "active" : "items"}>
          <img src={balances} alt="dashboard" />
          <span className="side-nav-title">Settings</span>
        </div>
      </div>
      <div className="account-payment">
        <img src={accountPayment} alt="account-payment" />
        <span className="acc-payment-title">Account Payment</span>
      </div>
    </div>
  );
};

export default Sidebar;
