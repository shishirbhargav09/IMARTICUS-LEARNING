import React from 'react'
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Nav() {
  return (
     <div className="nav">
            <span className="nav-title">Introduction to Machine Learning</span>
            <div className="nav-right">
              <button className="nav-get-help">
                <img
                  src="https://learn.pegasus.imarticus.org/images/Support.svg"
                  alt="get-help"
                />
                Get help
              </button>
              <Avatar />
              <div className="usertext">
                User Name <KeyboardArrowDownIcon/>
              </div>
            </div>
          </div>
  )
}

export default Nav