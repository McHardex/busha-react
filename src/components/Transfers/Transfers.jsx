import React from "react";
import "./transfers.scss";

const Transfers = () => {
  return (
    <div className="transfer-cont-wrap">
      <div className="button-wrap">
        <button className="new-transfer-button">
          New Transfer
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
      <table className="transfer-container">
        <tbody>
          <tr className="table-header">
            <th className="header-end">Reference</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </tbody>
      </table>
      <div className="no-transfers">
        <h3>Your haven't made any request yet</h3>
        <span>Your transfers will be displayed here</span>
      </div>
    </div>
  );
};

export default Transfers;
