import React from "react";
import "./Main.css";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { ToggleOff } from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";
import HttpsIcon from "@material-ui/icons/Https";

function Main() {
  return (
    <div className="comp">
      <div className="maincomp">
        <div className="left">
          <div className="lefttop">
            <h2>Event Settings</h2>
          </div>
          <h2>General</h2>
          <h2>Privacy</h2>
          <h2 className="forumicon">Features</h2>
          <h2>Customization</h2>
          <h2>Integration</h2>
          <h2>Session Settings</h2>
          <h2>My Plans</h2>
        </div>
        <div className="right">
          <CancelIcon className="cancel" />
          <div className="top">
            <ForumIcon className="forumicon" />
            <h2>Audience Q&A</h2>
            <div className="topicon">
              <ToggleOnIcon className="on" />
              <ExpandLessIcon />
            </div>
          </div>
          <div className="bottom">
            <div className="rightcont">
              <div className="audience">
                <h3>Moderation</h3>
                <h4>Easy review all questions before they go live</h4>
              </div>
              <div className="audience">
                <h3>Labels</h3>
                <h4>Categorize and filter questions</h4>
              </div>
              <div className="audience">
                <h3>Downvoting</h3>
                <h4>Enable downvoting of questions</h4>
              </div>
              <div className="audience">
                <h3>Replies</h3>
                <h4>Allow participation to reply to or comment on questions</h4>
              </div>
              <div className="audience">
                <h3>Anonymous questions</h3>
                <h4>Let your participants send anonymous questions</h4>
              </div>
              <div className="audience">
                <h3>Maximum questions length</h3>
                <h4>Show number of votes instead of percentage</h4>
                <div>
                  <button className="que">160</button>
                  <button className="que">240</button>
                  <button className="que">300</button>
                </div>
              </div>
              <div className="audience">
                <h3>Close questions</h3>
                <h4>
                  Prevent the participants from sending new questions to your
                  event
                </h4>
              </div>
            </div>
            <div className="buttons">
              <ToggleOffIcon className="but off" />
              <ToggleOnIcon className="but on" />
              <ToggleOnIcon className="but on" />
              <ToggleOnIcon className="but on" />
              <ToggleOnIcon className="but on" />
              <ToggleOffIcon className="but off" />
              <ToggleOnIcon className="but on last" />
            </div>
          </div>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
