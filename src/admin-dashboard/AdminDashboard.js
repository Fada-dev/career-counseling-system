import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  return (
    <div>
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
    <Footer />
    </div>

  );
};

export default AdminDashboard;
