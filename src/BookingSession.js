import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const BookingSession = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    otherName: "",
    phoneNumber: "",
    email: "",
    sessionType: "",
    preferredCounselor: "",
    specialRequests: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleConfirm = () => {
    navigate("/BookingSummary", { state: formData });
  };

  return (
    <div>
      <Header />
      <div className="booking-session">
        <h1 className="booking-title">Booking session</h1>
        <div className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Last name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="otherName">Other Name(s)</label>
              <input
                type="text"
                id="otherName"
                placeholder="Others"
                value={formData.otherName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone Number <span>*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="sessionType">Session Type</label>
              <select
                id="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
              >
                <option value="">Select session type</option>
                <option>Career Planning</option>
                <option>Counseling Services</option>
                <option>Stress Management</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="preferredCounselor">Preferred Counselor</label>
              <select
                id="preferredCounselor"
                value={formData.preferredCounselor}
                onChange={handleChange}
              >
                <option value="">Select Preferred Counselor</option>
                <option>Dr. Smith</option>
                <option>Ms. Johnson</option>
                <option>Dr. Anthony</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="specialRequests">
                Do you have any special requests?
              </label>
              <textarea
                id="specialRequests"
                rows="5"
                placeholder="Enter any special requests here..."
                value={formData.specialRequests}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button className="confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSession;
