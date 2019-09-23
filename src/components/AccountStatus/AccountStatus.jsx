import React from "react";
import "./account-status.scss";

const AccountStatus = () => {
  return (
    <table>
      <tbody>
        <tr className="table-header">
          <th className="header-end">Name</th>
          <th>Pending</th>
          <th>Available</th>
        </tr>
        <tr className="rows">
          <td>
            <i className="fab fa-bitcoin name-icon" />
            <span>Bitcoin</span>
          </td>
          <td>
            <p className="currency-pair">10.12345678 BTC</p>
            <p className="currency-pair2">2,000,000 NGN</p>
          </td>
          <td>
            <p className="currency-pair">10.12345678 BTC</p>
            <p className="currency-pair2">2,000,000 NGN</p>
          </td>
        </tr>
        <tr className="rows">
          <td>
            <i className="fab fa-ethereum name-icon" />
            <span>Ethereum</span>
          </td>
          <td>
            <p className="currency-pair">10.12345678 BTC</p>
            <p className="currency-pair2">2,000,000 NGN</p>
          </td>
          <td>
            <p className="currency-pair">10.12345678 BTC</p>
            <p className="currency-pair2">2,000,000 NGN</p>
          </td>
        </tr>
        <tr className="rows">
          <td>
            <i className="fab fa-ethereum name-icon" />
            <span>Naira</span>
          </td>
          <td>
            <p className="currency-pair">NGN 800,000</p>
          </td>
          <td>
            <p className="currency-pair">NGN 2,000,000</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AccountStatus;
