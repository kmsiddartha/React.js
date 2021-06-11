import React from "react";
import "./Right.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import SettingsIcon from "@material-ui/icons/Settings";

function Right() {
  return (
    <div className="main">
      <button className="button">
        <AccountBoxIcon />
      </button>

      <button className="button">
        <NotificationsActiveIcon />
      </button>

      <button className="button">
        <ChatIcon />
      </button>

      <button className="button">
        <SettingsIcon />
      </button>
    </div>
  );
}

export default Right;
