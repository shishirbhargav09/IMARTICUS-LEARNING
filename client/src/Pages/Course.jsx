import React from "react";
import "../Styles/Course.css";

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

        <div className="main-course"></div>
      </div>
    </>
  );
}

export default Course;
