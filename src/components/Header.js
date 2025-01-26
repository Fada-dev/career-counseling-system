import React from "react";
import { FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-links-container">
          <Link to="/BookingSession">
            <div className="schedule-session-button">
              <FaRegCalendarAlt
                style={{ marginRight: "5px", fontSize: "18px" }}
              />
              <span>Schedule Session</span>
            </div>
          </Link>
          <FaHome style={{ color: "white", fontSize: "25px" }} />
        </div>
      </div>
      <div className="logo-section">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/UoG_CoA_2017.svg"
            alt="University Logo"
          />
        </div>
        <div className="unit-name">
          <span className="university-name">UNIVERSITY OF</span>
          <br />
          <span className="ghana">GHANA</span>
          <br />
          <span className="unit">CAREERS AND COUNSELING CENTER</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
