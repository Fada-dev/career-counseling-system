import React from "react";
import { useLocation } from "react-router-dom";

const BookingSummary = () => {
  const { state: formData } = useLocation();

  return (
    <div className="booking-summary">
      <h1 className="summary-title">Schedule summary</h1>
      <div className="summary-container">
        <div className="summary-item">
          <label>Full Name</label>
          <div className="summary-input">{formData.fullName}</div>
        </div>
        <div className="summary-item">
          <label>Phone number</label>
          <div className="summary-input">{formData.phoneNumber}</div>
        </div>
        <div className="summary-item">
          <label>Email</label>
          <div className="summary-input">{formData.email}</div>
        </div>
        <div className="summary-item">
          <label>Session Type</label>
          <div className="summary-input">{formData.sessionType}</div>
        </div>
        <div className="summary-item">
          <label>Preferred Counselor</label>
          <div className="summary-input">{formData.preferredCounselor}</div>
        </div>
        <div className="summary-item">
          <label>Special Request</label>
          <div className="summary-input">{formData.specialRequests}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
