import React from 'react'

const Sidebar = () => {
  return (
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
      <button className="side-bar-freshdesk-button">Get help</button>
    </div>
  </div>
  )
}

export default Sidebar