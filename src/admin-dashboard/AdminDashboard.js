import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
