import React from 'react';
import './account.scss';

const Account = (props) => {
  return (
    <div className="account-body">
      {props.children}
    </div>
  )
}

export default Account;
