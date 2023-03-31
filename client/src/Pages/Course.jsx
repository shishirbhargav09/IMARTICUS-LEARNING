import React from "react";
import "../Styles/Course.css";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Course() {
  return (
    <>
      <div className="main">
        <div className="main-sidebar">
          <div className="logo">
            <img
              src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg"
              alt="logo"
            />
          </div>
          <ul>
            <li>Course</li>
            <li>Discussion</li>
          </ul>

          <div className="side-bar-freshdesk-container">
            <div className="side-bar-freshdesk-heading">Facing Problems?</div>
            <button class="side-bar-freshdesk-button">Get help</button>
          </div>
        </div>

        <div className="main-course">
          <div className="nav">
            <span class="nav-title">Introduction to Machine Learning</span>
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
        </div>
      </div>
    </>
  );
}

export default Course;
