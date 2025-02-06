import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaRegCalendarAlt, 
  FaUserFriends, 
  FaChartBar, 
  FaCog 
} from 'react-icons/fa';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-brand">Admin Panel</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink 
              to="/admin/dashboard" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaTachometerAlt className="sidebar-icon" />
              <span className="sidebar-link-text">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/bookings" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaRegCalendarAlt className="sidebar-icon" />
              <span className="sidebar-link-text">Bookings</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/counselors" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaUserFriends className="sidebar-icon" />
              <span className="sidebar-link-text">Counselors</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/report" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaChartBar className="sidebar-icon" />
              <span className="sidebar-link-text">Report</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/settings" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaCog className="sidebar-icon" />
              <span className="sidebar-link-text">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
