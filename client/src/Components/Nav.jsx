import React from "react";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/authSlice";

function Nav() {
  const username  = useSelector((state) => state.Auth.username);
  const navigate = useNavigate()
  const dispatch = useDispatch();
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
          {username} <KeyboardArrowDownIcon />
          <LogoutIcon onClick={() => {
            dispatch(logout())
            navigate('/')
          }} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
