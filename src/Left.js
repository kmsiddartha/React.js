import React from "react";
import "./Left.css";
import EventIcon from "@material-ui/icons/Event";
import GroupIcon from "@material-ui/icons/Group";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import DraftsIcon from "@material-ui/icons/Drafts";

function Left() {
  return (
    <div className="App">
      <img src="https://www.eventindustrynews.com/wp-content/uploads/2020/03/webMOBI-a-new-generation-AI-powered-all-in-one-event-management-software.jpg"></img>

      <button className="button">
        <EventIcon />
        <h3>Event</h3>
      </button>

      <button className="button">
        <GroupIcon />
        <h3>Teams</h3>
      </button>

      <button className="button">
        <ShowChartIcon />
        <h3>Analytics</h3>
      </button>

      <button className="button">
        <DraftsIcon />
        <h3>Results</h3>
      </button>
    </div>
  );
}

export default Left;
