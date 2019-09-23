import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import './header.scss';

const Header = ({title}) => {
  return (
    <div className="header">
        <div className="header-title">
          <h2>{title}</h2>
        </div>
        <div className="navigations">
          <div className="test-mode">
            <Checkbox toggle />
            <span>Test Mode</span>
          </div>
          <div className="notifications">
            <i className="far fa-bell"></i>
            <span className="notification-count">1</span>
          </div>
          <div className="user-details">
            <span className="oval">O</span>
            <span className="username">Oluwatobi Mayowa</span>
          </div>
        </div>
      </div>
  )
}

export default Header;
