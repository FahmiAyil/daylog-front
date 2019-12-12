import React, { useState, useEffect } from "react";
import {
  TextField,
  Button
} from "@material-ui/core";
import moment from "moment"
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import '../style.css'

function DashboardPage(props) {

  const [navMenu, setNavMenu] = useState(false)

  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-clean-login.jpg'})`,
      height: '100vh'
    }}>
      <div className="dashboard-container">
        a
        <div className="dashboard-header">

        </div>
        <div className="dashboard-text-editor">

        </div>
        <div className="dashboard-feeds">

        </div>
        <div className="dashboard-footer"></div>
      </div>
      <div className="dashboard-profile-menu">
        <span
         style={{ cursor: 'pointer' }}
          onClick={e => setNavMenu(!navMenu) }
        >
          <AccountCircle /><ArrowDropDown/>
        </span>
        <ul style={{ display: navMenu ? 'inline-block' : 'none' }} className="dashboard-nav-menu">
          <li>Profile</li>
          <li>Kick Out</li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardPage;