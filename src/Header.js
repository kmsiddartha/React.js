import React from "react";
import SubjectIcon from "@material-ui/icons/Subject";
import "./Header.css";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";

function Header() {
  return (
    <div className="header">
      <div className="div1">
        <SubjectIcon className="icon" />
        <h1>Admin Dashboard</h1>
      </div>
      <div className="div2">
        <div className="preview">
          <h3>
            Preview on: <PhoneAndroidIcon className="ph" />
            <LaptopIcon className="lap" />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <h3>Preview on:
                <PhoneAndroidIcon className='phone'/>
                <LaptopIcon className='lap'/></h3> */
}
