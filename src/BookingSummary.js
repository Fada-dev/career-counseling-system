import React from "react";

const BookingSummary = () => {
  return (
    <div className="booking-summary">
      <h1 className="summary-title">Schedule summary</h1>
      <div className="summary-container">
        <div className="summary-item">
          <label>Full Name</label>
          <div className="summary-input"></div>
        </div>
        <div className="summary-item">
          <label>Phone number</label>
          <div className="summary-input"></div>
        </div>
        <div className="summary-item">
          <label>Email</label>
          <div className="summary-input"></div>
        </div>
        <div className="summary-item">
          <label>Session Type</label>
          <div className="summary-input"></div>
        </div>
        <div className="summary-item">
          <label>Status</label>
          <div className="summary-input"></div>
        </div>
        <div className="summary-item">
          <label>Special Request</label>
          <div className="summary-input"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
