import React, {useState} from "react";
import moptro_logo from "../assests/moptro logo.png";
import contact_logo from "../assests/contact.png";
import Productivity from "./Productivity";
import Employees from "./Employees";
import { IoHome } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";

const DashBoard = () => {
  const [activeComponent, setActiveComponent] = useState("productivity");

  const handleHomeClick = () => {
    setActiveComponent("productivity");
  };

  const handleAccountClick = () => {
    setActiveComponent("employees");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="contact-logo">
          <img src={contact_logo} alt="contact logo" />
        </div>
        <div className="moptro-logo">
          <img src={moptro_logo} alt="moptro logo" />
        </div>
        {activeComponent === "productivity" && <Productivity />}
        {activeComponent === "employees" && <Employees />}
        <div className="fotter">
        <div className="icon-container" onClick={handleHomeClick}><IoHome /></div>
        <div className="icon-container" onClick={handleAccountClick}><FaUserLarge /> </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
